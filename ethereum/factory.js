import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xB1215952A85c6344a412aEFC70b3Fe675D2d86D2"
);

export default instance;
