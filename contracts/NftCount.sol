// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract NftCount {
    
    uint public numberOfNFT;

    // Check total number of NFT
    function checkTotalNFT() public view returns(uint256) {
        return numberOfNFT;
    }

    // Function to increment NFT number 
    function addNFT() public {
        numberOfNFT += 1;
    }

    // Function to delete the NFT by 1
    function deleteNFT() public {
        numberOfNFT -= 1;
    }
}
