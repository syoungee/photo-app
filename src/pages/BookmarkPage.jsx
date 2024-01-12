import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Menubar from '../components/Menubar';
import Photos from '../components/Photos';

export default function BookmarkPage() {
  return (
    <div>
      <Header />
      <Menubar />
      {/* TODO: 하트가 클릭된 사진들만 필터링 필요 */}
      <Photos />
    </div>
  );
}
