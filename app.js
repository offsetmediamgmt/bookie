/* ═══════════════════════════════════════════════════════════════
   BOOKIE - Application Logic
   v2.0
   ═══════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initBankroll();
    initCalculators();
    renderDailyCard();
    renderHistory();
    renderNBASchedule();
    renderUFCSchedule();
    renderNHLSchedule();
    renderSoccerSchedule();
    updateHeaderStats();
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
    document.getElementById('headerWinRate').textContent = stats.winRate + '%';
    document.getElementById('headerPL').textContent = (stats.netUnits >= 0 ? '+' : '') + stats.netUnits + 'u';
    document.getElementById('headerTotal').textContent = stats.total;

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
    document.getElementById('headerStreak').textContent = streak + (streakType === 'win' ? 'W' : 'L');
}

// ═══════════════════════════════════════════════════════════════
// BANKROLL SYSTEM - LIVE UPDATES
// ═══════════════════════════════════════════════════════════════
function initBankroll() {
    const bankroll = BOOKIE_DATA.bankroll;

    // Set up input listener for live updates
    const bankrollInput = document.getElementById('bankrollInput');
    if (bankrollInput) {
        bankrollInput.value = bankroll.current;
        bankrollInput.addEventListener('input', updateAllBankrollDisplays);
        bankrollInput.addEventListener('keyup', updateAllBankrollDisplays);
    }

    // Initial render
    updateAllBankrollDisplays();
}

function updateAllBankrollDisplays() {
    const inputVal = document.getElementById('bankrollInput')?.value;
    const bankroll = parseFloat(inputVal) || BOOKIE_DATA.bankroll.current;
    const starting = BOOKIE_DATA.bankroll.starting;
    const unitBase = bankroll * 0.02; // 2%

    // Update hero display
    const currentEl = document.getElementById('currentBankroll');
    const startingEl = document.getElementById('startingBankroll');
    const profitEl = document.getElementById('totalProfit');
    const roiEl = document.getElementById('totalROI');

    if (currentEl) currentEl.textContent = '$' + bankroll.toLocaleString();
    if (startingEl) startingEl.textContent = '$' + starting.toLocaleString();

    const profit = bankroll - starting;
    if (profitEl) profitEl.textContent = (profit >= 0 ? '+$' : '-$') + Math.abs(profit).toLocaleString();
    if (roiEl) roiEl.textContent = ((profit / starting) * 100).toFixed(1) + '%';

    // Render unit tiers
    const unitGrid = document.getElementById('unitBreakdown');
    if (unitGrid) {
        unitGrid.innerHTML = BOOKIE_DATA.unitTiers.map((tier, i) => `
            <div class="unit-tier ${i === 4 ? 'active' : ''}">
                <div class="locks">${'🔒'.repeat(tier.locks)}</div>
                <div class="units">${tier.units}u</div>
                <div class="amount">$${(unitBase * tier.units).toFixed(0)}</div>
                <div class="pct">${tier.percent}%</div>
            </div>
        `).join('');
    }

    // Render dynamic growth projection based on bankroll input
    const growthGrid = document.getElementById('growthProjection');
    if (growthGrid) {
        const months = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
        let projected = bankroll;

        growthGrid.innerHTML = months.map((month, i) => {
            const gain = i === 0 ? 0 : Math.round(projected * 0.10);
            if (i > 0) projected += gain;
            return `
                <div class="growth-month ${i === 0 ? 'current' : ''}">
                    <div class="month-label">${month} 2026</div>
                    <div class="month-value">$${(i === 0 ? bankroll : projected).toLocaleString()}</div>
                    <div class="month-gain">${i === 0 ? 'Current' : '+$' + gain.toLocaleString()}</div>
                </div>
            `;
        }).join('');
    }
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

    // Render Pick Cards
    const cardsContainer = document.getElementById('pickCardsGrid');
    if (cardsContainer) {
        const allPicks = [...BOOKIE_DATA.todaysPicks, ...BOOKIE_DATA.weeklyPicks.slice(0, 2)];
        cardsContainer.innerHTML = allPicks.map(pick => renderPickCard(pick)).join('');
    }

    // Render Parlays
    renderParlays();
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
                                <div class="leg-pick">${leg.pick}</div>
                            </div>
                            <div class="leg-odds">${formatOdds(leg.odds)}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    });
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

    grid.innerHTML = history.map(pick => renderResultCard(pick)).join('');
}

function renderResultCard(pick) {
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

    return `
        <div class="result-card ${pick.result}">
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
                    <div class="team-abbr">${pick.team1 || ''}</div>
                    <div class="team-points">${pick.score1 ?? '-'}</div>
                </div>
                <div class="score-divider">
                    <div class="result-circle ${pick.result}">${circleIcon}</div>
                    <div class="score-divider-text">FINAL</div>
                </div>
                <div class="team-score ${team2IsWinner ? 'winner' : team1IsWinner ? 'loser' : ''} ${pick.picked === pick.team2 ? 'picked' : ''}">
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
// DJ'S PICKS
// ═══════════════════════════════════════════════════════════════
function addDJPick() {
    const sport = document.getElementById('djSport')?.value;
    const pick = document.getElementById('djPick')?.value;
    const reasoning = document.getElementById('djReasoning')?.value;

    if (!sport || !pick) {
        alert('Please fill sport and pick');
        return;
    }

    const djPick = {
        id: Date.now(),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        sport,
        pick,
        reasoning,
        result: 'pending'
    };

    BOOKIE_DATA.djPicks.unshift(djPick);
    renderDJPicks();

    document.getElementById('djPick').value = '';
    document.getElementById('djReasoning').value = '';
}

function renderDJPicks() {
    const container = document.getElementById('djPicksList');
    if (!container) return;

    if (BOOKIE_DATA.djPicks.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 40px;">No picks yet. Add your first pick above!</p>';
        return;
    }

    container.innerHTML = BOOKIE_DATA.djPicks.map(pick => `
        <div class="pick-card" style="margin-bottom: 15px;">
            <div class="pick-card-header">
                <div class="sport-badge">${getSportEmoji(pick.sport)} ${pick.sport}</div>
                <span class="result-badge ${pick.result}">${pick.result.toUpperCase()}</span>
            </div>
            <div class="pick-card-body">
                <div class="matchup">${pick.pick}</div>
                <div class="matchup-time">${pick.date}</div>
                ${pick.reasoning ? `<p style="color: var(--text-secondary); font-size: 13px; margin-top: 10px;">${pick.reasoning}</p>` : ''}
                ${pick.result === 'pending' ? `
                    <div style="margin-top: 15px; display: flex; gap: 10px;">
                        <button onclick="settleDJPick(${pick.id}, 'win')" class="btn btn-success" style="padding: 8px 16px; font-size: 12px;">WIN</button>
                        <button onclick="settleDJPick(${pick.id}, 'loss')" class="btn btn-danger" style="padding: 8px 16px; font-size: 12px;">LOSS</button>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function settleDJPick(id, result) {
    const pick = BOOKIE_DATA.djPicks.find(p => p.id === id);
    if (pick) {
        pick.result = result;
        renderDJPicks();
        updateDJStats();
    }
}

function updateDJStats() {
    const settled = BOOKIE_DATA.djPicks.filter(p => p.result !== 'pending');
    const wins = settled.filter(p => p.result === 'win').length;
    const total = settled.length;

    const statsEl = document.getElementById('djStats');
    if (statsEl && total > 0) {
        statsEl.innerHTML = `Record: ${wins}-${total - wins} (${((wins/total)*100).toFixed(1)}%)`;
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

// Make functions globally available
window.logBet = logBet;
window.settleBet = settleBet;
window.addDJPick = addDJPick;
window.settleDJPick = settleDJPick;
