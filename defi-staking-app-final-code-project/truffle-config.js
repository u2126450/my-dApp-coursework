require('babel-register');
require('babel-polyfill');
require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    sepolia: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC,
        `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
      ),
      network_id: 11155111,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/truffle_abis/',
  compilers: {
    solc: {
      version: '^0.5.0',
      optimizer: {
        enabled: true,
        runs: 200
      },
    }
  }
};


