// =============================================================
// ENHANCEMENTS.JS — All major feature additions & fixes
// =============================================================

// ─── FIX 1: Accounts Table ────────────────────────────────────
function renderAccountsTable(data) {
  const tbody = document.getElementById('accountsTableBody');
  if (!tbody) return;
  const d = data || (typeof accounts !== 'undefined' ? accounts : []);
  const riskColors = { fraud:'#FF4757', suspicious:'#F5A623', dormant:'#7B5EA7', clean:'#00C48C' };
  tbody.innerHTML = d.map(a => `
    <tr style="cursor:pointer;" onclick="openAccountDetail('${a.id}')">
      <td>
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="width:32px;height:32px;border-radius:8px;background:${riskColors[a.risk]}22;border:1px solid ${riskColors[a.risk]};display:flex;align-items:center;justify-content:center;font-family:'Space Mono',monospace;font-size:9px;font-weight:700;color:${riskColors[a.risk]};">${a.riskScore}</div>
          <div>
            <div style="font-weight:600;color:#F0F0F0;font-size:13px;">${a.id}</div>
            <div style="font-size:10px;color:#666;">${a.name}</div>
          </div>
        </div>
      </td>
      <td style="font-size:12px;color:#888;">${a.type}</td>
      <td><span class="badge badge-${a.risk}" style="font-size:10px;">${a.risk}</span></td>
      <td><span style="font-family:'Space Mono',monospace;font-size:13px;font-weight:700;color:${riskColors[a.risk]};">${a.riskScore}</span><span style="color:#444;font-size:10px;">/100</span></td>
      <td style="font-family:'Space Mono',monospace;font-size:11px;color:#00C48C;">${a.inflow}</td>
      <td style="font-family:'Space Mono',monospace;font-size:11px;color:#FF6B6B;">${a.outflow}</td>
      <td style="font-size:12px;color:#888;">${a.connections}</td>
      <td>
        <button onclick="event.stopPropagation();downloadAccountPDF('${a.id}')" style="padding:4px 10px;border-radius:6px;border:1px solid #E8660A;background:transparent;color:#E8660A;font-size:10px;cursor:pointer;font-family:'DM Sans',sans-serif;margin-right:4px;">PDF</button>
        <button onclick="event.stopPropagation();openAccountDetail('${a.id}')" style="padding:4px 10px;border-radius:6px;border:1px solid #2A2A2A;background:transparent;color:#888;font-size:10px;cursor:pointer;font-family:'DM Sans',sans-serif;">View</button>
      </td>
    </tr>`).join('');
}

function filterAccounts(q) {
  const data = typeof accounts !== 'undefined' ? accounts : [];
  const filtered = q ? data.filter(a =>
    a.id.toLowerCase().includes(q.toLowerCase()) ||
    a.name.toLowerCase().includes(q.toLowerCase()) ||
    a.risk.toLowerCase().includes(q.toLowerCase()) ||
    a.type.toLowerCase().includes(q.toLowerCase())
  ) : data;
  renderAccountsTable(filtered);
}

