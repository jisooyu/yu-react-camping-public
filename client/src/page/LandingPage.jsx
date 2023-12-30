import Header from '../components/Header';
import Footer from '../components/Footer';
import CampingDisplayPage from './CampingDisplayPage';
import { Spinner } from '@material-tailwind/react';

function LandingPage({ campingData }) {
	if (!campingData) {
		return (
			<div className='fixed top-1/2 left-1/2'>
				<Spinner className='h-12 w-12' />
			</div>
		);
	}

	return (
		<div>
			<Header />
			<CampingDisplayPage campingData={campingData} />
			<Footer />
		</div>
	);
}

export default LandingPage;
