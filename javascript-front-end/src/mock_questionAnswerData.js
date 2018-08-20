const mockQuestionAnswerData =
  [
    {
    id: 0,
    question: "make a gettings for captain jack by touching the buttons in the right order ",

    answers: [
      "function captainJackGreeting(name){", 'return "Arrgh " + name + ", come aboard";}', 'captainJackGreeting("Joe")'
    ],

    story: "Joe has just left Pirate School and is looking for a ship to join to sail the seven sea's looking for booty and treasure. Luckily Joe spotted a ship with a large skull and cross bones and walked to the ship. The ships pirates were running about when the ships robot capatin jack walked to the edge of the ship. Captain Jack lost some of his coding that makes him work while fighting Rumbo the Kracken. Do you think you can write the code to make Captain Jack the best Pirate of Pirateland? Pirate Joe thinks you can, lets begin by getting Captain Jack talking to people again by coding a greeting for Captain Jack: ",

    result: "Arrgh Joe, come aboard"
  },
  {
    id: 1,

    question: "make a function so that Captain Jack can add the 6 gold coins he found and the 7 gold coins Pirate Joe found together.",

    answers: ['function addGoldCoins(CaptainJacksGold, PirateJoesGold){', 'return CaptainJacksGold + PirateJoesGold + " Gold Coins"', 'addGoldCoins(6, 7)'],

    story: "After landing on OopyLoopy Island, Captain Jack and Pirate Joe decided to split up and find as many gold coins as possible. The two pirate meet back up and Captain Jack would like to add their gold together so he can add it to the chest on the ship.",

    result: "13 Gold Coins"
  },
  {
    id: 2,

    question: "make a function that lets Captain Jack and Pirate Joe to rejoin the Swally Galley",

    answers: ['const ship = ["Blackbeard", "Scurvy Legs", "Billy Bones"]', 'ship.push("Captain Jack")', "ship.push(' Pirate Joe')", "p ship"],

    story: "After successfully finding gold coins on OopyLoopy Island Captain Jack and Pirate Joe make their way back to the ship to add their gold to the pirate treasure chest.",

    result: '[Blackbeard", "Scurvy Legs", "Billy Bones", "Captain Jack", "Pirate Joe"]'
  },
  {
    id:3,

    question:"Make a function so that Captain Jack can add up all the gold in the treasure chest",

    answers: ['function countPirateGold(chest)', 'total = 0', 'for(treasure of chest){','total = total + treasure}','return total}', 'chest = [2, 3, 13, 7]', 'countPirateGold(chest)'],

    story: "After rejoining the Swally Galley, Captain Jack takes the 13 gold he and Pirate Joe found and placed it in the ships chest. While Captain Jack is there he wants to count all of the gold to make sure no one is stealing any gold.",

    result: '25'
  }
]

export default mockQuestionAnswerData;
