# Books's review Frontend

This the frontend of the project for the book's review site. It is built with React and Vite.

**dependencies**:

- react
- react-router-dom
- bootstrap
- bootstrap-icons

## Components

### Pages

**guests pages**:

- DefaultLayout: the main layout of the app, contains the header and footer
- Home: the home page of the app, contains a banner, a lead paragraph with a welcome message.
- BooksPage: the page that lists all the books, contains a list of books with their title, author and a link to the book's page.
- SingleBookPage: the page that shows the details of a single book, contains the book's title, author, description and a list of reviews.

**adminpages**:
  
- adminLayout: the layout for the admin pages, contains a sidebar with links to the admin pages.
- adminBooksPage: the page that lists all the books, contains a list of books with their title, author and a link to the book's page.
- adminBookCreatePage: the page that allows the admin to create a new book, contains a form with fields for the book's title, author and description.

**child components**:

- bookCard: a card that shows the book's title, author and a link to the book's page.
- booksList: a list of bookCard components.
- reviewCard: a card that shows the review's title, author and a link to the review's page.
- reviewsList: a list of reviewCard components.
- reviewForm: a form that allows the user to submit a review for a book.
- addbookAdminForm: a form that allows the admin to add a new book.

## step by step guide to run the project

- project setup
- routing system initialization
- Create the default layout
- Update the routes with the default layout and the home page
- Create Header and Footer components
- Create a dynamic menu in the header with links to the pages
- Add Pages components for the home page, books page and single book page ❌

### Project setup

- install react `npm create vite@latest` and select react template and js variant
- install dependencies `npm install react-router-dom bootstrap bootstrap-icons`
- project cleanup: remove App.css, cleaned index.css and cleaned App.jsx

**App.jsx**:

```jsx

function App() {

  return (
    <>
      <h1>Hello Books reviews site</h1>
    </>
  )
}

export default App


```

### Initialize Routing system

Create the first route for the home page with a basic html h1 element.

Import the BrowserRouter, Routes and Route components from react-router-dom and wrap the app with the BrowserRouter component. Then create a Routes component and add a Route component for the home page.

```jsx
// App.jsx
import {BrowserRouter, Routes, Route} from 'react-router-dom'

```

**Create the first route**:

```jsx
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  </BrowserRouter>
```

### Create the default layout

Add a layouts/ folder with a DefaultLayout.jsx file. This component will be used as the main layout for the app and will contain the header and footer components.

```jsx
// DefaultLayout.jsx
import { Outlet } from 'react-router-dom'


function DefaultLayout() {
  return (
    <>
      <header>
        <h1>Books Reviews</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2024 Books Reviews</p>
      </footer>
    </>
  )
}

export default DefaultLayout
```

### Update the routes with the default layout and the home page

Now its time to update the route and import the default layout component. The default layout will be used as the main layout for the app and will contain the header and footer components.

```jsx

import {BrowserRouter, Routes, Route} from 'react-router-dom'
// 👇 Import the layout file
import DefaultLayout from './layouts/DefaultLayout'

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          {/* 👇 Import the layout file */}
          <Route element={<DefaultLayout />} >
            <Route index element={<h1>Home</h1>} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

```

Now you should have a working app with the default layout and the home page. You can run the app with `npm run dev` and open it in your browser at `http://localhost:5173/`.

## Create Header and Footer components

Now its time to extract the header and footer into dedicated components. Create a `components/` folder with `AppHeader.jsx` and `AppFooter.jsx` files. The header will contain the site title and the footer will contain the copyright information.

### Make the AppHeader component

```jsx
// AppHeader.jsx

import {NavLink} from 'react-router-dom'

export default function AppHeader(){

  
  return (
    <header>
      <nav className="navbar navbar-expand-xl navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Books Reviews</a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-menu"
            aria-controls="main-menu"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main-menu">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>

            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-outline-success my-2 my-sm-0"
                type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}


```

We used bootstrap components to make the navigation menu. Now update the layout to use our new components.

### Make the AppFooter component

```jsx
// AppFooter.jsx
export default function AppFooter(){

  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          <div className="col">
            <h3>Books Reviews</h3>
            <p>Your go-to platform for honest and insightful book reviews.</p>
          </div>
          <div className="col">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Books</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col">
            <h3>Contact Us</h3>
            <p>Email: info@booksreviews.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

Now here is how your DefaultLayout.jsx file should look like after importing the new components:

```jsx
// DefaultLayout.jsx
import { Outlet } from 'react-router-dom'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

function DefaultLayout() {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </>
  )
}

export default DefaultLayout
```

## Make the navigation menu dynamic

Now using array.map we will iterate over an array of objects to create the navigation menu dynamically. This will make it easier to add or remove links in the future.

**Data**:

```jsx
// menuData.js 
  const menu = [
    {
      id: 1,
      label: 'Home',
      path: '/'
    },
    {
      id: 2,
      label: 'Books',
      path: '/books'
    },
    {
      id: 3,
      label: 'About',
      path: '/about'
    },
    {
      id: 4,
      label: 'Contact',
      path: '/contact'  
    }
  ]
```

Your UL now should look like this:

```jsx

<ul className="navbar-nav me-auto mt-2 mt-lg-0">              
  {
  menu.map(item =>  (
      <li key={item.id} className="nav-item">
        <NavLink className="nav-link" to={item.path}>{item.label}</NavLink>
      </li>
    ))
  }          
</ul>
```
