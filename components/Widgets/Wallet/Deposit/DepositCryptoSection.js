const DepositCryptoSection = () => (
  <div>
    <div className='selectWrapper w-full flex flex-space-between p-2'>
      <select name='cryptoCoin' className='flex-grow-1'>
        <option value='0'>BTC</option>
        <option value='0'>ETH</option>
      </select>
      <i className='material-icons'>arrow_drop_down</i>
    </div>
    <div className='my-4'>
      <div className='mb-4 left'>Select Blockchain</div>
      <div className='depositCrypto-coins'>
        <div className='depositCrypto-coin active'>ERC20</div>
        <div className='depositCrypto-coin'>BEP20(BSC)</div>
        <div className='depositCrypto-coin'>METISEVM</div>
        <div className='depositCrypto-coin'>ARBITRUM</div>
        <div className='depositCrypto-coin'>POLYGON</div>
        <div className='depositCrypto-coin disabled'>AURORA</div>
      </div>
    </div>
    <div className='flex'>
      <div className='depositCrypto-coinDetail'>
        <div className='depositCrypto-coinDetailTitle'>Currency</div>
        <div className='depositCrypto-coinDetailValue'>BTC</div>
      </div>
      <div className='depositCrypto-coinDetail'>
        <div className='depositCrypto-coinDetailTitle'>Available</div>
        <div className='depositCrypto-coinDetailValue'>0.0005106</div>
      </div>
      <div className='depositCrypto-coinDetail'>
        <div className='depositCrypto-coinDetailTitle'>Locked</div>
        <div className='depositCrypto-coinDetailValue'>0.0005106</div>
      </div>
      <div className='depositCrypto-coinDetail'>
        <div className='depositCrypto-coinDetailTitle'>Total</div>
        <div className='depositCrypto-coinDetailValue'>0.0005106</div>
      </div>
    </div>
    <div className='depositCrypto-address'>
      <div className='depositCrypto-addressTitle'>ETH: Deposit Address</div>
      <div className='depositCrypto-addressValue'>0x2861ac9f4959d14efa8395967422df13</div>
      <div className='depositCrypto-addressActions'>
        <button type='button'>
          <i className='material-icons'>content_copy</i>
          <span>Copy</span>
        </button>
        <button type='button'>
          <i className='material-icons'>qr_code</i>
          <span>Show QR Code</span>
        </button>
      </div>
    </div>
    <div className='left mt-4'>
      <ul>
        <li className='depositCrypto-listItem my-2'>
          IMPORTANT: Send only ETH to this deposit address. Sending any other currency to this
          address may result in the loss of your deposits.
        </li>
        <li className='depositCrypto-listItem my-2'>
          Notice: Coins will be deposited immediately after 30 network confirmation.
        </li>
        <li className='depositCrypto-listItem danger my-2'>
          IMPORTANT: We are not allowed to use smart contract addresses for deposits, as the
          potential losses are irreparable. More details &gt;&gt;
        </li>
        <li className='depositCrypto-listItem my-2'>
          After finishing your deposit transaction(s), you may enter the &quot;deposit history&quot;
          page to track the progress of your deposit(s). History Records(s).
        </li>
      </ul>
    </div>
  </div>
);

export default DepositCryptoSection;
