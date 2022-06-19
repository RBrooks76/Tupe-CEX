import { memo, useState, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const MyAssetsRow = memo(({ item }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    if (item.status === 1) {
      setColor('green');
    } else {
      setColor('red');
    }
  }, []);

  return (
    <tr className='assets-row'>
      <td className='px-2'>
        <div className='h-full flex flex-v-center'>
          <div className='icon cover mr-2' style={{ backgroundImage: `url('${item.icon}')` }} />
          <div className='left'>
            <strong>{item.name}</strong>
            <span>{item.symbol}</span>
          </div>
        </div>
      </td>
      <td className='center'>{item.balance}</td>
      <td className='center'>
        <strong>
          {item.amount} {item.currency}
        </strong>
      </td>
      <td className={`${color} center`}>{item.change}</td>
      <td className='center'>
        {item.value} {item.currency}
      </td>
      <td className='nowrap no-select right'>
        <Link href='/'>
          <i className='material-icons'>money</i>
        </Link>
        <Link href='/'>
          <i className='material-icons'>receipt</i>
        </Link>
      </td>
    </tr>
  );
});

MyAssetsRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default MyAssetsRow;
