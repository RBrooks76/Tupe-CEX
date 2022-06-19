const DAPP = () => (
  <div>
    <div className='flex flex-space-between flex-v-center mt-4'>
      <div className='flex flex-v-center'>
        <div className='searchWrapper mr-2'>
          <i className='material-icons'>search</i>
          <input type='text' name='searchCoins' placeholder='Search Coins' />
        </div>
        <span className='mx-2'>
          <input type='checkbox' name='hideLow' id='hideLow' className='mr-2' />
          <label htmlFor='hideLow'>Hide &lt; $5</label>
        </span>
      </div>
      <div>
        <span className='mr-2'>Value of Game Accounts:</span>
        <span className='text-green'>0.000000000 BTC ≈ $ 0.000000</span>
      </div>
    </div>
    <div>
      <table className='accountTable datatable mt-2'>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Total</th>
            <th>Available</th>
            <th>Locked</th>
            <th>Estimated</th>
            <th>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
);

export default DAPP;
