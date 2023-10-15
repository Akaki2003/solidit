//https://eth-sepolia.g.alchemy.com/v2/ch7gnV0c_yxFmgxkwzBbn8ezsx7ooK8q

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_PRIVATE_KEY =
  "5d6845eed6720dbee195ac4d42d076837694e2675c417b9f9d947243629931b8";

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
      blockGasLimit: 60000000, // Network block gasLimit
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/ch7gnV0c_yxFmgxkwzBbn8ezsx7ooK8q`,
      // gasPrice: 8000000000,
      // gas: 2100000,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};
