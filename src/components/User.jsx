
function User(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.address}</td>
            <td>{props.phone}</td>
        </tr>
    )
}

export default User