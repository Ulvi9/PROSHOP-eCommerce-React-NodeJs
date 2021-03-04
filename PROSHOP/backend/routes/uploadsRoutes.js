import  express from "express";
import multer from "multer";
import path from "path";

const router=express.Router();

const storage=multer.diskStorage({
    destination(req,file, cb){
      cb(null,"uploads/") },
    filename(req,file,cb){
        cb(null,file.originalname)
    }
})
function checkFileType(file,cb){
    const fileTypes=/jpg|jpeg|png/;
    const extName=fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype=fileTypes.test(file.mimetype);
    if (mimetype&&extName){
        return cb(null,true);
    }else{
        cb("Only Images");
    }
}
const upload=multer({
    storage:storage,
    fileFilter(req,file,cb){
        checkFileType(file,cb);
    }
})

router.post("/",upload.single("file"),(req,res)=>{
    res.send({message:"Image Created"});
})
export  default  router;