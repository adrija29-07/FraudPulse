// ============================================================
// GRAPHFIX.JS — Fixes for:
// 1. Fraud Rings: 5 rings × 4-8 accounts = 20+ accounts
// 2. Timeline Replay: multi-account expanded scenario
// 3. Transaction Graph: working All/Flagged/24h filters
// 4. Graph view: better GNN layout, no jumble
// ============================================================

// ─── 1. EXPANDED FRAUD RINGS (20+ accounts across 5 rings) ──
window._expandedFraudRings = [
  {
    id: 'RING-001', name: 'Round-Trip Ring Alpha', riskScore: 94,
    accounts: ['A001','A002','A003','A004'],
    totalAmount: '₹18,45,000', timespan: '8h 40m',
    detectedAt: '14 Mar 2026, 17:58', pattern: 'Circular 4-hop',
    color: '#FF4757',
  },
  {
    id: 'RING-002', name: 'Mule Network Beta', riskScore: 88,
    accounts: ['A007','A010','A012','A016'],
    totalAmount: '₹32,00,000', timespan: '6h 00m',
    detectedAt: '14 Mar 2026, 13:35', pattern: '4-node star burst',
    color: '#FF6B35',
  },
  {
    id: 'RING-003', name: 'Shell Corp Gamma Cluster', riskScore: 85,
    accounts: ['A001','A002','A012','A016','A007','A010'],
    totalAmount: '₹56,80,000', timespan: '12h 20m',
    detectedAt: '13 Mar 2026, 22:10', pattern: '6-node layering web',
    color: '#F5A623',
  },
  {
    id: 'RING-004', name: 'Dormant Activation Net', riskScore: 79,
    accounts: ['A003','A008','A014','A017','A004'],
    totalAmount: '₹11,25,000', timespan: '4h 15m',
    detectedAt: '15 Mar 2026, 08:45', pattern: 'Dormant chain reactivation',
    color: '#7B5EA7',
  },
  {
    id: 'RING-005', name: 'Cross-Layer Mega Ring', riskScore: 91,
    accounts: ['A001','A002','A007','A010','A012','A016','A003','A004'],
    totalAmount: '₹1,12,00,000', timespan: '18h 30m',
    detectedAt: '14 Mar 2026, 23:55', pattern: '8-hop cross-layer circular',
    color: '#FF4757',
  },
];

// Override fraudRings global
window.addEventListener('load', function() {
  if (typeof fraudRings !== 'undefined') {
    fraudRings.length = 0;
    window._expandedFraudRings.forEach(r => fraudRings.push(r));
  }
});

// Build ring tab buttons
function buildRingTabBtns() {
  const tabContainer = document.querySelector('.ring-tab-bar, [class*="ring-tab"]');
  if (!tabContainer) {
    // Try to find by content pattern
    const allBtns = document.querySelectorAll('.ring-tab-btn');
    if (allBtns.length === 0) return;
  }
  const rings = window._expandedFraudRings;
  const existing = document.querySelectorAll('.ring-tab-btn');
  if (existing.length >= rings.length) return;

  existing.forEach((b, i) => {
    if (rings[i]) {
      b.textContent = rings[i].id + ' ' + rings[i].name;
      b.onclick = () => selectFraudRing(i);
    }
  });
}

// Override renderFraudRingAccounts with more data
window.renderFraudRingAccounts = function(ringIdx) {
  const rings = window._expandedFraudRings;
  const ring = rings[ringIdx] || rings[0];
  const container = document.getElementById('fraudRingAccountList');
  if (!container) return;

  const allAcc = typeof accounts !== 'undefined' ? accounts : [];
  const rC = { fraud:'#FF4757', suspicious:'#F5A623', dormant:'#7B5EA7', clean:'#00C48C' };
  const gradColors = ['#FF4757','#FF6B35','#F5A623','#FF4757','#FF6B35','#F5A623','#FF4757','#FF6B35'];

  container.innerHTML = ring.accounts.map((id, i) => {
    const acct = allAcc.find(a => a.id === id);
    const col = rC[acct?.risk] || gradColors[i % gradColors.length];
    const initials = acct?.name.split(' ').map(w => w[0]).join('').slice(0,2) || id.slice(-2);
    return `
    <div class="ring-account-item" style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-bottom:1px solid #111;cursor:pointer;"
         onclick="buildCaseSummaryForAccount && buildCaseSummaryForAccount('${id}')">
      <div class="ring-account-avatar" style="background:${col};width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:white;font-family:'Space Mono',monospace;flex-shrink:0;">${initials}</div>
      <div style="flex:1;min-width:0;">
        <div class="ring-account-name" style="font-size:12px;font-weight:600;color:#F0F0F0;">${acct?.name || id}</div>
        <div class="ring-account-id" style="font-size:10px;color:#555;">${id} · ${acct?.type || 'Unknown'} · ${acct?.inflow || '?'}</div>
      </div>
      <div style="text-align:right;">
        <div class="ring-account-score" style="color:${col};font-family:'Space Mono',monospace;font-size:12px;font-weight:700;">${acct?.riskScore || '—'}</div>
        <div style="font-size:9px;color:${col};text-transform:uppercase;">${acct?.risk || 'fraud'}</div>
      </div>
    </div>`;
  }).join('');

  const metaEl = document.getElementById('fraudRingMeta');
  if (metaEl) metaEl.textContent = `${ring.accounts.length} accounts · ${ring.totalAmount} · Detected ${ring.detectedAt}`;
  const titleEl = document.getElementById('fraudRingTitle');
  if (titleEl) titleEl.textContent = ring.name + ' — ' + ring.id;

  // Update ring tab active state
  document.querySelectorAll('.ring-tab-btn').forEach((b,i) => b.classList.toggle('active', i === ringIdx));
};

