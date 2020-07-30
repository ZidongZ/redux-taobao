import {BUY_PRODUCT, CHANGE_PRODUCT} from '../../../actions';
const products = Array(6).fill(null);
products[0] = {index: 0, id:"qiang1", name: "买一送一蛋黄酥60枚", discount: "前2小时前50件5折", priceNow: "￥29.9", price: "￥155", stockNum: 100, src:"./images/qiang1.jpg"};
products[1] = {index: 1, id:"qiang2",name: "卫龙腊肠辣条牛油火锅370g", discount: "前2小时前450件5折", priceNow: "￥29.9", price: "￥155", stockNum: 100, src:"./images/qiang2.jpg"};
products[2] = {index: 2, id:"qiang3",name: "云南蒙自甜石榴新鲜水果5斤", discount: "前1小时前51件折", priceNow: "￥25.8", price: "￥58.8", stockNum: 100, src:"./images/qiang3.jpg"};
products[3] = {index: 3, id:"qiang4",name: "龙韵家用多功能冲击钻220V手电钻手枪钻小手电转钻电动工具螺丝刀", discount:  "前15分钟前50件5折", priceNow: "￥79", price: "￥158", stockNum: 100, src:"./images/qiang4.jpg"};
products[4] = {index: 4, id:"qiang5",name: "大闸蟹鲜活1.8两", discount: "前30分钟前100件5折", priceNow: "￥96", price: "￥398", stockNum: 100, src:"./images/qiang5.jpg"};
products[5] = {index: 5, id:"qiang6",name: "cynbern昔本近视泳镜防雾高清", discount: "前15分钟前50件5折", priceNow: "￥39.9", price: "￥298", stockNum: 100, src:"./images/qiang6.jpg"};

const initialState = {
  products: products,
  start: 0,
  time: {hour: 0, minute: 5, second:0}
};

const productReducer = (state = initialState, action) =>{
  console.log(state.products)
  const products = state.products.slice();
  switch(action.type){
    case BUY_PRODUCT:
      products[action.id].stockNum -= 1;
      return {...state,
      products: products};
    case CHANGE_PRODUCT:
      let start = state.start;
      if(start + 3 < products.length){
        start += 3;
      }else{
        start = start + 3 - products.length ;
      }
      return {...state,
        start: start,
      };
    default:
      return state;

  }
};

export default productReducer;
