import give_rewards from "xtoearn-near-sdk";
import dotenv from 'dotenv';

dotenv.config();

const args = {
  "reward_name": "win_hackathon",
  "program_name": "nearcon2022",
  "user_wallet": "degens.testnet"
};


give_rewards(
  process.env.CONTRACT_ID, 
  process.env.METHOD_NAME,
  args, process.env.ATTACHED_DEPOSIT).then(event => console.log(event));


