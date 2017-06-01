import axios from 'axios'
import privatedata from '../privatedata'



function receiveHeroes(data)
{
    
    let result= data.results.map( (item,index) => { return { i:index, name:item.name }   }  )

    return { 
        type: 'GET_HEROES', 
        //filter, 
        data: result 
    };

}

function requestHeroes() {

  return {
    type: 'REQUEST_HEROES',
    
  }

}


export const getHeroes = (filter) => { 

    return dispatch =>{

        dispatch(requestHeroes() )

        return axios({
            method: 'get',
            url: 'http://gateway.marvel.com/v1/public/characters',
            params: {
                apikey: privatedata().PUBLIC_KEY,            
            },
        }).then(function (response) {        
            dispatch(receiveHeroes(response.data.data))       
        })
        .catch(function (error) {
            console.log(error);
        });
    }


  
}