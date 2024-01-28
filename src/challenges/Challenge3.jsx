import '../css/challenge3.css';
import logo from '/img/logo.png'
import reactBackground from '/img/reactjs-icon\ 2.png'

/**
 * Though it was directed to use different component and import them to a different app component. But I prefer to keep it this way.
 * 
 */

function NavComponent() {
    return (
        <header>
            <nav>
                <img src={logo} alt="react-logo" />
                <h1>React Course - Project 1</h1>
            </nav>
        </header>
    )
};

function MainComponent() {
    return (
        <main>
            <section>
                <img src={reactBackground} alt="react-logo" className='section-image' />
                <h1>Fun facts about React</h1>

                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by John Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, includes mobile apps. </li>

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