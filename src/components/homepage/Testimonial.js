import '../style.css';

function Testimonial(){


    return(
        <div className="container-fluid mt-5" >
		<h2 className="text-center" id="testimonial">Testimonial</h2>
		<p className="p-3 pb-5" style={{textAlign:'center'}}>Berbagai review positif dari para pelanggan kami</p>
		<div className="row">
			<div className="col-md-12">
				<div className="carousel slide" id="carouselExampleIndicators" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="row text-center">
								<div className="col-lg-9">
									<div className="single-box mt-2">
										<div className="row" id="carousel-body">
											<div className="col-md-3">
												<img src="img/img_photo.png" alt="" />
											</div>
											<div className="col-md-9 text-start">
												<div className="rating">
													<img src="img/rate.png" alt="star-rating" className="rating" />
												</div>
												<div className="testimonial-text">
													<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
													<p>John Dee 32, Bromo</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
						<div className="carousel-item">
							<div className="row text-center">
								<div className="col-lg-9">
									<div className="single-box mt-2">
										<div className="row" id="carousel-body">
											<div className="col-md-3">
												<img src="img/testi_girl.png" alt="" className="testi-pic" />
											</div>
											<div className="col-md-9 text-start">
												<div className="rating">
													<img src="img/rate.png" alt="star-rating" className="rating" />
												</div>
												<div className="testimonial-text">
													<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
													<p>John Dee 32, Bromo</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
							<span className="" aria-hidden="true"><img src="img/left_icon.png" alt="" onmouseover="this.src='img/left_icon_hover.png'" onmouseout="this.src='img/left_icon.png'" /></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
							<span className="" aria-hidden="true"><img src="img/right_icon.png" alt="" onmouseover="this.src='img/right_icon_hover.png'" onmouseout="this.src='img/right_icon.png'" /></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

    )
}

export default Testimonial;