import commonAPI from "./commonApi";
import { serverURL } from "./serverUrl";

/////////////////////////////////////////  API CALL  //////////////////////////////////////////


export const CategoriesAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/categories`,reqBody)
}