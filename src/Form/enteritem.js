import React, { useState } from 'react';
import './form.css'

const AddItemForm = props => {
	const initialFormState = { id: null, itemname: '', description: '', price:'', quantity:'', stockrecieveddate:'' }
	const [ item, setItem ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setItem({ ...item, [name]: value })
	}

	return (
		<form className="enterform"
			onSubmit={event => {
				event.preventDefault()
				if (!item.itemname || !item.description || !item.price || !item.quantity || !item.stockrecieveddate) 
				return 

				props.addItem(item)
				setItem(initialFormState)
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
            <br />
			<br />
			<button className="butn1">Add New Item</button>
		</form>
	)
}

export default AddItemForm;