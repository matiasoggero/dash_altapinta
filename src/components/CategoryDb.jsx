import React from "react";
import Category from "./Category";

function CategoryDb() {
    const [category, setCategory] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3040/api/product')
        .then(res => res.json())
        .then(data => {
            const response = Object.values(data.categories)
            setCategory(response)
        })
        .catch(err => console.error(err))
    },[])
    console.log(category);
    return(
        <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">LISTADO DE CATEGORIAS</h5>
                    </div>
                    
                        <div className="row">
                            {category.map( (element, index) =>
                                <Category key={index} name={element.name} />
                            )}

                        </div>
                    </div>
                </div>
            
    )
}

export default CategoryDb