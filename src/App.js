import "./App.module.scss";
import NavBar from "./components/NavBar";
import Grid from "./components/Grid";
import Carousel from "./components/NavBar/NavBar";
import ProductPage from "./components/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
    return (
        <div className="App">
            <Router>
                <NavBar />

                <Routes>
                    <Route path="/home" element={<Home />} />
                </Routes>
                <Routes>
                    <Route path="/productpage" element={<ProductPage />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
