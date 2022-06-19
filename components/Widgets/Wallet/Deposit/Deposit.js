import { useState } from 'react';

import DepositCrypto from './DepositCrypto';
import DepositFiat from './DepositFiat';

const Deposit = () => {
  const [activeTab, setActiveTab] = useState('crypto');

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const handleKeyDown = () => {
    //
  };

  const getTabClass = (tab) => (activeTab === tab ? 'active' : '');

  return (
    <div className='deposit p-2'>
      <div className='deposit-tabs'>
        <div
          role='button'
          className={`${getTabClass('crypto')} deposit-tab p-2 mr-4`}
          tabIndex={0}
          onClick={() => changeTab('crypto')}
          onKeyDown={() => handleKeyDown}
        >
          Crypto
        </div>
        <div
          role='button'
          className={`${getTabClass('fiat')} deposit-tab p-2 mr-4`}
          tabIndex={0}
          onClick={() => changeTab('fiat')}
          onKeyDown={() => handleKeyDown}
        >
          Fiat
        </div>
      </div>
      <div className='deposit-tabContents mt-4'>
        {activeTab === 'crypto' && (
          <div className={`${getTabClass('crypto')} deposit-tabContent`}>
            <DepositCrypto />
          </div>
        )}
        {activeTab === 'fiat' && (
          <div className={`${getTabClass('fiat')} deposit-tabContent`}>
            <DepositFiat />
          </div>
        )}
      </div>
    </div>
  );
};

export default Deposit;
