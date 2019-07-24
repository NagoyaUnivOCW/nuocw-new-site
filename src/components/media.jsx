/* default font-size expected 16px */
import PropTypes from "prop-types"

const sizes = {
  desktop: 62.5,
  tablet: 47.5,
  phone: 20,
}

const Media = (property, desktopValue, tabletValue, phoneValue) => {
  return `
      @media screen and (max-width: ${sizes.tablet}em) {
          ${property}: ${phoneValue}
      }
      @media screen and (min-width: ${sizes.tablet}em) {
          ${property}: ${tabletValue}
      }
      @media screen and (min-width: ${sizes.desktop}em) {
          ${property}: ${desktopValue}
      }
      `
}

Media.propTypes = {
  property: PropTypes.string,
  desktopValue: PropTypes.string,
  tabletValue: PropTypes.string,
  phoneValue: PropTypes.string,
}

export default Media
