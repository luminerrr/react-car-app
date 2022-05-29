import '../style.css';

function Body(){

    return(
        <div classNameName="search-box row container">
            <div className="search-container col-lg-10">
                <div className="col form-box">
                    <label for="" className="search-label">Tipe Driver</label>
                    <select name="" id="" className="form-select dropdown">
                        <option selected value="0">Pilih Tipe Driver</option>
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
    
    )
}

export default Body;