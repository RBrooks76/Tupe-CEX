import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import SiteLayout from '../../layouts/SiteLayout';
import Footer from '../../components/Footer/Footer';
import LaunchpadItem from '../../components/Widgets/Polaris/LaunchpadItem';

const LaunchpadScreen = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [statusFilter, setStatusFilter] = useState('ongoing');
  const [token, setToken] = useState('');

  const changeStatusFilter = (filter) => {
    setStatusFilter(filter);
  };

  const getFilteredItems = () => {
    if (['ended', 'ongoing', 'upcoming'].includes(statusFilter)) {
      return items.filter((item) => item.status === statusFilter);
    }

    return items;
  };

  const handleKeydown = () => {
    //
  };

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);

    // if (localToken && process.env.NEXT_PUBLIC_APP_ENV.toLowerCase() === 'production') {
    //   router.push('/home');
    // } else if (!localToken) {
    //   router.push('/');
    // }

    const launchpadItems = [
      {
        id: 1,
        title: 'NU Goal:360000',
        link: '/polarisDetail',
        token: 'USDT',
        raised: 100,
        status: 'ended',
        date: '2019-12-07 18:00:00',
      },
      {
        id: 2,
        title: 'NU Goal:120000',
        link: '/polarisDetail',
        token: 'USDT',
        raised: 62,
        status: 'ended',
        date: '2019-12-07 18:00:00',
      },
      {
        id: 3,
        title: 'Launchpad Item #3',
        link: '/polarisDetail',
        token: 'USDT',
        raised: 44,
        status: 'ended',
        date: '2020-08-07 18:00:00',
      },
      {
        id: 4,
        title: 'Launchpad Item #4',
        link: '/polarisDetail',
        token: 'USDT',
        raised: 89,
        status: 'ended',
        date: '2020-09-27 12:30:00',
      },
      {
        id: 5,
        title: 'Launchpad Item #5',
        link: '/polarisDetail',
        token: 'USDT',
        raised: 89,
        status: 'ongoing',
        date: '2022-03-12 09:45:00',
      },
      {
        id: 6,
        title: 'Launchpad Item #6',
        link: '/polarisDetail',
        token: 'USDT',
        raised: 78,
        status: 'ongoing',
        date: '2022-03-17 11:30:00',
      },
      {
        id: 7,
        title: 'Launchpad Item #7',
        link: '/polarisDetail',
        token: 'USDT',
        raised: 35,
        status: 'ongoing',
        date: '2022-04-02 02:55:00',
      },
      {
        id: 8,
        title: 'Launchpad Item #8',
        link: '/polarisDetail',
        token: 'USDT',
        raised: 12,
        status: 'upcoming',
        date: '2022-04-26 08:00:00',
      },
      {
        id: 9,
        title: 'Launchpad Item #9',
        link: '/polarisDetail',
        token: 'USDT',
        raised: 0,
        status: 'upcoming',
        date: '2022-06-02 014:30:00',
      },
    ];
    setItems(launchpadItems);
  }, []);

  return (
    <>
      <SiteLayout>
        <div className='flex'>
          <div className='flex-1'>
            <div className='polaris-section'>
              <section className='section hero'>
                <div className='hero-inner'>
                  <h1>Launchpad</h1> <br />
                  <p className='text'>
                    Precisely Selected Cryptocurrency Projects With TOP Quality{' '}
                  </p>
                  <p className='text text2'>- Unlimited possibilities - - Unlimited potentials -</p>
                </div>
                <div className='Header-items hero-actions flex flex-space-around center'>
                  <button
                    type='button'
                    className={statusFilter === 'ended' ? 'active' : 'passive'}
                    onClick={() => changeStatusFilter('ended')}
                    onKeyDown={() => handleKeydown()}
                  >
                    IN PROGRESS
                  </button>
                  <button
                    type='button'
                    className={statusFilter === 'ongoing' ? 'active' : 'passive'}
                    onClick={() => changeStatusFilter('ongoing')}
                    onKeyDown={() => handleKeydown()}
                  >
                    UPCOMING
                  </button>
                  <button
                    type='button'
                    className={statusFilter === 'upcoming' ? 'active' : 'passive'}
                    onClick={() => changeStatusFilter('upcoming')}
                    onKeyDown={() => handleKeydown()}
                  >
                    ENDED
                  </button>
                </div>
              </section>
            </div>
            <div className='flex flex-wrap flex-space-around'>
              {getFilteredItems() &&
                getFilteredItems().map((item) => <LaunchpadItem item={item} />)}
            </div>
          </div>
        </div>
      </SiteLayout>
      <Footer />
    </>
  );
};

export default LaunchpadScreen;
