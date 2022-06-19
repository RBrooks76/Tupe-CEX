import { memo } from 'react';
import PropTypes from 'prop-types';

import StatusName from './StatusName';

const LimitsRow = memo(({ item }) => (
  <tr className='limits-row no-select'>
    <td>
      <div className='icon cover' style={{ backgroundImage: `url('${item.icon}')` }} />
      <strong>{item.currency}</strong>
    </td>
    <td>
      <p>{item.limit24h}</p>
    </td>
    <td>
      <strong>{item.limit30d}</strong>
    </td>
    <td className='right'>
      <StatusName status={item.status} />
    </td>
  </tr>
));

LimitsRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default LimitsRow;
