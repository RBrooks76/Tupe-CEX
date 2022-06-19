import { memo, useState } from 'react';

import Box from '../../Common/Box';
import DepositCryptoSection from '../Wallet/Deposit/DepositCryptoSection';
import DepositFiatSection from '../Wallet/Deposit/DepositFiatSection';

const BankProcess = memo(() => {
  const [tab, setTab] = useState(1);

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <div>
            <p>Deposit</p>
          </div>
          <ul>
            <li>
              <button
                type='button'
                className={tab === 1 ? 'active' : 'passive'}
                onClick={() => setTab(1)}
              >
                Crypto
              </button>
            </li>
            <li>
              <button
                type='button'
                className={tab === 0 ? 'active' : 'passive'}
                onClick={() => setTab(0)}
              >
                Fiat
              </button>
            </li>
          </ul>
        </div>
      </div>
      {tab === 0 && (
        <div className='p-4'>
          <DepositFiatSection />
        </div>
      )}

      {tab === 1 && (
        <div className='p-4'>
          <DepositCryptoSection />
        </div>
      )}
    </Box>
  );
});

export default BankProcess;
