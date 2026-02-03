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
    'TOR': 'https://a.espncdn.com/i/teamlogos/nba/500/tor.png',
    'NYK': 'https://a.espncdn.com/i/teamlogos/nba/500/ny.png',
    'BKN': 'https://a.espncdn.com/i/teamlogos/nba/500/bkn.png',
    'CLE': 'https://a.espncdn.com/i/teamlogos/nba/500/cle.png',

    // NHL Teams
    'OTT': 'https://a.espncdn.com/i/teamlogos/nhl/500/ott.png',
    'CAR': 'https://a.espncdn.com/i/teamlogos/nhl/500/car.png',
    'BUF': 'https://a.espncdn.com/i/teamlogos/nhl/500/buf.png',
    'TB': 'https://a.espncdn.com/i/teamlogos/nhl/500/tb.png',
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
});

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
    const profit = bankroll.current - bankroll.starting;

    // Update balance display
    const balanceEl = document.getElementById('headerBalance');
    const changeEl = document.getElementById('headerChange');
    if (balanceEl) balanceEl.textContent = '$' + bankroll.current.toLocaleString();
    if (changeEl) {
        changeEl.textContent = (profit >= 0 ? '+$' : '-$') + Math.abs(profit) + ' today';
        changeEl.className = 'balance-change ' + (profit >= 0 ? 'positive' : 'negative');
    }

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
// DAILY CARD RENDERING
// ═══════════════════════════════════════════════════════════════
function renderDailyCard() {
    // Render MAX Plays
    const maxPlaysContainer = document.getElementById('maxPlaysList');
    if (maxPlaysContainer) {
        maxPlaysContainer.innerHTML = BOOKIE_DATA.maxPlays.map((pick, i) => `
            <div class="play-item">
                <div class="play-rank gold">${i + 1}</div>
                <div class="play-info">
                    <div class="play-matchup">${getSportEmoji(pick.sport)} ${pick.matchup}</div>
                    <div class="play-pick">${pick.pick}</div>
                </div>
                <div class="play-meta">
                    <div class="conviction-badge">${'🔒'.repeat(pick.conviction)}</div>
                    <div class="play-units">${pick.units}u (5%)</div>
                </div>
            </div>
        `).join('');
    }

    // Render Today's Picks
    const todaysContainer = document.getElementById('todaysPicksList');
    if (todaysContainer) {
        todaysContainer.innerHTML = BOOKIE_DATA.todaysPicks.map((pick, i) => `
            <div class="play-item">
                <div class="play-rank ${i === 0 ? 'silver' : i === 1 ? 'bronze' : ''}">${i + 1}</div>
                <div class="play-info">
                    <div class="play-matchup">${getSportEmoji(pick.sport)} ${pick.matchup}</div>
                    <div class="play-pick">${pick.pick} (${formatOdds(pick.odds)})</div>
                </div>
                <div class="play-meta">
                    <div class="conviction-badge">${'🔒'.repeat(pick.conviction)}${'🔒'.repeat(5 - pick.conviction).split('').map(() => '<span class="lock empty">🔒</span>').join('')}</div>
                    <div class="play-units">${pick.units}u</div>
                </div>
            </div>
        `).join('');
    }

    // Render Weekly Picks
    const weeklyContainer = document.getElementById('weeklyPicksList');
    if (weeklyContainer) {
        weeklyContainer.innerHTML = BOOKIE_DATA.weeklyPicks.map((pick, i) => `
            <div class="play-item">
                <div class="play-rank">${i + 1}</div>
                <div class="play-info">
                    <div class="play-matchup">${getSportEmoji(pick.sport)} ${pick.matchup} <span style="color: var(--text-muted); font-size: 12px;">(${pick.time})</span></div>
                    <div class="play-pick">${pick.pick} (${formatOdds(pick.odds)})</div>
                </div>
                <div class="play-meta">
                    <div class="conviction-badge">${'🔒'.repeat(pick.conviction)}</div>
                    <div class="play-units">${pick.units}u</div>
                </div>
            </div>
        `).join('');
    }

    // Render Analysis Cards (Dropdown)
    const cardsContainer = document.getElementById('pickCardsGrid');
    if (cardsContainer) {
        cardsContainer.innerHTML = BOOKIE_DATA.todaysPicks.map((pick, index) => renderAnalysisCard(pick, index)).join('');
    }

    // Render Parlays Grid
    renderParlaysGrid();

    // Initialize parlay generator
    initParlayGenerator();
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
    container.innerHTML = ['safe', 'value', 'risky'].map(type => {
        const p = parlays[type];
        if (!p) return '';
        return `
            <div class="parlay-card">
                <div class="parlay-card-header">
                    <div class="parlay-name">${p.name}</div>
                    <div class="parlay-odds-badge">${p.odds}</div>
                </div>
                <div class="parlay-legs-vertical">
                    ${p.legs.map(leg => `
                        <div class="parlay-leg-item">
                            <div>
                                <div class="leg-team-full">${leg.pick}</div>
                                <div class="leg-pick-detail">${leg.game}</div>
                            </div>
                            <div class="leg-odds">${formatOdds(leg.odds)}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="parlay-card-footer">
                    <div class="parlay-stakes">
                        <div class="parlay-stake-item">
                            <div class="stake-value risk">$${p.wager}</div>
                            <div class="stake-label">Risk</div>
                        </div>
                        <div class="parlay-stake-item">
                            <div class="stake-value win">$${p.payout}</div>
                            <div class="stake-label">To Win</div>
                        </div>
                    </div>
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
    let targetOdds = multiplier;

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
        <div class="parlay-card">
            <div class="parlay-card-header">
                <div class="parlay-name">${multiplier}X PARLAY</div>
                <div class="parlay-odds-badge">+${(multiplier - 1) * 100}%</div>
            </div>
            <div class="parlay-legs-vertical">
                ${legs.map(pick => `
                    <div class="parlay-leg-item">
                        <div>
                            <div class="leg-team-full">${pick.pick}</div>
                            <div class="leg-pick-detail">${pick.matchup}</div>
                        </div>
                        <div class="leg-odds">${formatOdds(pick.odds)}</div>
                    </div>
                `).join('')}
            </div>
            <div class="parlay-card-footer">
                <div class="parlay-stakes">
                    <div class="parlay-stake-item">
                        <div class="stake-value risk">$${wager}</div>
                        <div class="stake-label">Risk</div>
                    </div>
                    <div class="parlay-stake-item">
                        <div class="stake-value win">$${potentialWin}</div>
                        <div class="stake-label">Potential</div>
                    </div>
                </div>
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

    return `
        <div class="result-card ${pick.result}" data-index="${index}" onclick="toggleResultCard(${index})">
            <div class="result-card-header">
                <div class="result-date">
                    ${pick.date}, 2026
                </div>
                <div class="result-sport">
                    ${getSportEmoji(pick.sport)} ${pick.sport}
                    <span class="expand-indicator">▼</span>
                </div>
            </div>
            <div class="scoreboard">
                <div class="team-score ${team1IsWinner ? 'winner' : team2IsWinner ? 'loser' : ''} ${pick.picked === pick.team1 ? 'picked' : ''}">
                    ${getTeamLogo(pick.team1, 35)}
                    <div class="team-abbr">${pick.team1 || ''}</div>
                    <div class="team-points">${pick.score1 ?? '-'}</div>
                </div>
                <div class="score-divider">
                    <div class="result-circle ${pick.result}">${circleIcon}</div>
                    <div class="score-divider-text">FINAL</div>
                </div>
                <div class="team-score ${team2IsWinner ? 'winner' : team1IsWinner ? 'loser' : ''} ${pick.picked === pick.team2 ? 'picked' : ''}">
                    ${getTeamLogo(pick.team2, 35)}
                    <div class="team-abbr">${pick.team2 || ''}</div>
                    <div class="team-points">${pick.score2 ?? '-'}</div>
                </div>
            </div>
            <div class="result-card-footer">
                <div class="result-pick-info">
                    <div class="result-pick">${pick.pick}</div>
                    <div class="result-odds">${formatOdds(pick.odds)} | ${pick.units}u</div>
                </div>
                <div class="result-pl">
                    <div class="result-units">${pick.units}u wagered</div>
                    <div class="result-profit ${profitClass}">${pick.pl >= 0 ? '+' : ''}${pick.pl.toFixed(2)}u</div>
                </div>
            </div>
            <!-- Expandable Bet Slip -->
            <div class="result-bet-slip">
                <div class="bet-slip-inner">
                    <div class="bet-slip-header">
                        <div class="bet-slip-title">BET SLIP</div>
                        <div class="bet-slip-status ${pick.result}">${pick.result.toUpperCase()}</div>
                    </div>
                    <div class="bet-slip-details">
                        <div class="slip-detail">
                            <div class="slip-detail-value">${formatOdds(pick.odds)}</div>
                            <div class="slip-detail-label">Odds</div>
                        </div>
                        <div class="slip-detail">
                            <div class="slip-detail-value risk">$${wagered}</div>
                            <div class="slip-detail-label">Wagered</div>
                        </div>
                        <div class="slip-detail">
                            <div class="slip-detail-value ${profitClass === 'positive' ? 'win' : ''}">${profitDollars >= 0 ? '+' : ''}$${Math.abs(profitDollars).toFixed(0)}</div>
                            <div class="slip-detail-label">Profit/Loss</div>
                        </div>
                        <div class="slip-detail">
                            <div class="slip-detail-value">${pick.units}u</div>
                            <div class="slip-detail-label">Units</div>
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
        { id: 'straight-1', game: 'DEN @ DET', pick: 'Pistons -6', odds: -110, amount: 30, deadline: '4:00 PM', sport: 'NBA', away: 'DEN', home: 'DET' },
        { id: 'straight-2', game: 'OTT @ CAR', pick: 'Senators ML', odds: 145, amount: 20, deadline: '4:00 PM', sport: 'NHL', away: 'OTT', home: 'CAR' },
        { id: 'straight-3', game: 'MIA @ ATL', pick: 'Heat -4.5', odds: -110, amount: 20, deadline: '4:30 PM', sport: 'NBA', away: 'MIA', home: 'ATL' },
        { id: 'straight-4', game: 'BUF @ TB', pick: 'Sabres ML', odds: 195, amount: 20, deadline: '4:30 PM', sport: 'NHL', away: 'BUF', home: 'TB' },
        { id: 'straight-5', game: 'BOS @ DAL', pick: 'Mavericks +8', odds: -110, amount: 20, deadline: '5:00 PM', sport: 'NBA', away: 'BOS', home: 'DAL' },
        { id: 'straight-6', game: 'DRAKE @ BEL', pick: 'Belmont -7.5', odds: -110, amount: 20, deadline: '5:00 PM', sport: 'NCAAB', away: 'DRAKE', home: 'BEL' },
        { id: 'straight-7', game: 'TOR @ EDM', pick: 'UNDER 6.5', odds: -115, amount: 20, deadline: '6:00 PM', sport: 'NHL', away: 'TOR', home: 'EDM' },
        { id: 'straight-8', game: 'CREI @ MARQ', pick: 'Marquette -5', odds: -110, amount: 20, deadline: '6:00 PM', sport: 'NCAAB', away: 'CREI', home: 'MARQ' },
        { id: 'straight-9', game: 'GONZ @ SMC', pick: "Saint Mary's +4.5", odds: -110, amount: 30, deadline: '7:00 PM', sport: 'NCAAB', away: 'GONZ', home: 'SMC' },
        { id: 'straight-10', game: 'PHI @ GSW', pick: '76ers +2.5', odds: -110, amount: 40, deadline: '7:00 PM', sport: 'NBA', away: 'PHI', home: 'GSW' },
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
            <div class="bet-item ${statusClass}" data-id="${bet.id}">
                <div class="bet-number">
                    <div class="bet-number-value">${index + 1}</div>
                    <div class="bet-number-label">BET</div>
                </div>
                <div class="bet-logos">
                    ${getTeamLogo(bet.away, 28)}
                    <span class="vs-text">@</span>
                    ${getTeamLogo(bet.home, 28)}
                </div>
                <div class="bet-info">
                    <div class="bet-sport-tag">${getSportEmoji(bet.sport)} ${bet.sport} · ${bet.deadline}</div>
                    <div class="bet-pick">${bet.pick}</div>
                    <div class="bet-game">${bet.game}</div>
                </div>
                <div class="bet-odds">${formatOdds(bet.odds)}</div>
                <div class="bet-stake">
                    <div class="bet-amount">$${bet.amount}</div>
                    <div class="bet-amount-label">Risk</div>
                </div>
                <div class="bet-win">
                    <div class="bet-win-amount">$${potentialWin}</div>
                    <div class="bet-win-label">To Win</div>
                </div>
                <button class="bet-status-btn ${statusClass}" onclick="cycleBetStatus('${bet.id}')">
                    ${statusIcon}
                </button>
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
            odds: '+285',
            amount: 25,
            toWin: 96,
            legs: [
                { team: 'Philadelphia 76ers', pick: '+2.5', game: 'PHI @ GSW', odds: -110 },
                { team: 'Detroit Pistons', pick: '-6', game: 'DEN @ DET', odds: -110 },
                { team: 'Miami Heat', pick: '-4.5', game: 'MIA @ ATL', odds: -110 },
                { team: 'Marquette Golden Eagles', pick: '-5', game: 'CREI @ MARQ', odds: -110 }
            ]
        },
        {
            id: 'parlay-2',
            name: 'VALUE PARLAY',
            odds: '+650',
            amount: 20,
            toWin: 150,
            legs: [
                { team: 'Philadelphia 76ers', pick: '+2.5', game: 'PHI @ GSW', odds: -110 },
                { team: "Saint Mary's Gaels", pick: '+4.5', game: 'GONZ @ SMC', odds: -110 },
                { team: 'Ottawa Senators', pick: 'ML', game: 'OTT @ CAR', odds: 145 },
                { team: 'Toronto/Edmonton', pick: 'UNDER 6.5', game: 'TOR @ EDM', odds: -115 }
            ]
        },
        {
            id: 'parlay-3',
            name: 'MOON SHOT',
            odds: '+2800',
            amount: 10,
            toWin: 290,
            legs: [
                { team: 'Buffalo Sabres', pick: 'ML', game: 'BUF @ TB', odds: 195 },
                { team: 'Ottawa Senators', pick: 'ML', game: 'OTT @ CAR', odds: 145 },
                { team: 'Philadelphia 76ers', pick: 'ML', game: 'PHI @ GSW', odds: 115 },
                { team: 'Dallas Mavericks', pick: '+8', game: 'BOS @ DAL', odds: -110 },
                { team: 'Belmont Bruins', pick: '-7.5', game: 'DRAKE @ BEL', odds: -110 }
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
            <div class="parlay-card ${statusClass}" data-id="${parlay.id}">
                <div class="parlay-card-header">
                    <div class="parlay-name">${parlay.name}</div>
                    <div class="parlay-odds-badge">${parlay.odds}</div>
                </div>
                <div class="parlay-legs-vertical">
                    ${parlay.legs.map(leg => `
                        <div class="parlay-leg-item">
                            <div>
                                <div class="leg-team-full">${leg.team}</div>
                                <div class="leg-pick-detail">${leg.pick} · ${leg.game}</div>
                            </div>
                            <div class="leg-odds">${formatOdds(leg.odds)}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="parlay-card-footer">
                    <div class="parlay-stakes">
                        <div class="parlay-stake-item">
                            <div class="stake-value risk">$${parlay.amount}</div>
                            <div class="stake-label">Risk</div>
                        </div>
                        <div class="parlay-stake-item">
                            <div class="stake-value win">$${parlay.toWin}</div>
                            <div class="stake-label">To Win</div>
                        </div>
                    </div>
                    <button class="bet-status-btn ${statusClass}" onclick="cycleBetStatus('${parlay.id}')">
                        ${statusIcon}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function renderPropBets() {
    const container = document.getElementById('propBetsList');
    if (!container) return;

    const props = [
        { id: 'prop-1', player: 'Tyrese Maxey', team: 'PHI 76ers', teamAbbr: 'PHI', prop: 'Over 26.5 Points', odds: -115, amount: 30, game: 'PHI @ GSW' },
        { id: 'prop-2', player: 'Joel Embiid', team: 'PHI 76ers', teamAbbr: 'PHI', prop: 'Over 11.5 Rebounds', odds: -110, amount: 20, game: 'PHI @ GSW' },
        { id: 'prop-3', player: 'Cade Cunningham', team: 'DET Pistons', teamAbbr: 'DET', prop: 'Over 7.5 Assists', odds: -120, amount: 20, game: 'DEN @ DET' },
        { id: 'prop-4', player: 'Nikola Jokic', team: 'DEN Nuggets', teamAbbr: 'DEN', prop: 'Triple Double YES', odds: 180, amount: 10, game: 'DEN @ DET' },
        { id: 'prop-5', player: 'Jaylen Brown', team: 'BOS Celtics', teamAbbr: 'BOS', prop: 'Over 28.5 Points', odds: -110, amount: 20, game: 'BOS @ DAL' },
        { id: 'prop-6', player: 'Cooper Flagg', team: 'DAL Mavericks', teamAbbr: 'DAL', prop: 'Over 18.5 Points', odds: -115, amount: 20, game: 'BOS @ DAL' },
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
            <div class="bet-item prop-item ${statusClass}" data-id="${prop.id}">
                <div class="prop-logo">
                    ${getTeamLogo(prop.teamAbbr, 40)}
                </div>
                <div class="bet-info">
                    <div class="bet-sport-tag">🏀 ${prop.team}</div>
                    <div class="bet-game">${prop.player} · ${prop.game}</div>
                    <div class="bet-pick">${prop.prop}</div>
                </div>
                <div class="bet-odds">${formatOdds(prop.odds)}</div>
                <div class="bet-stake">
                    <div class="bet-amount">$${prop.amount}</div>
                    <div class="bet-amount-label">Risk</div>
                </div>
                <div class="bet-win">
                    <div class="bet-win-amount">$${potentialWin}</div>
                    <div class="bet-win-label">To Win</div>
                </div>
                <button class="bet-status-btn ${statusClass}" onclick="cycleBetStatus('${prop.id}')">
                    ${statusIcon}
                </button>
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
    const total = 19; // 10 straights + 3 parlays + 6 props
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
    const totalRisk = 240 + 55 + 120; // straights + parlays + props = $415
    const riskEl = document.getElementById('totalRisk');
    if (riskEl) riskEl.textContent = '$' + totalRisk;

    // Update potential win
    const potentialEl = document.getElementById('potentialWin');
    if (potentialEl) potentialEl.textContent = '$850+';
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
        'prop-1', 'prop-2', 'prop-3', 'prop-4', 'prop-5', 'prop-6'
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
            away: { abbr: 'CREI', name: 'Creighton', record: '16-8' },
            home: { abbr: 'MARQ', name: 'Marquette', record: '20-4' },
            channel: 'FS1',
            picks: [
                { pick: 'Marquette -5', odds: '-110', amount: 20 }
            ],
            status: 'upcoming'
        },
        {
            id: 9,
            time: '7:00 PM',
            timePST: '7:00 PM PST',
            timeET: '10:00 PM ET',
            sport: 'NCAAB',
            away: { abbr: 'GONZ', name: 'Gonzaga', record: '19-5' },
            home: { abbr: 'SMC', name: "Saint Mary's", record: '21-3' },
            channel: 'ESPN2',
            picks: [
                { pick: "Saint Mary's +4.5", odds: '-110', amount: 30 }
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
}

function renderNextGame(game) {
    const container = document.getElementById('nextGameInfo');
    if (!container) return;

    const totalAmount = game.picks.reduce((sum, p) => sum + p.amount, 0);

    container.innerHTML = `
        <div class="next-matchup">
            <div class="next-team">
                ${getTeamLogo(game.away.abbr, 50)}
                <div class="next-team-name">${game.away.abbr}</div>
                <div class="next-team-record">${game.away.name} (${game.away.record})</div>
            </div>
            <div class="next-vs">@</div>
            <div class="next-team">
                ${getTeamLogo(game.home.abbr, 50)}
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
                            ${getTeamLogo(game.away.abbr, 45)}
                            <div class="game-team-abbr">${game.away.abbr}</div>
                            <div class="game-team-name">${game.away.name}</div>
                        </div>
                        <div class="game-vs">@</div>
                        <div class="game-team">
                            ${getTeamLogo(game.home.abbr, 45)}
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

// Make functions globally available
window.logBet = logBet;
window.settleBet = settleBet;
window.cycleBetStatus = cycleBetStatus;
window.resetAllBets = resetAllBets;
window.markAllPlaced = markAllPlaced;
window.toggleAnalysisCard = toggleAnalysisCard;
window.togglePlaysSection = togglePlaysSection;
window.toggleResultCard = toggleResultCard;
