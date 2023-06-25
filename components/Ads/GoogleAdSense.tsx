import React from 'react';

import { Adsense } from '@ctrl/react-adsense';

export const GoogleAdSense = () => {
  return (
    <div>
      {/* Your other content goes here */}
      <Adsense
        client="ca-pub-2165739551283251"
        slot="7007478358"

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
