import Data from "../Data.js"
export const welcome=(req,res)=>{
    res.send("welcome to server cors package added mongoose added route data added")
}

export const data=(req,res)=>{
    res.send(Data.datas)
}