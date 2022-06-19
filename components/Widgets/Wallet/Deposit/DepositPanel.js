import PropTypes from 'prop-types';

const DepositPanel = ({ currency, cancelDeposit }) => (
  <div className='h-full'>
    <div className='selectWrapper w-full flex flex-space-between p-2 mb-2'>
      <select name='' className='flex-grow-1'>
        <option value='poli'>Poli Pay</option>
        <option value='pay_id'>PayID</option>
        <option value='bpay'>BPAY</option>
        <option value='cash'>Cash Deposit</option>
        <option value='cdirect'>Direct Deposit</option>
      </select>
      <i className='material-icons'>arrow_drop_down</i>
    </div>
    <div className='textfieldWrapper'>
      <input type='text' placeholder={`Deposit ${currency}`} />
    </div>
    <div className='depositPanel-actions flex flex-space-around flex-v-center mt-4'>
      <button type='button' className='oneClickDeposit-btn'>
        Deposit
      </button>
      <button type='button' className='oneClickDeposit-btn' onClick={() => cancelDeposit()}>
        Cancel
      </button>
    </div>
  </div>
);

DepositPanel.propTypes = {
  currency: PropTypes.string.isRequired,
};

export default DepositPanel;
