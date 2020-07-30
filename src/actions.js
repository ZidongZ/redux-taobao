export const BUY_PRODUCT = 'BUY_PRODUCT';
export const CHANGE_PRODUCT = 'CHANGE_PRODUCT';


export const buyProduct = function(id){
  return {type: BUY_PRODUCT, id}
}

export const changeProduct = function(){
  return {type: CHANGE_PRODUCT}
}
