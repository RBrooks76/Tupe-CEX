import { memo, useState, useEffect } from 'react';

import Box from '../../Common/Box';
import RecentActivityRow from './RecentActivityRow';

const RecentActivity = memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        type: 1,
        time: '2022-02-25 06:25:57',
        amount: '212,50',
        currency: 'TRY',
        reference: 'A02096',
        status: 1,
      },
      {
        id: 2,
        type: 1,
        time: '2022-02-26 08:30:25',
        amount: '1.465,85',
        currency: 'TRY',
        reference: 'A02097',
        status: 1,
      },
      {
        id: 3,
        type: 2,
        time: '2022-02-26 09:16:11',
        amount: '6.000,00',
        currency: 'TRY',
        reference: 'A02098',
        status: 2,
      },
      {
        id: 4,
        type: 1,
        time: '2022-02-27 12:05:03',
        amount: '2.225,35',
        currency: 'TRY',
        reference: 'A02099',
        status: 1,
      },
      {
        id: 5,
        type: 1,
        time: '2022-02-27 14:46:53',
        amount: '128,01',
        currency: 'TRY',
        reference: 'A02100',
        status: 3,
      },
      {
        id: 6,
        type: 2,
        time: '2022-02-27 18:01:03',
        amount: '350,00',
        currency: 'TRY',
        reference: 'A02101',
        status: 2,
      },
    ];

    setData(dataArray);
  }, []);

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <div>
            <p>Recent Deposit</p>
          </div>
          <ul>
            <li>
              <button type='button'>Fiat</button>
            </li>
            <li>
              <button type='button' className='active'>
                Crypto
              </button>
            </li>
          </ul>
        </div>
      </div>
      <table className='recentDeposit-table box-content box-content-height-nobutton'>
        <thead>
          <tr className='no-select'>
            <th className='recentDeposit-tableHeader__date'>
              <span className='gray'>Created</span>
            </th>
            <th>
              <span className='gray'>Deposit Type</span>
            </th>
            <th>
              <span className='gray'>Reference</span>
            </th>
            <th>
              <span className='gray'>Amount</span>
            </th>
            <th>
              <span className='gray'>Status</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {data && data.map((item) => <RecentActivityRow key={item.id.toString()} item={item} />)}
        </tbody>
      </table>
    </Box>
  );
});

export default RecentActivity;
