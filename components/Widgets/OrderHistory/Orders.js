import 'rsuite/dist/rsuite.min.css';
import { DateRangePicker } from 'rsuite';

const Orders = () => (
  <div>
    <div className='orderToolbar '>
      <label htmlFor='orderDate' className='px-3'>
        Date
      </label>
      <div className='flex flex-column px-3'>
        <DateRangePicker placeholder='Select Date Range' />
        <small>Records up to 30 days range</small>
      </div>
      <label htmlFor='orderPair_A'>Pair</label>
      <select name='pair' id='orderPair_A' className='flex-grow-2'>
        <option value='0'>All</option>
        <option value='1'>Buy</option>
        <option value='2'>Sell</option>
      </select>
      <span>/</span>
      <select name='pair' id='orderPair_B' className='flex-grow-2'>
        <option value='0'>Ordinary</option>
        <option value='1'>Trigger</option>
      </select>
      <label htmlFor='orderType'>Type</label>
      <select name='type' id='orderType' className='flex-grow-2'>
        <option value='0'>All</option>
        <option value='1'>Buy</option>
        <option value='2'>Sell</option>
      </select>
      <label htmlFor='actionType'>Type</label>
      <select name='type' id='actionType' className='flex-grow-2'>
        <option value='0'>Ordinary</option>
        <option value='1'>Trigger</option>
      </select>
      <div className='flex flex-end flex-v-center'>
        <button type='button' className='orderToolbar-btn orderToolbar-btn__active mx-2'>
          Search
        </button>
        <button type='button' className='orderToolbar-btn mx-2'>
          Reset
        </button>
        <button type='button' className='orderToolbar-btn  flex flex-v-center mx-2'>
          <i className='material-icons text__green mr-2'>logout</i>
          Export
        </button>
      </div>
    </div>
    <div className='mt-4 mb-4'>
      <table className='orderHistory-table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Pair</th>
            <th>Side</th>
            <th>Type</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Filled</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
);

export default Orders;
