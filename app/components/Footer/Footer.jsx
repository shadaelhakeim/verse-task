import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"
import Link from 'next/link';
const Footer = () => {
  return (
      <div>
          <div className='relative'>
              <img className=' w-full p-[2%] footer-img' src="footer-img.png" alt="" />
              <button className='btn1'>Click Here</button>
          </div>
    <footer className="footer-gradient text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          <div>
            <h3 className=" mb-4 f-logo">verse.</h3>
            <p className="mb-4">Proudly, the 1st of its Kind Worldwide, AIO Digital Platform For The Global Community Of The Veterinary Industry</p>
            <div className="mb-4">
              <p className="font-bold">Asia Head Office</p>
              <p>info@vvverse.com</p>
              <p>+971 52 7568658</p>
              <p>Virtually Managed From UAE-Dubai</p>
            </div>
            <div>
              <p className="font-bold">Africa Head Office</p>
              <p>info@vvverse.com</p>
              <p>+20 1008952000</p>
              <p>Virtually Managed From Egypt-Cairo</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Home</h3>
            <ul>
              <li>The Story</li>
              <li>The Dream</li>
              <li>The People</li>
              <li>The Timeline</li>
            </ul>
            <h3 className="font-bold text-xl mt-8 mb-4">The Opportunity</h3>
            <ul>
              <li>Branding</li>
              <li>Income Streams</li>
              <li>Networking</li>
            </ul>
            <h3 className="font-bold text-xl mt-8 mb-4">The Legalities</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">The Vs</h3>
            <ul>
              <li>V-Guide</li>
              <li>V-Blog</li>
              <li>V-Nation</li>
              <li>V-Tube</li>
              <li>V-Jobs</li>
              <li>V-Lance</li>
              <li>V-College</li>
              <li>V-Market</li>
              <li>V-Events</li>
              <li>V-Webinars</li>
              <li>V-Experts</li>
              <li>V-Buzz</li>
              <li>V-Cast</li>
              <li>V-Books</li>
              <li>V-Support</li>
            </ul>
          </div>


          <div>
            <h3 className="font-bold text-xl mb-4">VV Assets</h3>
            <ul>
              <li>Blog Posts</li>
              <li>Social Pages</li>
              <li>Social Groups</li>
              <li>Channels</li>
              <li>Videos</li>
              <li>Shorts</li>
              <li>Jobs</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Courses</li>
              <li>Stores</li>
              <li>Physical Products</li>
              <li>Digital Products</li>
              <li>Events</li>
              <li>Webinars</li>
              <li>Consultations</li>
              <li>Sponsorships</li>
              <li>Podcasts</li>
              <li>Episodes</li>
              <li>Books</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">VV Profiles</h3>
            <ul>
              <li>Personal Profiles</li>
              <li>Entity Profiles</li>
              <li>V-Blog Authors</li>
              <li>V-Nation Authors</li>
              <li>V-Tube Authors</li>
              <li>V-Candidates</li>
              <li>V-Employers</li>
              <li>V-Lancers</li>
              <li>V-Clients</li>
              <li>V-Instructors</li>
              <li>V-Sellers</li>
              <li>V-Organizers</li>
              <li>V-Hosts</li>
              <li>V-Experts</li>
              <li>V-Influencers</li>
              <li>V-Cast Authors</li>
              <li>V-Books Authors</li>
            </ul>
          </div>
        </div>

 
        <div className=" mt-10 border-t pt-5 w-[400px] ">
          <div>
            <h3 className="font-bold text-lg">VV Arabic SM - MENA</h3>
  <div className="flex space-x-2">
    <Link href="#"><FontAwesomeIcon icon={faFacebook} size='2xl' /></Link>
    <Link href="#"><FontAwesomeIcon icon={faInstagram} size='2xl' className='border-l border-white  px-3' /></Link>
    <Link href="#"><FontAwesomeIcon icon={faLinkedin} size='2xl' className='border-l border-white px-3' /></Link>
    <Link href="#"><FontAwesomeIcon icon={faTiktok} size='2xl' className='border-l border-white px-3'/></Link>
    <Link href="#"><FontAwesomeIcon icon={faPinterest} size='2xl' className='border-l border-white px-3 ' /></Link>
  </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">VV English SM - Global</h3>
  <div className="flex space-x-2">
    <Link href="#"><FontAwesomeIcon icon={faFacebook} size='2xl'/></Link>
    <Link href="#"><FontAwesomeIcon icon={faInstagram} size='2xl' className='border-l border-white px-3' /></Link>
    <Link href="#"><FontAwesomeIcon icon={faLinkedin} size='2xl' className='border-l border-white px-3 ' /></Link>
    <Link href="#"><FontAwesomeIcon icon={faTiktok} size='2xl' className='border-l border-white px-3' /></Link>
    <Link href="#"><FontAwesomeIcon icon={faPinterest} size='2xl' className='border-l border-white px-3' /></Link>
  </div>
          </div>
        </div>
        
        <div className="mt-6 text-start border-t border-white pt-4">
          <p>Copyright © 2024 V-Verse</p>
        </div>
      </div>
          </footer>
          </div>
  );
};

export default Footer;
