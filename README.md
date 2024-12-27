# How to build a full-stack app on Stacks

This is a full-stack counter app built with Next.js on the front-end and with Clarity smart contracts deployed on Stacks mainnet.

This repo is only pertaining to the Clarity smart contracts. For the front-end application go [here](https://github.com/ECBSJ/Full-Stack-Counter-App-On-Stacks).

This repo is part of a full end-to-end [tutorial](https://youtu.be/Z9JQU_sOQLQ) published on Hiro's Youtube channel.

The deployed counter contract on mainnet can be found [here](https://explorer.hiro.so/txid/SP3TJMRQ13QR6V5HGT6AKEK7PP699F4148JZTB9G3.counter?chain=mainnet).

## Steps

- Build Counter contract using Clarinet
- Implement SIP010 fungible COUNT token
- Debug and test contract code
- Iterate on contract in Clarinet's devnet
- Build front-end app
- Connect FE app to Leather wallet and devnet instance
- Register chainhook predicates on Hiro Platform
- Setup db to handle predicate payload events
- Handle db and state changes on the UI
- Setup mainnet deployment plan
- Deploy to mainnet
- Deploy FE app with Vercel
- Setup contract monitoring alerts
