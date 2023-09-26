# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./assets/screenshot.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG/hub)
- Live Site URL: [Netlify](https://pod-landing-page-macin.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Media Queries

### What I learned

It was too hard to validate email manually, so I tried to clarify my thoughts with a basic understanding of Regular Expression.It helped me a lot and that is a powerful way to do a lot of things.

```js
const regex = /^[a-z0-9_#-]+@[a-z]+\.[a-z]{2,3}$/;
```

### Continued development

Learning more about Regular Expressions.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - It's a very useful documentation when it comes to HTML, CSS and JavaScript issues.
- [Totorials Point](https://www.tutorialspoint.com/how-to-validate-email-address-using-regexp-in-javascript) - This is an amazing article which helped me understand how regular expression works to validate emails

## Author

- Frontend Mentor - [@MacinME](https://www.frontendmentor.io/profile/MacinME)
- Twitter - [@ErnestGadget](https://twitter.com/ErnestGadget)
