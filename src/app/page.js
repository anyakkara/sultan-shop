import React from 'react';
import 'typeface-inter';

import PromoSlider from './PromoSlider';
import CategoriesList from './Categories';





export default function Home() {
  return (
    <div>
    <CategoriesList />
    <PromoSlider />
    </div>
  );  
}
