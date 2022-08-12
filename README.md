# DAO

This is smart contracts that make DAO.

### Requirements:

-   [Yarn](https://yarnpkg.com/getting-started/install)
-   Node.js
-   HardHat

### QuickStart:

```
git clone https://github.com/lssleo/DAO
```

```
cd DAO
```

```
yarn init -y
```

```
yarn add --dev hardhat
```

### Scripts:

- Propose - make propose to DAO.
- Vote - make vote for propose.
- Queue and execute - final result.


### Useage:

Start local node:

```
yarn hardhat node
```
then open new terminal.

Deploy at local network:

```
yarn hardhat deploy --network localhost
```

### Run scripts:


Propose:
```
yarn hardhat run scripts/propose.ts --network localhost
```

Vote:
```
yarn hardhat run scripts/vote.ts --network localhost
```

Queue and executing:
```
yarn hardhat run scripts/queue-and-execute.ts --network localhost
```

## Powered with:

<img align="left" src="https://img.shields.io/badge/Solidity-2E8B57?style=for-the-badge&logo=solidity&logoColor=white" />
<img align="left" src="https://img.shields.io/badge/Ethereum-8B0000?style=for-the-badge&logo=Ethereum&logoColor=white" />
<img align="left" src="https://img.shields.io/badge/hardhat-2E8B57?style=for-the-badge" />
<img align="left" src="https://img.shields.io/badge/Typescript-008B8B?style=for-the-badge&logo=typescript&logoColor=white" />
