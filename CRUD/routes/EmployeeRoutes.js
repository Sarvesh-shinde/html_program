const express=require('express');
const router=express.Router();
const employeeController=require('../controller/EmployeeController')

router.post("/add-emp",employeeController.createEmployee)
router.get("/getEmployees",employeeController.getEmployees)
router.get("/getemp/:id",employeeController.getEmployee)
router.put("/update-emp/:id",employeeController.updateEmployee)
router.delete("/delete-emp/:id",employeeController.deleteEmployee)

module.exports=router;
