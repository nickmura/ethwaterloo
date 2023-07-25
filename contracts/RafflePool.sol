// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './Crowdfunding.sol';



error invalidTicketPurchase(uint256 amount, uint256 ticketPrice);


contract Raffle {
    event Winner(address _winner, address _contract, uint256 amount);

    mapping(address=>uint256) Tickets;

    address fundraiser;
    uint256 ticketPrice;
    

    constructor(address _fundraiser, uint256 price) {
        fundraiser = _fundraiser;
        ticketPrice = price;


    }

    modifier FundrContributor {
        _;
        //TODO FIND A WAY TO INDEX AND REQUIRE THAT THE USER WAS A CONTRIBUTOR
        // TO THE FUNDRAISING CONTRACT
    }

    function buyTicket(uint256 _amount) public {
        if (_amount == ticketPrice || ticketPrice % _amount == 0) {
            Tickets[msg.sender] = _amount / ticketPrice;
        } else {
            revert invalidTicketPurchase({
                amount: _amount, 
                ticketPrice: ticketPrice
            });
        }
    }

}