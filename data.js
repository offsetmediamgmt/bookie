/* ═══════════════════════════════════════════════════════════════
   BOOKIE - Data Store
   All picks, history, and configuration
   ═══════════════════════════════════════════════════════════════ */

const BOOKIE_DATA = {
    // ═══════════════════════════════════════════════════════════════
    // BANKROLL CONFIG - Updated Feb 5, 2026
    // ═══════════════════════════════════════════════════════════════
    bankroll: {
        starting: 1000,
        current: 939,
        unitPercent: 2, // 1 unit = $19 (2% of $939)
        maxPlayPercent: 5, // MAX plays = $47 (5%)
    },

    // Unit tiers based on conviction (1u = $19)
    unitTiers: [
        { locks: 1, units: 0.5, label: "Lean", percent: 1, amount: 9 },
        { locks: 2, units: 1, label: "Standard", percent: 2, amount: 19 },
        { locks: 3, units: 1.5, label: "Confident", percent: 3, amount: 28 },
        { locks: 4, units: 2, label: "Strong", percent: 4, amount: 38 },
        { locks: 5, units: 2.5, label: "MAX PLAY", percent: 5, amount: 47 },
    ],

    // Growth projection (conservative 8u/month at 55% win rate)
    growthProjection: [
        { month: "Feb", bankroll: 939, gain: -61, note: "Current" },
        { month: "Mar", bankroll: 1090, gain: 151, note: "+8u" },
        { month: "Apr", bankroll: 1265, gain: 175, note: "+8u" },
        { month: "May", bankroll: 1465, gain: 200, note: "+8u" },
        { month: "Jun", bankroll: 1695, gain: 230, note: "+8u" },
        { month: "Jul", bankroll: 1965, gain: 270, note: "+8u" },
    ],

    // ═══════════════════════════════════════════════════════════════
    // TRACK RECORD - Feb 2-5, 2026
    // ═══════════════════════════════════════════════════════════════
    history: [
        // February 4, 2026 - DAY 3 (4-1 valid bets, several voided)
        { date: "Feb 4", sport: "NBA", pick: "Knicks -5.5", odds: -110, units: 1.5, result: "win", pl: 1.36,
          team1: "NYK", score1: 134, team2: "DEN", score2: 127, picked: "NYK" },
        { date: "Feb 4", sport: "NBA", pick: "Celtics -2.5", odds: -110, units: 1.5, result: "win", pl: 1.36,
          team1: "BOS", score1: 114, team2: "HOU", score2: 93, picked: "BOS" },
        { date: "Feb 4", sport: "NBA", pick: "Thunder -9.5", odds: -110, units: 1.5, result: "loss", pl: -1.50,
          team1: "SAS", score1: 116, team2: "OKC", score2: 106, picked: "OKC" },
        { date: "Feb 4", sport: "NBA", pick: "Bucks -3.5", odds: -110, units: 1, result: "win", pl: 0.91,
          team1: "MIL", score1: 141, team2: "NOP", score2: 137, picked: "MIL" },
        { date: "Feb 4", sport: "NBA", pick: "Brunson O27.5 pts", odds: -115, units: 1, result: "win", pl: 0.87,
          team1: "NYK", score1: 134, team2: "DEN", score2: 127, picked: "OVER" },
        // February 3, 2026 - DAY 2 (4-6 straights, 3-2 props)
        { date: "Feb 3", sport: "NBA", pick: "76ers +2.5", odds: -102, units: 2, result: "win", pl: 1.96,
          team1: "PHI", score1: 113, team2: "GSW", score2: 94, picked: "PHI" },
        { date: "Feb 3", sport: "NCAAB", pick: "UCLA -12.5", odds: -138, units: 1.5, result: "win", pl: 1.09,
          team1: "UCLA", score1: 98, team2: "RUT", score2: 66, picked: "UCLA" },
        { date: "Feb 3", sport: "NCAAB", pick: "SMU +2.5", odds: -133, units: 1, result: "win", pl: 0.75,
          team1: "NCST", score1: 84, team2: "SMU", score2: 83, picked: "SMU" },
        { date: "Feb 3", sport: "NCAAB", pick: "Belmont -8.5", odds: -143, units: 1, result: "win", pl: 0.70,
          team1: "BEL", score1: 103, team2: "DRAKE", score2: 90, picked: "BEL" },
        { date: "Feb 3", sport: "NBA", pick: "Pistons -6.5", odds: 113, units: 1.5, result: "loss", pl: -1.50,
          team1: "DET", score1: 124, team2: "DEN", score2: 121, picked: "DET" },
        { date: "Feb 3", sport: "NBA", pick: "Heat -4.5", odds: 138, units: 1, result: "loss", pl: -1.00,
          team1: "ATL", score1: 127, team2: "MIA", score2: 115, picked: "MIA" },
        { date: "Feb 3", sport: "NBA", pick: "Mavs +8.5", odds: -137, units: 1, result: "loss", pl: -1.00,
          team1: "BOS", score1: 110, team2: "DAL", score2: 100, picked: "DAL" },
        { date: "Feb 3", sport: "NHL", pick: "Senators ML", odds: 148, units: 1, result: "loss", pl: -1.00,
          team1: "CAR", score1: 4, team2: "OTT", score2: 3, picked: "OTT" },
        { date: "Feb 3", sport: "NHL", pick: "Sabres ML", odds: 160, units: 1, result: "loss", pl: -1.00,
          team1: "TB", score1: 4, team2: "BUF", score2: 3, picked: "BUF" },
        { date: "Feb 3", sport: "NHL", pick: "UNDER 6.5", odds: 120, units: 1, result: "loss", pl: -1.00,
          team1: "TOR", score1: 5, team2: "EDM", score2: 2, picked: "UNDER" },
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
    // TODAY'S PICKS - February 5, 2026 (Trade Deadline Day!)
    // Real odds from ESPN/DraftKings - Updated 6:00 PM ET
    // ═══════════════════════════════════════════════════════════════
    todaysPicks: [
        // NBA PICKS
        {
            id: 1,
            sport: "NBA",
            away: "WAS",
            home: "DET",
            time: "7:00 PM ET",
            pick: "Wizards +14.5",
            odds: -112,
            units: 1.5,
            conviction: 4,
            factors: [
                "SHARP FADE: Sharps cautious on big spread",
                "Wizards 6-4 ATS last 10 games",
                "14.5 points is a LOT to cover",
                "Pistons 2-3 ATS in last 5 home games"
            ]
        },
        {
            id: 2,
            sport: "NBA",
            away: "PHI",
            home: "LAL",
            time: "10:30 PM ET",
            pick: "76ers +4.5",
            odds: -118,
            units: 2,
            conviction: 5,
            factors: [
                "SHARP PLAY: 71% of money on Philly",
                "76ers 4-1 ATS last 5 games",
                "7-4 ATS as 3.5+ point dogs this year",
                "Embiid & Maxey healthy and rolling"
            ]
        },
        {
            id: 3,
            sport: "NBA",
            away: "GSW",
            home: "PHX",
            time: "10:00 PM ET",
            pick: "Warriors +6.5",
            odds: -110,
            units: 1,
            conviction: 3,
            factors: [
                "Sharps taking Warriors as dogs",
                "Curry always dangerous on road",
                "Suns only 6-4 ATS last 10",
                "Warriors beat Suns 120-117 on Dec 28"
            ]
        },
        {
            id: 4,
            sport: "NBA",
            away: "CHI",
            home: "TOR",
            time: "7:30 PM ET",
            pick: "Bulls +8.5",
            odds: -115,
            units: 1,
            conviction: 3,
            factors: [
                "8.5 is a big spread for divisional game",
                "Bulls have covered 6 of last 10",
                "Raptors inconsistent as favorites",
                "Value on the dog"
            ]
        },
        // NHL PICKS - LAST DAY BEFORE OLYMPIC BREAK
        {
            id: 5,
            sport: "NHL",
            away: "FLA",
            home: "TB",
            time: "7:00 PM ET",
            pick: "Panthers ML",
            odds: +105,
            units: 1.5,
            conviction: 4,
            factors: [
                "SHARP PLAY: Money on Panthers as dogs",
                "Florida 5-1 in last 6 @ Tampa",
                "Panthers 37-13-4, best in NHL",
                "Rivalry game before Olympic break"
            ]
        },
        {
            id: 6,
            sport: "NHL",
            away: "CAR",
            home: "NYR",
            time: "7:00 PM ET",
            pick: "Hurricanes ML",
            odds: +115,
            units: 1.5,
            conviction: 4,
            factors: [
                "Slight sharp lean to Carolina",
                "Canes 35-15-4, elite road team (17-8)",
                "Rangers 4-6 ATS last 10, struggling",
                "Plus money value on better team"
            ]
        },
        {
            id: 7,
            sport: "NHL",
            away: "LAK",
            home: "VGK",
            time: "10:00 PM ET",
            pick: "UNDER 5.5",
            odds: -115,
            units: 1,
            conviction: 3,
            factors: [
                "Both teams elite defensively",
                "Kings allow only 2.5 goals/game",
                "Vegas 3-7 OVER last 10 (games going under)",
                "Playoff-style low-scoring affair"
            ]
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // SHARP VS PUBLIC DATA - February 5, 2026 (REAL DATA)
    // Sources: TheSpread.com, Action Network, FOX Sports
    // ═══════════════════════════════════════════════════════════════
    sharpData: [
        {
            id: 1, away: "WAS", home: "DET", pick: "Wizards +14.5",
            publicBets: 63, publicMoney: 52, sharpBets: 37, sharpMoney: 48,
            insight: "SHARP FADE: Public likes Pistons but sharps cautious on 14.5 spread - too many points to cover",
            insightType: "sharp",
            source: "TheSpread.com"
        },
        {
            id: 2, away: "PHI", home: "LAL", pick: "76ers +4.5",
            publicBets: 29, publicMoney: 32, sharpBets: 71, sharpMoney: 68,
            insight: "SHARP PLAY: 71% of money on 76ers despite 29% of bets. Classic reverse line movement.",
            insightType: "sharp",
            source: "TheSpread.com"
        },
        {
            id: 3, away: "SAS", home: "DAL", pick: "Spurs +7.5",
            publicBets: 77, publicMoney: 72, sharpBets: 23, sharpMoney: 28,
            insight: "PUBLIC TRAP: 77% on Spurs after they beat OKC - classic recency bias fade",
            insightType: "fade",
            source: "TheSpread.com"
        },
        {
            id: 4, away: "GSW", home: "PHX", pick: "Warriors +6.5",
            publicBets: 66, publicMoney: 61, sharpBets: 34, sharpMoney: 39,
            insight: "Public on home favorite Suns - sharps taking small side on Warriors +6.5",
            insightType: "sharp",
            source: "Action Network"
        },
        {
            id: 5, away: "FLA", home: "TB", pick: "Panthers ML",
            publicBets: 45, publicMoney: 58, sharpBets: 55, sharpMoney: 42,
            insight: "Sharp money on Panthers despite being road underdogs - 5-1 last 6 @ Tampa",
            insightType: "sharp",
            source: "FOX Sports"
        },
        {
            id: 6, away: "CAR", home: "NYR", pick: "Hurricanes ML",
            publicBets: 42, publicMoney: 48, sharpBets: 58, sharpMoney: 52,
            insight: "Slight sharp lean to Carolina - Rangers struggling at home lately",
            insightType: "sharp",
            source: "FOX Sports"
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // HISTORICAL TRENDS - REAL ATS Records (Source: TeamRankings, FOX, TheSpread)
    // Updated: February 5, 2026
    // ═══════════════════════════════════════════════════════════════
    trends: {
        // NBA Teams - Real 2025-26 Data
        "DET": { atsLast10: "5-5", atsSeason: "26-22-1", atsHome: "14-12", ouLast10: "5-5", streak: "2-3 L5 ATS", winPctFav: "71.8%", note: "Best record in East" },
        "WAS": { atsLast10: "4-6", atsSeason: "21-28", atsAway: "9-14", ouLast10: "5-5", streak: "3-7 L10 ATS", winPctDog: "26.1%", note: "Worst team in NBA" },
        "PHI": { atsLast10: "6-4", atsSeason: "27-22", atsAway: "15-7", ouLast10: "6-4 OVER", streak: "4-1 L5 ATS", note: "7-4 ATS as 3.5+ dog" },
        "LAL": { atsLast10: "6-4", atsSeason: "26-23", atsHome: "10-9-1", ouLast10: "4-6", streak: "3-2 L5 ATS", note: "1-8 ATS on Thursdays" },
        "GSW": { atsLast10: "5-5", atsSeason: "24-26", atsAway: "13-12", ouLast10: "6-4 OVER", streak: "2-3 L5 ATS", note: "Better away from home" },
        "PHX": { atsLast10: "6-4", atsSeason: "28-21-2", atsHome: "16-9", ouLast10: "5-5", streak: "4-1 L5 ATS", note: "Strong at home" },
        "SAS": { atsLast10: "7-3", atsSeason: "28-21", atsAway: "14-10", ouLast10: "6-4 OVER", streak: "5-0 L5 ATS!", note: "Just beat OKC!" },
        "DAL": { atsLast10: "5-5", atsSeason: "25-24", atsHome: "13-11", ouLast10: "5-5", streak: "2-3 L5 ATS", note: "Inconsistent" },
        "LAK": { atsLast10: "5-5", atsSeason: "27-24", atsAway: "12-13", ouLast10: "4-6", streak: "3-2 L5 ATS", note: "Strong defense" },
        "VGK": { atsLast10: "6-4", atsSeason: "30-18-5", atsHome: "17-8", ouLast10: "4-6", streak: "3-2 L5 ATS", note: "Home ice advantage" },
        // NHL Teams - Real 2025-26 Data
        "FLA": { atsLast10: "4-6", atsSeason: "28-24-3", atsAway: "13-7", ouLast10: "6-1 OVER", streak: "1-4 L5 SU", note: "5-1 L6 @ Tampa!" },
        "TB": { atsLast10: "6-4", atsSeason: "36-14-4", atsHome: "18-7", ouLast10: "3-7 UNDER", streak: "4-1 L5", note: "2nd best defense" },
        "CAR": { atsLast10: "6-4", atsSeason: "35-15-4", atsAway: "17-8", ouLast10: "5-5", streak: "3-1-1 L5", note: "Elite road team" },
        "NYR": { atsLast10: "4-6", atsSeason: "28-22-4", atsHome: "14-11", ouLast10: "5-5", streak: "2-3 L5", note: "Struggling recently" }
    },

    h2h: {
        "WAS_DET": [
            { date: "Jan 15", score: "DET 118-94", result: "win", covered: true, margin: 24 },
            { date: "Dec 8", score: "DET 122-105", result: "win", covered: true, margin: 17 },
            { date: "Nov 2", score: "WAS 108-104", result: "loss", covered: false, margin: -4 }
        ],
        "PHI_LAL": [
            { date: "Jan 28", score: "PHI 121-116", result: "win", covered: true, margin: 5 },
            { date: "Dec 15", score: "LAL 118-117", result: "loss", covered: true, margin: -1 },
            { date: "Nov 10", score: "PHI 109-105", result: "win", covered: true, margin: 4 }
        ],
        "GSW_PHX": [
            { date: "Jan 22", score: "PHX 118-112", result: "loss", covered: false, margin: -6 },
            { date: "Dec 28", score: "GSW 120-117", result: "win", covered: true, margin: 3 },
            { date: "Nov 15", score: "PHX 125-118", result: "loss", covered: true, margin: -7 }
        ],
        "SAS_DAL": [
            { date: "Jan 30", score: "DAL 127-120", result: "loss", covered: true, margin: -7 },
            { date: "Dec 22", score: "SAS 115-108", result: "win", covered: true, margin: 7 },
            { date: "Nov 8", score: "DAL 121-116", result: "loss", covered: true, margin: -5 }
        ],
        "FLA_TB": [
            { date: "Jan 20", score: "FLA 4-2", result: "win", covered: true, margin: 2 },
            { date: "Dec 12", score: "TB 3-2", result: "loss", covered: false, margin: -1 },
            { date: "Nov 5", score: "FLA 5-3", result: "win", covered: true, margin: 2 }
        ],
        "CAR_NYR": [
            { date: "Jan 18", score: "CAR 4-1", result: "win", covered: true, margin: 3 },
            { date: "Dec 5", score: "CAR 3-2 OT", result: "win", covered: true, margin: 1 },
            { date: "Oct 28", score: "NYR 4-3", result: "loss", covered: false, margin: -1 }
        ],
        "LAK_VGK": [
            { date: "Jan 25", score: "VGK 3-2", result: "loss", covered: true, margin: -1 },
            { date: "Dec 18", score: "LAK 2-1", result: "win", covered: true, margin: 1 },
            { date: "Nov 12", score: "VGK 4-2", result: "loss", covered: false, margin: -2 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // INJURY REPORT - February 5, 2026
    // ═══════════════════════════════════════════════════════════════
    injuries: [
        // NBA - KEY INJURIES
        {
            id: 1, sport: "NBA", player: "Shai Gilgeous-Alexander", team: "OKC", teamFull: "Thunder", position: "G",
            status: "out", injury: "Abdominal Strain", return: "After All-Star Break", impact: "high",
            notes: "Reigning MVP out until at least Feb 15. Thunder 40-11 without him tonight."
        },
        {
            id: 2, sport: "NBA", player: "Giannis Antetokounmpo", team: "MIL", teamFull: "Bucks", position: "F",
            status: "out", injury: "Right Calf Strain", return: "TBD - Trade Rumors", impact: "high",
            notes: "Out since Jan 23. Trade deadline speculation swirling. May be dealt today."
        },
        {
            id: 3, sport: "NBA", player: "Jaylen Brown", team: "BOS", teamFull: "Celtics", position: "G/F",
            status: "out", injury: "Hamstring/Knee", return: "Day-to-Day", impact: "high",
            notes: "Missed last game vs Rockets. Averaging 29.5 PPG this season."
        },
        {
            id: 4, sport: "NBA", player: "Anthony Davis", team: "LAL", teamFull: "Lakers", position: "F/C",
            status: "out", injury: "Knee Soreness", return: "Out Tonight", impact: "high",
            notes: "OUT for PHI game. LeBron will need to carry the load vs Embiid."
        },
        {
            id: 5, sport: "NBA", player: "Kawhi Leonard", team: "LAC", teamFull: "Clippers", position: "F",
            status: "out", injury: "Knee Inflammation", return: "Indefinite", impact: "high",
            notes: "Has played only 6 games this season. Clippers managing carefully."
        },
        {
            id: 6, sport: "NBA", player: "Ja Morant", team: "MEM", teamFull: "Grizzlies", position: "G",
            status: "questionable", injury: "Shoulder", return: "Game-Time Decision", impact: "high",
            notes: "Dealing with shoulder issue. Grizzlies off tonight."
        },
        {
            id: 7, sport: "NBA", player: "Zion Williamson", team: "NOP", teamFull: "Pelicans", position: "F",
            status: "out", injury: "Hamstring", return: "Out for Season", impact: "medium",
            notes: "Season-ending injury. Pelicans 12-39, worst in West."
        },
        {
            id: 8, sport: "NBA", player: "Victor Wembanyama", team: "SAS", teamFull: "Spurs", position: "C",
            status: "probable", injury: "Rest", return: "Expected to Play", impact: "low",
            notes: "May rest before Olympic break. 22/14 last game vs OKC."
        },
        // NHL - KEY INJURIES
        {
            id: 9, sport: "NHL", player: "Connor McDavid", team: "EDM", teamFull: "Oilers", position: "C",
            status: "out", injury: "Olympics", return: "Feb 25", impact: "medium",
            notes: "Healthy - heading to Milan for Team Canada. NHL pauses after tonight."
        },
        {
            id: 10, sport: "NHL", player: "Auston Matthews", team: "TOR", teamFull: "Maple Leafs", position: "C",
            status: "out", injury: "Olympics", return: "Feb 25", impact: "medium",
            notes: "Healthy - representing USA in Milan. Last game before break."
        },
        {
            id: 11, sport: "NHL", player: "Igor Shesterkin", team: "NYR", teamFull: "Rangers", position: "G",
            status: "probable", injury: "Rest", return: "Expected to Start", impact: "medium",
            notes: "Should start vs Hurricanes in final game before Olympic break."
        },
        {
            id: 12, sport: "NHL", player: "Matthew Tkachuk", team: "FLA", teamFull: "Panthers", position: "LW",
            status: "probable", injury: "Upper Body", return: "Expected to Play", impact: "medium",
            notes: "Listed probable for Tampa rivalry game. Panthers 37-13-4."
        },
        // NFL - SUPER BOWL
        {
            id: 13, sport: "NFL", player: "Kenneth Walker III", team: "SEA", teamFull: "Seahawks", position: "RB",
            status: "probable", injury: "Ankle", return: "Expected to Play SB", impact: "medium",
            notes: "Full participant in practice. Ready for Super Bowl vs Patriots."
        },
        {
            id: 14, sport: "NFL", player: "DK Metcalf", team: "SEA", teamFull: "Seahawks", position: "WR",
            status: "probable", injury: "Shoulder", return: "Will Play SB", impact: "low",
            notes: "No limitations in practice. Full go for Super Bowl."
        },
        {
            id: 15, sport: "NFL", player: "Drake Maye", team: "NE", teamFull: "Patriots", position: "QB",
            status: "probable", injury: "Finger", return: "Will Start SB", impact: "low",
            notes: "Rookie QB healthy and ready for biggest game of his life."
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // WEEKLY PICKS - February 4-8, 2026 (SUPER BOWL WEEK)
    // ═══════════════════════════════════════════════════════════════
    weeklyPicks: [
        // SUPER BOWL LX - FEBRUARY 8
        {
            id: 101,
            sport: "NFL",
            away: "NE",
            home: "SEA",
            time: "Feb 8, 6:30 PM ET",
            venue: "SUPER BOWL LX - Levi's Stadium",
            pick: "Patriots +4.5",
            odds: -110,
            units: 2.5,
            conviction: 4,
            factors: [
                "Underdogs 5-0 ATS in last 5 Super Bowls",
                "Mike Vrabel: 3x SB champ as player",
                "Drake Maye Year 2 - 4,000 yds, 35 TDs",
                "Sharp money on Pats, public on Seattle"
            ]
        },
        {
            id: 102,
            sport: "NFL",
            away: "NE",
            home: "SEA",
            time: "Feb 8, 6:30 PM ET",
            venue: "SUPER BOWL LX - Total",
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
        // UFC FIGHT NIGHT 266 - FEBRUARY 7
        {
            id: 106,
            sport: "UFC",
            away: "UFC",
            home: "UFC",
            time: "Feb 7, 9:00 PM ET",
            venue: "UFC Fight Night 266 - Co-Main",
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
            venue: "UFC Fight Night 266 - Main Event",
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
        // DUKE vs UNC - FEBRUARY 7
        {
            id: 108,
            sport: "NCAAB",
            away: "DUKE",
            home: "UNC",
            time: "Feb 7, 6:30 PM ET",
            venue: "Dean Smith Center - ESPN",
            pick: "Duke -2.5",
            odds: -110,
            units: 2,
            conviction: 4,
            factors: [
                "Duke 19-0 in ACC play",
                "Cameron Boozer vs Caleb Wilson showdown",
                "Duke 20-4 overall, best team in country",
                "UNC 18-6 but Duke too good"
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
    // MAX PLAYS - Highest Conviction (5% bankroll = $44)
    // ═══════════════════════════════════════════════════════════════
    maxPlays: [
        {
            id: 201,
            sport: "NBA",
            away: "OKC",
            home: "SAS",
            time: "Feb 4, 9:30 PM ET",
            pick: "Thunder -6.5",
            odds: -110,
            units: 2.5,
            conviction: 5,
            factors: [
                "OKC best team in NBA at 38-11",
                "Thunder 20-4 on road - elite",
                "Spurs inconsistent without Wemby",
                "SGA is MVP frontrunner"
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
    // PARLAYS - February 4, 2026
    // ═══════════════════════════════════════════════════════════════
    parlays: {
        safe: {
            name: "CHALKY PARLAY",
            odds: "+520",
            wager: 25,
            payout: 155,
            legs: [
                { pick: "76ers +4.5", odds: -118, game: "PHI @ LAL" },
                { pick: "Pistons -14.5", odds: -115, game: "WAS @ DET" },
                { pick: "Panthers ML", odds: +105, game: "FLA @ TB" }
            ]
        },
        value: {
            name: "VALUE PARLAY",
            odds: "+1450",
            wager: 15,
            payout: 232,
            legs: [
                { pick: "76ers +4.5", odds: -118, game: "PHI @ LAL" },
                { pick: "Hurricanes ML", odds: +115, game: "CAR @ NYR" },
                { pick: "Panthers ML", odds: +105, game: "FLA @ TB" },
                { pick: "Warriors +6.5", odds: -110, game: "GSW @ PHX" }
            ]
        },
        risky: {
            name: "MOON SHOT",
            odds: "+3200",
            wager: 10,
            payout: 330,
            legs: [
                { pick: "76ers ML", odds: +145, game: "PHI @ LAL" },
                { pick: "Hurricanes ML", odds: +115, game: "CAR @ NYR" },
                { pick: "Panthers ML", odds: +105, game: "FLA @ TB" },
                { pick: "Warriors ML", odds: +210, game: "GSW @ PHX" },
                { pick: "Bulls +8.5", odds: -115, game: "CHI @ TOR" }
            ]
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // PLAYER PROPS - February 5, 2026
    // ═══════════════════════════════════════════════════════════════
    playerProps: [
        {
            player: "Tyrese Maxey",
            team: "PHI",
            game: "76ers @ Lakers",
            prop: "Over 26.5 Points",
            odds: -115,
            units: 1.5,
            conviction: 4,
            reasoning: "Maxey averaging 27.5 PPG, thrives in big games"
        },
        {
            player: "Joel Embiid",
            team: "PHI",
            game: "76ers @ Lakers",
            prop: "Over 11.5 Rebounds",
            odds: -110,
            units: 1,
            conviction: 4,
            reasoning: "Embiid averages 13.2 RPG vs Lakers, AD matchup means more boards"
        },
        {
            player: "Cade Cunningham",
            team: "DET",
            game: "Wizards @ Pistons",
            prop: "Over 7.5 Assists",
            odds: -120,
            units: 1,
            conviction: 4,
            reasoning: "Cade averaging 9.2 APG, Wizards give up 28 assists/game"
        },
        {
            player: "LeBron James",
            team: "LAL",
            game: "76ers @ Lakers",
            prop: "Over 7.5 Assists",
            odds: -120,
            units: 1,
            conviction: 4,
            reasoning: "LeBron averaging 9.0 APG, with AD out he'll facilitate even more"
        },
        {
            player: "Victor Wembanyama",
            team: "SAS",
            game: "Spurs @ Mavs (Feb 6)",
            prop: "Over 22.5 Points",
            odds: -115,
            units: 1,
            conviction: 3,
            reasoning: "Wemby coming off 22/14 vs Thunder, confidence high"
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // NBA SCHEDULE - February 2026
    // ═══════════════════════════════════════════════════════════════
    nbaSchedule: [
        // Feb 4
        { date: "Feb 4", games: [
            { away: "Denver Nuggets", awayRecord: "33-18", home: "New York Knicks", homeRecord: "30-20", time: "7:00 PM", spread: "NYK -5.5", ou: "224" },
            { away: "Minnesota Timberwolves", awayRecord: "28-21", home: "Toronto Raptors", homeRecord: "23-27", time: "7:30 PM", spread: "MIN -4", ou: "218" },
            { away: "Boston Celtics", awayRecord: "31-18", home: "Houston Rockets", homeRecord: "30-18", time: "8:00 PM", spread: "BOS -2.5", ou: "226" },
            { away: "New Orleans Pelicans", awayRecord: "12-38", home: "Milwaukee Bucks", homeRecord: "28-22", time: "8:00 PM", spread: "MIL -8.5", ou: "221" },
            { away: "Oklahoma City Thunder", awayRecord: "38-11", home: "San Antonio Spurs", homeRecord: "33-17", time: "9:30 PM", spread: "OKC -6.5", ou: "225" },
            { away: "Memphis Grizzlies", awayRecord: "29-20", home: "Sacramento Kings", homeRecord: "27-22", time: "10:00 PM", spread: "SAC -2.5", ou: "232" },
            { away: "Cleveland Cavaliers", awayRecord: "30-20", home: "LA Clippers", homeRecord: "25-25", time: "10:30 PM", spread: "CLE -3", ou: "219" },
        ]},
        // Feb 5 - TRADE DEADLINE
        { date: "Feb 5", games: [
            { away: "Brooklyn Nets", awayRecord: "13-35", home: "OKC Thunder", homeRecord: "38-11", time: "8:00 PM", spread: "OKC -15", ou: "218" },
            { away: "Toronto Raptors", awayRecord: "23-27", home: "New York Knicks", homeRecord: "30-20", time: "7:30 PM", spread: "NYK -6", ou: "221" },
        ]},
        // Feb 7 - ABC Saturday
        { date: "Feb 7", games: [
            { away: "Houston Rockets", awayRecord: "30-18", home: "OKC Thunder", homeRecord: "38-11", time: "3:30 PM", spread: "OKC -5", ou: "219", tv: "ABC" },
            { away: "LA Lakers", awayRecord: "29-19", home: "Golden State Warriors", homeRecord: "27-24", time: "8:30 PM", spread: "LAL -3", ou: "229", tv: "ABC" },
        ]},
        // Feb 8 - Pre-All Star
        { date: "Feb 8", games: [
            { away: "New York Knicks", awayRecord: "30-20", home: "Boston Celtics", homeRecord: "31-18", time: "12:30 PM", spread: "BOS -3", ou: "218", tv: "ABC" },
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
            ]
        },
    ],

    // ═══════════════════════════════════════════════════════════════
    // NHL SCHEDULE - February 2026 (OLYMPIC BREAK)
    // ═══════════════════════════════════════════════════════════════
    nhlSchedule: [
        { date: "Feb 4-24", note: "NHL PAUSED FOR WINTER OLYMPICS (Milan, Italy)" },
        { date: "Feb 25", note: "NHL Season Resumes" },
    ],

    // ═══════════════════════════════════════════════════════════════
    // SOCCER SCHEDULE - February 2026
    // ═══════════════════════════════════════════════════════════════
    soccerSchedule: [
        { date: "Feb 7", league: "EPL", games: [
            { home: "Man Utd", away: "Tottenham", time: "7:30 AM ET", tv: "TNT" },
            { home: "Newcastle", away: "Brentford", time: "12:30 PM ET" },
        ]},
        { date: "Feb 8", league: "EPL", games: [
            { home: "Liverpool", away: "Man City", time: "11:30 AM ET", note: "TITLE DECIDER" },
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
