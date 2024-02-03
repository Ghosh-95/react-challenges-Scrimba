# React

A Practice Repository for challenges on Scrimba.


## Quiz 1:

1. Why do we need to `import React from "react"` in our files?
'react' file contains all the necessary features React provides, including JSX. We need to import them in order to use them in code base.

2. If I were to console.log(page) in index.js, what would show up?
A ReactObject will be printed in the console, which contains all the information abotu the page markup.

3. What's wrong with this code:

    ```javascript
    const page = (
        <h1>Hello</h1>
        <p>This is my website!</p>
    )
    ```

    To render multiple element in React, we need to wrap them inside a parent-container like div, section, article etc. We can use React fragments (<></>) if we don't want to insert the container in the DOM tree.

4. What does it mean for something to be "declarative" instead of "imperative"?
Both are program paradigms. 'declarative' programming describes what the program does without specifying its control flow. While in 'imperative' programming, we need to provide specific instructions to tell how to do certain operations.

5. What does it mean for something to be "composable"?
An approach to build a system or an application with multiple reusable pieces combined together. React has a composable approach to build apps.

## Quiz 2:


1. What is a React component?
React component is a JavaScript function that generally contains JSX that we can render in the webpage. We can reuse that component in the codebase.

2. What's wrong with this code?
    ```js
    function myComponent() {
        return (
            <small>I'm tiny text!</small>
        )
    }
    ```
    This `myComponent` component should be in PascalCase instead of camelCase, else React will throw an error.

3. What's wrong with this code?
    ```js
    function Header() {
        return (
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" />
                </nav>
            </header>
        )
    }

    root.render(Header())
    ```
    We should not call a component insider reander method. Instead we can use them as `self-closing' tags.

    ```javascript
    root.render(<Header/>)
    ```


## Challenge - Business Card
![business-card-image](./public/img/screenshot-card.png)

## Props Quiz:

1. What do props help us accomplish?
Props are used to communicate with components. We can pass a prop to a component and use them inside that component.
Props reduces the size of code base.

2. How do you pass a prop into a component?
We can pass props to child component as we pass attributes to HTML elements. The value we pass through a prop, creates an object and we can read that object inside that component.

```javascript
    const obj = {firstName: 'Sushovan', age: 24};

    <Card props={obj}>
```

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

NO, we cannot pass a custom prop to a native HTML element. Because the JSX we use in React will eventually get converted into HTML markups. We can pass the attribute and vlues which are specified by the HTML only.
A custom prop will be parsed as an error in the DOM as there is would not be such specifications that HTML provides.

4. How do I receive props in a component?
We receive a prop as a function parameter in child component's function.
```javascript
    function Navbar(props) {
        return (
            <header>
                {props.heading}
            </header>
        )
    }
```


5. What data type is `props` when the component receives it?
The props we pass to a child component creates an `object`.