// SPDX-License-Identifier: MIT
//import ''
pragma solidity ^0.8.0;


error invalidMinPledge(uint256 amount, uint256 required);
error invalidMaxPledge(uint256 amount, uint256 required);

contract H2OFund {
    event Pledge(address _subscriber, uint256 _amount);


    address master_signer;
     
    mapping(address => bool) signer;
    mapping(address => uint256) valuePledge;

    uint256 target;

    uint256 minimum;
    uint256 maximum;

    constructor(uint256 _target, uint256 min, uint256 max) {
        minimum = min;
        maximum = max;

        master_signer = msg.sender;
        signer[msg.sender] = true;
        target = _target;
    }

    
    modifier onlySigner { // ensures that only signers can call a function 
        require(signer[msg.sender]);
        _;
    }
    
    modifier onlyMasterSigner { // modiifer for adding new signers;
        require(msg.sender == master_signer, 'caller is not master_signer');
        _;
    }
    

    function rootAddSigner(address _signer) public onlyMasterSigner {
        require(!signer[_signer], 'signer is alrady added');
        signer[_signer] = true;

    }


    receive() external payable { // for msg.value 
        recordValuePledge(msg.sender, msg.value);
    }
    


    function recordValuePledge(address subscriber, uint256 amount) internal {
        valuePledge[subscriber] += amount;
        emit Pledge(subscriber, amount);
    }


    function pledgeValue() public payable {
        if (minimum != 0 && msg.value < minimum) {
            revert invalidMinPledge({
                amount: msg.value, 
                required: minimum
            });
        } if (maximum != 0 && msg.value > maximum) {
            revert invalidMaxPledge({
                amount: msg.value,
                required: maximum
            });
        }
        recordValuePledge(msg.sender, msg.value);
    }


    function viewTarget() public view returns (uint256) {
        return target;
    }
    

    function checkSigner(address _signer) public view returns (bool) {
        return signer[_signer];
    }
    
    function pledgeToken(uint256 amount) public {
        //Token = ERC20(_contract) TODO INTERFACE ERC20 Contract, add contract parameter.
        // address tokenContract = _contract;
        //Error handling
        if (minimum != 0 && amount < minimum) {
            revert invalidMinPledge({
                amount: amount, 
                required: minimum
            });
        } if (maximum != 0 && amount > maximum) {
            revert invalidMaxPledge({
                amount: amount,
                required: maximum
            });
        }
        //Token.approve(msg.sender, amount);
        //Token.transferFrom(msg.sender, amount);
        recordValuePledge(msg.sender, amount);

    }
    // TODO: Make function(s) to pledge ERC20 tokens of choosing by having the contract addresss as a parameter, rather than specific addresses instiantialized in the constructor...



}