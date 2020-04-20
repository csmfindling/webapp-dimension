var quizQuestions = [

/*
  Questions relating to the demographics.  
*/

  {
      question: "You are:",
      answers: [
          {
              type: "GenderM",
              content: "Male"
          },
          {
              type: "GenderF",
              content: "Female"
          }
          
      ],
      qtype: "quiz",
      questionId: 1,
      surveytag: 'demo', 
      title: 'Introduction',
      constraint: [
        {min: ""},
        {max: ""}
      ] 
  },

  {
      question: "Please, indicate your age (in years)",
      answers: [{
        type: "age",
        content: " "
      }],
      qtype: 'report',
      questionId: 2,
      surveytag: 'demo',
      title: 'Introduction',
      constraint: [
        {min: "17.99999"},
        {max: "100"}
      ]

  },

  {   
      question:"Your highest level of education attained: ",
      
      answers: [
      
        {type: "answer-1",
        content: "Trade/technical school"},

        {type: "answer-2",
        content: "Post graduate"},  

        {type: "answer-3",
        content: "Completed college"}, 

        {type: "answer-4",
        content: "Some college"},

        {type: "answer-5",
        content: "Completed high school"},

        {type: "answer-6",
        content: "Some high school or less"},
      ],
      qtype: 'quiz',
      questionId: 5,
      surveytag: 'demo',
      title: 'Introduction', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {
      question: "Have you ever been diagnosed with a psychiatric disorder?",
      answers: [
          {
            type: "disorder",
            content: "Yes"
          },
          {
            type: "disorder",
            content: "No"
          },
          {
            type: "disorder",
            content: "I prefer not to say"
          },

          
      ],
      qtype: "quiz",
      questionId: 6,
      surveytag: 'demo', 
      title: 'Introduction',
      constraint: [
        {min: ""},
        {max: ""}
      ] 
  },


  {
      question: "Is English your native language?",
      answers: [
          {
            type: "disorder",
            content: "Yes"
          },
          {
            type: "disorder",
            content: "No"
          },
      ],
      qtype: "quiz",
      questionId: 7,
      surveytag: 'demo', 
      title: 'Introduction',
      constraint: [
        {min: ""},
        {max: ""}
      ] 
  },

]

export default quizQuestions; 