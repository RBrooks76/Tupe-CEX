import SiteLayout from '../../layouts/SiteLayout';
import Announcements from '../../components/Widgets/Announcements/Announcements';

const CryptoProLaunch = () => {
  const announcement = {
    title: 'Tupe will launch CPRO(CryptoPro) on February 18th, 2022',
    author: {
      name: 'Tupe',
      thumbnail: '/images/articles/photo_2018-01-15_11-10-26.jpg',
    },
    timestamp: '9 days ago - Updated',
    news: {
      headline: 'Tupe is scheduled to list CPRO(CryptoPro) on Growing Section.',
      time: {
        deposit: '2022.02.18 05:00 AM UTC',
        trading: '2022.02.25 2022.02.18 07:00 AM UTC',
        withdrawal: false,
      },
      tradingPairs: 'CPRO/USDT',
    },
  };

  return (
    <SiteLayout>
      <Announcements announcement={announcement}>
        <section>
          <p className='indented'>
            <i>
              <strong>
                Tupe users exclusively enjoy “Minus Maker Means Minus Transaction Fee” mechanism.
                placing and settling any maker order, the user will enjoy 0 transaction fee and an
                an extra 0.50% of the trading volume of his/her maker order as reward on Growing
                Section!】
              </strong>
            </i>
          </p>
        </section>

        <section>
          <p className='my-4'>
            <strong>Project Name: </strong>
            <span>CryptoPro</span>
          </p>
          <p className='my-4'>
            <strong>Abbreviation: </strong>
            <span>CPRO</span>
          </p>
          <p className='my-4'>
            <strong>Project Introduction </strong>
          </p>
          <p className='indented my-4'>
            CryptoPro aims to be the secure end-to-end solution for any blockchain resident to move
            and exchange assets. To fulfill this role, CryptoPro team is building on three layers
            simultaneously: a dedicated blockchain served as the infrastructure freeway connecting
            all kinds of blockchains to break the barriers.
          </p>
          <p className='my-4'>
            <strong>Token type: </strong>
            <span>BEP-20</span>
          </p>
          <p className='my-4'>
            <strong>Total supply: </strong>
            <span>100,000,000 CPRO</span>
          </p>
          <p className='my-4'>
            <strong>Official Website: </strong>
            <span>
              <a href='https://cryptopro.net.in/'>https://cryptopro.net.in/</a>
            </span>
          </p>
          <p className='my-4'>
            <strong>Explorer: </strong>
            <span>
              <a href='https://bscscan.com/token/0x2eea0dc7c4f03d32af8021dcc0092f841675c8ca'>
                https://bscscan.com/token/0x2eea0dc7c4f03d32af8021dcc0092f841675c8ca
              </a>
            </span>
          </p>
        </section>
      </Announcements>
    </SiteLayout>
  );
};

export default CryptoProLaunch;
