// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


error invalidSigner(address invalid);

contract FundrProjectPrototype {
    event Pledge(address _subscriber, uint256 amount);

    address master_signer;

    mapping(address => bool) signer;
    mapping(address => uint256) valuePledge;

    uint256 target;

    constructor() {
        master_signer = msg.sender;
        signer[msg.sender] = true;
    }



    modifier onlySigner() {
        require(signer[msg.sender]);
        _;
    }

    modifier onlyMasterSigner {
        require(msg.sender == master_signer, 'caller is not master signer');
        _;
    }


    function rootAddSigner(address _signer) public onlyMasterSigner {
        if (signer[_signer]) {
            revert invalidSigner(_signer);
        }
        signer[_signer] = true;
    }

    function recordPledge(address subscriber,uint256 amount) internal {
        valuePledge[subscriber] += amount;
        emit Pledge(subscriber,amount);
    }

}