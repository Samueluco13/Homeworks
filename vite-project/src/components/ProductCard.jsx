import "../styles/ProductCard.css"

export const ProductCard = ({prenda, onClick, onRemove}) => {
    return (
        <div className='product-card'>
            {/* <div className='product-card-info'> */}
                <h2 onClick={onClick} >{prenda.descripcion}</h2>
                <p>Precio: {prenda.precio} COP</p>
                <p>Talla: {prenda.talla}</p>
            {/* </div> */}
            <div>
                {onRemove && (
                    <button className="product-card-button danger"  onClick={() => onRemove(prenda.id)}>
                        Eliminar Pedido
                    </button>
                )}
            </div>
        </div>
    )
}
