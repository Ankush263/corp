import Hero from '@/components/Hero';
import homeImg from '/public/images/home.jpg';

export default function Home() {
	return (
		<Hero
			imgData={homeImg}
			imgAlt={'car factory'}
			title={'Professional Cloud Hosting'}
		/>
	);
}
