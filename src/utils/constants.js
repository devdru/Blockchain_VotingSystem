import { ethers } from "ethers";
import abi from "./voting.json";

export const contractAddress = "0x4C512ffaa12a40308686bF06bB534F705c33d2aA";

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();

export const votingContract = new ethers.Contract(contractAddress, abi, signer);
