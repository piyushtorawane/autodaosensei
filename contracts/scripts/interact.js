const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const DAOProposal = await hre.ethers.getContractFactory("DAOProposal");
    const dao = await DAOProposal.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

    console.log("Submitting a proposal...");

    const tx = await dao.connect(deployer).propose("Build community AI bot");
    await tx.wait();

    console.log("Fetching all proposals...");
    const proposals = await dao.getAllProposals();

    proposals.forEach((p, i) => {
        console.log(`Proposal ${i}: ${p.description} | Votes: ${p.voteCount}`);
    });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
