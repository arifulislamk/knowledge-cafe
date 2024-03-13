import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

const [bookmarks, setBookmarks] = useState([]) ;
const handleBookmarksBtn = blogs => {
  console.log('bookmark coming sonn')
}

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto' >
        <Blogs 
        handleBookmarksBtn={handleBookmarksBtn}
        ></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
