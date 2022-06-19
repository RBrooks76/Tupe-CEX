import { useState } from 'react';

import LimitOrderBuy from './LimitOrder/LimitOrderBuy';
import LimitOrderSell from './LimitOrder/LimitOrderSell';
import MarketBuy from './Market/MarketBuy';
import MarketSell from './Market/MarketSell';
import TriggerOrderBuy from './TriggerOrder/TriggerOrderBuy';
import TriggerOrderSell from './TriggerOrder/TriggerOrderSell';

const BuySellPanel = () => {
  const [activeTab, setActiveTab] = useState('limitOrder');

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const handleKeyDown = () => {
    //
  };

  const getTabClass = (tabId) => (activeTab === tabId ? 'active' : '');

  return (
    <div className='buySellPanel'>
      <div className='tabs'>
        <div
          role='button'
          className={`${getTabClass('limitOrder')} tab`}
          tabIndex={0}
          onClick={() => changeTab('limitOrder')}
          onKeyDown={() => handleKeyDown}
        >
          Limit Order
        </div>
        <div
          role='button'
          className={`${getTabClass('market')} tab`}
          tabIndex={0}
          onClick={() => changeTab('market')}
          onKeyDown={() => handleKeyDown}
        >
          Market
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
      </div>
      <div className='tab-content'>
        {activeTab === 'limitOrder' && (
          <div className={`${getTabClass('limitOrder')} flex p-2`}>
            <LimitOrderBuy />
            <LimitOrderSell />
          </div>
        )}
        {activeTab === 'market' && (
          <div className={`${getTabClass('market')} flex p-2`}>
            <MarketBuy />
            <MarketSell />
          </div>
        )}
        {activeTab === 'triggerOrder' && (
          <div className={`${getTabClass('triggerOrder')} flex p-2`}>
            <TriggerOrderBuy />
            <TriggerOrderSell />
          </div>
        )}
      </div>
    </div>
  );
};

export default BuySellPanel;
