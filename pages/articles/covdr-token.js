import SiteLayout from '../../layouts/SiteLayout';
import Announcements from '../../components/Widgets/Announcements/Announcements';

const CovdrToken = () => {
  const announcement = {
    title: 'Tupe will launch COVDR(COVID-19 RECOVERY TOKEN) on March 11th, 2022',
    author: {
      name: 'Tupe',
      thumbnail: '/images/articles/photo_2018-01-15_11-10-26.jpg',
    },
    timestamp: '7 hours ago - Updated',
    news: {
      headline: 'Tupe is scheduled to list COVDR(COVID-19 RECOVERY TOKEN) on Global Section.',
      time: {
        deposit: '2022.03.1106:00 AM UTC',
        trading: '2022.03.1108:00 AM UTC',
        withdrawal: '2022.03.1108:00 AM UTC',
      },
      tradingPairs: 'COVDR/USDT',
    },
  };

  return (
    <SiteLayout>
      <Announcements announcement={announcement}>
        <section className='text--danger'>
          <p className='mt-4'>
            Note: According to the mechanism of COVDR&apos;s contract, each transfer will be
            deducted 5% transfer fees on chain, which means that the actual volume of COVDR that the
            users will receive as deposit = The volume of COVDR that the use rs initially
            transferred - 5% of transfer transaction fee deducted on-chain.
          </p>
          <p className='mt-4'>
            The actual volume of COVDR that the users will receive as withdrawal = The volume of
            COVDR that the users initially transferred - the COVDR withdrawal fees on Tupe - 5%
            transfer transaction fee deducted on-chain.
          </p>
          <p className='mt-4'>
            For further details regarding the mechanism of COVDR contract, please feel free to
            contact COVDR&apos;s official team.
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
            <span>COVID-19 RECOVERY TOKEN</span>
          </p>
          <p className='my-4'>
            <strong>Abbreviation: </strong>
            <span>COVDR</span>
          </p>
          <p className='my-4'>
            <strong>Project Introduction </strong>
          </p>
          <p className='indented my-4'>
            COVID-19 RECOVERY token (COVDR):A globally recognized and accepted crypto-token, with a
            unique algorithm, providing potentially immeasurablevalue to its holders.Enhancing
            efficient and sustainable economic recovery for communities from the after-math of
            COVID-19, leveraged by blockchain technologies and
          </p>
          <p className='my-4'>
            COVDR-token creation. With global inclusion and reach as identified gaps, we would adopt
            sustainable development approaches and multiple use cases to bring limitless
            capitalization growth for COVDR-token.
          </p>
          <p className='my-4'>
            <strong>Token type: </strong>
            <span>BEP-20</span>
          </p>
          <p className='my-4'>
            <strong>Total supply: </strong>
            <span>500,000,000,000 COVDR</span>
          </p>
          <p className='my-4'>
            <strong>Official Website: </strong>
            <span>
              <a href='https://covidrcoin.org/'>https://covidrcoin.org/</a>
            </span>
          </p>
          <p className='my-4'>
            <strong>Explorer: </strong>
            <span>
              <a href='https://bscscan.com/token/0xdb8afb917a2d4848ee5b3bed7f6c0bab0555427d'>
                https://bscscan.com/token/0xdb8afb917a2d4848ee5b3bed7f6c0bab0555427d
              </a>
            </span>
          </p>
        </section>
      </Announcements>
    </SiteLayout>
  );
};

export default CovdrToken;
