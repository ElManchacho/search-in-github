import { Router } from "express";
import { variables } from '../../../variables.json'

const api = Router();

api.get("/:username", (request, response) => {

  const { username } = request.params;


    const requestGitApi = require('request');

    var options = {
      uri: `${variables.GITHUB_URL}${username}`,
      method: 'GET',
      headers: {'user-agent': 'node.js'}
    };
    
    
    requestGitApi(options,function (error,responseGitApi,body){
      if(!error && responseGitApi.statusCode == 200){
          response.json({
            data: { body },
            //isHere:true,
          });
      }else{
        response.json({
          data: {} ,
          //isHere:false,
        });
        console.log()
      }
    })

});

api.post("/post/:username", (request, response) => {
  const { username } = request.params;

  response.json({
    data: { username },
  });
})

export default api;
