/* ═══════════════════════════════════════════════════════════════
   BOOKIE - Data Store
   All picks, history, and configuration
   ═══════════════════════════════════════════════════════════════ */

const BOOKIE_DATA = {
    // ═══════════════════════════════════════════════════════════════
    // BANKROLL CONFIG - Updated Feb 4, 2026
    // ═══════════════════════════════════════════════════════════════
    bankroll: {
        starting: 1000,
        current: 885,
        unitPercent: 2, // 1 unit = $18 (2% of $885)
        maxPlayPercent: 5, // MAX plays = $44 (5%)
    },

    // Unit tiers based on conviction (1u = $18)
    unitTiers: [
        { locks: 1, units: 0.5, label: "Lean", percent: 1, amount: 9 },
        { locks: 2, units: 1, label: "Standard", percent: 2, amount: 18 },
        { locks: 3, units: 1.5, label: "Confident", percent: 3, amount: 27 },
        { locks: 4, units: 2, label: "Strong", percent: 4, amount: 35 },
        { locks: 5, units: 2.5, label: "MAX PLAY", percent: 5, amount: 44 },
    ],

    // Growth projection (conservative 8u/month at 55% win rate)
    growthProjection: [
        { month: "Feb", bankroll: 885, gain: -115, note: "Current" },
        { month: "Mar", bankroll: 1030, gain: 145, note: "+8u" },
        { month: "Apr", bankroll: 1195, gain: 165, note: "+8u" },
        { month: "May", bankroll: 1385, gain: 190, note: "+8u" },
        { month: "Jun", bankroll: 1605, gain: 220, note: "+8u" },
        { month: "Jul", bankroll: 1860, gain: 255, note: "+8u" },
    ],

    // ═══════════════════════════════════════════════════════════════
    // TRACK RECORD - Feb 2-3, 2026
    // ═══════════════════════════════════════════════════════════════
    history: [
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
    // TODAY'S PICKS - February 4, 2026
    // ═══════════════════════════════════════════════════════════════
    todaysPicks: [
        // NBA PICKS
        {
            id: 1,
            sport: "NBA",
            away: "DEN",
            home: "NYK",
            time: "7:00 PM ET",
            pick: "Knicks -5.5",
            odds: -110,
            units: 1.5,
            conviction: 4,
            factors: [
                "Knicks 30-20, strong at MSG (17-7)",
                "Nuggets on back-to-back after loss in Detroit",
                "Jokic had 24/15 last night, may be tired",
                "MSG is a tough place to play"
            ]
        },
        {
            id: 2,
            sport: "NBA",
            away: "BOS",
            home: "HOU",
            time: "8:00 PM ET",
            pick: "Celtics -2.5",
            odds: -110,
            units: 1.5,
            conviction: 4,
            factors: [
                "Celtics coming off win, 31-18 record",
                "Boston just acquired Nikola Vucevic",
                "Jaylen Brown on fire (33 pts last night)",
                "Celtics 18-7 on the road"
            ]
        },
        {
            id: 3,
            sport: "NBA",
            away: "OKC",
            home: "SAS",
            time: "9:30 PM ET",
            pick: "Thunder -6.5",
            odds: -110,
            units: 2,
            conviction: 4,
            factors: [
                "OKC 38-11, best record in NBA",
                "Thunder 20-4 on the road this season",
                "Spurs struggling without Wemby rest games",
                "SGA averaging 32 PPG"
            ]
        },
        {
            id: 4,
            sport: "NBA",
            away: "CLE",
            home: "LAC",
            time: "10:30 PM ET",
            pick: "Cavaliers -3",
            odds: -110,
            units: 1,
            conviction: 3,
            factors: [
                "Cavs 30-20, playing well",
                "Clippers without Kawhi Leonard",
                "Cleveland 14-11 on road",
                "Donovan Mitchell averaging 25+ PPG"
            ]
        },
        {
            id: 5,
            sport: "NBA",
            away: "NOP",
            home: "MIL",
            time: "8:00 PM ET",
            pick: "Bucks -8.5",
            odds: -110,
            units: 1,
            conviction: 3,
            factors: [
                "Pelicans decimated by injuries",
                "Giannis dominating at home",
                "Bucks need wins for playoff positioning",
                "NO has worst record in West"
            ]
        },
        {
            id: 6,
            sport: "NBA",
            away: "MEM",
            home: "SAC",
            time: "10:00 PM ET",
            pick: "Kings -2.5",
            odds: -110,
            units: 1,
            conviction: 3,
            factors: [
                "Kings strong at home (16-8)",
                "De'Aaron Fox playing elite basketball",
                "Ja Morant questionable with injury",
                "Sacramento needs playoff push"
            ]
        },
        // NO NHL - OLYMPIC BREAK STARTS
        // NCAAB PICKS
        {
            id: 7,
            sport: "NCAAB",
            away: "BC",
            home: "DUKE",
            time: "7:00 PM ET",
            pick: "Duke -18.5",
            odds: -110,
            units: 1,
            conviction: 3,
            factors: [
                "Duke 20-4, dominant at Cameron Indoor",
                "Cameron Boozer averaging 18 PPG",
                "BC 10-13, struggling in ACC",
                "Duke 19-0 straight up in ACC"
            ]
        },
        {
            id: 8,
            sport: "NCAAB",
            away: "MISS",
            home: "TENN",
            time: "7:00 PM ET",
            pick: "Tennessee -8.5",
            odds: -110,
            units: 1.5,
            conviction: 4,
            factors: [
                "Tennessee #25, strong at home",
                "Vols 16-8 overall, 8-3 at home",
                "Ole Miss 13-10, struggles on road",
                "SEC home court advantage"
            ]
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
            odds: "+595",
            wager: 20,
            payout: 139,
            legs: [
                { pick: "Knicks -5.5", odds: -110, game: "DEN @ NYK" },
                { pick: "Celtics -2.5", odds: -110, game: "BOS @ HOU" },
                { pick: "Thunder -6.5", odds: -110, game: "OKC @ SAS" }
            ]
        },
        value: {
            name: "VALUE PARLAY",
            odds: "+1200",
            wager: 15,
            payout: 195,
            legs: [
                { pick: "Knicks -5.5", odds: -110, game: "DEN @ NYK" },
                { pick: "Celtics -2.5", odds: -110, game: "BOS @ HOU" },
                { pick: "Thunder -6.5", odds: -110, game: "OKC @ SAS" },
                { pick: "Duke -18.5", odds: -110, game: "BC @ DUKE" }
            ]
        },
        risky: {
            name: "MOON SHOT",
            odds: "+2500",
            wager: 10,
            payout: 260,
            legs: [
                { pick: "Knicks -5.5", odds: -110, game: "DEN @ NYK" },
                { pick: "Thunder -6.5", odds: -110, game: "OKC @ SAS" },
                { pick: "Cavaliers -3", odds: -110, game: "CLE @ LAC" },
                { pick: "Duke -18.5", odds: -110, game: "BC @ DUKE" },
                { pick: "Tennessee -8.5", odds: -110, game: "MISS @ TENN" }
            ]
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // PLAYER PROPS - February 4, 2026
    // ═══════════════════════════════════════════════════════════════
    playerProps: [
        {
            player: "Jalen Brunson",
            team: "NYK",
            game: "Nuggets @ Knicks",
            prop: "Over 26.5 Points",
            odds: -115,
            units: 1.5,
            conviction: 4,
            reasoning: "Brunson averaging 28+ at MSG, Nuggets tired on B2B"
        },
        {
            player: "Shai Gilgeous-Alexander",
            team: "OKC",
            game: "Thunder @ Spurs",
            prop: "Over 30.5 Points",
            odds: -120,
            units: 1.5,
            conviction: 4,
            reasoning: "SGA averaging 32 PPG, MVP candidate, dominates weak teams"
        },
        {
            player: "Jaylen Brown",
            team: "BOS",
            game: "Celtics @ Rockets",
            prop: "Over 27.5 Points",
            odds: -110,
            units: 1,
            conviction: 3,
            reasoning: "Coming off 33-point game, on fire right now"
        },
        {
            player: "Giannis Antetokounmpo",
            team: "MIL",
            game: "Pelicans @ Bucks",
            prop: "Over 31.5 Points",
            odds: -115,
            units: 1,
            conviction: 3,
            reasoning: "Giannis dominates weak defenses, Pelicans depleted"
        },
        {
            player: "De'Aaron Fox",
            team: "SAC",
            game: "Grizzlies @ Kings",
            prop: "Over 25.5 Points",
            odds: -110,
            units: 1,
            conviction: 3,
            reasoning: "Fox averaging 27 at home, Ja likely out"
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
