const projects = [
  {
    name: "The Sicilian Shop",
    urlImg: "./img/sicilian-shop-frame.png",
    description: `I've built this app to showcase my skills on react, The app is usable either if
        signing in with google or as a user guest, used API's to
        get user IP addres to keep record of user guest cart. The database is built on Firebase and
        it keeps track
        on the quantity of the products in stock, whenever the product it's out of stock user cannot
        buy it
        anymore avoiding to go understock.`,
    tags: ["REACT", "SASS", "Firebase"],
    live: "https://thesicilianshop.intravaiaezio.co.uk/",
    gitHub: "https://github.com/Ezio2994/react-shop",
  },
  // {
  //   name: "Happy App",
  //   urlImg: "./img/happy-app-frame.png",
  //   description: `A Mental Health App monitoring happiness levels over time, built for a client over
  //       4 weeks in a team of 12. <br> My collaboration on the project consisted on building some components and
  //       working features among them; writing code to get and store datas.`,
  //   tags: ["REACT", "SASS", "Firebase"],
  //   live: "https://happy-app-86830.web.app/",
  //   gitHub: "https://github.com/nology-tech/happy-app",
  // },
  {
    name: "Initial Fantasy",
    urlImg: "./img/initial-fantasy-frame.png",
    description: `I built this game having in mind the old fashioned turn based rpg games therefore I called it "Initial Fantasy" inspired from one of the greatest fantasy media franchise ever, Final Fantasy. <br> The game is fully built in vanilla JavaScript with a functional programming approach and styled in SASS.`,
    tags: ["HTML", "SASS", "JavaScript"],
    live: "http://initialfantasy.intravaiaezio.co.uk/",
    gitHub: "https://github.com/Ezio2994/js-game",
  },
  {
    name: "The VideoGames Api",
    urlImg: "./img/videofame-api-wireframe.png",
    description: `With my foundamental on node.js I built my first api and posted on heroku so that 
        is accessable for everybody but the datas can only be modify by me or whoever I give the private-key
        access. <br> I've also build a react app to instruct users on how to use this api end-points and 
        showcase the obtanable data.`,
    tags: ["REACT", "node.js", "Firebase", "SASS"],
    live: "https://the-videogame-api.intravaiaezio.co.uk/",
    gitHub: "https://github.com/Ezio2994/the-videogames-api-react",
    addictionalGitHub: "https://github.com/Ezio2994/videogames-api-node.js",
  },

  {
    name: "Expenses Tracker",
    urlImg: "./img/expenses-tracker-frame.png",
    description: `I built this web app with in mind to help users to save money, the user can input fixed and daily incomes/expenses which are summed with the amount desired to save every month and give the left over amount spendable. The user can also see how much has gained, spent and saved during the year from the report panel. <br> all data are stored on Cloud Firestore, and the graph is generated with Chart.js.`,
    tags: ["HTML", "SASS", "JavaScript", "Firebase"],
    live: "http://expenses-tracker.intravaiaezio.co.uk/",
    gitHub: "https://github.com/Ezio2994/expenses-tracker",
  },
  // {
  //   name: "Book Finder",
  //   urlImg: "./img/book-BG.jpg",
  //   description: `Angular application that use google books api in order to search for book withing google library. <br> This is the first application I've built on Angular in order to learn this framework better, I've got to use CRUD operations and auth with firebase.`,
  //   tags: ["Angular", "Firebase", "SASS"],
  //   live: "https://book-finder.intravaiaezio.co.uk/search",
  //   gitHub: "https://github.com/Ezio2994/angular-book-finder",
  // },
  {
    name: "Music Quiz",
    urlImg: "./img/music-quiz-frame.png",
    description: `I have created this interactive music quiz as I love music and have always liked
        to be challenged in my music knowledges. <br> The game is both single and multiplayer, so you can
        challenge your friends. <br> The game is fully built in vanilla JavaScript with a functional
        programming approach and styled in SASS.`,
    tags: ["HTML", "SASS", "JavaScript"],
    live: "http://the-music-quiz.intravaiaezio.co.uk/",
    gitHub: "https://github.com/Ezio2994/music-quiz",
  },
  // {
  //   name: "The Hangman Game",
  //   urlImg: "./img/hangman.jpg",
  //   description: `I've build this timeless game as I have always enjoyed playing it with
  //       friends,hope you will have as much fun playing it as I had building it! <br> Game built in
  //       vanilla javascript and styled and made it responsive in SASS.`,
  //   tags: ["HTML", "SASS", "JavaScript"],
  //   live: "https://hangman-game.intravaiaezio.co.uk/",
  //   gitHub: "https://github.com/Ezio2994/hangman-game",
  // },
];

export default projects;
