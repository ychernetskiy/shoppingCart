// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Cart = (function (_super) {
        __extends(Cart, _super);
        function Cart() {
            _super.apply(this, arguments);
        }
        Cart.prototype.render = function () {
            return React.createElement("div", null);
        };
        return Cart;
    }(React.Component));
    App.Cart = Cart;
})(App || (App = {}));
//# sourceMappingURL=Cart.js.map