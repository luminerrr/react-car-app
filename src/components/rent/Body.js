import './rent.css';
import carImg from '../../img/car01.min.jpg';
import carCalendar from '../../img/car-calendar.png';
import carSetting from '../../img/car-setting.png';
import carUser from '../../img/car-user.png';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Body(){
	const [cars, setCars] = useState([]);
	
	useEffect(()=>{
		axios.get('http://localhost:3001/api/v1/cars/getcars')
		.then((res)=>{
			setCars(res.data.data)
			console.log(res.data.data)
		})
		.catch((err)=>{
			console.log(err.message)
		})
	}, [])

    return(<>
	
	<div className="search-box row container">
		<div className="search-container col-lg-10">
			<div className="col form-box">
				<label for="" className="search-label">Tipe Driver</label>
				<select name="" id="" className="form-select dropdown">
					<option defaultValue value="0">Pilih Tipe Driver</option>
					<option value="driver">Dengan Sopir</option>
					<option value="no-driver">Tanpa Sopir (Lepas Kunci)</option>
				</select>
			</div>
			<div className="col form-box calendar-box">
				<label for="" className="search-label calendar-label">Tanggal</label>
				<input type="date" id="avail-date" />
			</div>
			<div className="col form-box">
				<label for="" className="search-label">Waktu Jemput/Ambil</label>
				<select name="" id="avail-time" className="form-select clock">
					<option selected value="00:00:00">Pilih Waktu</option>
					<option value="08:00:00">08.00 <span>WIB</span></option>
					<option value="09:00:00">09.00 <span>WIB</span></option>
					<option value="10:00:00">10.00 <span>WIB</span></option>
					<option value="11:00:00">11.00 <span>WIB</span></option>
					<option value="12:00:00">12.00 <span>WIB</span></option>
				</select>
			</div>
			<div className="col form-box calendar-box">
				<label for="" className="search-label calendar-label">Jumlah Penumpang</label>
				<input type="text" id="car-capacity" />
			</div>
		</div>

		<div className="col-lg-2">
			<button className="btn btn-success filter-button" id="search-button">Cari Mobil</button>
		</div>
	</div>

	<div className='container car-list-container'>
		<div className='row'>
			{cars.forEach((car)=>{
				return(<>
				<div className='card car-card col'>
					<img src={carImg} alt='car' className='car-picture' />
					<p id="car-type">{car.model}</p>
					<p id="car-price"><b>Rp{car.price}</b></p>
					<p id="car-description">Description</p>
					<div className="icon-wrapper"><img src={carUser} alt="" className="car-icon" /><span>Capacity Orang </span> </div>
					<div className="icon-wrapper"><img src={carSetting} alt="" className="car-icon" /><span>Transmission</span></div>
					<div className="icon-wrapper"><img src={carCalendar} alt="" className="car-icon" /><span>Tahun Year</span></div>
					<div className="btn-wrapper"><button className="btn btn-success" id="choose-car">Pilih Mobil</button></div>
				</div>
				</>)
			})}
		</div>
	</div>
	
    </>)
}

export default Body;