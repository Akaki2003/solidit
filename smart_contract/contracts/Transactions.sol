//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

contract Items{
    uint ItemCount;

    struct ItemStruct{
        uint Id;
        string Title;
        address Author;
        string Description;
        uint256 timestamp;
    }

    // mapping(uint => ItemStruct) public items;
    ItemStruct[] items;

    function AddToBlockchain(string memory title,string memory description) public{
        ItemCount+=1;
        ItemStruct memory newItem = ItemStruct({
            timestamp:block.timestamp,
            Title:title,
            Description:description,
            Id:ItemCount,
            Author:msg.sender
        });
        items[ItemCount]=(newItem);
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