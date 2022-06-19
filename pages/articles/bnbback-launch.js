import SiteLayout from '../../layouts/SiteLayout';
import Announcements from '../../components/Widgets/Announcements/Announcements';

const BNBBackLaunch = () => {
  const announcement = {
    title: 'Tupe will launch BNBBACK(BNBBack) on February 25th, 2022',
    author: {
      name: 'Tupe',
      thumbnail: '/images/articles/photo_2018-01-15_11-10-26.jpg',
    },
    timestamp: '2 days ago - Updated',
    news: {
      headline: 'Tupe is scheduled to list BNBBACK(BNBBack) on Global Section.',
      time: {
        deposit: '2022.02.25 08:00 AM UTC',
        trading: '2022.02.25 10:00 AM UTC',
        withdrawal: '2022.02.25 10:00 AM UTC',
      },
      tradingPairs: 'BNBBACK/USDT, BNBBACK/ETH',
    },
  };

  return (
    <SiteLayout>
      <Announcements announcement={announcement}>
        <section className='text--danger'>
          <p className='mt-4'>
            Note: According to the mechanism of BNBBACK&apos;s contract, by successfully depositing
            BNBBACK into their Tupe accounts, the users are required to pay a 10% of deposit
            transaction fee, which means that the actual volume of BNBBACK that the users will
            receive as deposit = The volume of BNBBACK that the users initially transferred - 10% of
            transfer transaction fee deducted on-chain - 10% of deposit transaction fee payable to
            Tupe.
          </p>
          <p className='mt-4'>
            The actual volume of BNBBACK that the users will receive as withdrawal = The volume of
            BNBBACK that the users initially transferred - the BNBBACK withdrawal fees on Tupe-10%
            transfer transaction fee deducted on-chain.
          </p>
          <p className='mt-4'>
            For further details regarding the mechanism of BNBBACK contract, please feel free to
            contact BNBBACK&apos;s official team.
          </p>
        </section>

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
            <span>BNBBack</span>
          </p>
          <p className='my-4'>
            <strong>Abbreviation: </strong>
            <span>BNBBACK</span>
          </p>
          <p className='my-4'>
            <strong>Project Introduction </strong>
          </p>
          <p className='indented my-4'>
            BNBBACK Token is a decentralized BEP20 community-driven token,to bring the unique thrust
            system code deploying on binance smartchain for the first time to bring passive feature
            income hardcodedinto our contract to top until it reaches a threshold. This
            factorimplies that users or the project&apos;s team built on the Binance SmartChain
            network will be extremely safe and rewarding on the spot forlong-term holders. The best
            part is that the tax system is part of thethrust system. It is a platform that values
            our astronaut&apos;s monetaryinvestments and time, as evidenced by its tagline, More in
            Return. By keeping our word, we hope to fulfill our promise to make
            yourinvestment-worthy
          </p>
          <p className='my-4'>
            <strong>Token type: </strong>
            <span>BEP-20</span>
          </p>
          <p className='my-4'>
            <strong>Total supply: </strong>
            <span>1,000,000,000 BNBBACK</span>
          </p>
          <p className='my-4'>
            <strong>Official Website: </strong>
            <span>
              <a href='https://bnbback.io/'>https://bnbback.io/</a>
            </span>
          </p>
          <p className='my-4'>
            <strong>Explorer: </strong>
            <span>
              <a href='https://bscscan.com/token/0x280ebb7c9f2c90ac6dd136516598a2f9efe70507'>
                https://bscscan.com/token/0x280ebb7c9f2c90ac6dd136516598a2f9efe70507
              </a>
            </span>
          </p>
        </section>
      </Announcements>
    </SiteLayout>
  );
};

export default BNBBackLaunch;