// ─── Per-Account PDF Download ─────────────────────────────────
window.downloadAccountPDF = function(accId) {
  const data = typeof accounts !== 'undefined' ? accounts : [];
  const txns = typeof transactions !== 'undefined' ? transactions : [];
  const a = data.find(x => x.id === accId);
  if (!a) return;
  const rC = { fraud:'#FF4757', suspicious:'#F5A623', dormant:'#7B5EA7', clean:'#00C48C' };
  const accTxns = txns.filter(t => t.source === accId || t.target === accId);
  const totalIn = accTxns.filter(t => t.target === accId).reduce((s,t) => s + t.amount, 0);
  const totalOut = accTxns.filter(t => t.source === accId).reduce((s,t) => s + t.amount, 0);
  const riskLabel = { fraud:'FRAUD — CONFIRMED SUSPICIOUS', suspicious:'SUSPICIOUS — UNDER INVESTIGATION', dormant:'DORMANT — MONITOR', clean:'CLEAN — LOW RISK' }[a.risk] || a.risk.toUpperCase();
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Account Report ${a.id}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',Arial,sans-serif;font-size:13px;line-height:1.7;color:#1A1A2E;padding:40px 48px;background:white}
.header{border-bottom:3px solid ${rC[a.risk]};padding-bottom:14px;margin-bottom:20px}
.header h1{font-size:20px;font-weight:700;color:${rC[a.risk]}}
.header p{color:#888;font-size:11px;margin-top:4px}
.badge{display:inline-block;padding:4px 12px;border-radius:20px;border:1px solid ${rC[a.risk]};color:${rC[a.risk]};font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:14px;}
.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px}
.kpi{background:#F7F5FF;border-radius:8px;padding:12px 14px}
.kpi label{display:block;font-size:9px;text-transform:uppercase;letter-spacing:1px;color:#888;margin-bottom:4px}
.kpi strong{font-family:'Space Mono',monospace;font-size:14px;color:#1A1A2E}
table{width:100%;border-collapse:collapse;font-size:11px}
th{text-align:left;padding:6px 8px;border-bottom:2px solid #eee;font-size:9px;text-transform:uppercase;letter-spacing:1px;color:#888;font-weight:600}
td{padding:6px 8px;border-bottom:1px solid #f0f0f0}
.footer{margin-top:32px;padding-top:10px;border-top:1px solid #eee;font-size:10px;color:#aaa;text-align:center}
.flag{padding:2px 8px;border-radius:4px;font-size:10px;font-weight:600;background:${rC[a.risk]}15;color:${rC[a.risk]};margin-right:6px}
</style></head><body>
<div class="header">
  <h1>FundFlow — Account Investigation Report</h1>
  <p>FIU-IND Reference · Generated: ${new Date().toLocaleString('en-IN')} · Case FD-2026-00842</p>
</div>
<h2 style="font-size:22px;font-weight:800;margin-bottom:6px;">${a.id} — ${a.name}</h2>
<span class="badge">${riskLabel}</span>
<div class="kpi-grid">
  <div class="kpi"><label>Risk Score</label><strong style="color:${rC[a.risk]}">${a.riskScore}/100</strong></div>
  <div class="kpi"><label>Total Inflow (30d)</label><strong>₹${totalIn.toLocaleString('en-IN')}</strong></div>
  <div class="kpi"><label>Total Outflow (30d)</label><strong>₹${totalOut.toLocaleString('en-IN')}</strong></div>
  <div class="kpi"><label>Counterparties</label><strong>${a.connections}</strong></div>
</div>
<table style="margin-bottom:8px;">
  <tr><td style="color:#888;width:160px">Account Type</td><td><strong>${a.type}</strong></td></tr>
  <tr><td style="color:#888">Declared Income</td><td><strong>${a.income}</strong></td></tr>
  <tr><td style="color:#888">Risk Classification</td><td><strong style="color:${rC[a.risk]}">${a.risk.toUpperCase()}</strong></td></tr>
  <tr><td style="color:#888">Inflow (30-day)</td><td>${a.inflow}</td></tr>
  <tr><td style="color:#888">Outflow (30-day)</td><td>${a.outflow}</td></tr>
</table>
<h3 style="margin:18px 0 8px;font-size:13px;color:#1A1A2E">Transaction Records</h3>
<table>
  <thead><tr><th>Direction</th><th>Counterparty</th><th>Amount</th><th>Channel</th><th>Time</th></tr></thead>
  <tbody>
    ${accTxns.slice(0,15).map(t => {
      const dir = t.source === accId ? 'OUT' : 'IN';
      const other = t.source === accId ? t.target : t.source;
      return `<tr><td><span class="flag">${dir}</span></td><td>${other}</td><td style="font-family:monospace">₹${t.amount.toLocaleString('en-IN')}</td><td>${t.channel}</td><td style="font-family:monospace">${t.time}</td></tr>`;
    }).join('')}
    ${accTxns.length === 0 ? '<tr><td colspan="5" style="color:#aaa;text-align:center;padding:16px">No transactions recorded</td></tr>' : ''}
  </tbody>
</table>
${a.risk !== 'clean' ? `<div style="margin-top:18px;padding:14px;background:${rC[a.risk]}08;border:1px solid ${rC[a.risk]}30;border-radius:8px;">
  <h4 style="color:${rC[a.risk]};font-size:11px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">⚠ Risk Assessment</h4>
  <p>${a.risk === 'fraud' ? `This account exhibits confirmed fraud indicators. Immediate STR filing with FIU-IND recommended under PMLA 2002 Section 12. Account freeze order advised pending full investigation.` : a.risk === 'suspicious' ? `This account shows suspicious transaction patterns requiring further investigation. Monitor for circular flows, structuring, and counterparty risks.` : `This account has been dormant. Sudden activation with significant volumes should be investigated.`}</p>
</div>` : ''}
<div class="footer">FundFlow AI Engine v1.0 · IDEA 2.0 Hackathon · Analyst review required before any action</div>
</body></html>`;

  const pw = window.open('', '_blank', 'width=960,height=700');
  if (!pw) { alert('Please allow popups to download PDF'); return; }
  pw.document.write(html);
  pw.document.close();
  setTimeout(() => { pw.focus(); pw.print(); }, 600);
};

// ─── FIU Reports: All-Accounts Panel ─────────────────────────
function renderAllAccountReports() {
  const container = document.getElementById('allAccountReportsList');
  if (!container) return;
  const data = typeof accounts !== 'undefined' ? accounts : [];
  const riskColors = { fraud:'#FF4757', suspicious:'#F5A623', dormant:'#7B5EA7', clean:'#00C48C' };
  const sorted = [...data].sort((a,b) => b.riskScore - a.riskScore);
  container.innerHTML = sorted.map(a => `
    <div style="display:flex;align-items:center;gap:12px;padding:10px 16px;border-bottom:1px solid #1A1A2A;hover-background:#111;">
      <div style="width:38px;height:38px;border-radius:9px;background:${riskColors[a.risk]}15;border:1px solid ${riskColors[a.risk]};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="font-family:'Space Mono',monospace;font-size:11px;font-weight:700;color:${riskColors[a.risk]};">${a.riskScore}</span>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="font-family:'Space Mono',monospace;font-size:12px;font-weight:700;color:#F0F0F0;">${a.id}</span>
          <span style="font-size:9px;color:${riskColors[a.risk]};text-transform:uppercase;font-weight:700;">${a.risk}</span>
        </div>
        <div style="font-size:11px;color:#555;">${a.name} · ${a.type} · ${a.inflow} in</div>
      </div>
      <button onclick="downloadAccountPDF('${a.id}')" style="padding:5px 12px;border-radius:6px;border:1px solid ${riskColors[a.risk]};background:transparent;color:${riskColors[a.risk]};font-size:10px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap;">
        ↓ PDF Report
      </button>
    </div>`).join('');
}

// ─── FIX 2: Accounts view init on navigation ─────────────────
// Note: main switchView override is at the bottom of this file (DOMContentLoaded)

// ─── 10 Money Flow Scenarios ─────────────────────────────────
const allFlowScenarios = [
  {
    id: 0,
    title: 'Round-Trip Alpha — Case FD-2026-00842',
    subtitle: 'Classic 4-account circular laundering ring',
    accounts: ['A001','A002','A003','A004'],
    caseId: 'FD-2026-00842', riskScore: 84, totalAmount: '₹18,45,000',
    steps: [
      { from:'A001', to:'A002', label:'Rajesh Mehta → Shell Corp A', amount:'₹4,95,000', time:'09:15', channel:'NEFT', color:'#FF4757' },
      { from:'A002', to:'A003', label:'Shell Corp A → Dormant 7823', amount:'₹4,90,000', time:'10:42', channel:'RTGS', color:'#FF6B35' },
      { from:'A003', to:'A004', label:'Dormant 7823 → Partner B',    amount:'₹4,85,000', time:'14:08', channel:'NEFT', color:'#F5A623' },
      { from:'A004', to:'A001', label:'Partner B → Rajesh Mehta',    amount:'₹4,80,000', time:'17:55', channel:'UPI',  color:'#FF4757' },
    ]
  },
  {
    id: 1,
    title: 'Mule Network Beta — RING-002',
    subtitle: '4-account mule network layering',
    accounts: ['A007','A010','A012','A016'],
    caseId: 'FD-2026-00843', riskScore: 88, totalAmount: '₹32,00,000',
    steps: [
      { from:'A007', to:'A010', label:'Kumar Trading → Fast Traders', amount:'₹3,50,000', time:'08:30', channel:'RTGS', color:'#FF4757' },
      { from:'A010', to:'A012', label:'Fast Traders → Shell Corp B',  amount:'₹3,40,000', time:'09:45', channel:'NEFT', color:'#FF6B35' },
      { from:'A012', to:'A016', label:'Shell Corp B → Mule X1',       amount:'₹3,35,000', time:'11:00', channel:'RTGS', color:'#F5A623' },
      { from:'A016', to:'A007', label:'Mule X1 → Kumar Trading',      amount:'₹3,30,000', time:'13:30', channel:'UPI',  color:'#FF4757' },
    ]
  },
  {
    id: 2,
    title: 'ATM Structuring Burst — A001',
    subtitle: 'Sub-threshold cash withdrawals to evade CTR',
    accounts: ['A001','A002','A003'],
    caseId: 'FD-2026-00844', riskScore: 76, totalAmount: '₹99,700',
    steps: [
      { from:'A001', to:'A002', label:'Rajesh → Shell Corp A (NEFT)', amount:'₹1,80,000', time:'08:00', channel:'NEFT', color:'#FF4757' },
      { from:'A001', to:'A001', label:'A001 ATM Withdrawal #1',        amount:'₹49,900',  time:'08:30', channel:'ATM',  color:'#F5A623' },
      { from:'A001', to:'A001', label:'A001 ATM Withdrawal #2',        amount:'₹49,800',  time:'09:15', channel:'ATM',  color:'#F5A623' },
    ]
  },
  {
    id: 3,
    title: 'Cross-Layer Pass-Through — 5 Accounts',
    subtitle: 'Deep layering through 5 intermediaries',
    accounts: ['A001','A002','A007','A010','A016'],
    caseId: 'FD-2026-00845', riskScore: 91, totalAmount: '₹8,90,000',
    steps: [
      { from:'A016', to:'A002', label:'Mule X1 → Shell Corp A',       amount:'₹8,90,000', time:'07:30', channel:'RTGS', color:'#FF4757' },
      { from:'A002', to:'A007', label:'Shell Corp A → Kumar Trading',  amount:'₹8,85,000', time:'08:15', channel:'NEFT', color:'#FF6B35' },
      { from:'A007', to:'A010', label:'Kumar Trading → Fast Traders',  amount:'₹8,75,000', time:'09:00', channel:'RTGS', color:'#F5A623' },
      { from:'A010', to:'A001', label:'Fast Traders → Rajesh Mehta',   amount:'₹8,70,000', time:'10:30', channel:'NEFT', color:'#FF4757' },
    ]
  },
  {
    id: 4,
    title: 'Dormant Activation — A003 & A008',
    subtitle: 'Sudden reactivation of dormant savings accounts',
    accounts: ['A001','A003','A004','A008'],
    caseId: 'FD-2026-00846', riskScore: 71, totalAmount: '₹9,25,000',
    steps: [
      { from:'A001', to:'A003', label:'Rajesh → Dormant 7823',         amount:'₹4,90,000', time:'10:00', channel:'NEFT', color:'#FF4757' },
      { from:'A003', to:'A008', label:'Dormant 7823 → Dormant 4521',   amount:'₹4,85,000', time:'11:30', channel:'UPI',  color:'#7B5EA7' },
      { from:'A008', to:'A004', label:'Dormant 4521 → Partner B',      amount:'₹4,50,000', time:'14:00', channel:'NEFT', color:'#F5A623' },
      { from:'A004', to:'A001', label:'Partner B → Rajesh Mehta',      amount:'₹4,45,000', time:'16:30', channel:'UPI',  color:'#FF4757' },
    ]
  },
  {
    id: 5,
    title: 'Profile Mismatch Flow — A004 & A017',
    subtitle: 'Income vs actual flow disparity — layering',
    accounts: ['A004','A013','A015','A017'],
    caseId: 'FD-2026-00847', riskScore: 62, totalAmount: '₹5,30,000',
    steps: [
      { from:'A013', to:'A015', label:'Vikram Singh → Ravi Textiles',  amount:'₹2,80,000', time:'10:00', channel:'RTGS', color:'#4F9EFF' },
      { from:'A015', to:'A017', label:'Ravi Textiles → Deepak Exports', amount:'₹2,50,000', time:'11:45', channel:'NEFT', color:'#F5A623' },
      { from:'A017', to:'A004', label:'Deepak Exports → Partner B',    amount:'₹2,20,000', time:'14:20', channel:'UPI',  color:'#F5A623' },
    ]
  },
  {
    id: 6,
    title: 'Shell Corp Triangle — A001+A002+A012',
    subtitle: 'Two shell corps funneling back to originator',
    accounts: ['A001','A002','A012','A016'],
    caseId: 'FD-2026-00848', riskScore: 89, totalAmount: '₹12,10,000',
    steps: [
      { from:'A001', to:'A002', label:'Rajesh → Shell Corp A',         amount:'₹4,95,000', time:'09:15', channel:'NEFT', color:'#FF4757' },
      { from:'A001', to:'A012', label:'Rajesh → Shell Corp B',         amount:'₹4,20,000', time:'09:45', channel:'RTGS', color:'#FF4757' },
      { from:'A002', to:'A016', label:'Shell A → Mule X1',             amount:'₹4,90,000', time:'10:30', channel:'UPI',  color:'#FF6B35' },
      { from:'A012', to:'A016', label:'Shell B → Mule X1',             amount:'₹4,15,000', time:'11:00', channel:'NEFT', color:'#FF6B35' },
    ]
  },
  {
    id: 7,
    title: 'Fast Velocity Burst — A007',
    subtitle: '32 txns in 2 hours — high velocity anomaly',
    accounts: ['A007','A010','A017','A018'],
    caseId: 'FD-2026-00849', riskScore: 68, totalAmount: '₹7,30,000',
    steps: [
      { from:'A007', to:'A010', label:'Kumar Trading → Fast Traders',  amount:'₹3,50,000', time:'08:00', channel:'RTGS', color:'#F5A623' },
      { from:'A010', to:'A017', label:'Fast Traders → Deepak Exports', amount:'₹1,80,000', time:'08:45', channel:'NEFT', color:'#F5A623' },
      { from:'A017', to:'A018', label:'Deepak Exports → Sanjay Kumar', amount:'₹95,000',   time:'10:00', channel:'UPI',  color:'#4F9EFF' },
      { from:'A018', to:'A007', label:'Sanjay Kumar → Kumar Trading',  amount:'₹85,000',   time:'10:30', channel:'UPI',  color:'#F5A623' },
    ]
  },
  {
    id: 8,
    title: 'Cross-Border Spike — A017',
    subtitle: 'International transfer 3× baseline — FEMA alert',
    accounts: ['A013','A015','A017','A018'],
    caseId: 'FD-2026-00850', riskScore: 55, totalAmount: '₹14,25,000',
    steps: [
      { from:'A013', to:'A017', label:'Vikram Singh → Deepak Exports', amount:'₹5,60,000', time:'09:00', channel:'RTGS', color:'#4F9EFF' },
      { from:'A015', to:'A017', label:'Ravi Textiles → Deepak Exports', amount:'₹7,00,000', time:'10:00', channel:'NEFT', color:'#4F9EFF' },
      { from:'A017', to:'A018', label:'Deepak Exports → Sanjay Kumar', amount:'₹95,000',   time:'12:00', channel:'UPI',  color:'#F5A623' },
    ]
  },
  {
    id: 9,
    title: 'Watchlist Connection — A005 → A002',
    subtitle: 'Clean account connected to confirmed fraud entity',
    accounts: ['A005','A006','A002','A009'],
    caseId: 'FD-2026-00851', riskScore: 42, totalAmount: '₹1,95,000',
    steps: [
      { from:'A005', to:'A006', label:'Priya Sharma → Amit Patel',     amount:'₹75,000',  time:'11:20', channel:'UPI',  color:'#00C48C' },
      { from:'A005', to:'A009', label:'Priya Sharma → Sunita Devi',    amount:'₹55,000',  time:'12:15', channel:'UPI',  color:'#00C48C' },
      { from:'A006', to:'A002', label:'Amit Patel → Shell Corp A',     amount:'₹62,000',  time:'13:00', channel:'NEFT', color:'#FF4757' },
    ]
  }
];

let currentFlowScenario = 0;
let flowCanvas_scenario = null;
let flowNodes_scenario = null;
let flowSvg_scenario = null;
let flowAnimating_scenario = false;

function buildFlowScenario(idx) {
  const scenario = allFlowScenarios[idx];
  if (!scenario) return;
  currentFlowScenario = idx;

  // Update header
  const titleEl = document.getElementById('flowScenarioTitle');
  const subtitleEl = document.getElementById('flowScenarioSubtitle');
  if (titleEl) titleEl.textContent = scenario.title;
  if (subtitleEl) subtitleEl.textContent = scenario.subtitle;

  // Update step log
  const logEl = document.getElementById('flowStepLog');
  if (logEl) {
    logEl.innerHTML = scenario.steps.map((s, i) => `
      <div class="flow-step-item" id="flow-step-${i}">
        <span class="flow-step-time">${s.time}</span>
        <span>${s.label}</span>
        <span class="flow-step-amount">${s.amount}</span>
      </div>`).join('');
  }

  // Reset detection banner
  const banner = document.getElementById('flowDetectionBanner');
  if (banner) {
    banner.classList.remove('show');
    const desc = banner.querySelector('.flow-detection-desc');
    if (desc) desc.textContent = `Case ${scenario.caseId} · ${scenario.accounts.length} accounts · Amount: ${scenario.totalAmount} · Risk: ${scenario.riskScore}/100`;
  }

  // Rebuild SVG canvas
  const container = document.getElementById('flowCanvas');
  if (!container) return;
  container.innerHTML = '';
  flowAnimating_scenario = false;

  const W = container.clientWidth || 700;
  const H = container.clientHeight || 320;
  const svg = d3.select(container).append('svg').attr('width', W).attr('height', H);
  flowSvg_scenario = svg;

  const defs = svg.append('defs');
  const f = defs.append('filter').attr('id', 'flowGlowS');
  f.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'cb');
  const m = f.append('feMerge');
  m.append('feMergeNode').attr('in', 'cb');
  m.append('feMergeNode').attr('in', 'SourceGraphic');

  defs.append('marker').attr('id', 'flowArrowS')
    .attr('viewBox', '0 0 10 10').attr('refX', 22).attr('refY', 5)
    .attr('markerWidth', 6).attr('markerHeight', 6).attr('orient', 'auto')
    .append('path').attr('d', 'M 0 0 L 10 5 L 0 10 Z').attr('fill', '#E8660A80');

  const ids = [...new Set(scenario.steps.flatMap(s => [s.from, s.to]))].filter(id => id !== null);
  const cx = W / 2, cy = H / 2;
  const r = Math.min(W, H) * 0.32;
  const nodePos = {};

  ids.forEach((id, i) => {
    const angle = -Math.PI / 2 + (i / ids.length) * 2 * Math.PI;
    nodePos[id] = { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
  flowNodes_scenario = nodePos;
  flowCanvas_scenario = container;

  // Draw edges
  scenario.steps.forEach(step => {
    if (!nodePos[step.from] || !nodePos[step.to] || step.from === step.to) return;
    const s = nodePos[step.from], t = nodePos[step.to];
    svg.append('line')
      .attr('class', `flow-edge flow-edge-${step.from}-${step.to}`)
      .attr('x1', s.x).attr('y1', s.y).attr('x2', t.x).attr('y2', t.y)
      .attr('stroke', '#2A2A2A').attr('stroke-width', 2)
      .attr('marker-end', 'url(#flowArrowS)');
  });

  // Draw nodes
  const allAcc = typeof accounts !== 'undefined' ? accounts : [];
  const riskColorMap2 = { fraud: '#FF4757', suspicious: '#F5A623', dormant: '#7B5EA7', clean: '#00C48C' };

  ids.forEach(id => {
    const acct = allAcc.find(a => a.id === id);
    const pos = nodePos[id];
    const col = riskColorMap2[acct?.risk] || '#888';
    const g = svg.append('g').attr('class', `flow-node-${id}`);

    g.append('circle').attr('cx', pos.x).attr('cy', pos.y).attr('r', 26)
      .attr('fill', col).attr('stroke', col).attr('stroke-width', 3)
      .attr('stroke-opacity', 0.3).attr('filter', 'url(#flowGlowS)');

    g.append('text').attr('x', pos.x).attr('y', pos.y - 2)
      .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')
      .attr('font-family', 'DM Mono, monospace').attr('font-size', '9px')
      .attr('fill', 'white').attr('font-weight', '700')
      .text(id.replace('A0', 'A'));

    const shortName = acct?.name?.split(' ')[0] || id;
    g.append('text').attr('x', pos.x).attr('y', pos.y + 10)
      .attr('text-anchor', 'middle').attr('font-family', 'DM Sans, sans-serif')
      .attr('font-size', '8px').attr('fill', 'rgba(255,255,255,0.5)')
      .text(shortName);

    const labelOffset = 42;
    const angle = Math.atan2(pos.y - cy, pos.x - cx);
    g.append('text')
      .attr('x', pos.x + labelOffset * Math.cos(angle))
      .attr('y', pos.y + labelOffset * Math.sin(angle))
      .attr('text-anchor', pos.x < cx ? 'end' : pos.x > cx ? 'start' : 'middle')
      .attr('font-family', 'DM Sans, sans-serif').attr('font-size', '9px')
      .attr('fill', '#777')
      .text(acct?.name?.length > 12 ? acct.name.slice(0, 12) + '…' : acct?.name || id);
  });
}

window.selectFlowScenario = function(idx) {
  currentFlowScenario = idx;
  document.querySelectorAll('.flow-scenario-tab').forEach((t, i) => {
    t.classList.toggle('active', i === idx);
    t.style.opacity = i === idx ? '1' : '0.5';
    t.style.borderColor = i === idx ? '#E8660A' : '#2A2A2A';
    t.style.color = i === idx ? '#E8660A' : '#888';
  });
  buildFlowScenario(idx);
};

window.playMoneyFlow = function() {
  const scenario = allFlowScenarios[currentFlowScenario];
  if (!scenario || flowAnimating_scenario) return;
  flowAnimating_scenario = true;

  const banner = document.getElementById('flowDetectionBanner');
  if (banner) banner.classList.remove('show');
  document.querySelectorAll('.flow-step-item').forEach(el => el.classList.remove('visible', 'active-step'));

  // Reset edges
  scenario.steps.forEach(step => {
    if (step.from === step.to) return;
    const edge = document.querySelector(`.flow-edge-${step.from}-${step.to}`);
    if (edge) d3.select(edge).attr('stroke', '#2A2A2A').attr('stroke-width', 2).attr('stroke-opacity', 1);
  });

  let stepIndex = 0;

  function animateStep() {
    if (stepIndex >= scenario.steps.length) {
      setTimeout(() => {
        if (banner) banner.classList.add('show');
        flowAnimating_scenario = false;
      }, 400);
      return;
    }

    const step = scenario.steps[stepIndex];
    const logItem = document.getElementById(`flow-step-${stepIndex}`);
    if (logItem) {
      logItem.classList.add('visible');
      setTimeout(() => logItem.classList.add('active-step'), 50);
    }

    const nodePos = flowNodes_scenario;
    if (step.from !== step.to && nodePos && nodePos[step.from] && nodePos[step.to]) {
      const edge = d3.select(`.flow-edge-${step.from}-${step.to}`);
      edge.transition().duration(300)
        .attr('stroke', step.color).attr('stroke-width', 4).attr('stroke-opacity', 0.9);

      if (flowSvg_scenario) {
        const s = nodePos[step.from], t = nodePos[step.to];
        const particle = flowSvg_scenario.append('text')
          .attr('x', s.x).attr('y', s.y)
          .attr('font-family', 'DM Mono, monospace').attr('font-size', '10px')
          .attr('fill', '#F5A623').attr('font-weight', '700').attr('text-anchor', 'middle')
          .attr('filter', 'url(#flowGlowS)').text(step.amount);
        particle.transition().duration(900).ease(d3.easeQuadInOut)
          .attr('x', t.x).attr('y', t.y).on('end', () => particle.remove());
      }

      setTimeout(() => {
        edge.transition().duration(400).attr('stroke', '#3A3A4A').attr('stroke-width', 2).attr('stroke-opacity', 0.6);
      }, 1200);
    }

    if (logItem) setTimeout(() => logItem.classList.remove('active-step'), 1200);
    stepIndex++;
    setTimeout(animateStep, 1400);
  }

  animateStep();
};

window.resetMoneyFlow = function() {
  flowAnimating_scenario = false;
  const banner = document.getElementById('flowDetectionBanner');
  if (banner) banner.classList.remove('show');
  document.querySelectorAll('.flow-step-item').forEach(el => el.classList.remove('visible', 'active-step'));
  const scenario = allFlowScenarios[currentFlowScenario];
  if (scenario && flowSvg_scenario) {
    scenario.steps.forEach(step => {
      if (step.from !== step.to) {
        d3.select(`.flow-edge-${step.from}-${step.to}`).attr('stroke', '#2A2A2A').attr('stroke-width', 2).attr('stroke-opacity', 1);
      }
    });
  }
};

// Intercept flow view init
const _origFlowInit = window.initMoneyFlowView;
window.initMoneyFlowView = function() {
  buildFlowScenario(currentFlowScenario);
};

// ─── DNA Behavioral Fingerprint (Radar Chart) ──────────────
window.initDNAView = function() {
  const container = document.getElementById('dnaRadarContainer');
  if (!container) return;
  container.innerHTML = '';
  renderDNARadar(container, 'A001');
};

function renderDNARadar(container, accId) {
  const allAcc = typeof accounts !== 'undefined' ? accounts : [];
  const a = allAcc.find(x => x.id === accId) || allAcc[0];
  if (!a) return;

  const W = container.clientWidth || 400;
  const H = Math.min(W, 320);
  const cx = W / 2, cy = H / 2 + 10;
  const R = Math.min(W, H) * 0.35;

  const svg = d3.select(container).append('svg').attr('width', W).attr('height', H);
  const defs = svg.append('defs');
  const glow = defs.append('filter').attr('id', 'dnaGlow');
  glow.append('feGaussianBlur').attr('stdDeviation', '3').attr('result', 'cb');
  const gm = glow.append('feMerge');
  gm.append('feMergeNode').attr('in', 'cb');
  gm.append('feMergeNode').attr('in', 'SourceGraphic');

  const dims = [
    { label: 'Velocity', value: Math.min(a.riskScore + 1, 100) },
    { label: 'Geo Spread', value: Math.min(a.riskScore - 5, 100) },
    { label: 'Structuring', value: a.risk === 'fraud' ? 88 : a.risk === 'suspicious' ? 50 : 10 },
    { label: 'Shell Links', value: a.risk === 'fraud' ? 92 : a.risk === 'suspicious' ? 40 : 5 },
    { label: 'Mismatch', value: Math.min(a.riskScore + 4, 100) },
    { label: 'Layering', value: a.risk === 'fraud' ? 85 : a.risk === 'suspicious' ? 45 : 8 },
  ];

  const n = dims.length;
  const angleStep = (2 * Math.PI) / n;

  // Grid rings
  [20, 40, 60, 80, 100].forEach(pct => {
    const r = (pct / 100) * R;
    const pts = dims.map((_, i) => {
      const angle = -Math.PI / 2 + angleStep * i;
      return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
    });
    svg.append('polygon')
      .attr('points', pts.map(p => p.join(',')).join(' '))
      .attr('fill', 'none').attr('stroke', '#1A1A2A').attr('stroke-width', 1);
  });

  // Axis lines
  dims.forEach((_, i) => {
    const angle = -Math.PI / 2 + angleStep * i;
    svg.append('line')
      .attr('x1', cx).attr('y1', cy)
      .attr('x2', cx + R * Math.cos(angle)).attr('y2', cy + R * Math.sin(angle))
      .attr('stroke', '#1A1A2A').attr('stroke-width', 1);
  });

  // Data polygon
  const pts = dims.map((d, i) => {
    const angle = -Math.PI / 2 + angleStep * i;
    const r = (d.value / 100) * R;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  });

  const riskCol = { fraud: '#FF4757', suspicious: '#F5A623', dormant: '#7B5EA7', clean: '#00C48C' }[a.risk] || '#888';

  svg.append('polygon')
    .attr('points', pts.map(p => p.join(',')).join(' '))
    .attr('fill', riskCol + '25')
    .attr('stroke', riskCol).attr('stroke-width', 2)
    .attr('filter', 'url(#dnaGlow)');

  pts.forEach(([px, py], i) => {
    svg.append('circle').attr('cx', px).attr('cy', py).attr('r', 4)
      .attr('fill', riskCol).attr('filter', 'url(#dnaGlow)');
  });

  // Labels
  dims.forEach((d, i) => {
    const angle = -Math.PI / 2 + angleStep * i;
    const lx = cx + (R + 22) * Math.cos(angle);
    const ly = cy + (R + 22) * Math.sin(angle);
    svg.append('text').attr('x', lx).attr('y', ly)
      .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')
      .attr('font-family', 'DM Sans, sans-serif').attr('font-size', '9px').attr('fill', '#888')
      .text(d.label);
    svg.append('text').attr('x', lx).attr('y', ly + 11)
      .attr('text-anchor', 'middle').attr('font-family', 'Space Mono, monospace')
      .attr('font-size', '8px').attr('fill', riskCol).attr('font-weight', '700')
      .text(d.value);
  });

  // Center badge
  svg.append('text').attr('x', cx).attr('y', cy - 6).attr('text-anchor', 'middle')
    .attr('font-family', 'Space Mono, monospace').attr('font-size', '16px').attr('font-weight', '700')
    .attr('fill', riskCol).text(a.riskScore);
  svg.append('text').attr('x', cx).attr('y', cy + 9).attr('text-anchor', 'middle')
    .attr('font-family', 'DM Sans, sans-serif').attr('font-size', '9px').attr('fill', '#555')
    .text('RISK SCORE');
}

// ─── Temporal Velocity Heatmap ────────────────────────────────
window.initTemporalHeatmap = function() {
  const container = document.getElementById('temporalHeatmapCanvas');
  if (!container || container.querySelector('svg')) return;

  const W = container.clientWidth || 700;
  const H = 240;
  const margin = { top: 30, right: 20, bottom: 40, left: 45 };
  const w = W - margin.left - margin.right;
  const h = H - margin.top - margin.bottom;

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Generate fraud spike data
  const heatData = [];
  days.forEach((day, di) => {
    hours.forEach(hr => {
      let val = Math.random() * 20;
      // Fraud spikes: case FD-2026-00842 was at 09:15–17:55 on a Tuesday
      if (di === 1 && hr >= 9 && hr <= 18) val += 60 + Math.random() * 30;
      if (hr >= 0 && hr <= 5) val += 10 + Math.random() * 15; // night activity suspicious
      if (di >= 5) val *= 1.3; // weekend higher
      heatData.push({ day, di, hr, val: Math.min(val, 100) });
    });
  });

  const svg = d3.select(container).append('svg').attr('width', W).attr('height', H);
  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

  const xScale = d3.scaleBand().domain(hours).range([0, w]).padding(0.05);
  const yScale = d3.scaleBand().domain(days).range([0, h]).padding(0.05);
  const colorScale = d3.scaleSequential()
    .domain([0, 100])
    .interpolator(d3.interpolateRgb('#0D1A2E', '#FF4757'));

  g.selectAll('rect').data(heatData).enter().append('rect')
    .attr('x', d => xScale(d.hr))
    .attr('y', d => yScale(d.day))
    .attr('width', xScale.bandwidth())
    .attr('height', yScale.bandwidth())
    .attr('fill', d => colorScale(d.val))
    .attr('rx', 2)
    .attr('opacity', 0.9)
    .on('mouseover', function(e, d) {
      d3.select(this).attr('stroke', '#F5A623').attr('stroke-width', 1.5);
      const tip = document.getElementById('temporalTooltip');
      if (tip) { tip.textContent = `${d.day} ${d.hr}:00 — Risk: ${Math.round(d.val)}/100`; tip.style.opacity = '1'; }
    })
    .on('mouseout', function() {
      d3.select(this).attr('stroke', 'none');
      const tip = document.getElementById('temporalTooltip');
      if (tip) tip.style.opacity = '0';
    });

  // X axis
  g.append('g').attr('transform', `translate(0,${h})`).call(
    d3.axisBottom(xScale).tickFormat(d => d % 4 === 0 ? `${d}:00` : '')
  ).selectAll('text').attr('fill', '#555').attr('font-size', '9px').attr('font-family', 'DM Mono');
  g.selectAll('.domain').attr('stroke', '#2A2A2A');
  g.selectAll('.tick line').attr('stroke', '#2A2A2A');

  // Y axis
  g.append('g').call(d3.axisLeft(yScale))
    .selectAll('text').attr('fill', '#666').attr('font-size', '10px').attr('font-family', 'DM Sans');

  // Annotation: fraud spike
  g.append('rect')
    .attr('x', xScale(9) - 2).attr('y', yScale('Tue') - 2)
    .attr('width', xScale.bandwidth() * 9 + 4).attr('height', yScale.bandwidth() + 4)
    .attr('fill', 'none').attr('stroke', '#FF4757').attr('stroke-width', 1.5)
    .attr('stroke-dasharray', '4,2').attr('rx', 3);

  g.append('text')
    .attr('x', xScale(9) + xScale.bandwidth() * 4).attr('y', yScale('Tue') - 6)
    .attr('text-anchor', 'middle').attr('font-family', 'DM Sans, sans-serif')
    .attr('font-size', '9px').attr('fill', '#FF4757').text('FD-2026-00842 spike');
};

// ─── DOMContentLoaded init ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Accounts table auto-populate
  setTimeout(() => {
    if (document.getElementById('accountsTableBody')) {
      renderAccountsTable();
    }
  }, 500);

  // FIU reports account list
  setTimeout(() => renderAllAccountReports(), 600);

  // Patch switchView AFTER all other scripts have run
  setTimeout(() => {
    const prevSwitchView = window.switchView;
    window.switchView = function(viewId) {
      if (typeof prevSwitchView === 'function') prevSwitchView(viewId);

      if (viewId === 'accounts') setTimeout(() => renderAccountsTable(), 150);
      if (viewId === 'reports') setTimeout(() => renderAllAccountReports(), 200);
      if (viewId === 'dna') setTimeout(() => { if (typeof initDNAView === 'function') initDNAView(); }, 200);
      if (viewId === 'temporal') setTimeout(() => { if (typeof initTemporalHeatmap === 'function') initTemporalHeatmap(); }, 200);
      if (viewId === 'flow') {
        setTimeout(() => {
          buildFlowScenario(currentFlowScenario);
          injectFlowScenarioTabs();
        }, 250);
      }
    };
  }, 200);
});

function injectFlowScenarioTabs() {
  if (document.getElementById('flowScenarioTabsBar')) return;
  const flowPanel = document.querySelector('.flow-panel');
  if (!flowPanel) return;

  const bar = document.createElement('div');
  bar.id = 'flowScenarioTabsBar';
  bar.style.cssText = 'display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid #1A1A2A;';

  allFlowScenarios.forEach((s, i) => {
    const btn = document.createElement('button');
    btn.className = 'flow-scenario-tab';
    btn.textContent = `#${i + 1} ${s.title.split(' — ')[0]}`;
    btn.style.cssText = `padding:4px 10px;border-radius:6px;border:1px solid ${i === 0 ? '#E8660A' : '#2A2A2A'};background:transparent;color:${i === 0 ? '#E8660A' : '#555'};font-size:10px;cursor:pointer;font-family:'DM Mono',monospace;opacity:${i === 0 ? '1' : '0.55'};transition:all 0.2s;`;
    btn.onclick = () => selectFlowScenario(i);
    bar.appendChild(btn);
  });

  flowPanel.insertBefore(bar, flowPanel.firstChild);

  // Also update the flow title/subtitle elements
  const titleEl = document.querySelector('.flow-title');
  if (titleEl) titleEl.id = 'flowScenarioTitle';
  const subtitleEl = document.querySelector('.flow-subtitle');
  if (subtitleEl) subtitleEl.id = 'flowScenarioSubtitle';
}

// ─── Full DNA View Init (account selector + SHAP + peer) ─────
window.initDNAView = function() {
  const allAcc = typeof accounts !== 'undefined' ? accounts : [];
  const rC = { fraud:'#FF4757', suspicious:'#F5A623', dormant:'#7B5EA7', clean:'#00C48C' };

  // Build account selector buttons in the "Select Account" panel
  const selectorEl = document.querySelector('#view-dna .panel div[style*="flex-wrap"]');
  if (selectorEl && !selectorEl.querySelector('button')) {
    selectorEl.innerHTML = allAcc.sort((a,b) => b.riskScore - a.riskScore).map((a,i) => `
      <button id="dna-btn-${a.id}" onclick="selectDNAAccount('${a.id}')"
        style="padding:4px 9px;border-radius:6px;border:1px solid ${i===0?rC[a.risk]:'#2A2A2A'};background:transparent;color:${i===0?rC[a.risk]:'#555'};font-size:10px;cursor:pointer;font-family:'Space Mono',monospace;opacity:${i===0?'1':'0.55'}">
        ${a.id}</button>`).join('');
  }

  // Render for first account (A001 or highest risk)
  const first = allAcc.sort((a,b) => b.riskScore - a.riskScore)[0];
  if (first) selectDNAAccount(first.id);
};

window.selectDNAAccount = function(accId) {
  const allAcc = typeof accounts !== 'undefined' ? accounts : [];
  const a = allAcc.find(x => x.id === accId);
  if (!a) return;
  const rC = { fraud:'#FF4757', suspicious:'#F5A623', dormant:'#7B5EA7', clean:'#00C48C' };
  const col = rC[a.risk] || '#888';

  document.querySelectorAll('[id^="dna-btn-"]').forEach(btn => {
    const bId = btn.id.replace('dna-btn-', '');
    const bAcc = allAcc.find(x => x.id === bId);
    const bC = rC[bAcc?.risk] || '#888';
    btn.style.borderColor = bId === accId ? bC : '#2A2A2A';
    btn.style.color = bId === accId ? bC : '#555';
    btn.style.opacity = bId === accId ? '1' : '0.55';
  });

  // Redraw radar
  const radarEl = document.getElementById('dnaRadarContainer');
  if (radarEl) { radarEl.innerHTML = ''; renderDNARadar(radarEl, accId); }

  // SHAP bars
  const shap = document.getElementById('shapBarsContainer');
  const shapFeatures = [
    { label: 'Income Mismatch Ratio', weight: a.risk === 'fraud' ? 0.38 : a.risk === 'suspicious' ? 0.22 : 0.05, col: '#FF4757' },
    { label: 'Transaction Velocity', weight: a.risk === 'fraud' ? 0.27 : a.risk === 'suspicious' ? 0.18 : 0.04, col: '#FF6B35' },
    { label: 'Circular Pattern Depth', weight: a.risk === 'fraud' ? 0.21 : a.risk === 'suspicious' ? 0.15 : 0.02, col: '#F5A623' },
    { label: 'Shell Entity Connection', weight: a.risk === 'fraud' ? 0.14 : a.risk === 'suspicious' ? 0.08 : 0.01, col: '#7B5EA7' },
    { label: 'Dormant Account Usage', weight: a.risk === 'fraud' ? 0.09 : a.risk === 'suspicious' ? 0.12 : 0.01, col: '#4F9EFF' },
    { label: 'Structuring Signals', weight: a.risk === 'fraud' ? 0.18 : a.risk === 'suspicious' ? 0.06 : 0.01, col: '#00C48C' },
  ];
  if (shap) {
    shap.innerHTML = shapFeatures.sort((a,b)=>b.weight-a.weight).map(f => `
      <div style="margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
          <span style="font-size:11px;color:#AAA;">${f.label}</span>
          <span style="font-family:'Space Mono',monospace;font-size:10px;color:${f.col};font-weight:700;">${f.weight.toFixed(2)}</span>
        </div>
        <div style="height:5px;background:#1A1A2A;border-radius:3px;">
          <div style="height:5px;background:${f.col};border-radius:3px;width:${Math.round(f.weight*250)}%;max-width:100%;transition:width 0.6s;"></div>
        </div>
      </div>`).join('');
  }

  // Peer comparison
  const peer = document.getElementById('peerCompareContainer');
  if (peer) {
    const peers = allAcc.filter(x => x.type === a.type && x.id !== a.id).slice(0, 3);
    const peerAvgInflow = peers.reduce((s,p) => s + parseINR(p.inflow), 0) / Math.max(peers.length,1);
    peer.innerHTML = `
      <div style="font-size:10px;color:#444;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">vs. similar ${a.type} accounts</div>
      <div style="margin-bottom:8px;">
        <div style="display:flex;justify-content:space-between;font-size:11px;color:#888;margin-bottom:3px;"><span>This account inflow</span><span style="color:${col};font-family:'Space Mono',monospace;">${a.inflow}</span></div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:#888;"><span>Peer avg inflow</span><span style="font-family:'Space Mono',monospace;">₹${Math.round(peerAvgInflow).toLocaleString('en-IN')}</span></div>
      </div>
      ${peers.map(p => `
        <div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-top:1px solid #1A1A2A;">
          <div style="width:24px;height:24px;border-radius:6px;background:${rC[p.risk]}20;border:1px solid ${rC[p.risk]};display:flex;align-items:center;justify-content:center;">
            <span style="font-size:8px;font-weight:700;color:${rC[p.risk]};">${p.riskScore}</span>
          </div>
          <div style="flex:1;"><div style="font-size:10px;color:#888;">${p.id}</div><div style="font-size:9px;color:#444;">${p.inflow} in</div></div>
          <span style="font-size:9px;color:${rC[p.risk]};text-transform:uppercase;">${p.risk}</span>
        </div>`).join('')}`;
  }
};

// ─── Account detail modal ─────────────────────────────────────
window.openAccountDetail = function(accId) {
  const allAcc = typeof accounts !== 'undefined' ? accounts : [];
  const txns = typeof transactions !== 'undefined' ? transactions : [];
  const a = allAcc.find(x => x.id === accId);
  if (!a) return;
  const rC = { fraud:'#FF4757', suspicious:'#F5A623', dormant:'#7B5EA7', clean:'#00C48C' };
  const col = rC[a.risk] || '#888';
  const accTxns = txns.filter(t => t.source === accId || t.target === accId);

  // Inject DNA tab directly into investigation suite entity profile
  const dnaContainer = document.getElementById('dna-' + accId);

  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:9998;display:flex;align-items:center;justify-content:center;font-family:"DM Sans",sans-serif;';
  modal.innerHTML = `
  <div style="background:#0D0D0D;border:1px solid #2A2A2A;border-radius:14px;width:700px;max-width:95vw;max-height:85vh;overflow-y:auto;">
    <div style="padding:16px 20px;border-bottom:1px solid #1A1A2A;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#0D0D0D;z-index:1;">
      <div>
        <h3 style="font-family:'Syne',sans-serif;font-size:16px;font-weight:800;color:#F0F0F0;margin:0;">${a.id} — <span style="color:${col}">${a.name}</span></h3>
        <p style="color:#444;font-size:11px;margin:3px 0 0;">${a.type} · Score ${a.riskScore}/100 · ${a.risk.toUpperCase()}</p>
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <button onclick="downloadAccountPDF('${a.id}')" style="padding:6px 14px;border-radius:7px;border:1px solid ${col};background:transparent;color:${col};font-size:11px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">↓ PDF</button>
        <button onclick="this.closest('[style*=fixed]').remove()" style="width:28px;height:28px;border-radius:7px;border:1px solid #222;background:#111;color:#777;font-size:16px;cursor:pointer;">×</button>
      </div>
    </div>
    <div style="padding:20px;">
      <!-- KPIs -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px;">
        ${[{l:'Risk Score',v:`${a.riskScore}/100`,c:col},{l:'Inflow 30d',v:a.inflow,c:'#00C48C'},{l:'Outflow 30d',v:a.outflow,c:'#FF6B6B'},{l:'Connections',v:a.connections,c:'#4F9EFF'}].map(k=>`
        <div style="background:#111;border:1px solid #1A1A2A;border-radius:9px;padding:12px;">
          <div style="font-size:9px;color:#444;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px;">${k.l}</div>
          <div style="font-family:'Space Mono',monospace;font-size:13px;font-weight:700;color:${k.c};">${k.v}</div>
        </div>`).join('')}
      </div>
      <!-- DNA Radar -->
      <div style="background:#111;border:1px solid #1A1A2A;border-radius:9px;padding:14px;margin-bottom:14px;">
        <div style="font-size:10px;color:#444;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">🧬 DNA Behavioral Fingerprint</div>
        <div id="modal-dna-${a.id}" style="height:220px;"></div>
      </div>
      <!-- Transactions -->
      <div style="background:#111;border:1px solid #1A1A2A;border-radius:9px;padding:14px;">
        <div style="font-size:10px;color:#444;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Recent Transactions (${accTxns.length})</div>
        ${accTxns.length === 0 ? '<p style="color:#333;font-size:12px;">No transactions recorded</p>' :
          accTxns.slice(0,8).map(t => {
            const dir = t.source === accId ? 'OUT' : 'IN';
            const other = t.source === accId ? t.target : t.source;
            return `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #1A1A2A;font-size:11px;">
              <span style="color:${dir==='OUT'?'#FF6B6B':'#00C48C'};font-weight:700;width:32px">${dir}</span>
              <span style="font-family:'Space Mono',monospace;font-size:10px;color:#E8660A;">${other}</span>
              <span style="font-family:'Space Mono',monospace;color:#EEE;">₹${t.amount.toLocaleString('en-IN')}</span>
              <span style="color:#555;">${t.channel}</span>
              <span style="font-family:'Space Mono',monospace;color:#444;">${t.time}</span>
            </div>`;
          }).join('')}
      </div>
    </div>
  </div>`;

  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });

  // Render DNA radar inside modal
  setTimeout(() => {
    const dnaEl = document.getElementById(`modal-dna-${a.id}`);
    if (dnaEl && typeof d3 !== 'undefined') renderDNARadar(dnaEl, a.id);
  }, 100);
};
