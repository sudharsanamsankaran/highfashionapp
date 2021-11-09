import React from 'react';
import './form.css'


const ItemTable = props => (
    <table className="tt">
        <thead className= "th">
            <tr className="tr">
                <th>Id</th>
                <th>Item Name</th>
            </tr>
        </thead>
        <tbody>
            {props.items.length > 0 ? (
                props.items.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.itemname}</td>
                        <td>
                            <button
                                onClick={() => props.deleteItem(item.id)}
                                className="button muted-button"
                            >
                                Delete ☠️
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default ItemTable;