const TriggerOrder = () => (
  <div className='orderList'>
    <div className='orderList-toolbar flex flex-end flex-v-center mb-2'>
      <div>
        <input type='checkbox' name='hideOrderPair' id='hideOrderPair' className='mr-2' />
        <label htmlFor='hideOrderPair'>Hide Other Pairs</label>
      </div>
    </div>
    <div>
      <table className='orderTable'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Pair</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Total</th>
            <th>Filled</th>
            <th>Cancel All</th>
          </tr>
        </thead>
        <tbody />
      </table>
    </div>
  </div>
);

export default TriggerOrder;
