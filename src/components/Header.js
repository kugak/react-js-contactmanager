import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  //de structure
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

// Default props
Header.defaultProps = {
  branding: "My App"
};

// Header prop types (validates as string)
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
