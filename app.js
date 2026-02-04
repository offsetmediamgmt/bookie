/* ═══════════════════════════════════════════════════════════════
   BOOKIE - Application Logic
   v2.0
   ═══════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════
// TEAM LOGOS - ESPN CDN
// ═══════════════════════════════════════════════════════════════
const TEAM_LOGOS = {
    // NBA Teams
    'PHI': 'https://a.espncdn.com/i/teamlogos/nba/500/phi.png',
    'GSW': 'https://a.espncdn.com/i/teamlogos/nba/500/gs.png',
    'DET': 'https://a.espncdn.com/i/teamlogos/nba/500/det.png',
    'DEN': 'https://a.espncdn.com/i/teamlogos/nba/500/den.png',
    'BOS': 'https://a.espncdn.com/i/teamlogos/nba/500/bos.png',
    'DAL': 'https://a.espncdn.com/i/teamlogos/nba/500/dal.png',
    'MIA': 'https://a.espncdn.com/i/teamlogos/nba/500/mia.png',
    'ATL': 'https://a.espncdn.com/i/teamlogos/nba/500/atl.png',
    'LAL': 'https://a.espncdn.com/i/teamlogos/nba/500/lal.png',
    'LAC': 'https://a.espncdn.com/i/teamlogos/nba/500/lac.png',
    'HOU': 'https://a.espncdn.com/i/teamlogos/nba/500/hou.png',
    'IND': 'https://a.espncdn.com/i/teamlogos/nba/500/ind.png',
    'OKC': 'https://a.espncdn.com/i/teamlogos/nba/500/okc.png',
    'SAS': 'https://a.espncdn.com/i/teamlogos/nba/500/sa.png',
    'PHX': 'https://a.espncdn.com/i/teamlogos/nba/500/phx.png',
    'NYK': 'https://a.espncdn.com/i/teamlogos/nba/500/ny.png',
    'BKN': 'https://a.espncdn.com/i/teamlogos/nba/500/bkn.png',
    'CLE': 'https://a.espncdn.com/i/teamlogos/nba/500/cle.png',

    // NHL Teams - Use different keys for NHL Toronto
    'OTT': 'https://a.espncdn.com/i/teamlogos/nhl/500/ott.png',
    'CAR': 'https://a.espncdn.com/i/teamlogos/nhl/500/car.png',
    'BUF': 'https://a.espncdn.com/i/teamlogos/nhl/500/buf.png',
    'TB': 'https://a.espncdn.com/i/teamlogos/nhl/500/tb.png',
    'TOR': 'https://a.espncdn.com/i/teamlogos/nhl/500/tor.png',
    'EDM': 'https://a.espncdn.com/i/teamlogos/nhl/500/edm.png',
    'CGY': 'https://a.espncdn.com/i/teamlogos/nhl/500/cgy.png',
    'PIT': 'https://a.espncdn.com/i/teamlogos/nhl/500/pit.png',
    'WPG': 'https://a.espncdn.com/i/teamlogos/nhl/500/wpg.png',

    // NFL Teams
    'NE': 'https://a.espncdn.com/i/teamlogos/nfl/500/ne.png',
    'SEA': 'https://a.espncdn.com/i/teamlogos/nfl/500/sea.png',

    // NCAAB Teams (using ESPN college IDs)
    'GONZ': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2250.png',
    'SMC': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2608.png',
    'MARQ': 'https://a.espncdn.com/i/teamlogos/ncaa/500/269.png',
    'CREI': 'https://a.espncdn.com/i/teamlogos/ncaa/500/156.png',
    'BEL': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2057.png',
    'DRAKE': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2181.png',
    'KU': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2305.png',
    'TTU': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2641.png',
    'UNC': 'https://a.espncdn.com/i/teamlogos/ncaa/500/153.png',
    'SYR': 'https://a.espncdn.com/i/teamlogos/ncaa/500/183.png',
    'UCONN': 'https://a.espncdn.com/i/teamlogos/ncaa/500/41.png',
    'DEPAUL': 'https://a.espncdn.com/i/teamlogos/ncaa/500/305.png',
    'DUKE': 'https://a.espncdn.com/i/teamlogos/ncaa/500/150.png',
    'UK': 'https://a.espncdn.com/i/teamlogos/ncaa/500/96.png',
    'TENN': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2633.png',
    'NCST': 'https://a.espncdn.com/i/teamlogos/ncaa/500/152.png',
    'SMU': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2567.png',
    'RUT': 'https://a.espncdn.com/i/teamlogos/ncaa/500/164.png',
    'UCLA': 'https://a.espncdn.com/i/teamlogos/ncaa/500/26.png',

    // UFC (generic)
    'UFC': 'https://a.espncdn.com/i/teamlogos/leagues/500/ufc.png'
};

function getTeamLogo(abbr, size = 30) {
    const logo = TEAM_LOGOS[abbr];
    if (logo) {
        return `<img src="${logo}" alt="${abbr}" class="team-logo" style="width: ${size}px; height: ${size}px;" onerror="this.style.display='none'">`;
    }
    return '';
}

function getTeamLogoUrl(abbr) {
    return TEAM_LOGOS[abbr] || '';
}

// Extract team abbreviations from matchup string like "76ers @ Warriors"
function extractTeams(matchup) {
    const teamMap = {
        // NBA
        '76ers': 'PHI', 'Philadelphia': 'PHI', 'PHI': 'PHI', 'Sixers': 'PHI',
        'Warriors': 'GSW', 'Golden State': 'GSW', 'GSW': 'GSW', 'GS': 'GSW',
        'Pistons': 'DET', 'Detroit': 'DET', 'DET': 'DET',
        'Nuggets': 'DEN', 'Denver': 'DEN', 'DEN': 'DEN',
        'Celtics': 'BOS', 'Boston': 'BOS', 'BOS': 'BOS',
        'Mavericks': 'DAL', 'Dallas': 'DAL', 'DAL': 'DAL', 'Mavs': 'DAL',
        'Heat': 'MIA', 'Miami': 'MIA', 'MIA': 'MIA',
        'Hawks': 'ATL', 'Atlanta': 'ATL', 'ATL': 'ATL',
        'Lakers': 'LAL', 'Los Angeles Lakers': 'LAL', 'LAL': 'LAL', 'LA Lakers': 'LAL',
        'Clippers': 'LAC', 'LAC': 'LAC', 'LA Clippers': 'LAC',
        'Rockets': 'HOU', 'Houston': 'HOU', 'HOU': 'HOU',
        'Pacers': 'IND', 'Indiana': 'IND', 'IND': 'IND',
        'Thunder': 'OKC', 'Oklahoma City': 'OKC', 'OKC': 'OKC',
        'Spurs': 'SAS', 'San Antonio': 'SAS', 'SAS': 'SAS', 'SA': 'SAS',
        'Suns': 'PHX', 'Phoenix': 'PHX', 'PHX': 'PHX',
        'Raptors': 'TOR', 'Toronto Raptors': 'TOR',
        'Knicks': 'NYK', 'New York Knicks': 'NYK', 'NYK': 'NYK', 'NY': 'NYK',
        'Nets': 'BKN', 'Brooklyn': 'BKN', 'BKN': 'BKN',
        'Cavaliers': 'CLE', 'Cleveland': 'CLE', 'CLE': 'CLE', 'Cavs': 'CLE',
        // NHL
        'Senators': 'OTT', 'Ottawa': 'OTT', 'OTT': 'OTT',
        'Hurricanes': 'CAR', 'Carolina': 'CAR', 'CAR': 'CAR',
        'Sabres': 'BUF', 'Buffalo': 'BUF', 'BUF': 'BUF',
        'Lightning': 'TB', 'Tampa Bay': 'TB', 'Tampa': 'TB', 'TB': 'TB', 'TBL': 'TB',
        'Maple Leafs': 'TOR', 'Toronto Maple Leafs': 'TOR', 'TOR': 'TOR', 'Leafs': 'TOR', 'Toronto': 'TOR',
        'Oilers': 'EDM', 'Edmonton': 'EDM', 'EDM': 'EDM',
        'Flames': 'CGY', 'Calgary': 'CGY', 'CGY': 'CGY',
        'Penguins': 'PIT', 'Pittsburgh': 'PIT', 'PIT': 'PIT', 'Pens': 'PIT',
        'Jets': 'WPG', 'Winnipeg': 'WPG', 'WPG': 'WPG',
        // NFL
        'Patriots': 'NE', 'New England': 'NE', 'NE': 'NE', 'Pats': 'NE',
        'Seahawks': 'SEA', 'Seattle': 'SEA', 'SEA': 'SEA',
        // NCAAB
        'Gonzaga': 'GONZ', 'GONZ': 'GONZ', 'Zags': 'GONZ',
        "Saint Mary's": 'SMC', 'Saint Marys': 'SMC', 'SMC': 'SMC', 'St. Marys': 'SMC', "St Mary's": 'SMC', 'Gaels': 'SMC',
        'Marquette': 'MARQ', 'MARQ': 'MARQ', 'Golden Eagles': 'MARQ',
        'Creighton': 'CREI', 'CREI': 'CREI', 'Bluejays': 'CREI',
        'Belmont': 'BEL', 'BEL': 'BEL', 'Bruins': 'BEL',
        'Drake': 'DRAKE', 'DRAKE': 'DRAKE', 'Bulldogs': 'DRAKE',
        'Kansas': 'KU', 'KU': 'KU', 'Jayhawks': 'KU',
        'Texas Tech': 'TTU', 'TTU': 'TTU', 'Red Raiders': 'TTU',
        'UNC': 'UNC', 'North Carolina': 'UNC', 'Tar Heels': 'UNC',
        'Syracuse': 'SYR', 'SYR': 'SYR', 'Orange': 'SYR',
        'UConn': 'UCONN', 'Connecticut': 'UCONN', 'UCONN': 'UCONN', 'Huskies': 'UCONN',
        'DePaul': 'DEPAUL', 'DEPAUL': 'DEPAUL', 'Blue Demons': 'DEPAUL',
        'Duke': 'DUKE', 'DUKE': 'DUKE', 'Blue Devils': 'DUKE',
        'Kentucky': 'UK', 'UK': 'UK', 'Wildcats': 'UK',
        'Tennessee': 'TENN', 'TENN': 'TENN', 'Volunteers': 'TENN', 'Vols': 'TENN',
        'NC State': 'NCST', 'NCST': 'NCST', 'Wolfpack': 'NCST', 'North Carolina State': 'NCST',
        'SMU': 'SMU', 'Mustangs': 'SMU', 'Southern Methodist': 'SMU',
        'Rutgers': 'RUT', 'RUT': 'RUT', 'Scarlet Knights': 'RUT',
        'UCLA': 'UCLA', 'Bruins': 'UCLA', 'Miss State': 'MSST',
        // UFC
        'Albazi': 'UFC', 'Horiguchi': 'UFC', 'Bautista': 'UFC', 'Oliveira': 'UFC'
    };

    // Try to extract from "Team1 @ Team2" or "Team1 vs Team2" format
    const parts = matchup.split(/\s*[@vs]+\s*/i);
    let away = '', home = '';

    if (parts.length >= 2) {
        // Find team abbreviations - check each word/phrase
        for (const [name, abbr] of Object.entries(teamMap)) {
            if (parts[0].toLowerCase().includes(name.toLowerCase())) away = abbr;
            if (parts[1].toLowerCase().includes(name.toLowerCase())) home = abbr;
        }
    }

    return { away, home };
}

// Get logo from game string like "PHI @ GSW"
function getLogosFromGame(game) {
    const parts = game.split(/\s*[@vs]+\s*/i);
    if (parts.length >= 2) {
        const away = parts[0].trim().toUpperCase();
        const home = parts[1].trim().toUpperCase();
        return { away, home };
    }
    return { away: '', home: '' };
}

