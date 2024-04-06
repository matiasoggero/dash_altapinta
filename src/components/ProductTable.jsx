import React from "react"
import Product from "./Product";

function ProductTable() {

    const [products,setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3040/api/product')
        .then(res => res.json())
        .then(data => {
            const response = Object.values(data.products)
            setProducts(response)
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
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Descripcion</th>
                                <th>Categoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) =>
                                <Product key={index} {...product} />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )

}

export default ProductTable