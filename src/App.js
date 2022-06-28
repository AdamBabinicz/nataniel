import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./home/HomePage";
import Footer from "./components/footer/Footer";
import SinglePage from "./components/watch/SinglePage";
import ScrollToTop from "./ScrollToTop";
import Scroll from "./components/Scroll";
import Contact from "./components/contact/Contact";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <>
      <Router>
        <Scroll />
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/singlepage/:id" element={<SinglePage />} exact />
          <Route path="/kontakt" element={<Contact />} exact />
        </Routes>
        <Footer />
      </Router>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </>
  );
}

export default App;
