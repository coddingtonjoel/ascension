import CryptoAES from "crypto-js/aes";
import CryptoENC from "crypto-js/enc-utf8";
import envVar from "./env-vars.json";

let temporary1 = CryptoAES.decrypt(envVar.temp, "deleteYasuoFromLoL");
temporary1 = temporary1.toString(CryptoENC);

let temporary2 = CryptoAES.decrypt(envVar.temp2, "deleteYasuoFromLoL");
temporary2 = temporary2.toString(CryptoENC);

export { temporary1, temporary2 };
