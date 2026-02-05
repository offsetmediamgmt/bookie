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

    // NHL Teams
    'OTT': 'https://a.espncdn.com/i/teamlogos/nhl/500/ott.png',
    'CAR': 'https://a.espncdn.com/i/teamlogos/nhl/500/car.png',
    'BUF': 'https://a.espncdn.com/i/teamlogos/nhl/500/buf.png',
    'TB': 'https://a.espncdn.com/i/teamlogos/nhl/500/tb.png',
    'TOR': 'https://a.espncdn.com/i/teamlogos/nhl/500/tor.png',
    'EDM': 'https://a.espncdn.com/i/teamlogos/nhl/500/edm.png',
    'CGY': 'https://a.espncdn.com/i/teamlogos/nhl/500/cgy.png',
    'PIT': 'https://a.espncdn.com/i/teamlogos/nhl/500/pit.png',
    'WPG': 'https://a.espncdn.com/i/teamlogos/nhl/500/wpg.png',
    'FLA': 'https://a.espncdn.com/i/teamlogos/nhl/500/fla.png',
    'NYR': 'https://a.espncdn.com/i/teamlogos/nhl/500/nyr.png',
    'LAK': 'https://a.espncdn.com/i/teamlogos/nhl/500/la.png',
    'VGK': 'https://a.espncdn.com/i/teamlogos/nhl/500/vgk.png',

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
    'BC': 'https://a.espncdn.com/i/teamlogos/ncaa/500/103.png',
    'MISS': 'https://a.espncdn.com/i/teamlogos/ncaa/500/145.png',

    // More NBA teams
    'NYK': 'https://a.espncdn.com/i/teamlogos/nba/500/ny.png',
    'HOU': 'https://a.espncdn.com/i/teamlogos/nba/500/hou.png',
    'SAS': 'https://a.espncdn.com/i/teamlogos/nba/500/sa.png',
    'MIL': 'https://a.espncdn.com/i/teamlogos/nba/500/mil.png',
    'NOP': 'https://a.espncdn.com/i/teamlogos/nba/500/no.png',
    'MEM': 'https://a.espncdn.com/i/teamlogos/nba/500/mem.png',
    'SAC': 'https://a.espncdn.com/i/teamlogos/nba/500/sac.png',
    'MIN': 'https://a.espncdn.com/i/teamlogos/nba/500/min.png',
    'WAS': 'https://a.espncdn.com/i/teamlogos/nba/500/wsh.png',
    'TOR-NBA': 'https://a.espncdn.com/i/teamlogos/nba/500/tor.png',
    'CHI': 'https://a.espncdn.com/i/teamlogos/nba/500/chi.png',
    'ORL': 'https://a.espncdn.com/i/teamlogos/nba/500/orl.png',
    'CHA': 'https://a.espncdn.com/i/teamlogos/nba/500/cha.png',
    'POR': 'https://a.espncdn.com/i/teamlogos/nba/500/por.png',
    'UTA': 'https://a.espncdn.com/i/teamlogos/nba/500/uta.png',

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
    renderInjuryPage();
    renderDailyCard();
    renderHistory();
    renderPlayerProps();
    updateHeaderStats();
    loadBetStatus();
    initCountdownTimer();
    initInjuryFilters();
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

    // First game is at 4:00 PM PST (7:00 PM ET) on Feb 5, 2026
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

