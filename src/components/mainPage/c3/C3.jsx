import React from "react";
import { Link } from "react-router-dom";

import "./C3.scss";

//dynamic images for cloth
// [beta version] ==> in real application these images would be dynamically loaded fron an Actual endpoint

import pic108 from "../../../images/108.jpg";

const C3 = () => {
  return (
    <div className="c2 bg-black text-center position-relative over-hidden">
      <h1 className="text-uppercase ">
        <span className="resp-h1 mx-1 py-1 px-2 bkg-white fw-600">მოძებნე</span>
        <span className="resp-h1 mx-1 text-white fw-800"> კატეგორიებით </span>
      </h1>

      <ul className="list-unstyled my-4">
        <li className="c2-li text-capitalize text-white d-inline-block lead pointer mx-2 mx-sm-5 pb-0 pb-sm-2 fw-200 opacity-66">
          კაცი
        </li>
        <li className="c2-li text-capitalize text-white d-inline-block lead pointer mx-2 mx-sm-5 pb-0 pb-sm-2 fw-200 opacity-66">
          ქალი
        </li>
        <li className="c2-li text-capitalize text-white d-inline-block lead pointer mx-2 mx-sm-5 pb-0 pb-sm-2 fw-200 opacity-66">
          ბავშვები
        </li>
      </ul>

      <div className="text-center px-1 px-sm-2 px-md-5">
        <div className="position-relative d-inline-block align-bottom w-17 mb-2 mb-md-0 img-con  mx-1 mx-md-4">
          <img alt="shoes" src={pic108} className="w-100 " />
          <span className="position-absolute text-capitalize w-fa">
            ფეხსაცმელი
          </span>
          <Link to="/" className="position-absolute text-uppercase">
            გადასვლა
          </Link>
        </div>

        <div className="position-relative d-inline-block align-bottom w-17 mb-2 mb-md-0 img-con  mx-1 mx-md-4">
          <img alt="clothes" src={pic108} className="w-100 " />
          <span className="position-absolute text-capitalize w-fa">
            ტანსაცმელი
          </span>
          <Link to="/" className="position-absolute text-uppercase">
            გადასვლა
          </Link>
        </div>

        <div className="position-relative d-inline-block align-bottom w-17 mb-2 mb-md-0 img-con  mx-1 mx-md-4">
          <img alt="accessories" src={pic108} className="w-100 " />
          <span className="position-absolute text-capitalize w-fa">
            აქსესუარები
          </span>
          <Link to="/" className="position-absolute text-uppercase">
            გადასვლა
          </Link>
        </div>

        <div className="position-relative d-inline-block align-bottom w-17 mb-2 mb-md-0 img-con  mx-1 mx-md-4 last">
          <img alt="sport bra" src={pic108} className="w-100 " />
          <span className="position-absolute text-capitalize w-fa">სხვა</span>
          <Link to="/" className="position-absolute text-uppercase">
            გადასვლა
          </Link>
        </div>
      </div>
      <img alt="section border" src="images/79.png" className="clouds1 rc" />
    </div>
  );
};

export default C3;
