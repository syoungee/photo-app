import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Menubar from '../components/Menubar';
import LikedPhotos from '../components/LikedPhotos';

export default function BookmarkPage() {
  return (
    <div>
      <Header />
      <Menubar />
      {/* TODO: 하트가 클릭된 사진들만 필터링 필요 */}
      <LikedPhotos />
    </div>
  );
}
