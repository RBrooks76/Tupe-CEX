import { useState } from 'react';

const AssetsTab = () => {
  const [activeTab, setActiveTab] = useState('myInvestments');

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const handleKeyDown = () => {
    //
  };

  const getTabClass = (tabId) => (activeTab === tabId ? 'active' : '');

  return (
    <div className='assetsTab p-4'>
      <div className='flex flex-end'>View all account assets</div>
      <div className='assetDetail w-full flex flex-space-around'>
        <div className='flex-grow-1'>
          <div className='title'>Asset Valuation of Investment Account</div>
          <div className='value'>$ 0.00</div>
        </div>
        <div className='flex-grow-1'>
          <div className='title'>Total Income</div>
          <div className='value'>$ 0.00</div>
        </div>
        <div className='flex-grow-1'>
          <div className='title'>Yesterday&apos;s Income</div>
          <div className='value'>$ 0.00</div>
        </div>
      </div>
      <div className='assetsTab-tableHeader flex flex-space-between'>
        <div className='assetsTab-tabs flex flex-v-center'>
          <div
            role='button'
            className={`${getTabClass('myInvestments') ? 'active' : ''} assetsTab-tab px-2`}
            tabIndex={0}
            onClick={() => changeTab('myInvestments')}
            onKeyDown={() => handleKeyDown}
          >
            My Investments
          </div>
          <div
            role='button'
            className={`${getTabClass('incomes') ? 'active' : ''} assetsTab-tab px-2`}
            tabIndex={0}
            onClick={() => changeTab('incomes')}
            onKeyDown={() => handleKeyDown}
          >
            Investment Income(s)
          </div>
          <div
            role='button'
            className={`${getTabClass('accountRecords') ? 'active' : ''} assetsTab-tab px-2`}
            tabIndex={0}
            onClick={() => changeTab('accountRecords')}
            onKeyDown={() => handleKeyDown}
          >
            Account Records
          </div>
          <div
            role='button'
            className={`${getTabClass('transferRecords') ? 'active' : ''} assetsTab-tab px-2`}
            tabIndex={0}
            onClick={() => changeTab('transferRecords')}
            onKeyDown={() => handleKeyDown}
          >
            Transfer Records
          </div>
        </div>
        <div>
          {activeTab === 'myInvestments' && (
            <div className='flex flex-v-center'>
              <input type='checkbox' name='inProgress' id='assetInProgress' className='mr-2' />
              <label htmlFor='assetInProgress' className='mr-2 '>
                In Progress
              </label>
              <div className='selectWrapper'>
                <select name='filterOrders' id='filterOrders'>
                  <option value='0'>Display All Purchased Orders</option>
                </select>
                <i className='material-icons'>arrow_drop_down</i>
              </div>
            </div>
          )}

          {activeTab === 'incomes' && (
            <div className='flex flex-v-center'>
              <div className='selectWrapper'>
                <select name='filterOrders' id='filterOrders'>
                  <option value='0'>Display My Total Income(s)</option>
                </select>
                <i className='material-icons'>arrow_drop_down</i>
              </div>
            </div>
          )}

          {(activeTab === 'accountRecords' || activeTab === 'transferRecords') && (
            <div className='flex flex-v-center'>
              <input
                type='text'
                name='searchCoin'
                id='searchCoin'
                placeholder='Search Coin'
                className='mr-2'
              />
              <div className='selectWrapper mr-2' id='filterRecords'>
                <select name='filterOrders'>
                  <option value='0'>All</option>
                  <option value='1'>Interests</option>
                  <option value='2'>Purchase Investment Products</option>
                  <option value='3'>
                    Already Transfered into Investment Account After Maturity Date
                  </option>
                  <option value='4'>
                    Already Transfered into Investment Account After Redemption
                  </option>
                </select>
                <i className='material-icons'>arrow_drop_down</i>
              </div>
              <button type='button' className='assetsTab-btn assetsTab-btn__search mr-2'>
                Search
              </button>
              <button type='button' className='assetsTab-btn assetsTab-btn__reset'>
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
      <div className='assetsTab-content mt-4'>
        {activeTab === 'myInvestments' && (
          <table className='assetsTab-table'>
            <thead>
              <tr className='flex flex-v-center flex-space-between'>
                <th>Time of Purchase</th>
                <th>Name of Product</th>
                <th>Amount Purchased</th>
                <th>Validity Period</th>
                <th>Status</th>
                <th>Yesterday&apos;s Income</th>
                <th>Total Income</th>
                <th>Operation</th>
              </tr>
            </thead>
          </table>
        )}

        {activeTab === 'incomes' && (
          <table className='assetsTab-table'>
            <thead>
              <tr className='flex flex-v-center flex-space-between'>
                <th>Time</th>
                <th>Name of Product</th>
                <th>Total Amount Purchased</th>
                <th>Current Daily Interest Rate</th>
                <th>Expected Income</th>
                <th>Total Income</th>
              </tr>
            </thead>
          </table>
        )}

        {activeTab === 'accountRecords' && (
          <table className='assetsTab-table'>
            <thead>
              <tr className='flex flex-v-center flex-space-between'>
                <th>Time</th>
                <th>Type</th>
                <th>Coin</th>
                <th>Amount</th>
                <th>Product Name</th>
              </tr>
            </thead>
          </table>
        )}

        {activeTab === 'transferRecords' && (
          <table className='assetsTab-table'>
            <thead>
              <tr className='flex flex-v-center flex-space-between'>
                <th>Time</th>
                <th>Type</th>
                <th>Coin</th>
                <th>Amount</th>
              </tr>
            </thead>
          </table>
        )}
      </div>
    </div>
  );
};

export default AssetsTab;
