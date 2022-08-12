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

##### Run scripts:


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
