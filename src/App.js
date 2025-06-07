import Header from "./components/header/Header";
import Main from './components/main/Main';
import Hero from "./components/hero/Hero";
import './App.css';
import ScrollToTopButton from "./components/ ScrollToTopButton";

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Main/>
      <ScrollToTopButton/>
    </div>
  );
}

export default App;
