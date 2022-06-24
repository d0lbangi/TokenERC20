const hre = require("hardhat");

async function main() {

    // get deployer
    const [deployer] = await hre.ethers.getSigners();
    // get balance of deployer
    const accountBalance = await deployer.getBalance();
    
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const Token = await hre.ethers.getContractFactory("Token");
    demoToken = await Token.deploy();
    await demoToken.deployed();

    console.log("Demo Token deployed to:", demoToken.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });