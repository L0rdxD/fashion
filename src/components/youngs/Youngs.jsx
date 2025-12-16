import Card from '../card/Card';
import './youngs.css';

import promo01Img from './../../img/images/promo-01.jpg';
import promo02Img from './../../img/images/promo-02.jpg';



const Youngs = () => {
	return (
		<section className="youngs">
			<div className="container">
				<div className="youngs__header">
					<h2 className="title-2">Young’s Favourite</h2>
				</div>
				<div className="youngs__cards">
					<Card title="Trending on instagram" img={promo01Img} />
					<Card title="All Under $40" img={promo02Img} />
				</div>
			</div>
		</section>
	);
};

export default Youngs;
