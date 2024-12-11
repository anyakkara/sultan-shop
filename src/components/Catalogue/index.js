'use client';

import React from 'react';
import { Link } from '@/lib/i18n';
import BigYellowButton from '@/components/BigButton';
import * as m from '@/paraglide/messages';
import BreadCrumbs from '@/components/BreadCrumbs';
import FoldingBlock from '@/components/FoldingBlock';
import SearchField from "@/components/SearchField";
import CareSection from "@/components/CareLists/CareSection";
import CareLists from "@/components/CareLists/CareLists";
import CatalogueStyles from './Catalogue.module.scss';

const Catalogue = () => {
return(
    <div className={CatalogueStyles.categoriesPage}>

        <BreadCrumbs
          paths={{
            [m.home()]: '/',
            [m.cosmetics_and_hygiene()]: '/cosmetics_and_hygiene',
          }}
        />
        <div className={CatalogueStyles.headlineCategories}>
          <div className={CatalogueStyles.leftPart}>
            {m.cosmetics_and_hygiene()}
          </div>
          <div className={CatalogueStyles.rightPart}>
            
            <div className={CatalogueStyles.sortdropdown}>
              <label className={CatalogueStyles.sorting}>{m.sorting()}</label> 
              <select id="sort">
                <option value="nameasc">{m.name_ascending()}</option>
                <option value="namedesc">{m.name_descending()}</option>
                <option value="priceasc">{m.price_ascending()}</option>
                <option value="pricedesc">{m.price_descending()}</option>
              </select>
            </div>
          </div>
        </div>
      <div className={CatalogueStyles.filtercategories}>
        {[m.body_care(), m.hand_care(), m.foot_care(), m.face_care(), m.hair_care(), m.suncare(), m.shaving(), m.gift_sets(), m.hygiene_products(), m.oral_hygiene(), m.paper_products()]
          .map((category, index) => (
            <div key={index} className={CatalogueStyles.categoryitem}>
              {category}
            </div>
          ))}
      </div>
      <div className={CatalogueStyles.filtercontainer}>


        <div className={CatalogueStyles.pricerange}>
          <h2 className={CatalogueStyles.selection}>{m.selection_by_parameters()}</h2>
            <h3 className={CatalogueStyles.priceint}>{m.price_t()}</h3>
              <div className={CatalogueStyles.priceinputs}>
                <input type="text" value="0" readOnly /> - <input type="text" value="10 000" readOnly />
              </div>
        </div>

        <div className={CatalogueStyles.filterManufacturer}>
          <h3 className={CatalogueStyles.manufacturer}>{m.manufacturer()}</h3>
          <div>
            <SearchField onClick={handleSearch}></SearchField>
          </div>
          <ul>
            <li>
              <input type="checkbox" id="grifon" />
              <label htmlFor="grifon">Grifon <span className={CatalogueStyles.count}>(56)</span></label>
            </li>
            <li>
              <input type="checkbox" id="boyscout" />
              <label htmlFor="boyscout">Boyscout <span className={CatalogueStyles.count}>(66)</span></label>
            </li>
            <li>
              <input type="checkbox" id="paclan" />
              <label htmlFor="paclan">Paclan <span className={CatalogueStyles.count}>(166)</span></label>
            </li>
            <li>
              <input type="checkbox" id="bulgari-grin" />
              <label htmlFor="bulgari-grin">Булгари Грин <span className={CatalogueStyles.count}>(21)</span></label>
            </li>
          </ul>
          <div className={CatalogueStyles.showAll}>
            <FoldingBlock title={m.show_all()}> </FoldingBlock>
          </div>
        </div>

        <div className={CatalogueStyles.filterBrand}>
          <h3 className={CatalogueStyles.brand}>{m.brand()}</h3>
          <div>
            <SearchField onClick={handleSearch}></SearchField>
          </div>
          <ul>
            <li>
              <input type="checkbox" id="grifon" />
              <label htmlFor="nivea">Nivea <span className={CatalogueStyles.count}>(56)</span></label>
            </li>
            <li>
              <input type="checkbox" id="boyscout" />
              <label htmlFor="grifon">GRIFON <span className={CatalogueStyles.count}>(66)</span></label>
            </li>
            <li>
              <input type="checkbox" id="paclan" />
              <label htmlFor="home-chest">Домашний сундук <span className={CatalogueStyles.count}>(166)</span></label>
            </li>
            <li>
              <input type="checkbox" id="bulgari-grin" />
              <label htmlFor="help">HELP <span className={CatalogueStyles.count}>(21)</span></label>
            </li>
          </ul>
          <div className={CatalogueStyles.showAll}>
            <FoldingBlock title={m.show_all()}> </FoldingBlock>
          </div>
        </div>
        
        <div className={CatalogueStyles.buttons}>
          <BigYellowButton>
            <span>{m.show_filters()}</span>
          </BigYellowButton>
        </div>
        <div className={CatalogueStyles.careListsContainer}>
          <div className={CatalogueStyles.careLists}>
            <CareSection title={m.body_care()} />
          </div>
        </div>
      </div>
</div>

)
}

const handleSearch = (query) => {
    alert('Search query: ' + query);
  };
  
  
  export default Catalogue;
