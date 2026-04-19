import {useState} from "react";

function ShowHideMenu() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="menu-container">
            <div className="container-wrapper">
                    <img
                        onClick={() => setShowMenu(!showMenu)}
                        src="/profile_image.jpg"
                        className="profile-image profile-image-small"
                        alt="profile"
                        width={55}
                        height={55}
                    />
                {showMenu &&
                    <div className="profile-menu">
                        <img
                            src="/profile_image.jpg"
                            className="profile-image profile-image-large"
                            alt="profile"
                            width={55}
                            height={55}
                        />
                        <p>Profile</p>
                        <p>Settings</p>
                        <p>Logout</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ShowHideMenu;