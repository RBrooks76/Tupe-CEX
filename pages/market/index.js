import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import SiteLayout from '../../layouts/SiteLayout';
import TopBar from '../../components/Tables/TopBar/TopBar';
import MarketRow from '../../components/Tables/Market/MarketRow';
import TopCoins from '../../components/Tables/Market/TopCoins';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Common/Pagination';
import {isNil, cloneDeep, orderBy} from "lodash";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const arrow = {
  position: 'relative',
  right: '15px'
};

const arrowdown = {
  position: 'absolute',
  cursor: 'pointer',
  bottom: '-8px',
};

const selectedArrowDown = {
  position: 'absolute',
  cursor: 'pointer',
  bottom: '-8px',
  color: 'black',
};

const arrowup = {
  position: 'absolute',
  cursor: 'pointer',
  top: '-5px',
};

const selectedArrowUp = {
  position: 'absolute',
  cursor: 'pointer',
  top: '-5px',
  color: 'black',
};


const MarketScreen = ({coins}) => {
  const router = useRouter();
  const[loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [token, setToken] = useState('');
  const [current_page, setCurrentPage] = useState(1);
  const [sortkey, setSortKey] = useState('');
  const [sortorder, setSortOrder] = useState('');
  const [tradeType, setTradeType] = useState('Favorites');
  const tradeTypes = {'Favorites':1, 'TUPE':1, 'AUD':0.71, 'NZD':0.65, 'LKR':0.0028, 'INR':0.013, 'BTC':29609.7, 'ETH':1969.82, 'BNB':328.11, 'TAUD':2.9534070503733107, 'USDT':1, 'SHIB':0.00001};
  const [trade_price, setTradePrice] = useState(tradeTypes);
  const [multiple, setMulti] = useState(1);
  const [unit, setUnit] = useState('$');
  const unit_list = {'Favorites':'$', 'TUPE':'TUPE', 'AUD':'A$', 'NZD':'NZ$', 'LKR':'LKR', 'INR':'₹', 'BTC':'₿', 'ETH':'Ξ', 'BNB':'BNB', 'TAUD':'TAUD', 'USDT':'USDT', 'SHIB':'SHIB'};

  const init_state = {
    btc: ['', ''],
    eth: ['', ''],
    doge: ['', ''],
    shib: ['', '']
  };
  const [topcoin, setTopcoin] = useState(init_state);
  const [allSymbol, setAllSymbol] = useState([]);
  const CRYTOCOMPARE_API_KEY = '22ecd4c3d9ba9629fe8555875cb826598533e729ef38e46af033f4f6fdec2802';


  const url1_origin = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=215&page=1&sparkline=false";
  const url2_origin = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=2&sparkline=false";
  const url24h_origin = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true";
  const [url1, setUrl1] = useState(url1_origin);
  const [url2, setUrl2] = useState(url2_origin);
  const [url24h, setUrl24h] = useState('');
  const [vscurrency, setVscurrency] = useState('usd');

  const [count, setCount] = useState(20);

  const apiFunction = async () => {
    var all_coins = [];
    var all_symbols = [];
    var coin_list_string = "";

    let res = await axios.get(url1);
      if (res && res.data) {
        const new_data = [];
        res.data.map((item, index)=>{
          item.sort_number = index + 1;
          if (isNil(item.price_change_percentage_24h)) item.price_change_percentage_24h = 0;
          if (isNil(item.price_change_24h)) item.price_change_24h = 0;
          if (isNil(item.high_24h)) item.high_24h = 0;
          if (isNil(item.low_24h)) item.low_24h = 0;
          if (tradeTypes[item.symbol.toUpperCase()] !== undefined && item.current_price !== undefined) tradeTypes[item.symbol.toUpperCase()] = item.current_price;
          new_data.push(item);

          if (allSymbol.indexOf(item.symbol.toUpperCase()) === -1){
            all_symbols.push(item.symbol.toUpperCase());
          }

          coin_list_string += item.id + ',';
          
        });
        setTradePrice(tradeTypes);
        all_coins = [...new_data];
        const btc = res.data.find(x=>x.symbol === "btc");
        const eth = res.data.find(x=>x.symbol === "eth");
        const doge = res.data.find(x=>x.symbol === "doge");
        const shib = res.data.find(x=>x.symbol === "shib");
        if (btc !== undefined) topcoin.btc = [btc.current_price, btc.price_change_percentage_24h]; 
        if (eth !== undefined) topcoin.eth = [eth.current_price, eth.price_change_percentage_24h];
        if (doge !== undefined) topcoin.doge = [doge.current_price, doge.price_change_percentage_24h];
        if (shib !== undefined) topcoin.shib = [shib.current_price, shib.price_change_percentage_24h];
        setTopcoin({...topcoin});
      }

      res = await axios.get(url2);
      if (res && res.data) {
        const new_data_1 = [];
        res.data.map((item, index)=>{
          item.sort_number = index + data.length;
          if (isNil(item.price_change_percentage_24h)) item.price_change_percentage_24h = 0;
          if (isNil(item.price_change_24h)) item.price_change_24h = 0;
          if (isNil(item.high_24h)) item.high_24h = 0;
          if (isNil(item.low_24h)) item.low_24h = 0;
          if (tradeTypes[item.symbol.toUpperCase()] !== undefined && item.current_price !== undefined) tradeTypes[item.symbol.toUpperCase()] = item.current_price;
          new_data_1.push(item);

          if (allSymbol.indexOf(item.symbol.toUpperCase()) === -1){
            all_symbols.push(item.symbol.toUpperCase());
          }

          coin_list_string += item.id + ',';
        });
        setTradePrice(tradeTypes);
        all_coins = all_coins.concat(new_data_1);
      }

      // res = await axios.get('https://www.binance.com/bapi/composite/v1/public/marketing/symbol/list').then(res=>{
      //   if (res && res.data && res.data.data) {
      //     res.data.data.map(item=>{
      //       const index = all_coins.findIndex(x=>x.symbol === item.name.toLowerCase());
      //       if (index > -1) {
      //         if (item.volume !== undefined) {
      //           all_coins[index].total_volume = item.volume/1000000;
      //         }
      //       }
      //     });
      //     window.sessionStorage.setItem('market_data', JSON.stringify(all_coins))
      //     setData(all_coins);
      //     setAllSymbol([...all_symbols])
      //     setLoaded(true);

          
      //   }
      // });

      const routine = "https://api.coingecko.com/api/v3/simple/price?ids=" + coin_list_string + "&vs_currencies=" + vscurrency + "&include_24hr_vol=true&include_24hr_change=true";
      res = await axios.get(routine).then( res => {
        var namelist = [];

        var keys = Object.keys(res.data);
        keys.forEach(key =>{
          namelist.push(key);
        });

        var datalist = all_coins;
        namelist.map((name, index) => {
          datalist.map((item, index) => {
            if(name == item.id){
              var name_24h_vol = vscurrency + "_24h_vol";
              item.total_volume = res.data[name][name_24h_vol];

              let dnum = item.price_change_percentage_24h < 0 ? item.price_change_percentage_24h - Math.ceil(item.price_change_percentage_24h) : item.price_change_percentage_24h - Math.floor(item.price_change_percentage_24h);
              let num = item.price_change_percentage_24h - dnum;
              let str = dnum < 0 ? String(dnum).slice(3) : String(dnum).slice(2);
              let array = str.split('');
              let index = 0;
              let value = '';
              let result = 0;

              for(var i = 0 ; i < array.length; i++){
                if(array[i] == 0) index = i;
                else index = 0;
              }
              
              if(num <= 0){
                for (var j = index; j < index + 3; j++) {
                  value += '' + (array[j] != null ? array[j] : '');
                }
                result = num + '.' + value;
                item.price_change_percentage_24h = parseFloat(result);
              } else {
                for (var k = index; k < index + 2; k++) {
                  value += '' + (array[k] != null ? array[k] : '');
                }
                result = num + '.' + value;
                item.price_change_percentage_24h = parseFloat(result);
              }
              
            }
          })
        })
        setData(datalist);
        setAllSymbol([...all_symbols])
        setLoaded(true);
      })
  };


  useEffect(()=> {
    const localToken = localStorage.getItem('token');
    setToken(localToken);
    apiFunction();
    const trade_cache_type = window.sessionStorage.getItem("market_type");
    if (!isNil(trade_cache_type)) handleTopButtonEvent(trade_cache_type);
    window.sessionStorage.removeItem('market_type');
  }, [vscurrency]);

  
  const getItemPair = (coin_item) => {
    const session_data = window.sessionStorage.getItem('market_websocket');
    if (session_data === undefined) return [];
    const market_data = JSON.parse(session_data);
    const pair_list = ['USDT', 'USD', 'BNB', 'BTC', 'ETH', 'BUSD'];
    const result = [];
    pair_list.map(item=>{
      const name = coin_item.symbol + item.toLowerCase();
      const find_data = market_data.find(x=>x.s === name.toUpperCase());
      if (find_data !== undefined) {
        find_data.display_name = coin_item.symbol.toUpperCase() + "/" + item;
        result.push(find_data);
      }
    });
    return result;
  }

  const getItem24H = (coin_item) => {
    const session_data = window.sessionStorage.getItem('market_websocket');
    if (session_data === undefined) return '';
    const market_data = JSON.parse(session_data);
    const name = coin_item.symbol + 'USD';
    const find_data = market_data.find(x=>x.s.toUpperCase() === name.toUpperCase());
    let result = '';
    if (find_data !== undefined) {
      result = find_data.P;
    };
    return result;
  }

  useEffect(()=>{
    const subs = [];
    if (allSymbol.length === 0) return;
    if (data.length === 0) return;

    allSymbol.map(item=>{
      const push_item = '5~CCCAGG~' + item + '~USD';
      subs.push(push_item);
    });

    const controller = new AbortController();
    const apiCall = {action: 'SubAdd',subs};
    const url = 'wss://streamer.cryptocompare.com/v2?api_key=' + CRYTOCOMPARE_API_KEY;
    const isBrowser = typeof window !== "undefined";
    const ws = isBrowser ? new WebSocket(url) : null;

    if (!isNil(ws)) {
      ws.onopen = (event) => {
        ws.send(JSON.stringify(apiCall));
      };
      ws.onmessage = function (event) {
        const json = JSON.parse(event.data);

        try {
          if (json.FROMSYMBOL !== undefined) {
            const new_data = cloneDeep(data);
            const insert_item = data.find(x=>x.symbol === json.FROMSYMBOL.toLowerCase());
            if (isNil(insert_item.price_change_percentage_24h)) insert_item.price_change_percentage_24h = 0;
            if (insert_item !== undefined && json.PRICE !== undefined) {
              // insert_item.price_change_percentage_24h *= (insert_item.current_price/json.PRICE)
              if (getItem24H(insert_item) !== '') insert_item.price_change_percentage_24h = getItem24H(insert_item);
              insert_item.current_price = json.PRICE;
            }
            // if (json.VOLUME24HOUR !== undefined) insert_item.total_volume = json.VOLUME24HOUR;
            if (trade_price[json.FROMSYMBOL] !== undefined && json.PRICE !== undefined) trade_price[json.FROMSYMBOL] = json.PRICE;
            setTradePrice(trade_price);

            const findIndex = data.findIndex(x=>x.symbol === insert_item.symbol);
            if (findIndex > -1) {
              insert_item.pair = getItemPair(insert_item);
              new_data[findIndex] = {...insert_item};
            }
            setData([...new_data]);
            const btc = data.find(x=>x.symbol === "btc");
            const eth = data.find(x=>x.symbol === "eth");
            const doge = data.find(x=>x.symbol === "doge");
            const shib = data.find(x=>x.symbol === "shib");
            if (btc !== undefined) topcoin.btc = [btc.current_price, btc.price_change_percentage_24h];
            if (eth !== undefined) topcoin.eth = [eth.current_price, eth.price_change_percentage_24h];
            if (doge !== undefined) topcoin.doge = [doge.current_price, doge.price_change_percentage_24h];
            if (shib !== undefined) topcoin.shib = [shib.current_price, shib.price_change_percentage_24h];
            setTopcoin({...topcoin});
          }
        } catch (err) {
          // console.log(err)
        }
      }
    }
    return () => controller.abort();
  }, [allSymbol]);

  const handleSearchValue = (e) => {
    const { value } = e.target;
    setKeyword(value);
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const filteredCoins = data.filter(coin =>
    (
      coin.name !== undefined && coin.name.toLowerCase().includes(keyword.toLowerCase()) || (coin.symbol !== undefined && coin.symbol.toLowerCase().includes(keyword.toLowerCase()))) && coin.name != "Tenset"
  );

  function onChangePage (pager) {
    if (!isNil(pager)) setCurrentPage(pager.currentPage);
  }

  const handleTopButtonEvent = (type) => {
    setTradeType(type);
    const multiple1 = trade_price[type];
    setMulti(multiple1);
    setUnit(unit_list[type]);
    
    if(type == "Favorites" || type == "TUPE" || type == "USDT" || type == "TAUD" || type == "SHIB"){
      setUrl1(url1_origin);
      setUrl2(url2_origin);
      type = 'usd';
      
    } else {
      const route1 = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + type.toLowerCase() + "&order=market_cap_desc&per_page=215&page=1&sparkline=false";
      setUrl1(route1);
      const route2 = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + type.toLowerCase() + "&order=market_cap_desc&per_page=250&page=2&sparkline=false" ;
      setUrl2(route2);
    }
    
    setVscurrency(type.toLowerCase());
    // const routine = "https://api.coingecko.com/api/v3/simple/price?ids=" + coinlist + "&vs_currencies=" + type.toLowerCase() + "&include_24hr_vol=true";
    // setUrl24h(routine);
  };

  const sort = (key, order) =>{
    // if (key === sortkey && order === sortorder) {
    //   setSortKey('');
    //   setSortOrder('');
    // } else {
      setSortKey(key)
      setSortOrder(order);
    // }
  };

  const sortedCoins = orderBy(filteredCoins, sortkey, sortorder);

  return (
    <>
      {/* {loaded && ( */}
        <SiteLayout>
          <TopCoins topcoin={topcoin} unit={unit} multiple={multiple}/>
          <TopBar
            searchValue={keyword}
            searchOnChange={handleSearchValue}
            searchSubmit={handleSearchSubmit}
            handleTopButtonEvent={handleTopButtonEvent}
            type={tradeType}
            unit={unit}
            setCount={setCount}
          />
          
          {sortedCoins && sortedCoins.length > 0 && (
            <table className='data-table'>
              <thead>
                <tr>
                  <th className='markFavorite kks_text_center' style={{width:"50px"}}>
                    {/* <i className='markFavorite-icon material-icons'>star_border</i> */}
                    <span style={{marginLeft: 35}}>#</span>
                  </th>
                  <th className='kks_text_left' style={{width:"120px"}} >
                    <span style={{marginRight: 15}} onClick={()=>sort('', '')}>Coin</span>
                    <span style={arrow}>
                      <ArrowDropUpIcon style={sortkey === 'symbol' && sortorder === 'asc' ? selectedArrowUp : arrowup} onClick={()=>sort('symbol', 'desc')}/>
                      <ArrowDropDownIcon style={sortkey === 'symbol' && sortorder === 'desc' ? selectedArrowDown : arrowdown} onClick={()=>sort('symbol', 'asc')}/>
                    </span>
                  </th>
                  <th className='kks_text_center' style={{width:"160px"}}>&nbsp;</th>
                  <th className='kks_text_center' style={{width:"14%"}}>
                    <span style={{marginRight: 15}} onClick={()=>sort('', '')}>Price</span>
                    <span style={arrow}>
                      <ArrowDropUpIcon style={sortkey === 'current_price' && sortorder === 'asc' ? selectedArrowUp : arrowup} onClick={()=>sort('current_price', 'asc')}/>
                      <ArrowDropDownIcon style={sortkey === 'current_price' && sortorder === 'desc' ? selectedArrowDown : arrowdown} onClick={()=>sort('current_price', 'desc')}/>
                    </span>
                  </th>
                  <th className='kks_text_center' style={{width:"14%"}}>
                    <span style={{marginRight: 15}} onClick={()=>sort('', '')}>24H Change</span>
                    <span style={arrow}>
                      <ArrowDropUpIcon style={sortkey === 'price_change_percentage_24h' && sortorder === 'asc' ? selectedArrowUp : arrowup} onClick={()=>sort('price_change_percentage_24h', 'asc')}/>
                      <ArrowDropDownIcon style={sortkey === 'price_change_percentage_24h' && sortorder === 'desc' ? selectedArrowDown : arrowdown} onClick={()=>sort('price_change_percentage_24h', 'desc')}/>
                    </span>
                  </th>
                  <th className='kks_text_center' style={{width:"14%"}}>
                    <span style={{marginRight: 15}} onClick={()=>sort('', '')}>24H High</span>
                    <span style={arrow}>
                      <ArrowDropUpIcon style={sortkey === 'high_24h' && sortorder === 'asc' ? selectedArrowUp : arrowup} onClick={()=>sort('high_24h', 'asc')}/>
                      <ArrowDropDownIcon style={sortkey === 'high_24h' && sortorder === 'desc' ? selectedArrowDown : arrowdown} onClick={()=>sort('high_24h', 'desc')}/>
                    </span>
                  </th>
                  <th className='kks_text_center' style={{width:"14%"}}>
                    <span style={{marginRight: 15}} onClick={()=>sort('', '')}>24H Low</span>
                    <span style={arrow}>
                      <ArrowDropUpIcon style={sortkey === 'low_24h' && sortorder === 'asc' ? selectedArrowUp : arrowup} onClick={()=>sort('low_24h', 'asc')}/>
                      <ArrowDropDownIcon style={sortkey === 'low_24h' && sortorder === 'desc' ? selectedArrowDown : arrowdown} onClick={()=>sort('low_24h', 'desc')}/>
                      </span>
                    </th>
                  <th className='kks_text_center' style={{width:"14%"}}>
                    <span style={{marginRight: 15}} onClick={()=>sort('', '')}>24H Volume</span>
                    <span style={arrow}>
                      <ArrowDropUpIcon style={sortkey === 'total_volume' && sortorder === 'asc' ? selectedArrowUp : arrowup} onClick={()=>sort('total_volume', 'asc')}/>
                      <ArrowDropDownIcon style={sortkey === 'total_volume' && sortorder === 'desc' ? selectedArrowDown : arrowdown} onClick={()=>sort('total_volume', 'desc')}/>
                    </span>
                    </th>
                </tr>
              </thead>
              <tbody>
                {loaded && sortedCoins.map((item, index) => (
                  <>
                    {index >= (current_page - 1) * count && index < current_page * count && (
                      
                          <MarketRow key={item.id.toString()} item={JSON.parse(JSON.stringify(item))} index={index + 1} multiple={multiple} unit={unit}/>
                      
                    )}
                  </>
                ))}
              </tbody>
              
            </table>
          )}
          <div style={{display: 'flex'}}>
            <Pagination
              items={sortedCoins}
              initialPage={current_page}
              onChangePage={onChangePage}
              pageSize={count}
            />
          </div>

        </SiteLayout>
       {/* )} */}
      <Footer />
    </>
  );
};

export default MarketScreen;