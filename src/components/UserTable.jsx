import React from "react"
import User from "./User";



function UserTable() {

    const [users,setUser] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3040/api/user')
        .then(res => res.json())
        .then(data => {
            const response = Object.values(data.users)
            setUser(response)
        })
        .catch(err => console.error(err))
    },[])

    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>nombre</th>
                                <th>email</th>
                                <th>direccion</th>
                                <th>telefono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) =>
                                <User key={index} {...user} />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserTable