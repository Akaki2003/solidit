//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

contract Transactions{
    uint public ItemCount;

    struct ItemStruct{
        uint Id;
        string Title;
        address Author;
        string Description;
        uint Price;
        uint256 timestamp;
    }

    // mapping(uint => ItemStruct) public items;
    ItemStruct[] items;

     function AddToBlockchain(string memory title, string memory description, uint price) public {
        require(bytes(title).length > 0 && bytes(description).length > 0, "Title or description is empty");
        
        ItemStruct memory newItem;
        newItem.Id = ItemCount;
        newItem.Title = title;
        newItem.Author = msg.sender;
        newItem.Description = description;
        newItem.Price = price;
        newItem.timestamp = block.timestamp;
        
        items.push(newItem);
        ItemCount++;
    }

    function getItemCount() public view returns(uint){
        return ItemCount;
    }

    function EditItem(ItemStruct memory item) public{
        require(bytes(item.Title).length>0 && bytes(item.Description).length>0, "Title or description is empty");        
        items[item.Id]=item;
    }
    
     function GetAllItems() public view returns(ItemStruct[] memory){
        return items;
    }


     function GetItemById(uint id) public view returns(ItemStruct memory){
        return items[id];
    }


     function RemoveItemById(uint id) public{
        delete items[id];
    }

}