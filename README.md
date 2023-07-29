# Welcome
im about to attempt this tech challenge. its my second ever tech challenge and so i've decided to spend 5 hours in total trying to get as far as possible. 1 hour planning then break then 2 hours coding, break then the last 2 hours. 

the commit i do next will mark the start of the planning phase (ill call it 'planning phase').

#Planning Phase

Need to make what looks to be a e commerce type app. i have some excercises from dev academy i can look into as we did something along those lines. They were in redux though and i kinda want to react-query for this one. 

ill pseudocode as much as can in the planning phase

first ill copy and paste the requirements into this readme

#Requirements
A web page is provided based on the design prototype. You do NOT have to be “pixel-perfect”, we would recommend trying to meet the basic design details.
//ill give tailwind a try for this. 


Responsive web design. The site needs to fit the different sizes of the user’s screen. Only large desktop and mobile designs are provided. You need to fill in the blank on what the page looks like in between.
//flex should do it. 


A customer can add a product with selected options (size) to a cart.
//we have a excercise i can refer to. ill look over that


When the page is first loaded there is no size selected.
Successfully adding a product to the cart will populate this sized product in the mini cart section.

Clicking Add to Cart without the size option selected will show an error message.

There should only be one row for each product size selected within the mini cart. Quantities will be updated as the product is added multiple times.

Add to Cart button on hover colour changes, apply a 0.2-second transition to animate this.
//maybe framer motion? ill look into it

//they're buttons that can be highlighted when you click them.

 Onclick => {handleclick} => function {turn blue and tell add to cart function} => add to cart button {add selected size and send to cart.}

//cart looks like a drop down menu instead of an actual page so ill make it a component


A customer can view a mini-cart of their selections
Product information will be consumed from the Product API: HTTP GET https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product

//pulling in an API as well. ill do that when im nearer to the backend

There are multiple screens of each prototype, you can view all the screens by clicking the grid icon at the bottom right
//ok i've got designs to adhere to. ill refer to these throughout

You can interact with the prototype by clicking/hovering certain areas of the prototype. This gives you some idea of how we expect the page to work. More details are in the requirements section below.
 

//tasks
-file setup
  -one page many components
  -api
  -crud
  
-front-end
  -

-back end and database
  -




# React Boilerplate

## Packages Included

- react
- react-router-dom
- express
- vite
- vitest
- eslint

## Setup

- [ ] Clone this repo, navigate to it, install packages, and start the server with `npm run dev`
  <details style="padding-left: 2em">
    <summary>Tip</summary>

    ```sh
    npm install
    npm run dev
    ```
  </details>

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=boilerplate-react)
