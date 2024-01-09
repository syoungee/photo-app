import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Menubar from '../components/Menubar';
import Photos from '../components/Photos';
import unsplash from '../services/unsplash';

export default function MainPage() {
  return (
    <div>
      <Header />
      <Menubar />
      <Photos />
    </div>
  );
}
