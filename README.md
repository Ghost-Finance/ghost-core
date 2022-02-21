<!-- Ghost Brand -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.jpg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">G-minter by Ghost.Finance</h3>

<p align="center">
    <br />
    <a href="https://github.com/g-minter/docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">soon in production</a>
    ·
    <a href="https://github.com/Ghost-Finance/g-minter/issues">Report Bug</a>
    ·
    <a href="https://github.com/Ghost-Finance/g-minter/issues">Request Feature</a>
</p>/

</p>

# Setup checklist

[ ] Node 14.15.0

# Setup environment variables

1. Check `env.example` at project root and fill in corresonpding values on your local
2. Go to https://infura.io/ and make an account
3. Paste the kovan project ID into your .env as the value for `INFURA_PROJECT_ID` key
4. Generate a 12 word mnemonic seed phrase (can use ganache to get one or ask project admin for current seed used for remote envs)
5. Paste 12 word mnemonic seed phrase as value for `MNEMONIC_SEED` key
6. Go to https://alchemyapi.io/ and setup an account then take the api key for the relevant network (like mainnet, kovan or ropsten) or ask the team for an existing API key and paste under `ALCHEMY_KEY`
7. When setting up locally, paste `LOCALHOST` as value to `CHAIN_NETWORK`. Other values are `KOVAN` or `MAINNET` (we are not on other testnets atm)

# Metamask

1. Be sure to have metamask plugin installed in your browser (recommended browser is Chrome)
2. Login to Metamask and point the network to localhost and port 7545 before starting the frontend app
3. Install ganache `https://trufflesuite.com/ganache/`.

## Quickstart: Running local

1. Open a new terminal window and run `git clone https://github.com/Ghost-Finance/g-minter && cd g-minter`
2. run `npm i` to install backend dependencies
3. run `npm run test:local` to run contract test suite to run smart contract test cases
4. run `npm run deploy:local` to compile and deploy the Minter contract to the ganache node
5. cd to frontend `cd frontend`
6. run `yarn` to install frontend dependencies
7. run `npm run start` to serve the app locally

## Environment Setup

#### Quickstart Setup

- [ ] Install all dependencies
- [ ] Deployed a local ethereum network with Ganache on the uma protocol/ protocol folder
- [ ] Compliled and deployed smart contract to the blockchain
- [ ] Contract artifact and typechain is auto generated in the front end folder

#### Terminal Setup Checklist

- [ ] Terminal 1 - React Front End for the dapp
- [ ] Terminal 2 - Ganache node deploy from the uma protocol folder

#### Dapp Setup Checklist

- [ ] Deploy the local ganache inside the uma protocol
- [ ] Metamask set to the network you are developing to (localhost:7545 for local, testnet of choice)
- [ ] Run a local react server

#### Smart Contract Development Setup Checklist

- [ ] Contract and other dependencies are in the same folder

## Tutorials

#### Deploying contracts in Rinkeby Testnet

1. Ensure you have added the following env variables: INFURA_PROJECT_ID and MNEMONIC SEED
2. Make sure the account in your mnemonic seed has enough balance to deploy the contract
3. Run `npm run test:local` to ensure all tests are passing (make sure you have the setup your local environment first)
4. If tests are passing, check deploy.ts if the addresses are pointed to rinkeby.
5. If all addresses are on kovan, deploy the code by running `npm run deploy:rinkeby`
6. The minter address should appear in the console.
7. Run the dApp: `cd frontend && npm run start`
8. Change your metamask network to Rinkeby
9. The minter dApp UI should load

#### Local developlment: How to update the smart contract code w/ hot reloading

1. Ensure your local environment has been set up (ganache node, truffle console)
2. Do updates in the smart contract solidity code in the contracts folder located in root
3. Add tests in the test folder when necessary
4. Run `npm run test:local`
5. If tests are passing, deploy the code by running `npm run deploy:local`
6. If successful, the front end dApp should reload and smart contract changes can be read/utilized by the dApp.

#### Resources

[HardHat Documentation](https://hardhat.org/getting-started/) - Hardhat tutorials, config, network, and plugin references

## Troubleshooting

1. Error: Cannot use JSX unless the '--jsx' flag is provided

- Follow: https://vscode.readthedocs.io/en/latest/languages/typescript/#using-the-workspace-version-of-typescript - "Using the workspace version of TypeScript" section

2. Warning: Calling an account which is not a contract

- Compile and deploy your contract first. Run `npm run deploy:local` for local deployments.

3. If you get `ProviderError: Must be authenticated!` or https://hardhat.org/errors/#HH604 then make sure you've entered a key and value in `.env` for `ALCHEMY_KEY`
4. If you've accidentally started a background process for a node then you can use `sudo lsof -i :<port number>` to find the PID then kill it using `kill -9 <PID>` (from https://stackoverflow.com/questions/3855127/find-and-kill-process-locking-port-3000-on-mac)

## Guidelines:

- Use Github Flow. (https://guides.github.com/introduction/flow/)
- Name your branches starting with feature/branchName. Ex. feature/doingSomethingNew or feature/fixSomething.
