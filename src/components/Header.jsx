import { colors, bgGradient } from "../styles";

import { nameProducts } from "../constants";

import bannerOffer from '../assets/BannerOfferDesktop.png'
import imgForBannerMobile from '../assets/imgForBannerMobile.png'

import ButtonProduct from './ButtonProduct'

const Header = () => (
          <header className={`${colors.mainColor}  w-full flex flex-col items-center max-sm:pt-[30px] max-sm:px-[30px] `}>
                    <div className="w-full flex justify-center max-sm:hidden">
                              <img src={bannerOffer} alt="" />
                    </div>
          
                    <div className={`w-full h-[150px] rounded sm:hidden flex justify-around items-center ${bgGradient.bgGradient}`}>
                              <div className=" text-lg text-white leading-none">
                                        <h2>até <span className="text-5xl font-extrabold mt-10 relative top-3"> 55% </span><br /> 
                                        <span className="text-4xl font-extrabold">Desconto</span> <br /> só esse mês</h2>
                              </div>
                              <img src={imgForBannerMobile} className="w-[120px]" alt="img_banner" />
                    </div>
                    
                    <div className="w-full px-[100px] py-[20px] grid grid-cols-6 max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:px-0 gap-[10px]">
                           {nameProducts.map(product => {
                              const path = (product.name).toLocaleLowerCase();
                              return (
                                 <ButtonProduct path={path} style={'text-[16px] font-medium'}  content={product.name} />       
                              )     
                           })}   
                    </div>
                    
          </header>
)

export default Header