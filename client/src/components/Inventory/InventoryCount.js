import React, {useState} from 'react';
import Inventory from './Inventory';
import {GrSubtractCircle} from 'react-icons/gr';
import {SiAddthis} from 'react-icons/si';

const InventoryCount = ({ inventoryItems, itemAdded, removeItem, updateInventoryItem}) => {
    const [edit, setEdit] = useState ({
        id: null, 
        value: ''
    });

const submitUpdate = value => {
    updateInventoryItem (edit.id, value);
    setEdit ({
        id: null, 
        value: ''
    });
};

    if (edit.id) {
        return <Inventory edit ={edit} onSubmit= {submitUpdate} />
    }

    return inventoryItems.map ((inventoryItem, index) => (
        <div 
        className= {inventoryItem.isAdded ? 'item-row added' :'item-row'} 
        key= {index}
        >
            

        <div key={inventoryItem.id} onClick={() => itemAdded(inventoryItem.id)}>
            {inventoryItem.text}
            </div> 
            <div className="icons">
                <SiAddthis
                 />
                <GrSubtractCircle 
                />
            </div>

        </div>
    )); 
    
};

export default InventoryCount;
