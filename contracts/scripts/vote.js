const hre = require("hardhat");

async function main() {
    const [voter] = await hre.ethers.getSigners();
    const DAOProposal = await hre.ethers.getContractFactory("DAOProposal");

    const dao = await DAOProposal.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

    const tx = await dao.connect(voter).vote(0); // Voting on proposal ID 0
    await tx.wait();

    console.log("🗳️ Voted on proposal 0");

    const proposals = await dao.getAllProposals();
    proposals.forEach((p, i) => {
        console.log(`Proposal ${i}: ${p.description} | Votes: ${p.voteCount}`);
    });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
