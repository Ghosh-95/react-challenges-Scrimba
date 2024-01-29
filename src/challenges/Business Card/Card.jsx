import CardTop from "./CardTop";
import CardBottom from "./CardBottom";
import '../../css/card.css';

export default function BusinessCard() {
    return (
        <main>
            <section className="container">
                <CardTop />
                <CardBottom />
            </section>
        </main>
    );
};