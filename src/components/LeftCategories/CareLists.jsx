import React from 'react';
import './LeftCategories.module.scss';
import * as m from '@/paraglide/messages';

const CareLists = () => {
  const bodyItems = [
    m.hair_removal(),
    m.bath_products(),
    m.scrubs(),
    m.sponges(),
    m.creams(),
    m.intimate_care(),
    m.deodorants(),
    m.shower_gels()
  ];

  const handItems = [
    m.moisturizing(),
    m.nail_products(),
    m.solid_soap(),
    m.liquid_soap(),
    m.hand_cream(),
    m.hand_protection(),
    m.nail_polish_remover()
  ];

  const footItems = [
    m.foot_scrubs(),
    m.foot_files(),
    m.foot_cream(),
    m.foot_deodorants()
  ];

  const faceItems = [
    m.foundations(),
    m.makeup_removers(),
    m.cleansing_products(),
    m.masks(),
    m.face_cream(),
    m.eye_cream(),
    m.makeup_remover_fluid(),
    m.lip_balm()
  ];

  const hairItems = [
    m.shampoos(),
    m.styling_products(),
    m.hair_coloring(),
    m.masks_serums_oils(),
    m.conditioners_balms()
  ];

  const suncareItems = [
    m.after_sun_care()
  ];

  const giftItems = [
    m.for_men(),
    m.for_women()
  ];

}

export default CareLists;