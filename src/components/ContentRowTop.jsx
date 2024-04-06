import CategoryDb from "./CategoryDb"
import CountCardProduct from "./CountCardProduct"
import CountCardUser from "./CountCardUser"
import LastIngredientInDb from "./LastIngredientInDb"


function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800" >Alta Pinta Dashboard</h1>
            </div>
            <div className="row">
                <CountCardProduct />
                <CountCardUser  />
            </div>

            <div className="row">

                <LastIngredientInDb />


                <CategoryDb />

            </div>
        </div>

    )
}

export default ContentRowTop