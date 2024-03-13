import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingtime, setReadintime] = useState(0);

  const handleBookmarksBtn = blogs => {
    const newBookmarks = [...bookmarks, blogs];
    setBookmarks(newBookmarks)
  }

  const handleMarkasReadbtn = time => {
    const newTime = readingtime + time;
    setReadintime(newTime)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto' >
        <Blogs
          handleBookmarksBtn={handleBookmarksBtn}
          handleMarkasReadbtn={handleMarkasReadbtn}
        ></Blogs>

        <Bookmarks
          readingtime={readingtime}
          bookmarks={bookmarks}>

        </Bookmarks>
      </div>
    </>
  )
}

export default App
