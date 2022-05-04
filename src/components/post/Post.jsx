import './post.css';

export default function Post() {
    return (
        <div className='post'>
            <img className='postImg'
                src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg"
                alt="postImg" />
            <div className="postInfo">
                <div className="postCategorys">
                    <span className="postCategory">Music</span>
                    <span className="postCategory">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    )
}
