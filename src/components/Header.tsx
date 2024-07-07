import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ToDoLogo from '../assets/Images/ToDoBlack.svg'
import UserProfileImage from '../assets/Images/UserProfile.png'

// USER PROFILE ITEMS
interface userProfileItem {
    name: string;
    link: string;
};

const userProfileItems: userProfileItem[] = [
    { name: "Frappe Dashboard", link: "/app/" },
    { name: "My Profile", link: "/app/user-profile" },
    { name: "My Settings", link: "/app/user" },
    { name: "Logout", link: "/logout" },
];


const Header = () => {
    const [userProfileDropdownActive, setUserProfileDropdownActive] = useState<boolean>(false);

    return (
        <>
            <header className='px-4 py-2 sm:px-8 shadow-[0px_0px_25px_-5px_rgba(0,0,0,0.25)]'>
                <nav className="nav-item-container flex gap-4 justify-between items-center">
                    {/* LOGO */}
                    <div className='logo nav-item'>
                        <a href="../todo" className="logo-link">
                            <img src={ToDoLogo} className='w-full max-w-[115px] mix-blend-darken' alt="" />
                        </a>
                    </div>
                    {/* END LOGO */}

                    {/* NAVBAR ITEMS */}
                    <div className='inner-item-group nav-item flex items-center gap-4 ml-auto'>
                        {/* SEARCH  */}
                        <div className="search inner-item rounded-md px-1 flex items-center justify-center w-full md:w-auto bg-gray-100" title='Search...'>
                            <SearchIcon className='' />
                            <input className='p-0.5 md:p-1 outline-0 rounded-md w-full max-w-[300px] bg-transparent placeholder:text-sm placeholder:select-none sm:text-base' placeholder='Search...' type="search" id='search' name='search' />
                        </div>
                        {/* END SEARCH  */}
                    </div>
                    {/* END NAVBAR ITEMS */}

                    {/* USER PROFILE */}
                    <div className='user-profile nav-item relative'>

                        {/* USER PROFILE DROPDOWN */}
                        <div className="user-profile-dropdown w-8 h-8 sm:w-10 sm:h-10 cursor-pointer" title='User Profile' onClick={() => setUserProfileDropdownActive(!userProfileDropdownActive)}>
                            <img className='w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full shadow-sm select-none' src={UserProfileImage} alt="User" />
                        </div>

                        {/* USER PROFILE ITEMS */}
                        <div className={`user-profile-dropdown-items absolute bg-white  p-1 rounded-md right-0 top-10 sm:top-12 flex flex-col justify-center items-start shadow-[0px_0px_25px_-5px_rgba(0,0,0,0.25)] ${userProfileDropdownActive ? "show" : "hidden"} `}>
                            {userProfileItems.map((item, index) => (
                                <div key={index} className="user-profile-item hover:bg-gray-100 rounded-md text-nowrap w-full">
                                    <a href={item.link} className="frappe-ui-link w-full p-1 md:px-2 md:py-1 block">
                                        {item.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                        {/* END USER PROFILE ITEMS */}

                        {/* END USER PROFILE DROPDOWN */}
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
