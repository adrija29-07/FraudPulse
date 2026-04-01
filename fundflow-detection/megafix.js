// ===================================================
// MEGA-FIX.JS — All 4 screenshot issues + new features
// 1. 200 accounts (synthetic expansion)
// 2. FIU Case Summary for all 18 accounts on click
// 3. Transaction Graph — fix blank graph 
// 4. Investigation Suite — fix buttons, evidence graph, alerts
// ===================================================

// ─── STEP 1: Generate 200 accounts ──────────────────────────
(function expandAccounts() {
  if (typeof accounts === 'undefined') return;
  if (accounts.length >= 200) return;

  const firstNames = ['Arun','Priya','Rahul','Sneha','Vijay','Kavya','Rohan','Meera','Suresh','Anita','Deepak','Ritu','Sanjay','Pooja','Vikram','Nisha','Arjun','Swati','Manoj','Divya','Karan','Simran','Amit','Neha','Rajesh','Sunita','Anil','Geeta','Ramesh','Shweta','Santosh','Laxmi','Murali','Priyanka','Gopal','Radha','Ravi','Usha','Pavan','Rekha','Tarun','Mamta','Nitin','Seema','Ashok','Vandana','Pankaj','Kamala','Sandeep','Jyoti'];
  const lastNames  = ['Sharma','Singh','Patel','Mehta','Gupta','Verma','Reddy','Kumar','Yadav','Shah','Joshi','Nair','Pillai','Mishra','Tiwari','Chauhan','Rao','Bose','Dey','Sinha','Malhotra','Jain','Agarwal','Saxena','Chopra','Kapoor','Banerjee','Shukla','Pandey','Iyer'];
  const bizSuffixes= ['Enterprises','Trading Co.','Exports','Pvt Ltd','Industries','Holdings','Solutions','Associates','Traders','Logistics','Group'];
  const types      = ['Corporate','Savings','Current'];
  const risks      = ['clean','clean','clean','clean','suspicious','suspicious','fraud','dormant'];
  const incomes    = ['₹3,00,000','₹4,50,000','₹6,00,000','₹8,00,000','₹12,00,000','₹15,00,000','₹20,00,000','₹25,00,000','₹35,00,000','₹50,00,000','Not Declared'];
  const branches   = ['Andheri','Bandra','Dadar','Churchgate','Kurla','Thane','Navi Mumbai','Pune Central','Nashik','Nagpur','Aurangabad','Kolhapur'];
  const channels   = ['NEFT','RTGS','UPI','IMPS','ATM'];

  const rng = (n) => Math.floor(Math.random() * n);

  let existing = new Set(accounts.map(a => a.id));
  let idx = accounts.length + 1;

  while (accounts.length < 200) {
    const id = 'A' + String(idx).padStart(3, '0');
    if (existing.has(id)) { idx++; continue; }
    existing.add(id);

    const risk = risks[rng(risks.length)];
    const type = risk === 'fraud' ? (Math.random() > 0.5 ? 'Corporate' : 'Savings') : types[rng(types.length)];
    const score = risk === 'fraud' ? 75 + rng(25) : risk === 'suspicious' ? 45 + rng(30) : risk === 'dormant' ? rng(15) : rng(35);
    const inflowBase = risk === 'fraud' ? 500000 + rng(4000000) : risk === 'suspicious' ? 200000 + rng(1500000) : 50000 + rng(800000);
    const outflowBase = Math.round(inflowBase * (0.9 + Math.random() * 0.08));
    const isCorp = type === 'Corporate';
    const lName = lastNames[rng(lastNames.length)];
    const fName = firstNames[rng(firstNames.length)];
    const name = isCorp ? (lName + ' ' + bizSuffixes[rng(bizSuffixes.length)]) : (fName + ' ' + lName);

    const acc = {
      id,
      name,
      type,
      risk,
      riskScore: Math.max(1, Math.min(100, score)),
      income: risk === 'fraud' && Math.random() > 0.5 ? 'Not Declared' : incomes[rng(incomes.length)],
      inflow:  '₹' + inflowBase.toLocaleString('en-IN'),
      outflow: '₹' + outflowBase.toLocaleString('en-IN'),
      connections: 1 + rng(9),
      volumeRaw: inflowBase + outflowBase,
      branch: branches[rng(branches.length)],
      age: 22 + rng(45),
      openDate: `${String(1 + rng(28)).padStart(2,'0')} ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][rng(12)]} ${2018 + rng(6)}`,
      lastTxn: `${String(1 + rng(15)).padStart(2,'0')} Mar 2026`,
      dormant: risk === 'dormant',
      structuring: risk === 'fraud' ? rng(5) : 0,
      circles: risk === 'fraud' && Math.random() > 0.6 ? [['A001','A002','A003']] : [],
    };
    acc.riskLevel = score > 70 ? 'High' : score > 40 ? 'Medium' : 'Low';
    accounts.push(acc);

    // Add synthetic transactions for this account
    if (typeof transactions !== 'undefined' && Math.random() > 0.3) {
      const partners = accounts.slice(0, Math.min(idx - 1, 30));
      const partner = partners[rng(partners.length)];
      if (partner && partner.id !== id) {
        const amount = 10000 + rng(inflowBase);
        transactions.push({
          id: 'T' + String(transactions.length + 1).padStart(4, '0'),
          source: Math.random() > 0.5 ? id : partner.id,
          target: Math.random() > 0.5 ? partner.id : id,
          amount,
          channel: channels[rng(channels.length)],
          time: `${String(rng(23)).padStart(2,'0')}:${String(rng(59)).padStart(2,'0')}`,
          branch: branches[rng(branches.length)],
        });
      }
    }

    idx++;
  }

  // Also add id/branch to existing transactions that lack them
  if (typeof transactions !== 'undefined') {
    const branches2 = ['Andheri','Bandra','Dadar','Churchgate','Kurla','Thane','Navi Mumbai','Pune'];
    transactions.forEach((t, i) => {
      if (!t.id) t.id = 'T' + String(i + 1).padStart(4, '0');
      if (!t.branch) t.branch = branches2[rng(branches2.length)];
    });
  }

  console.log(`[MegaFix] Expanded to ${accounts.length} accounts, ${transactions.length} transactions`);
})();

