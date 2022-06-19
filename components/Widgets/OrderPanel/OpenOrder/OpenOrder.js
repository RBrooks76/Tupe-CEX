import { useState } from 'react';

const OpenOrder = () => {
  const [orderType, setOrderType] = useState('ordinary');

  const changeOrderType = (type) => {
    setOrderType(type);
  };

  const getTabClass = (type) => (orderType === type ? 'active' : '');

  return (
    <div className='orderList'>
      <div className='orderList-toolbar flex flex-space-between flex-v-center mb-2'>
        <div>
          <button
            type='button'
            className={`${getTabClass('ordinary') ? 'active' : ''} orderTypeBtn mr-2`}
            onClick={() => changeOrderType('ordinary')}
          >
            Ordinary
          </button>
          <button
            type='button'
            className={`${getTabClass('triggerOrder') ? 'active' : ''} orderTypeBtn`}
            onClick={() => changeOrderType('triggerOrder')}
          >
            Trigger Order
          </button>
        </div>
        <div>
          <input type='checkbox' name='hideOrderPair' id='hideOrderPair' className='mr-2' />
          <label htmlFor='hideOrderPair'>Hide Other Pairs</label>
        </div>
      </div>
      <div>
        <table className='orderTable'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Pair</th>
              <th>Stop</th>
              <th>Price</th>
              <th>Volume</th>
              <th>Total</th>
              <th>Cancel All</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    </div>
  );
};

export default OpenOrder;
