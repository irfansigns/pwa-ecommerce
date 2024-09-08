// Inside productReducer.js

export const ProductReducer = (state, action) => {
        switch(action.type) {
            case 'FETCH_PRODUCTS':
                return {
                    ...state,
                    products: action.payload
                };
            case 'ADD_MORE_PRODUCTS':
                // Ensure no duplicate products
                const newProducts = action.payload.filter(np => !state.products.some(p => p.id === np.id));
                return {
                    ...state,
                    products: [...state.products, ...newProducts]
                };
                // 'products array' of ...state(copied state) is assigned a new value which is updated array named '...newProducts' which is the copy of 'newProducts'
            
                // Handle other actions
            default:
                return state;
        }
    };

    // ABOVE FUNCTION CAN ALSO BE WRITTEN AS

    // const newProducts = action.payload.filter(function(np) {
    //     return !state.products.some(function(p) {
    //       return p.id === np.id;
    //     });
    //   });
      
    