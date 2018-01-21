import state from './state';
const reducer = (state,action)=>{
    let {type,payload} = action;
    switch(type){
        case 'SHOW_FOOT':
            return Object.assign({},state,{
                bfoot:true
            });
            break; 
        case 'HIDE_FOOT':
            return Object.assign({},state,{
                bfoot:false
            });
            break; 
        case 'SHOW_LOADING':
            return Object.assign({},state,{
                bloading:true
            });
            break; 
        case 'HIDE_LOADING':
            return Object.assign({},state,{
                bloading:false
            });
            break;
        case 'SHOP_CART':
            let btn = true;
            let cart = [...state.shopcart];
            cart.forEach((item,index)=>{
                if(payload.id == item.id){
                    item.num ++;
                    btn = false;
                }               
            })
            if(btn){
                payload.num = 1;
                cart.push(payload)                   
            }
            return Object.assign({},state,{
                shopcart:cart
            });
            break;
        case 'CHANGE_ITEM':
            let cart2 = [...state.shopcart];
            cart2.forEach((item,index)=>{
                if(payload.id == item.id){
                    item.num += payload.num;
                    item.num<1?item.num=1:item.num;
                }               
            })
            return Object.assign({},state,{
                shopcart:cart2
            });
            break;
        case 'REMOVE':
            let cart3 = [...state.shopcart];
            cart3.forEach((item,index)=>{
                if(payload.id == item.id){
                    cart3.splice(index,1);
                }               
            })
            return Object.assign({},state,{
                shopcart:cart3
            });
            break;
        default:
            return state;
    }
}

export default reducer;