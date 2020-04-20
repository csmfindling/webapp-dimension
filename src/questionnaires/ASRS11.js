var quizQuestions = [

/*
  ADHD self - report scale for the LEARNOISE ONLINE PROJECT 
  by VS March 2020
*/


{

	question: "Please, rate yourself on each of the criteria. Tick the box that best describes how you have felt and conducted yourself over the past 6 months.", 
	answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", // to be maybe changed 
      questionId: 0,
      surveytag: 'asrs', 
      title: 'Personal experience', // to be changed 
      constraint: [
        {min: ""},
        {max: ""}
      ] 
},

{
      question: "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 1,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 2,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you have problems remebering appointments or obligations ?",
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 3,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you have a task that requires a lot fo thought, how often do you avoid or delay getting started?",
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 4,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you fidget or squirm with yout hands or feet when you have to sit down for a long time?",
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 5,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 6,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  /*
	The next 12 questions are from supplementary part B 
  */

  {
      question: "How often do you make careless mistakes when you have to work on a boring or difficult project?",
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 7,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 8,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 9,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you misplace or have difficulty finding things at home or at work?",  
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 10,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often are you distracted by activity or noise around you?", 
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 11,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?", 
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 12,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you feel restless or fidgety?", 
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 13,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you have difficulty unwinding and relaxing when you have time to yourself?", 
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 14,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you find yourself talking too much when you are in social situations?", 
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 15,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "When you're in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?", 
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 16,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you have difficulty waiting your turn in situations when turn taking is required?", 
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 17,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },
{
      question: "How often do you interrupt others when they are busy?", 
      answers: [
          {
              type: "asrs-1",
              content: "Very often"
          },
          {
              type: "asrs-2",
              content: "Often"
          },
          {
              type: "asrs-3",
              content: "Sometimes"
          },
          {
              type: "asrs-4",
              content: "Rarely"
          },
          {
              type: "asrs-5",
              content: "Never"
          },
      ],
      questionId: 18,
      surveytag: 'asrs',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


]

export default quizQuestions


