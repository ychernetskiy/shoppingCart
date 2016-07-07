namespace App {
    export class ProductItem extends React.Component<any, any> {
        
        render() {
            let product = this.props["product"];

            return <tr key={product.id}>
                <td><input type="checkbox" onChange={ this.props["onClick"] }/></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>;
        }
    }
}


//this.productSelectionChanged.bind(null, this.p)