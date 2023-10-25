import "./Info.css";
import Transform from "../images/mobile/image-transform.jpg";
import TransformDesktop from "../images/desktop/image-transform.jpg";
import StandOut from "../images/mobile/image-stand-out.jpg";
import StandOutDesktop from "../images/desktop/image-stand-out.jpg";

const Info = () => {
  return (
    <>
      <div className="row">
          <div className="text-tile">
              <h2>Transform your brand</h2>
              <p className={"info"}>
                  We are a full-service creative agency specializing in helping brands
                  grow fast. Engage your clients through compelling visuals that do
                  most of the marketing for you.
              </p>
              <button className={"learn-more yellow"}>LEARN MORE</button>
          </div>
        <div className="img-tile">
            <picture>
                <source media="(min-width: 768px)" srcSet={TransformDesktop} />
                <img src={Transform} alt="lemon" className={"tile-img"} />
            </picture>
        </div>

      </div>
      <div className="row">
          <div className="img-tile">
              <picture>
                  <source media="(min-width: 768px)" srcSet={StandOutDesktop} />
                  <img src={StandOut} alt="stand out" className={"tile-img"} />
              </picture>
          </div>
          <div className="text-tile">
              <h2>Stand out to the right audience</h2>
              <p className={"info"}>
                  Using a collaborative formula of designers, researchers,
                  photographers, videographers, and copywriters, we’ll build and extend
                  your brand in digital places.{" "}
              </p>
              <button className={"learn-more red"}>LEARN MORE</button>
          </div>


      </div>
<div className={"services-row"}>
    <div className="graphic-design">
        <div className="content">
            <h2 className={"overlay"}>Graphic Design</h2>
            <p>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
            </p>
        </div>
    </div>
    <div className="service">
        <div className="content">
            <h2 className={"overlay"}>Photography</h2>
            <p>
                Increase your credibility by getting the most stunning, high-quality
                photos that improve your business image.
            </p>
        </div>
    </div>
</div>

    </>
  );
};

export default Info;
