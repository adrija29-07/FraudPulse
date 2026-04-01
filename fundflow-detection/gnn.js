// ===================================================
// GNN.JS — GNN AI Overlay + Predictive Fraud Edges
// Features:
//   1. Rotating AI findings (confidence + pattern) every 6s
//   2. Predictive ghost edges (next 2-3 hops)
//   3. 4 graph layout modes
//   4. Live system metrics animation
// ===================================================

// ---- GNN FINDING DATA ----
const gnnFindings = [
  { conf: 94, pattern: 'Round-Trip', text: 'HIGH CONFIDENCE: Circular fund flow detected across A001→A002→A003→A004→A001. Total amount ₹18,45,000 cycled in 8h 40m. Classic layering pattern consistent with PMLA Section 3 money laundering.', severity: 'critical' },
  { conf: 91, pattern: 'Structuring', text: 'STRUCTURING ALERT: Two ATM withdrawals of ₹49,900 and ₹49,800 detected within 45 minutes — both deliberately below the ₹50,000 reporting threshold. Pattern matches smurfing behaviour.', severity: 'critical' },
  { conf: 88, pattern: 'Dormant Activation', text: 'DORMANT ACCOUNT: A/C 7823 was inactive for 18 months before receiving ₹9,80,000 inflow on 14 Mar 2026. Sudden activation of dormant accounts for high-value transfers is a key AML red flag.', severity: 'high' },
  { conf: 85, pattern: 'Mule Network', text: 'MULE NETWORK: A016 (Mule Account X1) shows ₹45,00,000 flowing through a savings account declared at ₹1,80,000 income — 25× income ratio. Connected to Ring-002 mule network of 4 accounts.', severity: 'high' },
  { conf: 79, pattern: 'Shell Entity', text: 'SHELL ENTITY: Shell Corp A (A002) registered 3 months ago, no declared business purpose, no employees on record. Receiving ₹4,95,000 NEFT and immediately forwarding — classic layering intermediary.', severity: 'high' },
  { conf: 76, pattern: 'Velocity', text: 'VELOCITY ANOMALY: Kumar Trading (A007) executed 32 transactions in 2 hours totaling ₹14,50,000. Transaction velocity 8× peer average. Automated smurfing tool signature detected.', severity: 'medium' },
  { conf: 72, pattern: 'Profile Mismatch', text: 'PROFILE MISMATCH: Partner Entity B declared annual income ₹15,00,000 but actual monthly inflow is ₹8,40,000 — exceeding declared annual income in a single month. Income-to-flow ratio: 6.72×.', severity: 'medium' },
  { conf: 68, pattern: 'Cross-Border', text: 'CROSS-BORDER SPIKE: Deepak Exports (A017) shows 3× baseline increase in cross-border transfers this month. ₹42,00,000 moved through SWIFT channels without corresponding import documentation.', severity: 'medium' },
];

let gnnCurrentIndex = 0;
let gnnTimer = null;
let gnnProgressTimer = null;

function startGNNOverlay() {
  showGNNFinding(gnnCurrentIndex);
  gnnTimer = setInterval(() => {
    gnnCurrentIndex = (gnnCurrentIndex + 1) % gnnFindings.length;
    const findingEl = document.getElementById('gnnFinding');
    if (findingEl) findingEl.classList.add('updating');
    setTimeout(() => {
      showGNNFinding(gnnCurrentIndex);
      if (findingEl) findingEl.classList.remove('updating');
    }, 400);
  }, 6000);
  startGNNProgress();
}

function showGNNFinding(idx) {
  const f = gnnFindings[idx];
  const confEl = document.getElementById('gnnConfVal');
  const patternEl = document.getElementById('gnnPatternVal');
  const findingEl = document.getElementById('gnnFinding');
  if (confEl) confEl.textContent = f.conf + '%';
  if (patternEl) patternEl.textContent = f.pattern;
  if (findingEl) findingEl.textContent = f.text;
}

