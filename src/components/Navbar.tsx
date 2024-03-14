import React from 'react';
import Logo from './client/Logo';
import { navOpts } from '@/data';
import CustomLink from './client/CustomLink';
import SideNav from './client/SideNav';
import MenuBtn from './client/MenuBtn';
import NavDrop from './client/NavDrop';

const Navbar = () => {
  return (
    <header className='nav_header'>
      <nav>
        <Logo />

        <ul className='nav_opts'>
          {navOpts.map(({ link, title, subOpts }, index) => (
            <li className='nav_opt'>
              <div
                className='link_wrapper'
                style={{
                  transitionDelay: `${(index + 1) * 200 - index * 100}ms`,
                }}
              >
                {link ? (
                  <CustomLink
                    elClass='nav_title'
                    delay={index + 10}
                    link={link}
                    title={title}
                    key={title}
                  />
                ) : (
                  <NavDrop title={title} subOpts={subOpts} />
                )}
              </div>
            </li>
          ))}
        </ul>

        <button className='cta_btn quote_btn'>Get a FREE Quote</button>

        <MenuBtn />
      </nav>

      <SideNav />
    </header>
  );
};

export default Navbar;
