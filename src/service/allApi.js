import commonAPI from "./commonApi";
import { serverURL } from "./serverUrl";

/////////////////////////////////////////  API CALL  //////////////////////////////////////////


////////////////////////////////////////  categories  ////////////////////////////////
//1.add categories to server API
export const CategoriesAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/categories`,reqBody)
}

//2.get all categories from the server
export const getallCategoriesAPI=async()=>{
    return await commonAPI("GET",`${serverURL}/categories`)
}









////////////////////////////////////////  FoodS Items  ////////////////////////////////

//1.add food items to server API
export const AddFoodItemsAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/foods`,reqBody)
}

//2.get all categories from the server
export const getallFoodItemsAPI=async()=>{
    return await commonAPI("GET",`${serverURL}/foods`)
}




////////////////////////////////////////  Popular Dishes  ////////////////////////////////


//1.add popular dishes to server API
export const AddPopularDishesAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/popularDishes`,reqBody)
}

//2.get all categories from the server
export const getallPopDishesAPI=async()=>{
    return await commonAPI("GET",`${serverURL}/popularDishes`)
}