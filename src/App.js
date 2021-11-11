
import Searchbar from "./components/Searchbar";
import Routes from "./routes/Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (


        <div className="App">
             <Searchbar/>
             <Navbar />

             <Routes />
             <Footer />
        </div>
    );
}

export default App;