// ═══════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initBankroll();
    initCalculators();
    renderBetsPage();
    renderWatchPage();
    renderDailyCard();
    renderHistory();
    renderPlayerProps();
    updateHeaderStats();
    loadBetStatus();
    initCountdownTimer();
});

// ═══════════════════════════════════════════════════════════════
// COUNTDOWN TIMER - Time until first game
// ═══════════════════════════════════════════════════════════════
function initCountdownTimer() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const countdownEl = document.getElementById('countdownTimer');
    if (!countdownEl) return;

    // First game is at 4:00 PM PST (7:00 PM ET) on Feb 3, 2026
    const now = new Date();
    const firstGame = new Date();
    firstGame.setHours(16, 0, 0, 0); // 4:00 PM local time

    // If game time has passed, show "GAMES STARTED"
    if (now >= firstGame) {
        countdownEl.innerHTML = '<span class="countdown-live">GAMES LIVE</span>';
        return;
    }

    const diff = firstGame - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `
        <div class="countdown-label">FIRST GAME IN</div>
        <div class="countdown-time">
            <span class="countdown-unit">${hours.toString().padStart(2, '0')}<small>H</small></span>
            <span class="countdown-sep">:</span>
            <span class="countdown-unit">${minutes.toString().padStart(2, '0')}<small>M</small></span>
            <span class="countdown-sep">:</span>
            <span class="countdown-unit">${seconds.toString().padStart(2, '0')}<small>S</small></span>
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pageSections = document.querySelectorAll('.page-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            pageSections.forEach(page => page.classList.remove('active'));
            const pageId = 'page-' + item.dataset.page;
            document.getElementById(pageId)?.classList.add('active');

            document.body.className = item.dataset.theme || '';
        });
    });
}

// ═══════════════════════════════════════════════════════════════
// HEADER STATS
// ═══════════════════════════════════════════════════════════════
function updateHeaderStats() {
    const stats = calculateStats();
    const bankroll = BOOKIE_DATA.bankroll;

    // Update balance display
    const balanceEl = document.getElementById('headerBalance');
    if (balanceEl) balanceEl.textContent = '$' + bankroll.current.toLocaleString();

    // Update stats
    const winRateEl = document.getElementById('headerWinRate');
    const recordEl = document.getElementById('headerRecord');
    const streakEl = document.getElementById('headerStreak');

    if (winRateEl) winRateEl.textContent = stats.winRate + '%';
    if (recordEl) recordEl.textContent = stats.record;

    // Calculate streak
    let streak = 0;
    let streakType = '';
    for (const pick of BOOKIE_DATA.history) {
        if (pick.result === 'push') continue;
        if (streak === 0) {
            streakType = pick.result;
            streak = 1;
        } else if (pick.result === streakType) {
            streak++;
        } else {
            break;
        }
    }
    if (streakEl) streakEl.textContent = streak + (streakType === 'win' ? 'W' : 'L');
}

// ═══════════════════════════════════════════════════════════════
// COLLAPSIBLE PLAYS SECTIONS
// ═══════════════════════════════════════════════════════════════
function togglePlaysSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle('expanded');
    }
}

function toggleResultCard(index) {
    const card = document.querySelector(`.result-card[data-index="${index}"]`);
    if (card) {
        card.classList.toggle('expanded');
    }
}

// ═══════════════════════════════════════════════════════════════
// BANKROLL SYSTEM - LIVE UPDATES
// ═══════════════════════════════════════════════════════════════
function initBankroll() {
    // Initial render
    updateAllBankrollDisplays();
}

function updateAllBankrollDisplays() {
    const bankroll = BOOKIE_DATA.bankroll.current;
    const starting = BOOKIE_DATA.bankroll.starting;
    const unitBase = bankroll * 0.02; // 2% = $20

    // Update hero display
    const currentEl = document.getElementById('currentBankroll');
    const startingEl = document.getElementById('startingBankroll');
    const profitEl = document.getElementById('totalProfit');
    const roiEl = document.getElementById('totalROI');

    if (currentEl) currentEl.textContent = '$' + bankroll.toLocaleString();
    if (startingEl) startingEl.textContent = '$' + starting.toLocaleString();

    const profit = bankroll - starting;
    if (profitEl) profitEl.textContent = (profit >= 0 ? '+$' : '-$') + Math.abs(profit).toLocaleString();
    if (roiEl) roiEl.textContent = (profit >= 0 ? '+' : '') + ((profit / starting) * 100).toFixed(1) + '%';

    // Render unit tiers
    const unitGrid = document.getElementById('unitBreakdown');
    if (unitGrid) {
        unitGrid.innerHTML = BOOKIE_DATA.unitTiers.map((tier, i) => `
            <div class="unit-tier ${i === 1 ? 'active' : ''}">
                <div class="locks">${'🔒'.repeat(tier.locks)}</div>
                <div class="units">${tier.units}u</div>
                <div class="amount">$${Math.round(unitBase * tier.units)}</div>
                <div class="pct">${tier.percent}%</div>
            </div>
        `).join('');
    }

    // Render 6-month growth projection (moderate rate)
    renderGrowthProjection('moderate');

    // Set up growth tab listeners
    const tabs = document.querySelectorAll('.growth-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderGrowthProjection(tab.dataset.rate);
        });
    });
}

function renderGrowthProjection(rate) {
    const bankroll = BOOKIE_DATA.bankroll.current;
    const growthGrid = document.getElementById('growthProjection');
    if (!growthGrid) return;

    // Monthly unit gain based on rate
    const monthlyUnits = {
        conservative: 5,
        moderate: 10,
        aggressive: 20
    };

    const unitsPerMonth = monthlyUnits[rate] || 10;
    const months = ['Feb', 'Mar', 'Apr'];
    let projected = bankroll;

    growthGrid.innerHTML = months.map((month, i) => {
        const unitValue = projected * 0.02;
        const gain = i === 0 ? 0 : Math.round(unitsPerMonth * unitValue);
        if (i > 0) projected += gain;
        return `
            <div class="growth-month ${i === 0 ? 'current' : ''}">
                <div class="month-label">${month} 2026</div>
                <div class="month-value">$${Math.round(i === 0 ? bankroll : projected).toLocaleString()}</div>
                <div class="month-gain">${i === 0 ? 'NOW' : '+$' + gain.toLocaleString()}</div>
            </div>
        `;
    }).join('');
}

function updateUnitCalculator() {
    updateAllBankrollDisplays();
}

// ═══════════════════════════════════════════════════════════════
// DAILY CARD RENDERING - Compact Style matching Bets Page
// ═══════════════════════════════════════════════════════════════
function renderDailyCard() {
    // Render MAX Plays - Compact card style (same as Watch page)
    const maxPlaysContainer = document.getElementById('maxPlaysList');
    if (maxPlaysContainer) {
        maxPlaysContainer.innerHTML = BOOKIE_DATA.maxPlays.map((pick, i) => {
            const betAmount = pick.units * 20;
            const potentialWin = calculateWin(betAmount, pick.odds);
            return `
            <div class="bet-card max-play">
                <div class="bet-card-top">
                    <span class="bet-badge gold">MAX</span>
                    <span class="bet-meta">${getSportEmoji(pick.sport)} ${pick.sport} · ${pick.time}</span>
                    <span class="bet-locks">${'🔒'.repeat(pick.conviction)}</span>
                </div>
                <div class="bet-card-center">
                    ${getTeamLogo(pick.away, 40)}
                    <span class="bet-at">@</span>
                    ${getTeamLogo(pick.home, 40)}
                </div>
                <div class="bet-card-pick">${pick.pick}</div>
                <div class="bet-card-bottom">
                    <div class="bet-stat">${formatOdds(pick.odds)}</div>
                    <div class="bet-stat risk"><span>$${betAmount}</span><small>Risk</small></div>
                    <div class="bet-stat win"><span>$${potentialWin}</span><small>Win</small></div>
                </div>
            </div>
        `}).join('');
    }

    // Render Today's Picks - Compact card style (same as Watch page)
    const todaysContainer = document.getElementById('todaysPicksList');
    if (todaysContainer) {
        todaysContainer.innerHTML = BOOKIE_DATA.todaysPicks.map((pick, i) => {
            const betAmount = pick.units * 20;
            const potentialWin = calculateWin(betAmount, pick.odds);
            return `
            <div class="bet-card">
                <div class="bet-card-top">
                    <span class="bet-num">${i + 1}</span>
                    <span class="bet-meta">${getSportEmoji(pick.sport)} ${pick.sport} · ${pick.time}</span>
                    <span class="bet-locks">${'🔒'.repeat(pick.conviction)}</span>
                </div>
                <div class="bet-card-center">
                    ${getTeamLogo(pick.away, 40)}
                    <span class="bet-at">@</span>
                    ${getTeamLogo(pick.home, 40)}
                </div>
                <div class="bet-card-pick">${pick.pick}</div>
                <div class="bet-card-bottom">
                    <div class="bet-stat">${formatOdds(pick.odds)}</div>
                    <div class="bet-stat risk"><span>$${betAmount}</span><small>Risk</small></div>
                    <div class="bet-stat win"><span>$${potentialWin}</span><small>Win</small></div>
                </div>
            </div>
        `}).join('');
    }

    // Render Weekly Picks - Compact card style (same as Watch page)
    const weeklyContainer = document.getElementById('weeklyPicksList');
    if (weeklyContainer) {
        weeklyContainer.innerHTML = BOOKIE_DATA.weeklyPicks.map((pick, i) => {
            const betAmount = pick.units * 20;
            const potentialWin = calculateWin(betAmount, pick.odds);
            return `
            <div class="bet-card">
                <div class="bet-card-top">
                    <span class="bet-num">${i + 1}</span>
                    <span class="bet-meta">${getSportEmoji(pick.sport)} ${pick.sport} · ${pick.time}</span>
                    <span class="bet-locks">${'🔒'.repeat(pick.conviction)}</span>
                </div>
                <div class="bet-card-center">
                    ${getTeamLogo(pick.away, 40)}
                    <span class="bet-at">vs</span>
                    ${getTeamLogo(pick.home, 40)}
                </div>
                <div class="bet-card-pick">${pick.pick}</div>
                <div class="bet-card-bottom">
                    <div class="bet-stat">${formatOdds(pick.odds)}</div>
                    <div class="bet-stat risk"><span>$${betAmount}</span><small>Risk</small></div>
                    <div class="bet-stat win"><span>$${potentialWin}</span><small>Win</small></div>
                </div>
            </div>
        `}).join('');
    }

    // Render Parlays Grid - Same style as Bets page
    renderParlaysGrid();

    // Render Player Props - Same style as Bets page
    renderDailyPlayerProps();

    // Initialize parlay generator
    initParlayGenerator();
}

// Player Props for Daily Card - Same style as Bets page
function renderDailyPlayerProps() {
    const container = document.getElementById('playerPropsGrid');
    if (!container || !BOOKIE_DATA.playerProps) return;

    container.innerHTML = BOOKIE_DATA.playerProps.map(prop => {
        const betAmount = prop.units * 20;
        const potentialWin = calculateWin(betAmount, prop.odds);
        return `
            <div class="prop-card-new">
                <div class="prop-top">
                    ${getTeamLogo(prop.team, 36)}
                    <div class="prop-info">
                        <div class="prop-name">${prop.player}</div>
                        <div class="prop-game">${prop.game}</div>
                    </div>
                </div>
                <div class="prop-line-box">${prop.prop}</div>
                <div class="prop-bottom">
                    <div class="prop-stat">${formatOdds(prop.odds)}</div>
                    <div class="prop-stat risk"><span>$${betAmount}</span><small>Risk</small></div>
                    <div class="prop-stat win"><span>$${potentialWin}</span><small>Win</small></div>
                </div>
            </div>
        `;
    }).join('');
}

function renderAnalysisCard(pick, index) {
    const potentialWin = calculateWin(pick.units * 20, pick.odds);
    return `
        <div class="analysis-card" data-index="${index}">
            <div class="analysis-header" onclick="toggleAnalysisCard(${index})">
                <div class="analysis-matchup">
                    <span class="analysis-sport-tag">${pick.sport}</span>
                    <span class="analysis-teams">${pick.matchup}</span>
                </div>
                <div class="analysis-pick-preview">
                    <span class="analysis-pick-badge">${pick.pick}</span>
                    <span class="analysis-toggle">▼</span>
                </div>
            </div>
            <div class="analysis-body">
                <div class="analysis-section">
                    <div class="analysis-section-title">Key Factors</div>
                    <ul class="analysis-factors">
                        ${pick.factors.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
                ${pick.risk ? `
                    <div class="analysis-section">
                        <div class="analysis-risk">${pick.risk}</div>
                    </div>
                ` : ''}
                <div class="analysis-bet-info">
                    <div class="analysis-bet-item">
                        <div class="analysis-bet-value">${formatOdds(pick.odds)}</div>
                        <div class="analysis-bet-label">Odds</div>
                    </div>
                    <div class="analysis-bet-item">
                        <div class="analysis-bet-value">${pick.units}u</div>
                        <div class="analysis-bet-label">Units</div>
                    </div>
                    <div class="analysis-bet-item">
                        <div class="analysis-bet-value risk">$${pick.units * 20}</div>
                        <div class="analysis-bet-label">Risk</div>
                    </div>
                    <div class="analysis-bet-item">
                        <div class="analysis-bet-value win">$${potentialWin}</div>
                        <div class="analysis-bet-label">To Win</div>
                    </div>
                    <div class="analysis-bet-item">
                        <div class="analysis-bet-value">${'🔒'.repeat(pick.conviction)}</div>
                        <div class="analysis-bet-label">Conviction</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderParlaysGrid() {
    const container = document.getElementById('parlaysGrid');
    if (!container) return;

    const parlays = BOOKIE_DATA.parlays;
    const emojis = { safe: '🔒', value: '💰', risky: '🚀' };

    container.innerHTML = ['safe', 'value', 'risky'].map(type => {
        const p = parlays[type];
        if (!p) return '';
        return `
            <div class="parlay-card-new">
                <div class="parlay-head">
                    <span class="parlay-icon">${emojis[type]}</span>
                    <span class="parlay-title">${p.name}</span>
                    <span class="parlay-total-odds">${p.odds}</span>
                </div>
                <div class="parlay-legs">
                    ${p.legs.map(leg => {
                        const teams = getLogosFromGame(leg.game);
                        return `
                        <div class="parlay-leg">
                            <div class="leg-logos">
                                ${getTeamLogo(teams.away, 28)}
                                <span class="leg-at">@</span>
                                ${getTeamLogo(teams.home, 28)}
                            </div>
                            <div class="leg-pick">${leg.pick}</div>
                        </div>
                    `}).join('')}
                </div>
                <div class="parlay-foot">
                    <div class="parlay-stat risk"><span>$${p.wager}</span><small>Risk</small></div>
                    <div class="parlay-stat win"><span>$${p.payout}</span><small>Win</small></div>
                </div>
            </div>
        `;
    }).join('');
}

function initParlayGenerator() {
    const buttons = document.querySelectorAll('.risk-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            generateParlay(parseInt(btn.dataset.mult));
        });
    });
    generateParlay(3); // Default
}

