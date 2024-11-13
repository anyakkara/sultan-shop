"use client";

import Link from 'next/link';
import {useState} from 'react';
import HeadStyles from './Header.module.scss';
import logo from '@/assets/images/logo.png?static';
import Image from 'next/image';
import BigYellowButton from "@/components/BigYellowButton/BigYellowButton";
import SearchField from "@/components/SearchField/SearchField";
import SmallRoundButton from "@/components/SmallRoundButton/SmallRoundButton";
import CallCentreImg from '@/assets/images/call_centre.png';
import CatalogueLogo from '@/assets/images/catalogue.svg';
import DownloadLogo from '@/assets/images/download.svg';
import CartLogo from '@/assets/images/cart.svg';
import LocationLogo from '@/assets/images/location.svg';
import EmailLogo from '@/assets/images/email.svg';
import SearchLogoBlack from '@/assets/images/search_black.svg';
import CatalogueLogoBlack from '@/assets/images/catalogue_black.svg';
import MenuIcon from '@/assets/images/menu_white.svg';
import PhoneLogo from '@/assets/images/phone.svg';
import PhoneFilledWhiteLogo from '@/assets/images/phone_white_filled.svg';



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <header className={HeadStyles.header}>
            <div className={HeadStyles.desktopHeader}>
                <div className={HeadStyles.subheader1}>
                    <div className={HeadStyles.emailAndAddress}>
                        <div className={HeadStyles.headerCardContainer}>
                            <div className={HeadStyles.headerCardLogo}>
                                <Image src={LocationLogo} alt={"Location logo"}></Image>
                            </div>
                            <div className={HeadStyles.headerCardInfo}>
                                <span>г. Кокчетав, ул. Ж. Ташенова 129Б</span>
                                <span>(Рынок Восточный)</span>
                            </div>
                        </div>

                        <div className={HeadStyles.headerCardContainer}>
                            <div className={HeadStyles.headerCardLogo}>
                                <Image src={EmailLogo} alt={"Email logo"}></Image>
                            </div>
                            <div className={HeadStyles.headerCardInfo}>
                                <Link href={"mailto:opt.sultan@mail.ru"}>opt.sultan@mail.ru</Link>
                                <span>На связи в любое время</span>
                            </div>
                        </div>
                    </div>

                    <div className={HeadStyles.NavLinks}>
                        <Link href="/about">О компании</Link>
                        <Link href="/delivery">Доставка и оплата</Link>
                        <Link href="/refund">Возврат</Link>
                        <Link href="/contacts">Контакты</Link>
                    </div>
                </div>

                <div className={HeadStyles.headerSeparator}></div>

                <div className={HeadStyles.subheader2}>
                    <div className={HeadStyles.logo}>
                        <Link href={"/public"}><Image src={logo} alt="Logo" height={50}/></Link>
                    </div>

                    <div>
                        <BigYellowButton href={"/catalogue"}>
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
                            <Link href={"tel:+77774900091"}>Заказать звонок</Link>
                        </span>
                        </div>
                        <div className={HeadStyles.contactRightPart}>
                            <Image src={CallCentreImg} alt={"Call Centre"}></Image>
                        </div>
                    </div>

                    <div className={HeadStyles.verticalLine}></div>

                    <div>
                        <BigYellowButton onClick={() => downloadPriceList()}>
                            <span>Прайс-лист</span>
                            <Image src={DownloadLogo} alt={"Download Logo"}></Image>
                        </BigYellowButton>
                    </div>

                    <div className={HeadStyles.verticalLine}></div>

                    <Link href="/cart">
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
                    </Link>
                </div>
            </div>

            <div className={HeadStyles.mobileHeader}>
                <div className={HeadStyles.mobileSubheader1}>
                    <div className={HeadStyles.mobileHeaderMenuButton}>
                        <SmallRoundButton onClick={toggleMenu}>
                            <Image src={MenuIcon} alt={"Menu icon"}></Image>
                        </SmallRoundButton>
                    </div>
                    <div className={HeadStyles.mobileHeaderTopLeft}>
                        <Link href={"/public"}><Image src={logo} alt="Logo" height={50}/></Link>
                    </div>
                    <Link href="/cart">
                        <div className={HeadStyles.cartContainer}>
                            <div className={HeadStyles.cartLogo}>
                                <Image src={CartLogo} alt={"Cart logo"}/>
                                <div className={HeadStyles.cartCounter}>0</div>
                            </div>
                        </div>
                    </Link>

                </div>
                <div className={HeadStyles.headerSeparator}></div>
                <div className={HeadStyles.mobileSubheader2}>
                    <Link href="/catalogue" className={HeadStyles.mobileHeaderBottomMenu}>
                        <Image src={CatalogueLogoBlack} alt={"Catalogue logo"}></Image>
                        <span>Каталог</span>
                    </Link>
                    <div className={HeadStyles.verticalLine}></div>
                    <Link href="/search" className={HeadStyles.mobileHeaderBottomMenu}>
                        <Image src={SearchLogoBlack} alt={"Search logo"}></Image>
                        <span>Поиск</span>
                    </Link>
                </div>

                {isMenuOpen && (
                    <>
                        <div className={HeadStyles.menuBackdrop} onClick={toggleMenu}/>
                        <div className={HeadStyles.menuContent}>
                            <div className={HeadStyles.headerCardContainer}>
                                <div className={HeadStyles.headerCardLogo}>
                                    <Image src={LocationLogo} alt={"Location logo"}></Image>
                                </div>
                                <div className={HeadStyles.headerCardInfo}>
                                    <span>г. Кокчетав, ул. Ж. Ташенова 129Б</span>
                                    <span>(Рынок Восточный)</span>
                                </div>
                            </div>

                            <div className={HeadStyles.headerCardContainer}>
                                <div className={HeadStyles.headerCardLogo}>
                                    <Image src={EmailLogo} alt={"Email logo"}></Image>
                                </div>
                                <div className={HeadStyles.headerCardInfo}>
                                    <Link href={"mailto:opt.sultan@mail.ru"}>opt.sultan@mail.ru</Link>
                                    <span>На связи в любое время</span>
                                </div>
                            </div>

                            <div className={HeadStyles.headerCardContainer}>
                                <div className={HeadStyles.headerCardLogo}>
                                    <Image src={PhoneLogo} alt={"Phone logo"}></Image>
                                </div>
                                <div className={HeadStyles.headerCardInfo}>
                                    <span>Отдел продаж</span>
                                    <Link href={"tel:+77774900091"}>+7 (777) 490-00-91</Link>
                                </div>
                            </div>

                            <span className={HeadStyles.headerCardContainer}>Время работы: 9:00-20:00</span>

                            <Link href={"tel:+77774900091"} className={HeadStyles.headerCardContainer}>
                                <div className={HeadStyles.headerCardLogo}>
                                    <SmallRoundButton>
                                        <Image src={PhoneFilledWhiteLogo} alt={"Phone logo"}></Image>
                                    </SmallRoundButton>
                                </div>
                                <div className={HeadStyles.headerCardInfo}>
                                    <span>Заказать звонок</span>
                                </div>
                            </Link>

                            <div className={HeadStyles.horizontalLine}></div>

                            <span className={HeadStyles.mobileHeaderHeading}>Меню сайта:</span>

                            <div className={HeadStyles.mobileMenuLinks}>
                                <Link href="/about">О компании</Link>
                                <Link href="/delivery">Доставка и оплата</Link>
                                <Link href="/refund">Возврат</Link>
                                <Link href="/contacts">Контакты</Link>
                            </div>

                            <BigYellowButton onClick={() => downloadPriceList()}>
                                <span>Прайс-лист</span>
                                <Image src={DownloadLogo} alt={"Download Logo"}></Image>
                            </BigYellowButton>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

const downloadPriceList = () => {
    const link = document.createElement('a');
    link.href = 'Прайс-лист.pdf';
    link.download = 'Прайс-лист.pdf';
    link.click();
};

const handleSearch = (query) => {
    alert("Search query: " + query);
};

export default Header;
