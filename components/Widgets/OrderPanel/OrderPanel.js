import { useState } from 'react';

import OpenOrder from './OpenOrder/OpenOrder';
import TriggerOrder from './TriggerOrder/TriggerOrder';
import OrderHistory from './OrderHistory/OrderHistory';

const OrderPanel = () => {
  const [activeTab, setActiveTab] = useState('openOrder');

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const handleKeyDown = () => {
    //
  };

  const getTabClass = (tabId) => (activeTab === tabId ? 'active' : '');

  return (
    <div className='orderPanel'>
      <div className='tabs'>
        <div
          role='button'
          className={`${getTabClass('openOrder')} tab`}
          tabIndex={0}
          onClick={() => changeTab('openOrder')}
          onKeyDown={() => handleKeyDown}
        >
          Open Order
        </div>
        <div
          role='button'
          className={`${getTabClass('triggerOrder')} tab`}
          tabIndex={0}
          onClick={() => changeTab('triggerOrder')}
          onKeyDown={() => handleKeyDown}
        >
          Trigger Order
        </div>
        <div
          role='button'
          className={`${getTabClass('orderHistory')} tab`}
          tabIndex={0}
          onClick={() => changeTab('orderHistory')}
          onKeyDown={() => handleKeyDown}
        >
          24H Order History
        </div>
      </div>
      <div className='tab-content'>
        {activeTab === 'openOrder' && (
          <div className={`${getTabClass('openOrder')} flex p-2`}>
            <OpenOrder />
          </div>
        )}
        {activeTab === 'triggerOrder' && (
          <div className={`${getTabClass('triggerOrder')} flex p-2`}>
            <TriggerOrder />
          </div>
        )}
        {activeTab === 'orderHistory' && (
          <div className={`${getTabClass('orderHistory')} flex p-2`}>
            <OrderHistory />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPanel;
