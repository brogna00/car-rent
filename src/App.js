import Banner from "./componentes/Banner";
import BannerTwo from "./componentes/BannerTwo";
import Brands from "./componentes/Brands";
import CarModels from "./componentes/CarModels";
import DownloadOurApp from "./componentes/DownloadOurApp";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import CarRentalForm from "./componentes/Rent";
import Steps from "./componentes/Steps";
import Carrossel from "./componentes/Swiper";

function App(){
  return (
    <>
      <Header />
      <Banner />
      <CarRentalForm/>
      <Brands />
      <Steps />
      <CarModels/>
      <BannerTwo />
      <Carrossel />
      <DownloadOurApp />
      <Footer />
    </>
  )
}

export default App;
