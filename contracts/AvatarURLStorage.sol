// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AvatarClothingNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;

    constructor() ERC721("AvatarClothingNFT", "ACNFT") {}

    function mintClothingItem(
        address _to,
        string memory _tokenURI
    ) public onlyOwner {
        _tokenIdCounter += 1;
        _safeMint(_to, _tokenIdCounter);
        _setTokenURI(_tokenIdCounter, _tokenURI);
    }
}

// contract AvatarNFT  {
//     mapping(address => string) private avatarURLs;

//     event AvatarURLSet(address indexed user, string avatarURL);

//     function setAvatarURL(string memory _avatarURL) public {
//         avatarURLs[msg.sender] = _avatarURL;
//         emit AvatarURLSet(msg.sender, _avatarURL);
//     }

//     function getAvatarURL(address _user) public view returns (string memory) {
//         return avatarURLs[_user];
//     }
// }
