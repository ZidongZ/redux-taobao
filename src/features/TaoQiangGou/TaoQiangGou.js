import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions';

/*
function CountDown (props){
let hour = props.time.hour;
let minute = props.time.minute;
let second = props.time.second;
React.useEffect(() => {
const interval = setInterval(()=>{
props.tick()},1000);
return () => clearInterval(interval);
},[props.time]);
return(
<div className = "count-down">
<p><span className = "discount">距结束</span><span className = "time">{hour < 10 ? "0" : ""}{hour}</span>:<span className = "time">{minute < 10 ? "0" : ""}{minute}</span>:<span className = "time">{second < 10 ? "0" : ""}{second}</span></p>
</div>
);
}
*/

const TopInfo = ({onClick}) => {
  return(
    <div>
    <p className = "title">淘抢购</p>

    <a className = "change-button" onClick = {onClick}>换一换</a>
    </div>
  );
}


const ProgressBar =  ({progress}) =>{
  return(
    <div className = "progress" style={{width: progress + '%'}}></div>
  )
}

const ProductBox  = ({product, onClick}) => {
  const i = product.index;
  const name = product.name;
  const discount = product.discount;
  const priceNow = product.priceNow;
  const price = product.price;
  const src = product.src;
  const stockNum = product.stockNum;
  const boughtNum = 100-stockNum;
  const progress = boughtNum;
  return(
    <div className = "product-box">
    <div className = "image-box">
    <img className = "product-image" src = {src} alt = {name}/>
    </div>
    <div className = "info-box">
    <div className = "name-box">
    <p>{name}</p>
    </div>
    <p className = "discount">{discount}</p>
    <ProgressBar progress = {progress}/>
    <p><span className = "percentage">{boughtNum}%</span><span className = "boughtNum">已抢{boughtNum}件</span></p>
    <p className = "price-list"><span className = "priceNow">{priceNow}</span><span className = "pricePrev">{price}</span></p>
    <button onClick = {onClick}>抢</button>
    </div>
    </div>
  )
}

const TaoQiangGou = ({products, start, actions}) => {
  /*
  tick(){
  let hour = this.state.time.hour;
  let minute = this.state.time.minute;
  let second = this.state.time.second;
  if (hour === 0 && minute === 0 && second === 0){
  alert("Time's up");
}else if (minute === 0 && second === 0){
hour -= 1;
minute = 59;
second = 59;
}else if (second === 0){
minute -= 1;
second = 59;
}else{
second -= 1;
}
this.setState({
time: {hour: hour, minute: minute, second: second}
})
}
*/
let productList;
if (start+3 < products.length){
  productList = products.slice(start, start+3);
}else{
  productList = products.slice(start, products.length);
  productList = productList.concat(products.slice(0,3 - products.length+ start));
}
return (
  <div>
  
  <TopInfo onClick = {() => actions.changeProduct()} />
  <div className = "products-container">
  {productList.map((product,index) =>{
    return <ProductBox product = {product}
    onClick = {() => actions.buyProduct(product.index)}
    />
  })}
  </div>
  </div>
);
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaoQiangGou);
