import { memo, useState } from 'react';
import PropTypes from 'prop-types';

import Amount from '../Transactions/Amount';
import Status from '../Transactions/Status';

const Withdraw = memo(({ item }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <tr>
      <td className='responsive-hide'>{item.date}</td>
      <td>Withdrawal</td>
      <td className='nowrap'>
        <div className='icon cover' style={{ backgroundImage: `url('${item.icon}')` }} />
        <strong>{item.coin}</strong>
      </td>
      <td className='responsive-hide'>{item.transaction}</td>
      <td className='center'>
        <Amount type={item.type} amount={item.amount} />
      </td>
      <td>0.012</td>
      <td>
        <Status status={item.status} />
      </td>
      <td className='left sectionWithdrawTable-actionColumn'>
        <button
          type='button'
          className='box-icon pointer center button'
          style={{ color: '#23aa82' }}
          onClick={() => handleMenuOpen()}
        >
          <i className='material-icons'>arrow_drop_down_icon</i>
        </button>
        {menuOpened && (
          <div className='box-dropdown'>
            <ul>
              <li>
                <button type='button'>
                  <i className='material-icons'>settings</i>
                  View Transaction
                </button>
              </li>
            </ul>
          </div>
        )}
      </td>
    </tr>
  );
});

Withdraw.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default Withdraw;
