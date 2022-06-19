import SiteLayout from '../../layouts/SiteLayout';
import Announcements from '../../components/Widgets/Announcements/Announcements';

const KZNLaunch = () => {
  const announcement = {
    title: 'Tupe will launch KZN(Kaizen Inu) on February 28th, 2022',
    author: {
      name: 'Tupe Customer Service',
      thumbnail: '/images/articles/photo_2018-01-15_11-10-26.jpg',
    },
    timestamp: '5 hours ago - Updated',
    news: {
      headline: 'Tupe is scheduled to list KZN(Kaizen Inu) on Global Section.',
      time: {
        deposit: '2022.02.28 06:00 AM UTC',
        trading: '2022.02.28 08:00 AM UTC',
        withdrawal: '2022.02.28 08:00 AM UTC',
      },
      tradingPairs: 'KZN/USDT',
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
                an extra 0.30% of the trading volume of his/her maker order as reward on Global
                Section!
              </strong>
            </i>
          </p>
        </section>

        <section>
          <p className='my-4'>
            <strong>Project Name: </strong>
            <span>Kaizen Inu</span>
          </p>
          <p className='my-4'>
            <strong>Abbreviation: </strong>
            <span>KZN</span>
          </p>
          <p className='my-4'>
            <strong>Project Introduction </strong>
          </p>
          <p className='indented my-4'>
            Kaizen Inu brings utility and community together in order to rule the coinverse.
          </p>
          <p className='indented my-4'>
            Kaizen Stake Stake Your $KAI with Kaizen Dapp and earn passive income with high APY
          </p>
          <p className='indented my-4'>
            Kaizen NFT Kaizen Inu collection of 1000 NFTs algorithmically generate and collectible
            living on Binance Smart Chain
          </p>
          <p className='my-4'>
            <strong>Token type: </strong>
            <span>BEP-20</span>
          </p>
          <p className='my-4'>
            <strong>Total supply: </strong>
            <span>1,000,000 KZN</span>
          </p>
          <p className='my-4'>
            <strong>Official Website: </strong>
            <span>
              <a href='https://kaizeninu.com/'>https://kaizeninu.com/</a>
            </span>
          </p>
          <p className='my-4'>
            <strong>Explorer: </strong>
            <span>
              <a href='https://bscscan.com/token/0x5e2774fB07559cd2acdEB2a0791853c82AfB8A17'>
                https://bscscan.com/token/0x5e2774fB07559cd2acdEB2a0791853c82AfB8A17
              </a>
            </span>
          </p>
        </section>
      </Announcements>
    </SiteLayout>
  );
};

export default KZNLaunch;
