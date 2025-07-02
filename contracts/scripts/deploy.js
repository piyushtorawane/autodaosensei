const hre = require("hardhat");

async function main() {
    const DAOProposal = await hre.ethers.getContractFactory("DAOProposal");
    const dao = await DAOProposal.deploy();
    await dao.waitForDeployment();

    const address = await dao.getAddress();
    console.log("✅ DAOProposal deployed to:", address);
}

main().catch((error) => {
    console.error("❌ Error in deployment:", error);
    process.exitCode = 1;
});
