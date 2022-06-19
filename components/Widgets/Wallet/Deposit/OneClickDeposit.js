import { useState } from 'react';
import Box from '../../../Common/Box';
import DepositPanel from './DepositPanel';

const OneClickDeposit = () => {
  const [currency, setCurrency] = useState('AUD');
  const [depositMode, setDepositMode] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const initiateDeposit = (depositCurrency) => {
    setCurrency(depositCurrency);
    setDepositMode(true);
  };

  const cancelDeposit = () => {
    setDepositMode(false);
  };

  return (
    <Box>
      <div className='oneClickDeposit box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <p>One Click Deposit</p>
        </div>
      </div>
      <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
        {!depositMode && (
          <div>
            <button
              type='button'
              className='oneClickDeposit-btn'
              onClick={() => initiateDeposit('AUD')}
            >
              Deposit AUD
            </button>
            <button
              type='button'
              className='oneClickDeposit-btn'
              onClick={() => initiateDeposit('NZD')}
            >
              Deposit NZD
            </button>
            <button
              type='button'
              className='oneClickDeposit-btn'
              onClick={() => initiateDeposit('USD')}
            >
              Deposit USD
            </button>
            <button
              type='button'
              className='oneClickDeposit-btn'
              onClick={() => initiateDeposit('LKR')}
            >
              Deposit LKR
            </button>
            <button
              type='button'
              className='oneClickDeposit-btn'
              onClick={() => initiateDeposit('INR')}
            >
              Deposit INR
            </button>
            <button type='button' className='oneClickDeposit-btn'>
              View Deposit History
            </button>
          </div>
        )}
        {depositMode && (
          <div className='h-full'>
            <DepositPanel currency={currency} cancelDeposit={() => cancelDeposit()} />
          </div>
        )}
      </div>
    </Box>
  );
};

export default OneClickDeposit;
