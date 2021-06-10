import React, {useState} from 'react'

const Counter = ({initial, stock, onAdd}) => {

    const [items, setItems] = useState(initial)

    const addItems = () => {
        items < stock &&
        setItems(items + 1)
    }

    const drawItems = () => {
        items > 0 &&
        setItems(items - 1)
    }
    
    return (
        <div className='container counter mt-3' >
            <div className='d-flex align-items-center justify-content-center mb-1'>
                <button className='minus-counterButton' onClick={drawItems}>-</button>
                <span className='counterAmount'>{items}</span>
                <button className='plus-counterButton' onClick={addItems}>+</button>
            </div>
            <button className='btn btn-secondary w-100'>
                Agregar
            </button>
        </div>
    )

}

export default Counter