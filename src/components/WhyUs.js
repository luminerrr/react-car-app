import './style.css'
import iconComplete from '../img/icon_complete.png';
import iconPrice from '../img/icon_price.png';
import iconHours from '../img/icon_24hrs.png';
import iconProfessional from '../img/icon_professional.png';

function WhyUs(){

    return(
        <div className="container mt-5">
		<div className="row">
			<div id="why-us">
				<h2>Why Us?</h2>
				<p>Mengapa  harus pilih Binar Car Rental?</p>
			</div>
			<div className="row justify-content-center">
				<div className="col-lg-3">
					<div className="card mt-4">
						<img src={iconComplete} alt="" className="card-pic" />
						<div className="card-body">
							<h5 className="card-title">Mobil Lengkap</h5>
							<p className="card-description">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3">
					<div className="card mt-4">
						<img src={iconPrice} alt="" className="card-pic" />
						<div className="card-body">
							<h5 className="card-title">Harga Murah</h5>
							<p className="card-description">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3">
					<div className="card mt-4">
						<img src={iconHours} alt="" className="card-pic" />
						<div className="card-body">
							<h5 className="card-title">Layanan 24 Jam</h5>
							<p className="card-description">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3">
					<div className="card mt-4">
						<img src={iconProfessional} alt="" className="card-pic" />
						<div className="card-body">
							<h5 className="card-title">Sopir Profesional</h5>
							<p className="card-description">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )

}

export default WhyUs;