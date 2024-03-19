import { ADD_ITEM } from "../action/addItem_action";
import { CART_DISPLAY } from "../action/cart_action";
import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../action/action";
import { REMOVE_ITEM } from "../action/remove_item";
const initialUserState = {
    category: null,
    isLoading: false,
    error: null,
    cart: [],
    item_id: null,

};
export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                category: action.payload
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case CART_DISPLAY:

            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                };
            } else {

                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                };
            }
        case ADD_ITEM:

            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        case REMOVE_ITEM:
            return{
                ...state,
                
                cart:state.cart.map(
                    item=>item.id===action.payload ?
                     {...item,quantity:item.quantity-1} : (item)).filter(item=>item.quantity>0)
            }
        default:
            return state;
    }
};
