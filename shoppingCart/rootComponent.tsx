declare var ReactRedux: any;

namespace App {

    let Provider = ReactRedux.Provider;

    //let reducers = Redux.combineReducers({ productListReducer, toggleReducer });

    let store = Redux.createStore(productListReducer);

    store.dispatch({ type: "INIT_PRODUCTS" });

    export let ProductListConnector = ReactRedux.connect(
        (state) => { return { products: state.products } },
        (dispatch) => {
            return { onClick: (id) => { dispatch({ type: 'TOGGLE_PRODUCT', id: id }) } };
        })(ProductList);

    ReactDOM.render(<Provider store={store}>
                        <CartApp />
                    </Provider>,
        document.getElementById("root"));

    function productListReducer(state, action) {
        switch (action.type) {
            case 'INIT_PRODUCTS':
                return {
                    products: [{ id: 1, name: "pen", price: 23, selected: false },
                        { id: 2, name: "pencil", price: 12, selected: false }]
                };
            default: return {products: []};
        }
    }

    function toggleReducer(state, action) {
        switch (action.type) {
            case 'TOGGLE_PRODUCT':
                return Object["assign"]({}, state, { selected: !state.selected });
            default:
                return state || {};
        }
    }
}