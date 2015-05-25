


var Header = React.createClass({

  render: function() {
      return (
        <div>
          <div className="menu-left clearfix">
            <div className="logo">
              <a href="#">
                <img src="assets/logo.png" alt="logo" />
              </a>
            </div>
            <a className="navbtn home-navbtn" href="#" />
            <div className="site-menu pages">
              <ul id="menu-main-menu" className="menu">
                <li><a href="/#">Home</a></li>
                <li className="poststrigger02">
                  <a href="">Pop up Menu</a>
                  <ul className="sub-menu sub-menu-id-243 special02 bebel-mega-menu posts03 column-count-3">
                    <li className="special">
                      <h1>Post Types</h1>
                      <ul className="sub-menu bebel-mega-sub-menu sub-menu-id-244">
                        <li><a href="2015/01/19/we-checked-the-newest-running-gear-for-you/index.html">Small Image</a></li>
                        <li><a href="2015/01/19/the-best-apps-to-enhance-your-next-trip/index.html">Big Image</a></li>
                        <li><a href="2015/01/19/beautiful-untouched-places-you-must-visit/index.html">Huge Image</a></li>
                      </ul>
                      <h1>Special Posts</h1>
                      <ul className="sub-menu bebel-mega-sub-menu sub-menu-id-297">
                        <li><a href="2015/01/17/hello-world/index.html">YouTube Video</a></li>
                        <li><a href="2015/01/19/small-business-owner-rejoice/index.html">SoundCloud</a></li>
                      </ul>
                    </li><li className="special">
                      <div className="widget-container">
                        <aside className="latest_post_category widget" id="bebelthemewidgetlatestpostofcategory-3">
                          <span className="category" style={{background: '#f22121'}}>Sport</span>
                          <div>
                            <a href="2015/01/19/we-checked-the-newest-running-gear-for-you/index.html">
                              <img src="assets/vespa1-42x42.jpg" alt="We checked running routes for you" className="img-effect" data-no-retina />  </a>
                            <h3><a href="2015/01/19/we-checked-the-newest-running-gear-for-you/index.html">We checked running routes</a></h3>
                            <p>The languages only differ</p>
                          </div>
                          <div>
                            <a href="2015/01/19/surfers-paradise-about-to-get-even-better/index.html">
                              <img src="assets/surfing1-42x42.jpg" alt="Surfers paradise about to get even better" className="img-effect" data-no-retina />  </a>
                            <h3><a href="2015/01/19/surfers-paradise-about-to-get-even-better/index.html">Surfers paradise about to</a></h3>
                            <p>The languages only differ</p>
                          </div>
                          <div>
                            <a href="2015/01/19/the-story-of-a-college-graduate-who-made-it-big-time/index.html">
                              <img src="assets/surfer-42x42.jpg" alt="The story of a college graduate who made it big time" className="img-effect" data-no-retina />  </a>
                            <h3><a href="2015/01/19/the-story-of-a-college-graduate-who-made-it-big-time/index.html">The story of a</a></h3>
                            <p>The languages only differ</p>
                          </div>
                          <div>
                            <a href="2015/01/19/yoga-will-change-the-way-you-interact-with-others/index.html">
                              <img src="assets/dirt-42x42.jpg" alt="Motorcross is more sophisticated than you thought" className="img-effect" data-no-retina />  </a>
                            <h3><a href="2015/01/19/yoga-will-change-the-way-you-interact-with-others/index.html">Motorcross is more sophisticated</a></h3>
                            <p>The languages only differ</p>
                          </div>
                        </aside>
                      </div>
                    </li>
                    <li className="special">
                      <div className="widget-container">
                        <aside className="widget_text widget" id="text-2">
                          <div className="textwidget"><img src="assets/advertisment.jpg" alt="Bebel Advert" style={{width: 293, height: 328}} /></div>
                        </aside>
                      </div>
                    </li>
                    <br className="clearfix" />
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <form id="header-searchform" method action="#">
            <input id="header-s" type="text" placeholder="Searching...." autocomplete="off" name="s" />
            <input style={{display: 'none'}} id="header-searchsubmit" type="submit" defaultValue="Search" />
          </form>
        </div>
      );
  }

});

