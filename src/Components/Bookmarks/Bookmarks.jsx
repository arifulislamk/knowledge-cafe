import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingtime }) => {
    return (
        <div className="w-1/3 bg-gray-400 rounded-xl ml-2 mt-8 pt-2  ">
            <div>
                <h3 className=' text-4xl '>Reading Time : {readingtime}</h3>
            </div>
            <h2 className="text-2xl font-medium text-center ">Bookmarks Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingtime: PropTypes.number
}

export default Bookmarks;