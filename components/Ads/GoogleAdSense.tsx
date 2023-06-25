import React from 'react';

import { Adsense } from '@ctrl/react-adsense';

export const GoogleAdSense = () => {
  return (
    <div>
      {/* Your other content goes here */}
      <Adsense
        client="ca-pub-216573955128325"
        slot="8740003054"

        style={{ display: 'block' }}
        format="auto"
        responsive="true"

        // style={{ width: 224, height: 100 }}
        // format=""
        // responsive="true"

        // style={{ display: 'block' }}
        // layout="in-article"
        // format="fluid"
      />
    </div>
  );
}
