import { Metadata } from "next";
import Banner from "./Components/Banner";
import PupularCard from "./Components/PupularCard";
import WhyDevLearn from "./Components/WhyDevlearn";
import LearningPaths from "./Components/RoadMap";

export const metadata: Metadata = {
    title: "Home"
}

const Home = () => {
    return (
        <div>
            <Banner />
            <PupularCard />
            <WhyDevLearn />
            <LearningPaths />
        </div>
    );
};

export default Home;