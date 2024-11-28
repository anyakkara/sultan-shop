'use client';

import { Link } from '@/lib/i18n';
import { useState } from 'react';
import HeadStyles from './Header.module.scss';
import logo from '@/assets/images/logo.png?static';
import Image from 'next/image';
import BigYellowButton from '@/components/BigButton';
import SearchField from '@/components/SearchField';
import SmallButton from '@/components/SmallRoundButton';
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
import * as m from '@/paraglide/messages';
import { languageTag } from "@/paraglide/runtime";
import { getNewLanguageUrl } from '@/utils/language_switcher';

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
                <Image src={LocationLogo} alt={'Location logo'}></Image>
              </div>
              <div className={HeadStyles.headerCardInfo}>
                <span>{m.address_p1()}</span>
                <span>{m.address_p2()}</span>
              </div>
            </div>

            <div className={HeadStyles.headerCardContainer}>
              <div className={HeadStyles.headerCardLogo}>
                <Image src={EmailLogo} alt={'Email logo'}></Image>
              </div>
              <div className={HeadStyles.headerCardInfo}>
                <Link href={'mailto:opt.sultan@mail.ru'}>
                  opt.sultan@mail.ru
                </Link>
                <span>{m.email_comment()}</span>
              </div>
            </div>
          </div>

          <div className={HeadStyles.NavLinks}>
            <Link href="/about">{m.about()}</Link>
            <Link href="/delivery">{m.delivery()}</Link>
            <Link href="/refund">{m.refunds()}</Link>
            <Link href="/contacts">{m.contacts()}</Link>
            <a href={getNewLanguageUrl(languageTag() === 'en' ? 'ru' : 'en')}>{languageTag() === 'en' ? 'Русский' : 'English'}</a>
          </div>
        </div>

        <div className={HeadStyles.headerSeparator}></div>

        <div className={HeadStyles.subheader2}>
          <div className={HeadStyles.logo}>
            <Link href={'/'}>
              <Image src={logo} alt="Logo" height={50} />
            </Link>
          </div>

          <div>
            <BigYellowButton href={'/catalogue'}>
              <span>{m.catalogue()}</span>
              <Image src={CatalogueLogo} alt={'Catalogue Logo'}></Image>
            </BigYellowButton>
          </div>

          <div>
            <SearchField onClick={handleSearch}></SearchField>
          </div>

          <div className={HeadStyles.contactInfo}>
            <div className={HeadStyles.contactLeftPart}>
              <span className={HeadStyles.phoneNum}>+7 (777) 490-00-91</span>
              <span className={HeadStyles.workTime}>
                {m.working_hours()}: 9:00-20:00
              </span>
              <span className={HeadStyles.orderCall}>
                <Link href={'tel:+77774900091'}>{m.order_call()}</Link>
              </span>
            </div>
            <div className={HeadStyles.contactRightPart}>
              <Image src={CallCentreImg} alt={'Call Centre'}></Image>
            </div>
          </div>

          <div className={HeadStyles.verticalLine}></div>

          <div>
            <BigYellowButton onClick={() => downloadPriceList()}>
              <span>{m.price_list()}</span>
              <Image src={DownloadLogo} alt={'Download Logo'}></Image>
            </BigYellowButton>
          </div>

          <div className={HeadStyles.verticalLine}></div>

          <Link href="/cart">
            <div className={HeadStyles.cartContainer}>
              <div className={HeadStyles.cartLogo}>
                <Image src={CartLogo} alt={'Cart logo'} />
                <div className={HeadStyles.cartCounter}>0</div>
              </div>
              <div className={HeadStyles.cartDetails}>
                <span className={HeadStyles.cartName}>{m.cart()}</span>
                <span className={HeadStyles.cartPrice}>0 $</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className={HeadStyles.mobileHeader}>
        <div className={HeadStyles.mobileSubheader1}>
          <div className={HeadStyles.mobileHeaderMenuButton}>
            <SmallButton onClick={toggleMenu}>
              <Image src={MenuIcon} alt={'Menu icon'}></Image>
            </SmallButton>
          </div>
          <div className={HeadStyles.mobileHeaderTopLeft}>
            <Link href={'/public'}>
              <Image src={logo} alt="Logo" height={50} />
            </Link>
          </div>
          <Link href="/cart">
            <div className={HeadStyles.cartContainer}>
              <div className={HeadStyles.cartLogo}>
                <Image src={CartLogo} alt={'Cart logo'} />
                <div className={HeadStyles.cartCounter}>0</div>
              </div>
            </div>
          </Link>
        </div>
        <div className={HeadStyles.headerSeparator}></div>
        <div className={HeadStyles.mobileSubheader2}>
          <Link href="/catalogue" className={HeadStyles.mobileHeaderBottomMenu}>
            <Image src={CatalogueLogoBlack} alt={'Catalogue logo'}></Image>
            <span>{m.catalogue()}</span>
          </Link>
          <div className={HeadStyles.verticalLine}></div>
          <Link href="/search" className={HeadStyles.mobileHeaderBottomMenu}>
            <Image src={SearchLogoBlack} alt={'Search logo'}></Image>
            <span>{m.search()}</span>
          </Link>
        </div>

        {isMenuOpen && (
          <>
            <div className={HeadStyles.menuBackdrop} onClick={toggleMenu} />
            <div className={HeadStyles.menuContent}>
              <div className={HeadStyles.headerCardContainer}>
                <div className={HeadStyles.headerCardLogo}>
                  <Image src={LocationLogo} alt={'Location logo'}></Image>
                </div>
                <div className={HeadStyles.headerCardInfo}>
                  <span>{m.address_p1()}</span>
                  <span>{m.address_p2()}</span>
                </div>
              </div>

              <div className={HeadStyles.headerCardContainer}>
                <div className={HeadStyles.headerCardLogo}>
                  <Image src={EmailLogo} alt={'Email logo'}></Image>
                </div>
                <div className={HeadStyles.headerCardInfo}>
                  <Link href={'mailto:opt.sultan@mail.ru'}>
                    opt.sultan@mail.ru
                  </Link>
                  <span>{m.email_comment()}</span>
                </div>
              </div>

              <div className={HeadStyles.headerCardContainer}>
                <div className={HeadStyles.headerCardLogo}>
                  <Image src={PhoneLogo} alt={'Phone logo'}></Image>
                </div>
                <div className={HeadStyles.headerCardInfo}>
                  <span>{m.sales_team()}</span>
                  <Link href={'tel:+77774900091'}>+7 (777) 490-00-91</Link>
                </div>
              </div>

              <span className={HeadStyles.headerCardContainer}>
                {m.working_hours()}: 9:00-20:00
              </span>

              <Link
                href={'tel:+77774900091'}
                className={HeadStyles.headerCardContainer}
              >
                <div className={HeadStyles.headerCardLogo}>
                  <SmallButton>
                    <Image
                      src={PhoneFilledWhiteLogo}
                      alt={'Phone logo'}
                    ></Image>
                  </SmallButton>
                </div>
                <div className={HeadStyles.headerCardInfo}>
                  <span>{m.order_call()}</span>
                </div>
              </Link>

              <div className={HeadStyles.horizontalLine}></div>

              <span className={HeadStyles.mobileHeaderHeading}>
                {m.site_menu()}:
              </span>

              <div className={HeadStyles.mobileMenuLinks}>
                <Link href="/about">{m.about()}</Link>
                <Link href="/delivery">{m.delivery()}</Link>
                <Link href="/refund">{m.refunds()}</Link>
                <Link href="/contacts">{m.contacts()}</Link>
              </div>

              <BigYellowButton onClick={() => downloadPriceList()}>
                <span>{m.price_list()}</span>
                <Image src={DownloadLogo} alt={'Download Logo'}></Image>
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
  alert('Search query: ' + query);
};

export default Header;
