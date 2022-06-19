import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import MainLayout from '../../../../layouts/MainLayout';
import Footer from '../../../Footer/Footer';

const AddressPanel = () => (
  <MainLayout>
    <div className='common-width usercenter-content'>
      <div className='addr-manage'>
        <div className='addr_cell1'>
          <div className='setting-box'>
            <input
              type='text'
              placeholder='Search Coins'
              className='seach-ipt'
              style={{ color: '#000' }}
            />
            <button className='delete' type='button'>
              Delete
            </button>
            <button className='add_addr_btn flex flex-v-center' type='button'>
              <AddCircleIcon />
              Add Withdrawal Address
            </button>
          </div>
        </div>
        <table className='list-tab'>
          <tr>
            <th>&nbsp;</th>
            <th>Blockchain</th>
            <th>Address</th>
            <th>MEMO / TAG / Paymentid</th>
            <th>Notes</th>
            <th>Other</th>
            <th>&nbsp;</th>
          </tr>
          <tbody>
            <tr>
              <td>
                <input id='checkbox' type='checkbox' value='true' />
              </td>
              <td>REF2</td>
              <td>1qwoieasdaskemkl2jkqjwedasda123</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                <DeleteIcon />
              </td>
            </tr>
            <tr>
              <td>
                <input id='checkbox' type='checkbox' value='true' />
              </td>
              <td>REF2</td>
              <td>1qwoieasdaskemkl2jkqjwedasda123</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                <DeleteIcon />
              </td>
            </tr>
            <tr>
              <td>
                <input id='checkbox' type='checkbox' value='true' />
              </td>
              <td>REF2</td>
              <td>1qwoieasdaskemkl2jkqjwedasda123</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                <DeleteIcon />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
  </MainLayout>
);

export default AddressPanel;
