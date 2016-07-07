var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var CartApp = (function (_super) {
        __extends(CartApp, _super);
        function CartApp() {
            _super.apply(this, arguments);
        }
        CartApp.prototype.render = function () {
            return React.createElement("div", null, React.createElement(App.ProductListConnector, null), React.createElement(App.Cart, null));
        };
        return CartApp;
    }(React.Component));
    App.CartApp = CartApp;
})(App || (App = {}));
//# sourceMappingURL=CartApp.js.map