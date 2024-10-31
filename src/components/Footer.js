"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterStyles from './Footer.module.css';
import logo2 from '@/assets/images/logo2.png?static';
import BigYellowButton from "@/components/BigYellowButton";
import TelegramLogo from '@/assets/images/telegram.png?static';
import WhatsappLogo from '@/assets/images/whatsapp.png?static';
import MastercardLogo from '@/assets/images/mastercard.svg';
import VisaLogo from '@/assets/images/visa.svg';
import EmailEnterIcon from '@/assets/images/emailicon.svg';
import DownloadLogo from '@/assets/images/download.svg';
import EmailForm from '@/components/EmailForm';

const Footer = () => {

    return (
        <footer className={FooterStyles.footer}>
<div className={FooterStyles.footerContainer}>
            <div className={FooterStyles.subfooter1}>
                <div className={FooterStyles.logo2}>
                        <Link href={"/"}><Image src={logo2} alt="Logo" height={66}/></Link>
                </div>
                <div className={FooterStyles.text}>
                    <p>
                    Компания «Султан» — снабжаем розничные магазины товарами 
                    "под ключ" в Кокчетаве и Акмолинской области
                    </p>
                </div>
                <div className={FooterStyles.subscribeContainer}>
                    <p>Подпишись на скидки и акции</p> 
                    <EmailForm onSubmit={handleEmailSubmit} />
                </div>
            </div>

            <div className={FooterStyles.subfooter2}>
                <h3>Меню сайта:</h3>
                <div className={FooterStyles.NavLinks}>
                    <Link href="/about">О компании</Link>
                    <Link href="/delivery">Доставка и оплата</Link>
                    <Link href="/refund">Возврат</Link>
                    <Link href="/contacts">Контакты</Link>
                </div>
            </div>

            <div className={FooterStyles.subfooter3}>
                <h3>Категории:</h3>
                <div className={FooterStyles.ProductsLinks}>
                    <Link href="/chemicals">Бытовая химия</Link>
                    <Link href="/cosmetics">Косметика и гигиена</Link>
                    <Link href="/productsforhome">Товары для дома</Link>
                    <Link href="/productsforkids">Товары для детей и мам</Link>
                    <Link href="/dishess">Посуда</Link>
                </div>
            </div>

            <div className={FooterStyles.subfooter4}>
                <h3>Скачать прайс-лист:</h3>
                <div>
                    <BigYellowButton onClick={() => downloadPriceList()}>
                        <span>Прайс-лист</span>
                        <Image src={DownloadLogo} alt={"Download Logo"}></Image>
                    </BigYellowButton>
                </div>  
                <div className={FooterStyles.connection}>
                    <h4>Связь в мессенджерах:</h4>
                    <div className={FooterStyles.messengerLinks}>
                        <Link href="https://wa.me/79896138422" target="_blank" rel="noopener noreferrer">
                            <Image src={WhatsappLogo} alt="WhatsApp" className={FooterStyles.messengerIcon} /> 
                        </Link>
                        <Link href="https://t.me/plzkmn" target="_blank" rel="noopener noreferrer">
                            <Image src={TelegramLogo} alt="Telegram" className={FooterStyles.messengerIcon} height={39} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={FooterStyles.subfooter5}>
                <div className={FooterStyles.contactInfo}>
                    <div className={FooterStyles.contactLeftPart}>
                    <h3>Контакты:</h3>
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
                    <img src={VisaLogo} alt="Visa" width={61} height={39} />
                    <img src={MastercardLogo} alt="Mastercard" width={61} height={39} />
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