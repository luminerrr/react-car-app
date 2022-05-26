import './style.css';
import iconInstagram from '../img/icon_instagram.png';
import iconTwitter from '../img/icon_twitter.png';
import iconMail from '../img/icon_mail.png';
import iconTwitch from '../img/icon_twitch.png';

function Footer(){

    return(
        <footer className="container">
		<div className="row justify-content-center">
			<div className="col-lg-3">
				<p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
				<p>binarcarrental@gmail.com</p>
				<p>081-233-344-808</p>
			</div>
			<ul className="col-lg-3 navbar-nav">
				<li className="foot-list">
					<a href="#our-service" className="foot-link">Our Service</a>
				</li>
				<li className="foot-list">
					<a href="#why-us" className="foot-link">Why Us</a>
				</li>
				<li className="foot-list">
					<a href="#testimonial" className="foot-link">Testimonial</a>
				</li>
				<li className="foot-list">
					<a href="#faq" className="foot-link">FAQ</a>
				</li>
			</ul>
			<div className="col-lg-3">
				<p>Connect with us</p>
				<img src="img/icon_facebook.png" alt="" />
				<img className = "foot-logo"src={iconInstagram} alt="" />
				<img className = "foot-logo"src={iconTwitter} alt="" />
				<img className = "foot-logo"src={iconMail} alt="" />
				<img className = "foot-logo"src={iconTwitch} alt="" />
			</div>
			<div className="col-lg-3">
				<p>Copyright Binar 2022</p>
				<div className="box-shape"></div>
			</div>
		</div>
	</footer>
    )
}

export default Footer;