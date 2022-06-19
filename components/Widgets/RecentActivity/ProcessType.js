import { memo } from 'react';
import PropTypes from 'prop-types';

const ProcessType = memo(({ type }) => {
  if (type === 1) {
    return (
      <td className='nowrap'>
        <div className='icon green'>
          <i className='material-icons'>arrow_upward</i>
        </div>
        <strong>Loading</strong>
      </td>
    );
  }

  return (
    <td className='nowrap'>
      <div className='icon red'>
        <i className='material-icons'>arrow_downward</i>
      </div>
      <strong>Rejected</strong>
    </td>
  );
});

ProcessType.propTypes = {
  type: PropTypes.number.isRequired,
};

export default ProcessType;
