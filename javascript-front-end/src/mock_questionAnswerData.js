const mockQuestionAnswerData =
  [{
    id: 0,
    question: "make a gettings for captain jack by touching the buttons in the right order ",

    answers: [
      "function captainJackGreeting(name){", 'return "Arrgh " + name + ", come aboard";}', 'captainJackGreeting("Joe")'
    ],

    story: "Joe has just left Pirate School and is looking for a ship to join to sail the seven sea's looking for booty and treasure. Luckily Joe spotted a ship with a large skull and cross bones and walked to the ship. The ships pirates were running about when the ships robot capatin jack walked to the edge of the ship.</br>Captain Jack lost some of his coding that makes him work while fighting Rumbo the Kracken. Do you think you can write the code to make Captain Jack the best Pirate of Pirateland? Pirate Joe thinks you can, lets begin by getting Captain Jack talking to people again by coding a hello program: ",

    result: "Arrgh Joe, come aboard"
  },
  {
    id: 1,

    question: "make a function so Captain Jack can add together the 6 gold coins he found and the 7 gold coins Pirate Joe found.",

    answers: ['function addGoldCoins(CaptainJacksGold, PirateJoesGold){', 'return CaptainJacksGold + PirateJoesGold', 'addGoldCoins(6, 7)'],

    story: "After landing on Passion Island "
  }]

export default mockQuestionAnswerData;
