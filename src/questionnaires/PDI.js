var quizQuestions = [

/*
  Peters Delusional Scale for the LEARNOISE ONLINE PROJECT 
  by VS March 2020
*/


{

	question: "The following statements are designed to measure beliefs and vivid mental experiences. Most people have had some such experiences during their lives. Please not that we are NOT interested in experiences people may have had when under the influence of drugs. Tick the box that best describes how distressing this belief is, how often you think about it, and how much you believe that it is true. There are no right or wrong answers, and there are no trick questions.", 
  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", // to be maybe changed 
      questionId: 0,
      surveytag: 'pdi', 
      title: '', // to be changed 
      constraint: [
        {min: ""},
        {max: ""}
      ] 
},

{
      question: "Do you ever feel as if people are reading your mind?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 1,
      surveytag: 'pdi',
      condition: '',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },



{
      question: "Do you ever feel as if people are reading your mind? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"
          },
      ],
      questionId: 2,
      surveytag: 'pdi',
      condition: 'yes', // this question is conditionned on the YES answer on the question 1 
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if people are reading your mind? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 3,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


  {
      question: "Do you ever feel as if people are reading your mind ? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 4,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you could read other people's minds?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 5,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


{
      question: "Do you ever feel as if you could read other people's minds? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 6,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you could read other people's minds? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      
      questionId: 7,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


  {
      question: "Do you ever feel as if you could read other people's minds? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 8,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if people seem to drop hints about you or say things with a double meaning?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 9,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if people seem to drop hints about you or say things with a double meaning? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 10,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if people seem to drop hints about you or say things with a double meaning? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 11,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if people seem to drop hints about you or say things with a double meaning? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
        ],  
      questionId: 12,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ] 
  },

  {
      question: "Do you ever feel as if things in magazines or on TV were written especially for you?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 13,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if things in magazines or on TV were written especially for you? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 14,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if things in magazines or on TV were written especially for you? How often do you think about it?",
      answers: [
         {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 15,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if things in magazines or on TV were written especially for you? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 16,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


{
      question: "Do you ever feel as if some people are not what they seem to be?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 17,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if some people are not what they seem to be? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 18,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if some people are not what they seem to be? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 19,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if some people are not what they seem to be? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          }, 
          ], 

      questionId: 20,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you are being prosecuted in some way?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 21,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you are being prosecuted in some way? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 22,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you are being prosecuted in some way? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 23,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you are being prosecuted in some way? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 24,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


{
      question: "Do you ever feel as if there is a conspiracy against you?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 25,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if there is a conspiracy against you? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 26,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if there is a conspiracy against you? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 27,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if there is a conspiracy against you? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 28,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

{
      question: "Do you ever feel as if you are, or destined to be someone very important?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 29,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you are, or destined to be someone very important? How distressing is this belief?",
      answers: [
         {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 30,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you are, or destined to be someone very important? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 31,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you are, or destined to be someone very important? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 32,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

{
      question: "Do you ever feel that you are a very special or unusual person?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 33,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel that you are a very special or unusual person? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 34,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel that you are a very special or unusual person? How often do you think about it?",
      answers: [
         {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 35,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel that you are a very special or unusual person? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 36,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel that you are especially close to God?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 37,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel that you are especially close to God? How distressing is this belief?",
      answers: [
         {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 38,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel that you are especially close to God? How often do you think about it?",
      answers: [
         {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 39,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel that you are especially close to God? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 40,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  
{
      question: "Do you ever think people can communicate telepathically?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 41,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever think people can communicate telepathically? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 42,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever think people can communicate telepathically? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 43,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever think people can communicate telepathically? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 44,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },



{
      question: "Do you ever feel as if electrical devices such as computers can influence the way you think?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 45,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if electrical devices such as computers can influence the way you think? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 46,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if electrical devices such as computers can influence the way you think? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 47,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if electrical devices such as computers can influence the way you think? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 48,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


{
      question: "Do you ever feel as if you have been chosen by God in some way?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 49,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you have been chosen by God in some way? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 50,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you have been chosen by God in some way? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 51,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you have been chosen by God in some way? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 52,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

{
      question: "Do you beleive in the power of witchcraft, voodoo or the occult?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 53,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },
  {
      question: "Do you beleive in the power of witchcraft, voodoo or the occult? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 54,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you beleive in the power of witchcraft, voodoo or the occult? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 55,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you beleive in the power of witchcraft, voodoo or the occult? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 56,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Are you often worried that your partner may be unfaithful?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 57,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Are you often worried that your partner may be unfaithful? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 58,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Are you often worried that your partner may be unfaithful? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 59,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Are you often worried that your partner may be unfaithful? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 60,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel that you have sinned more than the average person?", 
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 61,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel that you have sinned more than the average person? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 62,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel that you have sinned more than the average person? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 63,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel that you have sinned more than the average person? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 64,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

   {
      question: "Do you ever feel that people look at you oddly because of your appearance?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 65,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel that people look at you oddly because of your appearance? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 66,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel that people look at you oddly because of your appearance? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 67,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel that people look at you oddly because of your appearance? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 68,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

{
      question: "Do you ever feel as if you had no thoughts in your head at all?", 
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 69,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you had no thoughts in your head at all? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 70,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you had no thoughts in your head at all? How often do you think about it?",
      answers: [
         {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 71,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you had no thoughts in your head at all? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 72,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


{
      question: "Do you ever feel as if the world is about to end?", 
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 73,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if the world is about to end? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 74,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if the world is about to end? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 75,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if the world is about to end? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 76,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


{
      question: "Do your thoughts ever feel alien to you in some way?", 
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 77,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do your thoughts ever feel alien to you in some way? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 78,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do your thoughts ever feel alien to you in some way? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 79,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do your thoughts ever feel alien to you in some way? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 80,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


  {
      question: "Have your thoughts ever been so vivid that you were worried other people would hear them?", 
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 81,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Have your thoughts ever been so vivid that you were worried other people would hear them? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 82,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Have your thoughts ever been so vivid that you were worried other people would hear them? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 83,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Have your thoughts ever been so vivid that you were worried other people would hear them? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 84,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


{
      question: "Do you ever feel as if your own thoughts were being echoed back to you?", 
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 85,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if your own thoughts were beeing echoed back to you? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 86,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if your own thoughts were beeing echoed back to you? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 87,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if your own thoughts were beeing echoed back to you? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 88,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


{
      question: "Do you ever feel as if you are a robot or zombie without a will of your own?",
      answers: [
          {
              type: "pdi-1",
              content: "Yes"
          },
          {
              type: "pdi-2",
              content: "No"
          },
      ],
      questionId: 89,
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      condition: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you are a robot or zombie without a will of your own? How distressing is this belief?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Not at all distressing"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Very distressing"}, 
      ],
      questionId: 90,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you are a robot or zombie without a will of your own? How often do you think about it?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Hardly ever think about it"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Think about it all the time"
          },
      ],
      questionId: 91,
      condition: 'yes',
      surveytag: 'pdi',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Do you ever feel as if you are a robot or zombie without a will of your own? How much do you believe it is true?",
      answers: [
          {
              type: "pdi-1",
              content: "1 - Do not believe it's true"
          },
          {
              type: "pdi-2",
              content: "2"
          },
          {
              type: "pdi-3",
              content: "3"
          },
          {
              type: "pdi-4",
              content: "4"
          },
          {
              type: "pdi-5",
              content: "5 - Believe it is absolutely true"
          },
      ],
      questionId: 92,
      surveytag: 'pdi',
      condition: 'yes',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },
]
export default quizQuestions;  