import { OrderCard } from '../components/OrderCard.jsx'

export const MuestraPedidos = ({pedidos, textoVacio}) => {
    return (
    <div className='dashboard' >
        {pedidos.length === 0 ? (
            <h1>{textoVacio}</h1>
        ) : (
            <div className='orders'>
                {pedidos.map((pedido) => (
                    <OrderCard key={pedido.id} pedido={pedido} toShirt={() => console.log("X")}/>
                ))}
            </div>
        )}
    </div>
    )
}