import React, { useState } from 'react'
import { 
    HomeIcon, 
    ExploreIcon, 
    NotificationsIcon, 
    MessagesIcon, 
    ListsIcon, 
    BookmarksIcon,
    CommunitiesIcon, 
    PremiumIcon, 
    ProfileIcon, 
    MoreIcon
} from '../icon/icon'
import twitterLogo from '../images/logo.svg';
import SideLink from '../components/sidelink';
import Userbox from '../components/userbox';

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Communities",
    icon: CommunitiesIcon,
  },
  {
    name: "Premium",
    icon: PremiumIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const Sidebar = () => {

  const [active, setActive] = useState('Home');

  const handleMenuItemClick = (name) => {
    setActive(name);
  };

  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between w-72 px-2'>
      <div>
        <div className='mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-blue-100 transform transition-colors duration-200 cursor-pointer'>
          <img src={twitterLogo} alt="Twitter Logo" className='w-8 h-8' />
        </div>
        <nav className='mb-4'>
          <ul>
            {sideLinks.map(({ name, icon }) => ( 
              <SideLink 
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <button className='bg-primary-base text-white rounded-full py-3 px-8 w-11/12 shadow-lg hover:bg-primary-dark transform transition-colors duration-200'>Tweet</button>
      </div>
      <div>
        <Userbox/>
      </div>
    </div>
  )
}

export default Sidebar