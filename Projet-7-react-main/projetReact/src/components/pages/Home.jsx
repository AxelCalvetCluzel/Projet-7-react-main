import Card from "../Card";
import apartment from "../../data.json";
import banner from "../../images/banner.png";
const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img src={banner} alt="banner" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="gallery">
                <Card apartment={apartment}/>
            </div>
        </div>
    );
};

export default Home;