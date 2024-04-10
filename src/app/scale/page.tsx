import Hero from '@/components/Hero';
import scaleImg from '/public/images/scale.jpg';

function ScalePage() {
	return (
		<Hero
			imgData={scaleImg}
			imgAlt={'factory'}
			title={'Scale your app to infinity'}
		/>
	);
}

export default ScalePage;
