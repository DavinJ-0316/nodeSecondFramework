const service=require("../service/userservice");

const getUserList=async (req,res)=>{
    let data= await service.getUserListService();
    res.returnvalue({data,message:"success", status:1});
};

module.exports={
    getUserList,
}