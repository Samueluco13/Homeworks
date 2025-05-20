import "../styles/ProductCard.css"

export const ProductCard = ({prenda, onClick}) => {
    return (
        <div className='product-card' onClick={onClick} >
            <div className='product-card-info'>
                <h2>{prenda.descripcion}</h2>
                <p>{prenda.precio}</p>
                <p>{prenda.talla}</p>
                {/* <p>stock: 30</p> */}
            </div>
        </div>
    )
}
