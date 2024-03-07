import MainCategories from '../components/mainCategories/MainCategories.tsx';
import AdvertisingBanners from '../components/advertisingBanners/advertisingBanners.tsx';
import AllOffers from '../components/allOffers/AllOffers.tsx';

const MainPage = () => {
	return (
		<>
			<MainCategories />
			<AdvertisingBanners />
			<AllOffers />
		</>
	);
};

export default MainPage;
