import { Link } from 'react-router-dom';
import './footer.css';
import fbImg from './../../img/socials/fb.svg';
import instImg from './../../img/socials/inst.svg';
import twImg from './../../img/socials/tw.svg';
import inImg from './../../img/socials/in.svg';

const  Footer = () => {
    return ( <section className="footer">
			<div className="container">
				<div className="footer__text">
					<div className="footer__social">
						<div className='p_footer_h'>	
								<span >FASHION</span>				
						</div>
						<div className="p_footer">
							<span >Complete your style with<br></br> awesome clothes from us.</span>
						</div>
                        <div className="footer__icons">
							<Link to="/"><img src={fbImg} alt=''></img></Link>
							<Link to="/"><img src={instImg} alt=''></img></Link>		
                            <Link to="/"><img src={twImg} alt=''></img></Link>
							<Link to="/"><img src={inImg} alt=''></img></Link>
						</div>	
					</div>	
                <div className="footer__content">
					<div className="footer__text">
                        <div className="footer_column">
                            <ul className="p_footer">
                                 <li className='p_footer_width'>Company</li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Contact us</Link></li>
                                <li><Link to="/">Support</Link></li>
                                <li><Link to="/">Careers</Link></li>
                            </ul>
						</div>
						</div>
						</div>
						<div className="footer__content">
						<div className="footer__text">
                    <div className="footer_column">
                            <ul className="p_footer">
                                 <li className='p_footer_width'>Quick Link</li>
                                <li><Link to="/">Share Location</Link></li>
                                <li><Link to="/">Orders Tracking</Link></li>
                                <li><Link to="/">Size Guide</Link></li>
                                <li><Link to="/">FAQs</Link></li>
                            </ul>
						</div>
						</div>
						</div>
						<div className="footer__content">
						<div className="footer__text">
                        <div className="footer_column">
                            <ul className="p_footer">
                                 <li className='p_footer_width'>Legal</li>
                                <li><Link to="/terms-and-conditions">Terms & conditions</Link></li>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            </ul>
						</div>
						</div>
						</div>
				
                </div>
			</div>
		</section>);
}
 
export default Footer;