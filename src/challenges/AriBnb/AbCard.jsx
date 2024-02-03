const data = [
    {
        title: 'Katie Zaferes',
        imageSource: 'airbnb-image-12.png',
        ratingObj: {
            rating: '5.0',
            numOfRating: 6,
        },
        place: 'USA',
        lesson: 'Life lessons with Katie Zafers',
        price: 136,
    },
    {
        title: 'bride photo',
        imageSource: 'airbnb-wedding-photography.png',
        ratingObj: {
            rating: '5.0',
            numOfRating: 30,
        },
        place: 'USA',
        lesson: 'Learning wedding photography',
        price: 125,
    },
    {
        title: 'mountain bike',
        imageSource: 'airbnb-mountain-bike.png',
        ratingObj: {
            rating: '4.8',
            numOfRating: 2,
        },
        place: 'USA',
        lesson: 'Group Mountain Biking',
        price: 50,
    },
]

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
                data.map(d => (<Card props={d} key={d.lesson} />))
            }
        </section>
    );
};