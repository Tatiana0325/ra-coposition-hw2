//Baner

import React from "react";
import PropTypes from "prop-types";

export default function Baner(props) {
  const { img, href } = props;
  return (
    <React.Fragment>
      <a href={href}>
        <img src={img} alt="Baner" />
      </a>
    </React.Fragment>
  );
}

Baner.propTypes = {
  img: PropTypes.string,
  href: PropTypes.string,
};
