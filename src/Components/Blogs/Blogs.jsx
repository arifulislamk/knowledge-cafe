import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'
const Blogs = ({handleBookmarksBtn,handleMarkasReadbtn}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-2/3">
            <h2 className="text-2xl font-bold">Blogs : {blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                    handleMarkasReadbtn={handleMarkasReadbtn}
                    handleBookmarksBtn ={handleBookmarksBtn}
                    key={blog.id}
                    blog={blog}>

                </Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleBookmarksBtn: PropTypes.func,
    handleMarkasReadbtn: PropTypes.func
}

export default Blogs;