// Override initFraudRingGraph
window.initFraudRingGraph = function(ringIdx) {
  const container = document.getElementById('fraudRingGraph');
  if (!container) return;
  container.innerHTML = '';

  const rings = window._expandedFraudRings;
  const ring = rings[ringIdx] || rings[0];
  const allAcc = typeof accounts !== 'undefined' ? accounts : [];

  const W = container.clientWidth || 520;
  const H = 340;
  const svg = d3.select(container).append('svg').attr('width', W).attr('height', H).style('overflow','visible');
  const g = svg.append('g');
  svg.call(d3.zoom().scaleExtent([0.4, 3]).on('zoom', e => g.attr('transform', e.transform)));

  const defs = svg.append('defs');
  const flt = defs.append('filter').attr('id', 'rgGlow');
  flt.append('feGaussianBlur').attr('stdDeviation', '5').attr('result', 'cb');
  const me = flt.append('feMerge');
  me.append('feMergeNode').attr('in', 'cb');
  me.append('feMergeNode').attr('in', 'SourceGraphic');

  defs.append('marker').attr('id', 'rgArr').attr('viewBox','0 0 10 10')
    .attr('refX', 22).attr('refY', 5).attr('markerWidth', 5).attr('markerHeight', 5).attr('orient', 'auto')
    .append('path').attr('d', 'M 0 0 L 10 5 L 0 10 Z').attr('fill', ring.color + '99');

  const ids = ring.accounts;
  const cx = W / 2, cy = H / 2;
  const r = Math.min(W, H) * 0.32;
  const pos = {};

  ids.forEach((id, i) => {
    const angle = -Math.PI / 2 + (i / ids.length) * 2 * Math.PI;
    pos[id] = { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });

  // Shaded polygon
  const pts = ids.map(id => `${pos[id].x},${pos[id].y}`).join(' ');
  g.append('polygon').attr('points', pts)
    .attr('fill', ring.color + '08').attr('stroke', ring.color + '30').attr('stroke-width', 1);

  // Circular edges
  ids.forEach((id, i) => {
    const next = ids[(i + 1) % ids.length];
    g.append('line')
      .attr('x1', pos[id].x).attr('y1', pos[id].y)
      .attr('x2', pos[next].x).attr('y2', pos[next].y)
      .attr('stroke', ring.color + '80').attr('stroke-width', 2.5)
      .attr('class', 'fraud-edge').attr('marker-end', 'url(#rgArr)');
  });

  // Cross edges for large rings
  if (ids.length >= 6) {
    for (let i = 0; i < ids.length; i += 2) {
      const j = (i + 3) % ids.length;
      g.append('line')
        .attr('x1', pos[ids[i]].x).attr('y1', pos[ids[i]].y)
        .attr('x2', pos[ids[j]].x).attr('y2', pos[ids[j]].y)
        .attr('stroke', ring.color + '25').attr('stroke-width', 1).attr('stroke-dasharray', '4,4');
    }
  }

  // Nodes
  ids.forEach((id, i) => {
    const acct = allAcc.find(a => a.id === id);
    const ng = g.append('g').style('cursor', 'pointer')
      .on('click', () => typeof buildCaseSummaryForAccount === 'function' && buildCaseSummaryForAccount(id));

    ng.append('circle').attr('cx', pos[id].x).attr('cy', pos[id].y).attr('r', 26)
      .attr('fill', 'none').attr('stroke', ring.color).attr('stroke-width', 1.5)
      .attr('stroke-opacity', 0.25).attr('class', 'glow-ring-pulse');

    ng.append('circle').attr('cx', pos[id].x).attr('cy', pos[id].y).attr('r', 17)
      .attr('fill', ring.color).attr('stroke', ring.color)
      .attr('stroke-width', 2).attr('stroke-opacity', 0.4)
      .attr('filter', 'url(#rgGlow)').attr('class', 'node-pulse');

    ng.append('text').attr('x', pos[id].x).attr('y', pos[id].y)
      .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')
      .attr('font-family', 'DM Mono, monospace').attr('font-size', '9px')
      .attr('fill', 'white').attr('font-weight', '700').text(id);

    const angle = Math.atan2(pos[id].y - cy, pos[id].x - cx);
    const lx = pos[id].x + 46 * Math.cos(angle);
    const ly = pos[id].y + 46 * Math.sin(angle);
    ng.append('text').attr('x', lx).attr('y', ly)
      .attr('text-anchor', pos[id].x < cx - 10 ? 'end' : pos[id].x > cx + 10 ? 'start' : 'middle')
      .attr('font-family', 'DM Sans, sans-serif').attr('font-size', '10px').attr('fill', '#999')
      .text(acct?.name?.split(' ')[0] || id);

    // Risk score badge
    ng.append('text').attr('x', lx).attr('y', ly + 12)
      .attr('text-anchor', pos[id].x < cx - 10 ? 'end' : pos[id].x > cx + 10 ? 'start' : 'middle')
      .attr('font-family', 'Space Mono, monospace').attr('font-size', '8px').attr('fill', ring.color + 'CC')
      .text(acct ? `Risk ${acct.riskScore}` : '');
  });

  // Center label
  g.append('text').attr('x', cx).attr('y', cy - 10)
    .attr('text-anchor', 'middle').attr('font-family', 'DM Mono, monospace')
    .attr('font-size', '9px').attr('fill', ring.color + 'CC').attr('font-weight', '700')
    .text('FRAUD RING');
  g.append('text').attr('x', cx).attr('y', cy + 8)
    .attr('text-anchor', 'middle').attr('font-family', 'Space Mono, monospace')
    .attr('font-size', '13px').attr('fill', ring.color).attr('font-weight', '700')
    .text(ring.id);
};

// Override selectFraudRing
window.selectFraudRing = function(idx) {
  window.renderFraudRingAccounts(idx);
  window.initFraudRingGraph(idx);
};

// Inject ring tabs
function injectRingTabs() {
  const rings = window._expandedFraudRings;
  const container = document.querySelector('#view-rings .inv-tab-bar, #view-rings [class*="tab-bar"], #view-rings .ring-tabs');
  if (!container) {
    // Try direct inner panel approach
    const tabBtns = document.querySelectorAll('.ring-tab-btn');
    tabBtns.forEach((btn, i) => {
      if (rings[i]) {
        btn.textContent = rings[i].id + ' · ' + rings[i].name;
        btn.onclick = () => window.selectFraudRing(i);
        btn.classList.toggle('active', i === 0);
      }
    });
    // Add missing tabs
    if (tabBtns.length < rings.length && tabBtns.length > 0) {
      const parent = tabBtns[0].parentElement;
      for (let i = tabBtns.length; i < rings.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'ring-tab-btn';
        btn.textContent = rings[i].id + ' · ' + rings[i].name;
        btn.onclick = (function(idx){ return () => window.selectFraudRing(idx); })(i);
        parent.appendChild(btn);
      }
    }
    return;
  }
  container.innerHTML = rings.map((r, i) => `
    <button class="ring-tab-btn ${i===0?'active':''}" onclick="selectFraudRing(${i})"
      style="padding:6px 14px;border-radius:7px;border:1px solid ${i===0?r.color:'#2A2A2A'};background:${i===0?r.color+'15':'transparent'};color:${i===0?r.color:'#666'};font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap;transition:all 0.2s;">
      ${r.id} · ${r.name}
    </button>`).join('');
}

// ─── 2. EXPANDED TIMELINE REPLAY ────────────────────────────
const _expandedReplaySteps = [
  { time:'07:30', from:'Mule A/C X1',   to:'Shell Corp A', amount:'₹8,90,000',  channel:'RTGS', color:'#FF4757', fromId:'A016', toId:'A002' },
  { time:'09:15', from:'Rajesh Mehta',   to:'Shell Corp A', amount:'₹4,95,000',  channel:'NEFT', color:'#FF4757', fromId:'A001', toId:'A002' },
  { time:'09:45', from:'Shell Corp A',   to:'Shell Corp B', amount:'₹3,40,000',  channel:'NEFT', color:'#FF6B35', fromId:'A010', toId:'A012' },
  { time:'10:42', from:'Shell Corp A',   to:'Dormant 7823', amount:'₹4,90,000',  channel:'RTGS', color:'#FF6B35', fromId:'A002', toId:'A003' },
  { time:'11:00', from:'Shell Corp B',   to:'Mule A/C X1',  amount:'₹3,35,000',  channel:'RTGS', color:'#F5A623', fromId:'A012', toId:'A016' },
  { time:'13:30', from:'Mule A/C X1',   to:'Kumar Trdg',   amount:'₹3,30,000',  channel:'UPI',  color:'#F5A623', fromId:'A016', toId:'A007' },
  { time:'14:08', from:'Dormant 7823',   to:'Partner B',    amount:'₹4,85,000',  channel:'NEFT', color:'#F5A623', fromId:'A003', toId:'A004' },
  { time:'16:45', from:'Shell Corp B',   to:'Rajesh Mehta', amount:'₹4,20,000',  channel:'NEFT', color:'#FF4757', fromId:'A012', toId:'A001' },
  { time:'17:55', from:'Partner B',      to:'Rajesh Mehta', amount:'₹4,80,000',  channel:'UPI',  color:'#FF4757', fromId:'A004', toId:'A001' },
  { time:'08:30', from:'Rajesh Mehta',   to:'ATM',          amount:'₹49,900',    channel:'ATM',  color:'#F5A623', fromId:'A001', toId:null },
  { time:'09:15', from:'Rajesh Mehta',   to:'ATM',          amount:'₹49,800',    channel:'ATM',  color:'#F5A623', fromId:'A001', toId:null },
  { time:'15:00', from:'Rajesh Mehta',   to:'Fast Traders',  amount:'₹1,80,000',  channel:'NEFT', color:'#F5A623', fromId:'A001', toId:'A010' },
];

// Replay node config – which accounts to show on replay graph
const _replayNodeIds = ['A001','A002','A003','A004','A007','A010','A012','A016'];

window.initReplayGraph = function() {
  const container = document.getElementById('replayGraphArea');
  if (!container) return;
  container.innerHTML = '';

  const W = container.clientWidth || 700;
  const H = container.clientHeight || 320;
  if (W < 50) { setTimeout(window.initReplayGraph, 300); return; }

  const svg = d3.select(container).append('svg').attr('width', W).attr('height', H)
    .style('width', '100%').style('height', '100%');
  window.replaySvg = svg;

  const defs = svg.append('defs');
  const f = defs.append('filter').attr('id', 'replayGlow2');
  f.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'cb');
  const me = f.append('feMerge');
  me.append('feMergeNode').attr('in', 'cb');
  me.append('feMergeNode').attr('in', 'SourceGraphic');

  defs.append('marker').attr('id', 'replayArrow2').attr('viewBox','0 0 10 10')
    .attr('refX', 22).attr('refY', 5).attr('markerWidth', 5).attr('markerHeight', 5).attr('orient', 'auto')
    .append('path').attr('d', 'M 0 0 L 10 5 L 0 10 Z').attr('fill', 'rgba(232,102,10,0.5)');

  const ids = _replayNodeIds;
  const allAcc = typeof accounts !== 'undefined' ? accounts : [];
  const rC = { fraud:'#FF4757', suspicious:'#F5A623', dormant:'#7B5EA7', clean:'#00C48C' };
  const cx = W / 2, cy = H / 2;
  const r = Math.min(W * 0.4, H * 0.38);
  window.replayNodePos = {};

  ids.forEach((id, i) => {
    const angle = -Math.PI / 2 + (i / ids.length) * 2 * Math.PI;
    window.replayNodePos[id] = { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });

  // Draw static edges based on replay steps
  const drawnEdges = new Set();
  _expandedReplaySteps.forEach(step => {
    if (!step.toId) return;
    const key = step.fromId + '-' + step.toId;
    if (drawnEdges.has(key)) return;
    drawnEdges.add(key);
    const sp = window.replayNodePos[step.fromId];
    const tp = window.replayNodePos[step.toId];
    if (!sp || !tp) return;
    svg.append('line')
      .attr('class', `replay-edge replay-edge-${step.fromId}-${step.toId}`)
      .attr('x1', sp.x).attr('y1', sp.y).attr('x2', tp.x).attr('y2', tp.y)
      .attr('stroke', '#2A2A2A').attr('stroke-width', 1.5)
      .attr('marker-end', 'url(#replayArrow2)');
  });

  // Draw nodes
  ids.forEach(id => {
    const acct = allAcc.find(a => a.id === id);
    const pos = window.replayNodePos[id];
    if (!pos) return;
    const col = rC[acct?.risk] || '#888';
    const ng = svg.append('g').attr('class', `replay-node-g-${id}`);

    ng.append('circle').attr('class', `replay-node-${id}`)
      .attr('cx', pos.x).attr('cy', pos.y).attr('r', 18)
      .attr('fill', col).attr('stroke', col)
      .attr('stroke-width', 2).attr('stroke-opacity', 0.4);

    ng.append('text').attr('x', pos.x).attr('y', pos.y)
      .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')
      .attr('font-family', 'DM Mono, monospace').attr('font-size', '8px')
      .attr('fill', 'white').attr('font-weight', '700').text(id);

    const angle = Math.atan2(pos.y - cy, pos.x - cx);
    const lx = pos.x + 32 * Math.cos(angle);
    const ly = pos.y + 32 * Math.sin(angle);
    ng.append('text').attr('x', lx).attr('y', ly)
      .attr('text-anchor', pos.x < cx - 10 ? 'end' : pos.x > cx + 10 ? 'start' : 'middle')
      .attr('font-family', 'DM Sans, sans-serif').attr('font-size', '9px').attr('fill', '#666')
      .text(acct?.name?.split(' ')[0] || id);
  });

  // Update replaySteps reference
  if (typeof replaySteps !== 'undefined') {
    replaySteps.length = 0;
    _expandedReplaySteps.forEach(s => replaySteps.push(s));
  }
  window._activeReplaySteps = _expandedReplaySteps;
};

// Patch applyReplayStep for expanded steps
window.applyReplayStep = function(idx, animate) {
  if (animate === undefined) animate = true;
  const steps = window._activeReplaySteps || _expandedReplaySteps;
  const step = steps[idx];
  if (!step) return;

  document.querySelectorAll('.replay-event-row').forEach((el, i) => {
    el.classList.toggle('highlighted', i === idx);
    if (i === idx) el.scrollIntoView({ block: 'nearest' });
  });

  const numEl = document.getElementById('replayStepNum');
  const lblEl = document.getElementById('replayStepLabel');
  if (numEl) numEl.textContent = (idx + 1) + '/' + steps.length;
  if (lblEl) lblEl.textContent = step.time + ' · ' + step.channel;
  const fill = document.getElementById('replayBarFill');
  if (fill) fill.style.width = ((idx + 1) / steps.length * 100) + '%';

  if (window.replaySvg && step.fromId && step.toId) {
    const edge = d3.select(`.replay-edge-${step.fromId}-${step.toId}`);
    if (!edge.empty()) {
      edge.transition().duration(animate ? 500 : 0)
        .attr('stroke', step.color).attr('stroke-width', 4).attr('stroke-opacity', 0.9);
    }

    d3.select(`.replay-node-${step.fromId}`)
      .transition().duration(animate ? 300 : 0)
      .attr('r', 24).attr('filter', 'url(#replayGlow2)');

    if (animate && window.replayNodePos?.[step.fromId] && window.replayNodePos?.[step.toId]) {
      const s = window.replayNodePos[step.fromId];
      const t = window.replayNodePos[step.toId];
      const p = window.replaySvg.append('text')
        .attr('x', s.x).attr('y', s.y).attr('text-anchor', 'middle')
        .attr('font-family', 'DM Mono, monospace').attr('font-size', '10px')
        .attr('fill', '#F5A623').attr('font-weight', '700').text(step.amount);
      p.transition().duration(900).ease(d3.easeQuadInOut)
        .attr('x', t.x).attr('y', t.y).on('end', () => p.remove());
    }
  }
};

window.renderReplayEvents = function() {
  const container = document.getElementById('replayEventList');
  if (!container) return;
  const steps = window._activeReplaySteps || _expandedReplaySteps;
  const chColor = { NEFT:'#00C48C', RTGS:'#4F9EFF', UPI:'#F5A623', ATM:'#7B5EA7', IMPS:'#FF6B35' };
  container.innerHTML = steps.map((s, i) => `
    <div class="replay-event-row" id="replay-row-${i}" style="display:flex;align-items:center;gap:8px;padding:7px 12px;border-bottom:1px solid #111;cursor:pointer;transition:background 0.2s;"
         onmouseenter="this.style.background='#111'" onmouseleave="this.style.background='transparent'">
      <span class="replay-event-time" style="font-family:'Space Mono',monospace;font-size:10px;color:#555;width:38px;flex-shrink:0;">${s.time}</span>
      <span class="replay-event-arrow" style="flex:1;font-size:11px;color:#888;">${s.from} → ${s.to}</span>
      <span style="padding:2px 7px;border-radius:4px;border:1px solid ${chColor[s.channel]||'#444'};color:${chColor[s.channel]||'#888'};font-size:9px;font-weight:700;">${s.channel}</span>
      <span class="replay-event-amount" style="font-family:'Space Mono',monospace;font-size:11px;color:${s.color};font-weight:700;">${s.amount}</span>
    </div>`).join('');
};

// ─── 3. TRANSACTION GRAPH FILTER FIX ────────────────────────
// The issue: filters don't visually change anything because
// the graph redraws with same data. Fix: proper show/hide of nodes+edges.

window._graphCurrentFilter = 'all';
window._graphCurrentAmount = 0;
window._fullGraphNodeData = null;

// Rebuild graph properly with filter support
window._megaFixFullGraph = function() {
  const container = document.getElementById('graphFullscreen');
  if (!container) return;
  const existing = container.querySelector('svg');
  if (existing) existing.remove();

  const W = container.offsetWidth || window.innerWidth - 70;
  const H = container.offsetHeight || window.innerHeight - 180;
  if (W < 50) { setTimeout(window._megaFixFullGraph, 300); return; }

  const allAcc = typeof accounts !== 'undefined' ? accounts : [];
  const allTxn = typeof transactions !== 'undefined' ? transactions : [];
  window._fullGraphNodeData = allAcc;
  window._fullGraphTxnData = allTxn;

  const svg = d3.select(container).append('svg').attr('width', W).attr('height', H)
    .style('width', '100%').style('height', '100%');
  const g = svg.append('g');
  svg.call(d3.zoom().scaleExtent([0.05, 6]).on('zoom', e => g.attr('transform', e.transform)));
  window._fullGraphSvgEl = svg;
  window._fullGraphGEl = g;

  const defs = svg.append('defs');
  const filt = defs.append('filter').attr('id', 'mgGlow2');
  filt.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'cb');
  const fm = filt.append('feMerge');
  fm.append('feMergeNode').attr('in', 'cb');
  fm.append('feMergeNode').attr('in', 'SourceGraphic');

  // Volume heatmap scale
  const maxVol = Math.max(...allAcc.map(a => a.volumeRaw || 0));
  window._graphHeatScale = d3.scaleSequential(d3.interpolateRdYlGn).domain([maxVol, 0]);

  _rebuildGraphWithFilter();

  // Wire filter buttons
  const btnAll = document.getElementById('graphFilterAll') || document.querySelector('[onclick*="filterAll"], .graph-ctrl-btn:first-of-type');
  const btnFlagged = document.getElementById('graphFilterFlagged') || document.querySelector('[onclick*="filterFlagged"]');
  const btn24h = document.getElementById('graphFilter24h') || document.querySelector('[onclick*="filter24h"]');

  // Re-wire by onclick content detection
  document.querySelectorAll('.graph-ctrl-btn').forEach(btn => {
    const t = btn.textContent.trim();
    if (t === 'All Nodes') btn.onclick = () => applyGraphFilter('all', btn);
    else if (t.includes('Flagged')) btn.onclick = () => applyGraphFilter('flagged', btn);
    else if (t.includes('24')) btn.onclick = () => applyGraphFilter('24h', btn);
    else if (t.includes('Amount')) btn.onclick = () => applyGraphFilter('amount', btn);
    else if (t.includes('Heat')) btn.onclick = () => toggleHeatMap(btn);
    else if (t.includes('GNN')) btn.onclick = () => toggleGNNPredict(btn);
    else if (t.includes('Live')) btn.onclick = () => toggleLiveStream(btn);
  });

  // Layout buttons
  document.querySelectorAll('.graph-ctrl-btn, .layout-btn').forEach(btn => {
    const t = btn.textContent.trim();
    if (t === 'Force') btn.onclick = () => applyGraphLayout('force', btn);
    else if (t === 'Circular') btn.onclick = () => applyGraphLayout('circular', btn);
    else if (t === 'Hierarchical') btn.onclick = () => applyGraphLayout('hierarchical', btn);
    else if (t === 'Branch Map') btn.onclick = () => applyGraphLayout('branch', btn);
  });

  if (typeof registerGraphState === 'function') {
    registerGraphState(null, allAcc, allTxn, null, null);
  }
};

