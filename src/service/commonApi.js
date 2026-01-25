import axios from "axios"

const commonAPI=async(httpRequest,url,reqBody)=>{

    const reqConfig={
        method:httpRequest,
        url,
        data:reqBody
    }

    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })

}

export default commonAPI