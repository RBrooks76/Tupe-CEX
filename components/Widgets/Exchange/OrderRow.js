import { memo } from 'react';
import PropTypes from 'prop-types';

const BuyOrdersRow = memo(({ item }) => (
  <tr className='px-2'>
    <td className='left'>
      {item.price} {item.currency}
    </td>
    <td className='center'>
      {item.amount} {item.currency}
    </td>
    <td className='right'>
      {item.total} {item.currency}
    </td>
  </tr>
));

BuyOrdersRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default BuyOrdersRow;
