import Hero from '@/components/Hero';
import reliabilityImg from '/public/images/reliability.jpg';

function ReliabilityPage() {
	return (
		<Hero
			imgData={reliabilityImg}
			imgAlt={'welding'}
			title={'We serve hign Reliability hosting'}
		/>
	);
}

export default ReliabilityPage;
