'use client';

import EmailField from "@/components/EmailField";
import React from 'react';
import { Link } from '@/lib/i18n';
import Image from 'next/image';
import FooterStyles from './Footer.module.scss';
import logo2 from '@/assets/images/logo2.png?static';
import BigYellowButton from '@/components/BigButton';
import TelegramLogo from '@/assets/images/telegram.png?static';
import WhatsappLogo from '@/assets/images/whatsapp.png?static';
import MastercardLogo from '@/assets/images/mastercard.png?static';
import VisaLogo from '@/assets/images/visa.png?static';
import DownloadLogo from '@/assets/images/download.svg';
import * as m from '@/paraglide/messages';

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.footerContainer}>
        <div className={FooterStyles.subfooter1}>
          <div className={FooterStyles.logo_footer}>
            <Link href={'/public'}>
              <Image src={logo2} alt="Logo" height={66} />
            </Link>
          </div>
          <div className={FooterStyles.text}>
            {m.sultan_description()}
          </div>
          <div className={FooterStyles.follow_text}>
           {m.subscribe_text()}
          </div>
          <div className={FooterStyles.subscribeContainer}>
            <div>
              <EmailField onClick={handleEmailSubmit}></EmailField>
            </div>
          </div>
        </div>

        <div className={FooterStyles.subfooter2}>
          <h2 className={FooterStyles.h2Style}>{m.title_menu()}</h2>
          <div className={FooterStyles.navLinksF}>
            <Link href="/about">{m.about()}</Link>
                <Link href="/delivery">{m.delivery()}</Link>
                <Link href="/refund">{m.refunds()}</Link>
                <Link href="/contacts">{m.contacts()}</Link>
          </div>
        </div>

        <div className={FooterStyles.subfooter3}>
          <h2 className={FooterStyles.h2Style}>{m.title_categories()}</h2>
          <div className={FooterStyles.productsLinksF}>
            <Link href="/chemicals">{m.chemicals()}</Link>
            <Link href="/cosmetics">{m.cosmetics()}</Link>
            <Link href="/productsforhome">{m.productsForHome()}</Link>
            <Link href="/productsforkids">{m.productsForKids()}</Link>
            <Link href="/dishes">{m.dishes()}</Link>
          </div>
        </div>

        <div className={FooterStyles.subfooter4}>
          <h2 className={FooterStyles.h2Style}>{m.download_pricelist()}</h2>
          <div>
          <BigYellowButton onClick={() => downloadPriceList()}>
                <span>{m.price_list()}</span>
                <Image src={DownloadLogo} alt={'Download Logo'}></Image>
              </BigYellowButton>
          </div>
          <div className={FooterStyles.connection}>
            <h4>{m.messages_connect()}</h4>
            <div className={FooterStyles.messengerLinksF}>
              <Link
                href="https://wa.me/79896138422"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={WhatsappLogo}
                  alt="WhatsApp"
                  className={FooterStyles.messengerIcon}
                />
              </Link>
              <Link
                href="https://t.me/plzkmn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={TelegramLogo}
                  alt="Telegram"
                  className={FooterStyles.messengerIcon}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={FooterStyles.subfooter5}>
          <div className={FooterStyles.contactInfo}>
            <div className={FooterStyles.contactLeftPart}>
              <h2 className={FooterStyles.h2Style}>{m.title_contacts()}</h2>
              <span className={FooterStyles.phoneNum}>+7 (777) 490-00-91 </span>
              <span className={FooterStyles.workTime}>
                {m.working_hours()}: 9:00-20:00
              </span>
              <span className={FooterStyles.orderCall}>
                <Link href={'tel:+77774900091'}>{m.order_call()}</Link>{' '}
              </span>
            </div>
            <div className={FooterStyles.Email}>
              <Link href={'mailto:opt.sultan@mail.ru'}>opt.sultan@mail.ru</Link>
              <p>{m.email_comment()}</p>
            </div>
          </div>
          <div className={FooterStyles.paymentLogos}>
            <Image
              src={VisaLogo}
              alt="Visa"
              className={FooterStyles.cardIcon}
            />
            <Image
              src={MastercardLogo}
              alt="Mastercard"
              className={FooterStyles.cardIcon}
            />
          </div>
        </div>
      </div>

      <div className={FooterStyles.mobileFooter}>
        <div className={FooterStyles.mobileSubfooter1}>
          <div className={FooterStyles.up}>
            <div className={FooterStyles.logo2}>
              <Link href={'/public'}>
                <Image src={logo2} alt="Logo" height={41} />
              </Link>
            </div>
            <div className={FooterStyles.buttonContainer}>
            <BigYellowButton onClick={() => downloadPriceList()}>
                <span>{m.price_list()}</span>
                <Image src={DownloadLogo} alt={'Download Logo'}></Image>
              </BigYellowButton>
            </div>
          </div>
        </div>
        <div className={FooterStyles.mobileSubfooter2}>
          <div className={FooterStyles.text}>
            {m.sultan_description()}
          </div>
        </div>
        <div className={FooterStyles.mobileSubfooter3}>
          <div className={FooterStyles.mobilesubscribeContainer}>
          <div className={FooterStyles.follow_text}>
           {m.subscribe_text()}
          </div>
            <div>
              <EmailField onClick={handleEmailSubmit}></EmailField>
            </div>
          </div>
        </div>
        <div className={FooterStyles.mobileSubfooter4}>
          <div className={FooterStyles.Menu}>
          <h2 className={FooterStyles.h2Style}>{m.title_menu()}</h2>
            <div className={FooterStyles.navLinksSF}>
                <Link href="/about">{m.about()}</Link>
                <Link href="/delivery">{m.delivery()}</Link>
                <Link href="/refund">{m.refunds()}</Link>
                <Link href="/contacts">{m.contacts()}</Link>
            </div>
          </div>

          <div className={FooterStyles.Categories}>
            <h2 className={FooterStyles.h2Style}>{m.title_categories()}</h2>
            <div className={FooterStyles.productsLinksSF}>
              <Link href="/chemicals">{m.chemicals()}</Link>
              <Link href="/cosmetics">{m.cosmetics()}</Link>
              <Link href="/productsforhome">{m.productsForHome()}</Link>
              <Link href="/productsforkids">{m.productsForKids()}</Link>
              <Link href="/dishes">{m.dishes()}</Link>
            </div>
          </div>
        </div>
        <div className={FooterStyles.mobileSubfooter5}>
          <div className={FooterStyles.contactInfo}>
            <h2 className={FooterStyles.h2Style}>{m.title_contacts()}</h2>
            <div className={FooterStyles.mobileContactInfo}>
              <div className={FooterStyles.contactsAndCart}>
                <div className={FooterStyles.contactLeftPart}>
                  <span className={FooterStyles.phoneNum}>
                    +7 (777) 490-00-91{' '}
                  </span>
                  <span className={FooterStyles.workTime}>
                    {m.working_hours()}: 9:00-20:00
                  </span>
                  <span className={FooterStyles.orderCall}>
                    <Link href={'tel:+77774900091'}>{m.order_call()}</Link>{' '}
                  </span>
                </div>
                <div className={FooterStyles.Email}>
                  <Link href={'mailto:opt.sultan@mail.ru'}>
                    opt.sultan@mail.ru
                  </Link>
                  <br /> 
                  <span>{m.email_comment()}</span>
                </div>

                <div className={FooterStyles.paymentLogos}>
                  <Image
                    src={VisaLogo}
                    alt="Visa"
                    className={FooterStyles.cardIcon}
                  />
                  <Image
                    src={MastercardLogo}
                    alt="Mastercard"
                    className={FooterStyles.cardIcon}
                  />
                </div>
              </div>
              <div className={FooterStyles.mobileConnection}>
                <h4 className={FooterStyles.h4Style}>{m.messages_connect()}</h4>             
                <div className={FooterStyles.messengerLinksSF}>
                  <Link
                    href="https://wa.me/79896138422"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={WhatsappLogo}
                      alt="WhatsApp"
                      className={FooterStyles.messengerIcon}
                    />
                  </Link>
                  <Link
                    href="https://t.me/plzkmn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={TelegramLogo}
                      alt="Telegram"
                      className={FooterStyles.messengerIcon}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
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
