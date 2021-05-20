import React from "react";
// a pluging to handle the horizontal slider
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./C2.scss";
import pic108 from "../../../images/108.jpg";

const responsive = {
  0: {
    items: 2,
    margin: 10,
  },
  450: {
    items: 2,
    margin: 20,
  },
  600: {
    items: 3,
    margin: 30,
  },
  1000: {
    items: 4,
    margin: 40,
  },
};
const pics = [
  [pic108, "250"],
  [pic108, "350"],
  [pic108, "150"],
  [pic108, "450"],
  [pic108, "250"],
  [pic108, "300"],
  [pic108, "400"],
];

export default function C2(props) {
  return (
    <>
      <div className="c4 text-center bkg-white position-relative over-hidden">
        <h1
          style={{
            textAlign: props.headingTextAlign,
            paddingLeft: props.pl,
          }}
          className="text-uppercase text-black  mx-0 mx-sm-5 mb-0 mb-sm-5"
        >
          <span className="mx-1 py-1 px-2 bg-black text-white fw-600">
            პოპულარული
          </span>
          <span className="mx-1  fw-800">მაღაზიები</span>
        </h1>

        <OwlCarousel
          className="owl-theme bkg-white"
          loop
          center
          dots={false}
          responsive={responsive}
        >
          {pics.map((p, index) => (
            <div
              key={index}
              className="item text-left pt-5 slider-item-hover pointer"
            >
              <div className="position-relative w-100 mb-0 mb-sm-4">
                <img
                  alt="women clothes"
                  src={p[0]}
                  className="faded w-100 mb-4"
                />
                {/* <img
                  alt="360 degree icon"
                  src="images/360b.png"
                  className="position-absolute w-25 icon-360"
                /> */}
              </div>
              <h5 className="text-capitalize mb-1">trefoil t-shirt</h5>
              <span className="price d-block text-capitalize text-grey fw-500">
                women clothes
              </span>
              <span className="price d-block text-grey fw-500 text-uppercase">
                egb {p[1]}
              </span>
            </div>
          ))}
        </OwlCarousel>
      </div>
      <hr className="hz1 mx-5 my-0" />
      <hr className="hz2 mb-2 w-50 mx-auto" />
    </>
  );
}
