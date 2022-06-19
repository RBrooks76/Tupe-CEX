import { memo } from 'react';

import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = memo(() => {
  const headerStyle = {
    margin: '0',
    padding: '0.5rem 1rem',
    backgroundColor: '#ffffff00',
  };

  const tabs = [
    {
      title: 'Market',
      path: 'market',
    },
    {
      title: 'Exchange',
      path: 'exchange',
    },
    {
      title: 'Investment',
      path: 'investment',
    },
    {
      title: 'Events',
      path: 'events',
    },
    {
      title: 'Launchpad',
      path: 'launchpad',
    },
    {
      title: 'Announcement',
      path: 'announcement',
    },
    {
      title: 'Slot Auction',
      path: 'slotandauction',
    },
    {
      title: 'Vote Listing',
      path: 'vote-listing',
    },
  ];

  return (
    <header className='header flex flex-center flex-space-between' style={headerStyle}>
      <HeaderLeft />
      <HeaderRight tabs={tabs} />
    </header>
  );
});

export default Header;
