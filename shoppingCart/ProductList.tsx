namespace App {
    export class ProductList extends React.Component<any, any> {
        
        private productSelectionChanged(product, element) {
            let value = element.target.checked;

            // get store
        }

        constructor() {
            super();

            this.getProperties = this.getProperties.bind(this);

            //this.clickHandler = this.clickHandler.bind(this);
        }

        private getProperties(): any {
            return this.props;
        }

        render() {
            let rowId = 0;
            let properties = this.getProperties();

            let productRows = properties.products.map((p) => {
                return <ProductItem key={rowId++} product={p} onClick={() => { properties.onClick(p.id) }} />;
            });

            return (
                <div>
                    <table>
                        <tbody>
                            {productRows}
                        </tbody>
                    </table>
                    <button>Add to cart</button>
                </div>
            );
        }
    }
}

//onClick = {() => this.props["onClick"] }