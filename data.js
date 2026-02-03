/* ═══════════════════════════════════════════════════════════════
   BOOKIE - Data Store
   All picks, history, and configuration
   ═══════════════════════════════════════════════════════════════ */

const BOOKIE_DATA = {
    // ═══════════════════════════════════════════════════════════════
    // BANKROLL CONFIG - Starting Fresh Feb 3, 2026
    // ═══════════════════════════════════════════════════════════════
    bankroll: {
        starting: 1000,
        current: 1004,
        unitPercent: 2, // 1 unit = $20 (2% of $1000)
        maxPlayPercent: 5, // MAX plays = $50 (5%)
    },

    // Unit tiers based on conviction (1u = $20)
    unitTiers: [
        { locks: 1, units: 0.5, label: "Lean", percent: 1, amount: 10 },
        { locks: 2, units: 1, label: "Standard", percent: 2, amount: 20 },
        { locks: 3, units: 1.5, label: "Confident", percent: 3, amount: 30 },
        { locks: 4, units: 2, label: "Strong", percent: 4, amount: 40 },
        { locks: 5, units: 2.5, label: "MAX PLAY", percent: 5, amount: 50 },
    ],

    // Growth projection (conservative 8u/month at 55% win rate)
    growthProjection: [
        { month: "Feb", bankroll: 1000, gain: 0, note: "Starting" },
        { month: "Mar", bankroll: 1160, gain: 160, note: "+8u" },
        { month: "Apr", bankroll: 1345, gain: 185, note: "+8u" },
        { month: "May", bankroll: 1560, gain: 215, note: "+8u" },
        { month: "Jun", bankroll: 1810, gain: 250, note: "+8u" },
        { month: "Jul", bankroll: 2100, gain: 290, note: "+8u" },
    ],

    // ═══════════════════════════════════════════════════════════════
    // TRACK RECORD - Fresh Start Feb 2, 2026
    // ═══════════════════════════════════════════════════════════════
    history: [
        // February 2, 2026 - DAY 1 (4-4)
        { date: "Feb 2", sport: "NHL", pick: "Senators ML", odds: -118, units: 1, result: "win", pl: 0.85,
          team1: "OTT", score1: 3, team2: "PIT", score2: 2, picked: "OTT" },
        { date: "Feb 2", sport: "NHL", pick: "Flames +1.5", odds: -260, units: 1, result: "loss", pl: -1.00,
          team1: "TOR", score1: 4, team2: "CGY", score2: 2, picked: "CGY" },
        { date: "Feb 2", sport: "NHL", pick: "Stars -1.5", odds: 165, units: 1, result: "loss", pl: -1.00,
          team1: "DAL", score1: 4, team2: "WPG", score2: 3, picked: "DAL" },
        { date: "Feb 2", sport: "NBA", pick: "76ers +2.5", odds: -110, units: 1.5, result: "win", pl: 1.36,
          team1: "PHI", score1: 128, team2: "LAC", score2: 113, picked: "PHI" },
        { date: "Feb 2", sport: "NCAAB", pick: "OVER 154.5", odds: -110, units: 1, result: "loss", pl: -1.00,
          team1: "KU", score1: 64, team2: "TTU", score2: 61, picked: "OVER" },
        { date: "Feb 2", sport: "NCAAB", pick: "Kansas +4.5", odds: -105, units: 1, result: "win", pl: 0.95,
          team1: "KU", score1: 64, team2: "TTU", score2: 61, picked: "KU" },
        { date: "Feb 2", sport: "NBA", pick: "Pacers +6.5", odds: -110, units: 1, result: "win", pl: 0.91,
          team1: "HOU", score1: 118, team2: "IND", score2: 114, picked: "IND" },
        { date: "Feb 2", sport: "NCAAB", pick: "UNC -11.5", odds: -110, units: 1, result: "loss", pl: -1.00,
          team1: "UNC", score1: 82, team2: "SYR", score2: 72, picked: "UNC" },
    ],

    // ═══════════════════════════════════════════════════════════════
    // TODAY'S PICKS - February 3, 2026 (FULL SLATE)
    // ═══════════════════════════════════════════════════════════════
    todaysPicks: [
        // NBA PICKS
        {
            id: 1,
            sport: "NBA",
            away: "PHI",
            home: "GSW",
            time: "10:00 PM ET",
            pick: "76ers +2.5",
            odds: -110,
            units: 2,
            conviction: 4,
            factors: [
                "STEPH CURRY OUT (knee) — massive",
                "Jimmy Butler season-ending injury hurt GSW",
                "76ers on 4-game win streak, beat LAC by 15",
                "Maxey/Embiid vs depleted Warriors"
            ]
        },
        {
            id: 2,
            sport: "NBA",
            away: "DEN",
            home: "DET",
            time: "7:00 PM ET",
            pick: "Pistons -6",
            odds: -110,
            units: 1.5,
            conviction: 3,
            factors: [
                "Pistons 36-12, best record in East",
                "Detroit 7-1 ATS last 8 February games",
                "Pistons 20-5 at home with elite D",
                "Nuggets 0-5 SU last 5 in Detroit"
            ]
        },
        {
            id: 3,
            sport: "NBA",
            away: "BOS",
            home: "DAL",
            time: "8:00 PM ET",
            pick: "Mavericks +8",
            odds: -110,
            units: 1,
            conviction: 3,
            factors: [
                "Mavs 7-3 ATS last 10 games",
                "8 points is too many for home team",
                "Cooper Flagg averaging 19.8 PPG",
                "Home dog value at AAC"
            ]
        },
        {
            id: 4,
            sport: "NBA",
            away: "MIA",
            home: "ATL",
            time: "7:30 PM ET",
            pick: "Heat -4.5",
            odds: -110,
            units: 1,
            conviction: 3,
            factors: [
                "Heat 27-24, Hawks 24-27",
                "Miami 29-21-1 ATS this season",
                "Heat 10-9 ATS when favored by 4.5+",
                "Butler replacement stepping up"
            ]
        },
        // NHL PICKS
        {
            id: 5,
            sport: "NHL",
            away: "BUF",
            home: "TB",
            time: "7:30 PM ET",
            pick: "Sabres ML",
            odds: 195,
            units: 1,
            conviction: 2,
            factors: [
                "VALUE PLAY — 3.3% model edge",
                "Sabres 32-18-5, solid road team",
                "Buffalo 5th best offense (3.4 GPG)",
                "Good underdog price"
            ]
        },
        {
            id: 6,
            sport: "NHL",
            away: "OTT",
            home: "CAR",
            time: "7:00 PM ET",
            pick: "Senators ML",
            odds: 145,
            units: 1,
            conviction: 2,
            factors: [
                "Senators on 4-game win streak",
                "Outscored opponents 19-6 in last 4",
                "Giroux coming off GWG",
                "Riding the hot hand"
            ]
        },
        {
            id: 7,
            sport: "NHL",
            away: "TOR",
            home: "EDM",
            time: "9:00 PM ET",
            pick: "UNDER 6.5",
            odds: -115,
            units: 1,
            conviction: 3,
            factors: [
                "Both teams tightening up before Olympic break",
                "Sharp money on Under",
                "Woll/Skinner both playing well",
                "Low-scoring recent meetings"
            ]
        },
        // NCAAB PICKS
        {
            id: 8,
            sport: "NCAAB",
            away: "DRAKE",
            home: "BEL",
            time: "8:00 PM ET",
            pick: "Belmont -7.5",
            odds: -110,
            units: 1,
            conviction: 3,
            factors: [
                "Belmont 19-3 at home",
                "Drake 12-10, struggling on road",
                "Belmont 8-2 ATS last 10",
                "Home court advantage huge"
            ]
        },
        {
            id: 9,
            sport: "NCAAB",
            away: "NCST",
            home: "SMU",
            time: "9:00 PM ET",
            pick: "SMU -4.5",
            odds: -110,
            units: 1,
            conviction: 3,
            factors: [
                "SMU 17-7, strong at home (10-2)",
                "NC State 12-12, struggling on road",
                "SMU 7-3 ATS as home favorite",
                "Mustangs defense top 30 nationally"
            ]
        },
        {
            id: 10,
            sport: "NCAAB",
            away: "RUT",
            home: "UCLA",
            time: "9:30 PM ET",
            pick: "UCLA -6.5",
            odds: -110,
            units: 1.5,
            conviction: 4,
            factors: [
                "UCLA 16-8, dominant at Pauley (11-2)",
                "Rutgers 13-11, poor road record (3-7)",
                "Bruins 8-2 ATS at home this year",
                "Big Ten West Coast trip tough for Rutgers"
            ]
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // WEEKLY PICKS - February 3-8, 2026 (SUPER BOWL WEEK)
    // ═══════════════════════════════════════════════════════════════
    weeklyPicks: [
        // SUPER BOWL LX - FEBRUARY 8
        {
            id: 101,
            sport: "NFL",
            away: "NE",
            home: "SEA",
            time: "Feb 8, 6:30 PM ET",
            venue: "SUPER BOWL LX — Levi's Stadium",
            pick: "Patriots +4.5",
            odds: -110,
            units: 2.5,
            conviction: 4,
            factors: [
                "Underdogs 5-0 ATS in last 5 Super Bowls",
                "Mike Vrabel: 3x SB champ as player",
                "Drake Maye Year 2 — 4,000 yds, 35 TDs",
                "Sharp money on Pats, public on Seattle"
            ]
        },
        {
            id: 102,
            sport: "NFL",
            away: "NE",
            home: "SEA",
            time: "Feb 8, 6:30 PM ET",
            venue: "SUPER BOWL LX — Total",
            pick: "UNDER 45.5",
            odds: -108,
            units: 1.5,
            conviction: 4,
            factors: [
                "Both teams have elite defenses",
                "Line dropped from 46.5 opener",
                "Sharp money hammering Under",
                "Big game = tight game"
            ]
        },
        {
            id: 103,
            sport: "NFL",
            away: "NE",
            home: "SEA",
            time: "Feb 8, 6:30 PM ET",
            venue: "SUPER BOWL LX — Prop",
            pick: "K. Walker U73.5 rush yds",
            odds: -115,
            units: 1,
            conviction: 4,
            factors: [
                "95% of bets on Under at BetMGM",
                "Line dropped from 78.5 opener",
                "Patriots elite run defense",
                "Most-bet prop of Super Bowl"
            ]
        },
        {
            id: 104,
            sport: "NFL",
            away: "NE",
            home: "SEA",
            time: "Feb 8, 6:30 PM ET",
            venue: "SUPER BOWL LX — Prop",
            pick: "Drake Maye O32.5 rush yds",
            odds: -115,
            units: 1,
            conviction: 3,
            factors: [
                "Maye is mobile, scrambles well",
                "Seattle D susceptible to QB runs",
                "32.5 is low for dual-threat QB",
                "Should hit this easily"
            ]
        },
        {
            id: 105,
            sport: "NFL",
            away: "NE",
            home: "SEA",
            time: "Feb 8, 6:30 PM ET",
            venue: "SUPER BOWL LX — Prop",
            pick: "Kayshon Boutte TD",
            odds: 310,
            units: 0.5,
            conviction: 2,
            factors: [
                "Boutte had 6 TDs in regular season",
                "+310 is great value",
                "Red zone threat",
                "Low risk, high reward"
            ]
        },
        // UFC FIGHT NIGHT 266 - FEBRUARY 7
        {
            id: 106,
            sport: "UFC",
            away: "UFC",
            home: "UFC",
            time: "Feb 7, 9:00 PM ET",
            venue: "UFC Fight Night 266 — Co-Main",
            pick: "Kyoji Horiguchi ML",
            odds: -180,
            units: 2,
            conviction: 5,
            factors: [
                "Horiguchi 35-5, former double champ",
                "Albazi sat out ALL of 2025",
                "Albazi had heart surgery",
                "Horiguchi just finished Ulanbekov"
            ]
        },
        {
            id: 107,
            sport: "UFC",
            away: "UFC",
            home: "UFC",
            time: "Feb 7, 9:00 PM ET",
            venue: "UFC Fight Night 266 — Main Event",
            pick: "Mario Bautista ML",
            odds: 135,
            units: 1.5,
            conviction: 3,
            factors: [
                "Bautista 16-3, elite wins",
                "Beat Aldo and Patchy Mix",
                "+135 is value",
                "Better all-around fighter"
            ]
        },
        // NCAAW - BIG GAMES
        {
            id: 108,
            sport: "NCAAW",
            away: "UCONN",
            home: "DEPAUL",
            time: "Feb 4, 8:00 PM ET",
            venue: "Big East Women's",
            pick: "UConn -24.5",
            odds: -110,
            units: 1,
            conviction: 3,
            factors: [
                "UConn 38-game win streak",
                "Sarah Strong dominating",
                "DePaul overmatched",
                "Huskies cover big spreads"
            ]
        },
        // NBA SATURDAY
        {
            id: 109,
            sport: "NBA",
            away: "LAL",
            home: "GSW",
            time: "Feb 7, 8:30 PM ET",
            venue: "ABC Saturday Night",
            pick: "Lakers -3",
            odds: -110,
            units: 1.5,
            conviction: 4,
            factors: [
                "Luka/LeBron duo on fire",
                "Warriors depleted without Curry",
                "National TV game",
                "Lakers rolling"
            ]
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // MAX PLAYS - Highest Conviction (5% bankroll = $50)
    // ═══════════════════════════════════════════════════════════════
    maxPlays: [
        {
            id: 201,
            sport: "NBA",
            away: "PHI",
            home: "GSW",
            time: "Feb 3, 10:00 PM ET",
            pick: "76ers +2.5",
            odds: -110,
            units: 2.5,
            conviction: 5,
            factors: [
                "STEPH CURRY OUT (knee) — game changer",
                "Jimmy Butler season-ending injury gutted GSW",
                "76ers on 4-game win streak, beat LAC by 15",
                "Maxey/Embiid combo vs depleted Warriors"
            ]
        },
        {
            id: 202,
            sport: "NFL",
            away: "NE",
            home: "SEA",
            time: "Feb 8, 6:30 PM ET",
            pick: "Patriots +4.5 (Super Bowl)",
            odds: -110,
            units: 2.5,
            conviction: 5,
            factors: [
                "SB underdogs 5-0 ATS last 5 years",
                "Vrabel coaching masterclass incoming",
                "Public hammering Seattle = value on NE",
                "Drake Maye is the real deal"
            ]
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // PARLAYS - February 3, 2026 (AGGRESSIVE)
    // ═══════════════════════════════════════════════════════════════
    parlays: {
        safe: {
            name: "🔒 CHALKY PARLAY",
            odds: "+285",
            wager: 25,
            payout: 96,
            legs: [
                { pick: "76ers +2.5", odds: -110, game: "PHI @ GSW" },
                { pick: "Pistons -6", odds: -110, game: "DEN @ DET" },
                { pick: "Heat -4.5", odds: -110, game: "MIA @ ATL" },
                { pick: "SMU -4.5", odds: -110, game: "NCST @ SMU" }
            ]
        },
        value: {
            name: "💰 VALUE PARLAY",
            odds: "+650",
            wager: 20,
            payout: 150,
            legs: [
                { pick: "76ers +2.5", odds: -110, game: "PHI @ GSW" },
                { pick: "UCLA -6.5", odds: -110, game: "RUT @ UCLA" },
                { pick: "Senators ML", odds: 145, game: "OTT @ CAR" },
                { pick: "Under 6.5", odds: -115, game: "TOR @ EDM" }
            ]
        },
        risky: {
            name: "🎰 MOON SHOT",
            odds: "+2800",
            wager: 10,
            payout: 290,
            legs: [
                { pick: "Sabres ML", odds: 195, game: "BUF @ TB" },
                { pick: "Senators ML", odds: 145, game: "OTT @ CAR" },
                { pick: "76ers ML", odds: 115, game: "PHI @ GSW" },
                { pick: "Mavericks +8", odds: -110, game: "BOS @ DAL" },
                { pick: "Belmont -7.5", odds: -110, game: "DRAKE @ BEL" }
            ]
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // PLAYER PROPS - February 3, 2026
    // ═══════════════════════════════════════════════════════════════
    playerProps: [
        {
            player: "Tyrese Maxey",
            team: "PHI",
            game: "76ers @ Warriors",
            prop: "Over 26.5 Points",
            odds: -115,
            units: 1.5,
            conviction: 4,
            reasoning: "Dropped 29 last night, Curry OUT, averaging 28+ last 5 games"
        },
        {
            player: "Trae Young",
            team: "ATL",
            game: "Heat @ Hawks",
            prop: "Over 24.5 Points",
            odds: -115,
            units: 1,
            conviction: 3,
            reasoning: "Trae averaging 26+ PPG, Heat allow 4th most PPG to opposing PGs"
        },
        {
            player: "Cade Cunningham",
            team: "DET",
            game: "Nuggets @ Pistons",
            prop: "Over 7.5 Assists",
            odds: -120,
            units: 1,
            conviction: 3,
            reasoning: "Averaging 9.2 assists at home, Pistons move ball well"
        },
        {
            player: "Nikola Jokic",
            team: "DEN",
            game: "Nuggets @ Pistons",
            prop: "Over 9.5 Assists",
            odds: -120,
            units: 1,
            conviction: 3,
            reasoning: "Averaging 10.2 APG, Pistons give up 27 APG to opponents"
        },
        {
            player: "Jaylen Brown",
            team: "BOS",
            game: "Celtics @ Mavericks",
            prop: "Over 28.5 Points",
            odds: -110,
            units: 1,
            conviction: 3,
            reasoning: "Averaging 29.4 PPG, no Tatum = more usage"
        },
        {
            player: "Cooper Flagg",
            team: "DAL",
            game: "Celtics @ Mavericks",
            prop: "Over 18.5 Points",
            odds: -115,
            units: 1,
            conviction: 3,
            reasoning: "Rookie of Year candidate, home game showcase"
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // NBA SCHEDULE - February 2026
    // ═══════════════════════════════════════════════════════════════
    nbaSchedule: [
        // Feb 2
        { date: "Feb 2", games: [
            { away: "Indiana Pacers", awayRecord: "13-36", home: "Houston Rockets", homeRecord: "30-17", time: "7:00 PM", spread: "HOU -5.5", ou: "228.5" },
            { away: "OKC Thunder", awayRecord: "38-11", home: "Denver Nuggets", homeRecord: "32-16", time: "9:00 PM", spread: "OKC -6.5", ou: "225" },
        ]},
        // Feb 3
        { date: "Feb 3", games: [
            { away: "Boston Celtics", awayRecord: "29-18", home: "Miami Heat", homeRecord: "24-25", time: "7:30 PM", spread: "BOS -4", ou: "216" },
            { away: "Detroit Pistons", awayRecord: "35-12", home: "Cleveland Cavaliers", homeRecord: "30-20", time: "7:00 PM", spread: "DET -1.5", ou: "223" },
        ]},
        // Feb 4
        { date: "Feb 4", games: [
            { away: "LA Lakers", awayRecord: "29-19", home: "San Antonio Spurs", homeRecord: "33-16", time: "8:00 PM", spread: "SAS -2", ou: "231" },
            { away: "Phoenix Suns", awayRecord: "29-19", home: "Golden State Warriors", homeRecord: "25-24", time: "10:00 PM", spread: "PHX -3", ou: "227" },
        ]},
        // Feb 5 - TRADE DEADLINE
        { date: "Feb 5", games: [
            { away: "Brooklyn Nets", awayRecord: "13-35", home: "OKC Thunder", homeRecord: "38-11", time: "8:00 PM", spread: "OKC -15", ou: "218" },
            { away: "Toronto Raptors", awayRecord: "30-20", home: "New York Knicks", homeRecord: "30-20", time: "7:30 PM", spread: "NYK -2.5", ou: "221" },
        ]},
        // Feb 7 - ABC Saturday
        { date: "Feb 7", games: [
            { away: "Houston Rockets", awayRecord: "30-17", home: "OKC Thunder", homeRecord: "38-11", time: "3:30 PM", spread: "OKC -5", ou: "219", tv: "ABC" },
            { away: "Golden State Warriors", awayRecord: "25-24", home: "LA Lakers", homeRecord: "29-19", time: "8:30 PM", spread: "LAL -3", ou: "229", tv: "ABC" },
        ]},
        // Feb 8 - Pre-All Star
        { date: "Feb 8", games: [
            { away: "New York Knicks", awayRecord: "30-20", home: "Boston Celtics", homeRecord: "29-18", time: "12:30 PM", spread: "BOS -3", ou: "218", tv: "ABC" },
        ]},
    ],

    // ═══════════════════════════════════════════════════════════════
    // UFC SCHEDULE - February 2026
    // ═══════════════════════════════════════════════════════════════
    ufcSchedule: [
        {
            date: "Feb 7",
            event: "UFC Fight Night 266",
            location: "Las Vegas, NV",
            mainEvent: "Mario Bautista vs Vinicius Oliveira",
            fights: [
                { weight: "Bantamweight", fighter1: "Mario Bautista (16-3)", fighter2: "Vinicius Oliveira (23-3)", type: "Main Event" },
                { weight: "Flyweight", fighter1: "Amir Albazi (17-2)", fighter2: "Kyoji Horiguchi (35-5)", type: "Co-Main" },
                { weight: "Heavyweight", fighter1: "Jailton Almeida (22-4)", fighter2: "Rizvan Kuniev", type: "Main Card" },
                { weight: "Bantamweight", fighter1: "Said Nurmagomedov", fighter2: "Javid Basharat", type: "Prelim" },
            ]
        },
        {
            date: "Feb 21",
            event: "UFC Fight Night 267",
            location: "Houston, TX",
            mainEvent: "Sean Strickland vs Anthony Hernandez",
            fights: [
                { weight: "Middleweight", fighter1: "Sean Strickland (29-7)", fighter2: "Anthony Hernandez (15-2)", type: "Main Event" },
                { weight: "Heavyweight", fighter1: "Serghei Spivac", fighter2: "Ante Delija", type: "Co-Main" },
                { weight: "Welterweight", fighter1: "Geoff Neal", fighter2: "Kevin Holland", type: "Main Card" },
            ]
        },
        {
            date: "Feb 28",
            event: "UFC Fight Night 268",
            location: "Mexico City",
            mainEvent: "Brandon Moreno vs Asu Almabayev",
            fights: [
                { weight: "Flyweight", fighter1: "Brandon Moreno (23-9-2)", fighter2: "Asu Almabayev (23-3)", type: "Main Event" },
                { weight: "Bantamweight", fighter1: "Marlon Vera", fighter2: "David Martinez", type: "Main Card" },
                { weight: "Lightweight", fighter1: "Daniel Zellhuber", fighter2: "King Green", type: "Main Card" },
            ]
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // NHL SCHEDULE - February 2026 (Pre-Olympic Break)
    // ═══════════════════════════════════════════════════════════════
    nhlSchedule: [
        { date: "Feb 1", games: [
            { away: "Los Angeles Kings", home: "Carolina Hurricanes", time: "3:00 PM" },
            { away: "Boston Bruins", home: "Tampa Bay Lightning", time: "6:30 PM", note: "STADIUM SERIES" },
            { away: "Vegas Golden Knights", home: "Anaheim Ducks", time: "9:30 PM" },
        ]},
        { date: "Feb 2", games: [
            { away: "Buffalo Sabres", home: "Florida Panthers", time: "7:00 PM" },
            { away: "Ottawa Senators", home: "Pittsburgh Penguins", time: "7:00 PM" },
            { away: "NY Islanders", home: "Washington Capitals", time: "7:00 PM" },
            { away: "Montreal Canadiens", home: "Minnesota Wild", time: "7:30 PM" },
        ]},
        { date: "Feb 3-5", note: "Final games before Olympic Break" },
        { date: "Feb 6-24", note: "NHL PAUSED FOR WINTER OLYMPICS (Milan, Italy)" },
        { date: "Feb 25", note: "NHL Season Resumes" },
    ],

    // ═══════════════════════════════════════════════════════════════
    // SOCCER SCHEDULE - February 2026
    // ═══════════════════════════════════════════════════════════════
    soccerSchedule: [
        { date: "Feb 1", league: "EPL", games: [
            { home: "Tottenham", away: "Man City", time: "11:30 AM ET" },
            { home: "Man Utd", away: "Fulham", time: "9:00 AM ET" },
        ]},
        { date: "Feb 7", league: "EPL", games: [
            { home: "Man Utd", away: "Tottenham", time: "7:30 AM ET", tv: "TNT" },
            { home: "Newcastle", away: "Brentford", time: "12:30 PM ET" },
        ]},
        { date: "Feb 8", league: "EPL", games: [
            { home: "Liverpool", away: "Man City", time: "11:30 AM ET", note: "TITLE DECIDER" },
        ]},
        { date: "Feb 22", league: "EPL", games: [
            { home: "Tottenham", away: "Arsenal", time: "11:30 AM ET", note: "NORTH LONDON DERBY" },
        ]},
    ],

    // ═══════════════════════════════════════════════════════════════
    // DJ'S HAND PICKS (Personal tracking)
    // ═══════════════════════════════════════════════════════════════
    djPicks: [],

    // ═══════════════════════════════════════════════════════════════
    // BET LOG (Personal bets placed)
    // ═══════════════════════════════════════════════════════════════
    betLog: []
};

// Calculate stats from history
function calculateStats() {
    const h = BOOKIE_DATA.history;
    const wins = h.filter(p => p.result === 'win').length;
    const losses = h.filter(p => p.result === 'loss').length;
    const pushes = h.filter(p => p.result === 'push').length;
    const total = wins + losses;
    const winRate = total > 0 ? ((wins / total) * 100).toFixed(1) : 0;
    const netUnits = h.reduce((sum, p) => sum + p.pl, 0).toFixed(2);

    return {
        total: h.length,
        wins,
        losses,
        pushes,
        winRate,
        netUnits,
        record: `${wins}-${losses}${pushes > 0 ? '-' + pushes : ''}`
    };
}

// Export for use
if (typeof module !== 'undefined') {
    module.exports = { BOOKIE_DATA, calculateStats };
}