function generateParlay(multiplier) {
    const container = document.getElementById('generatedParlay');
    if (!container) return;

    const picks = BOOKIE_DATA.todaysPicks.filter(p => p.conviction >= 3);
    let legs = [];

    // Select picks based on multiplier
    if (multiplier <= 5) {
        legs = picks.slice(0, 3);
    } else if (multiplier <= 10) {
        legs = picks.slice(0, 4);
    } else {
        legs = picks.slice(0, 5);
    }

    const wager = multiplier <= 5 ? 25 : multiplier <= 10 ? 20 : 10;
    const potentialWin = wager * multiplier;

    container.innerHTML = `
        <div class="parlay-card-new">
            <div class="parlay-head">
                <span class="parlay-icon">🎰</span>
                <span class="parlay-title">${multiplier}X PARLAY</span>
                <span class="parlay-total-odds">+${(multiplier - 1) * 100}%</span>
            </div>
            <div class="parlay-legs">
                ${legs.map(pick => `
                    <div class="parlay-leg">
                        <div class="leg-logos">
                            ${getTeamLogo(pick.away, 28)}
                            <span class="leg-at">@</span>
                            ${getTeamLogo(pick.home, 28)}
                        </div>
                        <div class="leg-pick">${pick.pick}</div>
                    </div>
                `).join('')}
            </div>
            <div class="parlay-foot">
                <div class="parlay-stat risk"><span>$${wager}</span><small>Risk</small></div>
                <div class="parlay-stat win"><span>$${potentialWin}</span><small>Win</small></div>
            </div>
        </div>
    `;
}

function renderPickCard(pick) {
    const isMax = pick.conviction === 5;
    return `
        <div class="pick-card ${isMax ? 'max-play' : ''}">
            <div class="pick-card-header">
                <div class="sport-badge">
                    ${getSportEmoji(pick.sport)} ${pick.sport}
                    ${isMax ? '<span class="max-badge">MAX PLAY</span>' : ''}
                </div>
                <div class="conviction-badge">
                    ${'<span class="lock">🔒</span>'.repeat(pick.conviction)}
                    ${'<span class="lock empty">🔒</span>'.repeat(5 - pick.conviction)}
                </div>
            </div>
            <div class="pick-card-body">
                <div class="matchup">${pick.matchup}</div>
                <div class="matchup-time">${pick.time}${pick.venue ? ' • ' + pick.venue : ''}</div>
                <div class="pick-selection">
                    <div class="pick-label">BOOKIE'S PICK</div>
                    <div class="pick-value">${pick.pick}</div>
                    <div class="pick-odds">${formatOdds(pick.odds)}</div>
                    <div class="pick-units">${pick.units}u${isMax ? ' (5% MAX)' : ''}</div>
                </div>
                <ul class="factors-list">
                    ${pick.factors.map(f => `<li>${f}</li>`).join('')}
                </ul>
                ${pick.risk ? `<div class="risk-flag">⚠️ ${pick.risk}</div>` : ''}
            </div>
        </div>
    `;
}

function renderParlays() {
    const parlays = BOOKIE_DATA.parlays;

    ['safe', 'value', 'risky'].forEach(type => {
        const container = document.getElementById(`parlay-${type}`);
        if (container && parlays[type]) {
            const p = parlays[type];
            container.innerHTML = `
                <div class="parlay-header">
                    <div class="parlay-title">${p.name}</div>
                    <div class="parlay-odds">${p.odds}</div>
                </div>
                <div class="parlay-legs">
                    ${p.legs.map(leg => `
                        <div class="parlay-leg">
                            <div class="leg-info">
                                <div class="leg-check">✓</div>
                                <div>
                                    <div class="leg-pick">${leg.pick}</div>
                                    ${leg.game ? `<div style="font-size: 10px; color: var(--text-muted);">${leg.game}</div>` : ''}
                                </div>
                            </div>
                            <div class="leg-odds">${formatOdds(leg.odds)}</div>
                        </div>
                    `).join('')}
                </div>
                ${p.wager ? `
                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; font-size: 13px;">
                    <span style="color: var(--text-muted);">Wager: $${p.wager}</span>
                    <span style="color: var(--accent-green); font-weight: 700;">To Win: $${p.payout}</span>
                </div>
                ` : ''}
            `;
        }
    });
}

