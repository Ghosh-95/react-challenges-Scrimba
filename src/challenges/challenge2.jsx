/**
Challenge:  
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

function Header() {
    return (
        <header>
            <nav>
                <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="react-logo" width="40px" />
            </nav>
        </header>
    )
}

function MainComponent() {
    return (
        <>
            <h1>Reasons I'm excited to learn React</h1>

            <ol>
                <li>It's a popular library, so I'll be
                    able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                    if I know React</li>
            </ol>

        </>
    )
};

function Footer() {
    return (
        <footer>
            <p>© 2024 Ghosh development. All rights reserved.</p>
        </footer>
    )
};


export default function Page() {
    return (
        <>
            <Header />
            <MainComponent />
            <Footer />
        </>
    )
}