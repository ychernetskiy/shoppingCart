var App;
(function (App) {
    var Provider = ReactRedux.Provider;
    //let reducers = Redux.combineReducers({ productListReducer, toggleReducer });
    var store = Redux.createStore(productListReducer);
    store.dispatch({ type: "INIT_PRODUCTS" });
    App.ProductListConnector = ReactRedux.connect(function (state) { return { products: state.products }; }, function (dispatch) {
        return { onClick: function (id) { dispatch({ type: 'TOGGLE_PRODUCT', id: id }); } };
    })(App.ProductList);
    ReactDOM.render(React.createElement(Provider, {store: store}, React.createElement(App.CartApp, null)), document.getElementById("root"));
    function productListReducer(state, action) {
        switch (action.type) {
            case 'INIT_PRODUCTS':
                return {
                    products: [{ id: 1, name: "pen", price: 23, selected: false },
                        { id: 2, name: "pencil", price: 12, selected: false }]
                };
            default: return { products: [] };
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
})(App || (App = {}));
//# sourceMappingURL=rootComponent.js.map