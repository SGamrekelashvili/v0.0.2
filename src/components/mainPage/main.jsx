import React from "react";
import LazyLoad from "react-lazyload";
import C2 from "./c2/C2";
import C3 from "./c3/C3";
import AdidasBtn from "./AdidasBtn/AdidasBtn";
export default function Main() {
  return (
    <>
      <div className="yellow mt-5 py-3 py-sm-5 text-center d-block d-lg-flex justify-content-around bkg-white">
        <h3 className="text-black text-uppercase my-md-3 d-lg-inline-block">
          დარეგისტრირდი და განათავსე შენი მაღაზია უფასოდ
        </h3>
        <div className="d-lg-inline-block  mb-md-3 mt-md-3">
          <AdidasBtn text="შესვლა " />
        </div>
      </div>
      <C3 />
      <LazyLoad once offset={100} height={200}>
        <C2
          headingTextAlign={"center"}
          pl={"0rem"}
          heading1={"trinding"}
          heading2={"this week"}
        />
      </LazyLoad>
    </>
  );
}
