import './singlePost.css'

export default function singlePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img
                    src="https://cdn.pixabay.com/photo/2019/03/05/06/37/butterfly-4035660_960_720.jpg"
                    alt="Single Post Img"
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Sun</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                    officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                    fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                    atque, exercitationem quibusdam, reiciendis odio laboriosam?
                </p>
            </div>
        </div>
    )
}
