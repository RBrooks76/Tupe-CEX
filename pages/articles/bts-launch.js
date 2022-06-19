import SiteLayout from '../../layouts/SiteLayout';
import Announcements from '../../components/Widgets/Announcements/Announcements';

const BTSLaunch = () => {
  const announcement = {
    title: 'Tupe will launch BTS(Bitshitcoin) on March 1st, 2022',
    author: {
      name: 'Tupe Customer Service',
      thumbnail: '/images/articles/photo_2018-01-15_11-10-26.jpg',
    },
    timestamp: '5 hours ago - Updated',
    news: {
      headline: 'Tupe is scheduled to list BTS(Bitshitcoin) on Global Section.',
      time: {
        deposit: '2022.03.01  06:00 AM UTC',
        trading: '2022.03.01  08:00 AM UTC',
        withdrawal: '2022.03.01  08:00 AM UTC',
      },
      tradingPairs: 'BTS/nUSD',
    },
  };

  return (
    <SiteLayout>
      <Announcements announcement={announcement}>
        <section className='text--danger'>
          <p className='mt-4'>
            Note: According to the mechanism of BTS ’s contract, by successfully depositing BTS into
            their Tupe accounts, the users are required to pay a 9% of deposit transaction fee,
            which means that the actual volume of BTS that the users will receive as deposit = The
            volume of BTS that the users initially transferred - 9% of transfer transaction fee
            deducted on-chain - 9% of deposit transaction fee payable to Tupe.
          </p>
          <p className='mt-4'>
            The actual volume of BTS that the users will receive as withdrawal = The volume of BTS
            that the users initially transferred - the BTS withdrawal fees on Tupe- 9% transfer
            transaction fee deducted on-chain.
          </p>
          <p className='mt-4'>
            For further details regarding the mechanism of BTS contract, please feel free to contact
            BTS ‘s official team.
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
            <span>Bitshitcoin</span>
          </p>
          <p className='my-4'>
            <strong>Abbreviation: </strong>
            <span>BTS</span>
          </p>
          <p className='my-4'>
            <strong>Project Introduction </strong>
          </p>
          <p className='indented my-4'>
            Bitshitcoin ($BTS) is a Community-Centered Token. This token was supply on December 2021
            and in the number Of 21 Quadrillion. $BTS is known as the Digital Asset of Bit Shitcoin.
          </p>
          <p className='indented my-4'>
            This token is a Utility Token and represents the assets of the Bitshitcoin and has a
            Currency Value Therefore, it can be considered a Currency Token is a type of investment
            contract with passive income potential and can be used in various forms (earning profit
            by holding tokens, Staking, Investing or performing Mining operations, etc.) to make a
            profit. Therefore, it can be considered a Dividend Token.
          </p>
          <p className='my-4'>
            <strong>Token type: </strong>
            <span>BEP-20</span>
          </p>
          <p className='my-4'>
            <strong>Total supply: </strong>
            <span>21,000,000,000,000,000 BTS</span>
          </p>
          <p className='my-4'>
            <strong>Official Website: </strong>
            <span>
              <a href='https://btsswap.exchange/'>https://btsswap.exchange/</a>
            </span>
          </p>
          <p className='my-4'>
            <strong>Explorer: </strong>
            <span>
              <a href='https://bscscan.com/token/0xc62baed99971177624b8be09d7b11142cd7f4351'>
                https://bscscan.com/token/0xc62baed99971177624b8be09d7b11142cd7f4351
              </a>
            </span>
          </p>
        </section>
      </Announcements>
    </SiteLayout>
  );
};

export default BTSLaunch;
