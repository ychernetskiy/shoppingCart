namespace App {
    export class CartApp extends React.Component<any, any> {
        render() {
            return <div>
                        <ProductListConnector />
                        <Cart />
                    </div>;
        }
    }
}