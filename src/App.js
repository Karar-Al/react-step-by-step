import Layout from "./components/Layout";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
