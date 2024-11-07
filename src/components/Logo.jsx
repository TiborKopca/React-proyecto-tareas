import "../css/Logo.css";
import Proptypes from "prop-types";

function Logo({ src, alt}) {
  return <img src={`../${src}`} className="logo" alt={ alt } />;
}

export default Logo;

Logo.propTypes = {
  src: Proptypes.string.isRequired,
  alt: Proptypes.string.isRequired,
};