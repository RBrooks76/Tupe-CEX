import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SiteLayout from '../../layouts/SiteLayout';
import Footer from '../../components/Footer/Footer';

const VoteListingScreen = () => {
  const router = useRouter();
  const [token, setToken] = useState('');

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);

    // if (localToken && process.env.NEXT_PUBLIC_APP_ENV.toLowerCase() === 'production') {
    //   router.push('/home');
    // } else if (!localToken) {
    //   router.push('/');
    // }
  }, []);

  return (
    <>
      <SiteLayout>
        <div className='voteListing'>
          <section className='section hero'>
            <div className='hero-inner'>
              <p>Tupe Vote Listen on Live</p>
            </div>
          </section>
          <table className='voteListing-table'>
            <thead>
              <tr>
                <th>Range</th>
                <th>Project / Coin</th>
                <th>Website</th>
                <th>Whitepaper</th>
                <th>Rules &amp; Regulation</th>
                <th>Make a vote</th>
              </tr>
            </thead>
            <tbody />
          </table>
        </div>
      </SiteLayout>
      <Footer />
    </>
  );
};

export default VoteListingScreen;
