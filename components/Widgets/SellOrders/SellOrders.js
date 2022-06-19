import { memo, useState, useEffect } from 'react';

import OrderRow from '../Exchange/OrderRow';

const SellOrders = memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        price: '82,03',
        amount: '0,15',
        total: '237,31',
        currency: 'TRY',
        type: 3,
        fill: '50%',
      },
      {
        id: 2,
        price: '82,03',
        amount: '0,15',
        total: '237,31',
        currency: 'TRY',
        type: 3,
        fill: '50%',
      },
      {
        id: 3,
        price: '82,03',
        amount: '0,15',
        total: '237,31',
        currency: 'TRY',
        type: 1,
        fill: '50%',
      },
      {
        id: 4,
        price: '82,03',
        amount: '0,15',
        total: '237,31',
        currency: 'TRY',
        type: 3,
        fill: '50%',
      },
      {
        id: 5,
        price: '82,03',
        amount: '0,15',
        total: '237,31',
        currency: 'TRY',
        type: 2,
        fill: '50%',
      },
      {
        id: 6,
        price: '82,03',
        amount: '0,15',
        total: '237,31',
        currency: 'TRY',
        type: 1,
        fill: '50%',
      },
      {
        id: 7,
        price: '82,03',
        amount: '0,15',
        total: '237,31',
        currency: 'TRY',
        type: 1,
        fill: '50%',
      },
      {
        id: 8,
        price: '82,03',
        amount: '0,15',
        total: '237,31',
        currency: 'TRY',
        type: 3,
        fill: '50%',
      },
      {
        id: 9,
        price: '82,03',
        amount: '0,15',
        total: '237,31',
        currency: 'TRY',
        type: 2,
        fill: '50%',
      },
    ];

    setData(dataArray);
  }, []);

  const orderTableStyle = {
    backgroundColor: '#ff000022',
    height: 'calc(50% - 2rem)',
    overflowY: 'auto',
  };

  return (
    <div style={orderTableStyle}>
      <div className='box-content box-content-height-nobutton'>
        <div className='orders-row'>
          {data && data.length > 0 && (
            <table className='orderBookTable'>
              <tbody>
                {data.map((item) => (
                  <OrderRow key={item.id.toString()} item={item} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
});

export default SellOrders;
