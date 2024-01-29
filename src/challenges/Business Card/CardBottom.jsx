export default function CardBottom() {
    return (
        <>
            <article className="bio-desc">
                <h2>About</h2>
                <p>A frontend developer by passion. I love to make interactive webapps with stunning visuals.</p>
            </article>
            <article className="bio-desc">
                <h2>Interest</h2>
                <p>I love to read books in my free time. And I like to solve challenges on Frontend Mentor.</p>
            </article>

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