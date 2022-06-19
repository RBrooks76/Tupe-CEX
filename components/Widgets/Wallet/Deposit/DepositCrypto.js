import DepositCryptoSection from './DepositCryptoSection';

const DepositCrypto = () => (
  <div className='depositCrypto'>
    <div className='depositCrypto-panel'>
      <DepositCryptoSection />
    </div>

    <div className='depositCrypto-panel'>
      <div className='flex flex-space-between mb-4'>
        <div className='depositCrypto-contentTitle'>ETH Investment Products</div>
        <div className='depositCrypto-contentSubtitle'>More</div>
      </div>
      <div className='depositCrypto-investmentProducts'>
        <div className='depositCrypto-investmentProduct'>
          <div className='flex'>
            <div className='investmentProduct-icon px-2'>
              <img
                src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png'
                alt=''
              />
            </div>
            <div className='investmentProduct-content'>
              <div>ETH T+1 DeFi Farm</div>
              <div className='my-4'>
                <span className='mr-2'>APY</span>
                <span className='green'>5.65%</span>
              </div>
              <div className='investmentProduct-action'>
                <button type='button'>
                  <span>Click to view</span>
                  <i className='material-icons'>arrow_forward</i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='depositCrypto-investmentProduct'>
          <div className='flex'>
            <div className='investmentProduct-icon px-2'>
              <img
                src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png'
                alt=''
              />
            </div>
            <div className='investmentProduct-content'>
              <div>ETH 60 Day Lockup</div>
              <div className='my-4'>
                <span className='mr-2'>APY</span>
                <span className='green'>5.65%</span>
              </div>
              <div className='investmentProduct-action'>
                <button type='button'>
                  <span>Click to view</span>
                  <i className='material-icons'>arrow_forward</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default DepositCrypto;
