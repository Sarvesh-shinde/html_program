const { response, request } = require('express');
const Employee=require('../model/Employee');

const createEmployee=async(req,res)=>{
    try{
        const {name,email,phone}=req.body;
        const employee=new Employee({
            name,
            email,
            phone,

        })
        await employee.save();
        res.status(201).json({message:"Employee document inserted successfully"});




    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"});

    }
}

//get or fetch  here we fetch all the documents
const getEmployees=async(request,response)=>{
    try{
        const employees=await Employee.find();
        response.status(201).json(employees);


    }

    catch(err){
        console.log(err)
        response.status(501).json({message:"Server issue error"})


    }
}

const getEmployee=async(request,response)=>{
    try{
        const employee=await Employee.findById(request.params.id);
        if(!employee){
            response.status(401).json({message:"Employee document doesn`t exist "})

        }
        response.status(201).json(employee);

    }
    catch(err){
        console.log(err)
        response.status(501).json({message:"Server related error"})
    }
}

//update or put

const updateEmployee=async(request,response)=>{
    try{
        const{name,email,phone}=request.body;
        const myEmployee=await Employee.findByIdAndUpdate(request.params.id,
        {name,email,phone}
        )
        if(!myEmployee)
        {
            return response.status(404).json({message:"Employee document is not updated"})
        }
        response.status(200).json(myEmployee);

    }
    catch(err){
        console.log(err);
        response.status(501).json({message:"Server related error"})
    }
}

//delete or remove

const deleteEmployee=async(request,response)=>{
    try{
        const employee=await Employee.findByIdAndDelete(request.params.id);
        if(!employee){
            return response.status(404).json({message:"Employee document is not deleted"})

        }
        response.status(200).json({message:"Employee document is deleted"});

    }
    catch(err){
        console.log(err);
        response.status(501).json({message:"Server related error"})

    }
}

module.exports={createEmployee,getEmployees,getEmployee,updateEmployee,deleteEmployee};
 



