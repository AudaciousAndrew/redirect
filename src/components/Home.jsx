import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <article className="main">
        <h1 className="caption">Tracking Domain</h1>
        <p>
          This domain is used by TrafficTubes for collection, measurement and
          <br />
          analysis of web data.
        </p>
        <p>
          Learn more! Visit{" "}
          <Link
            target="_blank"
            to={{ pathname: "https://www.traffictubes.com" }}
            className="link"
          >
            traffictubes.com
          </Link>{" "}
          and read our Privacy policy.
        </p>
        <p>
          If you believe that one of our customers has been using TrafficTubes
          <br />
          tracking domain for malicious purposes,
          <br /> please contact us at{" "}
          <a href="mailto: info@traffictubes.com" className="link">
            info@traffictubes.com
          </a>
          .
        </p>
      </article>
    </>
  );
};

export default Home;
