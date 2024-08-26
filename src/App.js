import './App.css';
import Header from './Components/Header/Header';
import Commercial from "./Components/Commercial"
import AboutUs from './Components/AboutUs/AboutUs';
import GalleryComponent from './Components/ImageGallery/GalleryComponent';
import Footer from './Components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Header id="0" />
      <AboutUs />
      <Header id="1" title="The Atlantis" type="Residental Developments" para="Atlantis is a one-of-a-kind project. It's uniqueness comes from the sheer scale and grandness of it. Limited 36 residences are home to Mumbai's elite families. Flourished with an endless list of amenities, Atlantis caters to your every need.
									"/>
      <Commercial />
      <GalleryComponent />
      <Footer />
    </div>
  );
}

export default App;
