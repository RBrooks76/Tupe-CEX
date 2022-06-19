import { memo } from 'react';
import PropTypes from 'prop-types';

const TradeHistoryRow = memo(({ item }) => (
  <tr className={item.type === 1 ? 'green' : 'red'}>
    <td className='left px-0'>
      {item.amount} {item.currency}
    </td>
    <td className='center px-0'>{item.weight}</td>
    <td className='right px-0'>{item.time}</td>
  </tr>
));

TradeHistoryRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default TradeHistoryRow;
