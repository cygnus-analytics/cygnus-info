import Principles from "../sections/Home/FirstPageProducts.jsx";
import IndustriesSlide from "../sections/Home/IndustriesSlide.jsx";
import CustomCarousel from "../ui/CustomCarousel";
import Companies from "../ui/Companies";
import { BentoGridDemo } from "../sections/Home/BentoGridDemo";
import CtaSection from "../ui/CtaSection";
import VideoBanner from "../ui/VideoBanner";

const Home = ({ homeData }) => {
  if (!homeData) return null;
  
  return (
    <div>
      <CustomCarousel data={homeData.carouselSection} />
      <Companies data={homeData.companiesSection} />
      <BentoGridDemo data={homeData.bentoGridSection} />
      <VideoBanner data={homeData.Banner} />
      <Principles data={homeData.productSection} />
      <IndustriesSlide data={homeData.industriesSection} />
      <CtaSection data={homeData.CtaSection} />
    </div>
  );
};

export default Home;
