import './style.css';

function Faq(){

    return(
        <div className="container">
		<div className="row">
			<div className="col-lg-5 faq-header">
				<h4>Frequenly Asked Question</h4>
				<p className='faq-p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div className="col-lg-7">
				<div className="accordion-item">
					<h2 className="accordion-header" id="heading-one">
						<button className="accordion-button collapsed" type="button" data-bs-toggle ="collapse" data-bs-target ="#collapse-one" aria-expanded="true" aria-controls="collapse-one">Apa Saja Syarat yang dibutuhkan</button>
					</h2>
					<div id="collapse-one" className="accordion-collapse collapse" aria-labelledby="heading-one">
						<div className="accordion-body">
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum perspiciatis maiores dicta ratione error magnam accusamus facere incidunt eaque illum.</p>
						</div>
					</div>
				</div>
				<div className="accordion-item faq-p">
					<h2 className="accordion-header" id="heading-two">
						<button className="accordion-button collapsed" type="button" data-bs-toggle ="collapse" data-bs-target ="#collapse-two" aria-expanded="true" aria-controls="collapse-two">Berapa hari minimal sewa mobil lepas kunci?</button>
					</h2>
					<div id="collapse-two" className="accordion-collapse collapse" aria-labelledby="heading-two">
						<div className="accordion-body">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur animi magni quia minima ipsum eveniet, esse repellat dolores. Commodi!</p>
						</div>
					</div>
				</div>
				<div className="accordion-item faq-p">
					<h2 className="accordion-header" id="heading-three">
						<button className="accordion-button collapsed" type="button" data-bs-toggle ="collapse" data-bs-target ="#collapse-three" aria-expanded="true" aria-controls="collapse-three">Berapa hari sebelumnya sebaiknya booking sewa mobil?</button>
					</h2>
					<div id="collapse-three" className="accordion-collapse collapse" aria-labelledby="heading-three">
						<div className="accordion-body">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur animi magni quia minima ipsum eveniet, esse repellat dolores. Commodi!</p>
						</div>
					</div>
				</div>
				<div className="accordion-item faq-p">
					<h2 className="accordion-header" id="heading-four">
						<button className="accordion-button collapsed" type="button" data-bs-toggle ="collapse" data-bs-target ="#collapse-four" aria-expanded="true" aria-controls="collapse-three">Apakah Ada biaya antar-jemput?</button>
					</h2>
					<div id="collapse-four" className="accordion-collapse collapse" aria-labelledby="heading-four">
						<div className="accordion-body">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur animi magni quia minima ipsum eveniet, esse repellat dolores. Commodi!</p>
						</div>
					</div>
				</div>
				<div className="accordion-item faq-p">
					<h2 className="accordion-header" id="heading-five">
						<button className="accordion-button collapsed" type="button" data-bs-toggle ="collapse" data-bs-target ="#collapse-five" aria-expanded="true" aria-controls="collapse-five">Bagaimana jika terjadi kecelakaan</button>
					</h2>
					<div id="collapse-five" className="accordion-collapse collapse" aria-labelledby="heading-five">
						<div className="accordion-body">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur animi magni quia minima ipsum eveniet, esse repellat dolores. Commodi!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    )
}

export default Faq;