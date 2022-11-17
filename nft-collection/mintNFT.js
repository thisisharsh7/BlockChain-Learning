import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
import { readFileSync } from "fs";

const sdk = ThirdwebSDK.fromPrivateKey("devnet", "5wJLYEcsGi1geoefp4CtJwoH52qRdf5z6p5ahFBxapE9hAZznZzXyPdbAwbH2a3HWsREse1K3GxbkePq459sjZmV");

const myNftCollection = await sdk.getNFTCollection("5uY8A6iK6cH2pfnHv4soHb564JCYJSCLELuc1toR1pbx");

const meta = {
    name: "Blockchain",
    description: "nice",
    image: readFileSync('./63.png')
}

const mintNft = await myNftCollection.mint(meta);

console.log(mintNft);

const nftMinted = await myNftCollection.getAll();
console.log(nftMinted);