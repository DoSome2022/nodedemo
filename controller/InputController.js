import Input from "../model/Input.js";

export const GetDisplayInput = async(req,res)=>{
    const InputData = await Input.find()
   res.render('display',{inputs:InputData})
}

export const GetInput = (req,res)=>{
    res.render('input')
}

export const PostInput = async(req,res)=>{
    const {Input1 ,Input2} = req.body;
    const newInput = new Input({
        Input1:Input1,
        Input2:Input2
    })
    try {
      const saveInput = await newInput.save();
      console.log(saveInput)
      res.redirect('/input/')  
    } catch (error) {
        res.send(error)
    }
}

export const DelInput = (req,res)=>{
    try {
        Input.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.send(error)
    }
}