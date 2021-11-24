import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer-1">
        <div className="main-footer widgets-dark typo-light">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Quick Links<span></span>
                  </h5>
                  <ul>
                    <li>
                      <div className="thumb-content">
                        <a href="#.">Get Started</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="#.">Top Leaders</a>
                      </div>
                    </li>

                    <li>
                      <div className="thumb-content">
                        <a href="#.">Event/Tickets</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="#.">News</a>
                      </div>
                    </li>

                    <li>
                      <div className="thumb-content">
                        <a href="#.">About</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Contact Us<span></span>
                  </h5>
                  <ul className="redes">
                    <li>
                      <a href="https://www.facebook.com/">
                        <img
                          className="redesImg"
                          src="https://i.imgur.com/Nnk4wYz.png"
                          alt="facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/home">
                        <img
                          className="redesImg"
                          src="https://i.imgur.com/HEPNX5P.png"
                          alt="twitter"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/?hl=es">
                        <img
                          className="redesImg"
                          src="https://i.imgur.com/Jpn0gT4.png"
                          alt="instagram"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@domain.com" title="glorythemes">
                        feltwell@argentina.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
