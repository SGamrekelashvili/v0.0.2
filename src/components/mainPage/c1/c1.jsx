import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./c1.scss";
import pic_p1 from "../../../images/p1.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function C1() {
  const [MenuDisplay, setMenuDisplay] = useState("none");

  const toggleMenu = () => {
    console.log(MenuDisplay);
    MenuDisplay === "none" ? setMenuDisplay("block") : setMenuDisplay("none");
  };
  const hideMenu = () => {
    setMenuDisplay("none");
  };
  const myRef1 = React.createRef();

  return (
    <div className="c1">
      <div className="bkg-white col px-0 px-md-3 d-md-flex justify-content-between ">
        {/* wide screens only logo */}

        <div className="d-none d-md-inline-block">Malls.Ge</div>

        {/* upper 1 */}

        <div className="d-md-inline-block align-top w-fa">
          <div className="text-center text-md-right mt-0 b neg-mb-2 un"></div>

          {/* navbar 2 - small screen only logo -  search bar  */}

          <div className="text-right mt-4 mt-md-0">
            {/* navbar 2  appears on wide screen only*/}

            <ul className="list-unstyled d-none  d-md-inline-block align-bottom  mt-4 mt-sm-0 mb-2 col-12 col-lg-8 text-center text-lg-right">
              <li
                className="d-sm-inline-block ml-2 mr-3 text-uppercase hover-text-red"
                onClick={() => toggleMenu()}
              >
                <small className="fw-700 pointer ls-1">კატეგორიები</small>
              </li>
              <li className="d-sm-inline-block ml-2 mr-3 text-uppercase text-grey hover-text-red">
                <small className="fw-500 pointer ls-1">.......</small>
              </li>
              <Link
                to={{
                  pathname: "/magazines",
                  state: { category: "latest" },
                }}
              >
                <li className="d-sm-inline-block ml-2 mr-3 text-uppercase text-grey hover-text-red">
                  <small className="fw-500 pointer ls-1">
                    ბოლოს დამატებულები
                  </small>
                </li>
              </Link>
            </ul>

            <div className="d-inline-flex justify-content-between  justify-content-md-end pr-0 col-12 col-lg-4">
              {/* small screen only logo */}

              <div className="d-inline-block d-md-none">
                <img
                  alt="adidas logo"
                  src="images/logo.webp"
                  className="logo-img2"
                />
              </div>

              {/* drop down button  appears on small screen only*/}

              <i
                onClick={() => toggleMenu()}
                className="fas fa-list-alt menu-icon hover-text-red pointer d-inline-block d-md-none"
              ></i>

              {/* search bar */}

              <div className="d-inline-flex justify-content-end position-relative align-top col col-sm-8 col-md-6 col-lg-10  pr-0">
                <form className="position-relative d-inline-block col pr-0">
                  <input
                    className="input-11 w-100 border-0 fw-500 px-2 pb-1  mb-2"
                    type="text"
                    name="search"
                    placeholder="ძიება"
                  />
                  <i
                    onClick={() => {
                      myRef1.current.click();
                    }}
                    className="fas fa-search input-search-icon hover-text-red"
                  ></i>
                  <button ref={myRef1} className="d-none" tybe="submit">
                    ..
                  </button>
                </form>
                <Link className="link-basic text-dark" to="/">
                  <i className="hover-text-red align-top mx-3 pt-2 fas fa-heart"></i>
                </Link>
                <Link className="link-basic text-dark" to="/">
                  <i className="hover-text-red align-top mx-2 pt-2 fas fa-shopping-bag"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* drop down menu*/}

      <div className="text-center pos-sm-rel of-hidden">
        <Carousel autoPlay centerMode infiniteLoop interval={2000}>
          <div>
            <img src={pic_p1} alt="CarouselImage" />
          </div>
          <div>
            <img src={pic_p1} alt="CarouselImage" />
          </div>
          <div>
            <img src={pic_p1} alt="CarouselImage" />
          </div>
        </Carousel>
        <div
          className="drop-menu w-100 bkg-white  position-absolute pt-0 pt-sm-5 text-left"
          onMouseLeave={() => hideMenu()}
          style={{
            top: "0",
            left: "0",
            zIndex: "9999999",
            display: MenuDisplay,
          }}
        >
          <i
            className="far fa-times-circle d-block d-sm-none text-danger text-right m-2 hover-text-red pointer"
            onClick={() => hideMenu()}
          ></i>
          <div className="col-12 col-lg-7 px-lg-4 d-sm-inline-flex justify-content-between">
            <Navbar hideMenu={hideMenu} />
          </div>
          <div className="col-12 col-lg-5 d-inline-block border-left align-top">
            <div className=" pl-lg-4 pb-5">
              <h6 className="text-capitalize text-dark fw-700 ls-1">sales</h6>
              <ul className="list-unstyled">
                <li className="text-capitalize text-secondary fs-14 my-2 ls-1 hover-text-red pointer fw-500">
                  <Link
                    to={{
                      pathname: "/magazines",
                      state: { category: "clothing" },
                    }}
                    className="link-basic text-grey text-capitalize fs-14 my-2 ls-1 hover-text-red pointer fw-500"
                  >
                    clothing
                  </Link>
                </li>
                <li className="text-capitalize text-secondary fs-14 my-2 ls-1 hover-text-red pointer fw-500">
                  <Link
                    to={{
                      pathname: "/magazines",
                      state: { category: "accessories" },
                    }}
                    className="link-basic text-grey text-capitalize fs-14 my-2 ls-1 hover-text-red pointer fw-500"
                  >
                    accessories
                  </Link>
                </li>
                <li className="text-capitalize text-secondary fs-14 my-2 ls-1 hover-text-red pointer fw-500">
                  <Link
                    to={{
                      pathname: "/magazines",
                      state: { category: "new arrivals" },
                    }}
                    className="link-basic text-grey text-capitalize fs-14 my-2 ls-1 hover-text-red pointer fw-500"
                  >
                    new arrivals
                    <span className="text-uppercase text-danger fw-700">
                      new
                    </span>
                  </Link>
                </li>
              </ul>
              <div>
                <div className="my-3 mr-4 d-inline-block of-hidden-fixed col-4 col-sm-3 col-lg-5 img-cont">
                  <img
                    alt="shoes"
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  />
                </div>
                <div className="my-3 mr-4 d-inline-block of-hidden-fixed col-4 col-sm-3 col-lg-5 img-cont">
                  <img
                    alt="t-shirt"
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar({ hideMenu }) {
  const any_combined_drop_lists = [
    [
      "trending",
      "new arrival",
      "best seller",
      "gift for mom",
      "all-white sneakers",
      "4D collection",
      "everybody basics",
      "pastels",
      "matching sets",
      "home workout gear",
      "loungewear",
    ],
    [
      "shoes",
      "new arrival",
      "originals",
      "runing",
      "soccer",
      "bascketball",
      "football",
      "skateboarding",
      "workout",
      "essentials",
      "sandals & slides",
    ],
    [
      "clothing",
      "new arrival",
      "pants",
      "hoodies & sweatshirts",
      "jackets & vests",
      "track suits",
      "short sleeve shirts",
      "t-shirts",
      "long sleeve shirts",
      "jerseys",
      "tights",
    ],
    [
      "accessories",
      "new arrivals",
      "bags & backBags",
      "hats & beanies",
      "phone cases",
      "watches",
    ],
  ];

  return any_combined_drop_lists.map((single_list, index) => (
    <div key={index} className="pl-xl-5 pb-sm-5 align-top text-left">
      <h6 className="text-capitalize drop-h6 fw-700 ls-1">{single_list[0]}</h6>
      <ul className="list-unstyled">
        {single_list.slice(1).map((single_list_item, index) => (
          <li
            key={index}
            className="text-capitalize fs-14 my-2 ls-1 hover-text-red pointer fw-500"
          >
            <Link
              to={{
                pathname: "/magazines",
                state: { category: `${single_list_item}` },
              }}
              onClick={() => hideMenu()}
              className="link-basic text-grey text-capitalize fs-13 my-2 ls-1 hover-text-red pointer fw-500"
            >
              {single_list_item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ));
}
