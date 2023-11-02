import { useState } from 'react';
import { NavLink } from 'react-router-dom';

//styles
import { colors, bgGradient } from '../styles'
// constants
import { linksNavbar } from '../constants';
// icons
import { BiCart, BiUser, BiMenu } from "react-icons/bi";
//components
import Button from './Button';
import MenuMobile from './MenuMobile';

const Navbar = () => {

          const [menu, setMenu] = useState(false)

return (
          <nav className={`${colors. mainColor} w-full h-auto relative border-b border-white border-opacity-30
              flex items-center justify-between px-[100px] py-[40px] max-lg:px-[50px]`}>

                    <Button style={'lg:hidden'} content={<BiMenu />} onClick={() => setMenu(!menu)}/>

                    {menu ? <MenuMobile /> : ''}

                    <h2 className='text-white font-medium  text-[25px]'>
                              <span className={`${bgGradient.textGradient} font-extrabold`}>FSW</span> Store</h2>
                    
                              <div className='flex gap-x-[30px] max-w-[200px] max-lg:hidden'>
                                        {linksNavbar.map((link, index) =>
                                    
                                         <NavLink to={`${link.toLocaleLowerCase()}`} key={link} className={`text-white font-semibold px-4 ${index == 1 ? 'border-x border-white border-opacity-30' : '' }`}>{link}</NavLink> )}
                              </div> 

                    <div className='flex gap-x-[30px]'>
                             <Button content={<BiCart />}/>
                              <Button style={'max-lg:hidden'} content={<BiUser /> }/>
                    </div>
                    
          </nav>
)}
export default Navbar