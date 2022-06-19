import { memo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HeaderLeft = memo(() => {
  const router = useRouter();

  return (
    <div className='header-left nowrap no-select'>
      <div className='flex flex-center flex-v-center'>
        <div className='logo'>
          <Link href='/home'>
            <img src='/images/logo_tupe.png' alt='Crypto Exchange' draggable='false' />
          </Link>
        </div>

        <ul className='header-menu nowrap'>
          <li>
            <Link href='/market'>
              <span
                className={router.pathname.toLowerCase().includes('/market') ? 'active' : 'passive'}
              >
                Market
              </span>
            </Link>
          </li>
          <li>
            <Link href='/exchange'>
              <span
                className={
                  router.pathname.toLowerCase().includes('/exchange') ? 'active' : 'passive'
                }
              >
                Exchange
              </span>
            </Link>
          </li>
          <li>
            <Link href='/investment'>
              <span
                className={
                  router.pathname.toLowerCase().includes('/investment') ? 'active' : 'passive'
                }
              >
                Investment
              </span>
            </Link>
          </li>
          <li>
            <Link href='/events'>
              <span
                className={router.pathname.toLowerCase().includes('/events') ? 'active' : 'passive'}
              >
                Events
              </span>
            </Link>
          </li>
          <li>
            <Link href='/launchpad'>
              <span
                className={
                  router.pathname.toLowerCase().includes('/launchpad') ? 'active' : 'passive'
                }
              >
                Launchpad
              </span>
            </Link>
          </li>
          <li>
            <Link href='/announcement'>
              <span
                className={
                  router.pathname.toLowerCase().includes('/announcement') ? 'active' : 'passive'
                }
              >
                Announcement
              </span>
            </Link>
          </li>
          <li>
            <Link href='/slotandauction'>
              <span
                className={
                  router.pathname.toLowerCase().includes('/slotandauction') ? 'active' : 'passive'
                }
              >
                Slot Auction
              </span>
            </Link>
          </li>
          <li>
            <Link href='/vote-listing'>
              <span
                className={
                  router.pathname.toLowerCase().includes('/vote-listing') ? 'active' : 'passive'
                }
              >
                Vote Listing
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default HeaderLeft;
