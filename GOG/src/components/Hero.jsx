import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      {/* Hero Head Frame */}
      <div className="hero-head">
        <h1 className="hero-text">Message From The Founders</h1>
      </div>

      {/* Frame 119 */}
      <div className="frame-119">
        {/* Frame 74 */}
        <div className="frame-74">
          {/* Frame 74 Image */}
          <div className="frame-74-img">
            <img
              src="./assets/Images/f1.png"
              alt="Frame 74 Image"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px 0 0 0",
              }}
            />
          </div>

          {/* Frame 77 */}
          <div className="frame-77">
            {/* Frame 77 Quotes */}
            <div className="frame-77-qoutes">
              {/* Optional image or content for quote */}
              <img src="./assets/Images/qoutes.png" alt="Quote" className="quote-img" />
            </div>
            {/* Frame 76 */}
            <div className="frame-76">
              <div className="frame-775">
                <div className="frame-775-paragraph">
                  Our Vision Is To Create A Modern-Day Gurukul That Provides
                  You With The Skills, Resources, And Opportunities To Excel. We
                  Are Committed To Ensuring That You Have Access To Quality
                  Education And The Tools Needed To Succeed In Today's
                  Competitive World.
                </div>
                <div className="frame-775-hl">
                  Stay Curious, Stay Committed, And Together, Let's Achieve
                  Greatness.
                </div>
              </div>
              {/* Frame 776 */}
              <div className="frame-776">
                <div className="frame-79">
                  {/* Heading */}
                  <h4 className="frame-79-h4">Mr. Neeraj Sahu</h4>
                  {/* Image Frame: Link Image */}
                  <div className="frame-79-link-img">
                    <img
                      src="./assets/Images/link_logo.png"
                      alt="Link Icon"
                      className="link-img"
                      onClick={() => window.open("https://www.linkedin.com/in/neeraj-sahu-geeksofgurukul/")}
                    />
                  </div>
                  {/* Image Frame: Dot Right */}
                  <div className="frame-79-dot-right-img">
                    <img src="./assets/Images/dot_right.png" alt="" className="dot-img" />
                  </div>
                </div>
                {/* Frame 776 COO */}
                <div className="frame-776-coo">
                  <h4 className="frame-776-coo-h4">Co-Founder & COO</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Frame 75 */}
        <div className="frame-75">
          {/* Frame 87*/}
          <div className="frame-87">
            <div className="frame-88-qoutes">
              {/* Optional image or content for quote */}
              <img src="./assets/Images/qoutes.png" alt="Quote" className="quote-img" />
            </div>
            {/* Frame 76 */}
            <div className="frame-86">
              <div className="frame-875">
                <div className="frame-875-paragraph">
                  In Today's Rapidly Evolving Technological Landscape, It's
                  Crucial To Stay Appropriately Skilled And Up-To-Date With
                  Dynamic Market Trends. At Geeks Of Gurukul, We Pride Ourselves
                  On Teaching Students The Latest, Most In-Demand Technologies,
                  Ensuring That You Are Well-Prepared And Job-Ready For Your
                  Dream Companies.
                </div>
                <div className="frame-875-hl">
                  Stay Innovative, Stay Determined, And Together, Let's Shape A
                  Brighter Future.
                </div>
              </div>
              {/* Frame 776 */}
              <div className="frame-876">
                <div className="frame-89">
                  {/* Image Frame: Dot Right */}
                  <div className="frame-89-dot-left-img">
                    <img src="./assets/Images/dot_left.png" alt="" className="dot-img" />
                  </div>
                  {/* Image Frame: Link Image */}
                  <div className="frame-89-link-img">
                    <img
                      src="./assets/Images/link_logo.png"
                      alt="Link Icon"
                      className="link-img"
                      onClick={() => window.open("https://www.linkedin.com/in/ajay987/", "_blank")}
                    />
                  </div>
                  {/* Heading */}
                  <h4 className="frame-89-h4">Mr. Ajay Katana</h4>
                </div>
                {/* Frame 776 COO */}
                <div className="frame-876-cto">
                  <h4 className="frame-876-cto-h4">Co-Founder & CTO</h4>
                </div>
              </div>
            </div>
          </div>
          {/* lf */}
          {/* Frame 87 Image */}
          <div className="frame-87-img">
            <img src="./assets/Images/f2.png" alt="Frame 87 Image" className="image-87" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
