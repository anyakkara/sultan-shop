"use client";

import Link from 'next/link';
import {useState} from 'react';
import HeadStyles from './Header.module.css';
import logo from '@/assets/images/logo.png?static';
import Image from 'next/image';
import BigYellowButton from "@/components/BigYellowButton";
import SearchField from "@/components/SearchField";
import CallCentreImg from '@/assets/images/call_centre.png';
import CatalogueLogo from '@/assets/images/catalogue.svg';
import DownloadLogo from '@/assets/images/download.svg';
import CartLogo from '@/assets/images/cart.svg';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <header className={HeadStyles.header}>
            <div className={HeadStyles.subheader}>
                <div className={HeadStyles.address}>

                </div>
            </div>

            <div className={HeadStyles.subheader}>
                <div className={HeadStyles.logo}>
                    <a href={"/"}><Image src={logo} alt="Logo" height={60}/></a>
                </div>

                <div>
                    <BigYellowButton onClick={() => alert("good button, isn't it?")}>
                        <span>Каталог</span>
                        <Image src={CatalogueLogo} alt={"Catalogue Logo"}></Image>
                    </BigYellowButton>
                </div>

                <div>
                    <SearchField onClick={handleSearch}></SearchField>
                </div>

                <div className={HeadStyles.contactInfo}>
                    <div className={HeadStyles.contactLeftPart}>
                        <span className={HeadStyles.phoneNum}>
                            +7 (777) 490-00-91
                        </span>
                        <span className={HeadStyles.workTime}>
                            время работы: 9:00-20:00
                        </span>
                        <span className={HeadStyles.orderCall}>
                            <a href={"tel:+77774900091"}>Заказать звонок</a>
                        </span>
                    </div>
                    <div className={HeadStyles.contactRightPart}>
                        <Image src={CallCentreImg} alt={"Call Centre"}></Image>
                    </div>
                </div>

                <div className={HeadStyles.verticalLine}></div>

                <div>
                    <BigYellowButton onClick={() => alert("good button, isn't it?")}>
                        <span>Прайс-лист</span>
                        <Image src={DownloadLogo} alt={"Download Logo"}></Image>
                    </BigYellowButton>
                </div>

                <div className={HeadStyles.verticalLine}></div>

                <div className={HeadStyles.cartContainer}>
                    <div className={HeadStyles.cartLogo}>
                        <Image src={CartLogo} alt={"Cart logo"}/>
                        <div className={HeadStyles.cartCounter}>0</div>
                    </div>
                    <div className={HeadStyles.cartDetails}>
                        <span className={HeadStyles.cartName}>Корзина</span>
                        <span className={HeadStyles.cartPrice}>0 $</span>
                    </div>
                </div>


                {/*<button className={HeadStyles.menuToggle} onClick={toggleMenu}>*/}
                {/*    {isMenuOpen ? 'Закрыть' : 'Меню'}*/}
                {/*</button>*/}
            </div>
        </header>
    );
};

const handleSearch = (query) => {
    alert("Search query: " + query);
};

export default Header;
