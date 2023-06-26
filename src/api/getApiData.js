
 export const getApiData = () => {
 
   const charactersList = fetch("https://hp-api.onrender.com/api/characters")
                                        .then(  resp => {
                                            if(resp.ok){
                                             return resp.json()
                                            }else{
                                                console.log("something went wrong")
                                            }
                                        })
                                        .then(data => data)
                                        .catch(console.log)
    return charactersList
}


