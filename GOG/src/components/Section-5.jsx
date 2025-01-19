import "./section-5.css";
import sapLogo from "../../public/assets/HiringPartner/SAP.png";
import hitachiLogo from "../../public/assets/HiringPartner/Hitachi.png";
import maerskLogo from "../../public/assets/HiringPartner/Maersk.png";
import spLogo from "../../public/assets/HiringPartner/S&P.png";
import concentrixLogo from "../../public/assets/HiringPartner/Concentrix.png";
import zigmentLogo from "../../public/assets/HiringPartner/Zigment.png";

function Section_5() {
  const row = [
    {
      src: sapLogo,
      width: "131px",
      height: "100px",
      iwidth: "60px",
      iheight: "30px",
    },
    {
      src: hitachiLogo,
      width: "174px",
      height: "100px",
      iwidth: "103px",
      iheight: "30px",
    },
    {
      src: zigmentLogo,
      width: "197px",
      height: "100px",
      iwidth: "150px",
      iheight: "30px",
    },
    {
      src: maerskLogo,
      width: "198px",
      height: "100px",
      iwidth: "128px",
      iheight: "30px",
    },
    {
      src: spLogo,
      width: "206px",
      height: "100px",
      iwidth: "136px",
      iheight: "30px",
    },
    {
      src: concentrixLogo,
      width: "261px",
      height: "100px",
      iwidth: "191px",
      iheight: "30px",
    },
    {
      src: sapLogo,
      width: "131px",
      height: "100px",
      iwidth: "60px",
      iheight: "30px",
    },
    {
      src: hitachiLogo,
      width: "174px",
      height: "100px",
      iwidth: "103px",
      iheight: "30px",
    },
    {
      src: zigmentLogo,
      width: "197px",
      height: "100px",
      iwidth: "150px",
      iheight: "30px",
    },
    {
      src: maerskLogo,
      width: "198px",
      height: "100px",
      iwidth: "128px",
      iheight: "30px",
    },
    {
      src: spLogo,
      width: "206px",
      height: "100px",
      iwidth: "136px",
      iheight: "30px",
    },
    {
      src: concentrixLogo,
      width: "261px",
      height: "100px",
      iwidth: "191px",
      iheight: "30px",
    },
  ];

  return (
    <div className="container">
      <div className="blur-effect" />
      <div className="head-5">
        <h1>Our Hiring Partners 400+</h1>
      </div>
      <div className="frame100">
        <div className="component16">
          <ImgGroup data={row} />
          <ImgGroup data={row} />
          <ImgGroup data={row} />
          <ImgGroup data={row} />
          <ImgGroup data={row} />
          <ImgGroup data={row} />
          <ImgGroup data={row} />
          <ImgGroup data={row} />
        </div>
        <div className="component17">
          <ImgGroup data={row} />
          <ImgGroup data={row} />
          <ImgGroup data={row} />
          <ImgGroup data={row} />
          <ImgGroup data={row} />
          <ImgGroup data={row} />
          <ImgGroup data={row} />
          <ImgGroup data={row} />
        </div>
      </div>
    </div>
  );
}

function ImgGroup({ data }) {
  return (
    <div className="img_group">
      {data.map((el, index) => (
        <DynamicRowBlock key={index} width={el.width} height={el.height}>
          <ImgBlock key={index} width={el.iwidth} height={el.iheight}>
            <img
              src={el.src}
              alt="Hiring Partner Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </ImgBlock>
        </DynamicRowBlock>
      ))}
    </div>
  );
}

function DynamicRowBlock({ width, height, children }) {
  return (
    <div
      style={{
        width: width || "auto",
        height: height || "auto",
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "9px",
      }}
    >
      {children}
    </div>
  );
}

function ImgBlock({ width, height, children }) {
  return (
    <div
      style={{
        width: width || "auto",
        height: height || "auto",
      }}
    >
      {children}
    </div>
  );
}

export default Section_5;
