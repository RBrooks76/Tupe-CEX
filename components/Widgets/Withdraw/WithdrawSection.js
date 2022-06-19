import { useState, useEffect } from 'react';
import WithdrawHistory from '../../Tables/Withdraw/WithdrawHistory';
import FormInput from '../../Forms/FormInput';
import FormCheckbox from '../../Forms/FormCheckbox';
import FormButton from '../../Forms/FormButton';

const WithdrawSection = () => {
  const [data, setData] = useState([]);
  const [agreeBankDetailsCorrect, setAgreeBankDetailsCorrect] = useState(false);

  const toggleBankDetailCorrectAgreement = () => {
    setAgreeBankDetailsCorrect(!agreeBankDetailsCorrect);
  };

  const dataArray = [
    {
      id: 1,
      type: 2,
      transaction: 'BNB',
      date: '2/5/2020 06:24:45',
      from: 'Tarik',
      to: 'Cenk',
      toPicture: 'me.png',
      coin: 'Bitcoin',
      icon: 'https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png',
      amount: '5.553',
      status: 1,
    },
    {
      id: 2,
      type: 2,
      transaction: 'BNB',
      date: '3/5/2020 18:35:12',
      from: 'Tarik',
      to: 'Cenk',
      toPicture: 'me.png',
      coin: 'Ethereum',
      icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png',
      amount: '3.000',
      status: 2,
    },
    {
      id: 3,
      type: 1,
      transaction: 'BNB',
      date: '4/5/2020 13:42:01',
      from: 'Cenk',
      to: 'Tarik',
      toPicture: '',
      coin: 'Tether',
      icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Tether-USDT-icon.png',
      amount: '158',
      status: 3,
    },
  ];
  useEffect(() => {
    setData(dataArray);
  }, []);

  return (
    <div>
      <div className='flex flex-destroy flex-space-between sectionWithdraw-1'>
        <div className='flex-1 box-right-padding col-lg-4'>
          <h3>Withdraw Funds (Crypto)</h3>
          <form className='form' noValidate>
            <div className='form-elements'>
              <div className='form-line'>
                <div className='full-width'>
                  <select name='view' id='view'>
                    <option key='asdf' value='asdf'>
                      asdf
                    </option>
                  </select>
                </div>
              </div>
              <div className='form-line'>
                <label htmlFor='view'>Select Blockchain</label>
              </div>
              <div className='form-line box-vertical-padding form-divider'>
                <div className='flex flex-center box-text flex-space-between no-select'>
                  <div className='nowrap'>
                    <p>Available</p>
                    <strong>0</strong>
                  </div>
                  <div className='nowrap'>
                    <p>Locked</p>
                    <strong>0</strong>
                  </div>
                  <div className='nowrap'>
                    <p>Total</p>
                    <strong>0</strong>
                  </div>
                </div>
              </div>
              <div className='form-line flex flex-space-between'>
                <p className='nowrap'>Withdrawal Address</p>
                <a href='/' className='button nowrap'>
                  Address Management &gt;&gt;
                </a>
              </div>
              <div className='form-line'>
                <div className='full-width'>
                  <FormInput type='text' name='name' placeholder='Input your withdrawal address' />
                </div>
              </div>
              <div className='form-line'>
                <div className='full-width box1 flex flex-space-between'>
                  <FormInput type='text' name='name' placeholder='Amount' />
                  <div className='avabalance flex nowrap flex-v-center'>
                    Available：<span>0.00000000 USDT</span>
                  </div>
                </div>
              </div>
              <div className='form-line'>
                <p>Fee: 1 USDT</p>
              </div>
              <div className='form-line'>
                <p>You Will Get: 0.000000 USDT</p>
              </div>
              <div className='form-line'>
                <a href='/' className='button'>
                  Various Fee Standards
                </a>
              </div>
              <div className='form-line'>
                <p className='red'>Your withdrawable limit remains today 10 BTC / 10 BTC</p>
                <a href='/' className='button'>
                  Increase the withdrawal limit
                </a>
              </div>
              <div className='form-line'>
                <div className='button full-width submit flex flex-v-center flex-h-center'>
                  Submit
                </div>
              </div>
              <div className='form-line dep-tips'>
                <p>
                  ●IMPORTANT: Send only USDT to this deposit address. Sending any other currency to
                  this address may result in the loss of your deposit.
                </p>
              </div>
              <div className='form-line dep-tips'>
                <p>
                  ●Notice: Coins will be deposited immediately after multiple network confirmation.
                </p>
              </div>
              <div className='form-line dep-tips'>
                <p>
                  ●After making a deposit, you can track it&apos;s progress on the history page.
                </p>
              </div>
              <div className='form-line dep-tips'>
                <p className='red'>
                  ● IMPORTANT: We are not allowed to use smart contract addresses for deposits, as
                  the potential losses are irreparable. {}
                  <a href='/' className='nowrap'>
                    More Details &gt;&gt;
                  </a>
                </p>
              </div>
              <div className='form-line dep-tips'>
                <p>
                  ●After finishing your deposit transaction(s), you may enter the &quot;deposit
                  history&quot; page to track the progress of your deposit(s). History Record(s)
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className='flex-2 col-lg-8'>
          <div className='box-horizontal-padding no-select'>
            <h3>Withdrawals History</h3>
          </div>
          {data && data.length > 0 && (
            <table className='data-table m-3'>
              <thead>
                <tr>
                  <th className='left'>Date</th>
                  <th className='left'>Type</th>
                  <th className='left responsive-hide'>Coin</th>
                  <th className='left responsive-hide'>Network</th>
                  <th className='left'>Amount</th>
                  <th className='left'>Fee</th>
                  <th className='left'>Status</th>
                  <th className='left sectionWithdrawTable-actionColumn'>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <WithdrawHistory key={item.id.toString()} item={item} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className='row sectionWithdraw-2'>
        <div className='flex-1 box-right-padding col-lg-4'>
          <h3>Withdraw Funds (FIAT)</h3>
          <hr />
          <form className='form' noValidate>
            <div className='form-elements'>
              <div className='form-line box-vertical-padding form-divider'>
                <div className='box-text flex-space-between'>
                  <h4>Amount to withdraw</h4>
                  <div className='avabalance flex nowrap flex-v-center mb-4'>
                    AUD balance:<span>$0.31</span>
                  </div>
                  <FormInput
                    className='form-control'
                    type='text'
                    name='name'
                    placeholder='Amount'
                  />
                </div>
              </div>
              <div className='form-line box-horizontal-padding'>
                <div className=''>
                  <FormCheckbox
                    name='confirmation'
                    checked=''
                    text='I have confirmed this withdrawal is
                    correct. Incorrect bank details will lead to significant delays in processing your
                    withdrawal.'
                    onChange={() => toggleBankDetailCorrectAgreement()}
                  />
                </div>
              </div>
              <div className='form-line box-horizontal-padding'>
                <div className='buttons'>
                  <FormButton
                    type='submit'
                    disabled={!agreeBankDetailsCorrect}
                    text='Withdraw Funds'
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='flex-2 col-lg-8'>
          <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
            <h3>Withdrawals History</h3>
          </div>
          <table className='data-table'>
            <thead>
              <tr>
                <th className='left'>&nbsp;</th>
                <th className='left responsive-hide'>Created</th>
                <th className='left responsive-hide'>Amount</th>
                <th className='left'>Status</th>
                <th className='left'>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&nbsp;</td>
                <td>2/5/2020 06:24:45</td>
                <td>35.00</td>
                <td>Completed</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>2/7/2020 09:11:45</td>
                <td>200.00</td>
                <td>Completed</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>2/14/2020 10:04:20</td>
                <td>1023.00</td>
                <td>Closed</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>2/25/2022 10:04:20</td>
                <td>500.00</td>
                <td>In Process</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WithdrawSection;
