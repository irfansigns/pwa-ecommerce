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
        // Handle other actions
        default:
            return state;
    }
};
