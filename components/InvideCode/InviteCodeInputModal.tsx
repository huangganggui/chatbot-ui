import React, { useState, useEffect } from 'react';
import { IconCircleX } from '@tabler/icons-react';
import { FC } from 'react';

interface Props {
  onRequestClose: () => void;
}

export const InviteCodeInputModal: FC<Props> = ({ onRequestClose }) => {
  const [inviteCode, setInviteCode] = useState('');

  const handleValidation = () => {
    // const validCode = process.env.INVITE_CODE;
    const validCode = 'chat';
    if (inviteCode.trim() === validCode) {
      // alert('邀请码验证通过');
      onRequestClose();
    } else if (inviteCode.trim().length > 0) {
      alert('无效的邀请码');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 dark:bg-gray-800 opacity-50"></div>
      <div className="relative bg-white dark:bg-gray-900 rounded-lg max-w-md w-full">
        <div className="flex items-center justify-center px-4 py-6">
          <IconCircleX size={36} className="text-red-500 dark:text-red-400" />
        </div>
        <div className="px-6 pb-6 text-center">
          <div className="mb-3 text-2xl font-medium">请输入邀请码</div>
          <input
            type="text"
            
            className="border border-gray-300 text-black dark:border-gray-700 rounded-md w-full px-3 py-2 mb-3"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                handleValidation();
              }
            }}
            autoFocus
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2"
            onClick={handleValidation}
          >
            验证
          </button>
        </div>
      </div>
    </div>
  );
};