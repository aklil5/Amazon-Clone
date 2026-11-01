# Amzon FrontEnd
1. Intro
2. Header component
3. Carousel effect
4. Category
5. Single product component
6. Header routing
7. Category routing
8. Detail page routing
9. Loading functionality integration
10. Detail page styling and addition of description on single product
11. useReducer Hook and useContextAPI explanation and example
12. Add to cart functionality
13. Header sticky part implementation
14. Cart page: Part one
15. Cart page: Part two
16. Cart page: part three


---
# In this project you will learn
- component based styling
- global state management, using useReducer and Context API
- API integration (both external (fakestore) and your own API (payment/create)
- React App routing including Dynamic and programmatic navigation
- Authentication and Route protection
- External service Integrations (Firebase for Authentication and database)
- Payment gate way integration
- Preparing a backend api for react app
- Deployment (Both Frontend and Backend apps)


download 2 extensions
- ImageAssistant Batch Image Downloader
- ColorZilla
---
# 1. Intro
- npm create vite@latest amazon
- cleanup
- setup ur favicon




# 2. Header component
- it has 3 sections
1st
go to pngimg.com - find amazon -> copy its link address

for the icons - search ...
    - go to react-icons, install it then u import



we then add styles to the header
## css class naming
BLOCK => ELEMENT => MODIFIER
we use
    __ or
    --


block - card
element - image, description
modifier - submit, cancer

card__image
card__description
card__button--submit
card__button--cancel


## css file naming
- to prevent className colligion (one class applying its property to another file with same name) when naming your css files do:
    - test1.module.css

you then import the file as an object
import classes from './Test1.module.css'
    when applying
        `className={classes.red}`


# 3. Carousel effect

install react-responsive-carousel

open amazon.com
go to imageAssistance extension 
    extract current page
    then download some images



create CarouselEffect component
    - Carousel
        img, 
            image1 2 3
            data.js
        Carsousel.jsx
        Carousel.module.css


to apply styles
add this to ur CarasoulEffect.jsx
    import "react-responsive-carousel/lib/styles/carousel.min.css";



# 4. Category
fakestoreapi.com

add it as a component
    Category
        catagoryFullInfos.js 
        Category.jsx
        CategoryCard.jsx



# 5. Single product component

Product component
    Product.jsx
    Product.module.css
    ProductCard.jssx


## rating
- go to material UI (mui)
    - install it   
    - search for rating


- go to Numeral.js
    install it
    npm install numeral

## price
- create a CurrencyFormat component



# 6. Header routing
in Components
    - Layout
        Layout.jsx


create a 
Pages folder inside src and 
    - Landing folder
        - Landing.jsx
            <layout>
                <Carouosel />
                <Category />
                <Product />
            <layout />
            

    - Auth
        - SignUp.jsx
    Cart
    Landing
    Orders
    Payment
    ProductDetail
    Results


Src folder
    Router.jsx 

import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import SignUp from './Pages/Auth/SignUp'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'

we need to install react-router-dom

function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/auth' element={<SignUp />}/>
            <Route path='/payments' element={<Payment />}/>
            <Route path='/orders' element={<Orders />}/>
            <Route path='/cart' element={<Cart />}/>

        </Routes>
    </Router>
  )
}


when routing in the Header with images or anchor tag (/, /car, /product)
    // use Link insterad of anchor tag to avoid reload everytime we enter another page


# 7. Category routing

CategoryCard - Dynamic routing

useParams
axios

create folder [Api] in [src]


- install console ninja extension to see the results of your console beside the code


# 8. Detail page routing




# 9. Loading functionality integration
search for react spinners

add it to
    Product.jsx - homepage product list
    Result.jsx - category results page
    ProductDetail.jsx - single product page


# 10. Detail page styling and addition of description on single product




# 11. useReducer Hook and useContextAPI explanation and example
12. Add to cart functionality
13. Header sticky part implementation
14. Cart page: Part one
15. Cart page: Part two
16. Cart page: part three





# Amazn Backend