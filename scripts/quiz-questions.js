const questions = [
  {
    category: "programming",
    easy: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyper Tool Multi Language", "High Text Markup Language", "Hyper Text Multiple Language"],
        correctAnswer: 0
      },
      {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["#", "<!--", "//", "/*"],
        correctAnswer: 2
      },
      {
        question: "What is the correct file extension for Python files?",
        options: [".javascript", ".py", ".pt", ".python"],
        correctAnswer: 1
      },
      {
        question: "Which HTML tag is used for the largest heading?",
        options: ["<head>", "<heading>", "<h6>", "<h1>"],
        correctAnswer: 3
      },
      {
        question: "What is the correct way to declare a variable in Python?",
        options: ["var x = 5", "x := 5", "let x = 5", "x = 5"],
        correctAnswer: 3
      },
      {
        question: "Which CSS property changes text color?",
        options: ["color", "text-color", "font-color", "text-style"],
        correctAnswer: 0
      },
      {
        question: "What creates a hyperlink in HTML?",
        options: ["<link>", "<a>", "<hyperlink>", "<url>"],
        correctAnswer: 1
      },
      {
        question: "Which operator compares equality in JavaScript?",
        options: ["=", "equals", "===", "=="],
        correctAnswer: 2
      },
      {
        question: "How do you write comments in Python?",
        options: ["/* comment */", "# comment", "// comment", "<!-- comment -->"],
        correctAnswer: 1
      },
      {
        question: "What declares a constant in JavaScript?",
        options: ["const", "let", "var", "constant"],
        correctAnswer: 0
      },
      {
        question: "Which symbol concatenates strings in Python?",
        options: ["+", "&", ".", ","],
        correctAnswer: 0
      },
      {
        question: "How do you select class 'test' in CSS?",
        options: ["#test", "*test", ".test", "@test"],
        correctAnswer: 2
      },
      {
        question: "What defines a function in Python?",
        options: ["function", "def", "func", "define"],
        correctAnswer: 1
      },
      {
        question: "How do you print in JavaScript?",
        options: ["echo('Hello');", "print('Hello');", "console.log('Hello');", "System.out.print('Hello');"],
        correctAnswer: 2
      },
      {
        question: "Which specifies alternate text for images?",
        options: ["title", "description", "alt", "text"],
        correctAnswer: 2
      },
      {
        question: "What creates an ordered list in HTML?",
        options: ["<ul>", "<ol>", "<dl>", "<list>"],
        correctAnswer: 1
      },
      {
        question: "Which is a valid Python boolean value?",
        options: ["true", "True", "TRUE", "yes"],
        correctAnswer: 1
      },
      {
        question: "What defines paragraph text in HTML?",
        options: ["<paragraph>", "<p>", "<text>", "<para>"],
        correctAnswer: 1
      },
      {
        question: "Which creates an array in JavaScript?",
        options: ["[]", "{}", "()", "<>"],
        correctAnswer: 0
      },
      {
        question: "What closes a PHP statement?",
        options: [".", ":", ";", ","],
        correctAnswer: 2
      }
    ],
    medium: [
      {
        question: "What is a closure in JavaScript?",
        options: ["Function with outer scope access", "Loop type", "Object method", "Variable declaration"],
        correctAnswer: 0
      },
      {
        question: "What does the 'super()' method do in Python?",
        options: ["Creates object", "Defines class", "Calls parent class", "Initializes variable"],
        correctAnswer: 2
      },
      {
        question: "What is list comprehension in Python?",
        options: ["Sorting lists", "Creating lists concisely", "Merging lists", "Copying lists"],
        correctAnswer: 1
      },
      {
        question: "What differentiates 'let' and 'var'?",
        options: ["Performance", "Syntax", "Scope", "No difference"],
        correctAnswer: 2
      },
      {
        question: "What is event bubbling?",
        options: ["Event creation", "Event deletion", "Event propagation up", "Event modification"],
        correctAnswer: 2
      },
      {
        question: "What is *args in Python for?",
        options: ["Required arguments", "Keyword arguments", "Fixed arguments", "Variable arguments"],
        correctAnswer: 3
      },
      {
        question: "What is a Promise?",
        options: ["Loop structure", "Variable type", "Async handler", "Function type"],
        correctAnswer: 2
      },
      {
        question: "What distinguishes tuples from lists?",
        options: ["Ordering", "Size", "Mutability", "Types"],
        correctAnswer: 2
      },
      {
        question: "What is hoisting?",
        options: ["Variable lifting", "Error handling", "Memory management", "Code optimization"],
        correctAnswer: 0
      },
      {
        question: "What purpose does 'with' serve?",
        options: ["Loop creation", "Resource management", "Error handling", "Module import"],
        correctAnswer: 1
      },
      {
        question: "What is a decorator?",
        options: ["Class definition", "Variable type", "Function modifier", "Module import"],
        correctAnswer: 2
      },
      {
        question: "What does 'typeof' do?",
        options: ["Creates variables", "Checks types", "Compares values", "Calls functions"],
        correctAnswer: 1
      },
      {
        question: "What is the event loop?",
        options: ["Error handler", "Async manager", "Thread controller", "File handler"],
        correctAnswer: 1
      },
      {
        question: "What is destructuring?",
        options: ["Array creation", "Object unpacking", "Memory cleanup", "Error handling"],
        correctAnswer: 1
      },
      {
        question: "What is a pure function?",
        options: ["Any function", "Side-effect free function", "Arrow function", "Anonymous function"],
        correctAnswer: 1
      },
      {
        question: "What is webpack?",
        options: ["Web server", "Module bundler", "Testing tool", "Framework"],
        correctAnswer: 1
      },
      {
        question: "What is middleware?",
        options: ["Database", "Request handler", "UI component", "Testing tool"],
        correctAnswer: 1
      },
      {
        question: "What is Redux used for?",
        options: ["Routing", "State management", "Animation", "Testing"],
        correctAnswer: 1
      },
      {
        question: "What is recursion?",
        options: ["Loop type", "Self-calling function", "Error handling", "Variable scope"],
        correctAnswer: 1
      },
      {
        question: "What is memoization?",
        options: ["Memory management", "Caching results", "Error handling", "Data storage"],
        correctAnswer: 1
      }
    ]
  },
  {
    category: "countryflag",
    easy: [
      {
        question: "What country is this flag from?",
        options: ["United States", "United Kingdom", "Canada", "Australia"],
        correctAnswer: 0,
        imageID: "us"
      },
      {
        question: "What country is this flag from?",
        options: ["Chile", "Argentina", "Peru", "Uruguay"],
        correctAnswer: 1,
        imageID: "ar"
      },
      {
        question: "What country is this flag from?",
        options: ["Brazil", "Argentina", "Chile", "Colombia"],
        correctAnswer: 0,
        imageID: "br"
      },
      {
        question: "What country is this flag from?",
        options: ["India", "Pakistan", "Nepal", "Sri Lanka"],
        correctAnswer: 0,
        imageID: "in"
      },
      {
        question: "What country is this flag from?",
        options: ["South Korea", "Japan", "China", "Taiwan"],
        correctAnswer: 1,
        imageID: "jp"
      },
      {
        question: "What country is this flag from?",
        options: ["Germany", "France", "Italy", "Spain"],
        correctAnswer: 2,
        imageID: "it"
      },
      {
        question: "What country is this flag from?",
        options: ["United Kingdom", "Canada", "New Zealand", "Australia"],
        correctAnswer: 2,
        imageID: "nz"
      },
      {
        question: "What country is this flag from?",
        options: ["Mexico", "Guatemala", "Costa Rica", "Panama"],
        correctAnswer: 0,
        imageID: "mx"
      },
      {
        question: "What country is this flag from?",
        options: ["Italy", "Portugal", "Spain", "Greece"],
        correctAnswer: 2,
        imageID: "es"
      },
      {
        question: "What country is this flag from?",
        options: ["South Korea", "North Korea", "China", "Japan"],
        correctAnswer: 0,
        imageID: "kr"
      },
      {
        question: "What country is this flag from?",
        options: ["Turkey", "Cyprus", "Greece", "Bulgaria"],
        correctAnswer: 0,
        imageID: "tr"
      },
      {
        question: "What country is this flag from?",
        options: ["Germany", "France", "Italy", "Belgium"],
        correctAnswer: 1,
        imageID: "fr"
      },
      {
        question: "What country is this flag from?",
        options: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
        correctAnswer: 0,
        imageID: "au"
      },
      {
        question: "What country is this flag from?",
        options: ["Argentina", "Brazil", "Chile", "Peru"],
        correctAnswer: 2,
        imageID: "ch"
      },
      {
        question: "What country is this flag from?",
        options: ["India", "Pakistan", "Nepal", "Sri Lanka"],
        correctAnswer: 1,
        imageID: "pk"
      },
      {
        question: "What country is this flag from?",
        options: ["Maple Syrup", "United States", "Canada", "Mexico"],
        correctAnswer: 2,
        imageID: "ca"
      },
      {
        question: "What country is this flag from?",
        options: ["United Kingdom", "Ireland", "Scotland", "Wales"],
        correctAnswer: 0,
        imageID: "gb"
      },
      {
        question: "What country is this flag from?",
        options: ["Germany", "France", "Italy", "Belgium"],
        correctAnswer: 0,
        imageID: "de"
      },
      {
        question: "What country is this flag from?",
        options: ["Vietnam", "South Korea", "China", "Japan"],
        correctAnswer: 2,
        imageID: "cn"
      },
      {
        question: "What country is this flag from?",
        options: ["Germany", "France", "Italy", "Belgium"],
        correctAnswer: 3,
        imageID: "be"
      }
    ],
    medium: [
      {
        question: "What country is this flag from?",
        options: ["Estonia", "Latvia", "Lithuania", "Finland"],
        correctAnswer: 2,
        imageID: "lt"
      },
      {
        question: "What country is this flag from?",
        options: ["Morocco", "Tunisia", "Algeria", "Libya"],
        correctAnswer: 1,
        imageID: "tn"
      },
      {
        question: "What country is this flag from?",
        options: ["Denmark", "Norway", "Sweden", "Finland"],
        correctAnswer: 2,
        imageID: "se"
      },
      {
        question: "What country is this flag from?",
        options: ["Argentina", "Chile", "Brazil", "Paraguay"],
        correctAnswer: 3,
        imageID: "py"
      },
      {
        question: "What country is this flag from?",
        options: ["Thailand", "Vietnam", "Cambodia", "Laos"],
        correctAnswer: 1,
        imageID: "vn"
      },
      {
        question: "What country is this flag from?",
        options: ["Ukraine", "Russia", "Belarus", "Moldova"],
        correctAnswer: 0,
        imageID: "ua"
      },
      {
        question: "What country is this flag from?",
        options: ["Finland", "Norway", "Sweden", "Denmark"],
        correctAnswer: 1,
        imageID: "no"
      },
      {
        question: "What country is this flag from?",
        options: ["Turkey", "Cyprus", "Greece", "Bulgaria"],
        correctAnswer: 1,
        imageID: "cy"
      },
      {
        question: "What country is this flag from?",
        options: ["Thailand", "Vietnam", "Cambodia", "Laos"],
        correctAnswer: 2,
        imageID: "kh"
      },
      {
        question: "What country is this flag from?",
        options: ["Saudi Arabia", "Jordan", "Lebanon", "Syria"],
        correctAnswer: 3,
        imageID: "lb"
      },
      {
        question: "What country is this flag from?",
        options: ["Belarus", "Ukraine", "Russia", "Moldova"],
        correctAnswer: 3,
        imageID: "md"
      },
      {
        question: "What country is this flag from?",
        options: ["Bosnia and Herzegovina", "Croatia", "Serbia", "Montenegro"],
        correctAnswer: 0,
        imageID: "ba"
      },
      {
        question: "What country is this flag from?",
        options: ["Poland", "Czech Republic", "Slovakia", "Hungary"],
        correctAnswer: 1,
        imageID: "cz"
      },
      {
        question: "What country is this flag from?",
        options: ["Egypt", "Saudi Arabia", "Jordan", "Yemen"],
        correctAnswer: 0,
        imageID: "eg"
      },
      {
        question: "What country is this flag from?",
        options: ["Paraguay", "Chile", "Ecuador", "Uruguay"],
        correctAnswer: 2,
        imageID: "ec"
      },
      {
        question: "What country is this flag from?",
        options: ["Ecuador", "Colombia", "Peru", "Venezuela"],
        correctAnswer: 3,
        imageID: "ve"
      },
      {
        question: "What country is this flag from?",
        options: ["Denmark", "Sweden", "Norway", "Iceland"],
        correctAnswer: 3,
        imageID: "is"
      },
      {
        question: "What country is this flag from?",
        options: ["Belize", "Honduras", "Guatemala", "El Salvador"],
        correctAnswer: 2,
        imageID: "gt"
      },
      {
        question: "What country is this flag from?",
        options: ["Iraq", "Iran", "Oman", "Lebanon"],
        correctAnswer: 2,
        imageID: "om"
      },
      {
        question: "What country is this flag from?",
        options: ["South Africa", "Nigeria", "Kenya", "Egypt"],
        correctAnswer: 0,
        imageID: "za"
      },
      {
        question: "What country is this flag from?",
        options: ["Monaco", "Indonesia", "Greenland", "Poland"],
        correctAnswer: 1,
        imageID: "id"
      },
    ]
    
  },
  {
    category: "mathematics",
    easy: [
      {
        question: "What is 6 × 3?",
        options: ["15", "21", "18", "12"],
        correctAnswer: 2
      },
      {
        question: "What is 2³?",
        options: ["4", "6", "8", "10"],
        correctAnswer: 0
      },
      {
        question: "What is 48 ÷ 6?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1
      },
      {
        question: "What is 3 + 5 × 4?",
        options: ["32", "23", "20", "35"],
        correctAnswer: 1
      },
      {
        question: "What is the sum of angles in a triangle?",
        options: ["180°", "360°", "90°", "270°"],
        correctAnswer: 0
      },
      {
        question: "What is 25% of 200?",
        options: ["25", "40", "50", "75"],
        correctAnswer: 2
      },
      {
        question: "What is 11²?",
        options: ["121", "111", "101", "131"],
        correctAnswer: 0
      },
      {
        question: "What is 9 × 12?",
        options: ["98", "108", "118", "128"],
        correctAnswer: 1
      },
      {
        question: "What is 16 ÷ 4?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2
      },
      {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2
      },
      {
        question: "What is 7 × 8?",
        options: ["54", "56", "58", "60"],
        correctAnswer: 1
      },
      {
        question: "What is 100 ÷ 5?",
        options: ["15", "20", "25", "30"],
        correctAnswer: 1
      },
      {
        question: "What is 5²?",
        options: ["20", "25", "30", "35"],
        correctAnswer: 1
      },
      {
        question: "What is 40% of 150?",
        options: ["45", "50", "60", "75"],
        correctAnswer: 2
      },
      {
        question: "What is 18 + 27?",
        options: ["43", "44", "45", "46"],
        correctAnswer: 2
      },
      {
        question: "What is 72 ÷ 9?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2
      },
      {
        question: "What is 13 × 4?",
        options: ["48", "50", "52", "54"],
        correctAnswer: 2
      },
      {
        question: "What is 150 ÷ 25?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 3
      },
      {
        question: "What is 17 + 38?",
        options: ["53", "54", "55", "56"],
        correctAnswer: 2
      },
      {
        question: "What is 9 + 10?",
        options: ["19", "21", "18", "910"],
        correctAnswer: 0
      }
    ],
    medium: [
      {
        question: "What is (7 × 8) + (12 × 3)?",
        options: ["92", "96", "100", "104"],
        correctAnswer: 1
      },
      {
        question: "What is 15% of 340?",
        options: ["51", "61", "71", "81"],
        correctAnswer: 0
      },
      {
        question: "What is √225?",
        options: ["12", "13", "14", "15"],
        correctAnswer: 3
      },
      {
        question: "What is 4⁴?",
        options: ["256", "128", "64", "32"],
        correctAnswer: 0
      },
      {
        question: "What is 3/8 as a decimal?",
        options: ["0.375", "0.325", "0.425", "0.475"],
        correctAnswer: 0
      },
      {
        question: "What is 45 × 11?",
        options: ["495", "485", "475", "465"],
        correctAnswer: 0
      },
      {
        question: "What is 17²?",
        options: ["289", "299", "279", "269"],
        correctAnswer: 0
      },
      {
        question: "What is 80% of 450?",
        options: ["350", "360", "370", "380"],
        correctAnswer: 1
      },
      {
        question: "What is 144 ÷ 12?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2
      },
      {
        question: "What is √169?",
        options: ["11", "12", "13", "14"],
        correctAnswer: 2
      },
      {
        question: "What is 5² × 2?",
        options: ["50", "25", "40", "35"],
        correctAnswer: 0
      },
      {
        question: "What is 75% of 240?",
        options: ["160", "170", "180", "190"],
        correctAnswer: 2
      },
      {
        question: "What is 13²?",
        options: ["169", "179", "189", "199"],
        correctAnswer: 0
      },
      {
        question: "What is 216 ÷ 18?",
        options: ["9", "10", "11", "12"],
        correctAnswer: 3
      },
      {
        question: "What is 1/2 + 1/4?",
        options: ["2/6", "1/8", "3/4", "2/8"],
        correctAnswer: 2
      },
      {
        question: "What is 19²?",
        options: ["351", "361", "371", "381"],
        correctAnswer: 1
      },
      {
        question: "What is √324?",
        options: ["16", "17", "18", "19"],
        correctAnswer: 2
      },
      {
        question: "What is 28 × 15?",
        options: ["420", "430", "440", "450"],
        correctAnswer: 0
      },
      {
        question: "What is 85% of 300?",
        options: ["245", "255", "265", "275"],
        correctAnswer: 1
      },
      {
        question: "What is 23 × 13?",
        options: ["289", "299", "309", "319"],
        correctAnswer: 1
      }
    ]
  },
  {
    category: "space",
    easy: [
      {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Mars", "Earth"],
        correctAnswer: 1
      },
      {
        question: "What is the name of this satellite?",
        options: ["Sun", "Moon", "Mars", "Venus"],
        correctAnswer: 1,
        imageID: "moon"
      },
      {
        question: "Which is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        correctAnswer: 1
      },
      {
        question: "What is the name of our galaxy?",
        options: ["Andromeda", "Milky Way", "Triangulum", "Centaurus"],
        correctAnswer: 1
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Jupiter", "Mars", "Mercury"],
        correctAnswer: 2
      },
      {
        question: "What causes the tides on Earth?",
        options: ["Sun's gravity", "Moon's gravity", "Earth's rotation", "Solar wind"],
        correctAnswer: 1
      },
      {
        question: "Which is the hottest planet in our solar system?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        correctAnswer: 1
      },
      {
        question: "What is the Sun primarily made of?",
        options: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
        correctAnswer: 3
      },
      {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correctAnswer: 0
      },
      {
        question: "What is the name of the force that keeps planets in orbit?",
        options: ["Magnetic force", "Nuclear force", "Gravity", "Centripetal force"],
        correctAnswer: 2
      },
      {
        question: "Which planet is known as the 'Morning Star'?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        correctAnswer: 1
      },
      {
        question: "What is the most common type of star in our galaxy?",
        options: ["White dwarf", "Red dwarf", "Yellow dwarf", "Blue giant"],
        correctAnswer: 1
      },
      {
        question: "Which planet has the Great Red Spot?",
        options: ["Mars", "Saturn", "Jupiter", "Neptune"],
        correctAnswer: 2
      },
      {
        question: "What is the name of the nearest star to Earth (besides the Sun)?",
        options: ["Proxima Centauri", "Alpha Centauri", "Sirius", "Betelgeuse"],
        correctAnswer: 0
      },
      {
        question: "Which planet is known for its beautiful rings?",
        options: ["Jupiter", "Uranus", "Neptune", "Saturn"],
        correctAnswer: 3
      },
      {
        question: "What is this planet?",
        options: ["Mars", "Earth", "Green Planet", "Eat"],
        correctAnswer: 1,
        imageID: "solarsystemearth"
      },
      {
        question: "How many planets in our solar system?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1
      },
      {
        question: "What is the name of our star?",
        options: ["Sun", "San", "Centaurus A", "Big Yellow Ball"],
        correctAnswer: 0
      },
      {
        question: "What color is the Sun?",
        options: ["Yellow", "White", "Orange", "Red"],
        correctAnswer: 1
      },
      {
        question: "What is this planet?",
        options: ["Mars", "Saturn", "Ring Planet", "Neptune"],
        correctAnswer: 1,
        imageID: "solarsystemsaturn"
      }
    ],
    medium: [
      {
        question: "How many moons does Mars have?",
        options: ["None", "One", "Two", "Three"],
        correctAnswer: 2
      },
      {
        question: "What is the approximate temperature at the Sun's surface?",
        options: ["5,500°C", "10,000°C", "15,000°C", "20,000°C"],
        correctAnswer: 0
      },
      {
        question: "Which spacecraft was the first to land humans on the Moon?",
        options: ["Apollo 8", "Apollo 11", "Apollo 13", "Apollo 17"],
        correctAnswer: 1
      },
      {
        question: "What is the name of Saturn's largest moon?",
        options: ["Europa", "Titan", "Ganymede", "Io"],
        correctAnswer: 1
      },
      {
        question: "How long does it take light from the Sun to reach Earth?",
        options: ["4 minutes", "8 minutes", "12 minutes", "16 minutes"],
        correctAnswer: 1
      },
      {
        question: "What is the Great Dark Spot?",
        options: ["Jupiter storm", "Neptune storm", "Mars crater", "Venus surface feature"],
        correctAnswer: 1
      },
      {
        question: "Which space telescope replaced the Hubble Space Telescope?",
        options: ["James Webb", "Spitzer", "Kepler", "Chandra"],
        correctAnswer: 0
      },
      {
        question: "What causes a solar eclipse?",
        options: ["Earth blocks Sun", "Moon blocks Sun", "Venus blocks Sun", "Mars blocks Sun"],
        correctAnswer: 1
      },
      {
        question: "What is the composition of Saturn's rings?",
        options: ["Gas", "Ice and rock", "Liquid", "Metal"],
        correctAnswer: 1
      },
      {
        question: "How many Earth years does it take Neptune to orbit the Sun?",
        options: ["165", "185", "205", "165"],
        correctAnswer: 0
      },
      {
        question: "What is a pulsar?",
        options: ["Dead star", "Rotating neutron star", "Black hole", "Asteroid"],
        correctAnswer: 1
      },
      {
        question: "Which planet has the strongest magnetic field?",
        options: ["Earth", "Saturn", "Jupiter", "Neptune"],
        correctAnswer: 2
      },
      {
        question: "What is the core of a comet made of?",
        options: ["Ice", "Rock", "Ice and rock", "Metal"],
        correctAnswer: 2
      },
      {
        question: "What is the largest known dwarf planet?",
        options: ["Ceres", "Pluto", "Eris", "Haumea"],
        correctAnswer: 1
      },
      {
        question: "What causes auroras on Earth?",
        options: ["Solar wind", "Moon's gravity", "Earth's rotation", "Cosmic rays"],
        correctAnswer: 0
      },
      {
        question: "How many known galaxies are there in the observable universe?",
        options: ["100 billion", "200 billion", "300 billion", "400 billion"],
        correctAnswer: 1
      },
      {
        question: "What is the temperature at the center of the Sun?",
        options: ["10 million °C", "15 million °C", "20 million °C", "25 million °C"],
        correctAnswer: 1
      },
      {
        question: "Which moon in our solar system has liquid oceans?",
        options: ["Europa", "Titan", "Ganymede", "All of these"],
        correctAnswer: 3
      },
      {
        question: "What percentage of the universe is dark matter?",
        options: ["15%", "27%", "68%", "85%"],
        correctAnswer: 1
      },
      {
        question: "What is the speed of light in kilometers per second?",
        options: ["299,792", "399,792", "499,792", "599,792"],
        correctAnswer: 0
      }
    ]
  },
  {
    category: "food",
    easy: [
      {
        question: "Which fruit is known as the 'King of Fruits'?",
        options: ["Apple", "Mango", "Durian", "Banana"],
        correctAnswer: 2
      },
      {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Lime"],
        correctAnswer: 1
      },
      {
        question: "Which country is sushi from?",
        options: ["China", "Korea", "Thailand", "Japan"],
        correctAnswer: 3
      },
      {
        question: "What is the main ingredient in traditional hummus?",
        options: ["Chickpeas", "Lentils", "Black beans", "Peas"],
        correctAnswer: 0
      },
      {
        question: "Which nut is used to make marzipan?",
        options: ["Walnut", "Almond", "Cashew", "Peanut"],
        correctAnswer: 1
      },
      {
        question: "What is the main ingredient in chocolate?",
        options: ["Cocoa beans", "Coffee beans", "Vanilla beans", "Sugar"],
        correctAnswer: 0
      },
      {
        question: "Which grain is used to make sake?",
        options: ["Wheat", "Barley", "Rice", "Corn"],
        correctAnswer: 2
      },
      {
        question: "What is tofu made from?",
        options: ["Rice", "Wheat", "Soybeans", "Corn"],
        correctAnswer: 2
      },
      {
        question: "Which fruit is known as 'golden apple'?",
        options: ["Apple", "Orange", "Mango", "Peach"],
        correctAnswer: 1
      },
      {
        question: "What is the main ingredient in traditional pesto?",
        options: ["Parsley", "Basil", "Cilantro", "Mint"],
        correctAnswer: 1
      },
      {
        question: "Which meat is used in a traditional hamburger?",
        options: ["Pork", "Chicken", "Beef", "Turkey"],
        correctAnswer: 2
      },
      {
        question: "What type of pasta is shaped like little bowties?",
        options: ["Penne", "Farfalle", "Fusilli", "Rigatoni"],
        correctAnswer: 1
      },
      {
        question: "Which vegetable is known as aubergine in the UK?",
        options: ["Zucchini", "Cucumber", "Eggplant", "Bell pepper"],
        correctAnswer: 2
      },
      {
        question: "What is the main ingredient in traditional marshmallows?",
        options: ["Sugar", "Gelatin", "Corn syrup", "Egg whites"],
        correctAnswer: 1
      },
      {
        question: "Which country invented pizza?",
        options: ["Greece", "Spain", "France", "Italy"],
        correctAnswer: 3
      },
      {
        question: "What is the main ingredient in traditional wasabi?",
        options: ["Horseradish", "Mustard", "Japanese radish", "Green chili"],
        correctAnswer: 2
      },
      {
        question: "Which fruit is actually a berry?",
        options: ["Strawberry", "Banana", "Raspberry", "Blackberry"],
        correctAnswer: 1
      },
      {
        question: "What is the most consumed meat in the world?",
        options: ["Beef", "Chicken", "Pork", "Fish"],
        correctAnswer: 2
      },
      {
        question: "Which spice is known as 'Red Gold'?",
        options: ["Paprika", "Saffron", "Turmeric", "Cayenne"],
        correctAnswer: 1
      },
      {
        question: "What is the main ingredient in traditional couscous?",
        options: ["Rice", "Wheat", "Corn", "Barley"],
        correctAnswer: 1
      },
    ],
    medium: [
      {
        question: "Which cheese is traditionally used in a classic French Quiche Lorraine?",
        options: ["Gruyère", "Cheddar", "Mozzarella", "Brie"],
        correctAnswer: 0
      },
      {
        question: "What is the main flavoring in Worcestershire sauce?",
        options: ["Molasses", "Anchovies", "Tamarind", "Vinegar"],
        correctAnswer: 1
      },
      {
        question: "Which nut is not actually a nut but a legume?",
        options: ["Almond", "Cashew", "Peanut", "Hazelnut"],
        correctAnswer: 2
      },
      {
        question: "What is the primary ingredient in traditional Japanese miso?",
        options: ["Rice", "Soybeans", "Wheat", "Barley"],
        correctAnswer: 1
      },
      {
        question: "Which wine region is known for Cabernet Sauvignon?",
        options: ["Bordeaux", "Champagne", "Chianti", "Rioja"],
        correctAnswer: 0
      },
      {
        question: "What gives Earl Grey tea its distinctive flavor?",
        options: ["Lavender", "Bergamot", "Jasmine", "Vanilla"],
        correctAnswer: 1
      },
      {
        question: "Which mushroom is known as 'King of Mushrooms'?",
        options: ["Shiitake", "Matsutake", "Portobello", "Porcini"],
        correctAnswer: 1
      },
      {
        question: "What is the main ingredient in traditional Turkish delight?",
        options: ["Gelatin", "Cornstarch", "Pectin", "Agar"],
        correctAnswer: 1
      },
      {
        question: "Which spice comes from the crocus flower?",
        options: ["Cardamom", "Saffron", "Turmeric", "Cinnamon"],
        correctAnswer: 1
      },
      {
        question: "What is the difference between jam and jelly?",
        options: ["Sugar content", "Fruit pieces", "Pectin amount", "Cooking time"],
        correctAnswer: 1
      },
      {
        question: "Which salt is traditionally used in Indian black salt (kala namak)?",
        options: ["Rock salt", "Sea salt", "Himalayan salt", "Table salt"],
        correctAnswer: 0
      },
      {
        question: "What gives rye bread its distinctive flavor?",
        options: ["Sourdough", "Caraway seeds", "Molasses", "Malt"],
        correctAnswer: 1
      },
      {
        question: "Which cuisine invented tempura?",
        options: ["Japanese", "Portuguese", "Chinese", "Korean"],
        correctAnswer: 1
      },
      {
        question: "What is the main ingredient in traditional falafel?",
        options: ["Chickpeas", "Fava beans", "Both A & B", "Lentils"],
        correctAnswer: 2
      },
      {
        question: "Which fruit is known as 'alligator pear'?",
        options: ["Kiwi", "Avocado", "Dragon fruit", "Papaya"],
        correctAnswer: 1
      },
      {
        question: "What gives Belgian chocolate its distinctive texture?",
        options: ["Cocoa %", "Tempering", "Sugar content", "Cocoa butter"],
        correctAnswer: 1
      },
      {
        question: "Which grain is naturally gluten-free?",
        options: ["Barley", "Rye", "Quinoa", "Wheat"],
        correctAnswer: 2 
      },
      {
        question: "Which Indian bread is traditionally cooked in a tandoor oven?",
        options: ["Chapati", "Naan", "Paratha", "Puri"],
        correctAnswer: 1
        },
        {
        question: "What gives sourdough bread its characteristic tang?",
        options: ["Vinegar", "Lactic acid", "Citrus", "Salt"],
        correctAnswer: 1
        },
        {
        question: "Which cooking technique is essential for making risotto?",
        options: ["Braising", "Toasting", "Blanching", "Steaming"],
        correctAnswer: 1
        },
    ],
  },
  {
    category: "football",
    easy: [
      {
        question: "Who is this player?",
        options: ["Cristiano Ronaldo", "Quaresma", "Lionel Messi", "Christ Ronald"],
        correctAnswer: 0,
        imageID: "ronaldo",
      },
      {
        question: "Who is this player?",
        options: ["Neymar Jr", "Kylian Mbappé", "Eden Hazard", "Ronaldinho"],
        correctAnswer: 0,
        imageID: "neymar",
      },
      {
        question: "Who is this player?",
        options: ["Mohamed Salah", "Sadio Mané", "Virgil van Dijk", "Trent Alexander-Arnold"],
        correctAnswer: 0,
        imageID: "salah",
      },
      {
        question: "Who is this player?",
        options: ["Sadio Mane", "Memphis Depay", "Jude Bellingham", "Michael Jordan"],
        correctAnswer: 2,
        imageID: "bellingham",
      },
      {
        question: "Who is this player?",
        options: ["Lionel Messi", "Leonardo Pepsi", "Erling Haaland", "Karim Benzema"],
        correctAnswer: 0,
        imageID: "messi",
      },
      {
        question: "What’s this club?",
        options: ["Barcelona", "Real Madrid", "Chelsea", "Manchester United"],
        correctAnswer: 1,
        imageID: "realmadrid",
      },
      {
        question: "What’s this club?",
        options: ["Liverpool", "AC Milan", "Bayern Munich", "PSG"],
        correctAnswer: 2,
        imageID: "bayernmunich",
      },
      {
        question: "What’s this club?",
        options: ["Inter Milan", "Manchester City", "Juventus", "Arsenal"],
        correctAnswer: 0,
        imageID: "arsenal",
      },
      {
        question: "What’s this club?",
        options: ["Chelsea", "Manchester United", "Napoli", "Tottenham Hotspur"],
        correctAnswer: 1,
        imageID: "manunited",
      },
      {
        question: "What’s this club?",
        options: ["Borussia Dortmund", "RB Leipzig", "Eintracht Frankfurt", "Bayer Leverkusen"],
        correctAnswer: 0,
        imageID: "dortmund",
      },
      {
        question: "Which country hosted the 2014 FIFA World Cup?",
        options: ["Brazil", "South Africa", "Germany", "France"],
        correctAnswer: 0,
      },
      {
        question: "Which player scored the most goals in World Cup history?",
        options: ["Pelé", "Miroslav Klose", "Ronaldo Nazário", "Gerd Müller"],
        correctAnswer: 1,
      },
      {
        question: "Which team won the UEFA Champions League in 2020?",
        options: ["PSG", "Liverpool", "Bayern Munich", "Manchester City"],
        correctAnswer: 2,
      },
      {
        question: "What color is associated with FC Barcelona’s home kit?",
        options: ["Blue and Red", "White", "Yellow", "Black"],
        correctAnswer: 0,
      },
      {
        question: "Who is the current manager of Liverpool FC (as of 2023)?",
        options: ["Pep Guardiola", "Carlo Ancelotti", "Mauricio Pochettino", "Jürgen Klopp"],
        correctAnswer: 3,
      },
      {
        question: "Which club is known as 'The Old Lady'?",
        options: ["Juventus", "Real Madrid", "Chelsea", "Bayern Munich"],
        correctAnswer: 0,
      },
      {
        question: "What’s the maximum number of players allowed on the field for one team during a match?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 1,
      },
      {
        question: "Who holds the record for the fastest goal in World Cup history?",
        options: ["Hakan Şükür", "Cristiano Ronaldo", "Kylian Mbappé", "Diego Maradona"],
        correctAnswer: 0,
      },
      {
        question: "Which country has won the most World Cup titles?",
        options: ["Germany", "Argentina", "Brazil", "Italy"],
        correctAnswer: 2,
      },
    ],    
    medium: [
      {
        question: "Who won the 2018 Ballon d'Or?",
        options: ["Lionel Messi", "Luka Modric", "Cristiano Ronaldo", "Karim Benzema"],
        correctAnswer: 1,
      },
      {
        question: "Who is this player?",
        options: ["Frenkie De Jong", "Erling Haaland", "Marcus Rashford", "Jadon Sancho"],
        correctAnswer: 0,
        imageID: "dejong",
      },
      {
        question: "Who is this player?",
        options: ["Gareth Bale", "James Rodríguez", "Eden Hazard", "Luis Suárez"],
        correctAnswer: 2,
        imageID: "bale",
      },
      {
        question: "Who is this player?",
        options: ["Karim Benzema", "Eden Hazard", "Pierre-Emerick Aubameyang", "Thomas Müller"],
        correctAnswer: 1,
        imageID: "hazard",
      },
      {
        question: "Who is this player?",
        options: ["Phil Foden", "Jamie Vardy", "Bukayo Saka", "Declan Rice"],
        correctAnswer: 1,
        imageID: "vardy",
      },
      {
        question: "What’s this club?",
        options: ["Leicester City", "Barcelona", "Chelsea", "Bayern Munich"],
        correctAnswer: 0,
        imageID: "leicester",
      },
      {
        question: "What’s this club?",
        options: ["Juventus", "AC Milan", "Inter Milan", "AS Roma"],
        correctAnswer: 3,
        imageID: "roma",
      },
      {
        question: "What’s this club?",
        options: ["Tottenham Hotspur", "Arsenal", "Manchester United", "West Ham"],
        correctAnswer: 3,
        imageID: "westham",
      },
      {
        question: "What’s this club?",
        options: ["Ajax", "Feyenoord", "PSV Eindhoven", "AZ Alkmaar"],
        correctAnswer: 0,
        imageID: "ajax",
      },
      {
        question: "What’s this club?",
        options: ["Atlético Madrid", "Valencia", "Sevilla", "Real Betis"],
        correctAnswer: 0,
        imageID: "atletico",
      },
      {
        question: "Who is the all-time top scorer in UEFA Champions League history?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Karim Benzema"],
        correctAnswer: 0,
      },
      {
        question: "Which country won the first FIFA World Cup in 1930?",
        options: ["Brazil", "Argentina", "Uruguay", "Italy"],
        correctAnswer: 2,
      },
      {
        question: "Which club has won the most UEFA Champions League titles?",
        options: ["AC Milan", "Real Madrid", "Barcelona", "Liverpool"],
        correctAnswer: 1,
      },
      {
        question: "Who scored the famous 'Hand of God' goal?",
        options: ["Pelé", "Diego Maradona", "Zinedine Zidane", "Cristiano Ronaldo"],
        correctAnswer: 1,
      },
      {
        question: "Which stadium is known as 'The Theatre of Dreams'?",
        options: ["Anfield", "Old Trafford", "Camp Nou", "Stamford Bridge"],
        correctAnswer: 1,
      },
      {
        question: "Which club does Neymar Jr. play for (as of 2023)?",
        options: ["Barcelona", "PSG", "Al-Hilal", "Real Madrid"],
        correctAnswer: 2,
      },
      {
        question: "Who won the 2022 FIFA World Cup?",
        options: ["France", "Argentina", "Brazil", "England"],
        correctAnswer: 1,
      },
      {
        question: "Which country has the most Ballon d'Or winners?",
        options: ["Argentina", "Brazil", "Germany", "France"],
        correctAnswer: 3,
      },
      {
        question: "What does VAR stand for in football?",
        options: ["Video Analysis Review", "Video Assistant Referee", "Virtual Assistant Referee", "Video Action Replay"],
        correctAnswer: 1,
      },
    ],
  }
]