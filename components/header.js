import Link from "next/link";

const Header = ({ page, route}) => {
    return(
        <header
        className="u-clearfix u-header u-sticky u-sticky-a8fb u-header"
        id="sec-fce5"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="logo-wrap">
            <Link href="/">
            <a
              className="u-image u-logo u-image-1"
              data-image-width="80"
              data-image-height="40"
            >
              Svdemy
            </a>
            </Link>
          </div>
          <div>
            <Link href={route}>
            <a className="career">
              {" "}
              {page}
            </a>
            </Link>
          </div>
        </div>
      </header>
    )
}
export default Header;