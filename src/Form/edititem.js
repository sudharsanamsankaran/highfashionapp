import React, { useState, useEffect } from 'react';
import './form.css'

const EditItemForm = props => {
  const [ item, setItem ] = useState(props.currentItem)

  useEffect(
    () => {
      setItem(props.currentItem)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setItem({ ...item, [name]: value })
  }

  return (
    <form className="editform"
      onSubmit={event => {
        event.preventDefault()

        props.updateItem(item.id, item)
      }}
    >
      <label>Item Name</label>
      <input type="text" name="itemname" value={item.itemname} onChange={handleInputChange} />
      <label>Description</label>
      <input type="text" name="description" value={item.description} onChange={handleInputChange} />
      <label>Price</label>
      <input type="text" name="price" value={item.price} onChange={handleInputChange} />
      <label>Quantity</label>
      <input type="text" name="quantity" value={item.quantity} onChange={handleInputChange} />
      <label>Stock Recieved Date</label>
      <input type="text" name="stockrecieveddate" value={item.stockrecieveddate} onChange={handleInputChange} />
      <br /> <br/>
      <button>Update Item ⬆️</button><br /><br />
      <button onClick={() => props.setEditing(false)} className="button">
        Cancel 🎌
      </button>
    </form>
  )
}

export default EditItemForm;