import './App.css';
import Roll from './images/roll.png';
import Vanipha from './images/vanipha.png';

function App() {
	return (
		<div className='App'>
			{/* <img className='logo' src={Vanipha} alt='logo' /> */}
			<div className='grid-col'>
				<div className='left-col'>
					<h1 >Coming Soon</h1>
					<h2>Spring 2024</h2>
					<h4>
						We're cooking up something great and can't wait to share our new
						website – stay tuned!
					</h4>
					<div className='contact-info'>
						<div className='address'>
							<h6>Kitchen</h6>
							<p>221 Geary Ave.</p>
							<p>Toronto, ON</p>
							<p>M6H 2C1</p>
						</div>
						<div>
							<h6>Contact</h6>
							<p>(416)-484-9625</p>
							<p>info@vanipha.com</p>
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
