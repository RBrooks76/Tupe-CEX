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

  const [count, setCount] = useState(50);
  const [coinList, setCoinList] = useState([]);
  const [pairList, setPairList] = useState([]);
  const [coinNameList, setCoinNameList] = useState([]);
  const [sortCoin, setSortCoins] = useState([]);
  const [filterCoin, setFilterCoins] = useState([])

  const reduceDecimal = (item) => {
    console.log(item);
    var item_tempString = String(item);
    var item_tempArray = [];
    var index = 0;
    var count = 3;

    if(item_tempString.includes('e-')){
        console.log("############################");
        item_tempString = remove(item_tempString);
        item_tempArray = item_tempString.split('');
        console.log("--------------------------");
    } else {
      item_tempArray = item_tempString.split('');
    }

    for(var i = item_tempString.indexOf('.') + 1; i < item_tempArray.length; i++ ){
      if(item_tempArray[i] != 0){
        index = i;
        break;
      } else {
        index = 0;
      }
    }

    var subString = '';
    if(index > 0) subString = item_tempString.substr(0, index + count);
    else subString = item_tempString;
    console.log(subString);
    return subString;

  }

  function remove(x) {
    var item = x;
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split('e-')[1]);
        if (e) {
          x *= Math.pow(10, e-1);
          x = item > 0 ? '0.' + (new Array(e)).join('0') + x.toString().substring(2) : '-0.' + (new Array(e)).join('0') + x.toString().substring(3);
        }
    } else {
      var e = parseInt(x.toString().split('+')[1]);
      if (e > 20) {
          e -= 20;
          x /= Math.pow(10,e);
          x += (new Array(e+1)).join('0');
      }
    }
    return x;
  }

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

    setCoinList(coin_list_string);
    
    // const routine = "https://api.coingecko.com/api/v3/simple/price?ids=" + coin_list_string + "&vs_currencies=" + vscurrency + "&include_24hr_vol=true&include_24hr_change=true";
    // res = await axios.get(routine).then( res => {
    //   var namelist = [];
    //   var keys = Object.keys(res.data);
    //   keys.forEach(key =>{
    //     namelist.push(key);
    //   });

      
    all_coins.map((item, index) => {
        item.price_change_percentage_24h = reduceDecimal(item.price_change_percentage_24h);
        item.total_volume = reduceDecimal(item.total_volume / 1000000);
        item.current_price = reduceDecimal(item.current_price);
        item.high_24h = reduceDecimal(item.high_24h);
        item.low_24h = reduceDecimal(item.low_24h);
        item.price_change_24h = reduceDecimal(item.price_change_24h);
    })

      const btc = all_coins.find(x=>x.symbol === "btc");
      const eth = all_coins.find(x=>x.symbol === "eth");
      const doge = all_coins.find(x=>x.symbol === "doge");
      const shib = all_coins.find(x=>x.symbol === "shib");
      if (btc !== undefined) topcoin.btc = [reduceDecimal(btc.current_price), reduceDecimal(btc.price_change_percentage_24h)]; 
      if (eth !== undefined) topcoin.eth = [reduceDecimal(eth.current_price), reduceDecimal(eth.price_change_percentage_24h)];
      if (doge !== undefined) topcoin.doge = [reduceDecimal(doge.current_price), reduceDecimal(doge.price_change_percentage_24h)];
      if (shib !== undefined) topcoin.shib = [reduceDecimal(shib.current_price), reduceDecimal(shib.price_change_percentage_24h)];
      setTopcoin({...topcoin});

      setData(all_coins);
      setPairList(all_coins);
      setAllSymbol([...all_symbols]);
      setLoaded(true);

      filteredCoins = all_coins.filter(coin =>
        (coin.name !== undefined && coin.name.toLowerCase().includes(keyword.toLowerCase()) || (coin.symbol !== undefined && coin.symbol.toLowerCase().includes(keyword.toLowerCase()))) && coin.name != "Tenset"
      );
      sortedCoins = orderBy(filteredCoins, sortkey, sortorder);
  
      setSortCoins(sortedCoins);
    // })
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
    const pair_list = ['USDT', 'USD', 'BNB', 'BTC', 'ETH'];
    const result = [];
    pair_list.map((item, index)=>{
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
  
  //////////////////////////////// CRYPTOCOMPARE WEBSOCKET ////////////////////////////////
  // useEffect(()=>{
  //   const subs = [];
  //   if (allSymbol.length === 0) return;
  //   if (data.length === 0) return;
  //   allSymbol.map((item, index)=>{
  //     const push_item = '5~CCCAGG~' + item + '~USD';
  //     subs.push(push_item);
  //   });
  //   const controller = new AbortController();
  //   const apiCall = {action: 'SubAdd',subs};
  //   // const url = 'wss://streamer.cryptocompare.com/v2?api_key=' + CRYTOCOMPARE_API_KEY;
  //   const url = 'wss://stream.binance.com:9443/stream?streams=!ticker@arr@3000ms';
  //   const isBrowser = typeof window !== "undefined";
  //   const ws = isBrowser ? new WebSocket(url) : null;
  //   if (!isNil(ws)) {
  //     ws.onopen = (event) => {
  //       ws.send(JSON.stringify(apiCall));
  //     };
  //     ws.onmessage = function (event) {
  //       const json = JSON.parse(event.data);
  //       try {
  //         if (json.FROMSYMBOL !== undefined) {
  //           const new_data = cloneDeep(data);
  //           const insert_item = data.find(x=>x.symbol === json.FROMSYMBOL.toLowerCase());
  //           if (isNil(insert_item.price_change_percentage_24h)) insert_item.price_change_percentage_24h = 0;
  //           if (insert_item !== undefined && json.PRICE !== undefined) {
  //             // insert_item.price_change_percentage_24h *= (insert_item.current_price/json.PRICE)
  //             if (getItem24H(insert_item) !== '') insert_item.price_change_percentage_24h = getItem24H(insert_item);
  //             insert_item.current_price = json.PRICE;
  //           }
  //           // if (json.VOLUME24HOUR !== undefined) insert_item.total_volume = json.VOLUME24HOUR;
  //           if (trade_price[json.FROMSYMBOL] !== undefined && json.PRICE !== undefined) trade_price[json.FROMSYMBOL] = json.PRICE;
  //           setTradePrice(trade_price);

  //           const findIndex = data.findIndex(x=>x.symbol === insert_item.symbol);
  //           if (findIndex > -1) {
  //             insert_item.pair = getItemPair(insert_item);
  //             new_data[findIndex] = {...insert_item};
  //           }
  //           setData([...new_data]);
  //           const btc = data.find(x=>x.symbol === "btc");
  //           const eth = data.find(x=>x.symbol === "eth");
  //           const doge = data.find(x=>x.symbol === "doge");
  //           const shib = data.find(x=>x.symbol === "shib");
  //           if (btc !== undefined) topcoin.btc = [btc.current_price, btc.price_change_percentage_24h];
  //           if (eth !== undefined) topcoin.eth = [eth.current_price, eth.price_change_percentage_24h];
  //           if (doge !== undefined) topcoin.doge = [doge.current_price, doge.price_change_percentage_24h];
  //           if (shib !== undefined) topcoin.shib = [shib.current_price, shib.price_change_percentage_24h];
  //           setTopcoin({...topcoin});
  //         }
  //       } catch (err) {
  //         console.log(err)
  //       }
  //     }
  //   }
  //   return () => controller.abort();
  // }, [allSymbol]);


  // const getPair = (item) => {
  //   var market_data = JSONDATA.data;
  //   const pair_list = ['USDT', 'USD', 'BNB', 'BTC', 'ETH'];
  //   const result = [];
  //   pair_list.map((name1, index)=>{
  //     const pairname = item.symbol + name1.toLowerCase();
  //     const find_data = market_data.find(x=>x.s === pairname.toUpperCase());
  //     if (find_data !== undefined) {
  //       find_data.display_name = item.symbol.toUpperCase() + "/" + name1;
  //       result.push(find_data);
  //     }
  //   });
  //   return result;
  // }

  // useEffect(() => {
  //   const pair_list = ['USDT', 'USD', 'BNB', 'BTC', 'ETH'];
  //   const insertData = [];
  //   data.map((item, index) => {
  //     insertData = getPair(item);
  //     item.pair = insertData;
  //   })
  // }, [data])

  /////////////////////////////////////BINANCE WEBSOCKET/////////////////////////////////////
  // useEffect(() => {
  //   const pair_list = ['USDT', 'USD', 'BNB', 'BTC', 'ETH'];
  //   var result = [];
  //   const url = 'wss://stream.binance.com:9443/stream?streams=!ticker@arr@3000ms';
  //   const isBrowser = typeof window !== "undefined";
  //   const ws = isBrowser ? new WebSocket(url) : null;
  //   const controller = new AbortController();

  //   if (!isNil(ws)) {
  //     ws.onopen = (event) => {
  //     };
  //     ws.onmessage = function (event) {
  //       var eventData = JSON.parse(event.data);
        
  //       // var eventData = JSONDATA;
  //       var popup = data;
  //       popup.map((popupName, dataIndex) => {
  //         popupName.pair = [];
  //         pair_list.map((pairName, pairIndex) => {
  //           const pair_name = popupName.symbol.toLowerCase() + pairName.toLowerCase();
  //           const find_data = eventData.data.find(x=>x.s == pair_name.toUpperCase());
  //           if (find_data !== undefined) {
  //             var find_index = popup.findIndex(x=>find_data.s.toLowerCase().includes(x.symbol.toLowerCase()));
  //             if (find_index > -1) {
  //               find_data['display_name'] = (popupName.symbol.toLowerCase() +'/'+ pairName.toLowerCase()).toUpperCase();
  //               popupName.pair.push(find_data);
  //             }
  //           }
  //         })
  //       });
  //       setData(popup);
  //       filteredCoins = popup.filter(coin =>
  //         (coin.name !== undefined && coin.name.toLowerCase().includes(keyword.toLowerCase()) || (coin.symbol !== undefined && coin.symbol.toLowerCase().includes(keyword.toLowerCase()))) && coin.name != "Tenset"
  //       );
      
  //       sortedCoins = orderBy(filteredCoins, sortkey, sortorder);
  //       setSortCoins(sortedCoins);
  //     }
  //   }
  //   return () => controller.abort();
  // }, [sortCoin]);


  //////////////////////////////// BINANCE API TOOLTIP ////////////////////////////////
  useEffect( async () => {
    const pair_list = ['USDT', 'USD', 'BNB', 'BTC', 'ETH'];
    var result = [];
    var tempData = pairList;

    const route = "https://api.binance.com/api/v3/ticker/24hr";
    var res = await axios.get(route);
    if(res != undefined){
      result = res.data;
    }

    tempData.map((tempItem) => {
      tempItem.pair = [];
      var cnt = 0;
      pair_list.map((pairItem) => {
        var find_name = tempItem.symbol.toLowerCase() + pairItem.toLowerCase();
        var find_data = result.find(x=>x.symbol == find_name.toUpperCase());
        if(find_data != undefined && find_data['last_price'] != 0){
          var find_index = tempData.findIndex(x=>find_data.symbol.toLowerCase().includes(x.symbol.toLowerCase()));
          if(find_index > -1){
            find_data['display_name'] = (tempItem.symbol.toLowerCase() + '/' + pairItem.toLowerCase()).toUpperCase();
            find_data['c'] = reduceDecimal(find_data['lastPrice']);
            find_data['P'] = reduceDecimal(find_data['priceChangePercent']);
            find_data['p'] = reduceDecimal(find_data['volume']);
            tempItem.pair.push(find_data);
            cnt++;
          }
        }
      })
      var temp = {};
      if(cnt == 0){
        temp['display_name'] = (tempItem.symbol.toLowerCase() + '/' + "usd").toUpperCase();
        temp['c'] = reduceDecimal(tempItem['current_price']);
        temp['P'] = reduceDecimal(tempItem['price_change_percentage_24h']);
        temp['p'] = reduceDecimal(tempItem['total_volume']);
        tempItem.pair.push(temp);
      }
    })
    setPairList(tempData);

    filteredCoins = tempData.filter(coin =>
      (coin.name !== undefined && coin.name.toLowerCase().includes(keyword.toLowerCase()) || (coin.symbol !== undefined && coin.symbol.toLowerCase().includes(keyword.toLowerCase()))) && coin.name != "Tenset"
    );
    sortedCoins = orderBy(filteredCoins, sortkey, sortorder);

    setSortCoins(sortedCoins);
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
    (coin.name !== undefined && coin.name.toLowerCase().includes(keyword.toLowerCase()) || (coin.symbol !== undefined && coin.symbol.toLowerCase().includes(keyword.toLowerCase()))) && coin.name != "Tenset"
  );

  const sortedCoins = orderBy(filteredCoins, sortkey, sortorder);




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
      // setSortKey(key)
      // setSortOrder(order);
      setSortKey(key)
      if(sortorder == "asc" && order == "asc")
        setSortOrder("desc");
      else if(sortorder == "desc" && order == "desc")
        setSortOrder("asc");
      else
      {
        setSortOrder(order);
      }


    // }
  };

  return (
    <>
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
                  <th className='left' style={{width:"160px"}}>&nbsp;</th>
                  <th className='right' style={{width:"14%"}}>
                    <span style={{marginRight: 15}} onClick={()=>sort('', '')}>Price</span>
                    <span style={arrow}>
                      <ArrowDropUpIcon style={sortkey === 'current_price' && sortorder === 'asc' ? selectedArrowUp : arrowup} onClick={()=>sort('current_price', 'asc')}/>
                      <ArrowDropDownIcon style={sortkey === 'current_price' && sortorder === 'desc' ? selectedArrowDown : arrowdown} onClick={()=>sort('current_price', 'desc')}/>
                    </span>
                  </th>
                  <th className='right' style={{width:"14%"}}>
                    <span style={{marginRight: 15}} onClick={()=>sort('', '')}>24H Change</span>
                    <span style={arrow}>
                      <ArrowDropUpIcon style={sortkey === 'price_change_percentage_24h' && sortorder === 'asc' ? selectedArrowUp : arrowup} onClick={()=>sort('price_change_percentage_24h', 'asc')}/>
                      <ArrowDropDownIcon style={sortkey === 'price_change_percentage_24h' && sortorder === 'desc' ? selectedArrowDown : arrowdown} onClick={()=>sort('price_change_percentage_24h', 'desc')}/>
                    </span>
                  </th>
                  <th className='right' style={{width:"14%"}}>
                    <span style={{marginRight: 15}} onClick={()=>sort('', '')}>24H High</span>
                    <span style={arrow}>
                      <ArrowDropUpIcon style={sortkey === 'high_24h' && sortorder === 'asc' ? selectedArrowUp : arrowup} onClick={()=>sort('high_24h', 'asc')}/>
                      <ArrowDropDownIcon style={sortkey === 'high_24h' && sortorder === 'desc' ? selectedArrowDown : arrowdown} onClick={()=>sort('high_24h', 'desc')}/>
                    </span>
                  </th>
                  <th className='right' style={{width:"14%"}}>
                    <span style={{marginRight: 15}} onClick={()=>sort('', '')}>24H Low</span>
                    <span style={arrow}>
                      <ArrowDropUpIcon style={sortkey === 'low_24h' && sortorder === 'asc' ? selectedArrowUp : arrowup} onClick={()=>sort('low_24h', 'asc')}/>
                      <ArrowDropDownIcon style={sortkey === 'low_24h' && sortorder === 'desc' ? selectedArrowDown : arrowdown} onClick={()=>sort('low_24h', 'desc')}/>
                      </span>
                    </th>
                  <th className='right' style={{width:"14%"}}>
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
                      <MarketRow key={item.id.toString()} item={JSON.parse(JSON.stringify(item))} index={index + 1} multiple={multiple} unit={unit} pairlist={pairList}/>
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
      <Footer />
    </>
  );
};

export default MarketScreen;