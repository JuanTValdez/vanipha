import "./App.css";
import Roll from "./images/roll.png";
import Vanipha2 from "./images/vanipha_logo_x2.png";
function App() {
	return (
		<div className='App'>
			<div className='logo'>
				<img src={Vanipha2} alt='logo' />
			</div>
			<div className='flex-col'>
				<div className='left-col'>
					<h1 className='coming-soon inter-tight-font'>
						Coming Soon
					</h1>
					<h6 className='spring-2024 inter-font'>Summer 2025</h6>

					<p className='descrip inter-font'>
						We're cooking up something great and can't wait to share
						our new website – stay tuned!
					</p>
					<div className='contact-info'>
						<div className='address'>
							<h4 className='caption-caps inter-font'>Kitchen</h4>
							<p className='caption inter-font'>221 Geary Ave.</p>
							<p className='caption inter-font'>Toronto, ON</p>
							<p className='caption inter-font'>M6H 2C1</p>
						</div>
						<div className='address'>
							<h4 className='caption-caps inter-font'>Contact</h4>
							<p className='caption inter-font'>(416) 484-9625</p>
							<a
								href='mailto:info@vanipha.com'
								className='caption inter-font'
							>
								info@vanipha.com
							</a>
						</div>
					</div>
				</div>
				<div className='right-col'>
					<img src={Roll} alt='' className='abs' />
				</div>
			</div>
		</div>
	);
}

export default App;
