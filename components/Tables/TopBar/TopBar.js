import { memo } from 'react';
import PropTypes from 'prop-types';



const TopBar = memo(({ searchValue, searchOnChange, searchSubmit, handleTopButtonEvent, type, setCount }) => {

  const onChooseCoinCount = (e) => {
    setCount(e.target.value);
  }

  return (
    <div className='top-buttons'>
      <div  className='flex kks_flex_between mt-2 mr-5'>
        <div className='top-search no-select nowrap'>
          <form onSubmit={searchSubmit} noValidate>
            <input
              type='text'
              id='search'
              name='search'
              autoComplete='off'
              placeholder='Search...'
              onChange={searchOnChange}
              topButtonEvent={handleTopButtonEvent}
              value={searchValue}
            />
            <button type='submit' className='pointer'>
              {/* <i className='material-icons'>search</i> */}
            </button>
          </form>
        </div>
        {/* <div className='flex kks-search-separate-select'></div> */}
        <div className='top_search no_select kks_select_count_border'>
            <select name='countCoins' id='countCoins' className='flex-grow-2 kks_count_select' onChange={ e => onChooseCoinCount(e)}>
              <option className='kks_count_select_option' value='20'>20</option>
              <option className='kks_count_select_option' value='50'>50</option>
              <option className='kks_count_select_option' value='100'>100</option>
            </select>
        </div>
      </div>
      <div className='flex flex-center flex-space-between mt-2'>
        <div className='btn-box'>
          <button className={'button button-white button-small ' + (type === 'Favorites' ? 'active' : '')} type='button' onClick={()=>handleTopButtonEvent('Favorites')}>
            <span className='txt'>Favorites</span>
          </button>
          <button className={'button button-white button-small ' + (type === 'TUPE' ? 'active' : '')}  type='button' onClick={()=>handleTopButtonEvent('TUPE')}>
            <span className='txt'>TUPE</span>
          </button>
          <button className={'button button-white button-small ' + (type === 'AUD' ? 'active' : '')}  type='button' onClick={()=>handleTopButtonEvent('AUD')}>
            <span className='txt'>AUD</span>
          </button>
          <button className={'button button-white button-small ' + (type === 'NZD' ? 'active' : '')}  type='button' onClick={()=>handleTopButtonEvent('NZD')}>
            <span className='txt'>NZD</span>
          </button>
          <button className={'button button-white button-small ' + (type === 'LKR' ? 'active' : '')}  type='button' onClick={()=>handleTopButtonEvent('LKR')}>
            <span className='txt'>LKR</span>
          </button>
          <button className={'button button-white button-small ' + (type === 'INR' ? 'active' : '')}  type='button' onClick={()=>handleTopButtonEvent('INR')}>
            <span className='txt'>INR</span>
          </button>
          <button className={'button button-white button-small ' + (type === 'BTC' ? 'active' : '')}  type='button' onClick={()=>handleTopButtonEvent('BTC')}>
            <span className='txt'>BTC</span>
          </button>
          <button className={'button button-white button-small ' + (type === 'ETH' ? 'active' : '')}  type='button' onClick={()=>handleTopButtonEvent('ETH')}>
            <span className='txt'>ETH</span>
          </button>
          <button className={'button button-white button-small ' + (type === 'BNB' ? 'active' : '')}  type='button' onClick={()=>handleTopButtonEvent('BNB')}>
            <span className='txt'>BNB</span>
          </button>
          <button className={'button button-white button-small ' + (type === 'TAUD' ? 'active' : '')}  type='button' onClick={()=>handleTopButtonEvent('TAUD')}>
            <span className='txt'>TAUD</span>
          </button>
          <button className={'button button-white button-small ' + (type === 'USDT' ? 'active' : '')}  type='button' onClick={()=>handleTopButtonEvent('USDT')}>
            <span className='txt'>USDT</span>
          </button>
          <button className={'button button-white button-small ' + (type === 'SHIB' ? 'active' : '')}  type='button' onClick={()=>handleTopButtonEvent('SHIB')}>
            <span className='txt'>SHIBU</span>
          </button>
        </div>
      </div>
    </div>
  );    
});

TopBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  searchSubmit: PropTypes.func.isRequired,
  searchOnChange: PropTypes.func.isRequired,
  topButtonEvent: PropTypes.func.isRequired,
};

export default TopBar;
