import Navbar from "../Components/LandingComp/Navbar";
import Banner from "../Components/LandingComp/Banner";
import About from "../Components/LandingComp/About";
import Register from "../Components/LandingComp/Register";


const Home = () => {
    return (
    <>
    <div className="px-2 md:px-12">
    <Navbar/>
    </div>
    <Banner/>
    <About/>
    <Register/>
   
    </>

    
)
}

export default Home

