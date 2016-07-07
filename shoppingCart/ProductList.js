var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var ProductList = (function (_super) {
        __extends(ProductList, _super);
        function ProductList() {
            _super.call(this);
            this.getProperties = this.getProperties.bind(this);
            //this.clickHandler = this.clickHandler.bind(this);
        }
        ProductList.prototype.productSelectionChanged = function (product, element) {
            var value = element.target.checked;
            // get store
        };
        ProductList.prototype.getProperties = function () {
            return this.props;
        };
        ProductList.prototype.render = function () {
            var rowId = 0;
            var properties = this.getProperties();
            var productRows = properties.products.map(function (p) {
                return React.createElement(App.ProductItem, {key: rowId++, product: p, onClick: function () { properties.onClick(p.id); }});
            });
            return (React.createElement("div", null, React.createElement("table", null, React.createElement("tbody", null, productRows)), React.createElement("button", null, "Add to cart")));
        };
        return ProductList;
    }(React.Component));
    App.ProductList = ProductList;
})(App || (App = {}));
//onClick = {() => this.props["onClick"] } 
//# sourceMappingURL=ProductList.js.map