import Link from 'next/link';

const DepositFiatSection = () => (
  <div>
    <div className='flex'>
      <div className='depositCrypto-coinDetail'>
        <div className='depositCrypto-coinDetailTitle'>Currency</div>
        <div className='depositCrypto-coinDetailValue'>AUD</div>
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
    <div className='mb-4'>
      <div className='textfieldWrapper'>
        <input type='text' placeholder='Minimum Deposit Volume 1' className='py-3' />
        <span>USD</span>
      </div>
      <div className='left mt-1'>Fee: $1.75 AUD</div>
    </div>
    <div className='flex flex-wrap flex-v-center flex-space-between'>
      <div className='flex flex-v-center mb-2'>
        <input
          type='checkbox'
          name='depositFiat-policyCheck'
          id='depositFiat-policyCheck'
          className='mr-2'
        />
        <label htmlFor='depositFiat-policyCheck' className='mr-4'>
          I agree with this user policy and Epay&apos;s user policy
        </label>
      </div>
      <Link href='/'>
        <span className='mb-2' style={{ color: '#413fbc' }}>
          Read Agreement
        </span>
      </Link>
    </div>
    <button type='button' className='btn btn-success mt-4'>
      Submit
    </button>
  </div>
);

export default DepositFiatSection;
