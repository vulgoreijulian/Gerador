// BANCO DE DADOS DE JOGADORES (OVR 80+)
const PLAYERS_DB = [
  // GUARDA-REDES / GOLEIROS (GOL)
  { id: 1, name: "Thibaut Courtois", pos: "GOL", ovr: 90, club: "Real Madrid", league: "La Liga", flag: "🇪🇸" },
  { id: 2, name: "Alisson Becker", pos: "GOL", ovr: 89, club: "Liverpool", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 3, name: "Ederson", pos: "GOL", ovr: 88, club: "Man City", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 4, name: "Jan Oblak", pos: "GOL", ovr: 88, club: "Atlético Madrid", league: "La Liga", flag: "🇪🇸" },
  { id: 5, name: "Emiliano Martínez", pos: "GOL", ovr: 87, club: "Aston Villa", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 6, name: "Manuel Neuer", pos: "GOL", ovr: 87, club: "Bayern München", league: "Bundesliga", flag: "🇩🇪" },
  { id: 7, name: "Yassine Bounou", pos: "GOL", ovr: 85, club: "Al Hilal", league: "Saudi Pro League", flag: "🇸🇦" },

  // DEFESAS / ZAGUEIROS E LATERAIS (DEF)
  { id: 8, name: "Virgil van Dijk", pos: "ZAG", ovr: 89, club: "Liverpool", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 9, name: "Ruben Dias", pos: "ZAG", ovr: 88, club: "Man City", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 10, name: "Marquinhos", pos: "ZAG", ovr: 87, club: "PSG", league: "Ligue 1", flag: "🇫🇷" },
  { id: 11, name: "Antonio Rüdiger", pos: "ZAG", ovr: 87, club: "Real Madrid", league: "La Liga", flag: "🇪🇸" },
  { id: 12, name: "Achraf Hakimi", pos: "LD", ovr: 86, club: "PSG", league: "Ligue 1", flag: "🇫🇷" },
  { id: 13, name: "Kyle Walker", pos: "LD", ovr: 84, club: "Man City", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 14, name: "Trent Alexander-Arnold", pos: "LD", ovr: 86, club: "Liverpool", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 15, name: "Alphonso Davies", pos: "LE", ovr: 83, club: "Bayern München", league: "Bundesliga", flag: "🇩🇪" },
  { id: 16, name: "Theo Hernández", pos: "LE", ovr: 85, club: "AC Milan", league: "Serie A", flag: "🇮🇹" },
  { id: 17, name: "Éder Militão", pos: "ZAG", ovr: 85, club: "Real Madrid", league: "La Liga", flag: "🇪🇸" },
  { id: 18, name: "Gabriel Magalhães", pos: "ZAG", ovr: 86, club: "Arsenal", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },

  // MÉDIOS / MEIO-CAMPISTAS (MEI)
  { id: 19, name: "Kevin De Bruyne", pos: "MC", ovr: 90, club: "Man City", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 20, name: "Jude Bellingham", pos: "MEI", ovr: 90, club: "Real Madrid", league: "La Liga", flag: "🇪🇸" },
  { id: 21, name: "Rodri", pos: "VOL", ovr: 91, club: "Man City", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 22, name: "Federico Valverde", pos: "MC", ovr: 88, club: "Real Madrid", league: "La Liga", flag: "🇪🇸" },
  { id: 23, name: "Luka Modrić", pos: "MC", ovr: 86, club: "Real Madrid", league: "La Liga", flag: "🇪🇸" },
  { id: 24, name: "Bernardo Silva", pos: "MEI", ovr: 88, club: "Man City", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 25, name: "Bruno Fernandes", pos: "MEI", ovr: 87, club: "Man United", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 26, name: "Pedri", pos: "MC", ovr: 86, club: "Barcelona", league: "La Liga", flag: "🇪🇸" },
  { id: 27, name: "Jamal Musiala", pos: "MEI", ovr: 87, club: "Bayern München", league: "Bundesliga", flag: "🇩🇪" },
  { id: 28, name: "Casemiro", pos: "VOL", ovr: 84, club: "Man United", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 29, name: "Bruno Guimarães", pos: "VOL", ovr: 85, club: "Newcastle", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 30, name: "De Arrascaeta", pos: "MEI", ovr: 81, club: "Flamengo", league: "Brasileirão", flag: "🇧🇷" },
  { id: 31, name: "Pedro Chirivella", pos: "VOL", ovr: 80, club: "FC Nantes", league: "Ligue 1", flag: "🇫🇷" },
  { id: 32, name: "James Rodríguez", pos: "MEI", ovr: 80, club: "Rayo Vallecano", league: "La Liga", flag: "🇪🇸" },

  // AVANÇADOS / ATACANTES (ATA)
  { id: 33, name: "Lionel Messi", pos: "SA", ovr: 90, club: "Inter Miami", league: "MLS", flag: "🇺🇸" },
  { id: 34, name: "Cristiano Ronaldo", pos: "ATA", ovr: 90, club: "Al Nassr", league: "Saudi Pro League", flag: "🇸🇦" },
  { id: 35, name: "Kylian Mbappé", pos: "PE", ovr: 91, club: "Real Madrid", league: "La Liga", flag: "🇪🇸" },
  { id: 36, name: "Erling Haaland", pos: "ATA", ovr: 91, club: "Man City", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 37, name: "Vinícius Jr.", pos: "PE", ovr: 90, club: "Real Madrid", league: "La Liga", flag: "🇪🇸" },
  { id: 38, name: "Mohamed Salah", pos: "PD", ovr: 89, club: "Liverpool", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 39, name: "Harry Kane", pos: "ATA", ovr: 90, club: "Bayern München", league: "Bundesliga", flag: "🇩🇪" },
  { id: 40, name: "Neymar Jr.", pos: "MEI", ovr: 89, club: "Al Hilal", league: "Saudi Pro League", flag: "🇸🇦" },
  { id: 41, name: "Robert Lewandowski", pos: "ATA", ovr: 88, club: "Barcelona", league: "La Liga", flag: "🇪🇸" },
  { id: 42, name: "Lautaro Martínez", pos: "ATA", ovr: 89, club: "Inter Milan", league: "Serie A", flag: "🇮🇹" },
  { id: 43, name: "Victor Osimhen", pos: "ATA", ovr: 87, club: "Galatasaray", league: "Süper Lig", flag: "🇹🇷" },
  { id: 44, name: "Rodrygo", pos: "PD", ovr: 85, club: "Real Madrid", league: "La Liga", flag: "🇪🇸" },
  { id: 45, name: "Raphinha", pos: "PD", ovr: 84, club: "Barcelona", league: "La Liga", flag: "🇪🇸" },
  { id: 46, name: "Lamine Yamal", pos: "PD", ovr: 83, club: "Barcelona", league: "La Liga", flag: "🇪🇸" },
  { id: 47, name: "Endrick", pos: "ATA", ovr: 80, club: "Real Madrid", league: "La Liga", flag: "🇪🇸" },
  { id: 48, name: "Son Heung-min", pos: "PE", ovr: 87, club: "Tottenham", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }
];

// COORDENADAS TÁTICAS (PERCENTAGEM X, Y)
const FORMATIONS