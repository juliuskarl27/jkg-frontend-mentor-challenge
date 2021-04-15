# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

Please see solution screenshots folder.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Explanation: This is the part where I am proud of my code. If the text content email will change just for the accurate response. Below, it needs to change the content if the email input is empty, then will show the message 'Email cannot be empty', else if it's not a valid email, the output is 'Looks like this is not an email'.

<!-- const errorInput = email.parentElement.querySelector('small');
    if(email.value.trim() === '') {
        errorInput.textContent = 'Email cannot be empty';
        errorAppear(email);
    } else if (!validateEmail(email.value.trim())) {
        errorInput.textContent = 'Looks like this is not an email';
        errorAppear(email);
    } else {
        errorRemove(email);
    } -->

### Useful resources

- [Intro Component with Sign Up Tutorial](https://www.youtube.com/watch?v=C4Nq37BWpT8) - I only get a concept of having a JS function of removing and adding error class list. It is helpful. I also add some solution (above on What I've Learned).

## Acknowledgments

This livestream https://www.youtube.com/watch?v=C4Nq37BWpT8 by James Perkins. 

