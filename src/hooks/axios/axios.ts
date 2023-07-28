import axios from "axios";
type Params = {
  authenticationToken:string,
  route: string
  method: string,
  data?: any[]
}

export const request = async ({authenticationToken,route,method,data}:Params) => {


  if(authenticationToken) {
    try{
      if (method=== "post") {
        const axiosResponse = await axios.post(route,data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + authenticationToken,
            },
          });

       
        return {status: 'success', data: axiosResponse.data}
      } else {
        const axiosResponse = await axios.get(route,{
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + authenticationToken,
          },
        });
       
        return {status: 'success', data: axiosResponse.data}
      }
    }
    catch(err){
      
       return { status: "failed", error: "Failed to subscribe user:"}
    }    
  } 
  else{
    try{
      if (method=== "post") {
        const axiosResponse = await axios.post(route,data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          });

        return {status: 'success', data: axiosResponse.data}
      } else {
        const axiosResponse = await axios.get(route,{
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        return {status: 'success', data: axiosResponse.data}
      }
    }
    catch(err){
      
       return { status: "failed", error: "Failed to subscribe user:"}
    }    
  }
}
 