import './style.css';
import carImage from '../img/img_car.png'

function CarCard1(){
    return(
        <div className="container-fluid pt-5">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<h2 className="justify-content-center header-sewa">Sewa dan Rental Mobil Terbaik di kawasan (lokasimu)</h2><br />
					<p className="justify-content-center">Selamat datang di Binar Car Rental. Kami Menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
					<button className="btn btn-success">Mulai Sewa Mobil</button>
				</div>
				<div className="col-lg-6 car-container">
					<img src={carImage} className="car-bg" alt='car image' />
				</div>
			</div>
		</div>
	</div>
    )
    
}

export default CarCard1;