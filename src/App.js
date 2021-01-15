import Footer from "./components/global/Footer";
import NavBar from "./components/global/NavBar";
import Home from "./components/home/Home";
import Projects from "./components/home/Projects";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <NavBar />
      <Home />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
