import { useEffect, useState } from "react";
import axios from "axios";

function useCategory (){
    const [categories, setCategories] = useState();
// Get category 
    const getCategories = async () =>{
        try {
            const {data} = await axios.get('http://localhost:8080/api/v1/category/get-category')
            setCategories(data?.category)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getCategories()
    },[]);
    return categories;
} 

export default useCategory;