// ─── STEP 2: Fix Transaction Graph (blank) ───────────────────
window._megaFixFullGraph = function() {
  const container = document.getElementById('graphFullscreen');
  if (!container) return;
  // Remove broken SVG if exists
  const existing = container.querySelector('svg');
  if (existing) {
    const w = parseInt(existing.getAttribute('width') || '0');
    const h = parseInt(existing.getAttribute('height') || '0');
    if (w < 50 || h < 50) { existing.remove(); } else { return; }
  }

  const W = container.offsetWidth || window.innerWidth - 70;
  const H = container.offsetHeight || window.innerHeight - 180;
  if (W < 50) { setTimeout(window._megaFixFullGraph, 300); return; }

  const allAcc = typeof accounts !== 'undefined' ? accounts : [];
  const allTxn = typeof transactions !== 'undefined' ? transactions : [];

  const svg = d3.select(container).append('svg').attr('width', W).attr('height', H)
    .style('width', '100%').style('height', '100%');
  const g = svg.append('g');
  svg.call(d3.zoom().scaleExtent([0.05, 6]).on('zoom', e => g.attr('transform', e.transform)));

  const defs = svg.append('defs');
  const filt = defs.append('filter').attr('id', 'mgGlow');
  filt.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'cb');
  const fm = filt.append('feMerge');
  fm.append('feMergeNode').attr('in', 'cb');
  fm.append('feMergeNode').attr('in', 'SourceGraphic');

  ['#FF4757','#F5A623','#4F9EFF','#00C48C'].forEach(col => {
    defs.append('marker').attr('id', 'mg-arr-' + col.replace('#','')).attr('viewBox','0 0 10 10').attr('refX',22).attr('refY',5).attr('markerWidth',5).attr('markerHeight',5).attr('orient','auto')
      .append('path').attr('d','M 0 0 L 10 5 L 0 10 Z').attr('fill', col + '70');
  });

  const nodes = allAcc.map(a => ({ ...a }));
  const nodeSet = new Set(nodes.map(n => n.id));
  const links = allTxn.filter(t => nodeSet.has(t.source) && nodeSet.has(t.target))
    .map(t => ({ source: t.source, target: t.target, amount: t.amount || 100000, channel: t.channel }));

  const rC = { fraud:'#FF4757', suspicious:'#F5A623', dormant:'#7B5EA7', clean:'#00C48C' };

  const sim = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(80))
    .force('charge', d3.forceManyBody().strength(-180))
    .force('center', d3.forceCenter(W / 2, H / 2))
    .force('collision', d3.forceCollide(18));

  const link = g.append('g').selectAll('line').data(links).enter().append('line')
    .attr('stroke', d => {
      const s = nodes.find(n => n.id === (d.source.id || d.source));
      const t = nodes.find(n => n.id === (d.target.id || d.target));
      return (s?.risk === 'fraud' || t?.risk === 'fraud') ? 'rgba(255,71,87,0.4)' : 'rgba(79,158,255,0.15)';
    })
    .attr('stroke-width', d => Math.max(1, Math.min((d.amount || 50000) / 200000, 4)))
    .attr('marker-end', d => (d.amount || 0) > 300000 ? 'url(#mg-arr-FF4757)' : 'url(#mg-arr-4F9EFF)');

  const ng = g.append('g').selectAll('g').data(nodes).enter().append('g')
    .style('cursor', 'pointer')
    .call(d3.drag()
      .on('start', (e, d) => { if (!e.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
      .on('drag',  (e, d) => { d.fx = e.x; d.fy = e.y; })
      .on('end',   (e, d) => { if (!e.active) sim.alphaTarget(0); d.fx = null; d.fy = null; }));

  ng.filter(d => d.risk === 'fraud').append('circle').attr('r', 22)
    .attr('fill', 'none').attr('stroke', '#FF4757').attr('stroke-width', 1.5)
    .attr('stroke-opacity', 0.3).attr('class', 'glow-ring-pulse');

  ng.append('circle')
    .attr('r', d => ({ fraud:13, suspicious:10, dormant:6, clean:8 })[d.risk] || 8)
    .attr('fill', d => rC[d.risk] || '#888')
    .attr('stroke', d => rC[d.risk] || '#888')
    .attr('stroke-width', 2).attr('stroke-opacity', 0.4)
    .attr('filter', d => d.risk === 'fraud' ? 'url(#mgGlow)' : '')
    .attr('class', d => d.risk === 'fraud' ? 'node-pulse' : '');

  ng.append('text').text(d => d.id).attr('font-family', 'DM Mono, monospace').attr('font-size', '8px')
    .attr('fill', '#999').attr('text-anchor', 'middle').attr('dy', d => ({ fraud:20, suspicious:16, dormant:12, clean:14 })[d.risk] || 14);

  ng.on('click', (e, d) => { e.stopPropagation(); if (typeof openNodePanel === 'function') openNodePanel(d); });
  svg.on('click', () => { if (typeof closeNodePanel === 'function') closeNodePanel(); });

  sim.on('tick', () => {
    link.attr('x1', d => d.source.x).attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
    ng.attr('transform', d => `translate(${Math.max(18, Math.min(W - 18, d.x))},${Math.max(18, Math.min(H - 18, d.y))})`);
  });

  window._fullGraphSvg = svg; window._fullGraphNodes = nodes; window._fullGraphSim = sim;
  if (typeof registerGraphState === 'function') registerGraphState(sim, nodes, links, ng, link);
  if (typeof startDemoFlashSequence === 'function') startDemoFlashSequence();
};

// ─── STEP 3: Fix Evidence Graph (blank white box) ────────────
window.fixEvidenceGraph = function() {
  const container = document.getElementById('evidenceGraph');
  if (!container) return;
  const existing = container.querySelector('svg');
  if (existing) existing.remove();

  const W = container.clientWidth || 400;
  const H = container.clientHeight || 280;
  if (W < 20) { setTimeout(window.fixEvidenceGraph, 300); return; }

  const allAcc = typeof accounts !== 'undefined' ? accounts : [];
  const allTxn = typeof transactions !== 'undefined' ? transactions : [];

  const ids = ['A001', 'A002', 'A003', 'A004'];
  const nodes = allAcc.filter(a => ids.includes(a.id)).map(a => ({ ...a }));
  const links = allTxn.filter(t => ids.includes(t.source) && ids.includes(t.target))
    .map(t => ({ source: t.source, target: t.target, amount: t.amount }));

  const svg = d3.select(container).append('svg').attr('width', W).attr('height', H)
    .style('background', 'transparent');
  const g = svg.append('g');
  svg.call(d3.zoom().scaleExtent([0.3, 4]).on('zoom', e => g.attr('transform', e.transform)));

  const defs = svg.append('defs');
  const filt = defs.append('filter').attr('id', 'evGlow');
  filt.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'cb');
  const em = filt.append('feMerge');
  em.append('feMergeNode').attr('in', 'cb');
  em.append('feMergeNode').attr('in', 'SourceGraphic');

  defs.append('marker').attr('id', 'ev-arrow').attr('viewBox','0 0 10 10').attr('refX',22).attr('refY',5).attr('markerWidth',6).attr('markerHeight',6).attr('orient','auto')
    .append('path').attr('d','M 0 0 L 10 5 L 0 10 Z').attr('fill','rgba(232,102,10,0.6)');

  const rC = { fraud:'#FF4757', suspicious:'#F5A623', dormant:'#7B5EA7', clean:'#00C48C' };

  const sim = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(120))
    .force('charge', d3.forceManyBody().strength(-400))
    .force('center', d3.forceCenter(W / 2, H / 2))
    .force('collision', d3.forceCollide(35));

  g.append('g').selectAll('line').data(links).enter().append('line')
    .attr('stroke', 'rgba(232,102,10,0.4)').attr('stroke-width', 3)
    .attr('class', 'edge-flow').attr('marker-end', 'url(#ev-arrow)');

  const ng = g.append('g').selectAll('g').data(nodes).enter().append('g')
    .style('cursor', 'pointer')
    .call(d3.drag()
      .on('start', (e, d) => { if (!e.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
      .on('drag',  (e, d) => { d.fx = e.x; d.fy = e.y; })
      .on('end',   (e, d) => { if (!e.active) sim.alphaTarget(0); d.fx = null; d.fy = null; }));

  ng.append('circle').attr('r', 22)
    .attr('fill', d => rC[d.risk] || '#888')
    .attr('stroke', d => rC[d.risk] || '#888')
    .attr('stroke-width', 3).attr('stroke-opacity', 0.5)
    .attr('filter', 'url(#evGlow)');

  ng.append('text').text(d => d.id).attr('text-anchor','middle').attr('dominant-baseline','middle')
    .attr('font-family','DM Mono, monospace').attr('font-size','10px').attr('fill','white').attr('font-weight','700');

  ng.append('text').text(d => d.name.split(' ')[0])
    .attr('text-anchor','middle').attr('font-family','DM Sans, sans-serif').attr('font-size','10px')
    .attr('fill', d => rC[d.risk] || '#888').attr('dy', 36);

  ng.append('text').text(d => 'Score: ' + d.riskScore)
    .attr('text-anchor','middle').attr('font-family','Space Mono, monospace').attr('font-size','8px')
    .attr('fill', '#555').attr('dy', 50);

  const linesSel = g.selectAll('line');
  sim.on('tick', () => {
    linesSel.attr('x1', d => d.source.x).attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
    ng.attr('transform', d => `translate(${Math.max(28, Math.min(W - 28, d.x))},${Math.max(28, Math.min(H - 28, d.y))})`);
  });
};

// ─── STEP 4: Populate Case Alerts (blank panel) ──────────────
window.fixCaseAlerts = function() {
  const container = document.getElementById('invAlertsList');
  if (!container) return;

  const caseAlerts = [
    { level:'critical', icon:'🔴', title:'Round-Trip Pattern Confirmed',      desc:'4-account circular fund transfer · A001→A002→A003→A004→A001 · 8h 40m',           time:'2 min ago',  action:'File STR' },
    { level:'critical', icon:'🔴', title:'Income Mismatch 3.07×',             desc:'Rajesh Mehta (A001) declared ₹6L annual income — ₹18.45L transacted in 30 days',  time:'5 min ago',  action:'Review' },
    { level:'critical', icon:'🔴', title:'Shell Entity A002 Flagged',         desc:'Shell Corp A — no declared business purpose, registered 3 months ago',             time:'8 min ago',  action:'Freeze' },
    { level:'critical', icon:'🔴', title:'Mule Account X1 (A016) — 25× Mismatch', desc:'₹1.8L declared income — ₹45L inflow in 30 days. Mule profile confirmed.',    time:'12 min ago', action:'Freeze' },
    { level:'high',     icon:'🟠', title:'Structuring Detected — A001',        desc:'₹49,900 + ₹49,800 ATM withdrawals on 15 Mar (below ₹50K CTR threshold)',          time:'18 min ago', action:'File CTR' },
    { level:'high',     icon:'🟠', title:'Dormant Account Activated — A003',   desc:'Dormant 7823 inactive 18 months, received ₹4.90L RTGS on 14 Mar',                 time:'25 min ago', action:'KYC Review' },
    { level:'high',     icon:'🟠', title:'Fast Velocity — A007 Kumar Trading', desc:'32 transactions in 2 hours · Burst velocity anomaly · Mule Network Beta',         time:'32 min ago', action:'Monitor' },
    { level:'medium',   icon:'🟡', title:'RING-002 — Secondary Ring Detected', desc:'A007→A010→A012→A016 · ₹32L over 6 hours · Connected to primary ring',            time:'45 min ago', action:'Analyse' },
  ];

  const levelBg = { critical:'rgba(255,71,87,0.06)', high:'rgba(245,166,35,0.06)', medium:'rgba(79,158,255,0.06)' };
  const levelBorder = { critical:'rgba(255,71,87,0.3)', high:'rgba(245,166,35,0.3)', medium:'rgba(79,158,255,0.3)' };
  const levelColor = { critical:'#FF4757', high:'#F5A623', medium:'#4F9EFF' };

  container.innerHTML = caseAlerts.map((a, i) => `
    <div class="inv-alert-item" style="padding:10px 14px;border-bottom:1px solid #1A1A2A;background:${levelBg[a.level]};border-left:3px solid ${levelColor[a.level]};cursor:pointer;"
         onclick="highlightAlertAction(${i})">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px;">
        <span style="font-size:12px;">${a.icon}</span>
        <span style="font-size:12px;font-weight:700;color:#F0F0F0;">${a.title}</span>
        <span style="margin-left:auto;font-size:9px;color:#444;">${a.time}</span>
      </div>
      <div style="font-size:11px;color:#666;margin-bottom:6px;line-height:1.5;">${a.desc}</div>
      <button onclick="event.stopPropagation();showAlertAction('${a.action}','${a.title}')"
        style="padding:3px 10px;border-radius:5px;border:1px solid ${levelColor[a.level]};background:transparent;color:${levelColor[a.level]};font-size:10px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">
        ${a.action} →
      </button>
    </div>`).join('');
};

window.highlightAlertAction = function(idx) {};

window.showAlertAction = function(action, title) {
  const msgs = {
    'File STR': `STR filing initiated for "${title}". Routing to FIU-IND via goAML portal...\n\nReference: STR-2026-${Math.floor(Math.random()*90000)+10000} · Status: SUBMITTED`,
    'Freeze': `Account freeze order issued for "${title}".\n\nOrder Reference: FRZ-2026-${Math.floor(Math.random()*9000)+1000} · Effective: Immediately\nNotification sent to branch manager and compliance officer.`,
    'File CTR': `Currency Transaction Report filed for "${title}".\n\nCTR Reference: CTR-2026-${Math.floor(Math.random()*9000)+1000} · Section: PMLA 2002 Sec 12`,
    'KYC Review': `KYC re-verification initiated for "${title}".\n\nThe account holder has been notified. 48-hour response window.`,
    'Monitor': `Enhanced monitoring activated for "${title}".\n\nAll future transactions will trigger immediate alerts. Daily reconciliation enabled.`,
    'Analyse': `Deep analysis job queued for "${title}".\n\nGNN trajectory analysis will run in 5 minutes. Results available in Fraud Rings view.`,
    'Review': `Case review pending for "${title}".\n\nAssigned to senior analyst Priya S. Expected decision within 24 hours.`,
  };
  const msg = msgs[action] || `Action "${action}" recorded for: ${title}`;
  showCaseActionToast(action, msg);
};

function showCaseActionToast(action, msg) {
  document.getElementById('caseActionToast')?.remove();
  const toast = document.createElement('div');
  toast.id = 'caseActionToast';
  toast.style.cssText = 'position:fixed;bottom:90px;right:24px;background:#111;border:1px solid #2A2A2A;border-radius:12px;padding:16px 20px;max-width:400px;z-index:9990;font-family:"DM Sans",sans-serif;box-shadow:0 8px 24px rgba(0,0,0,0.5);';
  toast.innerHTML = `
    <div style="font-size:12px;font-weight:700;color:#E8660A;margin-bottom:8px;">✅ ${action} — Confirmed</div>
    <div style="font-size:11px;color:#888;line-height:1.6;white-space:pre-line;">${msg}</div>
    <button onclick="this.closest('#caseActionToast').remove()" style="margin-top:10px;padding:4px 12px;border-radius:6px;border:1px solid #2A2A2A;background:transparent;color:#666;font-size:10px;cursor:pointer;">Dismiss</button>`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 6000);
}

// ─── STEP 5: Fix action buttons ─────────────────────────────
function wireActionButtons() {
  // Escalate to Senior
  document.querySelectorAll('.btn-danger').forEach(btn => {
    if (btn.textContent.includes('Escalate')) {
      btn.onclick = () => {
        showCaseActionToast('Escalated to Senior Analyst', `Case FD-2026-00842 has been escalated.\n\nAssigned to: Senior Analyst Rajiv Kumar\nPriority: URGENT\nExpected review: Within 2 hours\nEscalation Reference: ESC-2026-${Math.floor(Math.random()*9000)+1000}`);
        btn.textContent = '✓ Escalated';
        btn.style.opacity = '0.6';
        btn.style.pointerEvents = 'none';
      };
    }
  });

  // Mark False Positive
  document.querySelectorAll('.btn-secondary').forEach(btn => {
    if (btn.textContent.includes('False Positive')) {
      btn.onclick = () => {
        if (!confirm('Mark Case FD-2026-00842 as FALSE POSITIVE? This will close the case and remove the fraud flags.')) return;
        showCaseActionToast('Marked as False Positive', `Case FD-2026-00842 marked as FALSE POSITIVE.\n\nFalse positive rate updated in GNN training set.\nAccounts A001, A003 risk scores will be recalibrated.\nReference: FP-2026-${Math.floor(Math.random()*9000)+1000}`);
        btn.textContent = '✓ Marked FP';
        btn.style.opacity = '0.6';
        btn.style.pointerEvents = 'none';
      };
    }
  });

  // Close Case
  document.querySelectorAll('.btn-ghost').forEach(btn => {
    if (btn.textContent === 'Close Case') {
      btn.onclick = () => {
        if (!confirm('Close Case FD-2026-00842? This action will be logged in the audit trail.')) return;
        showCaseActionToast('Case Closed', `Case FD-2026-00842 has been CLOSED.\n\nReason: Under investigation pending FIU response.\nAudit Reference: AUD-2026-${Math.floor(Math.random()*9000)+1000}\nCase will be archived in 30 days.`);
        btn.textContent = '✓ Closed';
        btn.style.opacity = '0.6';
        btn.style.pointerEvents = 'none';
      };
    }
  });
}

// ─── STEP 6: FIU Case Summaries for All 18 accounts ─────────
function buildCaseSummaryForAccount(accId) {
  const allAcc = typeof accounts !== 'undefined' ? accounts : [];
  const allTxn = typeof transactions !== 'undefined' ? transactions : [];
  const a = allAcc.find(x => x.id === accId);
  if (!a) return;

  const accTxns = allTxn.filter(t => t.source === accId || t.target === accId);
  const totalIn = accTxns.filter(t => t.target === accId).reduce((s, t) => s + t.amount, 0);
  const totalOut = accTxns.filter(t => t.source === accId).reduce((s, t) => s + t.amount, 0);
  const rC = { fraud:'#FF4757', suspicious:'#F5A623', dormant:'#7B5EA7', clean:'#00C48C' };
  const col = rC[a.risk] || '#888';

  // Find modal or create it
  document.getElementById('accCaseSummaryModal')?.remove();
  const modal = document.createElement('div');
  modal.id = 'accCaseSummaryModal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.8);z-index:9995;display:flex;align-items:center;justify-content:center;font-family:"DM Sans",sans-serif;';

  const sid = `CS-2026-${String(allAcc.indexOf(a) + 1).padStart(5, '0')}`;
  const pattern = a.risk === 'fraud' ? 'Round-Trip / Shell Entity' : a.risk === 'suspicious' ? 'Velocity Anomaly / Structuring' : a.risk === 'dormant' ? 'Dormant Activation' : 'No Suspicious Pattern';
  const reportType = a.risk === 'fraud' ? 'Suspicious Transaction Report (STR)' : a.risk === 'suspicious' ? 'Suspicious Activity Report (SAR)' : 'Routine Account Review';

  modal.innerHTML = `
  <div style="background:#0D0D0D;border:1px solid #2A2A2A;border-radius:14px;width:760px;max-width:95vw;max-height:90vh;overflow-y:auto;">
    <div style="padding:16px 20px;border-bottom:1px solid #1A1A2A;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#0D0D0D;z-index:1;">
      <div>
        <h3 style="font-family:'Syne',sans-serif;font-size:15px;font-weight:800;color:#F0F0F0;margin:0;">Case Summary — <span style="color:${col}">${a.id} ${a.name}</span></h3>
        <p style="color:#444;font-size:10px;margin:3px 0 0;">${reportType} · ${sid}</p>
      </div>
      <div style="display:flex;gap:8px;">
        <button onclick="downloadAccountPDF('${a.id}')" style="padding:5px 12px;border-radius:7px;border:1px solid ${col};background:transparent;color:${col};font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;">↓ PDF</button>
        <button onclick="document.getElementById('accCaseSummaryModal').remove()" style="width:28px;height:28px;border-radius:7px;border:1px solid #222;background:#111;color:#777;font-size:16px;cursor:pointer;">×</button>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;border-bottom:1px solid #1A1A2A;">
      ${[['Case ID',sid],['Report Type',reportType],['Pattern Detected',pattern],['Accounts Involved',a.connections],
         ['Total Inflow (30d)','₹'+totalIn.toLocaleString('en-IN')],['Risk Score',a.riskScore+' / 100'],
         ['Primary Subject',a.name],['Period','01 Mar – 31 Mar 2026']].map((f,i)=>`
        <div style="padding:11px 18px;border-bottom:1px solid #111;${i%2===0?'border-right:1px solid #111;':''}">
          <div style="font-size:9px;color:#444;text-transform:uppercase;letter-spacing:1px;margin-bottom:3px;">${f[0]}</div>
          <div style="font-family:'Space Mono',monospace;font-size:12px;font-weight:700;color:${f[0]==='Risk Score'?col:'#F0F0F0'};">${f[1]}</div>
        </div>`).join('')}
    </div>
    <div style="padding:18px 20px;">
      <div style="font-size:10px;color:#444;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Report Preview</div>
      <div style="background:#080810;border:1px solid #1A1A2A;border-radius:8px;padding:14px 16px;font-size:12px;line-height:1.8;color:#AAA;max-height:300px;overflow-y:auto;">
        <strong style="color:#E8660A;">CASE: ${sid}</strong><br>
        <strong style="color:#888;">Classification:</strong> ${a.risk.toUpperCase()} — ${pattern}<br><br>
        <strong style="color:#888;">Subject:</strong> ${a.name} (${a.id}) · ${a.type} Account<br>
        <strong style="color:#888;">Declared Income:</strong> ${a.income}<br>
        <strong style="color:#888;">Actual 30-day Flow:</strong> ₹${(totalIn + totalOut).toLocaleString('en-IN')}<br>
        ${a.risk !== 'clean' ? `<strong style="color:#888;">Income Mismatch:</strong> <span style="color:${col}">${parseINR(a.income)>0?(((totalIn)*12/parseINR(a.income)).toFixed(2)+'× annual income transacted monthly'):'N/A (Not Declared income)'}</span><br>` : ''}
        <br>
        <strong style="color:#888;">Transaction Summary (${accTxns.length} records):</strong><br>
        ${accTxns.slice(0,5).map(t=>{const dir=t.source===accId?'→ OUT':'← IN';const other=t.source===accId?t.target:t.source;return `&bull; ${dir} ${other}: ₹${t.amount.toLocaleString('en-IN')} via ${t.channel} at ${t.time}`}).join('<br>')}
        ${accTxns.length>5?`<br><em style="color:#555;">...and ${accTxns.length-5} more transactions</em>`:''}
        <br><br>
        <strong style="color:#888;">Risk Assessment:</strong><br>
        ${a.risk==='fraud'?`⚠ CONFIRMED FRAUD — Immediate STR filing required under PMLA 2002 Section 12. Account freeze recommended.`:
          a.risk==='suspicious'?`⚡ SUSPICIOUS — Enhanced monitoring activated. Pattern matches structuring/layering indicators.`:
          a.risk==='dormant'?`💤 DORMANT ACTIVATION — Recent activity on previously inactive account. KYC re-verification required.`:
          `✅ LOW RISK — No suspicious patterns detected. Continue routine monitoring.`}
        <br><br>
        <em style="color:#333;">— Auto-generated by FundFlow AI Engine v1.0 — Analyst review required —</em>
      </div>
    </div>
    <div style="padding:14px 20px;border-top:1px solid #1A1A2A;display:flex;gap:10px;">
      <button onclick="downloadAccountPDF('${a.id}')" style="padding:8px 16px;border-radius:8px;border:none;background:linear-gradient(135deg,#E8660A,#F5A623);color:white;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">↓ Download PDF</button>
      <button onclick="showAlertAction('File STR','${a.name} (${a.id})')" style="padding:8px 16px;border-radius:8px;border:1px solid ${col};background:transparent;color:${col};font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">Submit to FIU</button>
      <button onclick="document.getElementById('accCaseSummaryModal').remove()" style="padding:8px 16px;border-radius:8px;border:1px solid #2A2A2A;background:transparent;color:#666;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;margin-left:auto;">Close</button>
    </div>
  </div>`;

  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

// ─── STEP 7: Patch allAccountReportsList for clickable rows ──
function patchAccountReportsList() {
  const container = document.getElementById('allAccountReportsList');
  if (!container) return;
  // Add click handlers to all rows
  container.querySelectorAll('[onclick*="downloadAccountPDF"]').forEach(btn => {
    const row = btn.closest('div[style*="display:flex"]');
    if (row) {
      row.style.cursor = 'pointer';
      row.style.transition = 'background 0.2s';
      row.addEventListener('mouseenter', () => row.style.background = '#111');
      row.addEventListener('mouseleave', () => row.style.background = 'transparent');
    }
  });
}

// Re-render account reports list with clickable case summaries
function renderAllAccountReportsWithCaseSummary() {
  const container = document.getElementById('allAccountReportsList');
  if (!container) return;
  const data = typeof accounts !== 'undefined' ? accounts : [];
  const riskColors = { fraud:'#FF4757', suspicious:'#F5A623', dormant:'#7B5EA7', clean:'#00C48C' };
  const sorted = [...data].sort((a,b) => b.riskScore - a.riskScore);

  container.innerHTML = sorted.map(a => `
    <div onclick="buildCaseSummaryForAccount('${a.id}')" style="display:flex;align-items:center;gap:12px;padding:10px 16px;border-bottom:1px solid #1A1A2A;cursor:pointer;transition:background 0.2s;"
      onmouseenter="this.style.background='#111'" onmouseleave="this.style.background='transparent'">
      <div style="width:38px;height:38px;border-radius:9px;background:${riskColors[a.risk]}15;border:1px solid ${riskColors[a.risk]};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="font-family:'Space Mono',monospace;font-size:11px;font-weight:700;color:${riskColors[a.risk]};">${a.riskScore}</span>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="font-family:'Space Mono',monospace;font-size:12px;font-weight:700;color:#F0F0F0;">${a.id}</span>
          <span style="font-size:9px;color:${riskColors[a.risk]};text-transform:uppercase;font-weight:700;">${a.risk}</span>
          ${a.risk!=='clean'?`<span style="font-size:9px;color:#555;margin-left:auto;">↗ Click for Case Summary</span>`:''}
        </div>
        <div style="font-size:11px;color:#555;">${a.name} · ${a.type} · ${a.inflow} in</div>
      </div>
      <button onclick="event.stopPropagation();downloadAccountPDF('${a.id}')" style="padding:5px 12px;border-radius:6px;border:1px solid ${riskColors[a.risk]};background:transparent;color:${riskColors[a.risk]};font-size:10px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap;">
        ↓ PDF
      </button>
    </div>`).join('');
}

// ─── STEP 8: Enhanced Evidence Checklist ────────────────────
function renderEvidenceChecklist() {
  const container = document.getElementById('evidenceChecklist');
  if (!container || container.children.length > 0) return;

  const items = [
    { done:true,  label:'Transaction Records (20 lines)',           desc:'NEFT/RTGS/UPI records exported from CBS',              file:'txn_records_FD2026-00842.csv' },
    { done:true,  label:'Account KYC Documents',                   desc:'PAN, Aadhaar, business registration verified',          file:'kyc_A001_A002_A003_A004.pdf' },
    { done:true,  label:'Graph Topology Evidence',                 desc:'D3.js circular pattern visual proof exported',          file:'graph_evidence_ring1.svg' },
    { done:true,  label:'GNN Risk Scores',                         desc:'PyTorch model v2.4 output — 84/100 confidence',         file:'gnn_scores_FD2026.json' },
    { done:true,  label:'Structuring Evidence',                    desc:'2 ATM withdrawals below ₹50K threshold on 15 Mar',       file:'structuring_evidence.pdf' },
    { done:false, label:'Shell Corp A — MCA Registration',         desc:'Ministry of Corporate Affairs verification pending',     file:null },
    { done:false, label:'Dormant Account Activation Report',       desc:'Bank branch activation logs for A003',                  file:null },
    { done:false, label:'Cross-branch CCTV Request',               desc:'ATM footage from Andheri branch — 15 Mar 08:30',        file:null },
  ];

  container.innerHTML = items.map((item, i) => `
    <div class="evidence-item ${item.done ? 'checked' : ''}" style="display:flex;align-items:flex-start;gap:12px;padding:12px 16px;border-bottom:1px solid #1A1A2A;${item.done?'border-left:3px solid #00C48C;':'border-left:3px solid #2A2A2A;'}">
      <div onclick="toggleEvidenceItem(${i}, this)" style="width:18px;height:18px;border-radius:4px;border:2px solid ${item.done?'#00C48C':'#333'};background:${item.done?'#00C48C22':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;margin-top:1px;">
        ${item.done?'<span style="font-size:10px;color:#00C48C;">✓</span>':''}
      </div>
      <div style="flex:1;">
        <div style="font-size:12px;font-weight:600;color:${item.done?'#F0F0F0':'#888'};">${item.label}</div>
        <div style="font-size:10px;color:#555;margin-top:2px;">${item.desc}</div>
        ${item.file?`<div style="font-family:'Space Mono',monospace;font-size:9px;color:#444;margin-top:3px;">📄 ${item.file}</div>`:'<div style="font-size:9px;color:#F5A623;margin-top:3px;">⏳ Pending collection</div>'}
      </div>
      ${item.done?`<button onclick="alert('Downloading: ${item.file}')" style="padding:3px 10px;border-radius:5px;border:1px solid #333;background:transparent;color:#666;font-size:9px;cursor:pointer;flex-shrink:0;">↓ View</button>`:''}
    </div>`).join('');
}

window.toggleEvidenceItem = function(idx, el) {
  const isChecked = el.innerHTML.includes('✓');
  if (isChecked) {
    el.style.borderColor = '#333';
    el.style.background = 'transparent';
    el.innerHTML = '';
    el.closest('div[style*="padding:12px"]').style.borderLeft = '3px solid #2A2A2A';
  } else {
    el.style.borderColor = '#00C48C';
    el.style.background = '#00C48C22';
    el.innerHTML = '<span style="font-size:10px;color:#00C48C;">✓</span>';
    el.closest('div[style*="padding:12px"]').style.borderLeft = '3px solid #00C48C';
  }
};

window.downloadEvidencePackage = function() {
  showCaseActionToast('Evidence Package Downloaded', `All collected evidence items have been bundled.\n\nPackage: FD-2026-00842_Evidence.zip (5 files)\nHash: SHA256:a3f9b2d1e4c8f7a6b5c4d3e2f1a0\nDownload logged in audit trail.`);
};

// ─── STEP 9: Auto-init on view switch ───────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const prevSW = window.switchView;
    window.switchView = function(viewId) {
      if (typeof prevSW === 'function') prevSW(viewId);

      if (viewId === 'graph') {
        setTimeout(() => {
          const c = document.getElementById('graphFullscreen');
          if (c) {
            const sv = c.querySelector('svg');
            if (!sv || parseInt(sv.getAttribute('width') || '0') < 50) {
              if (sv) sv.remove();
              window._megaFixFullGraph();
            }
          }
        }, 150);
      }

      if (viewId === 'investigation' || viewId === 'workbench') {
        setTimeout(() => {
          fixEvidenceGraph();
          fixCaseAlerts();
          wireActionButtons();
          renderEvidenceChecklist();
          // Also update invAlertsList
          if (typeof switchInvPanel === 'function') switchInvPanel('inv-alerts');
        }, 200);
      }

      if (viewId === 'reports') {
        setTimeout(() => renderAllAccountReportsWithCaseSummary(), 200);
      }

      if (viewId === 'accounts') {
        setTimeout(() => {
          if (typeof renderAccountsTable === 'function') renderAccountsTable();
        }, 150);
      }
    };

    // Also patch Fixes.js switchView if it exists
    const origFixes = window._fixesSwitchView;
    if (origFixes) {
      // chain properly — already done above
    }

    // Run immediately for active view
    setTimeout(() => {
      fixEvidenceGraph();
      fixCaseAlerts();
      wireActionButtons();
      renderEvidenceChecklist();
      renderAllAccountReportsWithCaseSummary();
      if (typeof renderAccountsTable === 'function') renderAccountsTable();
    }, 600);

    // Fix graph view
    setTimeout(() => {
      const c = document.getElementById('graphFullscreen');
      if (c) {
        const sv = c.querySelector('svg');
        if (!sv || parseInt(sv.getAttribute('width') || '0') < 50) {
          if (sv) sv.remove();
        }
      }
    }, 800);

  }, 300);
});

