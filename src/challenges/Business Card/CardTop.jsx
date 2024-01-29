export default function CardTop() {
    return (
        <>
            <div className="image-wrapper">
                <img src="/img/profile-image.jpg" alt="profile-image" />
            </div>

            <article className="bio-container">
                <h1>Sushovan Ghosh</h1>
                <h2>Frontend Developer</h2>

                <button className="btn btn-gmail"><i className="fa-solid fa-envelope"></i>Gmail</button>
                <button className="btn btn-linkedin"><i className="fa-brands fa-linkedin"></i>LinkedIn</button>
            </article>
        </>
    );
};