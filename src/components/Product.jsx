
function Product(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.description}</td>
            <td>{props.categories.name}</td>
        </tr>
    )
}

export default Product