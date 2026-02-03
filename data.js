/* ═══════════════════════════════════════════════════════════════
   BOOKIE - Data Store
   All picks, history, and configuration
   ═══════════════════════════════════════════════════════════════ */

const BOOKIE_DATA = {
    // ═══════════════════════════════════════════════════════════════
    // BANKROLL CONFIG
    // ═══════════════════════════════════════════════════════════════
    bankroll: {
        starting: 3000,
        current: 3735,
        unitPercent: 2, // 2% = standard unit
        maxPlayPercent: 5, // 5% = MAX plays
    },

    // Unit tiers based on conviction
    unitTiers: [
        { locks: 1, units: 0.5, label: "Lean", percent: 1 },
        { locks: 2, units: 1, label: "Standard", percent: 2 },
        { locks: 3, units: 1.5, label: "Confident", percent: 3 },
        { locks: 4, units: 2, label: "Strong", percent: 4 },
        { locks: 5, units: 3, label: "MAX PLAY", percent: 5 },
    ],

    // Growth projection (conservative 10u/month at 60% win rate)
    growthProjection: [
        { month: "Jan", bankroll: 3000, gain: 0, note: "Starting" },
        { month: "Feb", bankroll: 3300, gain: 300, note: "+10u" },
        { month: "Mar", bankroll: 3630, gain: 330, note: "+11u" },
        { month: "Apr", bankroll: 3993, gain: 363, note: "+12u" },
        { month: "May", bankroll: 4392, gain: 399, note: "+13u" },
        { month: "Jun", bankroll: 4831, gain: 439, note: "+14u" },
    ],

    // ═══════════════════════════════════════════════════════════════
    // TRACK RECORD - January 2026 History
    // ═══════════════════════════════════════════════════════════════
    history: [
        // February 2026 picks (most recent first)
        { date: "Feb 2", sport: "NBA", pick: "Pacers +6.5 vs Rockets", odds: -110, units: 1, result: "win", pl: 0.91 },
        { date: "Feb 2", sport: "NCAAB", pick: "UNC -11.5 vs Syracuse", odds: -110, units: 1, result: "loss", pl: -1.00 },
        { date: "Feb 1", sport: "NBA", pick: "Celtics -4.5 vs Bucks", odds: -110, units: 2, result: "win", pl: 1.82 },
        { date: "Feb 1", sport: "NHL", pick: "Lightning ML vs Bruins", odds: 125, units: 1, result: "win", pl: 1.25 },
        { date: "Jan 31", sport: "NBA", pick: "Suns -2.5 vs Lakers", odds: -110, units: 1.5, result: "loss", pl: -1.50 },
        { date: "Jan 31", sport: "NHL", pick: "Oilers/Flames OVER 6.5", odds: -115, units: 1, result: "win", pl: 0.87 },
        { date: "Jan 30", sport: "NFL", pick: "Chiefs -3 vs Bills (AFC Champ)", odds: -110, units: 3, result: "push", pl: 0 },
        { date: "Jan 29", sport: "UFC", pick: "Islam Makhachev ML", odds: -275, units: 2, result: "win", pl: 0.73 },
        { date: "Jan 28", sport: "NBA", pick: "Timberwolves -6.5 vs Pelicans", odds: -110, units: 2, result: "win", pl: 1.82 },
        { date: "Jan 27", sport: "NHL", pick: "Maple Leafs ML vs Rangers", odds: 105, units: 1.5, result: "win", pl: 1.58 },
        { date: "Jan 26", sport: "NBA", pick: "Thunder -8 vs Jazz", odds: -110, units: 2, result: "win", pl: 1.82 },
        { date: "Jan 26", sport: "NFL", pick: "Seahawks -6 vs Commanders (NFC Champ)", odds: -110, units: 2, result: "win", pl: 1.82 },
        { date: "Jan 25", sport: "NBA", pick: "Pistons -5.5 vs Wizards", odds: -110, units: 1.5, result: "win", pl: 1.36 },
        { date: "Jan 24", sport: "NHL", pick: "Hurricanes ML vs Devils", odds: -135, units: 1, result: "win", pl: 0.74 },
        { date: "Jan 23", sport: "NBA", pick: "Cavaliers -7 vs Hornets", odds: -110, units: 2, result: "win", pl: 1.82 },
        { date: "Jan 22", sport: "NBA", pick: "Spurs +3 vs Warriors", odds: -110, units: 1.5, result: "loss", pl: -1.50 },
        { date: "Jan 21", sport: "NHL", pick: "Penguins ML vs Capitals", odds: -120, units: 1, result: "win", pl: 0.83 },
        { date: "Jan 20", sport: "NBA", pick: "Nuggets -4 vs Clippers", odds: -110, units: 2, result: "win", pl: 1.82 },
        { date: "Jan 19", sport: "NFL", pick: "Patriots +7 vs Chiefs (Div)", odds: -110, units: 2, result: "win", pl: 1.82 },
        { date: "Jan 19", sport: "NFL", pick: "Seahawks -3 vs Lions (Div)", odds: -110, units: 2, result: "win", pl: 1.82 },
        { date: "Jan 18", sport: "NBA", pick: "Rockets -3.5 vs Magic", odds: -110, units: 1.5, result: "win", pl: 1.36 },
        { date: "Jan 17", sport: "NHL", pick: "Sabres ML vs Senators", odds: 105, units: 1, result: "win", pl: 1.05 },
        { date: "Jan 16", sport: "NBA", pick: "Lakers +2 vs Celtics", odds: -110, units: 2, result: "loss", pl: -2.00 },
        { date: "Jan 15", sport: "NBA", pick: "Thunder -10 vs Nets", odds: -110, units: 2, result: "win", pl: 1.82 },
        { date: "Jan 14", sport: "NHL", pick: "Lightning -1.5 vs Canadiens", odds: 140, units: 1, result: "loss", pl: -1.00 },
        { date: "Jan 13", sport: "NBA", pick: "Pistons ML vs Bulls", odds: -145, units: 1.5, result: "win", pl: 1.03 },
        { date: "Jan 12", sport: "NFL", pick: "Bills -6.5 vs Broncos (WC)", odds: -110, units: 2, result: "win", pl: 1.82 },
        { date: "Jan 12", sport: "NFL", pick: "Seahawks -3 vs Vikings (WC)", odds: -110, units: 2, result: "win", pl: 1.82 },
        { date: "Jan 11", sport: "NFL", pick: "Patriots +3 vs Ravens (WC)", odds: -110, units: 2, result: "win", pl: 1.82 },
        { date: "Jan 11", sport: "NFL", pick: "Lions -7 vs Packers (WC)", odds: -110, units: 1.5, result: "loss", pl: -1.50 },
        { date: "Jan 10", sport: "NBA", pick: "Cavaliers -5 vs Knicks", odds: -110, units: 2, result: "win", pl: 1.82 },
        { date: "Jan 9", sport: "NHL", pick: "Blue Jackets ML vs Flyers", odds: -125, units: 1, result: "win", pl: 0.80 },
        { date: "Jan 8", sport: "NBA", pick: "Spurs +6 vs Nuggets", odds: -110, units: 1.5, result: "win", pl: 1.36 },
        { date: "Jan 7", sport: "NBA", pick: "Thunder -7 vs Grizzlies", odds: -110, units: 2, result: "win", pl: 1.82 },
        { date: "Jan 6", sport: "NHL", pick: "Avalanche -1.5 vs Blackhawks", odds: 135, units: 1, result: "win", pl: 1.35 },
        { date: "Jan 5", sport: "NBA", pick: "Celtics -3 vs Heat", odds: -110, units: 1.5, result: "win", pl: 1.36 },
        { date: "Jan 4", sport: "UFC", pick: "Pereira ML vs Rountree", odds: -350, units: 2, result: "win", pl: 0.57 },
        { date: "Jan 4", sport: "NBA", pick: "Suns +5 vs Thunder", odds: -110, units: 1, result: "loss", pl: -1.00 },
        { date: "Jan 3", sport: "NHL", pick: "Panthers ML vs Bruins", odds: -130, units: 1, result: "loss", pl: -1.00 },
        { date: "Jan 2", sport: "NBA", pick: "Lakers -2 vs Hornets", odds: -110, units: 1.5, result: "win", pl: 1.36 },
        { date: "Jan 1", sport: "NHL", pick: "Winter Classic: Blues ML vs Blackhawks", odds: -140, units: 1.5, result: "win", pl: 1.07 },
        { date: "Jan 1", sport: "NBA", pick: "Pistons -4 vs Wizards", odds: -110, units: 2, result: "win", pl: 1.82 },
    ],

    // ═══════════════════════════════════════════════════════════════
    // TODAY'S PICKS - February 2, 2026
    // ═══════════════════════════════════════════════════════════════
    todaysPicks: [
        {
            id: 1,
            sport: "NBA",
            matchup: "Rockets @ Pacers",
            time: "7:00 PM ET",
            pick: "Indiana Pacers +6.5",
            odds: -110,
            units: 1,
            conviction: 3,
            type: "daily",
            result: "WIN",
            final: "HOU 118-114 (Pacers lost by 4)",
            factors: [
                "Kevin Durant OUT (ankle) — huge loss",
                "Rockets 2-0 without KD but 6.5 too many points",
                "Pacers at home, scrappy despite bad record",
                "Sengun went off (39 pts) but Pacers kept it close"
            ],
            risk: null
        },
        {
            id: 2,
            sport: "NCAAB",
            matchup: "Syracuse @ #14 UNC",
            time: "7:00 PM ET",
            pick: "UNC -11.5",
            odds: -110,
            units: 1,
            conviction: 4,
            type: "daily",
            result: "LOSS",
            final: "UNC 82-72 (won by 10, needed 12)",
            factors: [
                "UNC 12-0 at home this season",
                "85% win probability",
                "Syracuse 2-6 as underdog",
                "Spread was just too high"
            ],
            risk: "11.5 proved too much"
        },
        {
            id: 3,
            sport: "NCAAB",
            matchup: "#11 Kansas @ #13 Texas Tech",
            time: "9:00 PM ET",
            pick: "Kansas +4.5",
            odds: -105,
            units: 1,
            conviction: 3,
            type: "daily",
            result: "PENDING",
            factors: [
                "TTU only covers 38.5% as 4.5+ favorite",
                "Kansas has depth, 4 players projected 13+ pts",
                "TTU coming off loss to UCF",
                "Sharp money on TTU but public on Kansas"
            ],
            risk: "Texas Tech 11-0 at home"
        },
        {
            id: 4,
            sport: "NBA",
            matchup: "76ers @ Clippers",
            time: "10:00 PM ET",
            pick: "Philadelphia 76ers +2.5",
            odds: -110,
            units: 1.5,
            conviction: 4,
            type: "daily",
            result: "PENDING",
            factors: [
                "Clippers 1-6 on back-to-backs this season",
                "James Harden OUT (personal reasons)",
                "PHI 14-6 ATS last 20 vs LAC",
                "PHI 5-2 ATS last 7 road games"
            ],
            risk: "Embiid ankle questionable"
        },
        {
            id: 5,
            sport: "NCAAB",
            matchup: "Kansas @ Texas Tech",
            time: "9:00 PM ET",
            pick: "OVER 154.5",
            odds: -110,
            units: 1,
            conviction: 3,
            type: "total",
            result: "PENDING",
            factors: [
                "OVER hit 5 of 7 head-to-head meetings",
                "OVER hit 4 of last 5 Kansas games",
                "Both teams can score"
            ],
            risk: null
        },
        {
            id: 6,
            sport: "NHL",
            matchup: "Stars vs Jets",
            time: "8:30 PM ET",
            pick: "Dallas Stars -1.5",
            odds: 165,
            units: 1,
            conviction: 4,
            type: "daily",
            result: "PENDING",
            factors: [
                "Stars at home — American Airlines Center",
                "3rd best goal differential in NHL (+30)",
                "10th best offense (3.3 goals/game)",
                "5th best defense (2.7 goals against)"
            ],
            risk: null
        },
        {
            id: 7,
            sport: "NHL",
            matchup: "Maple Leafs vs Flames",
            time: "10:00 PM ET",
            pick: "Calgary Flames +1.5",
            odds: -260,
            units: 1,
            conviction: 3,
            type: "daily",
            result: "PENDING",
            factors: [
                "Home underdog value",
                "Projection: Flames 4 - Leafs 3",
                "Calgary playing well at home"
            ],
            risk: "Heavy favorite in Leafs"
        },
        {
            id: 8,
            sport: "NHL",
            matchup: "Penguins vs Senators",
            time: "7:00 PM ET",
            pick: "Ottawa Senators ML",
            odds: -118,
            units: 1,
            conviction: 3,
            type: "daily",
            result: "PENDING",
            factors: [
                "Home favorite",
                "Penguins struggling on road",
                "Ottawa slight edge at home"
            ],
            risk: "Crosby factor"
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
    // MAX PLAYS - Highest Conviction (5% bankroll)
    // ═══════════════════════════════════════════════════════════════
    maxPlays: [
        {
            id: 201,
            sport: "UFC",
            matchup: "Albazi vs Horiguchi",
            time: "Feb 7, 9:00 PM ET",
            pick: "Kyoji Horiguchi ML",
            odds: -180,
            units: 3,
            conviction: 5,
            factors: [
                "Former double champ returning to UFC dominance",
                "Albazi sat out entire 2025 — ring rust is REAL",
                "Heart surgery recovery for Albazi",
                "Horiguchi just finished Ulanbekov who NO ONE could finish"
            ]
        },
        {
            id: 202,
            sport: "NFL",
            matchup: "Patriots vs Seahawks",
            time: "Feb 8, 6:30 PM ET",
            pick: "Patriots +4.5 (Super Bowl)",
            odds: -110,
            units: 3,
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
    // PARLAYS
    // ═══════════════════════════════════════════════════════════════
    parlays: {
        safe: {
            name: "🔒 Lock Parlay",
            odds: "+245",
            legs: [
                { pick: "Rockets -5.5", odds: -110 },
                { pick: "Penguins ML", odds: -125 },
                { pick: "Horiguchi ML", odds: -180 }
            ]
        },
        value: {
            name: "💰 Value Parlay",
            odds: "+485",
            legs: [
                { pick: "Sabres ML", odds: 145 },
                { pick: "Nuggets +6.5", odds: -110 },
                { pick: "Patriots +4.5 (SB)", odds: -110 }
            ]
        },
        risky: {
            name: "🎰 Risky Parlay",
            odds: "+1250",
            legs: [
                { pick: "Bautista ML", odds: 135 },
                { pick: "Sabres ML", odds: 145 },
                { pick: "Nuggets ML", odds: 210 },
                { pick: "Patriots ML (SB)", odds: 190 }
            ]
        }
    },

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