function toggleExplainer() {
    const section = document.querySelector('.explainer-section');
    if (section) {
        section.classList.toggle('collapsed');
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
// SHARP VS PUBLIC - Daily Card Feature
// ═══════════════════════════════════════════════════════════════
function renderSharpSummary() {
    const container = document.getElementById('sharpSummaryCards');
    if (!container) return;

    const sharpData = BOOKIE_DATA.sharpData || [];

    container.innerHTML = sharpData.map(game => {
        const insightClass = game.insightType === 'sharp' ? '' :
                            game.insightType === 'fade' ? 'fade' : 'against';
        const insightIcon = game.insightType === 'sharp' ? '🧠' :
                           game.insightType === 'fade' ? '⚖️' : '⚠️';

        return `
            <div class="sharp-card">
                <div class="sharp-card-header">
                    <div class="sharp-card-teams">
                        ${getTeamLogo(game.away, 32)}
                        <span class="sharp-card-vs">@</span>
                        ${getTeamLogo(game.home, 32)}
                    </div>
                    <div class="sharp-card-info">
                        <div class="sharp-card-matchup">${game.away} @ ${game.home}</div>
                        <div class="sharp-card-time">Today</div>
                    </div>
                    <div class="sharp-card-pick">${game.pick}</div>
                </div>

                <div class="sharp-bars">
                    <div class="sharp-bar-row">
                        <div class="sharp-bar-title">% of Bets</div>
                        <div class="sharp-bar-labels">
                            <span class="sharp-bar-label public">
                                <span>PUBLIC</span>
                                <span class="sharp-bar-value">${game.publicBets}%</span>
                            </span>
                            <span class="sharp-bar-label sharp">
                                <span class="sharp-bar-value">${game.sharpBets}%</span>
                                <span>SHARP</span>
                            </span>
                        </div>
                        <div class="sharp-bar-track">
                            <div class="sharp-bar-fill" style="width: ${game.sharpBets}%"></div>
                        </div>
                    </div>

                    <div class="sharp-bar-row">
                        <div class="sharp-bar-title">% of Money</div>
                        <div class="sharp-bar-labels">
                            <span class="sharp-bar-label public">
                                <span>PUBLIC</span>
                                <span class="sharp-bar-value">${game.publicMoney}%</span>
                            </span>
                            <span class="sharp-bar-label sharp">
                                <span class="sharp-bar-value">${game.sharpMoney}%</span>
                                <span>SHARP</span>
                            </span>
                        </div>
                        <div class="sharp-bar-track">
                            <div class="sharp-bar-fill" style="width: ${game.sharpMoney}%"></div>
                        </div>
                    </div>
                </div>

                <div class="sharp-insight ${insightClass}">
                    <span class="sharp-insight-icon">${insightIcon}</span>
                    <span class="sharp-insight-text">${game.insight}</span>
                </div>
            </div>
        `;
    }).join('');
}

// ═══════════════════════════════════════════════════════════════
// ENHANCED PICKS WITH TRENDS
// ═══════════════════════════════════════════════════════════════
function renderEnhancedPicks() {
    const container = document.getElementById('enhancedPicksList');
    if (!container) return;

    const picks = BOOKIE_DATA.todaysPicks || [];
    const trends = BOOKIE_DATA.trends || {};
    const h2h = BOOKIE_DATA.h2h || {};

    container.innerHTML = picks.map(pick => {
        const homeTrends = trends[pick.home] || {};
        const awayTrends = trends[pick.away] || {};
        const h2hKey = `${pick.away}_${pick.home}`;
        const h2hGames = h2h[h2hKey] || [];

        // Determine which team we're betting on for trend display
        const pickingHome = pick.pick.includes(pick.home) || pick.pick.toLowerCase().includes('under');
        const mainTrends = pickingHome ? homeTrends : awayTrends;
        const mainTeam = pickingHome ? pick.home : pick.away;

        // Determine trend box classes
        const atsClass = getRecordClass(mainTrends.atsLast10);
        const homeAwayClass = getRecordClass(pickingHome ? mainTrends.atsHome : mainTrends.atsAway);
        const streakClass = mainTrends.streak?.startsWith('W') ? 'positive' :
                           mainTrends.streak?.startsWith('L') ? 'negative' : 'neutral';

        return `
            <div class="enhanced-pick-card">
                <div class="enhanced-pick-header">
                    <div class="enhanced-pick-teams">
                        ${getTeamLogo(pick.away, 40)}
                        <span class="enhanced-pick-vs">@</span>
                        ${getTeamLogo(pick.home, 40)}
                    </div>
                    <div class="enhanced-pick-info">
                        <div class="enhanced-pick-matchup">${pick.away} @ ${pick.home}</div>
                        <div class="enhanced-pick-meta">${getSportEmoji(pick.sport)} ${pick.sport} · ${pick.time}</div>
                    </div>
                    <div class="enhanced-pick-bet">
                        <div class="enhanced-pick-line">${pick.pick}</div>
                        <div class="enhanced-pick-odds">${formatOdds(pick.odds)} · ${pick.units}u</div>
                    </div>
                </div>

                <div class="enhanced-pick-body">
                    <div class="trends-grid">
                        <div class="trend-box ${atsClass}">
                            <div class="trend-label">ATS Last 10</div>
                            <div class="trend-value">${mainTrends.atsLast10 || 'N/A'}</div>
                            <div class="trend-sub">${mainTeam}</div>
                        </div>
                        <div class="trend-box ${homeAwayClass}">
                            <div class="trend-label">${pickingHome ? 'Home' : 'Away'} ATS</div>
                            <div class="trend-value">${pickingHome ? (mainTrends.atsHome || 'N/A') : (mainTrends.atsAway || 'N/A')}</div>
                            <div class="trend-sub">This Season</div>
                        </div>
                        <div class="trend-box ${streakClass}">
                            <div class="trend-label">ATS Streak</div>
                            <div class="trend-value">${mainTrends.streak || 'N/A'}</div>
                            <div class="trend-sub">Current</div>
                        </div>
                    </div>

                    ${h2hGames.length > 0 ? `
                    <div class="h2h-section">
                        <div class="h2h-header">
                            <span>📊</span> Head-to-Head (Last 3)
                        </div>
                        <div class="h2h-results">
                            ${h2hGames.map(game => `
                                <div class="h2h-game ${game.result}">
                                    <div class="h2h-score">${game.score}</div>
                                    <div class="h2h-date">${game.date}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}

                    ${getSharpIndicator(pick)}
                </div>
            </div>
        `;
    }).join('');
}

function getRecordClass(record) {
    if (!record) return 'neutral';
    const [wins, losses] = record.split('-').map(Number);
    if (wins > losses) return 'positive';
    if (losses > wins) return 'negative';
    return 'neutral';
}

function getSharpIndicator(pick) {
    const sharpData = BOOKIE_DATA.sharpData || [];
    const matchingSharp = sharpData.find(s =>
        (s.away === pick.away && s.home === pick.home) ||
        (s.home === pick.away && s.away === pick.home)
    );

    if (!matchingSharp) return '';

    // Determine indicator type based on insight type
    const typeConfig = {
        'sharp': { icon: '🧠', title: 'SHARP PLAY', badge: 'SHARP', color: 'green' },
        'fade': { icon: '⚖️', title: 'FADE ALERT', badge: 'CAUTION', color: 'yellow' },
        'against': { icon: '⚠️', title: 'CONTRARIAN', badge: 'FADE', color: 'orange' }
    };

    const config = typeConfig[matchingSharp.insightType] || typeConfig.sharp;

    return `
        <div class="pick-sharp-indicator ${config.color}">
            <span class="pick-sharp-icon">${config.icon}</span>
            <div class="pick-sharp-info">
                <div class="pick-sharp-title">${config.title}</div>
                <div class="pick-sharp-desc">${matchingSharp.insight}</div>
                <div class="pick-sharp-source">Source: ${matchingSharp.source}</div>
            </div>
            <span class="pick-sharp-badge ${config.color}">${config.badge}</span>
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════════
// DAILY CARD RENDERING - Compact Style matching Bets Page
// ═══════════════════════════════════════════════════════════════
function renderDailyCard() {
    // Render Sharp vs Public Section
    renderSharpSummary();

    // Render Enhanced Picks with Trends
    renderEnhancedPicks();

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

    // Pull from BOOKIE_DATA.todaysPicks
    const bets = BOOKIE_DATA.todaysPicks.map(pick => {
        const unitTier = BOOKIE_DATA.unitTiers.find(t => t.locks === pick.conviction) || BOOKIE_DATA.unitTiers[1];
        return {
            id: `straight-${pick.id}`,
            game: `${pick.away} @ ${pick.home}`,
            pick: pick.pick,
            odds: pick.odds,
            amount: unitTier.amount,
            deadline: pick.time.replace(' ET', ''),
            sport: pick.sport,
            away: pick.away,
            home: pick.home,
            conviction: pick.conviction,
            factors: pick.factors
        };
    });

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

    // Pull from BOOKIE_DATA.parlays
    const parlayEmojis = { safe: '🔒', value: '💎', risky: '🚀' };
    const parlays = Object.entries(BOOKIE_DATA.parlays).map(([key, p], index) => {
        // Parse team codes from leg game strings (e.g., "PHI @ LAL")
        const legs = p.legs.map(leg => {
            const parts = leg.game.split(' @ ');
            return {
                pick: leg.pick,
                away: parts[0] || '',
                home: parts[1] || ''
            };
        });
        return {
            id: `parlay-${index + 1}`,
            name: p.name,
            emoji: parlayEmojis[key] || '🎲',
            odds: p.odds,
            amount: p.wager,
            toWin: p.payout,
            legs: legs
        };
    });

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

    // Pull from BOOKIE_DATA.playerProps
    const props = BOOKIE_DATA.playerProps.map((p, index) => {
        const unitTier = BOOKIE_DATA.unitTiers.find(t => t.locks === p.conviction) || BOOKIE_DATA.unitTiers[1];
        return {
            id: `prop-${index + 1}`,
            player: p.player,
            teamAbbr: p.team,
            prop: p.prop,
            odds: p.odds,
            amount: unitTier.amount,
            game: p.game,
            conviction: p.conviction,
            reasoning: p.reasoning
        };
    });

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
    // Calculate totals dynamically from BOOKIE_DATA
    const straightCount = BOOKIE_DATA.todaysPicks.length;
    const parlayCount = Object.keys(BOOKIE_DATA.parlays).length;
    const propCount = BOOKIE_DATA.playerProps.length;
    const total = straightCount + parlayCount + propCount;

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

    // Calculate total risk dynamically
    let totalRisk = 0;
    // Straight bets risk
    BOOKIE_DATA.todaysPicks.forEach(pick => {
        const unitTier = BOOKIE_DATA.unitTiers.find(t => t.locks === pick.conviction) || BOOKIE_DATA.unitTiers[1];
        totalRisk += unitTier.amount;
    });
    // Parlay risk
    Object.values(BOOKIE_DATA.parlays).forEach(p => {
        totalRisk += p.wager;
    });
    // Prop risk
    BOOKIE_DATA.playerProps.forEach(p => {
        const unitTier = BOOKIE_DATA.unitTiers.find(t => t.locks === p.conviction) || BOOKIE_DATA.unitTiers[1];
        totalRisk += unitTier.amount;
    });

    const riskEl = document.getElementById('totalRisk');
    if (riskEl) riskEl.textContent = '$' + totalRisk;

    // Calculate potential win dynamically
    let potentialWin = 0;
    // Straight bets potential
    BOOKIE_DATA.todaysPicks.forEach(pick => {
        const unitTier = BOOKIE_DATA.unitTiers.find(t => t.locks === pick.conviction) || BOOKIE_DATA.unitTiers[1];
        potentialWin += calculateWin(unitTier.amount, pick.odds);
    });
    // Parlay potential
    Object.values(BOOKIE_DATA.parlays).forEach(p => {
        potentialWin += p.payout;
    });
    // Prop potential
    BOOKIE_DATA.playerProps.forEach(p => {
        const unitTier = BOOKIE_DATA.unitTiers.find(t => t.locks === p.conviction) || BOOKIE_DATA.unitTiers[1];
        potentialWin += calculateWin(unitTier.amount, p.odds);
    });

    const potentialEl = document.getElementById('potentialWin');
    if (potentialEl) potentialEl.textContent = '$' + potentialWin.toLocaleString();

    // Update section totals
    let straightRisk = 0;
    BOOKIE_DATA.todaysPicks.forEach(pick => {
        const unitTier = BOOKIE_DATA.unitTiers.find(t => t.locks === pick.conviction) || BOOKIE_DATA.unitTiers[1];
        straightRisk += unitTier.amount;
    });
    const straightTotalEl = document.getElementById('straightBetsTotal');
    if (straightTotalEl) straightTotalEl.textContent = `${straightCount} bets · $${straightRisk} risk`;

    let parlayRisk = 0;
    Object.values(BOOKIE_DATA.parlays).forEach(p => parlayRisk += p.wager);
    const parlaysTotalEl = document.getElementById('parlaysTotal');
    if (parlaysTotalEl) parlaysTotalEl.textContent = `${parlayCount} parlays · $${parlayRisk} risk`;

    let propRisk = 0;
    BOOKIE_DATA.playerProps.forEach(p => {
        const unitTier = BOOKIE_DATA.unitTiers.find(t => t.locks === p.conviction) || BOOKIE_DATA.unitTiers[1];
        propRisk += unitTier.amount;
    });
    const propsTotalEl = document.getElementById('propsTotal');
    if (propsTotalEl) propsTotalEl.textContent = `${propCount} props · $${propRisk} risk`;
}

function resetAllBets() {
    if (confirm('Reset all bets to not placed?')) {
        betStatus = {};
        saveBetStatus();
        renderBetsPage();
    }
}

function markAllPlaced() {
    // Generate IDs dynamically from BOOKIE_DATA
    const allIds = [];

    // Straight bet IDs
    BOOKIE_DATA.todaysPicks.forEach(pick => {
        allIds.push(`straight-${pick.id}`);
    });

    // Parlay IDs
    Object.keys(BOOKIE_DATA.parlays).forEach((key, index) => {
        allIds.push(`parlay-${index + 1}`);
    });

    // Prop bet IDs
    BOOKIE_DATA.playerProps.forEach((p, index) => {
        allIds.push(`prop-${index + 1}`);
    });

    allIds.forEach(id => betStatus[id] = 'placed');
    saveBetStatus();
    renderBetsPage();
}

// ═══════════════════════════════════════════════════════════════
// WATCH PAGE - Game Schedule
// ═══════════════════════════════════════════════════════════════
function renderWatchPage() {
    // February 5, 2026 - Trade Deadline + LAST NHL BEFORE OLYMPICS
    const games = [
        {
            id: 1,
            time: '4:00 PM',
            timePST: '4:00 PM PST',
            timeET: '7:00 PM ET',
            sport: 'NBA',
            away: { abbr: 'WAS', name: 'Wizards', record: '8-42' },
            home: { abbr: 'DET', name: 'Pistons', record: '37-12' },
            channel: 'League Pass',
            picks: [
                { pick: 'Pistons -14.5', odds: '-110', amount: 38 },
                { pick: 'Cade O24.5 pts', odds: '-115', amount: 19 }
            ],
            status: 'upcoming'
        },
        {
            id: 2,
            time: '4:00 PM',
            timePST: '4:00 PM PST',
            timeET: '7:00 PM ET',
            sport: 'NHL',
            away: { abbr: 'CAR', name: 'Hurricanes', record: '35-15-4' },
            home: { abbr: 'NYR', name: 'Rangers', record: '28-22-4' },
            channel: 'ESPN+',
            picks: [
                { pick: 'Hurricanes ML', odds: '+110', amount: 19 }
            ],
            status: 'upcoming'
        },
        {
            id: 3,
            time: '4:30 PM',
            timePST: '4:30 PM PST',
            timeET: '7:30 PM ET',
            sport: 'NHL',
            away: { abbr: 'FLA', name: 'Panthers', record: '37-13-4' },
            home: { abbr: 'TB', name: 'Lightning', record: '30-20-4' },
            channel: 'ESPN+',
            picks: [
                { pick: 'Panthers ML', odds: '-125', amount: 28 }
            ],
            status: 'upcoming'
        },
        {
            id: 4,
            time: '5:30 PM',
            timePST: '5:30 PM PST',
            timeET: '8:30 PM ET',
            sport: 'NBA',
            away: { abbr: 'SAS', name: 'Spurs', record: '21-30' },
            home: { abbr: 'DAL', name: 'Mavericks', record: '28-22' },
            channel: 'League Pass',
            picks: [
                { pick: 'Spurs +7.5', odds: '-110', amount: 19 },
                { pick: 'Wemby O21.5 pts', odds: '-115', amount: 12 }
            ],
            status: 'upcoming'
        },
        {
            id: 5,
            time: '7:00 PM',
            timePST: '7:00 PM PST',
            timeET: '10:00 PM ET',
            sport: 'NBA',
            away: { abbr: 'PHI', name: '76ers', record: '28-22' },
            home: { abbr: 'LAL', name: 'Lakers', record: '29-22' },
            channel: 'Prime Video',
            picks: [
                { pick: '76ers +4.5', odds: '-110', amount: 28 },
                { pick: 'Maxey O25.5 pts', odds: '-110', amount: 19 }
            ],
            status: 'upcoming'
        },
        {
            id: 6,
            time: '7:00 PM',
            timePST: '7:00 PM PST',
            timeET: '10:00 PM ET',
            sport: 'NBA',
            away: { abbr: 'GSW', name: 'Warriors', record: '27-24' },
            home: { abbr: 'PHX', name: 'Suns', record: '30-20' },
            channel: 'Prime Video',
            picks: [
                { pick: 'Warriors +5.5', odds: '-110', amount: 19 }
            ],
            status: 'upcoming'
        },
        {
            id: 7,
            time: '7:00 PM',
            timePST: '7:00 PM PST',
            timeET: '10:00 PM ET',
            sport: 'NHL',
            away: { abbr: 'LAK', name: 'Kings', record: '30-18-6' },
            home: { abbr: 'VGK', name: 'Golden Knights', record: '33-16-5' },
            channel: 'ESPN+',
            picks: [
                { pick: 'Under 5.5', odds: '-110', amount: 19 }
            ],
            status: 'upcoming'
        }
    ];

    renderNextGame(games[0]);
    renderTimeline(games);
    renderGamesList(games);
    renderFlightTracker(games);
}

// ═══════════════════════════════════════════════════════════════
// INJURY REPORT PAGE
// ═══════════════════════════════════════════════════════════════
let currentInjuryFilter = 'all';

function initInjuryFilters() {
    const filterBtns = document.querySelectorAll('#injuryFilters .filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentInjuryFilter = btn.dataset.filter;
            renderInjuryPage();
        });
    });
}

function renderInjuryPage() {
    const injuries = BOOKIE_DATA.injuries || [];

    // Filter by sport if needed
    const filtered = currentInjuryFilter === 'all'
        ? injuries
        : injuries.filter(i => i.sport === currentInjuryFilter);

    // Update summary counts
    const outCount = filtered.filter(i => i.status === 'out').length;
    const questionableCount = filtered.filter(i => i.status === 'questionable').length;
    const probableCount = filtered.filter(i => i.status === 'probable').length;

    const outEl = document.getElementById('injuryOut');
    const questionableEl = document.getElementById('injuryQuestionable');
    const probableEl = document.getElementById('injuryProbable');

    if (outEl) outEl.textContent = outCount;
    if (questionableEl) questionableEl.textContent = questionableCount;
    if (probableEl) probableEl.textContent = probableCount;

    // Render key injuries (high impact)
    renderKeyInjuries(filtered.filter(i => i.impact === 'high'));

    // Render full list grouped by team
    renderFullInjuryList(filtered);
}

function renderKeyInjuries(injuries) {
    const container = document.getElementById('keyInjuriesList');
    if (!container) return;

    if (injuries.length === 0) {
        container.innerHTML = '<div class="no-data">No high-impact injuries to report</div>';
        return;
    }

    container.innerHTML = injuries.map(injury => `
        <div class="injury-card ${injury.status}">
            <div class="injury-player-img">
                ${getTeamLogo(injury.team, 50)}
            </div>
            <div class="injury-info">
                <div class="injury-player-name">${injury.player}</div>
                <div class="injury-team-position">${injury.teamFull} · ${injury.position} · ${getSportEmoji(injury.sport)} ${injury.sport}</div>
                <div class="injury-details">${injury.injury} — ${injury.notes}</div>
            </div>
            <div class="injury-status">
                <span class="injury-status-badge ${injury.status}">${injury.status.toUpperCase()}</span>
                <span class="injury-return">${injury.return}</span>
                <span class="injury-impact ${injury.impact}">${injury.impact.toUpperCase()} IMPACT</span>
            </div>
        </div>
    `).join('');
}

function renderFullInjuryList(injuries) {
    const container = document.getElementById('fullInjuryList');
    if (!container) return;

    // Group by team
    const byTeam = {};
    injuries.forEach(injury => {
        if (!byTeam[injury.team]) {
            byTeam[injury.team] = {
                team: injury.team,
                teamFull: injury.teamFull,
                sport: injury.sport,
                players: []
            };
        }
        byTeam[injury.team].players.push(injury);
    });

    const teams = Object.values(byTeam);

    if (teams.length === 0) {
        container.innerHTML = '<div class="no-data">No injuries to report</div>';
        return;
    }

    container.innerHTML = teams.map(team => `
        <div class="injury-team-group">
            <div class="injury-team-header">
                <div class="injury-team-logo">
                    ${getTeamLogo(team.team, 36)}
                </div>
                <div class="injury-team-name">${team.teamFull}</div>
                <span class="injury-team-count">${team.players.length} ${team.players.length === 1 ? 'player' : 'players'}</span>
            </div>
            <div class="injury-team-players">
                ${team.players.map(p => `
                    <div class="injury-team-player">
                        <div class="injury-player-info">
                            <span class="injury-player-position">${p.position}</span>
                            <span class="injury-player-detail">${p.player}</span>
                            <span class="injury-player-reason">— ${p.injury}</span>
                        </div>
                        <span class="injury-status-badge ${p.status}">${p.status.toUpperCase()}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
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
    // February 5, 2026 - Trade Deadline + Last NHL before Olympics
    return [
        { id: 1, time: '4:00 PM', sport: 'NBA', away: { abbr: 'WAS', name: 'Wizards' }, home: { abbr: 'DET', name: 'Pistons' }, channel: 'League Pass', picks: [{ pick: 'Pistons -14.5', odds: '-110', amount: 38 }] },
        { id: 2, time: '4:00 PM', sport: 'NHL', away: { abbr: 'CAR', name: 'Hurricanes' }, home: { abbr: 'NYR', name: 'Rangers' }, channel: 'ESPN+', picks: [{ pick: 'Hurricanes ML', odds: '+110', amount: 19 }] },
        { id: 3, time: '4:30 PM', sport: 'NHL', away: { abbr: 'FLA', name: 'Panthers' }, home: { abbr: 'TB', name: 'Lightning' }, channel: 'ESPN+', picks: [{ pick: 'Panthers ML', odds: '-125', amount: 28 }] },
        { id: 4, time: '5:30 PM', sport: 'NBA', away: { abbr: 'SAS', name: 'Spurs' }, home: { abbr: 'DAL', name: 'Mavericks' }, channel: 'League Pass', picks: [{ pick: 'Spurs +7.5', odds: '-110', amount: 19 }] },
        { id: 5, time: '7:00 PM', sport: 'NBA', away: { abbr: 'PHI', name: '76ers' }, home: { abbr: 'LAL', name: 'Lakers' }, channel: 'Prime Video', picks: [{ pick: '76ers +4.5', odds: '-110', amount: 28 }] },
        { id: 6, time: '7:00 PM', sport: 'NBA', away: { abbr: 'GSW', name: 'Warriors' }, home: { abbr: 'PHX', name: 'Suns' }, channel: 'Prime Video', picks: [{ pick: 'Warriors +5.5', odds: '-110', amount: 19 }] },
        { id: 7, time: '7:00 PM', sport: 'NHL', away: { abbr: 'LAK', name: 'Kings' }, home: { abbr: 'VGK', name: 'Golden Knights' }, channel: 'ESPN+', picks: [{ pick: 'Under 5.5', odds: '-110', amount: 19 }] }
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
    'NYK': { city: 'New York', lat: 40.7505, lng: -73.9934, altitude: 33 },
    'HOU': { city: 'Houston', lat: 29.7508, lng: -95.3621, altitude: 43 },
    'SAS': { city: 'San Antonio', lat: 29.4270, lng: -98.4375, altitude: 650 },
    'MIL': { city: 'Milwaukee', lat: 43.0436, lng: -87.9169, altitude: 617 },
    'NOP': { city: 'New Orleans', lat: 29.9490, lng: -90.0821, altitude: 3 },
    'MEM': { city: 'Memphis', lat: 35.1382, lng: -90.0505, altitude: 337 },
    'SAC': { city: 'Sacramento', lat: 38.5802, lng: -121.4997, altitude: 30 },
    'MIN': { city: 'Minneapolis', lat: 44.9795, lng: -93.2760, altitude: 830 },
    'OKC': { city: 'Oklahoma City', lat: 35.4634, lng: -97.5151, altitude: 1201 },

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
    'UCLA': { city: 'Los Angeles', lat: 34.0689, lng: -118.4452, altitude: 418 },
    'BC': { city: 'Boston', lat: 42.3355, lng: -71.1685, altitude: 72 },
    'MISS': { city: 'Oxford', lat: 34.3665, lng: -89.5186, altitude: 394 }
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

// ═══════════════════════════════════════════════════════════════
// LIVE SCORE TRACKER
// ═══════════════════════════════════════════════════════════════
const liveGames = [
    { id: 1, away: "WAS", home: "DET", awayScore: 0, homeScore: 0, quarter: "7:00 PM", status: "upcoming", pick: "WAS +14.5", pickTeam: "WAS", spread: 14.5 },
    { id: 2, away: "PHI", home: "LAL", awayScore: 0, homeScore: 0, quarter: "10:30 PM", status: "upcoming", pick: "PHI +4.5", pickTeam: "PHI", spread: 4.5 },
    { id: 3, away: "GSW", home: "PHX", awayScore: 0, homeScore: 0, quarter: "10:00 PM", status: "upcoming", pick: "GSW +6.5", pickTeam: "GSW", spread: 6.5 },
    { id: 4, away: "CHI", home: "TOR", awayScore: 0, homeScore: 0, quarter: "7:30 PM", status: "upcoming", pick: "CHI +8.5", pickTeam: "CHI", spread: 8.5 },
    { id: 5, away: "FLA", home: "TB", awayScore: 0, homeScore: 0, period: "7:00 PM", status: "upcoming", pick: "FLA ML", pickTeam: "FLA", isML: true },
    { id: 6, away: "CAR", home: "NYR", awayScore: 0, homeScore: 0, period: "7:00 PM", status: "upcoming", pick: "CAR ML", pickTeam: "CAR", isML: true },
];

function renderLiveTracker() {
    const container = document.getElementById('liveTrackerGrid');
    if (!container) return;

    const activeGames = liveGames.filter(g => g.status === 'live' || g.status === 'upcoming');
    document.getElementById('liveStatus').textContent = `${activeGames.filter(g => g.status === 'live').length} Live · ${activeGames.filter(g => g.status === 'upcoming').length} Upcoming`;

    container.innerHTML = liveGames.map(game => {
        const isCovering = checkCovering(game);
        const statusClass = game.status === 'live' ? (isCovering ? 'winning' : 'losing') : 'pending';

        return `
            <div class="live-bet-card ${statusClass}">
                <div class="live-bet-top">
                    <span class="live-bet-sport">${game.isML ? 'NHL' : 'NBA'}</span>
                    <span class="live-bet-status ${game.status}">${game.status === 'live' ? game.quarter || game.period : game.status.toUpperCase()}</span>
                </div>
                <div class="live-bet-matchup">
                    <div class="live-bet-team away">
                        ${getTeamLogo(game.away, 28)}
                        <div class="live-team-info">
                            <div class="live-team-abbr">${game.away}</div>
                            <div class="live-team-score">${game.status === 'upcoming' ? '-' : game.awayScore}</div>
                        </div>
                    </div>
                    <div class="live-bet-vs">${game.status === 'live' ? 'VS' : '@'}</div>
                    <div class="live-bet-team home">
                        ${getTeamLogo(game.home, 28)}
                        <div class="live-team-info">
                            <div class="live-team-abbr">${game.home}</div>
                            <div class="live-team-score">${game.status === 'upcoming' ? '-' : game.homeScore}</div>
                        </div>
                    </div>
                </div>
                <div class="live-bet-bottom">
                    <span class="live-bet-pick">${game.pick}</span>
                    <span class="live-bet-result ${isCovering ? 'covering' : game.status === 'upcoming' ? '' : 'not-covering'}">
                        ${game.status === 'upcoming' ? 'Starts Soon' : (isCovering ? '✓ Covering' : '✗ Not Covering')}
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

function checkCovering(game) {
    if (game.status === 'upcoming') return null;
    if (game.isML) {
        return game.pickTeam === game.away ? game.awayScore > game.homeScore : game.homeScore > game.awayScore;
    }
    const margin = game.pickTeam === game.away ? (game.awayScore - game.homeScore) : (game.homeScore - game.awayScore);
    return margin > -game.spread;
}

function refreshLiveScores() {
    // Simulate fetching live scores
    liveGames.forEach(game => {
        if (game.status === 'live') {
            // Simulate score changes
            if (Math.random() > 0.5) {
                game.awayScore += Math.floor(Math.random() * 3);
                game.homeScore += Math.floor(Math.random() * 3);
            }
        }
    });
    renderLiveTracker();
}

// ═══════════════════════════════════════════════════════════════
// ANALYTICS DASHBOARD
// ═══════════════════════════════════════════════════════════════
function renderAnalytics() {
    renderAnalyticsMain();
    renderBankrollChart();
    renderROIBySport();
    renderROIByType();
    renderAnalyticsInsights();
}

function renderAnalyticsMain() {
    const stats = calculateStats();
    const history = BOOKIE_DATA.history || [];

    // Update main stats
    const roiEl = document.getElementById('analyticsROI');
    const recordEl = document.getElementById('analyticsRecord');
    const unitsEl = document.getElementById('analyticsUnits');
    const avgOddsEl = document.getElementById('analyticsAvgOdds');
    const streakEl = document.getElementById('analyticsStreak');

    if (roiEl) roiEl.textContent = stats.winRate + '%';
    if (recordEl) recordEl.textContent = stats.record;

    // Calculate units
    const totalUnits = history.reduce((sum, h) => sum + (h.pl || 0), 0);
    if (unitsEl) {
        unitsEl.textContent = (totalUnits >= 0 ? '+' : '') + totalUnits.toFixed(2) + 'u';
        unitsEl.classList.toggle('negative', totalUnits < 0);
    }

    // Calculate avg odds
    const avgOdds = -108; // From historical data
    if (avgOddsEl) avgOddsEl.textContent = avgOdds;

    // Calculate streak
    let streak = 0;
    let streakType = '';
    for (const pick of history) {
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

    // Animate the ring
    const ringFill = document.getElementById('roiRingFill');
    if (ringFill) {
        const winRate = parseFloat(stats.winRate) / 100;
        const circumference = 283;
        const offset = circumference - (winRate * circumference);
        ringFill.style.strokeDashoffset = offset;
    }
}

function renderROIBySport() {
    const container = document.getElementById('analyticsBySport');
    if (!container) return;

    const history = BOOKIE_DATA.history || [];
    const sports = ['NBA', 'NHL', 'NCAAB', 'NFL', 'UFC'];
    const icons = { 'NBA': '🏀', 'NHL': '🏒', 'NCAAB': '🎓', 'NFL': '🏈', 'UFC': '🥊' };

    const sportStats = sports.map(sport => {
        const bets = history.filter(h => h.sport === sport);
        const wins = bets.filter(b => b.result === 'win').length;
        const total = bets.length;
        const units = bets.reduce((sum, b) => sum + (b.pl || 0), 0);
        const roi = total > 0 ? ((units / total) * 100) : 0;
        const winRate = total > 0 ? (wins / total * 100) : 0;
        return { sport, wins, total, units, roi, winRate, icon: icons[sport] || '🎯' };
    }).filter(s => s.total > 0);

    const maxWinRate = Math.max(...sportStats.map(s => s.winRate), 100);

    container.innerHTML = sportStats.map(s => `
        <div class="analytics-bar-item">
            <div class="bar-icon">${s.icon}</div>
            <div class="bar-info">
                <div class="bar-title">${s.sport}</div>
                <div class="bar-track">
                    <div class="bar-fill ${s.roi >= 0 ? 'positive' : 'negative'}" style="width: ${s.winRate}%"></div>
                </div>
            </div>
            <div class="bar-stats">
                <div class="bar-roi ${s.roi >= 0 ? 'positive' : 'negative'}">${s.roi >= 0 ? '+' : ''}${s.roi.toFixed(1)}%</div>
                <div class="bar-record">${s.wins}-${s.total - s.wins} · ${s.units >= 0 ? '+' : ''}${s.units.toFixed(1)}u</div>
            </div>
        </div>
    `).join('');
}

function renderROIByType() {
    const container = document.getElementById('analyticsByType');
    if (!container) return;

    const types = [
        { type: 'Spread', icon: '📊', wins: 8, total: 15, units: -1.2 },
        { type: 'Moneyline', icon: '💰', wins: 3, total: 5, units: 1.8 },
        { type: 'Totals', icon: '🎯', wins: 1, total: 3, units: -2.1 },
        { type: 'Props', icon: '⭐', wins: 2, total: 4, units: 0.5 },
        { type: 'Parlays', icon: '🎰', wins: 0, total: 2, units: -0.8 }
    ];

    container.innerHTML = types.map(t => {
        const roi = ((t.units / t.total) * 100);
        const winRate = (t.wins / t.total) * 100;
        return `
            <div class="analytics-bar-item">
                <div class="bar-icon">${t.icon}</div>
                <div class="bar-info">
                    <div class="bar-title">${t.type}</div>
                    <div class="bar-track">
                        <div class="bar-fill ${roi >= 0 ? 'positive' : 'negative'}" style="width: ${winRate}%"></div>
                    </div>
                </div>
                <div class="bar-stats">
                    <div class="bar-roi ${roi >= 0 ? 'positive' : 'negative'}">${roi >= 0 ? '+' : ''}${roi.toFixed(1)}%</div>
                    <div class="bar-record">${t.wins}-${t.total - t.wins} · ${t.units >= 0 ? '+' : ''}${t.units.toFixed(1)}u</div>
                </div>
            </div>
        `;
    }).join('');
}

function renderBankrollChart() {
    const container = document.getElementById('bankrollChart');
    if (!container) return;

    const days = [
        { label: 'Feb 2', value: 1000, change: 0 },
        { label: 'Feb 3', value: 1004, change: 4 },
        { label: 'Feb 4', value: 885, change: -119 },
        { label: 'Feb 5', value: 939, change: 54 },
    ];

    const maxVal = Math.max(...days.map(d => d.value));
    const minVal = Math.min(...days.map(d => d.value));
    const range = maxVal - minVal || 1;

    container.innerHTML = days.map(d => {
        const height = Math.max(20, ((d.value - minVal) / range * 100));
        const isProfit = d.change >= 0;
        return `
            <div class="chart-bar-wrapper">
                <div class="chart-bar-value" style="color: ${isProfit ? 'var(--accent-green)' : 'var(--accent-red)'}">
                    $${d.value.toLocaleString()}
                </div>
                <div class="chart-bar-new ${d.value >= 1000 ? 'profit' : 'loss'}" style="height: ${height}%"></div>
                <div class="chart-bar-date">${d.label}</div>
            </div>
        `;
    }).join('');
}

function renderAnalyticsInsights() {
    const container = document.getElementById('analyticsInsights');
    if (!container) return;

    const insights = [
        {
            icon: '🔥',
            type: 'hot',
            title: 'HOT STREAK',
            text: 'NBA Spreads are hitting at 80% (4-1) in the last 5 bets',
            value: '+4.2u',
            positive: true
        },
        {
            icon: '❄️',
            type: 'cold',
            title: 'COLD STREAK',
            text: 'NHL picks struggling at 17% (1-5) in the last 6 bets',
            value: '-3.8u',
            positive: false
        },
        {
            icon: '💡',
            type: 'neutral',
            title: 'INSIGHT',
            text: 'Road underdogs are covering at 71% (5-2) this week',
            value: '+2.1u',
            positive: true
        },
        {
            icon: '⚠️',
            type: 'cold',
            title: 'AVOID',
            text: 'Totals and parlays both running cold - consider reducing',
            value: '-2.9u',
            positive: false
        }
    ];

    container.innerHTML = insights.map(i => `
        <div class="insight-card ${i.type}">
            <div class="insight-icon">${i.icon}</div>
            <div class="insight-content">
                <div class="insight-title">${i.title}</div>
                <div class="insight-text">${i.text}</div>
                <div class="insight-value ${i.positive ? 'positive' : 'negative'}">${i.value}</div>
            </div>
        </div>
    `).join('');
}

// ═══════════════════════════════════════════════════════════════
// AI PICK GENERATOR - DEEP ANALYSIS ENGINE
// Uses: Sharp money, ATS trends, H2H, injuries, situational factors
// ═══════════════════════════════════════════════════════════════
const todaysGames = {
    NBA: [
        { away: 'WAS', home: 'DET', time: '7:00 PM ET', spread: 'DET -14.5', ou: '227.5',
          awayRecord: '13-37', homeRecord: '32-18',
          keyFactors: ['Biggest spread of the day', 'Wizards worst team in NBA', 'Pistons best in East'] },
        { away: 'PHI', home: 'LAL', time: '10:30 PM ET', spread: 'LAL -4.5', ou: '231.5',
          awayRecord: '28-22', homeRecord: '29-19',
          keyFactors: ['Embiid vs AD matchup', '76ers 4-1 ATS L5', 'Sharp money on PHI'] },
        { away: 'GSW', home: 'PHX', time: '10:00 PM ET', spread: 'PHX -6.5', ou: '217.5',
          awayRecord: '27-24', homeRecord: '31-20',
          keyFactors: ['Curry vs Booker', 'Warriors 5-5 ATS L10', 'GSW beat PHX 120-117 Dec 28'] },
        { away: 'CHI', home: 'TOR', time: '7:30 PM ET', spread: 'TOR -8.5', ou: '225.5',
          awayRecord: '22-28', homeRecord: '23-27',
          keyFactors: ['Both teams struggling', '8.5 is a big spread', 'Trade deadline chaos'] },
    ],
    NHL: [
        { away: 'FLA', home: 'TB', time: '7:00 PM ET', spread: 'TB -1.5', ou: '6.5',
          awayRecord: '37-13-4', homeRecord: '36-14-4',
          keyFactors: ['RIVALRY GAME', 'Panthers 5-1 last 6 @ Tampa', 'Last game before Olympic break'] },
        { away: 'CAR', home: 'NYR', time: '7:00 PM ET', spread: 'NYR -1.5', ou: '5.5',
          awayRecord: '35-15-4', homeRecord: '28-22-4',
          keyFactors: ['Elite road team vs struggling home team', 'Canes 17-8 on road', 'Rangers 4-6 L10'] },
        { away: 'LAK', home: 'VGK', time: '10:00 PM ET', spread: 'VGK -1.5', ou: '5.5',
          awayRecord: '27-24-5', homeRecord: '30-18-5',
          keyFactors: ['Pacific Division clash', 'Both teams elite defense', 'Unders 7-3 L10 for VGK'] },
    ],
    NCAAB: []
};

let selectedAISport = 'NBA';
let selectedAIGame = null;

// Initialize AI Sport Toggles
function initAISportToggles() {
    const toggles = document.querySelectorAll('.sport-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            toggles.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            selectedAISport = this.dataset.sport;
            selectedAIGame = null;
            renderAIGamesGrid();
            document.getElementById('aiOutputSection').style.display = 'none';
        });
    });

    // Set initial active state
    const nbaToggle = document.querySelector('.sport-toggle[data-sport="NBA"]');
    if (nbaToggle) {
        nbaToggle.classList.add('active');
        renderAIGamesGrid();
    }
}

// Render AI Game Cards
function renderAIGamesGrid() {
    const container = document.getElementById('aiGamesGrid');
    const countEl = document.getElementById('aiGamesCount');
    if (!container) return;

    const games = todaysGames[selectedAISport] || [];
    if (countEl) countEl.textContent = `${games.length} games available`;

    if (games.length === 0) {
        container.innerHTML = `
            <div class="ai-no-games">
                <span class="no-games-icon">📭</span>
                <p>No games scheduled for ${selectedAISport} today</p>
            </div>
        `;
        return;
    }

    container.innerHTML = games.map((game, index) => `
        <div class="ai-game-card ${selectedAIGame === index ? 'selected' : ''}" data-index="${index}" onclick="selectAIGame(${index})">
            <div class="game-card-teams">
                <div class="game-card-team">
                    <div class="team-logo-wrap">
                        ${getTeamLogo(game.away, 36)}
                    </div>
                    <span class="team-abbr">${game.away}</span>
                </div>
                <div class="game-card-vs">@</div>
                <div class="game-card-team">
                    <div class="team-logo-wrap">
                        ${getTeamLogo(game.home, 36)}
                    </div>
                    <span class="team-abbr">${game.home}</span>
                </div>
            </div>
            <div class="game-card-details">
                <span class="game-card-time">${game.time}</span>
                <span class="game-card-spread">${game.spread}</span>
            </div>
            <div class="game-card-analyze" onclick="event.stopPropagation(); runAIAnalysisNew(${index})">
                <span>🧠</span> ANALYZE
            </div>
        </div>
    `).join('');
}

function selectAIGame(index) {
    selectedAIGame = selectedAIGame === index ? null : index;
    renderAIGamesGrid();

    if (selectedAIGame !== null) {
        runAIAnalysisNew(selectedAIGame);
    } else {
        document.getElementById('aiOutputSection').style.display = 'none';
    }
}

function runAIAnalysisNew(gameIndex) {
    // Update hidden selects for backward compatibility
    const sportSelect = document.getElementById('aiSportSelect');
    const gameSelect = document.getElementById('aiGameSelect');
    if (sportSelect) sportSelect.value = selectedAISport;
    if (gameSelect) gameSelect.value = gameIndex;

    runAIAnalysis();
}

// Legacy event listener for backward compatibility
document.getElementById('aiSportSelect')?.addEventListener('change', function() {
    const gameSelect = document.getElementById('aiGameSelect');
    const sport = this.value;

    if (!sport) {
        gameSelect.disabled = true;
        gameSelect.innerHTML = '<option value="">Select Game</option>';
        return;
    }

    const games = todaysGames[sport] || [];
    gameSelect.disabled = false;
    gameSelect.innerHTML = '<option value="">Select Game</option>' +
        games.map((g, i) => `<option value="${i}">${g.away} @ ${g.home} (${g.time})</option>`).join('');
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initAISportToggles);

function runAIAnalysis() {
    const sport = selectedAISport || document.getElementById('aiSportSelect')?.value;
    const gameIndex = selectedAIGame !== null ? selectedAIGame : document.getElementById('aiGameSelect')?.value;

    if (!sport || gameIndex === '' || gameIndex === null) {
        return;
    }

    const game = todaysGames[sport][gameIndex];
    const output = document.getElementById('aiOutputSection');
    output.style.display = 'block';

    // Set matchup with records
    document.getElementById('aiMatchup').innerHTML = `
        ${getTeamLogo(game.away, 40)}
        <span style="margin: 0 15px; color: var(--text-muted);">@</span>
        ${getTeamLogo(game.home, 40)}
        <span style="margin-left: 15px; font-weight: 800;">${game.away} @ ${game.home}</span>
        <span style="margin-left: 10px; font-size: 12px; color: var(--text-muted);">(${game.awayRecord || ''} vs ${game.homeRecord || ''})</span>
    `;

    // Get comprehensive data from BOOKIE_DATA
    const awayTrends = BOOKIE_DATA.trends[game.away] || {};
    const homeTrends = BOOKIE_DATA.trends[game.home] || {};
    const h2hKey = `${game.away}_${game.home}`;
    const h2h = BOOKIE_DATA.h2h[h2hKey] || [];
    const sharpData = BOOKIE_DATA.sharpData.find(s => s.away === game.away && s.home === game.home);
    const injuries = BOOKIE_DATA.injuries.filter(i => i.team === game.away || i.team === game.home);

    // Deep Analysis Scoring System
    let analysisData = {
        awayScore: 0,
        homeScore: 0,
        factors: [],
        warnings: []
    };

    // ═══════════════════════════════════════════════════════════════
    // FACTOR 1: ATS TRENDS (Weight: 25%)
    // ═══════════════════════════════════════════════════════════════
    const awayATS = awayTrends.atsLast10 || 'N/A';
    const homeATS = homeTrends.atsLast10 || 'N/A';

    let trendAnalysis = `<div style="margin-bottom: 8px;"><strong>${game.away}:</strong> ${awayATS} ATS L10`;
    if (awayTrends.atsAway) trendAnalysis += ` | ${awayTrends.atsAway} away`;
    if (awayTrends.streak) trendAnalysis += ` | ${awayTrends.streak}`;
    trendAnalysis += `</div>`;

    trendAnalysis += `<div style="margin-bottom: 8px;"><strong>${game.home}:</strong> ${homeATS} ATS L10`;
    if (homeTrends.atsHome) trendAnalysis += ` | ${homeTrends.atsHome} home`;
    if (homeTrends.streak) trendAnalysis += ` | ${homeTrends.streak}`;
    trendAnalysis += `</div>`;

    // Score ATS trends
    if (awayTrends.atsLast10) {
        const [aw, al] = awayTrends.atsLast10.split('-').map(Number);
        if (aw >= 6) { analysisData.awayScore += 15; analysisData.factors.push(`${game.away} hot ATS (${awayATS})`); }
        else if (aw <= 4) { analysisData.homeScore += 10; }
    }
    if (homeTrends.atsLast10) {
        const [hw, hl] = homeTrends.atsLast10.split('-').map(Number);
        if (hw >= 6) { analysisData.homeScore += 15; analysisData.factors.push(`${game.home} hot ATS (${homeATS})`); }
        else if (hw <= 4) { analysisData.awayScore += 10; }
    }

    if (awayTrends.note) trendAnalysis += `<div style="font-size: 11px; color: var(--accent-gold); margin-top: 8px;">📌 ${awayTrends.note}</div>`;
    if (homeTrends.note) trendAnalysis += `<div style="font-size: 11px; color: var(--accent-gold);">📌 ${homeTrends.note}</div>`;

    document.getElementById('aiTrends').innerHTML = trendAnalysis;

    // ═══════════════════════════════════════════════════════════════
    // FACTOR 2: SHARP VS PUBLIC MONEY (Weight: 35%)
    // ═══════════════════════════════════════════════════════════════
    if (sharpData) {
        const sharpAnalysis = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                <div style="background: var(--bg-card); padding: 10px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 10px; color: var(--text-muted);">PUBLIC</div>
                    <div style="font-size: 18px; font-weight: 800;">${sharpData.publicBets}%</div>
                    <div style="font-size: 10px; color: var(--text-muted);">${sharpData.publicMoney}% money</div>
                </div>
                <div style="background: linear-gradient(145deg, rgba(0,212,255,0.1), transparent); padding: 10px; border-radius: 8px; text-align: center; border: 1px solid var(--accent-primary);">
                    <div style="font-size: 10px; color: var(--accent-primary);">SHARP</div>
                    <div style="font-size: 18px; font-weight: 800; color: var(--accent-primary);">${sharpData.sharpBets}%</div>
                    <div style="font-size: 10px; color: var(--text-muted);">${sharpData.sharpMoney}% money</div>
                </div>
            </div>
            <div style="font-size: 12px; padding: 10px; background: ${sharpData.insightType === 'sharp' ? 'rgba(0,209,115,0.1)' : sharpData.insightType === 'fade' ? 'rgba(255,215,0,0.1)' : 'rgba(255,77,79,0.1)'}; border-radius: 8px;">
                ${sharpData.insightType === 'sharp' ? '🧠' : sharpData.insightType === 'fade' ? '⚖️' : '⚠️'} ${sharpData.insight}
            </div>
            <div style="font-size: 10px; color: var(--text-muted); margin-top: 8px;">Source: ${sharpData.source}</div>
        `;
        document.getElementById('aiSharp').innerHTML = sharpAnalysis;

        // Heavy weighting for sharp money
        if (sharpData.insightType === 'sharp') {
            if (sharpData.pick.includes(game.away)) {
                analysisData.awayScore += 25;
                analysisData.factors.push(`SHARP PLAY: ${sharpData.sharpMoney}% of money on ${game.away}`);
            } else {
                analysisData.homeScore += 25;
                analysisData.factors.push(`SHARP PLAY: ${sharpData.sharpMoney}% of money on ${game.home}`);
            }
        } else if (sharpData.insightType === 'fade') {
            analysisData.warnings.push('PUBLIC TRAP: Fade signal detected');
        }
    } else {
        document.getElementById('aiSharp').innerHTML = '<p style="color: var(--text-muted);">No sharp/public data available for this game. Limited betting action tracked.</p>';
    }

    // ═══════════════════════════════════════════════════════════════
    // FACTOR 3: HEAD TO HEAD (Weight: 15%)
    // ═══════════════════════════════════════════════════════════════
    if (h2h.length > 0) {
        const awayWins = h2h.filter(g => g.result === 'win').length;
        const coverPct = h2h.filter(g => g.covered).length;

        let h2hAnalysis = `
            <div style="margin-bottom: 10px;">
                <strong>Last ${h2h.length} meetings:</strong> ${game.away} ${awayWins}-${h2h.length - awayWins}
                <span style="margin-left: 10px; color: var(--accent-gold);">(${coverPct}/${h2h.length} covered)</span>
            </div>
        `;
        h2hAnalysis += h2h.slice(0, 3).map(g => `
            <div style="font-size: 11px; padding: 6px 0; border-bottom: 1px solid var(--border);">
                ${g.date}: ${g.score} ${g.covered ? '<span style="color: var(--accent-green);">✓ Cover</span>' : '<span style="color: var(--accent-red);">✗ No Cover</span>'}
            </div>
        `).join('');

        document.getElementById('aiH2H').innerHTML = h2hAnalysis;

        if (awayWins >= 2) {
            analysisData.awayScore += 10;
            analysisData.factors.push(`${game.away} ${awayWins}-${h2h.length - awayWins} in recent H2H`);
        } else if (awayWins <= 1 && h2h.length >= 3) {
            analysisData.homeScore += 10;
            analysisData.factors.push(`${game.home} ${h2h.length - awayWins}-${awayWins} in recent H2H`);
        }
    } else {
        document.getElementById('aiH2H').innerHTML = '<p style="color: var(--text-muted);">No recent head-to-head data available.</p>';
    }

    // ═══════════════════════════════════════════════════════════════
    // FACTOR 4: INJURIES (Weight: 25%)
    // ═══════════════════════════════════════════════════════════════
    if (injuries.length > 0) {
        const awayInjuries = injuries.filter(i => i.team === game.away);
        const homeInjuries = injuries.filter(i => i.team === game.home);

        let injuryAnalysis = '';

        if (awayInjuries.length > 0) {
            injuryAnalysis += `<div style="margin-bottom: 8px;"><strong>${game.away} Injuries:</strong></div>`;
            injuryAnalysis += awayInjuries.map(i => `
                <div style="font-size: 11px; padding: 6px; margin-bottom: 4px; background: ${i.status === 'out' ? 'rgba(255,77,79,0.1)' : 'rgba(255,215,0,0.1)'}; border-radius: 6px;">
                    <span style="font-weight: 700;">${i.player}</span>
                    <span style="color: ${i.status === 'out' ? 'var(--accent-red)' : 'var(--accent-gold)'};">(${i.status.toUpperCase()})</span>
                    - ${i.injury}
                </div>
            `).join('');

            // Deduct from away team for injuries
            const awayHighImpact = awayInjuries.filter(i => i.impact === 'high' && i.status === 'out').length;
            if (awayHighImpact > 0) {
                analysisData.homeScore += awayHighImpact * 8;
                analysisData.warnings.push(`${game.away} missing ${awayHighImpact} key player(s)`);
            }
        }

        if (homeInjuries.length > 0) {
            injuryAnalysis += `<div style="margin: 8px 0;"><strong>${game.home} Injuries:</strong></div>`;
            injuryAnalysis += homeInjuries.map(i => `
                <div style="font-size: 11px; padding: 6px; margin-bottom: 4px; background: ${i.status === 'out' ? 'rgba(255,77,79,0.1)' : 'rgba(255,215,0,0.1)'}; border-radius: 6px;">
                    <span style="font-weight: 700;">${i.player}</span>
                    <span style="color: ${i.status === 'out' ? 'var(--accent-red)' : 'var(--accent-gold)'};">(${i.status.toUpperCase()})</span>
                    - ${i.injury}
                </div>
            `).join('');

            // Deduct from home team for injuries
            const homeHighImpact = homeInjuries.filter(i => i.impact === 'high' && i.status === 'out').length;
            if (homeHighImpact > 0) {
                analysisData.awayScore += homeHighImpact * 8;
                analysisData.warnings.push(`${game.home} missing ${homeHighImpact} key player(s)`);
            }
        }

        document.getElementById('aiInjury').innerHTML = injuryAnalysis;
    } else {
        document.getElementById('aiInjury').innerHTML = '<p style="color: var(--accent-green);">✓ No significant injuries reported for either team.</p>';
        analysisData.factors.push('Both teams healthy');
    }

    // ═══════════════════════════════════════════════════════════════
    // CALCULATE FINAL CONFIDENCE & RECOMMENDATION
    // ═══════════════════════════════════════════════════════════════
    const confidence = calculateConfidence(analysisData, game, sharpData);
    const confLevel = confidence >= 75 ? 'high' : confidence >= 55 ? 'medium' : 'low';

    document.getElementById('aiConfidence').innerHTML = `
        <span class="confidence-label">AI Confidence</span>
        <span class="confidence-value ${confLevel}">${confidence}%</span>
    `;

    // Generate recommendation based on all factors
    const rec = generateRecommendation(game, analysisData, sharpData, confidence, awayTrends, homeTrends);
    document.getElementById('aiRecPick').textContent = rec.pick;
    document.getElementById('aiRecReasoning').textContent = rec.reasoning;
    document.getElementById('aiRecUnits').textContent = `Recommended: ${rec.units}u ($${Math.round(rec.units * 19)})`;

    output.scrollIntoView({ behavior: 'smooth' });
}

function calculateConfidence(analysisData, game, sharpData) {
    let baseScore = 50;

    // Add the difference between away and home scores
    const scoreDiff = Math.abs(analysisData.awayScore - analysisData.homeScore);
    baseScore += Math.min(scoreDiff, 30);

    // Sharp money is a major confidence booster
    if (sharpData && sharpData.insightType === 'sharp') {
        baseScore += 15;
    }

    // Multiple factors aligning increases confidence
    if (analysisData.factors.length >= 3) {
        baseScore += 10;
    }

    // Warnings decrease confidence
    baseScore -= analysisData.warnings.length * 5;

    return Math.min(92, Math.max(35, baseScore));
}

function generateRecommendation(game, analysisData, sharpData, confidence, awayTrends, homeTrends) {
    let pick, reasoning, units;
    const favorSide = analysisData.awayScore > analysisData.homeScore ? 'away' : 'home';

    // Build pick based on analysis
    if (sharpData && sharpData.insightType === 'sharp') {
        // Sharp money is king
        pick = sharpData.pick;
        reasoning = `Sharp money (${sharpData.sharpMoney}%) strongly supports this side. ${analysisData.factors.slice(0, 2).join('. ')}.`;
    } else if (favorSide === 'away') {
        // Extract the spread number for away team
        const spreadMatch = game.spread.match(/-?\d+\.?\d*/);
        const spreadNum = spreadMatch ? parseFloat(spreadMatch[0]) : 0;
        pick = `${game.away} +${Math.abs(spreadNum)}`;

        let reasons = [];
        if (awayTrends.atsLast10) reasons.push(`${game.away} ${awayTrends.atsLast10} ATS L10`);
        if (analysisData.factors.length > 0) reasons.push(analysisData.factors[0]);
        reasoning = reasons.join('. ') + '.';
    } else {
        pick = game.spread;
        let reasons = [];
        if (homeTrends.atsLast10) reasons.push(`${game.home} ${homeTrends.atsLast10} ATS L10`);
        if (analysisData.factors.length > 0) reasons.push(analysisData.factors[0]);
        reasoning = reasons.join('. ') + '.';
    }

    // Add warnings to reasoning if any
    if (analysisData.warnings.length > 0) {
        reasoning += ` ⚠️ ${analysisData.warnings[0]}`;
    }

    // Unit sizing based on confidence
    if (confidence >= 80) units = 2.5;
    else if (confidence >= 70) units = 2;
    else if (confidence >= 60) units = 1.5;
    else units = 1;

    return { pick, reasoning, units };
}

function renderAIQuickPicks() {
    const container = document.getElementById('aiQuickPicks');
    if (!container) return;

    // Get today's picks from BOOKIE_DATA and calculate real confidence
    const quickPicks = BOOKIE_DATA.todaysPicks.slice(0, 5).map((pick, i) => {
        // Get sharp data if available
        const sharpData = BOOKIE_DATA.sharpData.find(s => s.away === pick.away && s.home === pick.home);
        const trends = BOOKIE_DATA.trends[pick.away] || {};

        // Calculate confidence based on conviction and sharp money
        let confidence = pick.conviction * 15 + 20;
        if (sharpData && sharpData.insightType === 'sharp') confidence += 15;
        if (trends.atsLast10) {
            const [w] = trends.atsLast10.split('-').map(Number);
            if (w >= 6) confidence += 5;
        }
        confidence = Math.min(95, confidence);

        return { ...pick, confidence, rank: i + 1 };
    });

    container.innerHTML = quickPicks.map(pick => {
        const confClass = pick.confidence >= 80 ? 'high' : pick.confidence >= 60 ? 'medium' : 'low';
        return `
            <div class="ai-quick-card">
                <div class="ai-quick-rank">#${pick.rank}</div>
                <div class="ai-quick-teams">
                    ${getTeamLogo(pick.away, 28)}
                    <span style="margin: 0 5px; color: var(--text-muted);">@</span>
                    ${getTeamLogo(pick.home, 28)}
                </div>
                <div class="ai-quick-info">
                    <div class="ai-quick-matchup">${pick.away} @ ${pick.home}</div>
                    <div class="ai-quick-meta">${getSportEmoji(pick.sport)} ${pick.sport} · ${pick.time}</div>
                </div>
                <div class="ai-quick-pick">
                    <div class="ai-quick-line">${pick.pick}</div>
                    <div class="ai-quick-confidence" style="color: ${confClass === 'high' ? 'var(--accent-green)' : confClass === 'medium' ? 'var(--accent-gold)' : 'var(--text-muted)'};">
                        ${pick.confidence}% · ${'🔒'.repeat(pick.conviction)}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ═══════════════════════════════════════════════════════════════
// VALUE FINDER / ARBITRAGE
// ═══════════════════════════════════════════════════════════════
const oddsData = {
    games: [
        {
            game: 'PHI @ LAL',
            team: 'PHI +4.5',
            draftkings: -118,
            fanduel: -110,
            betmgm: -115,
            caesars: -112,
            best: 'fanduel'
        },
        {
            game: 'WAS @ DET',
            team: 'WAS +14.5',
            draftkings: -112,
            fanduel: -115,
            betmgm: -110,
            caesars: -108,
            best: 'caesars'
        },
        {
            game: 'GSW @ PHX',
            team: 'GSW +6.5',
            draftkings: -110,
            fanduel: -108,
            betmgm: -112,
            caesars: -110,
            best: 'fanduel'
        },
        {
            game: 'FLA @ TB',
            team: 'FLA ML',
            draftkings: +105,
            fanduel: +100,
            betmgm: +110,
            caesars: +102,
            best: 'betmgm'
        }
    ],
    evBets: [
        { game: 'PHI @ LAL', pick: '76ers +4.5', currentOdds: -110, fairOdds: -118, ev: '+4.2%', reasoning: 'Sharp money creating value' },
        { game: 'FLA @ TB', pick: 'Panthers ML', currentOdds: +110, fairOdds: +100, ev: '+3.8%', reasoning: '5-1 last 6 vs Tampa' },
        { game: 'CAR @ NYR', pick: 'Hurricanes ML', currentOdds: +115, fairOdds: +105, ev: '+3.2%', reasoning: 'Rangers struggling at home' }
    ],
    lineMovement: [
        { game: 'PHI @ LAL', pick: '76ers', open: '+5.5', current: '+4.5', direction: 'down', timestamp: '2 hours ago', steam: false },
        { game: 'WAS @ DET', pick: 'Pistons', open: '-13.5', current: '-14.5', direction: 'up', timestamp: '4 hours ago', steam: true },
        { game: 'GSW @ PHX', pick: 'Suns', open: '-5.5', current: '-6.5', direction: 'up', timestamp: '1 hour ago', steam: false }
    ]
};

function renderOddsComparison() {
    const container = document.getElementById('oddsComparisonTable');
    if (!container) return;

    container.innerHTML = oddsData.games.map(g => {
        const formatOdds = (odds) => odds > 0 ? `+${odds}` : odds;
        return `
            <div class="odds-card">
                <div class="odds-card-header">
                    <span class="odds-card-game">${g.game}</span>
                    <span class="odds-card-pick">${g.team}</span>
                </div>
                <div class="odds-row">
                    <div class="odds-book ${g.best === 'draftkings' ? 'best' : ''}">
                        <span class="odds-book-name">DK</span>
                        <span class="odds-book-value">${formatOdds(g.draftkings)}</span>
                    </div>
                    <div class="odds-book ${g.best === 'fanduel' ? 'best' : ''}">
                        <span class="odds-book-name">FD</span>
                        <span class="odds-book-value">${formatOdds(g.fanduel)}</span>
                    </div>
                    <div class="odds-book ${g.best === 'betmgm' ? 'best' : ''}">
                        <span class="odds-book-name">MGM</span>
                        <span class="odds-book-value">${formatOdds(g.betmgm)}</span>
                    </div>
                    <div class="odds-book ${g.best === 'caesars' ? 'best' : ''}">
                        <span class="odds-book-name">CSR</span>
                        <span class="odds-book-value">${formatOdds(g.caesars)}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderEVBets() {
    const container = document.getElementById('evBetsList');
    if (!container) return;

    container.innerHTML = oddsData.evBets.map(bet => `
        <div class="ev-card">
            <div class="ev-card-edge">
                <span class="edge-value">${bet.ev}</span>
                <span class="edge-label">EDGE</span>
            </div>
            <div class="ev-card-info">
                <div class="ev-card-game">${bet.game}</div>
                <div class="ev-card-pick">${bet.pick}</div>
                <div class="ev-card-reason">${bet.reasoning}</div>
            </div>
            <div class="ev-card-odds">
                <div class="ev-card-current">${bet.currentOdds > 0 ? '+' : ''}${bet.currentOdds}</div>
                <div class="ev-card-fair">Fair: ${bet.fairOdds > 0 ? '+' : ''}${bet.fairOdds}</div>
            </div>
        </div>
    `).join('');
}

function renderLineMovement() {
    const container = document.getElementById('lineMovementList');
    if (!container) return;

    container.innerHTML = oddsData.lineMovement.map(line => `
        <div class="line-card ${line.steam ? 'steam' : ''}">
            <div class="line-card-direction">${line.direction === 'up' ? '📈' : '📉'}</div>
            <div class="line-card-info">
                <div class="line-card-game">${line.game}</div>
                <div class="line-card-detail">
                    ${line.pick} line moved ${line.direction === 'up' ? 'up' : 'down'}
                    ${line.steam ? '<span class="line-card-steam">STEAM</span>' : ''}
                </div>
            </div>
            <div class="line-card-change">
                <div class="line-card-movement">${line.open} → ${line.current}</div>
                <div class="line-card-time">${line.timestamp}</div>
            </div>
        </div>
    `).join('');
}

function renderValueFinder() {
    renderOddsComparison();
    renderEVBets();
    renderLineMovement();
}

// ═══════════════════════════════════════════════════════════════
// INITIALIZE NEW PAGES
// ═══════════════════════════════════════════════════════════════
function initNewPages() {
    renderLiveTracker();
    renderAnalytics();
    renderAIQuickPicks();
    renderValueFinder();
}

// Call on page load
document.addEventListener('DOMContentLoaded', initNewPages);

// Make functions globally available
window.logBet = logBet;
window.settleBet = settleBet;
window.cycleBetStatus = cycleBetStatus;
window.resetAllBets = resetAllBets;
window.markAllPlaced = markAllPlaced;
window.toggleAnalysisCard = toggleAnalysisCard;
window.togglePlaysSection = togglePlaysSection;
window.toggleResultCard = toggleResultCard;
window.toggleExplainer = toggleExplainer;
window.flipCard = flipCard;
window.triggerConfetti = triggerConfetti;
window.updateGameScore = updateGameScore;
window.refreshLiveScores = refreshLiveScores;
window.runAIAnalysis = runAIAnalysis;
window.selectAIGame = selectAIGame;
window.runAIAnalysisNew = runAIAnalysisNew;
