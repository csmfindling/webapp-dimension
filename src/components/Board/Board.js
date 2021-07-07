import React from 'react';
import './Board.css';
import Brick from '../Brick/Brick.js'
import {importAllFeedbacks} from '../helpers.js' 
import {importAllSymbols} from '../helpers.js'
import { API_URL } from '../../config';
import { handleResponse } from '../helpers';
import {withRouter} from 'react-router-dom';

class Board extends React.Component {
  constructor(props){
    super(props);

    const participant_info = this.props.location.state.participant_info
    const block_info       = this.props.location.state.block_info
    const pool_symbols     = this.props.location.state.pool_symbols
    const current_symbols  = ['','']

    current_symbols[0]    = pool_symbols[block_info.left_symbol[0] - 1]
    current_symbols[1]    = pool_symbols[block_info.right_symbol[0] - 1]

    this.state = {
      clickable       : true, // freezing when subject has chosen a symbol
      animation       : true, // relauch fading animation after each trial
      feedback        : Array(2).fill(null),
      participant_info : participant_info,
      block_info      : block_info, //      
      allfeedbacks    : importAllFeedbacks(require.context('../../images/feedbacks/', false, /\.(png|jpe?g|svg)$/)),
      error           : '',
      noFeedback      : ['null', 'null'],
      current_symbols : current_symbols,
      pool_symbols    : pool_symbols,
      chosen_symbols   : [],
      observed_rewards : [],
      chosen_positions : [],
      reaction_times   : [],
      correct_symbols  : [],
    };        
    this.redirectToBlock.bind(this)
    var time_date_first          = new Date()
    this.prev_reaction_time_date = time_date_first.getTime()
    this._handleGoBack.bind(this);    
    this._handleRefresh.bind(this);
  }
  

  componentDidMount(){
   document.body.style.background = "#F0F0F0";
   this._isMounted = true;
   this._isMounted && document.addEventListener("keydown", e => this._handleCheatKey(e), false); 
   window.history.pushState(window.state, null, window.location.href);
    window.addEventListener('popstate', e => this._handleGoBack(e));
    window.onbeforeunload = this._handleRefresh
  }


  _handleRefresh(evt){
    return false // error message when refresh occurs
  }

  _handleGoBack(event){
    window.history.go(1); // unallow to go back
  }

  componentWillUnmount()
  {
   this._isMounted && document.removeEventListener("keydown", e => this._handleCheatKey(e), false);
   this._isMounted = false;
  }  

  renderBrick(i) {
    //debugger;
    return (
      <Brick
    symbol        = {this.state.current_symbols[i]}
    feedback      = {this.state.feedback[i]}
    animation     = {this.state.animation}
    noFeedback    = {this.state.noFeedback[i]}
    symbolClicked = {() => this.handleClick(i)}
    />
    );
  }
  
  _handleCheatKey (event) {
/*        if (event.keyCode == 67){ // c code => cheat to get information of current block
          var  externalWindow = window.open('', 'Cheat Code', 'width=600,height=400,left=200,top=200');
          var arr = ['rewards_high', 'rewards_low', 'correct_side', 'correct_dimension', 'nb_trials_per_block']
          var html = ''
          for (var key in this.state.block_info) //
          {                    
            if (arr.indexOf(key) > -1)
            {html += '<div>' + key + ' : ' + this.state.block_info[key]  + '</div>'}
          }
          html += '<div>' + 'number of blocks : ' + this.state.participant_info.blocks_ids.length + '</div>'
          html += '<div>' + 'block number : ' + this.state.participant_info.block_number + '</div>'
          html += '<div>' + 'block id : ' + this.state.participant_info.blocks_ids[this.state.participant_info.block_number] + '</div>'          
          html += '<p></p>'
          externalWindow.document.write(html);
        return externalWindow
          ;
        }*/
     }

