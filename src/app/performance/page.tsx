import Hero from '@/components/Hero';
import performanceImg from '/public/images/performance.jpg';

function PerformancePage() {
	return (
		<Hero
			imgData={performanceImg}
			imgAlt={'welding'}
			title={'We serve hign performance application'}
		/>
	);
}

export default PerformancePage;
