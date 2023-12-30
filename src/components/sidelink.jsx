import React from 'react'

const sidelink = ({ key, name, Icon, active, onMenuItemClick }) => {

  const isActive = active === name;
  return (
    <li className='group' onClick={() => onMenuItemClick(name)}>
        <a href={name.toLowerCase()} className='cursor-pointer block text-xl pointer-events-none'>
            <div className='inline-block'>
                <div className={`flex items-center group-hover:bg-blue-100 group-hover:text-primary-base rounded-full pl-3 pr-8 py-3
                
                ${isActive ? `text-primary-base` : ``}
                `}>
                    <span><Icon/></span>
                    <span className='ml-4 font-bold text-base'>{name}</span>
                </div>
            </div>
        </a>
    </li>
  );
};

export default sidelink