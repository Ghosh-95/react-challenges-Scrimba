function ArticleDesc({ heading, description }) {
    console.log(heading, description);
    return (
        <article className="bio-desc">
            <h2>{heading}</h2>

            <p>{description}</p>
        </article>
    )
}

export default function CardBottom() {
    return (
        <>
            <ArticleDesc heading={"About"} description={"A frontend developer by passion. I love to make interactive webapps with stunning visuals."} />

            <ArticleDesc heading={"Interests"} description={"I love to read books in my free time. And I like to solve challenges on Frontend Mentor."} />

            <article className="social-links">
                <ul className="links">
                    <li><i className="fa-brands fa-linkedin"></i></li>
                    <li><i className="fa-brands fa-github"></i></li>
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                </ul>
            </article>

        </>
    );
};