import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_1280.jpg"
                            alt="Settings Img"
                            className="settingsImg" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                    </div>
                    <input type="file" id='fileInput' style={{ display: 'none' }} />
                    <label>Username</label>
                    <input type="text" placeholder='Sun' autoFocus={true} />
                    <label>Email</label>
                    <input type="email" placeholder='sun@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsButton">Update</button>

                </form>
            </div>
            <Sidebar />
        </div>
    )
}
