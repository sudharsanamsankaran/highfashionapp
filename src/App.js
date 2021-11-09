import React, { useState, Fragment } from 'react';
import AddItemForm from './Form/enteritem';
import EditItemForm from './Form/edititem';
import ItemTable from './Form/deleteitem';
import Table from './Table/itemtable';
import './App.css';
import './Form/form.css';
import './Table/table.css';

const App = () => {

  const initialFormState = { id: null, itemname: '', description: '', price:'', quantity:'', stockrecieveddate:'' }

  const columns = [
    {accessor:'id',label:'Id'},
    { accessor: 'itemname', label: 'Item Name' },
    { accessor: 'description', label: 'Description' },
    { accessor: 'price', label: 'Price' },
    { accessor: 'quantity', label: 'Quantity' },
    { accessor: 'stockrecieveddate', label: 'Stock Recieved Date' },
  ]

  const [items, setItems] = useState([
    { id:1, itemname: 'Cotton Saree', description: 'Saree', price:'200', quantity:'10', stockrecieveddate:'15-05-2021' },
    { id:2, itemname: 'Silk Saree', description: 'Saree', price:'250', quantity:'14', stockrecieveddate:'18-09-2021' },
    { id:3, itemname: 'Western Wear', description: 'T-shirt', price:'400', quantity:'18', stockrecieveddate:'17-10-2021' },
  ])
  const [currentItem, setCurrentItem] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const addItem = item => {
    item.id = items.length + 1
    setItems([...items, item])
  }

  const deleteItem = id => {
    setEditing(false)

    setItems(items.filter(item => item.id !== id))
  }

  const updateItem = (id, updatedItem) => {
    setEditing(false)

    setItems(items.map(item => (item.id === id ? updatedItem : item)))
  }

  const editRow = item => {
    setEditing(true)

    setCurrentItem({ id:item.id, itemname:item.itemname, description:item.description, price:item.price, quantity:item.quantity, stockrecieveddate:item.stockrecieveddate })
  }

  return (
    <div className="container">
      <h1>High Fashion</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit Item</h2>
              <EditItemForm
                editing={editing}
                setEditing={setEditing}
                currentItem={currentItem}
                updateItem={updateItem}
              />
            </Fragment>
          ) : (
            <Fragment >
              <h2>Add Item</h2>
              <AddItemForm addItem={addItem} />
            </Fragment>
          )}
        </div>
        <br />
        <div className="flex-large">
          <br/>
          <h2>View Items</h2>
          <Table  rows={items} columns={columns} editRow={editRow} deleteItem={deleteItem}/>
          <br/>
          <h2>Delete Items</h2>
          <ItemTable items={items} editRow={editRow} deleteItem={deleteItem} />
        </div>
      </div>
    </div>
  )
}

export default App;