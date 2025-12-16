import './download.css';
import downloadImg from './../../img/images/vouchers-img.png';
import appStoreImg from './../../img/icons/app-store.png';
import googlePlayImg from './../../img/icons/google-play.png';


const Downloade = () => {
    return (  
        <section className="download">
			<div className="container">
				<div className="download__content">
					<div className="download__text">
						<div className="download__title">
							<span>
								DOWNLOAD APP & <br></br>
							                                GET THE VOUCHER!
                            </span>
						</div>
						<div className="download__desc">
							<span>Get 30% off for first transaction using <br></br>
                             Rondovision mobile app for now.</span>
						</div>
						<div className="download__icons">
							<a href='#'>
							<img src={appStoreImg} alt=''></img>
							</a>
							<a href='#'>
							<img src={googlePlayImg} alt=''></img>
							</a>
						</div>
                    </div>
					<div className="download__img">
						<img src={downloadImg} alt="download" />
					</div>
				</div>
			</div>
		</section>
    );
}
 
export default Downloade;