// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DAOProposal {
    struct Proposal {
        uint id;
        string description;
        uint voteCount;
        address proposer;
    }

    Proposal[] public proposals;
    mapping(uint => mapping(address => bool)) public hasVoted;

    function propose(string memory _desc) public {
        proposals.push(Proposal({
            id: proposals.length,
            description: _desc,
            voteCount: 0,
            proposer: msg.sender
        }));
    }

    function vote(uint _proposalId) public {
        require(!hasVoted[_proposalId][msg.sender], "Already voted");
        proposals[_proposalId].voteCount++;
        hasVoted[_proposalId][msg.sender] = true;
    }

    function getProposal(uint _id) public view returns (Proposal memory) {
        return proposals[_id];
    }

    function getAllProposals() public view returns (Proposal[] memory) {
        return proposals;
    }
}
