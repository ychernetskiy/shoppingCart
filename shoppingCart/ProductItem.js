var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var ProductItem = (function (_super) {
        __extends(ProductItem, _super);
        function ProductItem() {
            _super.apply(this, arguments);
        }
        ProductItem.prototype.render = function () {
            var product = this.props["product"];
            return React.createElement("tr", {key: product.id}, React.createElement("td", null, React.createElement("input", {type: "checkbox", onChange: this.props["onClick"]})), React.createElement("td", null, product.name), React.createElement("td", null, product.price));
        };
        return ProductItem;
    }(React.Component));
    App.ProductItem = ProductItem;
})(App || (App = {}));
//this.productSelectionChanged.bind(null, this.p) 
//# sourceMappingURL=ProductItem.js.map