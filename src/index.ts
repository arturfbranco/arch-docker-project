import {config} from "dotenv";
import { main } from "./server";

config();
try{
    main();
} catch(err){
    console.log(err);
}
