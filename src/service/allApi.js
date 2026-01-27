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

//2.get all Fooditems from the server
export const getallFoodItemsAPI=async()=>{
    return await commonAPI("GET",`${serverURL}/foods`)
}

//3.get a Food items from  server for edit
export const getAFoodItemsAPI=async(id)=>{
    return await commonAPI("GET",`${serverURL}/foods/${id}`)
}

//4.Upadte a Food items to  server for edited data
export const UpdateFoodItemsAPI=async(id,reqBody)=>{
    return await commonAPI("PUT",`${serverURL}/foods/${id}`,reqBody)
}

//4.Delete a Food items from  server 
export const DeleteFoodItemsAPI=async(id)=>{
    return await commonAPI("DELETE",`${serverURL}/foods/${id}`)
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