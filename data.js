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
        current: 1000,
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
    // TODAY'S PICKS - February 3, 2026
    // ═══════════════════════════════════════════════════════════════
    todaysPicks: [
        {
            id: 1,
            sport: "NBA",
            matchup: "76ers @ Warriors",
            time: "10:00 PM ET",
            pick: "Philadelphia 76ers +2.5",
            odds: -110,
            units: 2,
            conviction: 4,
            type: "daily",
            result: "PENDING",
            factors: [
                "STEPH CURRY OUT (knee) — massive",
                "Jimmy Butler season-ending injury hurt GSW",
                "76ers on 4-game win streak, beat LAC by 15",
                "Maxey/Embiid vs depleted Warriors",
                "PHI already beat GSW earlier this season"
            ],
            risk: "Road game at Chase Center"
        },
        {
            id: 2,
            sport: "NBA",
            matchup: "Nuggets @ Pistons",
            time: "7:00 PM ET",
            pick: "Detroit Pistons -6",
            odds: -110,
            units: 1.5,
            conviction: 3,
            type: "daily",
            result: "PENDING",
            factors: [
                "Pistons 36-12, best record in East",
                "Detroit 7-1 ATS last 8 February games",
                "Pistons 20-5 at home with elite D (109.7 PPG allowed)",
                "Nuggets 0-5 SU last 5 games in Detroit"
            ],
            risk: "Jokic can always go off"
        },
        {
            id: 3,
            sport: "NBA",
            matchup: "Celtics @ Mavericks",
            time: "8:00 PM ET",
            pick: "Dallas Mavericks +8",
            odds: -110,
            units: 1,
            conviction: 3,
            type: "daily",
            result: "PENDING",
            factors: [
                "Mavs 7-3 ATS last 10 games",
                "8 points is too many for home team",
                "Cooper Flagg averaging 19.8 PPG rookie year",
                "Home dog value at AAC"
            ],
            risk: "Celtics can blow out anyone"
        },
        {
            id: 4,
            sport: "NHL",
            matchup: "Sabres @ Lightning",
            time: "7:30 PM ET",
            pick: "Buffalo Sabres ML",
            odds: 195,
            units: 1,
            conviction: 2,
            type: "daily",
            result: "PENDING",
            factors: [
                "VALUE PLAY — Dimers model shows 3.3% edge",
                "Sabres 32-18-5, solid road team",
                "Buffalo 5th best offense (3.4 GPG)",
                "Good underdog price at +195"
            ],
            risk: "Tampa at home is tough"
        },
        {
            id: 5,
            sport: "NHL",
            matchup: "Senators @ Hurricanes",
            time: "7:00 PM ET",
            pick: "Ottawa Senators ML",
            odds: 145,
            units: 1,
            conviction: 2,
            type: "daily",
            result: "PENDING",
            factors: [
                "Senators on 4-game win streak",
                "Outscored opponents 19-6 in last 4",
                "Giroux coming off game-winning goal",
                "Riding the hot hand"
            ],
            risk: "Carolina tough at home"
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // WEEKLY PICKS - February 2-8, 2026
    // ═══════════════════════════════════════════════════════════════
    weeklyPicks: [
        {
            id: 101,
            sport: "NFL",
            matchup: "Patriots vs Seahawks",
            time: "Feb 8, 6:30 PM ET",
            venue: "Super Bowl LX — Levi's Stadium",
            pick: "New England Patriots +4.5",
            odds: -110,
            units: 3,
            conviction: 4,
            type: "max",
            factors: [
                "Underdogs 5-0 ATS in last 5 Super Bowls",
                "Mike Vrabel: 3x SB champ as player, elite coach",
                "Drake Maye Year 2 leap is real — 4,000 yds, 35 TDs",
                "Sharp money on Patriots, public on Seahawks"
            ],
            risk: "Seahawks getting 80% of public action"
        },
        {
            id: 102,
            sport: "UFC",
            matchup: "Bautista vs Oliveira",
            time: "Feb 7, 9:00 PM ET",
            venue: "UFC Fight Night 266",
            pick: "Mario Bautista ML",
            odds: 135,
            units: 1.5,
            conviction: 3,
            type: "weekly",
            factors: [
                "Bautista 16-3, only loss to Umar Nurmagomedov",
                "Beat Jose Aldo and Patchy Mix — elite wins",
                "Oliveira 23-3 but level of competition lower",
                "Value at +135 for proven elite fighter"
            ],
            risk: "Oliveira has submission threat"
        },
        {
            id: 103,
            sport: "UFC",
            matchup: "Albazi vs Horiguchi",
            time: "Feb 7, 9:00 PM ET",
            venue: "UFC Fight Night 266 — Co-Main",
            pick: "Kyoji Horiguchi ML",
            odds: -180,
            units: 2,
            conviction: 5,
            type: "max",
            factors: [
                "Horiguchi 35-5, former Bellator/RIZIN double champ",
                "Just submitted Ulanbekov — first ever to finish him",
                "Albazi sat out ALL of 2025 — massive ring rust",
                "Albazi had heart surgery, conditioning concerns"
            ],
            risk: "Heavy juice at -180, consider parlay"
        },
        {
            id: 104,
            sport: "NBA",
            matchup: "Lakers vs Warriors",
            time: "Feb 7, 8:30 PM ET",
            venue: "ABC Saturday Night",
            pick: "Los Angeles Lakers -3",
            odds: -110,
            units: 2,
            conviction: 4,
            type: "weekly",
            factors: [
                "Luka/LeBron duo on fire — Luka 5 of 6 games 30+ pts",
                "Warriors inconsistent, Steph can't do it alone",
                "Lakers 29-19 vs Warriors falling",
                "National TV game — stars show up"
            ],
            risk: "Warriors always dangerous at home"
        },
        {
            id: 105,
            sport: "Soccer",
            matchup: "Liverpool vs Man City",
            time: "Feb 8, 11:30 AM ET",
            venue: "EPL Matchweek 25",
            pick: "Liverpool ML",
            odds: -125,
            units: 1.5,
            conviction: 4,
            type: "weekly",
            factors: [
                "Liverpool defending champs, Arsenal 6 pts ahead in title race",
                "Man City struggling under Guardiola rebuild",
                "Liverpool at Anfield — fortress",
                "Must-win for Liverpool's title hopes"
            ],
            risk: "City always dangerous in big games"
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // MAX PLAYS - Highest Conviction (5% bankroll = $50)
    // ═══════════════════════════════════════════════════════════════
    maxPlays: [
        {
            id: 201,
            sport: "NBA",
            matchup: "76ers @ Warriors",
            time: "Feb 3, 10:00 PM ET",
            pick: "Philadelphia 76ers +2.5",
            odds: -110,
            units: 2.5,
            conviction: 4,
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
            matchup: "Patriots vs Seahawks",
            time: "Feb 8, 6:30 PM ET",
            pick: "Patriots +4.5 (Super Bowl)",
            odds: -110,
            units: 2.5,
            conviction: 4,
            factors: [
                "SB underdogs 5-0 ATS last 5 years",
                "Vrabel coaching masterclass incoming",
                "Public hammering Seattle = value on NE",
                "Drake Maye is the real deal"
            ]
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // PARLAYS - February 3, 2026
    // ═══════════════════════════════════════════════════════════════
    parlays: {
        safe: {
            name: "🔒 SAFE PARLAY",
            odds: "+260",
            wager: 20,
            payout: 72,
            legs: [
                { pick: "76ers +2.5", odds: -110, game: "PHI @ GSW" },
                { pick: "Pistons -6", odds: -110, game: "DEN @ DET" },
                { pick: "Celtics ML", odds: -350, game: "BOS @ DAL" }
            ]
        },
        value: {
            name: "💰 VALUE PARLAY",
            odds: "+580",
            wager: 15,
            payout: 102,
            legs: [
                { pick: "76ers +2.5", odds: -110, game: "PHI @ GSW" },
                { pick: "Mavericks +8", odds: -110, game: "BOS @ DAL" },
                { pick: "Senators ML", odds: 145, game: "OTT @ CAR" }
            ]
        },
        risky: {
            name: "🎰 LONGSHOT PARLAY",
            odds: "+1850",
            wager: 10,
            payout: 195,
            legs: [
                { pick: "Sabres ML", odds: 195, game: "BUF @ TB" },
                { pick: "Senators ML", odds: 145, game: "OTT @ CAR" },
                { pick: "76ers ML", odds: 115, game: "PHI @ GSW" },
                { pick: "Mavericks +8", odds: -110, game: "BOS @ DAL" }
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
            units: 1,
            conviction: 4,
            reasoning: "Dropped 29 last night, Curry OUT means less defensive attention, been averaging 28+ last 5 games"
        },
        {
            player: "Joel Embiid",
            team: "PHI",
            game: "76ers @ Warriors",
            prop: "Over 11.5 Rebounds",
            odds: -110,
            units: 1,
            conviction: 3,
            reasoning: "GSW weak interior without Lively, Embiid should feast on boards"
        },
        {
            player: "Cade Cunningham",
            team: "DET",
            game: "Nuggets @ Pistons",
            prop: "Over 7.5 Assists",
            odds: -120,
            units: 1,
            conviction: 3,
            reasoning: "Averaging 9.2 assists at home, Pistons move the ball well"
        },
        {
            player: "Nikola Jokic",
            team: "DEN",
            game: "Nuggets @ Pistons",
            prop: "Triple Double YES",
            odds: 180,
            units: 0.5,
            conviction: 2,
            reasoning: "Jokic has 8 triple doubles this season, always a threat"
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
