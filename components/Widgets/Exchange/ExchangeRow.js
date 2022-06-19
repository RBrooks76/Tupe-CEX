import { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ExchangeRow = memo(({ item }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    if (item.status === 1) {
      setColor('green');
    } else {
      setColor('red');
    }
  }, []);

  return (
    <div className='exchange-row flex flex-v-center' style={{ width: '100%' }}>
      <div
        className='flex flex-center pointer'
        style={{ width: '1.5rem', height: '1.5rem', marginRight: '4px' }}
      >
        <i className='material-icons'>star_border</i>
      </div>
      <div
        className='flex flex-center'
        style={{ width: '1.5rem', height: '1.5rem', marginRight: '4px' }}
      >
        <div className='icon cover' style={{ backgroundImage: `url('${item.icon}')` }} />
      </div>
      <div style={{ width: '6rem' }}>{item.name}</div>
      <div className='flex-grow-2'>
        {item.amount} {item.currency}
      </div>
      <div style={{ textAlign: 'right', width: '2rem' }}>
        <span className={color}>{item.change}</span>
      </div>
    </div>
  );
});

ExchangeRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default ExchangeRow;
