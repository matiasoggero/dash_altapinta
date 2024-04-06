import React from "react";


function CountCardUser () {

    const [users,setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3040/api/user')
        .then(res => res.json())
        .then(data => {
            setUsers(data.count)
        })
        .catch(err => console.error(err))
    },[])

    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-primary shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2 d-flex justify-content-between">
                            <div>
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total de Usuarios</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{users}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas fa-users fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CountCardUser;


