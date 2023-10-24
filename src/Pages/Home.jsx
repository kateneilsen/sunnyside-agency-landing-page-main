import Info from "../components/Info.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Gallery from "../components/Gallery.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

function Home() {
    return (
        <>
            <Header />
            <Info />
            <Testimonials />
            <Gallery />
            <Footer />
        </>
    );
}

export default Home;