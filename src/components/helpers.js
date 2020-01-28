import { API_URL } from '../config';


export const importAllSymbols = (r) => {
  let images = {};
  r.keys().map((item, index) => {
  		images[item.replace('./', '').split('.')[0]] = r(item);
  		}); 
  return images;
}

export const importAllFeedbacks = (r) => {
  let images = {};
  r.keys().map((item, index) => {
  		images[item.replace('./', '').split('.')[0]] = r(item); 
  		}); //console.log(item.replace('./', '').split('c.')[0]);
  return images;
}

export const handleResponse = (response) => {
    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
    });
}

/*export function fetchBlocktest(block_id_) {
   return fetch(`${API_URL}/block/` + block_id_)
            .then(handleResponse)
            .then((data) => {
              const false_positive_train   = Object.keys(data['false_positive_train']).map((key, index) => (data['false_positive_train'][key]))
              const testing_left_symbol    = Object.keys(data['testing_left_symbol']).map((key, index) => (data['testing_left_symbol'][key]))
              const testing_right_symbol   = Object.keys(data['testing_right_symbol']).map((key, index) => (data['testing_right_symbol'][key]))
              const train_correct_side     = Object.keys(data['train_correct_side']).map((key, index) => (data['train_correct_side'][key]))
              const training_left_symbol   = Object.keys(data['training_left_symbol']).map((key, index) => (data['training_left_symbol'][key]))
              const training_right_symbol  = Object.keys(data['training_right_symbol']).map((key, index) => (data['training_right_symbol'][key]))
              return data
                })
            .catch((error) => {
                console.log(error)});
  }
*/
/*  function getvals(){
    return fetch('https://jsonplaceholder.typicode.com/posts',
    {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch(error => console.warn(error));
  }
  */

/*let responseData = response => {
  return response;
};
*/
/*export let fetchParticipantId = () => {
  let result = 0
 return fetch(`${API_URL}/participants/last_participant_id/`)
          .then(handleResponse)
          .then((data) => {
            result = parseInt(data['new_participant_id'])   
            return responseData(result)  
        })
          .catch((error) => {
              console.log(error)
        });
}
*/
/*    let participant_id_
    fetchParticipantId().then((data) => {
                console.log(data)
                 this.setState({
                    participant_id : data,
                });
                 this.fetchSymbols(data);
               });*/