const hre = require("hardhat");

async function main() {

    const [deployer] = await hre.ethers.getSigners();

    const accountBalance = await deployer.getBalance();
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const Token = await hre.ethers.getContractFactory("Token");
    const demoToken = await Token.deploy();
    await waveContract.deployed();

    console.log("Demo Token deployed to:", demoToken.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });