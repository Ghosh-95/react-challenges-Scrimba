# React

A Practice Repository for challenges on Scrimba.


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

    To render multiple element in React, we need to wrap them inside a container like div, section, article etc. We can use React fragments (<></>) if we don't want to insert the container in the DOM tree.

4. What does it mean for something to be "declarative" instead of "imperative"?
Both are program paradigms. 'declarative' programming describes what the program does without specifying its control flow. While in 'imperative' programming, we need to provide specific instructions to tell how to do certain operations.

5. What does it mean for something to be "composable"?
An approach to build a system or an application with multiple reusable pieces combined together. React has a composable approach to build apps.