import { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const renderTooltip = (props) => <div {...props}>
  {props != undefined && props.length > 0 && (
    <Tooltip className="tooltip-area">
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
          {props.map((item, index) => (
            <tr>
              <td>{item.display_name}</td>
              <td>{item.c}</td>
              <td className={'trading-change ' + (item.P > 0 ? 'green' : (item.P == '0.00' ? 'gray' : 'red'))} >{item.P > 0 ? '+' : ''}{item.P}</td>
              <td>{item.p}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Tooltip>
  )}
</div>;


const MarketRow = memo(({ item, index, multiple, unit, pairlist }) => {
  const [color, setColor] = useState('');
  const [overData, setOverData] = useState([]);

  useEffect(() => {
    if (item.status === 1) {
      setColor('green');
    } else {
      setColor('red');
    }
    var result = pairlist.find(x=>x.id == item.id);
    setOverData(result);
  }, []);

  const price = item.price_change_percentage_24h;

  function round(x) {
    const parsefloat = parseFloat(x).toFixed(8);
    const integer = parsefloat.split('.');
    return Number(integer[0]).toLocaleString() + '.' + integer[1];
  }

  function gotoPage() {
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
  //         <span>{item.symbol}</span>
  //       </td>
  //       <td className='nowrap' style={{width:"20%"}}>
  //         <span>{item.name}</span>
  //       </td>
  //       <td className='right' style={{width:"14%"}}>
  //         <span>
  //           {unit} {round(item.current_price/multiple)}
  //         </span>
  //       </td>
  //       <td className='right' style={{width:"14%"}}>
  //         <span className={price > 0 ? 'green': (price == '0.00' ? 'gray':'red')}>{price > 0 ? "+" : ""} {round(price)}%</span>
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
      overlay={renderTooltip(overData.pair)}
    >
      <tr onClick={gotoPage}>
        <td className='markFavorite'>
          <div className='markFavorite-icon'>
            <i className='material-icons'>star_border</i>
            <span style={{ marginLeft: 5, marginTop: 7, display: "inline-flex", verticalAlign: "top" }}>{index}</span>
          </div>
        </td>
        <td className='nowrap kks_text_left'>
          <div className='icon cover' style={{ backgroundImage: `url('${item.image}')` }} />
          <span>{item.symbol.toUpperCase()}</span>
        </td>
        <td className='nowrap kks_text_center'>
          <span>{item.name}</span>
        </td>
        <td className='kks_text_center'>
          <span>
            {unit} {item.current_price}
          </span>
        </td>
        <td className='kks_text_center'>
          <span className={price > 0 ? 'green' : (price == '0.00' ? 'gray' : 'red')}>{price > 0 ? "" : ""} {price}%</span>
        </td>
        <td className='kks_text_center githyvxt_center'>{item.high_24h}</td>
        <td className='kks_text_center'>{item.low_24h}</td>
        <td className='kks_text_center'>{(item.total_volume)}M</td>
      </tr>
    </OverlayTrigger>
  );
});

MarketRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default MarketRow;