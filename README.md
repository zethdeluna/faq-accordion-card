# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshots

<img src="https://raw.githubusercontent.com/zethdeluna/faq-accordion-card/main/images/faqCard-desktop-screenshot.png" alt="desktop version">
<img src="https://raw.githubusercontent.com/zethdeluna/faq-accordion-card/main/images/faqCard-mobile-screenshot.png" alt="mobile version" width="300">

### Links

- [Solution](https://www.frontendmentor.io/solutions/faq-accordion-card-using-sass-html-javascript-UKzSQqccL)
- [Live Site](https://zethdeluna.github.io/faq-accordion-card/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

Most of this project was focused on the styling aspect (I used SASS) with just a touch of JavaScript, which was used to create the toggle effect of opening and closing the answers to each question in the FAQ card. 

I learned that styling can take forever, but more importantly I gained just a bit more experience in JavaScript. Below you'll find the simple toggling function that I used in this project:

```javascript
const acc = document.querySelectorAll(".accordion");

acc.forEach((btn) => {
    this.classList.toggle("active");

    let arrow = this.querySelector(".arrow");
    arrow.classList.toggle("up");

    let content = this.nextElementSibling;
    if (content.style.height) {
        content.style.height = null;
    } else {
        content.style.height = content.scrollHeight + 15 + "px";
    }
})
```

## Author

- Website - [Zeth De Luna](https://zethdeluna.com)
- Frontend Mentor - [@zethdeluna](https://www.frontendmentor.io/profile/zethdeluna)
