import React from 'react';
import { useContext, useEffect, useState } from 'react';

import HomeContext from '@/pages/api/home/home.context';

import {
    CloseSidebarButton,
    OpenSidebarButton,
  } from '../../components/Sidebar/components/OpenCloseButton';

import { GoogleAdSense } from '@/components/Ads/GoogleAdSense';

export const Adsbar = () => {
  // const { t } = useTranslation('promptbar');
  const {
    state: { conversations, showAdsbar, defaultModelId, folders, pluginKeys },
    dispatch: homeDispatch,
    handleCreateFolder,
    handleNewConversation,
    handleUpdateConversation,
  } = useContext(HomeContext);

  const handleToggleChatbar = () => {
    homeDispatch({ field: 'showAdsbar', value: !showAdsbar });
    // localStorage.setItem('showAdsbar', JSON.stringify(!showAdsbar));
  };

  var isOpen = showAdsbar;
  const side = "right"

  return isOpen ? (
    <div>
      <div className={`fixed top-0 ${side}-0 z-40 flex h-full w-[260px] flex-none flex-col space-y-2 bg-[#202123] p-2 text-[14px] transition-all sm:relative sm:top-0`} >
        {/* 点击箭头，折叠广告 */}
        <GoogleAdSense />
        <GoogleAdSense />
      </div>

      <CloseSidebarButton onClick={handleToggleChatbar} side={side} />
    </div>
  ) : (
    <OpenSidebarButton onClick={handleToggleChatbar} side={side} />
  );
  }