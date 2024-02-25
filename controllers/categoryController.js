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

};


// get all category

const categoryController = async(req,res)=>{
    try {
        const category = await categoryModel.find({});
        res.status(200).send({
            success:true,
            message:"All category List",
            category,
        })
        
    } catch (error) {
        console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get category",
      error: error.message, 
    });
        
    }
};

// get single category
const singleCategoryController =async (req,res)=>{

  try {
    const {slug} = req.params;

    const category = await categoryModel.findOne({slug});

    res.status(200).send({
      success:true,
      message:"Get single category successfully!",
      category,
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get single category",
      error: error.message, 
    });
  }
};



// Delete category Controller
const deleteCategoryController =async (req,res)=>{
  try {

    const {id} = req.params;
await categoryModel.findByIdAndDelete(id);
res.status(200).send({
  success:true,
  message:"Category deleted successfully",
})
    
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in delete category",
      error: error.message, 
    });
  }
}

export { createCategoryController,updateCategoryController,categoryController,singleCategoryController,deleteCategoryController };
