import { memo, useState, useEffect } from 'react';

import TradeHistoryRow from './TradeHistoryRow';

const TradeHistory = memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        amount: '146,70',
        currency: 'TRY',
        weight: 10,
        time: '06:22:15',
        type: 1,
      },
      {
        id: 2,
        amount: '146,70',
        currency: 'TRY',
        weight: 10,
        time: '07:30:30',
        type: 1,
      },
      {
        id: 3,
        amount: '146,70',
        currency: 'TRY',
        weight: 10,
        time: '09:15:42',
        type: 2,
      },
      {
        id: 4,
        amount: '146,70',
        currency: 'TRY',
        weight: 10,
        time: '11:12:50',
        type: 2,
      },
      {
        id: 5,
        amount: '146,70',
        currency: 'TRY',
        weight: 10,
        time: '13:30:01',
        type: 1,
      },
      {
        id: 6,
        amount: '146,70',
        currency: 'TRY',
        weight: 10,
        time: '14:20:36',
        type: 1,
      },
      {
        id: 7,
        amount: '146,70',
        currency: 'TRY',
        weight: 10,
        time: '17:45:58',
        type: 1,
      },
      {
        id: 8,
        amount: '146,70',
        currency: 'TRY',
        weight: 10,
        time: '20:05:54',
        type: 1,
      },
      {
        id: 9,
        amount: '146,70',
        currency: 'TRY',
        weight: 10,
        time: '22:30:45',
        type: 2,
      },
    ];

    setData(dataArray);
  }, []);

  const tradeHistoryStyle = {
    border: '1px solid #ebebeb',
    minWidth: '16rem',
  };

  return (
    <div className='tradeHistory' style={tradeHistoryStyle}>
      <div className='no-select my-1 p-2'>Trade History</div>
      <div className='box-content box-content-height px-2'>
        <div className='trade-history-row'>
          {data && data.length > 0 && (
            <table className='tradeHistoryTable'>
              <thead>
                <tr>
                  <th className='left no-select'>Price</th>
                  <th className='center no-select'>Volume</th>
                  <th className='right no-select'>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <TradeHistoryRow key={item.id.toString()} item={item} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
});

export default TradeHistory;
