import { memo } from 'react';

import NavbarButton from './NavbarButton';

const Navbar = memo(() => {
  const navbarStyle = {
    marginLeft: '0',
    padding: '0',
  };

  return (
    <nav className='navbar-inner no-select' style={navbarStyle}>
      <ul style={{ marginTop: '0' }}>
        <li>
          <NavbarButton url='/home' icon='home' title='Home' />
        </li>
        <li>
          <NavbarButton url='/dashboard' icon='dashboard' title='Deposit Pull' />
        </li>
        <li>
          <NavbarButton url='/withdraw' icon='paid' title='Withdraw' />
        </li>
        <li>
          <NavbarButton url='/wallet' icon='account_balance_wallet' title='Wallet' />
        </li>
        <li>
          <NavbarButton url='/order-history' icon='account_balance' title='Order History' />
        </li>
      </ul>
      <h3>Account</h3>
      <ul>
        <li>
          <NavbarButton url='/members' icon='account_circle' title='Profile' />
        </li>
        <li>
          <NavbarButton url='/security_settings' icon='settings' title='Security Settings' />
        </li>
        <li>
          <NavbarButton url='/referral_bonus' icon='chat' title='Referral Bonus' />
        </li>
        <li>
          <NavbarButton url='/address_management' icon='contacts' title='Address Management' />
        </li>
      </ul>
      <div className='copyright'>
        <strong>TUPE Corporation</strong>
        <p>2022 &copy; Copyright</p>
        <p className='mt-4'>Manufactured by IceFrogMate</p>
      </div>
    </nav>
  );
});

export default Navbar;
