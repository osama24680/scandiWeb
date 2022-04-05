import React, { Component } from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Women from "./Components/Women/Women"
import Men from "./Components/Men/Men"
import Kids from "./Components/Kids/Kids"
import NotFound from "./Components/NotFound/NotFound"
import { Route, Routes, } from "react-router-dom";



export default class App extends Component {

  render() {
    return (
      <>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Women />} />
              <Route path="Women" element={<Women />} />
              <Route path="Men" element={<Men />} />
              <Route path="Kids" element={<Kids />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

        </div>
      </>
    )
  }
}

