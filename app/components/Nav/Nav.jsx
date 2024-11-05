import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faCartArrowDown, faPlus, faMagnifyingGlass, faBars, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faCommentDots, faBell } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Image from 'next/image';
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className=' main-nav flex w-full justify-between px-7 pt-3 h-fit '>
        <div className="logo">
          <Image
            src="/logo.png"
            alt="Description of the image"
            className='w-[50%] h-[60%] lg:w-[50%] lg:h-[90%]'
            width={100}
            height={100}
          />
        </div>
        <div className='w-fit'> 
          <ul className='flex flex-row-reverse'>
            {/* Menu icon always visible */}
            <li className='menu-icon h-12 w-12 flex items-center justify-center rounded-full text-2xl mr-4'>
              <Link href="/">
                <div>
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </Link>
            </li>

      
            <li className='hidden md:flex nav-icons profile h-12 w-12 items-center justify-center rounded-full text-2xl mr-4'>
              <Link href="/" className='flex items-center justify-center w-full h-full'>
                <div>
                  <FontAwesomeIcon icon={faUserTie} />
                </div>
              </Link>
                      </li>
                      
            <li className='hidden md:flex nav-icons icons f-icons h-12 w-12 items-center justify-center rounded-full text-2xl mr-4'>
              <Link href="/" className='flex items-center justify-center w-full h-full'>
                <div>
                  <FontAwesomeIcon icon={faCoins} />
                </div>
              </Link>
            </li>
            <li className='hidden md:flex nav-icons icons s-icons h-12 w-12 items-center justify-center rounded-full text-2xl mr-4'>
              <Link href="/" className='flex items-center justify-center w-full h-full'>
                <div>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </div>
              </Link>
            </li>
            <li className='hidden md:flex nav-icons t-icons icons h-12 w-12 items-center justify-center rounded-full text-2xl mr-4'>
              <Link href="/" className='flex items-center justify-center w-full h-full'>
                <div>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </Link>
            </li>
            <li className='hidden md:flex nav-icons icons fo-icons h-12 w-12 items-center justify-center rounded-full text-2xl mr-4'>
              <Link href="/" className='flex items-center justify-center w-full h-full'>
                <div>
                  <FontAwesomeIcon icon={faCommentDots} />
                </div>
              </Link>
            </li>
            <li className='hidden md:flex nav-icons icons fi-icons h-12 w-12 items-center justify-center rounded-full text-2xl mr-4'>
              <Link href="/" className='flex items-center justify-center w-full h-full'>
                <div>
                  <FontAwesomeIcon icon={faBell} />
                </div>
              </Link>
            </li>
            <li className='hidden md:flex nav-icons h-12 w-12 items-center justify-center rounded-full text-2xl mr-4'>
              <Link href="/" className='flex items-center justify-center w-full h-full'>
                <div>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </Link>
            </li>
            <li className='hidden md:flex nav-icons h-12 w-12 items-center justify-center rounded-full text-2xl mr-4'>
              <Link href="/" className='flex items-center justify-center w-full h-full'>
                <div>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
