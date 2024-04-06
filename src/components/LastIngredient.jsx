function LastIngredient(props) {


    return (
        <div>
            <img className="w-100" src={`/images/${props.image}`} alt="Ingrediente" style={{ maxWidth: '200px' }} />
            <p>{props.description}</p>
        </div>

    )
}

export default LastIngredient