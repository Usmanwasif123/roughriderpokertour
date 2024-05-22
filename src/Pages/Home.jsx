import Navbar from "../Components/LandingComp/Navbar";
import Banner from "../Components/LandingComp/Banner";
import About from "../Components/LandingComp/About";
import Register from "../Components/LandingComp/Register";
import Ranking from "../Components/LandingComp/Ranking";
import Blog from "../Components/LandingComp/Blog";
import Footer from "../Components/LandingComp/Footer";


const Home = () => {
    return (
    <>
    <div className="px-2 md:px-10">
    <Navbar/>
    </div>
    <Banner/>
    <About/>
    <Register/>
    <Ranking/>
    <Blog/>
    <Footer/>
    </>

    
)
}

export default Home

