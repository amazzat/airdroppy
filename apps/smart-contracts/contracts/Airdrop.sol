// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface A2ZTOKEN {
    function getMaxSupply() external view returns (uint8);

    function mint(address to, uint256 amount) external;
}

contract Airdrop {
    A2ZTOKEN token;
    mapping(address => bool) public claimers;
    uint8 constant claimers_length = 7;

    constructor(address _token, address[claimers_length] memory _claimers) {
        token = A2ZTOKEN(_token);
        for (uint8 i = 0; i < claimers_length; i++) {
            claimers[_claimers[i]] = false;
        }
    }

    function claim() public {
        require(canClaim(msg.sender));
        token.mint(
            msg.sender,
            (token.getMaxSupply() / claimers_length) * 10**18
        );
    }

    function canClaim(address claimer) public view returns (bool) {
        return !claimers[claimer];
    }
}