// ═══════════════════════════════════════════════════════════════
// PLAYER PROPS
// ═══════════════════════════════════════════════════════════════
function renderPlayerProps() {
    const container = document.getElementById('playerPropsGrid');
    if (!container || !BOOKIE_DATA.playerProps) return;

    container.innerHTML = BOOKIE_DATA.playerProps.map(prop => {
        const betAmount = prop.units * 20;
        const potentialWin = calculateWin(betAmount, prop.odds);
        return `
            <div class="prop-card">
                <div class="prop-header">
                    <div class="prop-player">${prop.player}</div>
                    <div class="prop-team">${prop.team} | ${prop.game}</div>
                </div>
                <div class="prop-body">
                    <div class="prop-pick">${prop.prop}</div>
                    <div class="prop-odds">${formatOdds(prop.odds)}</div>
                    <div class="prop-reasoning">${prop.reasoning}</div>
                    <div class="prop-footer">
                        <span class="conviction-badge">${'🔒'.repeat(prop.conviction)}</span>
                        <span class="prop-units">${prop.units}u</span>
                    </div>
                    <div class="prop-bet-info" style="display: flex; gap: 20px; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border);">
                        <div style="text-align: center;">
                            <div style="font-size: 16px; font-weight: 800; color: var(--accent-red);">$${betAmount}</div>
                            <div style="font-size: 9px; color: var(--text-muted); text-transform: uppercase;">Risk</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 16px; font-weight: 800; color: var(--accent-green);">$${potentialWin}</div>
                            <div style="font-size: 9px; color: var(--text-muted); text-transform: uppercase;">To Win</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ═══════════════════════════════════════════════════════════════
// HISTORY / TRACK RECORD
// ═══════════════════════════════════════════════════════════════
let currentFilter = 'all';

function renderHistory() {
    const stats = calculateStats();

    // Update stat cards
    document.getElementById('historyTotal')?.textContent && (document.getElementById('historyTotal').textContent = stats.total);
    document.getElementById('historyRecord')?.textContent && (document.getElementById('historyRecord').textContent = stats.record);
    document.getElementById('historyWinRate')?.textContent && (document.getElementById('historyWinRate').textContent = stats.winRate + '%');
    document.getElementById('historyUnits')?.textContent && (document.getElementById('historyUnits').textContent = (stats.netUnits >= 0 ? '+' : '') + stats.netUnits + 'u');
    document.getElementById('historyROI')?.textContent && (document.getElementById('historyROI').textContent = ((parseFloat(stats.netUnits) / stats.total) * 100).toFixed(1) + '%');

    // Initialize filter buttons
    initHistoryFilters();

    // Render results grid
    renderResultsGrid(BOOKIE_DATA.history);
}

function initHistoryFilters() {
    const filterContainer = document.getElementById('historyFilters');
    if (!filterContainer) return;

    filterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            // Update active state
            filterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            // Get filter value and render
            currentFilter = e.target.dataset.filter;
            const filteredHistory = currentFilter === 'all'
                ? BOOKIE_DATA.history
                : BOOKIE_DATA.history.filter(pick => pick.sport === currentFilter);
            renderResultsGrid(filteredHistory);
        }
    });
}

function renderResultsGrid(history) {
    const grid = document.getElementById('resultsGrid');
    if (!grid) return;

    grid.innerHTML = history.map((pick, index) => renderResultCard(pick, index)).join('');
}

function renderResultCard(pick, index) {
    const isWin = pick.result === 'win';
    const isLoss = pick.result === 'loss';
    const isPush = pick.result === 'push';

    // Determine winner for score highlighting
    const score1 = typeof pick.score1 === 'number' ? pick.score1 : null;
    const score2 = typeof pick.score2 === 'number' ? pick.score2 : null;
    const team1IsWinner = score1 !== null && score2 !== null && score1 > score2;
    const team2IsWinner = score1 !== null && score2 !== null && score2 > score1;

    // Circle icon
    let circleIcon = '';
    if (isWin) circleIcon = 'W';
    else if (isLoss) circleIcon = 'L';
    else if (isPush) circleIcon = 'P';

    // Profit display
    let profitClass = 'neutral';
    if (pick.pl > 0) profitClass = 'positive';
    else if (pick.pl < 0) profitClass = 'negative';

    // Calculate actual dollar amounts
    const wagered = pick.units * 20;
    const profitDollars = pick.pl * 20;

    // Result stamp text
    const resultStampText = isWin ? 'WIN!' : isLoss ? 'LOSS' : 'PUSH';

    return `
        <div class="flip-card result-card ${pick.result}" data-index="${index}" onclick="flipCard(this)">
            <div class="flip-card-inner">
                <!-- FRONT SIDE - Bet Info -->
                <div class="flip-card-front">
                    <div class="result-card-header">
                        <div class="result-date">
                            ${pick.date}, 2026
                        </div>
                        <div class="result-sport">
                            ${getSportEmoji(pick.sport)} ${pick.sport}
                        </div>
                    </div>
                    <div class="scoreboard">
                        <div class="team-score ${team1IsWinner ? 'winner' : team2IsWinner ? 'loser' : ''} ${pick.picked === pick.team1 ? 'picked' : ''}">
                            ${getTeamLogo(pick.team1, 45)}
                            <div class="team-abbr">${pick.team1 || ''}</div>
                            <div class="team-points">${pick.score1 ?? '-'}</div>
                        </div>
                        <div class="score-divider">
                            <div class="result-circle ${pick.result}">${circleIcon}</div>
                            <div class="score-divider-text">FINAL</div>
                        </div>
                        <div class="team-score ${team2IsWinner ? 'winner' : team1IsWinner ? 'loser' : ''} ${pick.picked === pick.team2 ? 'picked' : ''}">
                            ${getTeamLogo(pick.team2, 45)}
                            <div class="team-abbr">${pick.team2 || ''}</div>
                            <div class="team-points">${pick.score2 ?? '-'}</div>
                        </div>
                    </div>
                    <div class="result-card-footer">
                        <div class="result-pick-info">
                            <div class="result-pick">${pick.pick}</div>
                            <div class="result-odds">${formatOdds(pick.odds)} | ${pick.units}u ($${wagered})</div>
                        </div>
                    </div>
                    <button class="reveal-btn">TAP TO REVEAL</button>
                </div>

                <!-- BACK SIDE - Result Reveal -->
                <div class="flip-card-back ${pick.result}">
                    <div class="result-stamp ${pick.result}">${resultStampText}</div>
                    <div class="result-details">
                        <div class="result-score">${pick.score1 ?? 0} - ${pick.score2 ?? 0}</div>
                        <div class="result-profit ${profitClass}">
                            ${profitDollars >= 0 ? '+' : ''}$${Math.abs(profitDollars).toFixed(0)}
                            <span style="font-size: 14px; opacity: 0.8;">(${pick.pl >= 0 ? '+' : ''}${pick.pl.toFixed(2)}u)</span>
                        </div>
                        <div style="margin-top: 15px; font-size: 12px; color: var(--text-muted);">
                            ${pick.pick} · ${formatOdds(pick.odds)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════════
// SPORT SCHEDULES
// ═══════════════════════════════════════════════════════════════
function renderNBASchedule() {
    const container = document.getElementById('nbaScheduleContainer');
    if (!container) return;

    container.innerHTML = BOOKIE_DATA.nbaSchedule.map(day => `
        <div class="sport-schedule">
            <div class="schedule-header">
                <div class="schedule-date">${day.date}, 2026</div>
                <div>${day.games.length} Games</div>
            </div>
            ${day.games.map(game => `
                <div class="game-row">
                    <div class="team-away">
                        <div>
                            <div class="team-name">${game.away}</div>
                            <div class="team-record">${game.awayRecord}</div>
                        </div>
                    </div>
                    <div class="game-time">${game.time}${game.tv ? '<br><span style="color: var(--accent-primary);">' + game.tv + '</span>' : ''}</div>
                    <div class="team-home">
                        <div>
                            <div class="team-name">${game.home}</div>
                            <div class="team-record">${game.homeRecord}</div>
                        </div>
                    </div>
                    <div class="game-odds">
                        <div class="odds-btn">${game.spread}</div>
                        <div class="odds-btn">O/U ${game.ou}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');
}

function renderUFCSchedule() {
    const container = document.getElementById('ufcScheduleContainer');
    if (!container) return;

    container.innerHTML = BOOKIE_DATA.ufcSchedule.map(event => `
        <div class="sport-schedule">
            <div class="schedule-header">
                <div class="schedule-date">${event.date} — ${event.event}</div>
                <div>${event.location}</div>
            </div>
            ${event.fights.map(fight => `
                <div class="game-row" style="grid-template-columns: 1fr 120px 1fr 100px;">
                    <div class="team-away">
                        <div class="team-name">${fight.fighter1}</div>
                    </div>
                    <div class="game-time">
                        <span style="color: var(--accent-primary); font-size: 11px;">${fight.type}</span><br>
                        ${fight.weight}
                    </div>
                    <div class="team-home" style="justify-content: flex-start; text-align: left;">
                        <div class="team-name">${fight.fighter2}</div>
                    </div>
                    <div class="game-odds">
                        <div class="odds-btn">VS</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');
}

function renderNHLSchedule() {
    const container = document.getElementById('nhlScheduleContainer');
    if (!container) return;

    container.innerHTML = BOOKIE_DATA.nhlSchedule.map(day => {
        if (day.note && !day.games) {
            return `
                <div class="sport-schedule">
                    <div class="schedule-header" style="background: rgba(255, 215, 0, 0.1);">
                        <div class="schedule-date">${day.date}</div>
                        <div style="color: var(--accent-gold);">${day.note}</div>
                    </div>
                </div>
            `;
        }
        return `
            <div class="sport-schedule">
                <div class="schedule-header">
                    <div class="schedule-date">${day.date}, 2026</div>
                    <div>${day.games?.length || 0} Games</div>
                </div>
                ${day.games?.map(game => `
                    <div class="game-row" style="grid-template-columns: 1fr 100px 1fr;">
                        <div class="team-away">
                            <div class="team-name">${game.away}</div>
                        </div>
                        <div class="game-time">
                            ${game.time}
                            ${game.note ? '<br><span style="color: var(--accent-gold); font-size: 10px;">' + game.note + '</span>' : ''}
                        </div>
                        <div class="team-home" style="justify-content: flex-start; text-align: left;">
                            <div class="team-name">${game.home}</div>
                        </div>
                    </div>
                `).join('') || ''}
            </div>
        `;
    }).join('');
}

function renderSoccerSchedule() {
    const container = document.getElementById('soccerScheduleContainer');
    if (!container) return;

    container.innerHTML = BOOKIE_DATA.soccerSchedule.map(day => `
        <div class="sport-schedule">
            <div class="schedule-header">
                <div class="schedule-date">${day.date} — ${day.league}</div>
                <div>${day.games.length} Matches</div>
            </div>
            ${day.games.map(game => `
                <div class="game-row" style="grid-template-columns: 1fr 100px 1fr;">
                    <div class="team-away">
                        <div class="team-name">${game.home}</div>
                    </div>
                    <div class="game-time">
                        ${game.time}
                        ${game.note ? '<br><span style="color: var(--accent-gold); font-size: 10px;">' + game.note + '</span>' : ''}
                        ${game.tv ? '<br><span style="color: var(--accent-primary); font-size: 10px;">' + game.tv + '</span>' : ''}
                    </div>
                    <div class="team-home" style="justify-content: flex-start; text-align: left;">
                        <div class="team-name">${game.away}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');
}

// ═══════════════════════════════════════════════════════════════
// CALCULATORS
// ═══════════════════════════════════════════════════════════════
function initCalculators() {
    // Bet Calculator
    const betAmount = document.getElementById('betAmount');
    const betOdds = document.getElementById('betOdds');
    if (betAmount && betOdds) {
        betAmount.addEventListener('input', calculateBet);
        betOdds.addEventListener('input', calculateBet);
        calculateBet();
    }

    // Parlay Calculator
    const parlayInputs = document.querySelectorAll('.parlay-calc-input');
    parlayInputs.forEach(input => {
        input.addEventListener('input', calculateParlayCustom);
    });
}

function calculateBet() {
    const amount = parseFloat(document.getElementById('betAmount')?.value) || 0;
    const odds = parseFloat(document.getElementById('betOdds')?.value) || -110;

    let profit = 0;
    if (odds > 0) {
        profit = amount * (odds / 100);
    } else {
        profit = amount * (100 / Math.abs(odds));
    }

    const profitEl = document.getElementById('betProfit');
    const payoutEl = document.getElementById('betPayout');
    if (profitEl) profitEl.textContent = '$' + profit.toFixed(2);
    if (payoutEl) payoutEl.textContent = '$' + (amount + profit).toFixed(2);
}

function calculateParlayCustom() {
    const bet = parseFloat(document.getElementById('parlayBetAmount')?.value) || 50;
    const legs = [];

    for (let i = 1; i <= 5; i++) {
        const val = parseFloat(document.getElementById(`parlayLeg${i}`)?.value);
        if (val && val !== 0) legs.push(val);
    }

    if (legs.length < 2) return;

    const totalDecimal = legs.reduce((acc, odds) => {
        const dec = odds > 0 ? (odds / 100) + 1 : (100 / Math.abs(odds)) + 1;
        return acc * dec;
    }, 1);

    const payout = bet * totalDecimal;
    let americanOdds = totalDecimal >= 2
        ? '+' + Math.round((totalDecimal - 1) * 100)
        : Math.round(-100 / (totalDecimal - 1));

    const oddsEl = document.getElementById('parlayCalcOdds');
    const payoutEl = document.getElementById('parlayCalcPayout');
    if (oddsEl) oddsEl.textContent = americanOdds;
    if (payoutEl) payoutEl.textContent = '$' + payout.toFixed(2);
}

// ═══════════════════════════════════════════════════════════════
// BET LOGGER
// ═══════════════════════════════════════════════════════════════
function logBet() {
    const sport = document.getElementById('logSport')?.value;
    const pick = document.getElementById('logPick')?.value;
    const odds = parseFloat(document.getElementById('logOdds')?.value);
    const units = parseFloat(document.getElementById('logUnits')?.value);

    if (!sport || !pick || !odds || !units) {
        alert('Please fill all fields');
        return;
    }

    const bet = {
        id: Date.now(),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        sport,
        pick,
        odds,
        units,
        result: 'pending',
        pl: 0
    };

    BOOKIE_DATA.betLog.unshift(bet);
    renderBetLog();

    // Clear form
    document.getElementById('logPick').value = '';
    document.getElementById('logOdds').value = '';
    document.getElementById('logUnits').value = '';
}

function renderBetLog() {
    const container = document.getElementById('betLogTable');
    if (!container) return;

    container.innerHTML = BOOKIE_DATA.betLog.map(bet => `
        <div class="history-row">
            <div>${bet.date}</div>
            <div>${getSportEmoji(bet.sport)} ${bet.pick}</div>
            <div>${formatOdds(bet.odds)}</div>
            <div>
                <span class="result-badge ${bet.result}">${bet.result.toUpperCase()}</span>
            </div>
            <div>${bet.units}u</div>
            <div>
                ${bet.result === 'pending' ? `
                    <button onclick="settleBet(${bet.id}, 'win')" style="background: var(--accent-green); border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; margin-right: 4px;">W</button>
                    <button onclick="settleBet(${bet.id}, 'loss')" style="background: var(--accent-red); border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer;">L</button>
                ` : `<span class="units-change ${bet.pl >= 0 ? 'positive' : 'negative'}">${bet.pl >= 0 ? '+' : ''}${bet.pl.toFixed(2)}u</span>`}
            </div>
        </div>
    `).join('');
}

function settleBet(id, result) {
    const bet = BOOKIE_DATA.betLog.find(b => b.id === id);
    if (!bet) return;

    bet.result = result;
    if (result === 'win') {
        bet.pl = bet.odds > 0 ? bet.units * (bet.odds / 100) : bet.units * (100 / Math.abs(bet.odds));
    } else {
        bet.pl = -bet.units;
    }

    renderBetLog();
    updateBetLogStats();
}

function updateBetLogStats() {
    const settled = BOOKIE_DATA.betLog.filter(b => b.result !== 'pending');
    const wins = settled.filter(b => b.result === 'win').length;
    const total = settled.length;
    const netPL = settled.reduce((sum, b) => sum + b.pl, 0);

    const statsEl = document.getElementById('betLogStats');
    if (statsEl) {
        statsEl.innerHTML = `
            <span>Record: ${wins}-${total - wins}</span> |
            <span>Win Rate: ${total > 0 ? ((wins/total)*100).toFixed(1) : 0}%</span> |
            <span class="${netPL >= 0 ? 'positive' : 'negative'}">P/L: ${netPL >= 0 ? '+' : ''}${netPL.toFixed(2)}u</span>
        `;
    }
}


// ═══════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════
function getSportEmoji(sport) {
    const emojis = {
        'NBA': '🏀',
        'NFL': '🏈',
        'NHL': '🏒',
        'UFC': '🥊',
        'MLB': '⚾',
        'NCAAB': '🏀',
        'NCAAW': '🏀',
        'Soccer': '⚽',
        'EPL': '⚽',
        'Tennis': '🎾',
        'Golf': '⛳'
    };
    return emojis[sport] || '🎯';
}

function formatOdds(odds) {
    if (odds > 0) return '+' + odds;
    return odds.toString();
}

// ═══════════════════════════════════════════════════════════════
// BETS PAGE - Action Tracker
// ═══════════════════════════════════════════════════════════════
let betStatus = {};

function loadBetStatus() {
    const saved = localStorage.getItem('bookieBetStatus');
    if (saved) {
        betStatus = JSON.parse(saved);
    }
    updateBetCounts();
}

function saveBetStatus() {
    localStorage.setItem('bookieBetStatus', JSON.stringify(betStatus));
}

function renderBetsPage() {
    renderStraightBets();
    renderParlayBets();
    renderPropBets();
    updateBetCounts();
}

function renderStraightBets() {
    const container = document.getElementById('straightBetsList');
    if (!container) return;

    const bets = [
        { id: 'straight-1', game: 'DEN @ DET', pick: 'Pistons -6.5', odds: 113, amount: 31, deadline: '4:00 PM', sport: 'NBA', away: 'DEN', home: 'DET' },
        { id: 'straight-2', game: 'OTT @ CAR', pick: 'Senators ML', odds: 148, amount: 21, deadline: '4:00 PM', sport: 'NHL', away: 'OTT', home: 'CAR' },
        { id: 'straight-3', game: 'MIA @ ATL', pick: 'Heat -4.5', odds: 138, amount: 21, deadline: '4:30 PM', sport: 'NBA', away: 'MIA', home: 'ATL' },
        { id: 'straight-4', game: 'BUF @ TB', pick: 'Sabres ML', odds: 160, amount: 21, deadline: '4:30 PM', sport: 'NHL', away: 'BUF', home: 'TB' },
        { id: 'straight-5', game: 'BOS @ DAL', pick: 'Mavericks +8.5', odds: -137, amount: 21, deadline: '5:00 PM', sport: 'NBA', away: 'BOS', home: 'DAL' },
        { id: 'straight-6', game: 'DRAKE @ BEL', pick: 'Belmont -8.5', odds: -143, amount: 21, deadline: '6:00 PM', sport: 'NCAAB', away: 'DRAKE', home: 'BEL' },
        { id: 'straight-7', game: 'TOR @ EDM', pick: 'UNDER 6.5', odds: 120, amount: 21, deadline: '5:30 PM', sport: 'NHL', away: 'TOR', home: 'EDM' },
        { id: 'straight-8', game: 'NCST @ SMU', pick: 'SMU +2.5', odds: -133, amount: 21, deadline: '6:00 PM', sport: 'NCAAB', away: 'NCST', home: 'SMU' },
        { id: 'straight-9', game: 'RUT @ UCLA', pick: 'UCLA -12.5', odds: -138, amount: 31, deadline: '6:30 PM', sport: 'NCAAB', away: 'RUT', home: 'UCLA' },
        { id: 'straight-10', game: 'PHI @ GSW', pick: '76ers +2.5', odds: -102, amount: 41, deadline: '7:00 PM', sport: 'NBA', away: 'PHI', home: 'GSW' },
    ];

    container.innerHTML = bets.map((bet, index) => {
        const potentialWin = calculateWin(bet.amount, bet.odds);
        const status = betStatus[bet.id];
        let statusClass = '';
        let statusIcon = '';
        if (status === 'placed') {
            statusClass = 'placed';
            statusIcon = '✓';
        } else if (status === 'missed') {
            statusClass = 'missed';
            statusIcon = '✗';
        }

        return `
            <div class="bet-card ${statusClass}" data-id="${bet.id}">
                <div class="bet-card-top">
                    <span class="bet-num">${index + 1}</span>
                    <span class="bet-meta">${getSportEmoji(bet.sport)} ${bet.sport} · ${bet.deadline}</span>
                    <button class="bet-check ${statusClass}" onclick="cycleBetStatus('${bet.id}')">${statusIcon}</button>
                </div>
                <div class="bet-card-center">
                    ${getTeamLogo(bet.away, 40)}
                    <span class="bet-at">@</span>
                    ${getTeamLogo(bet.home, 40)}
                </div>
                <div class="bet-card-pick">${bet.pick}</div>
                <div class="bet-card-bottom">
                    <div class="bet-stat risk"><span>$${bet.amount}</span><small>Risk</small></div>
                    <div class="bet-stat odds">${formatOdds(bet.odds)}</div>
                    <div class="bet-stat win"><span>$${potentialWin}</span><small>Win</small></div>
                </div>
            </div>
        `;
    }).join('');
}

function calculateWin(amount, odds) {
    if (odds > 0) {
        return Math.round(amount * (odds / 100));
    } else {
        return Math.round(amount * (100 / Math.abs(odds)));
    }
}

function cycleBetStatus(betId) {
    if (!betStatus[betId]) {
        betStatus[betId] = 'placed';
    } else if (betStatus[betId] === 'placed') {
        betStatus[betId] = 'missed';
    } else {
        betStatus[betId] = null;
    }
    saveBetStatus();
    renderBetsPage();
}

function renderParlayBets() {
    const container = document.getElementById('parlayBetsList');
    if (!container) return;

    const parlays = [
        {
            id: 'parlay-1',
            name: 'CHALKY PARLAY',
            emoji: '🔒',
            odds: '+1657',
            amount: 25,
            toWin: 446,
            legs: [
                { pick: 'Pistons -6.5', away: 'DEN', home: 'DET' },
                { pick: 'Heat -4.5', away: 'MIA', home: 'ATL' },
                { pick: 'SMU +2.5', away: 'NCST', home: 'SMU' },
                { pick: '76ers +2.5', away: 'PHI', home: 'GSW' }
            ]
        },
        {
            id: 'parlay-2',
            name: 'VALUE PARLAY',
            emoji: '💰',
            odds: '+1831',
            amount: 20,
            toWin: 392,
            legs: [
                { pick: 'Senators ML', away: 'OTT', home: 'CAR' },
                { pick: 'UNDER 6.5', away: 'TOR', home: 'EDM' },
                { pick: 'UCLA -12.5', away: 'RUT', home: 'UCLA' },
                { pick: '76ers +2.5', away: 'PHI', home: 'GSW' }
            ]
        },
        {
            id: 'parlay-3',
            name: 'MOON SHOT',
            emoji: '🚀',
            odds: '+4306',
            amount: 10,
            toWin: 448,
            legs: [
                { pick: 'Senators ML', away: 'OTT', home: 'CAR' },
                { pick: 'Sabres ML', away: 'BUF', home: 'TB' },
                { pick: 'Mavericks +8.5', away: 'BOS', home: 'DAL' },
                { pick: 'Belmont -8.5', away: 'DRAKE', home: 'BEL' },
                { pick: '76ers ML', away: 'PHI', home: 'GSW' }
            ]
        }
    ];

    container.innerHTML = parlays.map(parlay => {
        const status = betStatus[parlay.id];
        let statusClass = '';
        let statusIcon = '';
        if (status === 'placed') {
            statusClass = 'placed';
            statusIcon = '✓';
        } else if (status === 'missed') {
            statusClass = 'missed';
            statusIcon = '✗';
        }

        return `
            <div class="parlay-card-new ${statusClass}" data-id="${parlay.id}">
                <div class="parlay-head">
                    <span class="parlay-icon">${parlay.emoji}</span>
                    <span class="parlay-title">${parlay.name}</span>
                    <span class="parlay-total-odds">${parlay.odds}</span>
                    <button class="bet-check ${statusClass}" onclick="cycleBetStatus('${parlay.id}')">${statusIcon}</button>
                </div>
                <div class="parlay-legs">
                    ${parlay.legs.map(leg => `
                        <div class="parlay-leg">
                            <div class="leg-logos">
                                ${getTeamLogo(leg.away, 28)}
                                <span class="leg-at">@</span>
                                ${getTeamLogo(leg.home, 28)}
                            </div>
                            <div class="leg-pick">${leg.pick}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="parlay-foot">
                    <div class="parlay-stat risk"><span>$${parlay.amount}</span><small>Risk</small></div>
                    <div class="parlay-stat win"><span>$${parlay.toWin}</span><small>Win</small></div>
                </div>
            </div>
        `;
    }).join('');
}

function renderPropBets() {
    const container = document.getElementById('propBetsList');
    if (!container) return;

    const props = [
        { id: 'prop-1', player: 'Tyrese Maxey', teamAbbr: 'PHI', prop: 'Over 26.5 Points', odds: -185, amount: 31, game: 'PHI @ GSW' },
        { id: 'prop-3', player: 'Cade Cunningham', teamAbbr: 'DET', prop: 'Over 8.5 Assists', odds: -257, amount: 21, game: 'DEN @ DET' },
        { id: 'prop-4', player: 'Nikola Jokic', teamAbbr: 'DEN', prop: 'Over 9.5 Assists', odds: 131, amount: 21, game: 'DEN @ DET' },
        { id: 'prop-5', player: 'Jaylen Brown', teamAbbr: 'BOS', prop: 'Over 28.5 Points', odds: -145, amount: 21, game: 'BOS @ DAL' },
        { id: 'prop-6', player: 'Cooper Flagg', teamAbbr: 'DAL', prop: 'Over 18.5 Points', odds: -250, amount: 21, game: 'BOS @ DAL' },
    ];

    container.innerHTML = props.map(prop => {
        const potentialWin = calculateWin(prop.amount, prop.odds);
        const status = betStatus[prop.id];
        let statusClass = '';
        let statusIcon = '';
        if (status === 'placed') {
            statusClass = 'placed';
            statusIcon = '✓';
        } else if (status === 'missed') {
            statusClass = 'missed';
            statusIcon = '✗';
        }

        return `
            <div class="prop-card-new ${statusClass}" data-id="${prop.id}">
                <div class="prop-top">
                    ${getTeamLogo(prop.teamAbbr, 36)}
                    <div class="prop-info">
                        <div class="prop-name">${prop.player}</div>
                        <div class="prop-game">${prop.game}</div>
                    </div>
                    <button class="bet-check ${statusClass}" onclick="cycleBetStatus('${prop.id}')">${statusIcon}</button>
                </div>
                <div class="prop-line-box">${prop.prop}</div>
                <div class="prop-bottom">
                    <div class="prop-stat">${formatOdds(prop.odds)}</div>
                    <div class="prop-stat risk"><span>$${prop.amount}</span><small>Risk</small></div>
                    <div class="prop-stat win"><span>$${potentialWin}</span><small>Win</small></div>
                </div>
            </div>
        `;
    }).join('');
}

function renderBetItem(bet) {
    const isPlaced = betStatus[bet.id];
    return `
        <div class="bet-item ${isPlaced ? 'placed' : ''}" data-id="${bet.id}">
            <div class="bet-info">
                <div class="bet-game">${bet.game}</div>
                <div class="bet-pick">${bet.pick}</div>
            </div>
            <div class="bet-odds">${formatOdds(bet.odds)}</div>
            <div class="bet-amount">$${bet.amount}</div>
            <div class="bet-deadline">${bet.deadline}</div>
            <div class="bet-action">
                <button class="place-btn ${isPlaced ? 'placed' : ''}" onclick="toggleBetPlaced('${bet.id}')">
                    ${isPlaced ? 'Placed' : 'Place'}
                </button>
            </div>
        </div>
    `;
}

function toggleAnalysisCard(index) {
    const card = document.querySelector(`.analysis-card[data-index="${index}"]`);
    if (card) {
        card.classList.toggle('expanded');
    }
}

function updateBetCounts() {
    const total = 18; // 10 straights + 3 parlays + 5 props
    const placed = Object.values(betStatus).filter(v => v === 'placed').length;
    const missed = Object.values(betStatus).filter(v => v === 'missed').length;
    const el = document.getElementById('betsPlaced');
    if (el) {
        el.textContent = `${placed}/${total}`;
        if (placed === total) {
            el.style.color = 'var(--accent-green)';
        } else if (missed > 0) {
            el.style.color = 'var(--accent-red)';
        } else {
            el.style.color = 'var(--accent-primary)';
        }
    }

    // Update total risk display
    const totalRisk = 250 + 55 + 115; // straights + parlays + props = $420
    const riskEl = document.getElementById('totalRisk');
    if (riskEl) riskEl.textContent = '$' + totalRisk;

    // Update potential win
    const potentialEl = document.getElementById('potentialWin');
    if (potentialEl) potentialEl.textContent = '$1,200+';
}

function resetAllBets() {
    if (confirm('Reset all bets to not placed?')) {
        betStatus = {};
        saveBetStatus();
        renderBetsPage();
    }
}

function markAllPlaced() {
    const allIds = [
        'straight-1', 'straight-2', 'straight-3', 'straight-4', 'straight-5',
        'straight-6', 'straight-7', 'straight-8', 'straight-9', 'straight-10',
        'parlay-1', 'parlay-2', 'parlay-3',
        'prop-1', 'prop-3', 'prop-4', 'prop-5', 'prop-6'
    ];
    allIds.forEach(id => betStatus[id] = 'placed');
    saveBetStatus();
    renderBetsPage();
}

// ═══════════════════════════════════════════════════════════════
// WATCH PAGE - Game Schedule
// ═══════════════════════════════════════════════════════════════
function renderWatchPage() {
    const games = [
        {
            id: 1,
            time: '4:00 PM',
            timePST: '4:00 PM PST',
            timeET: '7:00 PM ET',
            sport: 'NHL',
            away: { abbr: 'OTT', name: 'Senators', record: '27-21-7' },
            home: { abbr: 'CAR', name: 'Hurricanes', record: '34-15-4' },
            channel: 'ESPN+',
            picks: [
                { pick: 'Senators ML', odds: '+145', amount: 20 }
            ],
            status: 'upcoming'
        },
        {
            id: 2,
            time: '4:00 PM',
            timePST: '4:00 PM PST',
            timeET: '7:00 PM ET',
            sport: 'NBA',
            away: { abbr: 'DEN', name: 'Nuggets', record: '33-17' },
            home: { abbr: 'DET', name: 'Pistons', record: '36-12' },
            channel: 'League Pass',
            picks: [
                { pick: 'Pistons -6', odds: '-110', amount: 30 },
                { pick: 'Cade O7.5 ast', odds: '-120', amount: 20 },
                { pick: 'Jokic Triple Dub', odds: '+180', amount: 10 }
            ],
            status: 'upcoming'
        },
        {
            id: 3,
            time: '4:30 PM',
            timePST: '4:30 PM PST',
            timeET: '7:30 PM ET',
            sport: 'NBA',
            away: { abbr: 'MIA', name: 'Heat', record: '27-24' },
            home: { abbr: 'ATL', name: 'Hawks', record: '24-27' },
            channel: 'League Pass',
            picks: [
                { pick: 'Heat -4.5', odds: '-110', amount: 20 }
            ],
            status: 'upcoming'
        },
        {
            id: 4,
            time: '4:30 PM',
            timePST: '4:30 PM PST',
            timeET: '7:30 PM ET',
            sport: 'NHL',
            away: { abbr: 'BUF', name: 'Sabres', record: '32-18-5' },
            home: { abbr: 'TB', name: 'Lightning', record: '35-14-4' },
            channel: 'ESPN+',
            picks: [
                { pick: 'Sabres ML', odds: '+195', amount: 20 }
            ],
            status: 'upcoming'
        },
        {
            id: 5,
            time: '5:00 PM',
            timePST: '5:00 PM PST',
            timeET: '8:00 PM ET',
            sport: 'NBA',
            away: { abbr: 'BOS', name: 'Celtics', record: '31-18' },
            home: { abbr: 'DAL', name: 'Mavericks', record: '19-30' },
            channel: 'TNT',
            picks: [
                { pick: 'Mavericks +8', odds: '-110', amount: 20 },
                { pick: 'Jaylen Brown O28.5', odds: '-110', amount: 20 },
                { pick: 'Cooper Flagg O18.5', odds: '-115', amount: 20 }
            ],
            status: 'upcoming'
        },
        {
            id: 6,
            time: '5:00 PM',
            timePST: '5:00 PM PST',
            timeET: '8:00 PM ET',
            sport: 'NCAAB',
            away: { abbr: 'DRAKE', name: 'Drake', record: '12-10' },
            home: { abbr: 'BEL', name: 'Belmont', record: '19-3' },
            channel: 'ESPN+',
            picks: [
                { pick: 'Belmont -7.5', odds: '-110', amount: 20 }
            ],
            status: 'upcoming'
        },
        {
            id: 7,
            time: '6:00 PM',
            timePST: '6:00 PM PST',
            timeET: '9:00 PM ET',
            sport: 'NHL',
            away: { abbr: 'TOR', name: 'Maple Leafs', record: '32-17-4' },
            home: { abbr: 'EDM', name: 'Oilers', record: '30-18-5' },
            channel: 'ESPN',
            picks: [
                { pick: 'UNDER 6.5', odds: '-115', amount: 20 }
            ],
            status: 'upcoming'
        },
        {
            id: 8,
            time: '6:00 PM',
            timePST: '6:00 PM PST',
            timeET: '9:00 PM ET',
            sport: 'NCAAB',
            away: { abbr: 'NCST', name: 'NC State', record: '12-12' },
            home: { abbr: 'SMU', name: 'SMU', record: '17-7' },
            channel: 'ESPN2',
            picks: [
                { pick: 'SMU +2.5', odds: '-110', amount: 20 }
            ],
            status: 'upcoming'
        },
        {
            id: 9,
            time: '6:30 PM',
            timePST: '6:30 PM PST',
            timeET: '9:30 PM ET',
            sport: 'NCAAB',
            away: { abbr: 'RUT', name: 'Rutgers', record: '13-11' },
            home: { abbr: 'UCLA', name: 'UCLA', record: '16-8' },
            channel: 'BTN',
            picks: [
                { pick: 'UCLA -12.5', odds: '-110', amount: 30 }
            ],
            status: 'upcoming'
        },
        {
            id: 10,
            time: '7:00 PM',
            timePST: '7:00 PM PST',
            timeET: '10:00 PM ET',
            sport: 'NBA',
            away: { abbr: 'PHI', name: '76ers', record: '28-21' },
            home: { abbr: 'GSW', name: 'Warriors', record: '27-23' },
            channel: 'NBA TV',
            picks: [
                { pick: '76ers +2.5', odds: '-110', amount: 40 },
                { pick: 'Maxey O26.5 pts', odds: '-115', amount: 30 },
                { pick: 'Embiid O11.5 reb', odds: '-110', amount: 20 }
            ],
            status: 'upcoming'
        }
    ];

    renderNextGame(games[0]);
    renderTimeline(games);
    renderGamesList(games);
    renderFlightTracker(games);
}

function renderNextGame(game) {
    const container = document.getElementById('nextGameInfo');
    if (!container) return;

    const totalAmount = game.picks.reduce((sum, p) => sum + p.amount, 0);

    container.innerHTML = `
        <div class="next-matchup">
            <div class="next-team">
                ${getTeamLogo(game.away.abbr, 60)}
                <div class="next-team-name">${game.away.abbr}</div>
                <div class="next-team-record">${game.away.name} (${game.away.record})</div>
            </div>
            <div class="next-vs">@</div>
            <div class="next-team">
                ${getTeamLogo(game.home.abbr, 60)}
                <div class="next-team-name">${game.home.abbr}</div>
                <div class="next-team-record">${game.home.name} (${game.home.record})</div>
            </div>
        </div>
        <div class="next-details">
            <div class="next-time">${game.timePST}</div>
            <div class="next-channel">${game.channel} • ${game.sport}</div>
        </div>
        <div class="next-picks">
            ${game.picks.map(p => `
                <div class="next-pick-tag">
                    <span class="pick-label">${p.pick}</span> ${p.odds} • $${p.amount}
                </div>
            `).join('')}
            <div class="next-pick-tag" style="background: var(--accent-green); color: #000; border: none;">
                Total: $${totalAmount}
            </div>
        </div>
    `;
}

function renderTimeline(games) {
    const container = document.getElementById('watchTimeline');
    if (!container) return;

    const uniqueTimes = [...new Set(games.map(g => g.time))];

    container.innerHTML = uniqueTimes.map((time, i) => {
        const gamesAtTime = games.filter(g => g.time === time);
        const gameLabels = gamesAtTime.map(g => `${g.away.abbr}@${g.home.abbr}`).join(', ');
        return `
            <div class="timeline-item ${i === 0 ? 'active' : ''}">
                <div class="timeline-time">${time}</div>
                <div class="timeline-dot"></div>
                <div class="timeline-game">${gameLabels}</div>
            </div>
        `;
    }).join('');
}

function renderGamesList(games) {
    const container = document.getElementById('watchGamesList');
    if (!container) return;

    container.innerHTML = games.map(game => {
        const totalAmount = game.picks.reduce((sum, p) => sum + p.amount, 0);
        return `
            <div class="watch-game-card ${game.status}">
                <div class="game-card-header">
                    <div class="game-time-block">
                        <div class="game-time">${game.timePST}</div>
                        <div class="game-status ${game.status}">${game.status === 'live' ? 'LIVE' : game.timeET}</div>
                    </div>
                    <div class="game-sport">${getSportEmoji(game.sport)} ${game.sport} • ${game.channel}</div>
                </div>
                <div class="game-card-body">
                    <div class="game-matchup">
                        <div class="game-team">
                            ${getTeamLogo(game.away.abbr, 55)}
                            <div class="game-team-abbr">${game.away.abbr}</div>
                            <div class="game-team-name">${game.away.name}</div>
                        </div>
                        <div class="game-vs">@</div>
                        <div class="game-team">
                            ${getTeamLogo(game.home.abbr, 55)}
                            <div class="game-team-abbr">${game.home.abbr}</div>
                            <div class="game-team-name">${game.home.name}</div>
                        </div>
                    </div>
                    <div class="game-picks">
                        ${game.picks.map(p => `
                            <div class="game-pick-item">
                                ${p.pick} (${p.odds}) <span class="amount">$${p.amount}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ═══════════════════════════════════════════════════════════════
// ADVANCED ANIMATIONS - Card Flips & Confetti
// ═══════════════════════════════════════════════════════════════

// Flip card to reveal result
function flipCard(cardElement) {
    if (cardElement.classList.contains('flipped')) {
        cardElement.classList.remove('flipped');
    } else {
        cardElement.classList.add('flipped');

        // Check if it's a win and trigger confetti
        const backSide = cardElement.querySelector('.flip-card-back');
        if (backSide && backSide.classList.contains('win')) {
            setTimeout(() => triggerConfetti(), 400);
        }
    }
}

// Confetti explosion effect
function triggerConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);

    const colors = ['#00e676', '#ffd700', '#00bcd4', '#ff6b6b', '#a78bfa', '#ff9800'];
    const shapes = ['square', 'circle', 'triangle'];

    // Create 100 confetti pieces
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        // Random position
        confetti.style.left = Math.random() * 100 + '%';

        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = color;

        // Random shape
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        if (shape === 'circle') {
            confetti.style.borderRadius = '50%';
        } else if (shape === 'triangle') {
            confetti.style.width = '0';
            confetti.style.height = '0';
            confetti.style.backgroundColor = 'transparent';
            confetti.style.borderLeft = '5px solid transparent';
            confetti.style.borderRight = '5px solid transparent';
            confetti.style.borderBottom = `10px solid ${color}`;
        }

        // Random size
        const size = Math.random() * 8 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';

        // Random animation delay and duration
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';

        container.appendChild(confetti);
    }

    // Add sparkles around the card
    triggerSparkles();

    // Remove after animation
    setTimeout(() => container.remove(), 4000);
}

// Sparkle effect
function triggerSparkles() {
    const sparkleCount = 20;

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';

        // Position around center of screen
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const angle = (i / sparkleCount) * Math.PI * 2;
        const radius = 100 + Math.random() * 100;

        sparkle.style.left = (centerX + Math.cos(angle) * radius) + 'px';
        sparkle.style.top = (centerY + Math.sin(angle) * radius) + 'px';
        sparkle.style.animationDelay = Math.random() * 0.3 + 's';

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1500);
    }
}

// ═══════════════════════════════════════════════════════════════
// LIVE GAME SYSTEM - Real-time Updates
// ═══════════════════════════════════════════════════════════════

// Game state management
let liveGameState = {};

// Initialize live game checking
function initLiveGameSystem() {
    // Check for live games every 30 seconds
    checkLiveGames();
    setInterval(checkLiveGames, 30000);
}

// Simulate checking for live games (in production, this would be an API call)
function checkLiveGames() {
    const now = new Date();
    const games = getGamesData();

    games.forEach(game => {
        const gameTime = parseGameTime(game.time);
        const gameDuration = game.sport === 'NHL' ? 180 :
                            game.sport === 'NBA' ? 130 :
                            game.sport === 'NCAAB' ? 120 : 150; // minutes

        const gameStart = new Date(now);
        gameStart.setHours(gameTime.hours, gameTime.minutes, 0, 0);

        const gameEnd = new Date(gameStart);
        gameEnd.setMinutes(gameEnd.getMinutes() + gameDuration);

        // Determine game status
        if (now >= gameStart && now < gameEnd) {
            game.status = 'live';
            // Calculate progress and period
            const elapsed = (now - gameStart) / (1000 * 60); // minutes
            game.progress = Math.min((elapsed / gameDuration) * 100, 100);
            game.period = calculatePeriod(game.sport, elapsed);
            game.timeRemaining = formatTimeRemaining(gameDuration - elapsed);

            // Simulate scores (in production would come from API)
            if (!liveGameState[game.id]) {
                liveGameState[game.id] = {
                    awayScore: 0,
                    homeScore: 0
                };
            }
            game.awayScore = liveGameState[game.id].awayScore;
            game.homeScore = liveGameState[game.id].homeScore;
        } else if (now >= gameEnd) {
            game.status = 'final';
            game.progress = 100;
        } else {
            game.status = 'upcoming';
            game.progress = 0;
        }
    });

    // Re-render with updated data
    renderWatchPageWithLive(games);
}

// Parse time string like "4:00 PM" to hours/minutes
function parseGameTime(timeStr) {
    const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!match) return { hours: 16, minutes: 0 };

    let hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const isPM = match[3].toUpperCase() === 'PM';

    if (isPM && hours !== 12) hours += 12;
    if (!isPM && hours === 12) hours = 0;

    return { hours, minutes };
}

// Calculate what period/quarter the game is in
function calculatePeriod(sport, elapsedMinutes) {
    if (sport === 'NBA' || sport === 'NCAAB') {
        // Basketball: 4 quarters (or 2 halves for college)
        const quarterLength = sport === 'NBA' ? 12 : 20;
        const quarters = sport === 'NBA' ? 4 : 2;
        const periodNum = Math.min(Math.floor(elapsedMinutes / quarterLength) + 1, quarters);
        return sport === 'NBA' ? `Q${periodNum}` : `H${periodNum}`;
    } else if (sport === 'NHL') {
        // Hockey: 3 periods
        const periodLength = 20;
        const periodNum = Math.min(Math.floor(elapsedMinutes / periodLength) + 1, 3);
        return `P${periodNum}`;
    }
    return '';
}

// Format time remaining
function formatTimeRemaining(minutes) {
    if (minutes < 0) return '0:00';
    const mins = Math.floor(minutes);
    const secs = Math.floor((minutes - mins) * 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Get games data (would be from BOOKIE_DATA in production)
function getGamesData() {
    return [
        { id: 1, time: '4:00 PM', sport: 'NHL', away: { abbr: 'OTT', name: 'Senators' }, home: { abbr: 'CAR', name: 'Hurricanes' }, channel: 'ESPN+', picks: [{ pick: 'Senators ML', odds: '+148', amount: 21 }] },
        { id: 2, time: '4:00 PM', sport: 'NBA', away: { abbr: 'DEN', name: 'Nuggets' }, home: { abbr: 'DET', name: 'Pistons' }, channel: 'League Pass', picks: [{ pick: 'Pistons -6.5', odds: '+113', amount: 31 }] },
        { id: 3, time: '4:30 PM', sport: 'NBA', away: { abbr: 'MIA', name: 'Heat' }, home: { abbr: 'ATL', name: 'Hawks' }, channel: 'League Pass', picks: [{ pick: 'Heat -4.5', odds: '+138', amount: 21 }] },
        { id: 4, time: '4:30 PM', sport: 'NHL', away: { abbr: 'BUF', name: 'Sabres' }, home: { abbr: 'TB', name: 'Lightning' }, channel: 'ESPN+', picks: [{ pick: 'Sabres ML', odds: '+160', amount: 21 }] },
        { id: 5, time: '5:00 PM', sport: 'NBA', away: { abbr: 'BOS', name: 'Celtics' }, home: { abbr: 'DAL', name: 'Mavericks' }, channel: 'TNT', picks: [{ pick: 'Mavs +8.5', odds: '-137', amount: 21 }] },
        { id: 6, time: '5:00 PM', sport: 'NCAAB', away: { abbr: 'DRAKE', name: 'Drake' }, home: { abbr: 'BEL', name: 'Belmont' }, channel: 'ESPN+', picks: [{ pick: 'Belmont -8.5', odds: '-143', amount: 21 }] },
        { id: 7, time: '6:00 PM', sport: 'NHL', away: { abbr: 'TOR', name: 'Maple Leafs' }, home: { abbr: 'EDM', name: 'Oilers' }, channel: 'ESPN', picks: [{ pick: 'UNDER 6.5', odds: '+120', amount: 21 }] },
        { id: 8, time: '6:00 PM', sport: 'NCAAB', away: { abbr: 'NCST', name: 'NC State' }, home: { abbr: 'SMU', name: 'SMU' }, channel: 'ESPN2', picks: [{ pick: 'SMU +2.5', odds: '-133', amount: 21 }] },
        { id: 9, time: '6:30 PM', sport: 'NCAAB', away: { abbr: 'RUT', name: 'Rutgers' }, home: { abbr: 'UCLA', name: 'UCLA' }, channel: 'BTN', picks: [{ pick: 'UCLA -12.5', odds: '-138', amount: 31 }] },
        { id: 10, time: '7:00 PM', sport: 'NBA', away: { abbr: 'PHI', name: '76ers' }, home: { abbr: 'GSW', name: 'Warriors' }, channel: 'NBA TV', picks: [{ pick: '76ers +2.5', odds: '-102', amount: 41 }] }
    ];
}

// Render Watch page with LIVE updates
function renderWatchPageWithLive(games) {
    const container = document.getElementById('watchGamesList');
    if (!container) return;

    // Sort games: LIVE first, then Upcoming, then Final
    const sortedGames = [...games].sort((a, b) => {
        const statusOrder = { 'live': 0, 'upcoming': 1, 'final': 2 };
        return statusOrder[a.status] - statusOrder[b.status];
    });

    // Count live games
    const liveCount = sortedGames.filter(g => g.status === 'live').length;

    // Add live banner if games are live
    const liveBannerContainer = document.getElementById('nextGameCard');
    if (liveBannerContainer && liveCount > 0) {
        const liveGames = sortedGames.filter(g => g.status === 'live');
        renderLiveBanner(liveBannerContainer, liveGames);
    }

    // Render all game cards
    container.innerHTML = sortedGames.map(game => renderWatchGameCard(game)).join('');

    // Render flight tracker
    renderFlightTracker(games);
}

// Render LIVE banner at top
function renderLiveBanner(container, liveGames) {
    container.innerHTML = `
        <div class="watch-live-banner">
            <div class="watch-live-title">
                <div class="live-badge">
                    <span class="live-dot"></span>
                    LIVE
                </div>
                <span>${liveGames.length} ${liveGames.length === 1 ? 'GAME' : 'GAMES'} IN PROGRESS</span>
            </div>
            <div class="watch-live-count">${liveGames.map(g => `${g.away.abbr} @ ${g.home.abbr}`).join(' · ')}</div>
        </div>
    `;
}

// Render individual game card with live features
function renderWatchGameCard(game) {
    const isLive = game.status === 'live';
    const isFinal = game.status === 'final';
    const totalAmount = game.picks.reduce((sum, p) => sum + p.amount, 0);

    return `
        <div class="watch-game-card ${game.status}">
            <div class="game-card-header">
                <div class="game-time-block">
                    ${isLive ? `
                        <div class="live-badge">
                            <span class="live-dot"></span>
                            LIVE
                        </div>
                    ` : isFinal ? `
                        <div class="game-status final">FINAL</div>
                    ` : `
                        <div class="game-time">${game.time} PST</div>
                    `}
                </div>
                <div class="game-sport">${getSportEmoji(game.sport)} ${game.sport} · ${game.channel}</div>
            </div>

            <div class="game-card-body">
                <div class="game-matchup">
                    <div class="game-team">
                        ${getTeamLogo(game.away.abbr, 55)}
                        <div class="game-team-abbr">${game.away.abbr}</div>
                        <div class="game-team-name">${game.away.name}</div>
                    </div>
                    <div class="game-vs">@</div>
                    <div class="game-team">
                        ${getTeamLogo(game.home.abbr, 55)}
                        <div class="game-team-abbr">${game.home.abbr}</div>
                        <div class="game-team-name">${game.home.name}</div>
                    </div>
                </div>

                ${isLive ? `
                    <div class="game-progress">
                        <div class="game-progress-bar" style="width: ${game.progress}%"></div>
                    </div>
                    ${renderPeriodDots(game)}
                ` : ''}

                <div class="game-picks">
                    ${game.picks.map(p => `
                        <div class="game-pick-item ${isLive ? 'live' : ''}">
                            ${p.pick} (${p.odds}) <span class="amount">$${p.amount}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Render period/quarter dots
function renderPeriodDots(game) {
    let totalPeriods = 4;
    let periodLabel = 'QTR';

    if (game.sport === 'NHL') {
        totalPeriods = 3;
        periodLabel = 'PERIOD';
    } else if (game.sport === 'NCAAB') {
        totalPeriods = 2;
        periodLabel = 'HALF';
    }

    const currentPeriod = parseInt(game.period.replace(/[^0-9]/g, '')) || 1;

    let dots = '';
    for (let i = 1; i <= totalPeriods; i++) {
        let dotClass = 'period-dot';
        if (i < currentPeriod) dotClass += ' complete';
        else if (i === currentPeriod) dotClass += ' active';
        dots += `<div class="${dotClass}"></div>`;
    }

    return `
        <div class="game-period">
            <span>${periodLabel}</span>
            <div class="period-dots">${dots}</div>
        </div>
    `;
}

// Update a specific game's score (call this when scores update)
function updateGameScore(gameId, awayScore, homeScore) {
    liveGameState[gameId] = { awayScore, homeScore };

    // Trigger score update animation
    const scoreElements = document.querySelectorAll(`.watch-game-card[data-id="${gameId}"] .live-score`);
    scoreElements.forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight; // Trigger reflow
        el.style.animation = 'scoreUpdate 0.3s ease-out';
    });

    checkLiveGames();
}

// Demo function to simulate live score updates
function simulateLiveScores() {
    const games = getGamesData().filter(g => g.status === 'live');
    games.forEach(game => {
        if (liveGameState[game.id]) {
            // Randomly update scores
            if (Math.random() > 0.7) {
                const team = Math.random() > 0.5 ? 'away' : 'home';
                const points = game.sport === 'NBA' || game.sport === 'NCAAB' ?
                    Math.floor(Math.random() * 3) + 1 : 1;

                if (team === 'away') {
                    liveGameState[game.id].awayScore += points;
                } else {
                    liveGameState[game.id].homeScore += points;
                }
            }
        }
    });
    checkLiveGames();
}

// Calculate stats from history
function calculateStats() {
    const history = BOOKIE_DATA.history;
    const wins = history.filter(p => p.result === 'win').length;
    const losses = history.filter(p => p.result === 'loss').length;
    const total = wins + losses;
    const netUnits = history.reduce((sum, p) => sum + (p.pl || 0), 0);

    return {
        total: history.length,
        wins,
        losses,
        record: `${wins}-${losses}`,
        winRate: total > 0 ? Math.round((wins / total) * 100) : 0,
        netUnits: netUnits.toFixed(2)
    };
}

// ═══════════════════════════════════════════════════════════════
// FLIGHT TRACKER - Travel & Altitude Analysis
// ═══════════════════════════════════════════════════════════════

// Team locations with city, coordinates (lat, lng), and altitude (feet)
const TEAM_LOCATIONS = {
    // NBA
    'PHI': { city: 'Philadelphia', lat: 39.9012, lng: -75.1720, altitude: 39 },
    'GSW': { city: 'San Francisco', lat: 37.7680, lng: -122.3879, altitude: 52 },
    'DET': { city: 'Detroit', lat: 42.3410, lng: -83.0550, altitude: 600 },
    'DEN': { city: 'Denver', lat: 39.7486, lng: -105.0077, altitude: 5280 },
    'BOS': { city: 'Boston', lat: 42.3662, lng: -71.0621, altitude: 20 },
    'DAL': { city: 'Dallas', lat: 32.7905, lng: -96.8103, altitude: 430 },
    'MIA': { city: 'Miami', lat: 25.7814, lng: -80.1870, altitude: 6 },
    'ATL': { city: 'Atlanta', lat: 33.7573, lng: -84.3963, altitude: 1050 },
    'LAL': { city: 'Los Angeles', lat: 34.0430, lng: -118.2673, altitude: 233 },
    'LAC': { city: 'Los Angeles', lat: 34.0430, lng: -118.2673, altitude: 233 },

    // NHL
    'OTT': { city: 'Ottawa', lat: 45.2969, lng: -75.9269, altitude: 230 },
    'CAR': { city: 'Raleigh', lat: 35.8033, lng: -78.7220, altitude: 315 },
    'BUF': { city: 'Buffalo', lat: 42.8750, lng: -78.8764, altitude: 600 },
    'TB': { city: 'Tampa', lat: 27.9427, lng: -82.4519, altitude: 48 },
    'TOR': { city: 'Toronto', lat: 43.6435, lng: -79.3791, altitude: 250 },
    'EDM': { city: 'Edmonton', lat: 53.5461, lng: -113.4938, altitude: 2192 },

    // NCAAB
    'DRAKE': { city: 'Des Moines', lat: 41.6061, lng: -93.6047, altitude: 965 },
    'BEL': { city: 'Nashville', lat: 36.1318, lng: -86.7688, altitude: 440 },
    'NCST': { city: 'Raleigh', lat: 35.7847, lng: -78.6689, altitude: 315 },
    'SMU': { city: 'Dallas', lat: 32.8412, lng: -96.7854, altitude: 430 },
    'RUT': { city: 'New Brunswick', lat: 40.5008, lng: -74.4474, altitude: 50 },
    'UCLA': { city: 'Los Angeles', lat: 34.0689, lng: -118.4452, altitude: 418 }
};

// Calculate distance between two points (Haversine formula)
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return Math.round(R * c);
}

// Calculate flight time (rough estimate based on distance)
function calculateFlightTime(distance) {
    // Average commercial flight speed ~500 mph + 1 hour for takeoff/landing
    const hours = (distance / 500) + 1;
    if (hours < 1.5) return '~1.5 hrs';
    return `~${hours.toFixed(1)} hrs`;
}

// Get fatigue rating based on distance and altitude change
function getFatigueRating(distance, altitudeChange) {
    let score = 0;

    // Distance factor
    if (distance > 2000) score += 3;
    else if (distance > 1000) score += 2;
    else if (distance > 500) score += 1;

    // Altitude factor (going UP to altitude is harder)
    if (altitudeChange > 4000) score += 3;
    else if (altitudeChange > 2000) score += 2;
    else if (altitudeChange > 1000) score += 1;

    // Return rating
    if (score >= 5) return { level: 'HIGH', color: '#ff4757', icon: '🔴' };
    if (score >= 3) return { level: 'MODERATE', color: '#ffa502', icon: '🟡' };
    if (score >= 1) return { level: 'LOW', color: '#2ed573', icon: '🟢' };
    return { level: 'MINIMAL', color: '#7bed9f', icon: '⚪' };
}

// Get altitude impact description
function getAltitudeImpact(homeAltitude, awayAltitude) {
    const diff = homeAltitude - awayAltitude;

    if (homeAltitude >= 5000) {
        return {
            icon: '🏔️',
            text: 'MILE HIGH',
            desc: 'Visiting teams often struggle with thin air',
            advantage: 'HOME',
            severity: 'high'
        };
    }
    if (homeAltitude >= 2000 && diff > 1500) {
        return {
            icon: '⛰️',
            text: 'ELEVATED',
            desc: 'Altitude may affect conditioning',
            advantage: 'HOME',
            severity: 'moderate'
        };
    }
    if (diff < -3000) {
        return {
            icon: '🌊',
            text: 'SEA LEVEL',
            desc: 'Coming down from altitude - easier breathing',
            advantage: 'AWAY',
            severity: 'low'
        };
    }
    return {
        icon: '✈️',
        text: 'NEUTRAL',
        desc: 'No significant altitude factor',
        advantage: 'NONE',
        severity: 'none'
    };
}

// Render flight tracker section
function renderFlightTracker(games) {
    const container = document.getElementById('flightTrackerList');
    if (!container) return;

    const travelGames = games.map(game => {
        const awayLoc = TEAM_LOCATIONS[game.away.abbr];
        const homeLoc = TEAM_LOCATIONS[game.home.abbr];

        if (!awayLoc || !homeLoc) return null;

        const distance = calculateDistance(awayLoc.lat, awayLoc.lng, homeLoc.lat, homeLoc.lng);
        const flightTime = calculateFlightTime(distance);
        const altitudeChange = homeLoc.altitude - awayLoc.altitude;
        const fatigue = getFatigueRating(distance, Math.abs(altitudeChange));
        const altitudeImpact = getAltitudeImpact(homeLoc.altitude, awayLoc.altitude);

        return {
            ...game,
            distance,
            flightTime,
            altitudeChange,
            fatigue,
            altitudeImpact,
            awayCity: awayLoc.city,
            homeCity: homeLoc.city,
            awayAltitude: awayLoc.altitude,
            homeAltitude: homeLoc.altitude
        };
    }).filter(Boolean);

    // Sort by fatigue level (highest first)
    travelGames.sort((a, b) => {
        const order = { 'HIGH': 0, 'MODERATE': 1, 'LOW': 2, 'MINIMAL': 3 };
        return order[a.fatigue.level] - order[b.fatigue.level];
    });

    container.innerHTML = travelGames.map(game => `
        <div class="flight-card ${game.fatigue.level.toLowerCase()}">
            <div class="flight-header">
                <div class="flight-teams">
                    ${getTeamLogo(game.away.abbr, 36)}
                    <div class="flight-route">
                        <div class="flight-cities">${game.awayCity} → ${game.homeCity}</div>
                        <div class="flight-plane">✈️</div>
                    </div>
                    ${getTeamLogo(game.home.abbr, 36)}
                </div>
                <div class="flight-fatigue ${game.fatigue.level.toLowerCase()}">
                    ${game.fatigue.icon} ${game.fatigue.level}
                </div>
            </div>

            <div class="flight-stats">
                <div class="flight-stat">
                    <div class="flight-stat-value">${game.distance.toLocaleString()}</div>
                    <div class="flight-stat-label">MILES</div>
                </div>
                <div class="flight-stat">
                    <div class="flight-stat-value">${game.flightTime}</div>
                    <div class="flight-stat-label">FLIGHT</div>
                </div>
                <div class="flight-stat">
                    <div class="flight-stat-value">${game.altitudeChange > 0 ? '+' : ''}${game.altitudeChange.toLocaleString()}'</div>
                    <div class="flight-stat-label">ALT Δ</div>
                </div>
            </div>

            ${game.altitudeImpact.severity !== 'none' ? `
                <div class="altitude-alert ${game.altitudeImpact.severity}">
                    <span class="altitude-icon">${game.altitudeImpact.icon}</span>
                    <div class="altitude-info">
                        <div class="altitude-title">${game.altitudeImpact.text}</div>
                        <div class="altitude-desc">${game.altitudeImpact.desc}</div>
                    </div>
                    <div class="altitude-advantage ${game.altitudeImpact.advantage.toLowerCase()}">${game.altitudeImpact.advantage} EDGE</div>
                </div>
            ` : ''}

            <div class="flight-visual">
                <div class="flight-line">
                    <div class="flight-dot start">${game.awayAltitude.toLocaleString()}'</div>
                    <div class="flight-path" style="--altitude-change: ${Math.min(Math.abs(game.altitudeChange) / 100, 50)}px">
                        <div class="plane-icon ${game.altitudeChange > 0 ? 'ascending' : 'descending'}">✈️</div>
                    </div>
                    <div class="flight-dot end">${game.homeAltitude.toLocaleString()}'</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize live system on page load
document.addEventListener('DOMContentLoaded', () => {
    // Start live game checking
    initLiveGameSystem();

    // Simulate score updates every 15 seconds (for demo)
    setInterval(simulateLiveScores, 15000);
});

// Make functions globally available
window.logBet = logBet;
window.settleBet = settleBet;
window.cycleBetStatus = cycleBetStatus;
window.resetAllBets = resetAllBets;
window.markAllPlaced = markAllPlaced;
window.toggleAnalysisCard = toggleAnalysisCard;
window.togglePlaysSection = togglePlaysSection;
window.toggleResultCard = toggleResultCard;
window.flipCard = flipCard;
window.triggerConfetti = triggerConfetti;
window.updateGameScore = updateGameScore;
