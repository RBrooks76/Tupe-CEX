import { memo } from 'react';
import PropTypes from 'prop-types';

const StatusName = memo(({ status }) => {
  if (status === 1) {
    return <span className='green'>Success</span>;
  }

  if (status === 2) {
    return <span className='red'>Failure</span>;
  }

  return <span className='gray'>Pending</span>;
});

StatusName.propTypes = {
  status: PropTypes.number.isRequired,
};

export default StatusName;
