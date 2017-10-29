var teams = [{name: "Atlanta Hawks" , id: 1},{name: "Boston Celtics" , id: 2},{name: "Brooklyn Nets" , id: 3},{name: "Charlotte Bobcats" , id: 4},{name: "Chicago Bulls" , id: 5},{name: "Cleveland Cavaliers" , id: 6},{name: "Dallas Mavericks" , id: 7},{name: "Denver Nuggets" , id: 8},{name: "Detroit Pistons" , id: 9},{name: "Golden State Warriors" , id: 10},{name: "Houston Rockets" , id: 11},{name: "Indiana Pacers" , id: 12},{name: "LA Clippers" , id: 13},{name: "LA Lakers" , id: 14},{name: "Memphis Grizzlies" , id: 15},{name: "Miami Heat" , id: 16},{name: "Milwaukee Bucks" , id: 17},{name: "Minnesota Timberwolves" , id: 18},{name: "New Orleans Hornets" , id: 19},{name: "New York Knicks" , id: 20},{name: "Oklahoma City Thunder" , id: 21},{name: "Orlando Magic" , id: 22},{name: "Philadelphia Sixers" , id: 23},{name: "Phoenix Suns" , id: 24},{name: "Portland Trail Blazers" , id: 25},{name: "Sacramento Kings" , id: 26},{name: "San Antonio Spurs" , id: 27},{name: "Toronto Raptors" , id: 28},{name: "Utah Jazz" , id: 29},{name: "Washington Wizards" , id: 30}];
var playTypes = [{id:4, type: 'shot'}, {id:5, type: 'miss'}, {id:6, type: 'free throw'}];
var players = [{firstName: "Aaron", lastName: "Gordon", teamId: 22, playerId: 1}, {firstName: "Abdel", lastName: "Nader", teamId: 2, playerId: 2},  {firstName: "Al", lastName: "Horford", teamId: 2, playerId: 3}, {firstName: "Al", lastName: "Jefferson", teamId: 12, playerId: 4},  {firstName: "Al-Farouq", lastName: "Aminu", teamId: 25, playerId: 5}, {firstName: "Alec", lastName: "Burks", teamId: 29, playerId: 6},  {firstName: "Alec", lastName: "Peters", teamId: 24, playerId: 7}, {firstName: "Alex", lastName: "Abrines", teamId: 21, playerId: 8},  {firstName: "Alex", lastName: "Caruso", teamId: 14, playerId: 9}, {firstName: "Alex", lastName: "Len", teamId: 24, playerId: 10}, {firstName: "Alex", lastName: "Poythress", teamId: 12, playerId: 11}, {firstName: "Alfonzo", lastName: "McKinnie", teamId: 28, playerId: 12}, {firstName: "Allen", lastName: "Crabbe", teamId: 3, playerId: 13},  {firstName: "Amir", lastName: "Johnson", teamId: 23, playerId: 14}, {firstName: "Andre", lastName: "Drummond", teamId: 9, playerId: 15},  {firstName: "Andre", lastName: "Iguodala", teamId: 10, playerId: 16}, {firstName: "Andre", lastName: "Iguodala", teamId: 10, playerId: 17}, {firstName: "Andre", lastName: "Roberson", teamId: 21, playerId: 18}, {firstName: "Andrew", lastName: "Bogut", teamId: 14, playerId: 19}, {firstName: "Andrew", lastName: "Harrison", teamId: 15, playerId: 20},  {firstName: "Andrew", lastName: "Wiggins", teamId: 18, playerId: 21}, {firstName: "Ante", lastName: "Zizic", teamId: 6, playerId: 22},  {firstName: "Anthony", lastName: "Davis", teamId: 19, playerId: 23},  {firstName: "Anthony", lastName: "Tolliver", teamId: 9, playerId: 24},  {firstName: "Antonio", lastName: "Blakeney", teamId: 5, playerId: 25},  {firstName: "Aron", lastName: "Baynes", teamId: 2, playerId: 26}, {firstName: "Arron", lastName: "Afflalo", teamId: 22, playerId: 27},  {firstName: "Austin", lastName: "Rivers", teamId: 13, playerId: 28},  {firstName: "Avery", lastName: "Bradley", teamId: 9, playerId: 29}, {firstName: "Bam", lastName: "Adebayo", teamId: 16, playerId: 30},  {firstName: "Ben", lastName: "Simmons", teamId: 23, playerId: 31},  {firstName: "Bismack", lastName: "Biyombo", teamId: 22, playerId: 32},  {firstName: "Blake", lastName: "Griffin", teamId: 13, playerId: 33},  {firstName: "Boban", lastName: "Marjanovic", teamId: 9, playerId: 34},  {firstName: "Bobby", lastName: "Brown", teamId: 11, playerId: 35},  {firstName: "Bojan", lastName: "Bogdanovic", teamId: 12, playerId: 36}, {firstName: "Bradley", lastName: "Beal", teamId: 30, playerId: 37}, {firstName: "Brandan", lastName: "Wright", teamId: 15, playerId: 38}, {firstName: "Brandon", lastName: "Ingram", teamId: 14, playerId: 39}, {firstName: "Brandon", lastName: "Paul", teamId: 27, playerId: 40}, {firstName: "Brice", lastName: "Johnson", teamId: 13, playerId: 41},  {firstName: "Brook", lastName: "Lopez", teamId: 14, playerId: 42},  {firstName: "Bruno", lastName: "Caboclo", teamId: 28, playerId: 43},  {firstName: "Bryn", lastName: "Forbes", teamId: 27, playerId: 44},  {firstName: "Buddy", lastName: "Hield", teamId: 26, playerId: 45},  {firstName: "Caleb", lastName: "Swanigan", teamId: 25, playerId: 46}, {firstName: "Caris", lastName: "LeVert", teamId: 3, playerId: 47},  {firstName: "Carmelo", lastName: "Anthony", teamId: 21, playerId: 48},  {firstName: "Cedi", lastName: "Osman", teamId: 6, playerId: 49},  {firstName: "Chandler", lastName: "Parsons", teamId: 15, playerId: 50}, {firstName: "Channing", lastName: "Frye", teamId: 6, playerId: 51}, {firstName: "Cheick", lastName: "Diallo", teamId: 19, playerId: 52},  {firstName: "Chris", lastName: "Paul", teamId: 11, playerId: 53}, {firstName: "CJ", lastName: "McCollum", teamId: 25, playerId: 54},  {firstName: "CJ", lastName: "Miles", teamId: 28, playerId: 55}, {firstName: "Clint", lastName: "Capela", teamId: 11, playerId: 56}, {firstName: "Cody", lastName: "Zeller", teamId: 4, playerId: 57}, {firstName: "Corey", lastName: "Brewer", teamId: 14, playerId: 58}, {firstName: "Cory", lastName: "Joseph", teamId: 12, playerId: 59},  {firstName: "Courtney", lastName: "Lee", teamId: 20, playerId: 60}, {firstName: "Cristiano", lastName: "Felicio", teamId: 5, playerId: 61}, {firstName: "D.J.", lastName: "Augustin", teamId: 22, playerId: 62},  {firstName: "D.J.", lastName: "Wilson", teamId: 17, playerId: 63},  {firstName: "DAngelo", lastName: "Russell", teamId: 3, playerId: 64}, {firstName: "Dakari", lastName: "Johnson", teamId: 21, playerId: 65}, {firstName: "Damian", lastName: "Lillard", teamId: 25, playerId: 66}, {firstName: "Damien", lastName: "Wilkins", teamId: 12, playerId: 67}, {firstName: "Damyean", lastName: "Dotson", teamId: 20, playerId: 68}, {firstName: "Daniel", lastName: "Theis", teamId: 2, playerId: 69},  {firstName: "Danilo", lastName: "Gallinari", teamId: 13, playerId: 70}, {firstName: "Danny", lastName: "Green", teamId: 27, playerId: 71},  {firstName: "Dante", lastName: "Cunningham", teamId: 19, playerId: 72}, {firstName: "Dario", lastName: "Saric", teamId: 23, playerId: 73},  {firstName: "Darius", lastName: "Miller", teamId: 19, playerId: 74},  {firstName: "Darren", lastName: "Collison", teamId: 12, playerId: 75},  {firstName: "David", lastName: "Nwaba", teamId: 5, playerId: 76}, {firstName: "David", lastName: "West", teamId: 10, playerId: 77}, {firstName: "Davis", lastName: "Bertans", teamId: 27, playerId: 78},  {firstName: "DeAaron", lastName: "Fox", teamId: 26, playerId: 79},  {firstName: "DeAndre", lastName: "Jordan", teamId: 13, playerId: 80}, {firstName: "DeAndre", lastName: "Liggins", teamId: 17, playerId: 81},  {firstName: "DeAndre", lastName: "Bembry", teamId: 1, playerId: 82},  {firstName: "Dejounte", lastName: "Murray", teamId: 27, playerId: 83},  {firstName: "Delon", lastName: "Wright", teamId: 28, playerId: 84}, {firstName: "DeMar", lastName: "DeRozan", teamId: 28, playerId: 85},  {firstName: "DeMarcus", lastName: "Cousins", teamId: 19, playerId: 86}, {firstName: "DeMarre", lastName: "Carroll", teamId: 3, playerId: 87}, {firstName: "Demetrius", lastName: "Jackson", teamId: 11, playerId: 88},  {firstName: "Dennis", lastName: "Schroder", teamId: 1, playerId: 89}, {firstName: "Dennis", lastName: "Smith", teamId: 7, playerId: 90},  {firstName: "Denzel", lastName: "Valentine", teamId: 5, playerId: 91},  {firstName: "Derrick", lastName: "Favors", teamId: 29, playerId: 92}, {firstName: "Derrick", lastName: "Jones", teamId: 24, playerId: 93},  {firstName: "Derrick", lastName: "Rose", teamId: 6, playerId: 94},  {firstName: "Derrick", lastName: "White", teamId: 27, playerId: 95},  {firstName: "Devin", lastName: "Booker", teamId: 24, playerId: 96}, {firstName: "Devin", lastName: "Harris", teamId: 7, playerId: 97},  {firstName: "Dewayne", lastName: "Dedmon", teamId: 1, playerId: 98},  {firstName: "Dillon", lastName: "Brooks", teamId: 15, playerId: 99},  {firstName: "Dion", lastName: "Waiters", teamId: 16, playerId: 100},  {firstName: "Dirk", lastName: "Nowitzki", teamId: 7, playerId: 101},  {firstName: "Domantas", lastName: "Sabonis", teamId: 12, playerId: 102},  {firstName: "Donovan", lastName: "Mitchell", teamId: 29, playerId: 103},  {firstName: "Dorian", lastName: "Finney-Smith", teamId: 7, playerId: 104},  {firstName: "Doug", lastName: "McDermott", teamId: 20, playerId: 105},  {firstName: "Dragan", lastName: "Bender", teamId: 24, playerId: 106}, {firstName: "Draymond", lastName: "Green", teamId: 10, playerId: 107},  {firstName: "Dwayne", lastName: "Bacon", teamId: 4, playerId: 108}, {firstName: "Dwight", lastName: "Howard", teamId: 4, playerId: 109},  {firstName: "Dwight", lastName: "Powell", teamId: 7, playerId: 110},  {firstName: "Dwyane", lastName: "Wade", teamId: 6, playerId: 111},  {firstName: "ETwaun", lastName: "Moore", teamId: 19, playerId: 112},  {firstName: "Ed", lastName: "Davis", teamId: 25, playerId: 113},  {firstName: "Ekpe", lastName: "Udoh", teamId: 29, playerId: 114}, {firstName: "Elfrid", lastName: "Payton", teamId: 22, playerId: 115}, {firstName: "Emmanuel", lastName: "Mudiay", teamId: 8, playerId: 116},  {firstName: "Enes", lastName: "Kanter", teamId: 20, playerId: 117}, {firstName: "Eric", lastName: "Bledsoe", teamId: 24, playerId: 118},  {firstName: "Eric", lastName: "Gordon", teamId: 11, playerId: 119}, {firstName: "Eric", lastName: "Moreland", teamId: 9, playerId: 120},  {firstName: "Ersan", lastName: "Ilyasova", teamId: 1, playerId: 121}, {firstName: "Evan", lastName: "Fournier", teamId: 22, playerId: 122}, {firstName: "Evan", lastName: "Turner", teamId: 25, playerId: 123}, {firstName: "Frank", lastName: "Kaminsky", teamId: 4, playerId: 124}, {firstName: "Frank", lastName: "Mason", teamId: 26, playerId: 125}, {firstName: "Frank", lastName: "Ntilikina", teamId: 20, playerId: 126}, {firstName: "Fred", lastName: "VanVleet", teamId: 28, playerId: 127}, {firstName: "Garrett", lastName: "Temple", teamId: 26, playerId: 128},  {firstName: "Gary", lastName: "Harris", teamId: 8, playerId: 129},  {firstName: "George", lastName: "Hill", teamId: 26, playerId: 130}, {firstName: "Gian", lastName: "Clavell", teamId: 7, playerId: 131}, {firstName: "Giannis", lastName: "Antetokounmpo", teamId: 17, playerId: 132}, {firstName: "Goran", lastName: "Dragic", teamId: 16, playerId: 133},  {firstName: "Gordon", lastName: "Hayward", teamId: 2, playerId: 134}, {firstName: "Gorgui", lastName: "Dieng", teamId: 18, playerId: 135},  {firstName: "Greg", lastName: "Monroe", teamId: 17, playerId: 136}, {firstName: "Guerschon", lastName: "Yabusele", teamId: 2, playerId: 137}, {firstName: "Harrison", lastName: "Barnes", teamId: 7, playerId: 138},  {firstName: "Hassan", lastName: "Whiteside", teamId: 16, playerId: 139},  {firstName: "Henry", lastName: "Ellenson", teamId: 9, playerId: 140}, {firstName: "Ian", lastName: "Clark", teamId: 19, playerId: 141}, {firstName: "Ian", lastName: "Mahinmi", teamId: 30, playerId: 142}, {firstName: "Ike", lastName: "Anigbogu", teamId: 12, playerId: 143},  {firstName: "Iman", lastName: "Shumpert", teamId: 6, playerId: 144},  {firstName: "Ish", lastName: "Smith", teamId: 9, playerId: 145},  {firstName: "J.J.", lastName: "Barea", teamId: 7, playerId: 146}, {firstName: "Jabari", lastName: "Bird", teamId: 2, playerId: 147},  {firstName: "Jae", lastName: "Crowder", teamId: 6, playerId: 148},  {firstName: "Jahlil", lastName: "Okafor", teamId: 23, playerId: 149}, {firstName: "JaKarr", lastName: "Sampson", teamId: 26, playerId: 150},  {firstName: "Jake", lastName: "Layman", teamId: 25, playerId: 151}, {firstName: "Jakob", lastName: "Poeltl", teamId: 28, playerId: 152},  {firstName: "Jamal", lastName: "Crawford", teamId: 18, playerId: 153},  {firstName: "Jamal", lastName: "Murray", teamId: 8, playerId: 154}, {firstName: "James", lastName: "Ennis", teamId: 15, playerId: 155}, {firstName: "James", lastName: "Harden", teamId: 11, playerId: 156},  {firstName: "James", lastName: "Johnson", teamId: 16, playerId: 157}, {firstName: "JaMychal", lastName: "Green", teamId: 15, playerId: 158},  {firstName: "Jarell", lastName: "Martin", teamId: 15, playerId: 159}, {firstName: "Jarrett", lastName: "Allen", teamId: 3, playerId: 160},  {firstName: "Jason", lastName: "Smith", teamId: 30, playerId: 161}, {firstName: "Jason", lastName: "Terry", teamId: 17, playerId: 162}, {firstName: "JaVale", lastName: "McGee", teamId: 10, playerId: 163},  {firstName: "JaVale", lastName: "McGee", teamId: 10, playerId: 164},  {firstName: "Jaylen", lastName: "Brown", teamId: 2, playerId: 165}, {firstName: "Jayson", lastName: "Tatum", teamId: 2, playerId: 166}, {firstName: "Jeff", lastName: "Green", teamId: 6, playerId: 167}, {firstName: "Jeff", lastName: "Teague", teamId: 18, playerId: 168}, {firstName: "Jeff", lastName: "Withey", teamId: 7, playerId: 169},  {firstName: "Jerami", lastName: "Grant", teamId: 21, playerId: 170},  {firstName: "Jeremy", lastName: "Lamb", teamId: 4, playerId: 171},  {firstName: "Jeremy", lastName: "Lin", teamId: 3, playerId: 172}, {firstName: "Jerian", lastName: "Grant", teamId: 5, playerId: 173}, {firstName: "Jerryd", lastName: "Bayless", teamId: 23, playerId: 174},  {firstName: "Jimmy", lastName: "Butler", teamId: 18, playerId: 175},  {firstName: "JJ", lastName: "Redick", teamId: 23, playerId: 176}, {firstName: "Jodie", lastName: "Meeks", teamId: 30, playerId: 177}, {firstName: "Joe", lastName: "Harris", teamId: 3, playerId: 178}, {firstName: "Joe", lastName: "Ingles", teamId: 29, playerId: 179},  {firstName: "Joe", lastName: "Johnson", teamId: 29, playerId: 180}, {firstName: "Joe", lastName: "Young", teamId: 12, playerId: 181}, {firstName: "Joel", lastName: "Embiid", teamId: 23, playerId: 182}, {firstName: "Joffrey", lastName: "Lauvergne", teamId: 27, playerId: 183}, {firstName: "John", lastName: "Collins", teamId: 1, playerId: 184}, {firstName: "John", lastName: "Henson", teamId: 17, playerId: 185}, {firstName: "John", lastName: "Wall", teamId: 30, playerId: 186}, {firstName: "Johnny", lastName: "OBryant", teamId: 4, playerId: 187}, {firstName: "Jon", lastName: "Leuer", teamId: 9, playerId: 188},  {firstName: "Jonas", lastName: "Valanciunas", teamId: 28, playerId: 189}, {firstName: "Jonathan", lastName: "Isaac", teamId: 22, playerId: 190},  {firstName: "Jonathon", lastName: "Simmons", teamId: 22, playerId: 191},  {firstName: "Jordan", lastName: "Bell", teamId: 10, playerId: 192}, {firstName: "Jordan", lastName: "Clarkson", teamId: 14, playerId: 193}, {firstName: "Jordan", lastName: "Crawford", teamId: 19, playerId: 194}, {firstName: "Jordan", lastName: "Mickey", teamId: 16, playerId: 195}, {firstName: "Jose", lastName: "Calderon", teamId: 6, playerId: 196},  {firstName: "Josh", lastName: "Hart", teamId: 14, playerId: 197}, {firstName: "Josh", lastName: "Huestis", teamId: 21, playerId: 198},  {firstName: "Josh", lastName: "Jackson", teamId: 24, playerId: 199},  {firstName: "Josh", lastName: "Magette", teamId: 1, playerId: 200}, {firstName: "Josh", lastName: "Richardson", teamId: 16, playerId: 201}, {firstName: "JR", lastName: "Smith", teamId: 6, playerId: 202}, {firstName: "Jrue", lastName: "Holiday", teamId: 19, playerId: 203},  {firstName: "Juan", lastName: "Hernangomez", teamId: 8, playerId: 204}, {firstName: "Julius", lastName: "Randle", teamId: 14, playerId: 205}, {firstName: "Julyan", lastName: "Stone", teamId: 4, playerId: 206}, {firstName: "Justin", lastName: "Anderson", teamId: 23, playerId: 207}, {firstName: "Justin", lastName: "Holiday", teamId: 5, playerId: 208}, {firstName: "Justin", lastName: "Jackson", teamId: 26, playerId: 209},  {firstName: "Justise", lastName: "Winslow", teamId: 16, playerId: 210}, {firstName: "Jusuf", lastName: "Nurkic", teamId: 25, playerId: 211},  {firstName: "Karl-Anthony", lastName: "Towns", teamId: 18, playerId: 212},  {firstName: "Kay", lastName: "Felder", teamId: 5, playerId: 213}, {firstName: "Kelly", lastName: "Olynyk", teamId: 16, playerId: 214},  {firstName: "Kelly", lastName: "Oubre", teamId: 30, playerId: 215}, {firstName: "Kemba", lastName: "Walker", teamId: 4, playerId: 216}, {firstName: "Kenneth", lastName: "Faried", teamId: 8, playerId: 217}, {firstName: "Kent", lastName: "Bazemore", teamId: 1, playerId: 218},  {firstName: "Kevin", lastName: "Durant", teamId: 10, playerId: 219},  {firstName: "Kevin", lastName: "Love", teamId: 6, playerId: 220}, {firstName: "Kevon", lastName: "Looney", teamId: 10, playerId: 221},  {firstName: "Khem", lastName: "Birch", teamId: 22, playerId: 222},  {firstName: "Khris", lastName: "Middleton", teamId: 17, playerId: 223}, {firstName: "Klay", lastName: "Thompson", teamId: 10, playerId: 224}, {firstName: "Kosta", lastName: "Koufos", teamId: 26, playerId: 225},  {firstName: "Kristaps", lastName: "Porzingis", teamId: 20, playerId: 226},  {firstName: "Kyle", lastName: "Anderson", teamId: 27, playerId: 227}, {firstName: "Kyle", lastName: "Korver", teamId: 6, playerId: 228},  {firstName: "Kyle", lastName: "Kuzma", teamId: 14, playerId: 229},  {firstName: "Kyle", lastName: "Lowry", teamId: 28, playerId: 230},  {firstName: "Kyle", lastName: "OQuinn", teamId: 20, playerId: 231}, {firstName: "Kyrie", lastName: "Irving", teamId: 2, playerId: 232}, {firstName: "LaMarcus", lastName: "Aldridge", teamId: 27, playerId: 233}, {firstName: "Lance", lastName: "Stephenson", teamId: 12, playerId: 234},  {firstName: "Lance", lastName: "Thomas", teamId: 20, playerId: 235},  {firstName: "Langston", lastName: "Galloway", teamId: 9, playerId: 236},  {firstName: "Larry", lastName: "Nance", teamId: 14, playerId: 237}, {firstName: "Lauri", lastName: "Markkanen", teamId: 5, playerId: 238},  {firstName: "LeBron", lastName: "James", teamId: 6, playerId: 239}, {firstName: "Lonzo", lastName: "Ball", teamId: 14, playerId: 240},  {firstName: "Lou", lastName: "Williams", teamId: 13, playerId: 241},  {firstName: "Luc", lastName: "Mbah a Moute", teamId: 11, playerId: 242},  {firstName: "Lucas", lastName: "Nogueira", teamId: 28, playerId: 243},  {firstName: "Luke", lastName: "Babbitt", teamId: 1, playerId: 244}, {firstName: "Luke", lastName: "Kennard", teamId: 9, playerId: 245}, {firstName: "Luol", lastName: "Deng", teamId: 14, playerId: 246}, {firstName: "Malachi", lastName: "Richardson", teamId: 26, playerId: 247},  {firstName: "Malcolm", lastName: "Brogdon", teamId: 17, playerId: 248}, {firstName: "Malcolm", lastName: "Delaney", teamId: 1, playerId: 249},  {firstName: "Malik", lastName: "Beasley", teamId: 8, playerId: 250},  {firstName: "Malik", lastName: "Monk", teamId: 4, playerId: 251}, {firstName: "Manu", lastName: "Ginobili", teamId: 27, playerId: 252}, {firstName: "Marc", lastName: "Gasol", teamId: 15, playerId: 253},  {firstName: "Marcin", lastName: "Gortat", teamId: 30, playerId: 254}, {firstName: "Marco", lastName: "Belinelli", teamId: 1, playerId: 255},  {firstName: "Marcus", lastName: "Smart", teamId: 2, playerId: 256}, {firstName: "Mario", lastName: "Chalmers", teamId: 15, playerId: 257},  {firstName: "Mario", lastName: "Hezonja", teamId: 22, playerId: 258}, {firstName: "Markelle", lastName: "Fultz", teamId: 23, playerId: 259},  {firstName: "Marquese", lastName: "Chriss", teamId: 24, playerId: 260}, {firstName: "Marreese", lastName: "Speights", teamId: 22, playerId: 261}, {firstName: "Marvin", lastName: "Williams", teamId: 4, playerId: 262},  {firstName: "Mason", lastName: "Plumlee", teamId: 8, playerId: 263},  {firstName: "Matthew", lastName: "Dellavedova", teamId: 17, playerId: 264}, {firstName: "Maurice", lastName: "Harkless", teamId: 25, playerId: 265},  {firstName: "Maxi", lastName: "Kleber", teamId: 7, playerId: 266},  {firstName: "Meyers", lastName: "Leonard", teamId: 25, playerId: 267},  {firstName: "Michael", lastName: "Beasley", teamId: 20, playerId: 268}, {firstName: "Mike", lastName: "Conley", teamId: 15, playerId: 269}, {firstName: "Mike", lastName: "James", teamId: 24, playerId: 270},  {firstName: "Mike", lastName: "Muscala", teamId: 1, playerId: 271}, {firstName: "Mike", lastName: "Scott", teamId: 30, playerId: 272},  {firstName: "Milos", lastName: "Teodosic", teamId: 13, playerId: 273},  {firstName: "Mirza", lastName: "Teletovic", teamId: 17, playerId: 274}, {firstName: "Montrezl", lastName: "Harrell", teamId: 13, playerId: 275},  {firstName: "Myles", lastName: "Turner", teamId: 12, playerId: 276},  {firstName: "Nemanja", lastName: "Bjelica", teamId: 18, playerId: 277}, {firstName: "Nene", lastName: "Hilário", teamId: 11, playerId: 278},  {firstName: "Nerlens", lastName: "Noel", teamId: 7, playerId: 279}, {firstName: "Nick", lastName: "Young", teamId: 10, playerId: 280},  {firstName: "Nicolas", lastName: "Brussino", teamId: 1, playerId: 281}, {firstName: "Nik", lastName: "Stauskas", teamId: 23, playerId: 282},  {firstName: "Nikola", lastName: "Jokic", teamId: 8, playerId: 283}, {firstName: "Nikola", lastName: "Vucevic", teamId: 22, playerId: 284},  {firstName: "Norman", lastName: "Powell", teamId: 28, playerId: 285}, {firstName: "OG", lastName: "Anunoby", teamId: 28, playerId: 286},  {firstName: "Omri", lastName: "Casspi", teamId: 10, playerId: 287}, {firstName: "Otto", lastName: "Porter", teamId: 30, playerId: 288}, {firstName: "Pascal", lastName: "Siakam", teamId: 28, playerId: 289}, {firstName: "Pat", lastName: "Connaughton", teamId: 25, playerId: 290}, {firstName: "Patrick", lastName: "Beverley", teamId: 13, playerId: 291},  {firstName: "Patrick", lastName: "McCaw", teamId: 10, playerId: 292}, {firstName: "Patrick", lastName: "Patterson", teamId: 21, playerId: 293}, {firstName: "Patty", lastName: "Mills", teamId: 27, playerId: 294}, {firstName: "Pau", lastName: "Gasol", teamId: 27, playerId: 295}, {firstName: "Paul", lastName: "George", teamId: 21, playerId: 296}, {firstName: "Paul", lastName: "Millsap", teamId: 8, playerId: 297}, {firstName: "Paul", lastName: "Zipser", teamId: 5, playerId: 298},  {firstName: "PJ", lastName: "Tucker", teamId: 11, playerId: 299}, {firstName: "Quincy", lastName: "Acy", teamId: 3, playerId: 300}, {firstName: "Quincy", lastName: "Pondexter", teamId: 5, playerId: 301}, {firstName: "Quinn", lastName: "Cook", teamId: 10, playerId: 302},  {firstName: "Ramon", lastName: "Sessions", teamId: 20, playerId: 303},  {firstName: "Rashad", lastName: "Vaughn", teamId: 17, playerId: 304}, {firstName: "Raul", lastName: "Neto", teamId: 29, playerId: 305}, {firstName: "Raymond", lastName: "Felton", teamId: 21, playerId: 306},  {firstName: "Reggie", lastName: "Jackson", teamId: 9, playerId: 307}, {firstName: "Ricky", lastName: "Rubio", teamId: 29, playerId: 308}, {firstName: "Robert", lastName: "Covington", teamId: 23, playerId: 309},  {firstName: "Robin", lastName: "Lopez", teamId: 5, playerId: 310},  {firstName: "Rodney", lastName: "Hood", teamId: 29, playerId: 311}, {firstName: "Ron", lastName: "Baker", teamId: 20, playerId: 312}, {firstName: "Rondae", lastName: "Hollis-Jefferson", teamId: 3, playerId: 313},  {firstName: "Royce", lastName: "ONeale", teamId: 29, playerId: 314},  {firstName: "Rudy", lastName: "Gay", teamId: 27, playerId: 315},  {firstName: "Rudy", lastName: "Gobert", teamId: 29, playerId: 316}, {firstName: "Russell", lastName: "Westbrook", teamId: 21, playerId: 317}, {firstName: "Ryan", lastName: "Anderson", teamId: 11, playerId: 318}, {firstName: "Ryan", lastName: "Arcidiacono", teamId: 5, playerId: 319}, {firstName: "Salah", lastName: "Mejri", teamId: 7, playerId: 320},  {firstName: "Sam", lastName: "Dekker", teamId: 13, playerId: 321},  {firstName: "Semi", lastName: "Ojeleye", teamId: 2, playerId: 322}, {firstName: "Serge", lastName: "Ibaka", teamId: 28, playerId: 323}, {firstName: "Shabazz", lastName: "Muhammad", teamId: 18, playerId: 324},  {firstName: "Shabazz", lastName: "Napier", teamId: 25, playerId: 325},  {firstName: "Shane", lastName: "Larkin", teamId: 2, playerId: 326}, {firstName: "Shaun", lastName: "Livingston", teamId: 10, playerId: 327},  {firstName: "Shelvin", lastName: "Mack", teamId: 22, playerId: 328},  {firstName: "Sindarius", lastName: "Thornwell", teamId: 13, playerId: 329}, {firstName: "Skal", lastName: "Labissiere", teamId: 26, playerId: 330}, {firstName: "Spencer", lastName: "Dinwiddie", teamId: 3, playerId: 331},  {firstName: "Stanley", lastName: "Johnson", teamId: 9, playerId: 332},  {firstName: "Stephen", lastName: "Curry", teamId: 10, playerId: 333}, {firstName: "Sterling", lastName: "Brown", teamId: 17, playerId: 334},  {firstName: "Steven", lastName: "Adams", teamId: 21, playerId: 335},  {firstName: "T.J.", lastName: "McConnell", teamId: 23, playerId: 336},  {firstName: "Taj", lastName: "Gibson", teamId: 18, playerId: 337},  {firstName: "Tarik", lastName: "Black", teamId: 11, playerId: 338}, {firstName: "Taurean", lastName: "Prince", teamId: 1, playerId: 339}, {firstName: "Terrance", lastName: "Ferguson", teamId: 21, playerId: 340}, {firstName: "Terrence", lastName: "Ross", teamId: 22, playerId: 341}, {firstName: "Terry", lastName: "Rozier", teamId: 2, playerId: 342}, {firstName: "Thabo", lastName: "Sefolosha", teamId: 29, playerId: 343}, {firstName: "Thaddeus", lastName: "Young", teamId: 12, playerId: 344},  {firstName: "Thon", lastName: "Maker", teamId: 17, playerId: 345},  {firstName: "Tim", lastName: "Frazier", teamId: 30, playerId: 346}, {firstName: "Tim", lastName: "Hardaway", teamId: 20, playerId: 347},  {firstName: "Timofey", lastName: "Mozgov", teamId: 3, playerId: 348}, {firstName: "Timothe", lastName: "Luwawu-Cabarrot", teamId: 23, playerId: 349}, {firstName: "TJ", lastName: "Leaf", teamId: 12, playerId: 350}, {firstName: "TJ", lastName: "Warren", teamId: 24, playerId: 351}, {firstName: "Tobias", lastName: "Harris", teamId: 9, playerId: 352},  {firstName: "Tony", lastName: "Allen", teamId: 19, playerId: 353},  {firstName: "Tony", lastName: "Snell", teamId: 17, playerId: 354},  {firstName: "Treveon", lastName: "Graham", teamId: 4, playerId: 355}, {firstName: "Trevor", lastName: "Ariza", teamId: 11, playerId: 356},  {firstName: "Trevor", lastName: "Booker", teamId: 3, playerId: 357},  {firstName: "Trey", lastName: "Lyles", teamId: 8, playerId: 358}, {firstName: "Tristan", lastName: "Thompson", teamId: 6, playerId: 359}, {firstName: "Troy", lastName: "Daniels", teamId: 24, playerId: 360},  {firstName: "Troy", lastName: "Williams", teamId: 11, playerId: 361}, {firstName: "Tyler", lastName: "Dorsey", teamId: 1, playerId: 362}, {firstName: "Tyler", lastName: "Ennis", teamId: 14, playerId: 363}, {firstName: "Tyler", lastName: "Johnson", teamId: 16, playerId: 364}, {firstName: "Tyler", lastName: "Ulis", teamId: 24, playerId: 365},  {firstName: "Tyreke", lastName: "Evans", teamId: 15, playerId: 366},  {firstName: "Tyson", lastName: "Chandler", teamId: 24, playerId: 367},  {firstName: "Tyus", lastName: "Jones", teamId: 18, playerId: 368},  {firstName: "Victor", lastName: "Oladipo", teamId: 12, playerId: 369},  {firstName: "Vince", lastName: "Carter", teamId: 26, playerId: 370},  {firstName: "Wayne", lastName: "Ellington", teamId: 16, playerId: 371}, {firstName: "Wes", lastName: "Iwundu", teamId: 22, playerId: 372},  {firstName: "Wesley", lastName: "Johnson", teamId: 13, playerId: 373},  {firstName: "Wesley", lastName: "Matthews", teamId: 7, playerId: 374},  {firstName: "Will", lastName: "Barton", teamId: 8, playerId: 375},  {firstName: "Willie", lastName: "Cauley-Stein", teamId: 26, playerId: 376}, {firstName: "Willie", lastName: "Reed", teamId: 13, playerId: 377}, {firstName: "Willy", lastName: "Hernangomez", teamId: 20, playerId: 378}, {firstName: "Wilson", lastName: "Chandler", teamId: 8, playerId: 379},  {firstName: "Yogi", lastName: "Ferrell", teamId: 7, playerId: 380}, {firstName: "Zach", lastName: "Collins", teamId: 25, playerId: 381},  {firstName: "Zach", lastName: "Randolph", teamId: 26, playerId: 382}, {firstName: "Zaza", lastName: "Pachulia", teamId: 10, playerId: 383}, {firstName: "Zhou", lastName: "Qi", teamId: 11, playerId: 384}];



module.exports = {players, teams, playTypes};