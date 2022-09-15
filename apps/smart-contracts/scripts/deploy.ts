import { ethers } from "hardhat";

const addresses = [
  "0x2D8fdDdC278e6082Df15AAf728E9D65dB680EE97",
  "0xA79FAda3d3dA9153c4fbef4997502CDB1a9919D4",
  "0x8afbafcd05eCdD09413F0A6FfF923b312B799c1a",
  "0x1fbab620f72dd4B73549B0299cDB817ff2338C6A",
  "0xe79e96472F5d8636aD757bF819e83634Fd379606",
  "0xffC3f18132887d7540D44C9C707071Af36ad45b2",
  "0x26bFBB961a5aEe0798E959FF0F031712E7773003",
]

async function main() {
  const A2ZTOKEN = await ethers.getContractFactory("contracts/A2ZTOKEN.sol:A2ZTOKEN");
  const token = await A2ZTOKEN.deploy();

  await token.deployed();

  console.log(`A2ZTOKEN deployed to ${token.address}`);


  const Airdrop = await ethers.getContractFactory("Airdrop");
  const airdrop = await Airdrop.deploy(token.address, addresses);

  await airdrop.deployed();


  console.log(`Airdrop deployed to ${airdrop.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
