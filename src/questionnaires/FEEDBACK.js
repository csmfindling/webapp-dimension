var quizQuestions = [

/*
  Custom-Based questions for COVID-19 study
  by VS March 2020
*/

{ 
    question: "ADD ANY OPEN ENDED QUESTIONS HERE : How was your experience in this experiment? Did you have any troubles with completing the questionnaires?", 

    answers: [
        { 
          type: "answer-na",
          content: "Not applicable"}
        ],

      qtype:'free-report', 
      questionId: 1,
      surveytag: 'feedback',
      title: 'Feedback', 
      constraint: [
       {min: ""},
       {max: "1000000"}
      ]
  },

] 

export default quizQuestions;