  handleClick(i) {

    // update symbol without Mutation
    const newcount     = this.state.block_info.trial_numb + 1
    const end_of_block = (newcount === this.state.block_info.nb_trials_per_block) ? true : false //  DEBUG = 1 this.state.block_info.nb_trials_per_block (newcount == 2) ? true : false //  

    if (this.state.clickable) {
    
      const noFeedback  = this.state.noFeedback.slice();
      noFeedback[1 - i] = 'null'
      noFeedback[i]     = ''    

      // reward
      let position          = (i === 0) ? 'left' : 'right';
      let observed_feedback = (this.state.block_info.correct_side[this.state.block_info.trial_numb] == position) ? this.state.block_info.rewards_high[this.state.block_info.trial_numb] : this.state.block_info.rewards_low[this.state.block_info.trial_numb]

      const feedback  = this.state.feedback.slice();
      feedback[1 - i] = null
      feedback[i]     = observed_feedback //(parseInt(positive_feedback) === 1) ? 'positive' : 'negative'
      

      // save information
      let chosen_positions = this.state.chosen_positions;
      chosen_positions.push(position)

      let chosen_symbols = this.state.chosen_symbols;
      let chosen_symbol  = (i === 0) ? this.state.block_info.left_symbol[this.state.block_info.trial_numb] : this.state.block_info.right_symbol[this.state.block_info.trial_numb]
      chosen_symbols.push(parseInt(chosen_symbol))

      let observed_rewards = this.state.observed_rewards;
      observed_rewards.push(parseInt(observed_feedback))

      let correct_symbols = this.state.correct_symbols;
      let correct_symbol  = this.state.block_info.correct_side[this.state.block_info.trial_numb] === 'left' ? this.state.block_info.left_symbol[this.state.block_info.trial_numb] : this.state.block_info.right_symbol[this.state.block_info.trial_numb]
      correct_symbols.push(parseInt(correct_symbol))

      let reaction_times           = this.state.reaction_times;
      var date                     = new Date()
      let reaction_time            = date.getTime() - this.prev_reaction_time_date
      this.prev_reaction_time_date = date.getTime()
      reaction_times.push(reaction_time)

      this.setState({        
        chosen_positions : chosen_positions,
        chosen_symbols   : chosen_symbols,
        observed_rewards : observed_rewards,
        correct_symbols  : correct_symbols,
        reaction_times   : reaction_times,
      })

      // new symbols
      const current_symbols = this.state.current_symbols.slice();
      current_symbols[0]    = this.state.pool_symbols[this.state.block_info.left_symbol[newcount] - 1]
      current_symbols[1]    = this.state.pool_symbols[this.state.block_info.right_symbol[newcount] - 1]

      this.setState({        
        feedback  : feedback,
        clickable : false,
        animation : false,
        noFeedback : noFeedback,
      })

      // start new block or update reset feedbacks for next trial (without mutation)
      if (end_of_block){
        setTimeout(() => this.redirectToBlock()
                , 1000);        
      }
      else {
        setTimeout(() => this.setState({
          clickable  : true,
          feedback   : Array(2).fill(null),
          noFeedback : Array(2).fill('null'),
          animation  : true,
          block_info : {...this.state.block_info, trial_numb:newcount},
          current_symbols : current_symbols,        
        }), 1000);     
      }
    }
  }

  redirectToBlock ()
  {
    let block_id = this.state.participant_info.blocks_ids[this.state.participant_info.block_number]
    let body     = {        'block_number'     : this.state.participant_info.block_number, 
                            'chosen_positions' : this.state.chosen_positions,
                            'chosen_symbols'   : this.state.chosen_symbols,
                            'observed_rewards' : this.state.observed_rewards,
                            'correct_symbols'  : this.state.correct_symbols,
                            'reaction_times'   : this.state.reaction_times,
                            'date_time' : this.state.participant_info.date_time,}

    fetch(`${API_URL}/participants/create/` + this.state.participant_info.participant_id + `/` + block_id + `/` + this.state.participant_info.prolific_id, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })

    this.props.history.push({
      pathname: `/Block`,
      state: {participant_info:this.state.participant_info, newblock_frame : false}
    })    
  }

  render() {
    let status;
    return (
      <div> 
        <div className="status">{status}</div>
        <div className="allBricks">
        <span className='brick1'>  {this.renderBrick(0)} </span>
        <span className='brick2'>  {this.renderBrick(1)} </span>
        </div>
      </div>
          );
  }
}

export default withRouter(Board);


