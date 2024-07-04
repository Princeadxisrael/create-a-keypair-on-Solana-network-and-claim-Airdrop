
# Bridge to Turbin3 Solana development 

Within this project, we create a secret key and public key, request for an airdrop from solana devnet, made a transfer to another wallet and interacted with the program that WBA has created on the devnet


## Acknowledgements

 - [Risein](https://risein.com)
 - [Turbin3](https://turbin3.com)
 - [WBA](https://https://solana.web3builders.dev/)
 - [Solana cookbook](https://solanacookbook.com)


## Documentation

The files created in this projects include
```bash
 keygen.ts - generates a new Keypait
 airdrop.ts - claim token airdrops
 transfer.ts - initiate a transfer to another wallet
 enroll.ts -  interact with the anchor IDL program that WBA has created on the devnet
 ```


## Deployment
run:
To create a new keypair 

```bash
  yarn keygen
```

To claim an airdrop
```bash
  yarn airdrop
```
To initiate a transfer to another wallet
```bash
  yarn transfer
```

To interact with WBA IDL
```bash
  yarn enroll
```


## Installation
Install Rust, Rustup and Cargo

Open up a terminal window (for MacOS) or command prompt (for Windows) and paste this command.

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
Install Solana Tool Suite using brew 
```bash
  brew install solana
  solana --version
```
using yarn to create a new Typescript project.
```bash
npm install touch-cli -g
mkdir airdrop && cd airdrop
yarn init -y
```

The files created in this projects include
```bash
 keygen.ts
 airdrop.ts
 transfer.ts
 enroll.ts
 ```