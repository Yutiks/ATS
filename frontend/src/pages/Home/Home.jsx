import styles from "./Home.module.css";
import Hero from "./components/Hero/Hero";
import AboutPreview from "./components/AboutPreview/AboutPreview";
import FeaturedArtists from "./components/FeaturedArtists/FeaturedArtists";
import ServicesPreview from "./components/ServicesPreview/ServicesPreview";
import Gallery from "./components/Gallery/Gallery";
import Reviews from "./components/Reviews/Reviews";
import FAQ from "./components/FAQ/FAQ";
import CTA from "./components/CTA/CTA";

function Home() {
    return (
        <>
            <Hero />
            <AboutPreview />
            <FeaturedArtists />
            <ServicesPreview />
            <Gallery />
            <Reviews />
            <FAQ />
            <CTA />
        </>
    );
}

export default Home;