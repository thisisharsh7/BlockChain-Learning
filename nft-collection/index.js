import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";

const sdk = ThirdwebSDK.fromPrivateKey("devnet", "5wJLYEcsGi1geoefp4CtJwoH52qRdf5z6p5ahFBxapE9hAZznZzXyPdbAwbH2a3HWsREse1K3GxbkePq459sjZmV");

const nftCollection = await sdk.deployer.createNftCollection({
    name: "Harsh Nft",
    description: "Harsh first nft project"
})
console.log(nftCollection);