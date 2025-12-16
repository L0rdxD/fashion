import './footer.css'
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
							<span >Complete your style with awesome<br></br> clothes from us.</span>
						</div>
                        <div className="footer__icons">
							<a href='#'>
							<img src={fbImg} alt=''></img>
							</a>
							<a href='#'>
							<img src={instImg} alt=''></img>
							</a>
                            <a href='#'>
							<img src={twImg} alt=''></img>
							</a>
                            <a href='#'>
							<img src={inImg} alt=''></img>
							</a>
						</div>	
					</div>	
                <div className="footer__content">
					<div className="footer__text">
                        <div className="footer_column">
                            <ul className="p_footer">
                                 <li className='p_footer_white'><a href='#'>Company</a></li>
                                <li><a href='#'>About</a></li>
                                <li><a href='#'>Contact us</a></li>
                                <li><a href='#'>Support</a></li>
                                <li><a href='#'>Careers</a></li>
                            </ul>
						</div>
                    <div className="footer_column">
                            <ul className="p_footer">
                                 <li className='p_footer_white'><a href='#'>Quick Link</a></li>
                                <li><a href='#'>Share Location</a></li>
                                <li><a href='#'>Orders Tracking</a></li>
                                <li><a href='#'>Size Guide</a></li>
                                <li><a href='#'>FAQs</a></li>
                            </ul>
						</div>
                        <div className="footer_column">
                            <ul className="p_footer">
                                 <li className='p_footer_white'><a href='#'>Legal</a></li>
                                <li><a href='#'>Terms & conditions</a></li>
                                <li><a href='#'>Privacy Policy</a></li>
                            </ul>
						</div>
					</div>	
				</div>
                </div>
			</div>
		</section>);
}
 
export default Footer;