function _rebuildGraphWithFilter() {
  const g = window._fullGraphGEl;
  if (!g) return;
  g.selectAll('*').remove();

  const svg = window._fullGraphSvgEl;
  const W = parseInt(svg.attr('width')) || 900;
  const H = parseInt(svg.attr('height')) || 600;

  const allAcc = window._fullGraphNodeData || (typeof accounts !== 'undefined' ? accounts : []);
  const allTxn = window._fullGraphTxnData || (typeof transactions !== 'undefined' ? transactions : []);
  const filter = window._graphCurrentFilter || 'all';
  const minAmt = window._graphCurrentAmount || 0;
  const heatOn = window._graphHeatOn || false;
  const gnnOn  = window._graphGNNOn  || false;

  // Filter nodes
  let visibleNodes = allAcc;
  if (filter === 'flagged') visibleNodes = allAcc.filter(a => a.risk === 'fraud' || a.risk === 'suspicious');
  else if (filter === '24h') visibleNodes = allAcc.filter(a => a.risk === 'fraud' || a.risk === 'suspicious' || (a.riskScore && a.riskScore > 50));
  else if (filter === 'amount') visibleNodes = allAcc.filter(a => (a.volumeRaw || 0) >= minAmt);

  const nodeSet = new Set(visibleNodes.map(n => n.id));
  let visibleLinks = allTxn.filter(t => nodeSet.has(t.source) && nodeSet.has(t.target));
  if (filter === '24h') visibleLinks = visibleLinks.filter(t => (t.amount || 0) >= 100000);
  if (minAmt > 0) visibleLinks = visibleLinks.filter(t => (t.amount || 0) >= minAmt);

  const nodes = visibleNodes.map(a => ({ ...a }));
  const links = visibleLinks.map(t => ({ source: t.source, target: t.target, amount: t.amount || 100000, channel: t.channel }));

  const rC = { fraud:'#FF4757', suspicious:'#F5A623', dormant:'#7B5EA7', clean:'#00C48C' };
  const getColor = d => heatOn && window._graphHeatScale ? window._graphHeatScale(d.volumeRaw || 0) : (rC[d.risk] || '#555');

  // Force simulation with better spacing
  const sim = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(filter === 'flagged' ? 100 : 70))
    .force('charge', d3.forceManyBody().strength(filter === 'flagged' ? -500 : -150))
    .force('center', d3.forceCenter(W / 2, H / 2))
    .force('collision', d3.forceCollide(filter === 'flagged' ? 24 : 16))
    .force('x', d3.forceX(W / 2).strength(0.04))
    .force('y', d3.forceY(H / 2).strength(0.04));

  const link = g.append('g').selectAll('line').data(links).enter().append('line')
    .attr('stroke', d => {
      const s = nodes.find(n => n.id === (d.source.id || d.source));
      const t = nodes.find(n => n.id === (d.target.id || d.target));
      return (s?.risk === 'fraud' || t?.risk === 'fraud') ? 'rgba(255,71,87,0.45)' : 'rgba(79,158,255,0.15)';
    })
    .attr('stroke-width', d => Math.max(1, Math.min((d.amount || 50000) / 150000, 4)));

  // GNN predictive edges
  if (gnnOn) {
    const fraudNodes = nodes.filter(n => n.risk === 'fraud').slice(0, 5);
    const cleanTargets = nodes.filter(n => n.risk === 'clean' || n.risk === 'suspicious').slice(0, 8);
    const predLinks = fraudNodes.flatMap((fn, fi) => {
      return cleanTargets.slice(fi, fi + 2).map(tn => ({
        source: fn, target: tn,
        confidence: 0.4 + Math.random() * 0.5,
      }));
    });
    g.append('g').selectAll('line').data(predLinks).enter().append('line')
      .attr('x1', d => d.source.x || W / 2).attr('y1', d => d.source.y || H / 2)
      .attr('x2', d => d.target.x || W / 2).attr('y2', d => d.target.y || H / 2)
      .attr('stroke', '#4F9EFF').attr('stroke-width', 1.5)
      .attr('stroke-dasharray', '6,4').attr('stroke-opacity', d => d.confidence * 0.7)
      .attr('class', 'gnn-pred-edge');
  }

  const ng = g.append('g').selectAll('g').data(nodes).enter().append('g')
    .style('cursor', 'pointer')
    .call(d3.drag()
      .on('start', (e, d) => { if (!e.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
      .on('drag',  (e, d) => { d.fx = e.x; d.fy = e.y; })
      .on('end',   (e, d) => { if (!e.active) sim.alphaTarget(0); d.fx = null; d.fy = null; }));

  ng.filter(d => d.risk === 'fraud').append('circle').attr('r', 22)
    .attr('fill', 'none').attr('stroke', '#FF4757').attr('stroke-width', 1.5)
    .attr('stroke-opacity', 0.25).attr('class', 'glow-ring-pulse');

  ng.append('circle')
    .attr('r', d => ({ fraud:13, suspicious:10, dormant:6, clean:8 })[d.risk] || 8)
    .attr('fill', d => getColor(d))
    .attr('stroke', d => getColor(d))
    .attr('stroke-width', 2).attr('stroke-opacity', 0.4)
    .attr('filter', d => d.risk === 'fraud' ? 'url(#mgGlow2)' : '')
    .attr('class', d => d.risk === 'fraud' ? 'node-pulse' : '');

  // Show labels only for flagged filter or small graphs
  if (filter === 'flagged' || nodes.length < 50) {
    ng.append('text').text(d => d.id)
      .attr('font-family', 'DM Mono, monospace').attr('font-size', '8px')
      .attr('fill', '#AAA').attr('text-anchor', 'middle')
      .attr('dy', d => ({ fraud:20, suspicious:16, dormant:12, clean:14 })[d.risk] || 14);
  }

  ng.on('click', (e, d) => { e.stopPropagation(); if (typeof openNodePanel === 'function') openNodePanel(d); });
  svg.on('click', () => { if (typeof closeNodePanel === 'function') closeNodePanel(); });

  let tickCount = 0;
  sim.on('tick', () => {
    tickCount++;
    link.attr('x1', d => d.source.x).attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
    ng.attr('transform', d => `translate(${Math.max(18, Math.min(W - 18, d.x))},${Math.max(18, Math.min(H - 18, d.y))})`);

    // After settling, update GNN edges
    if (gnnOn && tickCount === 80) {
      g.selectAll('.gnn-pred-edge').each(function(d) {
        d3.select(this)
          .attr('x1', d.source.x).attr('y1', d.source.y)
          .attr('x2', d.target.x).attr('y2', d.target.y);
      });
    }
  });

  sim.alphaDecay(0.03);
  window._fullGraphSim = sim;

  // Add status label
  if (filter !== 'all') {
    svg.selectAll('.filter-label').remove();
    svg.append('text').attr('class', 'filter-label')
      .attr('x', 12).attr('y', H - 12)
      .attr('font-family', 'Space Mono, monospace').attr('font-size', '10px').attr('fill', '#E8660A')
      .text(`Filter: ${filter.toUpperCase()} · ${nodes.length} nodes · ${links.length} edges`);
  }
}

// Filter button handler
window.applyGraphFilter = function(filterType, btn) {
  window._graphCurrentFilter = filterType;
  if (filterType === 'amount') window._graphCurrentAmount = 150000;
  else window._graphCurrentAmount = 0;

  // Highlight active button
  document.querySelectorAll('.graph-ctrl-btn').forEach(b => {
    const t = b.textContent.trim();
    if (['All Nodes','Flagged Paths','Amount > 1L','Last 24h'].some(label => t.includes(label.replace('1L','')))) {
      b.style.background = 'transparent';
      b.style.color = '#888';
      b.style.borderColor = '#333';
    }
  });
  if (btn) {
    btn.style.background = 'rgba(232,102,10,0.15)';
    btn.style.color = '#E8660A';
    btn.style.borderColor = '#E8660A';
  }

  _rebuildGraphWithFilter();
};

window.toggleHeatMap = function(btn) {
  window._graphHeatOn = !window._graphHeatOn;
  if (btn) {
    btn.textContent = 'Heat Map ' + (window._graphHeatOn ? 'ON' : 'OFF');
    btn.style.borderColor = window._graphHeatOn ? '#F5A623' : '#555';
    btn.style.color = window._graphHeatOn ? '#F5A623' : '#888';
  }
  _rebuildGraphWithFilter();
};

window.toggleGNNPredict = function(btn) {
  window._graphGNNOn = !window._graphGNNOn;
  if (btn) {
    btn.textContent = 'GNN Predict: ' + (window._graphGNNOn ? 'ON' : 'OFF');
    btn.style.borderColor = window._graphGNNOn ? '#4F9EFF' : '#555';
    btn.style.color = window._graphGNNOn ? '#4F9EFF' : '#888';
    const legend = document.getElementById('predictiveLegend');
    if (legend) legend.style.display = window._graphGNNOn ? 'block' : 'none';
  }
  _rebuildGraphWithFilter();
};

window.applyGraphLayout = function(layout, btn) {
  document.querySelectorAll('.graph-ctrl-btn').forEach(b => {
    if (['Force','Hierarchical','Circular','Branch Map'].includes(b.textContent.trim())) {
      b.style.background = 'transparent'; b.style.borderColor = '#444'; b.style.color = '#888';
    }
  });
  if (btn) { btn.style.background = 'rgba(232,102,10,0.2)'; btn.style.borderColor = '#E8660A'; btn.style.color = '#E8660A'; }

  const g = window._fullGraphGEl;
  if (!g) return;
  const sim = window._fullGraphSim;
  const svg = window._fullGraphSvgEl;
  const W = parseInt(svg?.attr('width')) || 900;
  const H = parseInt(svg?.attr('height')) || 600;
  const allAcc = window._fullGraphNodeData || [];

  if (layout === 'circular') {
    if (sim) sim.stop();
    const ng = g.select('g:last-of-type').selectAll('g');
    const visible = ng.data();
    visible.forEach((d, i) => {
      const angle = (i / visible.length) * 2 * Math.PI;
      const r = Math.min(W, H) * 0.38;
      d.x = W / 2 + r * Math.cos(angle);
      d.y = H / 2 + r * Math.sin(angle);
      d.fx = d.x; d.fy = d.y;
    });
    g.selectAll('g').attr('transform', d => `translate(${d.x || W/2},${d.y || H/2})`);
    g.selectAll('line')
      .attr('x1', d => d.source.x || W/2).attr('y1', d => d.source.y || H/2)
      .attr('x2', d => d.target.x || W/2).attr('y2', d => d.target.y || H/2);
  } else if (layout === 'hierarchical') {
    if (sim) sim.stop();
    const fraudNodes = allAcc.filter(a => a.risk === 'fraud');
    const suspNodes  = allAcc.filter(a => a.risk === 'suspicious');
    const cleanNodes = allAcc.filter(a => a.risk === 'clean');
    const dormNodes  = allAcc.filter(a => a.risk === 'dormant');

    const layers = [fraudNodes, suspNodes, cleanNodes, dormNodes];
    layers.forEach((layer, li) => {
      layer.forEach((acc, ai) => {
        acc.fx = (ai + 0.5) / Math.max(layer.length, 1) * W;
        acc.fy = (li + 0.5) * H / 4;
      });
    });
    if (sim) { sim.alpha(0.3).restart(); }
  } else {
    // Force — release fixed positions and restart
    g.selectAll('g').each(d => { if (d) { d.fx = null; d.fy = null; } });
    if (sim) sim.alpha(0.8).restart();
  }
};

window.toggleLiveStream = function(btn) {
  window._liveStreamOn = !window._liveStreamOn;
  if (btn) {
    btn.textContent = window._liveStreamOn ? '⏸ Live Stream' : 'Live Stream';
    btn.style.borderColor = window._liveStreamOn ? '#00C48C' : '#444';
    btn.style.color = window._liveStreamOn ? '#00C48C' : '#888';
  }
  if (window._liveStreamOn) {
    window._liveStreamInterval = setInterval(() => {
      const allAcc = window._fullGraphNodeData || [];
      if (!allAcc.length) return;
      const src = allAcc[Math.floor(Math.random() * allAcc.length)];
      const tgt = allAcc[Math.floor(Math.random() * allAcc.length)];
      if (src.id === tgt.id) return;
      // Visual flash on graph
      window._fullGraphGEl?.selectAll('circle')
        .filter(d => d && d.id === src.id)
        .transition().duration(200).attr('r', d => ({ fraud:18, suspicious:14, clean:12, dormant:9 })[d.risk] || 12)
        .transition().duration(300).attr('r', d => ({ fraud:13, suspicious:10, clean:8, dormant:6 })[d.risk] || 8);
    }, 1500);
  } else {
    clearInterval(window._liveStreamInterval);
  }
};

// ─── Wire everything on DOMContentLoaded ────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // Expand fraud rings data
    if (typeof fraudRings !== 'undefined') {
      fraudRings.length = 0;
      window._expandedFraudRings.forEach(r => fraudRings.push(r));
    }

    // Expand replay steps
    if (typeof replaySteps !== 'undefined') {
      replaySteps.length = 0;
      _expandedReplaySteps.forEach(s => replaySteps.push(s));
    }
    window._activeReplaySteps = _expandedReplaySteps;

    // Patch switchView
    const prevSW = window.switchView;
    window.switchView = function(viewId) {
      if (typeof prevSW === 'function') prevSW(viewId);

      if (viewId === 'graph') {
        setTimeout(() => {
          const c = document.getElementById('graphFullscreen');
          if (c) { const sv = c.querySelector('svg'); if (sv) sv.remove(); }
          window._megaFixFullGraph();
        }, 150);
      }
      if (viewId === 'rings') {
        setTimeout(() => {
          injectRingTabs();
          window.renderFraudRingAccounts(0);
          window.initFraudRingGraph(0);
        }, 200);
      }
      if (viewId === 'replay') {
        setTimeout(() => {
          window.initReplayGraph();
          window.renderReplayEvents();
        }, 200);
      }
    };

    // Auto-init current active views
    if (document.querySelector('#view-rings.active, #view-rings[style*="block"]')) {
      injectRingTabs();
      window.renderFraudRingAccounts(0);
      window.initFraudRingGraph(0);
    }
  }, 400);
});
