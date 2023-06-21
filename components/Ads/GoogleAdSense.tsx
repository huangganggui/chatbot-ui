import React from 'react';

import { Adsense } from '@ctrl/react-adsense';

export const GoogleAdSense = () => {
  return (
    <div className="px-3 pt-2 pb-3 text-center text-[5px] text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
      点击广告支持作者
      {/* Your other content goes here */}
      <Adsense
        client="ca-pub-216573955128325"
        slot="8740003054"
        style={{ display: 'block' }}
        format="auto"
        responsive="true"
        // style={{ width: xxx, height: 300 }}
        // format=""
        // responsive="true"
      />
    </div>
  );
}
