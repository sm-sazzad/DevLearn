import { Metadata } from "next";
import Banner from "./Components/Banner";
import PupularCard from "./Components/PupularCard";
import Navbar from "./Components/Navbar";

export const metadata: Metadata = {
    title: "Home"
}

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <PupularCard />
        </div>
    );
};

export default Home;