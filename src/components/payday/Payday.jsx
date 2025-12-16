import './payday.css'
import paydayImg from './../../img/images/payday-img.jpg';

const Payday = () => {
    return ( <section className="payday">
				<div className="payday__content">
                    	<div className="payday__img">
						<img src={paydayImg} alt="payday" />
					</div>
					<div className="payday__text">
						<div className="payday__title">
							<span class="highlight1">
								<span>PAYDAY</span>
							</span>
								<span>UNIQUE</span>
						</div>
						<div className="payday__desc">
							Spend minimal $100 get 30% off <br></br> voucher code for your next purchase
						</div>
                         <div className="payday__desc">
							<b>1 June - 10 June 2021</b>
						</div>
                        <div className="payday__desc">
							*Terms & Conditions apply
						</div>
						<div className="payday__btn-wrapper">
							<a href="#!" className="payday__btn">
								Shop Now
							</a>
						</div>
					</div>
				</div>
		</section> );
}
 
export default Payday;