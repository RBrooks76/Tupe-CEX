const LimitOrderBuy = () => (
  <div className='orderForm px-2'>
    <div className='formGroup flex flex-space-between flex-v-center my-1'>
      <div className='formLabel'>Balance</div>
      <div className='flex flex-space-between flex-grow-1'>
        <div>10.249238726 USDT</div>
        <div className='exchange-green'>Deposit</div>
      </div>
    </div>
    <div className='formGroup flex flex-space-between flex-v-center my-1'>
      <div className='formLabel'>Price</div>
      <div className='form-textField'>
        <input type='text' name='price' />
        <span>USDT</span>
      </div>
    </div>
    <div className='formGroup flex flex-space-between flex-v-center my-1'>
      <div className='formLabel'>Volume</div>
      <div className='form-textField'>
        <input type='text' name='volume' />
        <span>BTC</span>
      </div>
    </div>
    <div className='flex flex-space-between flex-v-center my-2'>
      <input type='range' name='percent' className='w-full' defaultValue={0} />
    </div>
    <div className='flex flex-space-between flex-v-center my-2'>
      <div>Total: 0.00 USDT ≈ $0.000000000</div>
      <div>Hide</div>
    </div>
    <div className='flex flex-space-between flex-v-center my-2'>
      <div className='flex flex-v-center pointer'>
        <span>Fee</span>
        <i className='material-icons'>arrow_drop_down</i>
      </div>
      <div>
        Earn
        <span className='exchange-green mx-1'>0.05%</span>/ Pay
        <span className='exchange-red mx-1'>0.20%</span>
      </div>
    </div>
    <button type='button' className='transactButton transactButton-buy p-2'>
      Buy BTC
    </button>
  </div>
);

export default LimitOrderBuy;
