import './join.css'
const Join = () => {
    return ( <section className="join">
			<div className="container">
				<div className="join__content">
					<div className="join__text">
						<div className="join__title">	
								<span>JOIN SHOPPING COMMUNITY TO<br></br>GET MONTHLY PROMO</span>				
						</div>
						<div className="join__desc">
							Type your email down below and be young wild generation
						</div>
                        <form className='padding_form'>
          <div className="input_group">
             <input type="email" className="input_text" id="email" placeholder="Add your email here"></input>
            <button type="button" className="btn_send">
                <a href="#!" className="text_send">
								SEND
							</a></button>
          </div>
        </form>
		
					</div>
					
				</div>
			</div>
		</section>);
}
 
export default Join;