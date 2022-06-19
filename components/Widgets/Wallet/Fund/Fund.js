import { useState } from 'react';

import SpotAccount from './SpotAccount';
import InvestmentAccount from './InvestmentAccount';
import DAPP from './DAPP';

const Fund = () => {
  const [currentAccount, setCurrentAccount] = useState('spot');

  const changeAccount = (account) => {
    setCurrentAccount(account);
  };

  const handleKeyDown = () => {
    //
  };

  const getCurrentAccountClass = (account) => (currentAccount === account ? 'active' : '');

  return (
    <div className='wallet px-4'>
      <div className='wallet-tabs'>
        <div
          role='button'
          className={`${getCurrentAccountClass('spot')} wallet-tab`}
          tabIndex={0}
          onClick={() => changeAccount('spot')}
          onKeyDown={() => handleKeyDown}
        >
          Spot Account
        </div>
        <div
          role='button'
          className={`${getCurrentAccountClass('investment')} wallet-tab`}
          tabIndex={0}
          onClick={() => changeAccount('investment')}
          onKeyDown={() => handleKeyDown}
        >
          Investment Account
        </div>
        <div
          role='button'
          className={`${getCurrentAccountClass('dapp')} wallet-tab`}
          tabIndex={0}
          onClick={() => changeAccount('dapp')}
          onKeyDown={() => handleKeyDown}
        >
          DAPP
        </div>
      </div>
      <div className='wallet-tabContents'>
        {currentAccount === 'spot' && (
          <div className='wallet-tabContent'>
            <SpotAccount />
          </div>
        )}
        {currentAccount === 'investment' && (
          <div className='wallet-tabContent'>
            <InvestmentAccount />
          </div>
        )}
        {currentAccount === 'dapp' && (
          <div className='wallet-tabContent'>
            <DAPP />
          </div>
        )}
      </div>
    </div>
  );
};

export default Fund;
