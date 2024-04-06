import React from "react";
import LastIngredient from "./LastIngredient";

function LastIngredientInDb() {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3040/api/product')
            .then(res => res.json())
            .then(data => {
                const response = Object.values(data.products)
                setProducts(response)
            })
            .catch(err => console.error(err))
    }, [])

    const product = products[products.length - 1]
   console.log(product);

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo ingrediente agregado</h5>
                </div>
                <div className="card-body">

                <LastIngredient {...product} />  


                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver más detalle</a>
                </div>
            </div>
        </div>
    )
}

export default LastIngredientInDb