function startGNNProgress() {
  const fill = document.getElementById('gnnProgressFill');
  if (!fill) return;
  fill.style.transition = 'none';
  fill.style.width = '0%';
  setTimeout(() => {
    fill.style.transition = 'width 6s linear';
    fill.style.width = '100%';
  }, 50);
  setInterval(() => {
    fill.style.transition = 'none';
    fill.style.width = '0%';
    setTimeout(() => {
      fill.style.transition = 'width 6s linear';
      fill.style.width = '100%';
    }, 50);
  }, 6000);
}

// ---- LIVE SYSTEM METRICS ----
function animateLiveMetrics() {
  animateMetricCounter('lmTxn', 14729, '', '', 2000);
  animateVolume();
  animateMetricCounter('lmFlag', 47, '', '', 1800);
  animateAML();
}

function animateMetricCounter(id, target, prefix, suffix, duration) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + Math.round(target * eased).toLocaleString('en-IN') + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function animateVolume() {
  const el = document.getElementById('lmVol');
  if (!el) return;
  const target = 284;
  const start = performance.now();
  const duration = 2200;
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const val = Math.round(target * (1 - Math.pow(1 - p, 3)));
    el.textContent = '₹' + val + 'Cr';
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function animateAML() {
  const el = document.getElementById('lmAml');
  if (!el) return;
  const target = 87;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / 2000, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + '%';
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ---- PREDICTIVE GHOST EDGES (GNN Next-Hop) ----
let predictiveMode = false;

// Predicted next hops: { fromId, toId, confidence, label }
const predictedHops = [
  { fromId: 'A001', toId: 'A005', confidence: 0.78, label: '78%' },
  { fromId: 'A002', toId: 'A008', confidence: 0.65, label: '65%' },
  { fromId: 'A016', toId: 'A003', confidence: 0.82, label: '82%' },
  { fromId: 'A007', toId: 'A013', confidence: 0.71, label: '71%' },
  { fromId: 'A012', toId: 'A017', confidence: 0.59, label: '59%' },
  { fromId: 'A010', toId: 'A009', confidence: 0.68, label: '68%' },
];

function togglePredictive() {
  predictiveMode = !predictiveMode;
  const btn = document.getElementById('predictiveToggleBtn');
  const legend = document.getElementById('predictiveLegend');
  if (btn) {
    btn.textContent = predictiveMode ? 'GNN Predict: ON' : 'GNN Predict: OFF';
    btn.style.background = predictiveMode ? 'rgba(79,158,255,0.15)' : '';
  }
  if (legend) legend.style.display = predictiveMode ? 'block' : 'none';

  const container = document.getElementById('graphFullscreen');
  if (!container) return;
  const svg = d3.select(container).select('svg');

  if (!predictiveMode) {
    svg.selectAll('.ghost-edge-group').remove();
    return;
  }

  // Need node positions from simulation — find them
  const nodeData = {};
  svg.selectAll('circle').each(function(d) {
    if (d && d.id) nodeData[d.id] = { x: d.x, y: d.y };
  });

  predictedHops.forEach((hop, i) => {
    const s = nodeData[hop.fromId];
    const t = nodeData[hop.toId];
    if (!s || !t) return;

    const g = svg.append('g').attr('class', 'ghost-edge-group');

    // Dashed ghost line
    g.append('line')
      .attr('class', 'ghost-edge')
      .attr('x1', s.x).attr('y1', s.y)
      .attr('x2', t.x).attr('y2', t.y)
      .attr('stroke', '#4F9EFF')
      .attr('stroke-width', 2.5)
      .attr('stroke-opacity', hop.confidence * 0.7)
      .attr('stroke-dasharray', '6,4');

    // Confidence label at midpoint
    const mx = (s.x + t.x) / 2;
    const my = (s.y + t.y) / 2;
    g.append('text')
      .attr('class', 'ghost-label')
      .attr('x', mx).attr('y', my - 6)
      .attr('text-anchor', 'middle')
      .attr('fill', '#4F9EFF')
      .attr('font-size', '9px')
      .attr('opacity', hop.confidence)
      .text(hop.label);
  });
}

function showNodePredictions(nodeId) {
  const hops = predictedHops.filter(h => h.fromId === nodeId);
  const section = document.getElementById('nodePredictionSection');
  const container = document.getElementById('nodePredictions');
  if (!section || !container) return;

  if (hops.length === 0) { section.style.display = 'none'; return; }
  section.style.display = 'block';

  // Get target account names
  const acctData = typeof accounts !== 'undefined' ? accounts : [];
  container.innerHTML = hops.map(hop => {
    const target = acctData.find(a => a.id === hop.toId);
    return `<div class="node-detail-row">
      <span class="node-detail-label" style="color:#4F9EFF;">→ ${target ? target.name : hop.toId}</span>
      <span class="node-detail-value" style="color:#4F9EFF;font-family:monospace;">${hop.label} conf</span>
    </div>`;
  }).join('');
}

// ---- GRAPH LAYOUT MODES ----
let currentLayout = 'force';
let graphSimulation = null;
let graphNodeData = null;
let graphLinkData = null;
let graphNodeGroups = null;
let graphLinks = null;

function switchGraphLayout(mode) {
  currentLayout = mode;
  document.querySelectorAll('.layout-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.layout === mode);
  });

  const container = document.getElementById('graphFullscreen');
  if (!container || !container.querySelector('svg')) return;

  const W = container.clientWidth;
  const H = container.clientHeight;
  const cx = W / 2, cy = H / 2;

  if (graphSimulation) {
    graphSimulation.stop();
    graphSimulation.alpha(0);
  }

  if (!graphNodeData) return;

  const acctData = typeof accounts !== 'undefined' ? accounts : [];

  if (mode === 'force') {
    // Reset to force layout
    graphNodeData.forEach(d => { d.fx = null; d.fy = null; });
    if (graphSimulation) {
      graphSimulation.alpha(0.6).restart();
    }
  } else if (mode === 'circular') {
    const n = graphNodeData.length;
    const r = Math.min(W, H) * 0.35;
    graphNodeData.forEach((d, i) => {
      const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
      d.fx = cx + r * Math.cos(angle);
      d.fy = cy + r * Math.sin(angle);
    });
    if (graphSimulation) graphSimulation.alpha(0.3).restart();
  } else if (mode === 'hierarchical') {
    // Tier by risk: fraud top, suspicious middle, clean/dormant bottom
    const fraudNodes = graphNodeData.filter(d => d.risk === 'fraud');
    const suspNodes = graphNodeData.filter(d => d.risk === 'suspicious');
    const otherNodes = graphNodeData.filter(d => d.risk !== 'fraud' && d.risk !== 'suspicious');

    const placeRow = (nodes, y) => {
      const spacing = W / (nodes.length + 1);
      nodes.forEach((d, i) => { d.fx = spacing * (i + 1); d.fy = y; });
    };
    placeRow(fraudNodes, H * 0.2);
    placeRow(suspNodes, H * 0.5);
    placeRow(otherNodes, H * 0.8);
    if (graphSimulation) graphSimulation.alpha(0.3).restart();
  } else if (mode === 'geographic') {
    // Simulate branch geographic scatter
    const branchMap = {
      'Corporate': { x: 0.2, y: 0.3 },
      'Savings': { x: 0.6, y: 0.5 },
      'Current': { x: 0.4, y: 0.7 },
    };
    graphNodeData.forEach((d, i) => {
      const bm = branchMap[d.type] || { x: 0.5, y: 0.5 };
      const jitter = (Math.random() - 0.5) * 0.15;
      d.fx = (bm.x + jitter) * W;
      d.fy = (bm.y + jitter) * H;
    });
    if (graphSimulation) graphSimulation.alpha(0.3).restart();
  }
}

// Called from app.js after graph is built to register sim + nodes
function registerGraphState(sim, nodes, links, nodeGroups, linkSel) {
  graphSimulation = sim;
  graphNodeData = nodes;
  graphLinkData = links;
  graphNodeGroups = nodeGroups;
  graphLinks = linkSel;
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(startGNNOverlay, 500);
  setTimeout(animateLiveMetrics, 300);
});