import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='flex justify-around bg-black text-white py-4 text-center'>
      <p className='mb-2'>
        Copyright &copy; {year} Kantipur Ride
      </p>
      <Link to='/privacy' className="hover:text-[#1e75b8]">
        Privacy Policy
      </Link>
    </footer>
  );
};

export default FooterSection;
