import AirBnbHeader from "./AirBnbHeader";
import HeroComponent from "./Hero";
import '../../css/Airbnb.css';
import AirbnbCards from "./AbCard";

export default function AirBnbApp() {
    return (
        <>
            <AirBnbHeader />

            <main>
                <HeroComponent />
                <AirbnbCards />
            </main>
        </>
    );
};

/**
 * TODO: Add poppins font
 * 
 */