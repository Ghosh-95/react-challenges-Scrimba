import { airbnbCardData } from './../../utilities/data'
function Card({ props }) {
    const { title, imageSource, ratingObj, place, lesson, price } = props;

    return (
        <>
            <div className="card-container">
                <img className="card-image" src={`./img/${imageSource}`} alt={`${title} image}`} />

                <article className="card-description">
                    <h2 className="card-heading"><img src="./img/Star 1.png" alt="star-icon" />{ratingObj.rating} <span className="gray-text">({ratingObj.numOfRating}) - {place}</span></h2>
                    <p>{lesson}</p>
                    <span className="price"><b>From ${price}</b> / person</span>
                </article>
            </div>
        </>
    )
}

export default function AirbnbCards() {
    return (
        <section className="card-section">
            {
                airbnbCardData.map(d => (<Card props={d} key={d.lesson} />))
            }
        </section>
    );
};