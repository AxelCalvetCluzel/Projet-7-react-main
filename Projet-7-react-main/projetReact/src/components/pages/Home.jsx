import Thumb from "../Thumb";
import appartement from "../../data.json";
const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img src="src/images/banner.png" alt="banner" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="gallery">
                <Thumb appartement={appartement}/>
            </div>
        </div>
    );
};

export default Home;