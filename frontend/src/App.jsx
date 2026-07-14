import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<SingleBook />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
