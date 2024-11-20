"use client";

import React from 'react';
import { Link } from "@/lib/i18n"
import Image from 'next/image';
import FooterStyles from './Footer.module.scss';
import logo2 from '@/assets/images/logo2.png?static';
import BigYellowButton from "@/components/BigButton/BigButton";
import TelegramLogo from '@/assets/images/telegram.png?static';
import WhatsappLogo from '@/assets/images/whatsapp.png?static';
import MastercardLogo from '@/assets/images/mastercard.png?static';
import VisaLogo from '@/assets/images/visa.png?static';
import DownloadLogo from '@/assets/images/download.svg';
import EmailField from '@/components/EmailField/EmailField';

const Footer = () => {

    return (
        <footer className={FooterStyles.footer}>
            <div className={FooterStyles.footerContainer}>
            <div className={FooterStyles.subfooter1}>
                <div className={FooterStyles.logo2}>
                        <Link href={"/public"}><Image src={logo2} alt="Logo" height={66}/></Link>
                </div>
                <div className={FooterStyles.text}>
                    <p>
                    Компания «Султан» — снабжаем розничные магазины товарами 
                    "под ключ" в Кокчетаве и Акмолинской области
                    </p>
                </div>
                <div className={FooterStyles.subscribeContainer}>
                    <p>Подпишись на скидки и акции</p> 
                    <div>
                        <EmailField onClick={handleEmailSubmit}></EmailField>
                    </div>
                </div>
            </div>

            <div className={FooterStyles.subfooter2}>
                <h2 className={FooterStyles.h2Style}>Меню сайта:</h2>
                <div className={FooterStyles.NavLinksF}>
                    <Link href="/about">О компании</Link>
                    <Link href="/delivery">Доставка и оплата</Link>
                    <Link href="/refund">Возврат</Link>
                    <Link href="/contacts">Контакты</Link>
                </div>
            </div>

            <div className={FooterStyles.subfooter3}>
            <h2 className={FooterStyles.h2Style}>Категории:</h2>
                <div className={FooterStyles.ProductsLinksF}>
                    <Link href="/chemicals">Бытовая химия</Link>
                    <Link href="/cosmetics">Косметика и гигиена</Link>
                    <Link href="/productsforhome">Товары для дома</Link>
                    <Link href="/productsforkids">Товары для детей и мам</Link>
                    <Link href="/dishess">Посуда</Link>
                </div>
            </div>

            <div className={FooterStyles.subfooter4}>
            <h2 className={FooterStyles.h2Style}>Скачать прайс-лист:</h2>
                <div>
                    <BigYellowButton onClick={() => downloadPriceList()}>
                        <span>Прайс-лист</span>
                        <Image src={DownloadLogo} alt={"Download Logo"}></Image>
                    </BigYellowButton>
                </div>  
                <div className={FooterStyles.connection}>
                    <h4>Связь в мессенджерах:</h4>
                    <div className={FooterStyles.messengerLinksF}>
                        <Link href="https://wa.me/79896138422" target="_blank" rel="noopener noreferrer">
                            <Image src={WhatsappLogo} alt="WhatsApp" className={FooterStyles.messengerIcon} /> 
                        </Link>
                        <Link href="https://t.me/plzkmn" target="_blank" rel="noopener noreferrer">
                            <Image src={TelegramLogo} alt="Telegram" className={FooterStyles.messengerIcon} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={FooterStyles.subfooter5}>
                <div className={FooterStyles.contactInfo}>
                    <div className={FooterStyles.contactLeftPart}>
                    <h2 className={FooterStyles.h2Style}>Контакты:</h2>
                    <span className={FooterStyles.phoneNum}>
                        +7 (777) 490-00-91 </span>
                        <span className={FooterStyles.workTime}>
                        время работы: 9:00-20:00 </span>
                        <span className={FooterStyles.orderCall}>
                        <Link href={"tel:+77774900091"}>Заказать звонок</Link> </span>
                    </div>
                    <div className={FooterStyles.Email}>
                        <Link href={"mailto:opt.sultan@mail.ru"}>opt.sultan@mail.ru</Link>
                        <p>На связи в любое время</p>
                    </div>
                </div>    
                <div className={FooterStyles.paymentLogos}>
                    <Image src={VisaLogo} alt="Visa"  className={FooterStyles.cardIcon}/>
                    <Image src={MastercardLogo} alt="Mastercard" className={FooterStyles.cardIcon}/>
                </div>
            </div>
            </div>

            <div className={FooterStyles.mobileFooter}>
                <div className={FooterStyles.mobileSubfooter1}>
                    <div className={FooterStyles.up}>
                        <div className={FooterStyles.logo2}>
                            <Link href={"/public"}><Image src={logo2} alt="Logo" height={41}/></Link>
                        </div>
                        <div className={FooterStyles.buttonContainer}>
                            <BigYellowButton onClick={() => downloadPriceList()} className={FooterStyles.customButton}>
                                <span>Прайс-лист</span>
                                <Image src={DownloadLogo} alt={"Download Logo"}></Image>
                            </BigYellowButton>
                        </div>
                    </div>
                </div>
                <div className={FooterStyles.mobileSubfooter2}>
                    <div className={FooterStyles.text}>
                        <p>
                            Компания «Султан» — снабжаем розничные магазины товарами 
                            "под ключ" в Кокчетаве и Акмолинской области
                        </p>
                    </div>
                </div>
                <div className={FooterStyles.mobileSubfooter3}>
                    <div className={FooterStyles.mobilesubscribeContainer}>
                        <p>Подпишись на скидки и акции</p> 
                        <div>
                            <EmailField onClick={handleEmailSubmit}></EmailField>
                        </div>
                    </div>
                </div>
                <div className={FooterStyles.mobileSubfooter4}>
                    <div className={FooterStyles.Menu}>
                        <h2 className={FooterStyles.h2Style}>Меню сайта:</h2>
                        <div className={FooterStyles.NavLinksSF}>
                            <Link href="/about">О компании</Link>
                            <Link href="/delivery">Доставка и оплата</Link>
                            <Link href="/refund">Возврат</Link>
                            <Link href="/contacts">Контакты</Link>
                        </div>
                    </div>

                    <div className={FooterStyles.Categories}>
                        <h2 className={FooterStyles.h2Style}>Категории:</h2>
                        <div className={FooterStyles.ProductsLinksSF}>
                            <Link href="/chemicals">Бытовая химия</Link>
                            <Link href="/cosmetics">Косметика и гигиена</Link>
                            <Link href="/productsforhome">Товары для дома</Link>
                            <Link href="/productsforkids">Товары для детей и мам</Link>
                            <Link href="/dishess">Посуда</Link>
                        </div>
                    </div>
                </div>
                <div className={FooterStyles.mobileSubfooter5}>
                    <div className={FooterStyles.contactInfo}>
                        <h2 className={FooterStyles.h2Style}>Контакты:</h2>
                        <div className={FooterStyles.mobileContactInfo}>
                            <div className={FooterStyles.contactsAndCart}>
                            <div className={FooterStyles.contactLeftPart}>
                                <span className={FooterStyles.phoneNum}>
                                    +7 (777) 490-00-91 </span>
                                    <span className={FooterStyles.workTime}>
                                    время работы: 9:00-20:00 </span>
                                    <span className={FooterStyles.orderCall}>
                                    <Link href={"tel:+77774900091"}>Заказать звонок</Link> </span>
                            </div>
                            <div className={FooterStyles.Email}>
                                <Link href={"mailto:opt.sultan@mail.ru"}>opt.sultan@mail.ru</Link>
                                <p>На связи в любое время</p>
                            </div>
                         
                            <div className={FooterStyles.paymentLogos}>
                                <Image src={VisaLogo} alt="Visa"  className={FooterStyles.cardIcon}/>
                                <Image src={MastercardLogo} alt="Mastercard" className={FooterStyles.cardIcon}/>
                            </div>
                            </div>
                        <div className={FooterStyles.mobileConnection}>
                            <h4 className={FooterStyles.h4Style}>Связь в мессенджерах:</h4>
                            <div className={FooterStyles.messengerLinksSF}>
                                <Link href="https://wa.me/79896138422" target="_blank" rel="noopener noreferrer">
                                    <Image src={WhatsappLogo} alt="WhatsApp" className={FooterStyles.messengerIcon} /> 
                                </Link>
                                <Link href="https://t.me/plzkmn" target="_blank" rel="noopener noreferrer">
                                    <Image src={TelegramLogo} alt="Telegram" className={FooterStyles.messengerIcon} />
                                </Link>
                            </div>
                        </div>
                        </div>  
                    </div>
                </div>
            </div>
        </footer>
    )

};

const downloadPriceList = () => {
    const link = document.createElement('a');
    link.href = 'Прайс-лист.pdf';
    link.download = 'Прайс-лист.pdf';
    link.click();
};
    const handleEmailSubmit = (email) => {
        console.log('Submitted Email:', email);
    };

export default Footer;