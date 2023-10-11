//https://eth-sepolia.g.alchemy.com/v2/ch7gnV0c_yxFmgxkwzBbn8ezsx7ooK8q

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_PRIVATE_KEY = "zz";

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/ch7gnV0c_yxFmgxkwzBbn8ezsx7ooK8q`,
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
