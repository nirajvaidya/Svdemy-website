import Image from 'next/image';
import image from '../public/linkedin.svg';
const Footer = () => {
    return(
      <footer className="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-0a24"><div className="u-clearfix u-sheet u-sheet-1">
      <p className="u-align-left u-small-text u-text u-text-variant u-text-1"><a className="u-text-1" href="mailto:contact@softwill.in">contact@Svdemy</a>, <span> Mo : 7558335702</span></p>
      <p className="u-align-center-lg u-align-center-md u-align-center-xl u-align-left-sm u-align-left-xs u-small-text u-text u-text-variant u-text-2">Svdemy</p>
      <p className="u-align-left u-small-text u-text u-text-variant u-text-3">
        Connect on
        <span className="u-icon u-icon-circle u-text-palette-1-base u-icon-1">
          <a href="https://www.linkedin.com/company/72974697/admin" target="_blank" rel="noreferrer">
          <Image src={image} height={35} width={35}/>
          </a>
        </span>
      </p>
    </div></footer>
    )
}
export default Footer;