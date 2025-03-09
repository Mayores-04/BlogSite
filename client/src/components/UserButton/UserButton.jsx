import React, { useState } from 'react';
import './UserButton.css'

const UserButton = () => {
    // Temp - Replace with actual authentication logic
    const currentUser = true;

    const [open, setOpen] = useState(false);

    return currentUser ? (
        <div className="user flex items-center gap-2 text-white px-4  rounded-lg cursor-pointer hover:bg-[#f1f1f1]">
            <img src="/general/noAvatar.png" alt="User Avatar" className="w-8 h-8 rounded-full mr-2" />
            <img onClick={() => setOpen((prev) => !prev)} src="/general/arrow.svg" alt="Dropdown Icon" className="w-4 h-4 mr-2" />
            {open && (
                <div className="userOptions  absolute top-15.5 z-1000 right-1 items-center bg-white shadow-lg border-[#414141] rounded-lg overflow-hidden border">
                    <div className="userOptions hover:bg-gray-100 px-4 py-2 text-black cursor-pointer"><a href={`/userProfile`}>Profile</a></div>
                    <div className="userOptions hover:bg-gray-100 px-4 py-2 text-black cursor-pointer"><a href={``}>Settings</a></div>
                    <div className="userOptions hover:bg-red-500 px-4 py-2 text-black cursor-pointer"><button onClick={() => {
                        alert("Logout")
                    }}>Logout</button></div>
                </div>
            )}
        </div>
    ) : (
        <a href="#" className="user text-gray-800 hover:underline">Login | Sign Up</a>
    );
};

export default UserButton;
