import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    console.log(blog)
    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog
    return (
        <div>
            <img className='w-2/3' src={cover} alt={`this the cover of ${title}`} />

            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className=' w-20' src={author_img} alt="" />
                    <div className=' ml-6'>
                        <h2 className=' text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}> #{hashtag}</span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;