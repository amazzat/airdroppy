import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config'

const URL = process.env.URL!
const KEY = process.env.KEY!

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: URL,
      accounts: [KEY]
    }
  }
};

export default config;
