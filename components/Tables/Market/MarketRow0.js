import { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


// eslint-disable-next-line react/jsx-props-no-spreading
const renderTooltip = (props) => <Tooltip {...props} className="tooltip-area">
  {props !== undefined && props.length > 0 && (
    <table className='hover-table'>
      <thead>
        <tr>
          <th>Pair</th>
          <th>Price</th>
          <th>Change</th>
          <th>24H Volume</th>
        </tr>
      </thead>
      <tbody>
        {props !== undefined && props.map(item=>(
            <tr>
              <td>{item.display_name}</td>
              <td>{item.c}</td>
              <td className={'trading-change ' + (item.P > 0 ? 'green': (item.P == '0.00' ? 'gray':'red'))} >{item.P > 0 ? '+' : ''}{item.P}</td>
              <td>{item.p}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )}
</Tooltip>;

const MarketRow = memo(({ item, index, multiple, unit }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    if (item.status === 1) {
      setColor('green');
    } else {
      setColor('red');
    }
  }, []);
  const price = item.price_change_percentage_24h;

  function round(x) {
    const parsefloat = parseFloat(x).toFixed(8);
    const integer = parsefloat.split('.');
    return Number(integer[0]).toLocaleString() + '.' + integer[1];
  }

  function gotoPage () {
    window.location = '/exchange';
  }

  // return (
  //   <OverlayTrigger 
  //     placement='bottom'
  //     overlay={renderTooltip(item.pair)}>
  //     <tr onClick={gotoPage}>
  //       <td className='markFavorite' style={{width:"5%"}}>
  //         <div className='markFavorite-icon'>
  //           <i className='material-icons'>star_border</i>
  //           <span style={{marginLeft:5, marginTop: 7, display:"inline-flex", verticalAlign:"top"}}>{index}</span>
  //         </div>
  //       </td>
  //       <td className='nowrap' style={{width:"5%"}}>
  //         <div className='icon cover' style={{ backgroundImage: `url('${item.image}')` }} />
  //         <strong>{item.symbol}</strong>
  //       </td>
  //       <td className='nowrap' style={{width:"20%"}}>
  //         <strong>{item.name}</strong>
  //       </td>
  //       <td className='right' style={{width:"14%"}}>
  //         <strong>
  //           {unit} {round(item.current_price/multiple)}
  //         </strong>
  //       </td>
  //       <td className='right' style={{width:"14%"}}>
  //         <strong className={price > 0 ? 'green': (price == '0.00' ? 'gray':'red')}>{price > 0 ? "+" : ""} {round(price)}%</strong>
  //       </td>
  //       <td className='right responsive-hide2' style={{width:"14%"}}>{round(item.high_24h/multiple)}</td>
  //       <td className='right responsive-hide2' style={{width:"14%"}}>{round(item.low_24h/multiple)}</td>
  //       <td className='right' style={{width:"14%"}}>{(round(item.total_volume))}M</td>
  //     </tr>
  //   </OverlayTrigger>
  // );
  return (
    <OverlayTrigger 
      placement='bottom'
      overlay={renderTooltip(item.pair)}>
      <tr onClick={gotoPage}>
        <td className='markFavorite' style={{width:"5%"}}>
          <div className='markFavorite-icon'>
            <i className='material-icons'>star_border</i>
            <span style={{marginLeft:5, marginTop: 7, display:"inline-flex", verticalAlign:"top"}}>{index}</span>
          </div>
        </td>
        <td className='nowrap' style={{width:"5%"}}>
          <div className='icon cover' style={{ backgroundImage: `url('${item.image}')` }} />
          <strong>{item.symbol}</strong>
        </td>
        <td className='nowrap' style={{width:"20%"}}>
          <strong>{item.name}</strong>
        </td>
        <td className='right' style={{width:"14%"}}>
          <strong>
            {unit} {round(item.current_price)}
          </strong>
        </td>
        <td className='right' style={{width:"14%"}}>
          <strong className={price > 0 ? 'green': (price == '0.00' ? 'gray':'red')}>{price > 0 ? "+" : ""} {round(price)}%</strong>
        </td>
        <td className='right responsive-hide2' style={{width:"14%"}}>{round(item.high_24h)}</td>
        <td className='right responsive-hide2' style={{width:"14%"}}>{round(item.low_24h)}</td>
        <td className='right' style={{width:"14%"}}>{(round(item.total_volume / 1000000))}M</td>
      </tr>
    </OverlayTrigger>
  );
});

MarketRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default MarketRow;
