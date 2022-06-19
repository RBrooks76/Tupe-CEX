import BuyOrders from '../BuyOrders/BuyOrders';
import SellOrders from '../SellOrders/SellOrders';

const OrderBook = () => {
  const orderBookStyle = {
    border: '1px solid #ebebeb',
    height: '32rem',
    minWidth: '19rem',
  };

  return (
    <div className='orderBook flex flex-column no-select' style={orderBookStyle}>
      <div className='flex flex-space-between flex-v-center mt-2 px-2'>
        <div className='fs-6'>Order Book</div>
        <div className='flex flex-v-center'>
          <button type='button' className='flex flex-v-center mx-1 pointer'>
            <ul className='orderBookIcon'>
              <li key='0' />
              <li key='1' />
              <li key='2' />
              <li key='3' />
            </ul>
          </button>
          <button type='button' className='flex flex-v-center mx-1 pointer'>
            <i className='material-icons exchange-red' style={{ transform: 'rotate(180deg)' }}>
              sort
            </i>
          </button>
          <button type='button' className='flex flex-v-center mx-1 pointer'>
            <i className='material-icons exchange-green' style={{ transform: 'rotate(180deg)' }}>
              sort
            </i>
          </button>
          <select name='decimals' id='orderBookDecimals' className='pointer' defaultValue={4}>
            <option value='1'>1 Decimal</option>
            <option value='2'>2 Decimals</option>
            <option value='3'>3 Decimals</option>
            <option value='4'>4 Decimals</option>
          </select>
          <button type='button' className='flex flex-v-center mx-1 pointer'>
            <i className='material-icons' style={{ color: '#a5a5a5' }}>
              settings
            </i>
          </button>
        </div>
      </div>
      <div className='orderList flex flex-column h-full'>
        <div className='flex flex-space-between px-2' style={{ fontSize: '0.75rem' }}>
          <span>Price</span>
          <span>Volume</span>
          <span>Total</span>
        </div>
        <div className='h-full pt-2'>
          <BuyOrders />
          <div
            className='flex flex-space-between flex-v-center px-2'
            style={{ backgroundColor: '#d3d3d3', height: '2rem' }}
          >
            <div>
              <span className='mr-2'>0.9437</span>
              <span style={{ fontSize: '0.75rem' }}> ≈ $132.3465</span>
            </div>
            <div style={{ fontSize: '0.75rem' }}>Spread: 0.64%</div>
          </div>
          <SellOrders />
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
