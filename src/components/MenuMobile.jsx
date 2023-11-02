import { linksNavbar } from "../constants"
import { NavLink } from 'react-router-dom';

import { colors } from "../styles";

const MenuMobile = () => {

          return (
          <div className={`${colors.secondColor} flex flex-col gap-y-2 py-6 px-2 rounded-md absolute top-[80px]`}>
                    { linksNavbar.map(link => <NavLink to={`${link.toLocaleLowerCase().replace('á', 'a')}`} key={link} className={`text-white font-semibold px-4 hover:opacity-50`}>{link}</NavLink> )}        
          </div>       
          )
}
          

export default MenuMobile;