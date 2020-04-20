import React from 'react';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { API_URL } from '../../config';
import { handleResponse } from '../helpers';
import './Intro.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import queryString from 'query-string';

/*
Intro component is created when the application opens. It loads the participant id
, the ids of the blocks that the subject will see and whether these blocks are
unidimensional blocks (the relevant dimension is given to the subject) or not. There are three other 
state variables, 'block_number' which indicates which block the subject is currently at. This
variable is initialized at 0.
*/

const survey_list = [
'demo', // ddemograhics
'bis',  // impulsivity 
'ius',  // uncertianty 
'asrs', // adhd
'pdi',  // delusions 
'stai', // state anxiety 
'ocir', // OCD
'pvd',  // perceived vulnerability 
'iq'    // IQ 
] 

class Intro extends React.Component {
  constructor(props){    
    super(props);
    // let url       = this.props.location.search;
    // let params    = queryString.parse(url);
    
    var date_time = new Date().toLocaleString();
    this.state    = {
      participant_id        : 1,
      blocks_ids            : [],
      unidimensional_blocks : [],
      block_number          : 0,
      newblock_frame        : true,
      count                 : 0,
      prolific_id           : this.props.location.state.prolific_id,  // params['PROLIFIC_PID'],
      study_id              : this.props.location.state.study_id,     // params['STUDY_ID'],
      date_time             : date_time,
      survey_list           : survey_list, 
      block_number_survey   : 0, 
      debut_survey          : true  
    }
    
    console.log('Prolific ID:',this.state.prolific_id)
    console.log('study ID:',this.state.study_id)
    
    this.fetchParticipantInfo.bind(this);    
    this.directToBlock.bind(this);

    // for DEBUG ONLY REMOVE AFTER: 
    this.directToSurvey.bind(this); 

  }

  componentWillMount() {
  document.body.style.background = "#F0F0F0";  
  this.fetchParticipantInfo();
  }

  fetchParticipantInfo () {
  fetch(`${API_URL}/participants/last_participant_id/`)
          .then(handleResponse)
          .then((data) => {
            const participant_id_ = parseInt(data['new_participant_id'])

            console.log('Participant_id:', participant_id_)
            this.setState({
                    participant_id : participant_id_,
                });
            this.fetchBlocksInformation(participant_id_)
        })
          .catch((error) => {
              console.log(error)
        });    
  }

  createGhostParticipant(){
    let block_id = -1
    let body     = {        'block_number'     : -1,
                            'chosen_positions' : [],
                            'chosen_symbols'   : [],
                            'observed_rewards' : [],
                            'correct_symbols'  : [],
                            'reaction_times'   : [],
                            'date_time' : this.state.date_time,}

    fetch(`${API_URL}/participants/create/` + this.state.participant_id + `/` + block_id + `/` + this.state.prolific_id, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
  }

  fetchBlocksInformation (participant_id_) {
   fetch(`${API_URL}/participants_blocks/` + participant_id_)
            .then(handleResponse)
            .then((data) => {
              const blocks_ids            = Object.keys(data['blocks_ids']).map((key, index) => (data['blocks_ids'][key]))
              const unidimensional_blocks = Object.keys(data['unidimensional_blocks']).map((key, index) => (data['unidimensional_blocks'][key]))
                this.setState({
                    blocks_ids            : blocks_ids,
                    unidimensional_blocks : unidimensional_blocks,
                });                })
            .catch((error) => {
                this.setState({ error : error.errorMessage, loading: false }); });
  }

  directToBlock () {
    const count = this.state.count;
/*    if (count == 0)
    {
    	this.createGhostParticipant()
    }*/
    if (count < 3)
    {
      this.setState({count : count + 1})
    }
    else
    {
    this.props.history.push({
      pathname: `/Block`,
      state: {participant_info: this.state, newblock_frame:this.state.newblock_frame} // the 'newblock_frame' variable is redundant but this simplifies the code
    })
  }
  }

/* THis is for SURVEY DEBUG ONLY TO SKIP THE TASK */ 
directToSurvey () {
    
    this.props.history.push({
      pathname: `/Survey`,
      state: {participant_info: this.state, newblock_frame:this.state.newblock_frame} // the 'newblock_frame' variable is redundant but this simplifies the code
    })
  }

  previousPage()
  {
    const count = this.state.count;
    this.setState({count : count - 1})
  }

  render()
  {
  // render instructions
   let mytext
   if (this.state.count === 0) {
        mytext = <div className='text'> <p> In this experiment, your final payoff will depend on your choices. </p>
                 <p> You can maximize your payoff by finding out which symbol feature makes you win the highest rewards. </p>
                 <p> For each choice you make, you will get a numerical reward which is on average 50. </p>
                 <p> At the end of the experiment, we will calculate the sum of rewards you won and translate the score into bonus money. </p> </div>;
   } 
   else if (this.state.count === 1) {
        mytext = <div className='text'> <p> The higher the rewards you win, the more money you will get at the end of the experiment. </p>
                 <p> Overall, you can win up to <span className="bold">£3</span> as a bonus. </p>
                 <p> <span className="bold">Note, that you will only receive the bonus if you complete both the game and the questionnaires.</span></p>
                 </div>;
   }
   else if (this.state.count === 2) {
        mytext = <div className='text'> <p> At each trial, you must choose between two symbols. Each symbol will vary along three dimensions : shape, color and grating direction. </p>
                <p> Here are two example symbols: </p>                
                <img className="introsymbol" src={require('../../images/symbols/symbol_shape_0_grate_2_color_1.png')} /> 
                <img className="introsymbol" src={require('../../images/symbols/symbol_shape_1_grate_3_color_2.png')} /> 
                <div className="translate"/>
                 <p> The crucial point is that only one of these three dimensions is relevant for maximizing rewards (the other two being uninformative distractors). </p>
                 <p>
                  On each block, your goal is to maximize rewards by identifying the relevant dimension (the shape, color or grating) and, along the dimension, the higher rewarding feature (e.g., orange or green if the color is the relevant dimension). </p></div>; 
   }
   else if (this.state.count === 3){
        mytext = <div className='text'> <p>  </p>
                 <p> Let's begin the training. </p></div>;
   }
   // define buttons
   let multibutton
   let multibutton2 // FOR DEBUG SURVEY ONLY 

   if (this.state.count === 0) {
       multibutton = <Button variant="secondary" color="danger" size="sm" className="button" type="submit" onClick={()=> this.directToBlock()}> Next </Button>
      // THIS IS FOR DEBUG ONLY TO BE REMOVED
      if (this.state.debut_survey===true) {
        multibutton2 = <Button variant="secondary" color="danger" size="sm" className="button" type="submit" onClick={()=> this.directToSurvey()}> SURVEY DEBUG</Button>
      }
      else {
        multibutton2 = '' 
      } 
   }
   else {
      multibutton = <div className="center"> <div className="btn-group">
                      <Button variant="secondary" color="danger" size="sm" className="button" type="submit" onClick={()=> this.previousPage()}> Back </Button></div>
                      <div className="divider"/><div className="btn-group"><Button variant="secondary" color="danger" size="sm" className="button" type="submit" onClick={()=> this.directToBlock()}> Next </Button>
                    </div></div>                                                
  }

  return (
      <div className="center translate">
          <div className="introText">              
           <p className="title"> Instructions </p>
              {mytext}
          </div>
            {multibutton}
            <br></br> 
            <br></br> 
            {multibutton2}           
      </div>
  );
}

}


export default withRouter(Intro);

