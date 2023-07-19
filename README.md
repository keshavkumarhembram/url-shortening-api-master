# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Shortly URL shortening API Challenge solution](#frontend-mentor---shortly-url-shortening-api-challenge-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![First screenshot of Result]('./../screenshots/desktop-1.png)

![Second screenshot of Result]('./../screenshots/desktop-2.png)

![Third screenshot of Result]('./../screenshots/desktop-3.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- CSS Modules


### What I learned

1. How to set up vite react app
- `npm create vite@latest`

2. How to configue css module in vite project

- add this to vite.config.js

```js
export default {
  // Other Vite config options...
  css: {
    modules: true,
  },
};
```

3. How to decrease line height?
- use `line-height:` css property

4. Using calc for calculation (100% + 300px) 

5. How to use style placeholder color
  `input::placeholder`

6. Create hamburger icon using pseudo elements

7. Hanlding text overflow : 
 `text-overflow: elipsis;`



## Author

- GitHub - [keshavkumarhembram](https://github.com/keshavkumarhembram)
- Frontend Mentor - [@keshavkumarhembram](https://www.frontendmentor.io/profile/keshavkumarhembram)
- Twitter - [@keshavhembram](https://twitter.com/keshavhembram)


