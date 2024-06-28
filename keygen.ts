import { Keypair } from "@solana/web3.js";

//generate a new keypair
let kp= Keypair.generate()
console.log(`you have generated a new Solana wallet: ${kp.publicKey.toBase58()}`);
console.log(`Solana Wallet Secret Key: ${kp.secretKey}`);