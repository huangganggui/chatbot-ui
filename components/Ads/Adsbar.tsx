import React from 'react';

import { GoogleAdSense } from '@/components/Ads/GoogleAdSense';

export const Adsbar = () => {
  const side = 'right'
  return (
    <div>
      {window.innerWidth < 640? null: (
        <div className={`fixed top-0 ${side}-0 z-40 flex h-full w-[260px] flex-none flex-col space-y-2 bg-[#202123] p-2 text-[14px] transition-all sm:relative sm:top-0`} >
        {/* 点击箭头，折叠广告 */}
        <GoogleAdSense />
        <GoogleAdSense />
      </div>
      )}
    </div>
  )
  }