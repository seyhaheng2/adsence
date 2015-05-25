$(function() {
    var routes = (
        <ReactRouter.Route>
          <ReactRouter.DefaultRoute name="index" handler={Posts}/>
          <ReactRouter.Route name="show" path="/posts/:id" handler={PostShow}/>
        </ReactRouter.Route>
    );
    ReactRouter.run(routes, function(Handler) {
        React.render(<Handler />, document.getElementById('main'));
    });
});