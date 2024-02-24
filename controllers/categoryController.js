import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

// create category 
const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Name is required",
      });
    }

    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(400).send({
        success: false,
        message: "Category already exists",
      });
    }

    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();

    res.status(201).send({
      success: true,
      message: "New category created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in creating category",
      error: error.message, // Send only the error message to avoid exposing sensitive information
    });
  }
};


// update category 

const updateCategoryController = async(req,res)=>{
    try {
        const { name } = req.body;
        const {id} = req.params;

    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Name is required",
      });
    }

    const category = await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)}, {new:true});

    res.status(200).send({
        success:true,
        message:"category updated successully!",
        category,
    })
        
    } catch (error) {
        console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in update category",
      error: error.message, 
    });
        
    }

}

export { createCategoryController,updateCategoryController };
