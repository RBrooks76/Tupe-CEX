import { useState } from 'react';

const SpotAccount = () => {
  const [accountFilter, setAccountFilter] = useState('all');

  const changeAccountFilter = (filter) => {
    setAccountFilter(filter);
  };

  const getFilterClass = (filter) => (accountFilter === filter ? 'active' : '');

  return (
    <div>
      <div className='flex flex-start mt-4'>
        <button
          type='button'
          className={`${getFilterClass('all')} wallet-btn mr-2`}
          onClick={() => changeAccountFilter('all')}
        >
          All
        </button>
        <button
          type='button'
          className={`${getFilterClass('owned')} wallet-btn`}
          onClick={() => changeAccountFilter('owned')}
        >
          Owned
        </button>
      </div>
      <div className='flex flex-space-between flex-v-center mt-4'>
        <div className='flex flex-v-center'>
          <div className='searchWrapper mr-2'>
            <i className='material-icons'>search</i>
            <input type='text' name='searchCoins' placeholder='Search Coins' />
          </div>
          <span className='mx-2'>
            <input type='checkbox' name='hideLow' id='hideLow' className='mr-2' />
            <label htmlFor='hideLow'>Hide &lt; $5</label>
          </span>

          <span className='mx-2'>
            <input type='checkbox' name='hideUnlisted' id='hideUnlisted' className='mr-2' />
            <label htmlFor='hideUnlisted'>Hide unlisted coin&apos;s / token&apos;s</label>
          </span>
        </div>
        <div>
          <span className='mr-2'>Estimated Balance:</span>
          <span className='text-green'>$ 0.000000 ≈ 0.000000000 BTC</span>
        </div>
      </div>
      <div>
        <table className='accountTable datatable mt-2'>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Total</th>
              <th>Available</th>
              <th>Locked</th>
              <th>Estimated Value</th>
              <th>APR</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default SpotAccount;
