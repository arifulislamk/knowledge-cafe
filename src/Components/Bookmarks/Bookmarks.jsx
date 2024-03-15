import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingtime }) => {
    return (
        <div className="w-1/3 bg-slate-200 rounded-xl ml-2 mt-8  ">
            <div className='bg-gray-400 rounded-xl mb-6 p-4'>
                <h3 className=' text-blue-800 font-bold text-4xl text-center '>Spent time on read : {readingtime}</h3>
            </div>
            <div className='bg-gray-400 rounded-xl p-4'>
                <h2 className="text-2xl font-medium text-center ">Bookmarks Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark
                        key={idx}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingtime: PropTypes.number
}

export default Bookmarks;