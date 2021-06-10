import React from 'react'
import Counter from './Counter'

const ItemList = () => {

    const onAdd = (amount) => {
        console.log(amount)
    }

    return (
        <div className='mt-3'>
            <h1>Carrito de compras</h1>
            <Counter initial={0} stock={15} onAdd={onAdd} />
        </div>
    )

}

export default ItemList