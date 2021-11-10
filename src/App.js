import "./App.css";
import Routes from "./routes/Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes />
            <Footer />
        </div>
    );
}

export default App;
