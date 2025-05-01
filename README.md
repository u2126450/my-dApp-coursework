# CN6035 Coursework – Decentralized Banking DApp

Overview

This project is a Hybrid Decentralized Application (DApp) built as part of CN6035 module coursework. It enables users to stake tokens, earn rewards, and interact with smart contracts on the Ethereum **Sepolia testnet** using MetaMask.

---

Technologies Used

- **Frontend**: React.js (via `create-react-app`)
- **Smart Contracts**: Solidity (Tether, RWD, DecentralBank)
- **Blockchain Framework**: Truffle
- **Wallet Integration**: MetaMask
- **Testnet**: Ethereum Sepolia via Infura
- **Version Control**: Git & GitHub

---

Features

- Connect to wallet via MetaMask
- Stake Tether (USDT) tokens
- Receive RWD tokens as rewards
- Withdraw (unstake) at any time
- Interact with real blockchain on Sepolia testnet

---

Smart Contracts

Deployed via `truffle migrate --network sepolia`.

| Contract        | Address                    |
|----------------|----------------------------|
| Tether         | `0x...` (your deployed address) |
| RWD            | `0x...`                    |
| DecentralBank  | `0x...`                    |

_ABIs are stored in `/src/truffle_abis/`_

---

