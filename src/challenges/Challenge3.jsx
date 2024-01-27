import '../css/challenge3.css';

function NavComponent() {
    return (
        <header>
            <nav>
                <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="react-logo" />

                <h1>React-Facts</h1>
                <h2>React Course - Project 1</h2>
            </nav>
        </header>
    )
};

function MainComponent() {
    return (
        <main>
            <section>
                <h1>Fun facts about React</h1>

                <ul>
                    <li><span> </span>Was first released in 2013</li>
                    <li><span> </span>Was originally created by John Walke</li>
                    <li><span> </span>Has well over 100k stars on GitHub</li>
                    <li><span> </span>Is maintained by Facebook</li>
                    <li><span> </span>Powers thousands of enterprise apps, includes mobile apps. </li>

                </ul>
            </section>
        </main>
    )
}

export default function ReactFact() {
    return (
        <>
            <NavComponent />
            <MainComponent />
        </>
    )
}