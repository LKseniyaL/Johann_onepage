import Header from "./components/header/Header";
import Main from './components/main/Main';
import Hero from "./components/hero/Hero";
import './App.css';
import ScrollToTopButton from "./components/ ScrollToTopButton";
import Footer from "./components/footer/Footer";
import Faq from "./components/faq/Faq";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";

function App() {
  return (
    <div>
      <BurgerMenu/>
      <Header/>
      <Hero/>
      <Main/>
      <Faq/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
}

export default App;
