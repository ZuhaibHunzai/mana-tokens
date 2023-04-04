// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PresaleContract is Ownable {
    IERC20 private ERC20Token;

    // percentage in BPS. e.g 10% = 1000 (10 * 100)
    uint256 private constant _referTokenBPS = 500; 
    // tokens exchange rate is amount of tokens user will get for sent ETH. e.g if 1 ETH he will get 2 ERC20 tokens
    uint256 public exchangeRate = 2 ether; 

    // amount of raised money in wei
    uint256 public weiRaised;

    /**
     * @notice it exchanges ERC20 tokens for salePrice
     * @param _refer wallet address of refer or zero address
     *
     */
    function buy(address _refer) external payable {
        require(msg.value > 0, "Zero Price");

        uint256 _msgValue = msg.value;
        uint256 _tokens = (_msgValue * exchangeRate) / 1e18;

        require(balaceOfContract() >=_tokens, "Low ERC20 balance");
        
        ERC20Token.transfer(_msgSender(), _tokens);

        if (
            _msgSender() != _refer &&
            _refer != address(0x0) &&
            ERC20Token.balanceOf(_refer) > 0
        ) {
            uint256 referToken = (_tokens * _referTokenBPS) / 10000;
            ERC20Token.transfer(_refer, referToken);
        }

        weiRaised += _msgValue;
    }

    /**
     * @notice updates token exchange rate. only callable by owner.
     * @param _rate is new exchange rate. it should be in Wei (1e18)
     *
     */
    function setExchangeRate(uint256 _rate) external onlyOwner {
        exchangeRate = _rate;
    }


    /**
     * @notice updates ERC20 token Info. only callable by owner.
     * @param _erc20Token is ERC20 Contract address
     *
     */
    function setERC20TokenInfo(address _erc20Token) external onlyOwner{
        ERC20Token = IERC20(_erc20Token);
    }

    /**
     * @notice transfers ERC20 tokens from contract. only callable by owner.
     * @param _tokens amount of tokens to transfer
     * @param _to receiver's address
     *
     */
    function transferContractTokens(
        uint256 _tokens,
        address _to
    ) external onlyOwner {
        require(_to != address(0x0), "transfer to zero address");

        ERC20Token.transfer(_to, _tokens);
    }

    /**
    * @notice transfers balance of contract to caller. only callable by owner.
  
     */
    function withdrawFunds() external onlyOwner {
        bool success = payable(msg.sender).send(address(this).balance);
        require(success, "Transfer failed!");
    }

    /**
    * @notice returns remaining ERC20 tokens balance in contract.
  
     */
    function balaceOfContract() public view returns (uint256) {
        return ERC20Token.balanceOf(address(this));
    }

    constructor(address _erc20Token) {
        require(_erc20Token != address(0x0), "Zero address");
        ERC20Token = IERC20(_erc20Token);
    }
}

