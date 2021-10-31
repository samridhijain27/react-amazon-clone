export const initialState ={

    basket:[
    {id:"1333",
    title:"Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate", 
    rating:5 ,
    image:"https://images-eu.ssl-images-amazon.com/images/I/416npwZlh7L._SX300_SY300_QL70_ML2_.jpg" ,
    price:7.99,
    },

    {

    },

],
    user: null,

};
export const  getBasketTotal = (basket)=>{
basket?.reduce((amount, item) => item.price + amount , 0);
}

const reducer = (state, action ) =>{
console.log(action.type);
console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
              };
            

        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
           
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id)
            newBasket.splice(index,1);
            if (index>=0)
            {
                //exists in basket
            }
            else{
                console.warn(`Cant remove product  (id :${action.id} as its not present`);
            }
            return {...state, basket: newBasket} ;
            default:
                return state;
    }
}
export default reducer;
