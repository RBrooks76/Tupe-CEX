import { memo } from 'react';
import PropTypes from 'prop-types';

import ProcessType from './ProcessType';
import StatusName from './StatusName';

const RecentActivityRow = memo(({ item }) => (
  <tr className='activity-row no-select'>
    <td>
      <p>{item.time}</p>
    </td>
    <ProcessType type={item.type} />
    <td>
      <p>{item.reference}</p>
    </td>
    <td>
      <strong>
        {item.amount} {item.currency}
      </strong>
    </td>
    <td>
      <StatusName status={item.status} />
    </td>
  </tr>
));

RecentActivityRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default RecentActivityRow;
