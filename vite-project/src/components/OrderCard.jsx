import { IoShirtOutline } from "react-icons/io5";
import { PiPants } from "react-icons/pi";
import { GiConverseShoe } from 'react-icons/gi';


export const OrderCard = ({pedido, toShirts, toPants, toShoes}) => {
    return (
        <div className="order-card">
            <div className="order-card-info">
                <h3>NUEVO PEDIDO</h3>
                <p>{pedido.descripcion}</p>
                <p>{pedido.precio} COP</p>
                <p>Talla {pedido.talla}</p>
            </div>
            <div className="order-card-buttons">
                <button onClick={() => toShirts(pedido.id)}>
                    <IoShirtOutline />
                </button>
                <button onClick={() => toPants(pedido.id)}>
                    <PiPants />
                </button>
                <button onClick={() => toShoes(pedido.id)}>
                    <GiConverseShoe />
                </button>
            </div>
        </div>
    )
}