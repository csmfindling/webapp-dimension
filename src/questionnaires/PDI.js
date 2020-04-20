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
      question: "Do you ever feel as if people are reading your mind?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
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
      question: "Do you ever feel as if people are reading your mind?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel as if people are reading your mind?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel as if you could read other people's mind?",
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
      question: "Do you ever feel as if you could read other people's minds?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel as if you could read other people's minds?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel as if you could read other people's minds?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel as if people seem to drop hints about you or say things with a double meaning?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel as if people seem to drop hints about you or say things with a double meaning?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel as if people seem to drop hints about you or say things with a double meaning?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel as if things in magazines or on TV were written especially for you?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel as if things in magazines or on TV were written especially for you?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel as if things in magazines or on TV were written especially for you?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel as if some people are not what they seem to be?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel as if some people are not what they seem to be?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel as if some people are not what they seem to be?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel as if you are being prosecuted in some way?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel as if you are being prosecuted in some way?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel as if you are being prosecuted in some way?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel as if there is a conspiracy against you?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel as if there is a conspiracy against you?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel as if there is a conspiracy against you?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel as if you are, or destined to be someone very important?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel as if you are, or destined to be someone very important?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel as if you are, or destined to be someone very important?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel that you are a very special or unusual person?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel that you are a very special or unusual person?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel that you are a very special or unusual person?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel that you are especially close to God?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel that you are especially close to God?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel that you are especially close to God?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever think people can communicate telepathically?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever think people can communicate telepathically?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever think people can communicate telepathically?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel as if electrical devices such as computers can influence the way you think?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel as if electrical devices such as computers can influence the way you think?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel as if electrical devices such as computers can influence the way you think?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel as if you have been chosen by God in some way?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel as if you have been chosen by God in some way?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel as if you have been chosen by God in some way?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you beleive in the power of witchcraft, voodoo or the occult?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you beleive in the power of witchcraft, voodoo or the occult?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you beleive in the power of witchcraft, voodoo or the occult?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Are you often worried that your partner may be unfaithful?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Are you often worried that your partner may be unfaithful?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Are you often worried that your partner may be unfaithful?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel that you have sinned more than the average person?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel that you have sinned more than the average person?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel that you have sinned more than the average person?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel that people look at you oddly because of your appearance?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel that people look at you oddly because of your appearance?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel that people look at you oddly because of your appearance?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel as if you had no thoughts in your head at all?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel as if you had no thoughts in your head at all?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel as if you had no thoughts in your head at all?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel as if the world is about to end?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel as if the world is about to end?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel as if the world is about to end?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do your thoughts ever feel aliento you in some way?", 
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
      question: "Do your thoughts ever feel aliento you in some way?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do your thoughts ever feel aliento you in some way?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do your thoughts ever feel aliento you in some way?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Have your thoughts ever been so vivid that you were worried other people would hear them?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Have your thoughts ever been so vivid that you were worried other people would hear them?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Have your thoughts ever been so vivid that you were worried other people would hear them?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel as if your own thoughts were beeing echoed back to you?", 
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
      question: "Do you ever feel as if your own thoughts were beeing echoed back to you?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel as if your own thoughts were beeing echoed back to you?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel as if your own thoughts were beeing echoed back to you?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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
      question: "Do you ever feel as if you are a robot or zombie without a will of your own?",
      answers: [
          {
              type: "pdi-1",
              content: "Very distressing"
          },
          {
              type: "pdi-2",
              content: "A lot distressing"
          },
          {
              type: "pdi-3",
              content: "Quite a lot distressing"
          },
          {
              type: "pdi-4",
              content: "A little distressing"
          },
          {
              type: "pdi-5",
              content: "Not at all distressing"
          },
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
      question: "Do you ever feel as if you are a robot or zombie without a will of your own?",
      answers: [
          {
              type: "pdi-1",
              content: "Think about it all the time"
          },
          {
              type: "pdi-2",
              content: "Think a lot about it"
          },
          {
              type: "pdi-3",
              content: "Think quite a lot about it"
          },
          {
              type: "pdi-4",
              content: "Think a little about it"
          },
          {
              type: "pdi-5",
              content: "Hardly ever think about it"
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
      question: "Do you ever feel as if you are a robot or zombie without a will of your own?",
      answers: [
          {
              type: "pdi-1",
              content: "Believe it is absolutely true"
          },
          {
              type: "pdi-2",
              content: "Believe it is a lot true"
          },
          {
              type: "pdi-3",
              content: "Believe it is quite a lot true"
          },
          {
              type: "pdi-4",
              content: "Believe it is a little true"
          },
          {
              type: "pdi-5",
              content: "Do not believe it's true"
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