import DepositFiatSection from './DepositFiatSection';

const DepositFiat = () => (
  <div className='depositCrypto'>
    <div className='depositCrypto-panel'>
      <DepositFiatSection />
    </div>

    <div className='depositCrypto-panel'>
      <div className='flex flex-space-between my-4'>
        <div className='depositCrypto-contentTitle'>Deposits History</div>
        <div className='depositCrypto-contentSubtitle'>More</div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Coin</th>
              <th>Network</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
);

export default DepositFiat;
