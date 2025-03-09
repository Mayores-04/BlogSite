import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import UserButton from './UserButton';

const TopBar = () => {
    return (
        <header className="h-16 fixed top-0 left-20 w-[calc(100%-80px)] gap-2 bg-gray-200 z-50 flex items-center px-4 justify-between text-xl font-bold shadow-md">
            {/* Search Bar */}
            <div className="search flex items-center bg-white border-2 flex-1 border-gray-400 rounded-lg px-3 py-1">
                <FontAwesomeIcon icon={faSearch} size="sm" className="searchIcon text-gray-500" />
                <input 
                    type="text"  
                    className="pl-2 outline-none bg-transparent w-full"
                    placeholder="Search..."
                />
            </div>

            {/* User Button */}
            <div className="flex-shrink-0 ml-4">
                <UserButton />
            </div>
        </header>
    );
}

export default TopBar;