// ─── Expose for HTML onclick calls ──────────────────────────
window.buildCaseSummaryForAccount = buildCaseSummaryForAccount;
window.renderAllAccountReportsWithCaseSummary = renderAllAccountReportsWithCaseSummary;
window.fixEvidenceGraph = window.fixEvidenceGraph;
window.fixCaseAlerts = window.fixCaseAlerts;
window.wireActionButtons = wireActionButtons;
window.renderEvidenceChecklist = renderEvidenceChecklist;

// Named functions wired to HTML buttons
window.escalateCaseToSenior = function() {
  const btn = document.getElementById('escalateBtn');
  showCaseActionToast('Escalated to Senior Analyst', `Case FD-2026-00842 has been escalated.\n\nAssigned to: Senior Analyst Rajiv Kumar\nPriority: URGENT — Response required within 2 hours\nEscalation Ref: ESC-2026-${Math.floor(Math.random()*9000)+1000}\nNotification sent via internal alert system.`);
  if (btn) { btn.textContent = '✓ Escalated'; btn.style.opacity = '0.6'; btn.style.pointerEvents = 'none'; }
};

window.markFalsePositive = function() {
  if (!confirm('Mark Case FD-2026-00842 as FALSE POSITIVE?\n\nThis will:\n• Remove fraud flags from A001, A003\n• Update GNN training dataset\n• Archive the case\n\nThis action is logged and cannot be undone.')) return;
  showCaseActionToast('Marked as False Positive', `Case FD-2026-00842 marked as FALSE POSITIVE.\n\nFP Reference: FP-2026-${Math.floor(Math.random()*9000)+1000}\nGNN model training set updated.\nAccounts A001, A003 recalibrated.\nCase archived.`);
  const btn = document.getElementById('falsePositiveBtn');
  if (btn) { btn.textContent = '✓ Marked FP'; btn.style.opacity = '0.6'; btn.style.pointerEvents = 'none'; }
};

window.closeInvestigationCase = function() {
  if (!confirm('Close Case FD-2026-00842?\n\nThe case will be archived. All evidence collected will be retained.\nThis action is logged in the audit trail.')) return;
  showCaseActionToast('Case Closed', `Case FD-2026-00842 has been CLOSED.\n\nAudit Ref: AUD-2026-${Math.floor(Math.random()*9000)+1000}\nClosed by: Analyst Priya S.\nTimestamp: ${new Date().toLocaleString('en-IN')}\nCase will be permanently archived in 30 days.`);
  const btn = document.getElementById('closeCaseBtn');
  if (btn) { btn.textContent = '✓ Closed'; btn.style.opacity = '0.6'; btn.style.pointerEvents = 'none'; }
};

