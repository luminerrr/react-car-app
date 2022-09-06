import CarCard1 from "./CarCard1";
import CarCard2 from "./CarCard2";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Faq from "./Faq";
import WhyUs from "./WhyUs";

function Homepage(){
    return(
        <>
        <Navbar />
        <CarCard1 />
        <CarCard2 />
        <WhyUs />
        <Faq />
        <Footer />
        </>
    )
}

export default Homepage;