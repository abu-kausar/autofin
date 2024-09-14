import { useState, useRef, useEffect } from 'react';
import ProfileButton from './landing/ProfileButton';
import { handleSignOut } from '../utils/signout';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <ProfileButton
                onClick={toggleDropdown}
            />
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <a
                        href="/profile"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                    >
                        View Profile
                    </a>
                    <div
                        onClick={handleSignOut}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                    >
                        Sign Out
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;