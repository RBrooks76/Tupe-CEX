import { memo } from 'react';
import PropTypes from 'prop-types';

const Status = memo(({ status }) => {
  if (status === 1) {
    return <span className='status green'>Complete</span>;
  }

  if (status === 2) {
    return <span className='status red'>Rejected</span>;
  }

  return <span className='status gray'>Pending</span>;
});

Status.propTypes = {
  status: PropTypes.number.isRequired,
};

export default Status;
