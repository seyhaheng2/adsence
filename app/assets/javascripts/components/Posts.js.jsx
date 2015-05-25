var Posts= React.createClass({
	getInitialState: function(){
		return{
			post: []
		}
	},
	 componentDidMount: function(){
		$.ajax({
			url: "/posts",
			type: 'GET',
			dateType: 'json',
			success: function (data){
				this.setState({
					post: data
				});
			}.bind(this)
		})
	},
	render: function() {
			var s = this.state;
			return (
				<div>
					<Category posts={s.post} />
				</div>
			);
	}
});

var Category = React.createClass({
    render:function(){
        var p = this.props;
        var item = p.posts.map(function(post){
        	console.log(post);
        	return(
        	<div className={"box-item box-"+ post.bg_width}>
				<div className="box-post">
					<span className="category" style={{background: '#547ebc'}}>
						<a href="#" rel="tag">Technology</a></span> 
							<span className="category" style={{background: '#64c100'}}>
						<a href="#" rel="tag">Travel</a>
						</span>

						<h1 className="post-title">
							<ReactRouter.Link to="show" params={{id: post.id}} className="btn btn-default">{post.name}</ReactRouter.Link>
        				</h1>
        				<p>dsafds</p>

						<span className="meta">
							<span>
								<img src="assets/comments.png" /> 
								<a href="2015/01/19/the-best-apps-to-enhance-your-next-trip/index.html#respond">No Comments</a>
							</span>
							<span>
								<img src="assets/date.png" /> Jan 19, 2015
							</span>
						<span>
						<img alt src="http://2.gravatar.com/avatar/836b9dc19962faf096b7acbcd4cd870f?s=20&d=20&r=g" srcset="http://2.gravatar.com/avatar/836b9dc19962faf096b7acbcd4cd870f?s=40&d=20&r=g 2x" className="avatar avatar-20 photo" height={20} width={20} /> 
						by <a href="author/bebel/index.html">Bebel Nevermind</a>                      </span>
					</span>
				</div>
				<img src={post.image.url} alt="City Marathon 2015" style={{height: '334px'}} className="" data-no-retina />        
			</div>
        	)
        })

        return(
        	<div id="bebel-infinite-scroll" className="box-container clearfix" style={{"marginBottom":"130px"}}>
        	{item}
        	</div>
        )
    }
})