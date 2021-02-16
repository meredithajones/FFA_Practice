import Inventory from './Inventory';
import InventoryCount from './InventoryCount';
import React, {useState} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

function InventoryList() {
    const[inventoryItems, setinventoryItems] = useState([])

    //Ensures that only text will pass through the input box
    const addInventory = item => {
        if(!item.text || /^\s*$/.test(item.text)) {
            return
        }

        const newinventoryItems = [item, ...inventoryItems]

        setinventoryItems(newinventoryItems);
        console.log(item, ...inventoryItems);
    };


    return (
        <div>
            <h2>Dropping Something Off? Picking something up? Please add or subtract it below:</h2>
            <Inventory onSubmit={addInventory} />
            <InventoryCount
            inventoryItems={inventoryItems}
            />
            </div>
    );
}

export default InventoryList
