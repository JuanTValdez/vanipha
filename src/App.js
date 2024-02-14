import './App.css';
import Roll from './images/roll.png';
import Vanipha from './images/vanipha.png';

function App() {
	return (
		<div className='App'>
			<img className='logo' src={Vanipha} alt='logo' />
			<div className='grid-col'>
				<div className='left-col'>
					<h1 className='inter-tight'>Coming Soon</h1>
					<h6 className='spring-2024 inter'>Spring 2024</h6>
					<p className='inter'>
						We're cooking up something great and can't wait to share our new
						website – stay tuned!
					</p>
					<div className='contact-info'>
						<div className='address'>
							<h4 className='inter'>Kitchen</h4>
							<p>221 Geary Ave.</p>
							<p>Toronto, ON</p>
							<p>M6H 2C1</p>
						</div>
						<div>
							<h4 className='inter'>Contact</h4>
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
