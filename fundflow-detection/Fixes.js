// ===================================================
// fixes.js — Graph fix + PDF + FIU + Account Explorer
// ===================================================

window.addEventListener('load', function () {

  // ===================================================
  // FIX 1 — GRAPH (clientWidth=0 when hidden)
  // ===================================================
  window.initFullGraph = function () {
    const container = document.getElementById('graphFullscreen');
    if (!container) return;
    if (container.querySelector('svg')) return;
    const W = container.offsetWidth || container.parentElement?.offsetWidth || window.innerWidth - 120 || 900;
    const H = container.offsetHeight || 600;
    if (W < 50) { setTimeout(window.initFullGraph, 300); return; }

    const dataAccounts     = (typeof realAccounts     !== 'undefined') ? realAccounts     : accounts;
    const dataTransactions = (typeof realTransactions !== 'undefined') ? realTransactions : transactions;

    const svg = d3.select(container).append('svg').attr('width',W).attr('height',H).style('width','100%').style('height','100%');
    const g   = svg.append('g');
    svg.call(d3.zoom().scaleExtent([0.15,6]).on('zoom',e=>g.attr('transform',e.transform)));

    const defs=svg.append('defs');
    const fl=defs.append('filter').attr('id','glowFull2');
    fl.append('feGaussianBlur').attr('stdDeviation','4').attr('result','cb');
    const mg=fl.append('feMerge'); mg.append('feMergeNode').attr('in','cb'); mg.append('feMergeNode').attr('in','SourceGraphic');
    ['#4F9EFF','#FF4757','#F5A623','#00C48C'].forEach(col=>{
      defs.append('marker').attr('id','arr2-'+col.replace('#','')).attr('viewBox','0 0 10 10').attr('refX',22).attr('refY',5).attr('markerWidth',6).attr('markerHeight',6).attr('orient','auto')
        .append('path').attr('d','M 0 0 L 10 5 L 0 10 Z').attr('fill',col+'80');
    });

    const nodes = dataAccounts.map(a=>({...a}));
    const links = dataTransactions.slice(0,800).map(t=>({source:t.source,target:t.target,amount:t.amount,channel:t.channel}));

    const sim=d3.forceSimulation(nodes)
      .force('link',d3.forceLink(links).id(d=>d.id).distance(100))
      .force('charge',d3.forceManyBody().strength(-280))
      .force('center',d3.forceCenter(W/2,H/2))
      .force('collision',d3.forceCollide(22));

    const link=g.append('g').selectAll('line').data(links).enter().append('line')
      .attr('stroke',d=>d.amount>400000?'rgba(255,71,87,0.4)':d.amount>200000?'rgba(245,166,35,0.35)':'rgba(79,158,255,0.2)')
      .attr('stroke-width',d=>Math.max(1,Math.min(d.amount/90000,4)))
      .attr('class',d=>{const s=nodes.find(n=>n.id===(d.source.id||d.source));const t=nodes.find(n=>n.id===(d.target.id||d.target));return(s?.risk==='fraud'||t?.risk==='fraud')?'fraud-edge':'';})
      .attr('marker-end',d=>d.amount>400000?'url(#arr2-FF4757)':d.amount>200000?'url(#arr2-F5A623)':'url(#arr2-4F9EFF)');

    const ng=g.append('g').selectAll('g').data(nodes).enter().append('g').style('cursor','pointer')
      .call(d3.drag()
        .on('start',(e,d)=>{if(!e.active)sim.alphaTarget(0.3).restart();d.fx=d.x;d.fy=d.y;})
        .on('drag', (e,d)=>{d.fx=e.x;d.fy=e.y;})
        .on('end',  (e,d)=>{if(!e.active)sim.alphaTarget(0);d.fx=null;d.fy=null;}));

    ng.filter(d=>d.risk==='fraud').append('circle').attr('r',22).attr('fill','none').attr('stroke','#FF4757').attr('stroke-width',1.5).attr('stroke-opacity',0.25).attr('class','glow-ring-pulse');
    ng.append('circle')
      .attr('r',d=>({fraud:13,suspicious:10,dormant:6,clean:8})[d.risk]||8)
      .attr('fill',d=>getNodeColor(d)).attr('stroke',d=>getNodeColor(d))
      .attr('stroke-width',2).attr('stroke-opacity',0.35)
      .attr('filter',d=>d.risk==='fraud'?'url(#glowFull2)':'').attr('class',d=>d.risk==='fraud'?'node-pulse':'');
    ng.append('text').text(d=>d.id).attr('font-family','DM Mono, monospace').attr('font-size','9px').attr('fill','#AAAAAA').attr('text-anchor','middle').attr('dy',24);

    ng.on('click',(e,d)=>{e.stopPropagation();openNodePanel(d);});
    svg.on('click',()=>closeNodePanel());
    sim.on('tick',()=>{
      link.attr('x1',d=>d.source.x).attr('y1',d=>d.source.y).attr('x2',d=>d.target.x).attr('y2',d=>d.target.y);
      ng.attr('transform',d=>`translate(${Math.max(18,Math.min(W-18,d.x))},${Math.max(18,Math.min(H-18,d.y))})`);
    });
    window._fullGraphSvg=svg;window._fullGraphG=g;window._fullGraphNodes=nodes;window._fullGraphLinks=link;window._fullGraphNodeGrp=ng;
  };

  window.initDashboardGraph = function () {
    const container=document.getElementById('dashboardGraph');
    if(!container||container.querySelector('svg'))return;
    const W=container.offsetWidth||600;const H=container.offsetHeight||420;
    if(W<50){setTimeout(window.initDashboardGraph,300);return;}
    const dataAccounts=(typeof realAccounts!=='undefined')?realAccounts:accounts;
    const dataTransactions=(typeof realTransactions!=='undefined')?realTransactions:transactions;
    const svg=d3.select(container).append('svg').attr('width',W).attr('height',H).style('width','100%').style('height','100%');
    const defs=svg.append('defs');const f=defs.append('filter').attr('id','glowDash2');
    f.append('feGaussianBlur').attr('stdDeviation','3').attr('result','cb');
    const m=f.append('feMerge');m.append('feMergeNode').attr('in','cb');m.append('feMergeNode').attr('in','SourceGraphic');
    const nodes=dataAccounts.slice(0,50).map(a=>({...a}));
    const nodeIds=new Set(nodes.map(n=>n.id));
    const links=dataTransactions.filter(t=>nodeIds.has(t.source)&&nodeIds.has(t.target)).slice(0,120).map(t=>({source:t.source,target:t.target,amount:t.amount}));
    const sim=d3.forceSimulation(nodes).force('link',d3.forceLink(links).id(d=>d.id).distance(60)).force('charge',d3.forceManyBody().strength(-160)).force('center',d3.forceCenter(W/2,H/2)).force('collision',d3.forceCollide(16));
    const link=svg.append('g').selectAll('line').data(links).enter().append('line')
      .attr('stroke',d=>{const s=nodes.find(n=>n.id===(d.source.id||d.source));const t=nodes.find(n=>n.id===(d.target.id||d.target));return(s?.risk==='fraud'||t?.risk==='fraud')?'rgba(255,71,87,0.35)':'rgba(79,158,255,0.15)';})
      .attr('stroke-width',d=>Math.max(1,Math.min(d.amount/120000,3)));
    const rCM={fraud:'#FF4757',suspicious:'#F5A623',dormant:'#7B5EA7',clean:'#4F9EFF'};
    const node=svg.append('g').selectAll('circle').data(nodes).enter().append('circle')
      .attr('r',d=>({fraud:10,suspicious:8,dormant:5,clean:7})[d.risk]||7)
      .attr('fill',d=>rCM[d.risk]||'#888').attr('stroke',d=>rCM[d.risk]||'#888')
      .attr('stroke-width',2).attr('stroke-opacity',0.3)
      .attr('filter',d=>d.risk==='fraud'?'url(#glowDash2)':'').attr('class',d=>d.risk==='fraud'?'node-pulse':'').style('cursor','pointer');
    const label=svg.append('g').selectAll('text').data(nodes).enter().append('text')
      .text(d=>d.id).attr('font-family','DM Mono, monospace').attr('font-size','8px').attr('fill','#888').attr('text-anchor','middle').attr('dy',18);
    sim.on('tick',()=>{
      link.attr('x1',d=>d.source.x).attr('y1',d=>d.source.y).attr('x2',d=>d.target.x).attr('y2',d=>d.target.y);
      node.attr('cx',d=>d.x=Math.max(10,Math.min(W-10,d.x))).attr('cy',d=>d.y=Math.max(10,Math.min(H-10,d.y)));
      label.attr('x',d=>d.x).attr('y',d=>d.y);
    });
  };
});

// ===================================================
// FIX 2 — DOWNLOAD PDF
// ===================================================
window.downloadReportAsPDF = function () {
  const reportEl=document.getElementById('reportText')||document.getElementById('aiReportArea');
  if(!reportEl){alert('No report generated yet.');return;}
  const rawText=reportEl.innerText||reportEl.textContent||'';
  if(!rawText.trim()||rawText.includes('Click')||rawText.includes('Awaiting')){alert('Please generate the report first.');return;}
  const printContent=`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>FIU STR Report</title>
<style>@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',sans-serif;font-size:13px;line-height:1.8;color:#1A1A2E;padding:40px 48px;background:white}
.header{border-bottom:3px solid #E8660A;padding-bottom:16px;margin-bottom:24px}.header h1{font-size:22px;font-weight:700;color:#E8660A}.header p{color:#888;font-size:12px;margin-top:4px}
.meta{display:flex;gap:32px;background:#F7F5FF;padding:14px 20px;border-radius:8px;margin-bottom:24px}.meta-item label{display:block;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#888;margin-bottom:4px}
.meta-item strong{font-family:'Space Mono',monospace;font-size:14px}pre{font-family:'DM Sans',sans-serif;font-size:13px;line-height:1.9;white-space:pre-wrap;word-break:break-word}
.footer{margin-top:40px;padding-top:12px;border-top:1px solid #E8E4F4;font-size:11px;color:#888;text-align:center}</style></head><body>
<div class="header"><h1>FundFlow — Suspicious Transaction Report (STR)</h1><p>FIU-IND Reference Format · ${new Date().toLocaleString('en-IN')}</p></div>
<div class="meta"><div class="meta-item"><label>Case ID</label><strong>FD-2026-00842</strong></div><div class="meta-item"><label>Risk Score</label><strong style="color:#FF4757">84/100</strong></div><div class="meta-item"><label>Amount</label><strong>₹18,45,000</strong></div><div class="meta-item"><label>Pattern</label><strong>Round-Trip</strong></div></div>
<pre>${rawText.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>
<div class="footer">FundFlow AI Engine v1.0 · IDEA 2.0 Hackathon · Analyst review required</div></body></html>`;
  const pw=window.open('','_blank','width=900,height=700');
  if(!pw){const blob=new Blob([rawText],{type:'text/plain'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='FIU_STR.txt';a.click();URL.revokeObjectURL(url);return;}
  pw.document.write(printContent);pw.document.close();setTimeout(()=>{pw.focus();pw.print();},600);
};

// ===================================================
// FIX 3 — SUBMIT TO FIU
// ===================================================
window.submitToFIU = function () {
  const reportEl=document.getElementById('reportText')||document.getElementById('aiReportArea');
  const raw=reportEl?(reportEl.innerText||reportEl.textContent||''):'';
  if(!raw.trim()||raw.includes('Click')||raw.includes('Awaiting')){alert('Please generate the report first.');return;}
  const overlay=document.createElement('div');
  overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;font-family:"DM Sans",sans-serif;';
  overlay.innerHTML=`<div style="background:#1A1A1A;border:1px solid #2A2A2A;border-radius:16px;padding:36px 40px;max-width:480px;width:90%;">
<div style="width:56px;height:56px;background:rgba(0,196,140,0.1);border:2px solid #00C48C;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 20px;">✓</div>
<h2 style="font-family:'Syne',sans-serif;font-size:20px;font-weight:800;color:#F0F0F0;text-align:center;margin-bottom:8px;">STR Submitted to FIU-IND</h2>
<p style="color:#888;font-size:13px;text-align:center;line-height:1.7;margin-bottom:24px;">Submitted via <strong style="color:#E8660A">goAML Portal</strong> to Financial Intelligence Unit, India.</p>
<div style="background:#111;border:1px solid #2A2A2A;border-radius:10px;padding:16px 20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #2A2A2A;"><span style="color:#888;font-size:12px">Reference</span><span style="font-family:'Space Mono',monospace;font-size:12px;color:#E8660A">STR-2026-${Math.floor(Math.random()*90000)+10000}</span></div>
<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #2A2A2A;"><span style="color:#888;font-size:12px">Case ID</span><span style="font-family:'Space Mono',monospace;font-size:12px;color:#F0F0F0">FD-2026-00842</span></div>
<div style="display:flex;justify-content:space-between;padding:6px 0;"><span style="color:#888;font-size:12px">Status</span><span style="font-size:12px;color:#00C48C;font-weight:600">✓ RECEIVED</span></div>
</div>
<button onclick="this.closest('[style*=fixed]').remove()" style="width:100%;padding:12px;border-radius:10px;border:none;background:linear-gradient(135deg,#E8660A,#F5A623);color:white;font-family:'Syne',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Close</button>
</div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.remove();});
};

// ===================================================
// FIX 4 — switchView with correct init timing
// ===================================================
document.addEventListener('DOMContentLoaded', function () {
  ['downloadBtn','submitBtn','aiDownloadBtn'].forEach(id=>{
    const btn=document.getElementById(id);
    if(btn){btn.onclick=function(){this.style.opacity='1';this.style.pointerEvents='auto';if(id==='submitBtn')submitToFIU();else downloadReportAsPDF();};}
  });

  window.switchView = function (viewId) {
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
    const view=document.getElementById('view-'+viewId);
    if(view){view.classList.add('active');const mc=document.getElementById('mainContent');if(mc)mc.scrollTop=0;}
    const ni=document.querySelector(`.nav-item[data-view="${viewId}"]`);
    if(ni)ni.classList.add('active');

    requestAnimationFrame(()=>{setTimeout(()=>{
      if(viewId==='graph'){
        const c=document.getElementById('graphFullscreen');
        if(c){const sv=c.querySelector('svg');if(!sv||parseInt(sv.getAttribute('width')||'0')<50){if(sv)sv.remove();if(typeof window._megaFixFullGraph==='function')window._megaFixFullGraph();else{initFullGraph();startDemoFlashSequence();}}}
      }
      if(viewId==='dashboard'){const c=document.getElementById('dashboardGraph');if(c&&!c.querySelector('svg'))initDashboardGraph();}
      if(viewId==='workbench'||viewId==='investigation'){
        const c=document.getElementById('evidenceGraph');
        if(c){const sv=c.querySelector('svg');if(!sv||sv.getAttribute('width')<10){if(sv)sv.remove();if(typeof window.fixEvidenceGraph==='function')window.fixEvidenceGraph();else initEvidenceGraph();}}
        if(typeof window.fixCaseAlerts==='function')window.fixCaseAlerts();
        if(typeof window.wireActionButtons==='function')window.wireActionButtons();
        if(typeof window.renderEvidenceChecklist==='function')window.renderEvidenceChecklist();
      }
      if(viewId==='flow'){const c=document.getElementById('flowCanvas');if(c&&!c.querySelector('svg'))initMoneyFlowView();}
      if(viewId==='heatmap')renderBranchHeatmap();
      if(viewId==='replay'){const c=document.getElementById('replayGraphArea');if(c&&!c.querySelector('svg'))initReplayGraph();renderReplayEvents();}
      if(viewId==='rings'){renderFraudRingAccounts(0);initFraudRingGraph(0);}
      if(viewId==='accounts'){if(typeof renderAccountsTable==='function')renderAccountsTable();else if(typeof renderAccountExplorer==='function')renderAccountExplorer();}
      if(viewId==='reports'){if(typeof renderAllAccountReportsWithCaseSummary==='function')setTimeout(renderAllAccountReportsWithCaseSummary,100);}
    },120);});
  };

  switchView('dashboard');
});

// ===================================================
// ACCOUNT EXPLORER
// ===================================================
let aeFilter='all', aeSearch='', aeSort='riskScore', aeSelectedAcc=null;

window.renderAccountExplorer = function() {
  const root=document.getElementById('accountExplorerRoot');
  if(!root)return;
  const data=(typeof realAccounts!=='undefined')?realAccounts:accounts;

  root.innerHTML=`
<div style="display:flex;height:calc(100vh - 0px);font-family:'DM Sans',sans-serif;background:#0D0D0D;">
  <!-- LEFT: Search + List -->
  <div style="width:380px;min-width:300px;border-right:1px solid #1A1A2A;display:flex;flex-direction:column;overflow:hidden;">
    <div style="padding:18px 16px 12px;border-bottom:1px solid #1A1A2A;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <h2 style="font-family:'Syne',sans-serif;font-size:17px;font-weight:800;color:#F0F0F0;margin:0;">Account Explorer</h2>
        <span id="ae-count" style="font-family:'Space Mono',monospace;font-size:10px;color:#E8660A;background:rgba(232,102,10,0.1);padding:3px 7px;border-radius:6px;">${data.length}</span>
      </div>
      <div style="position:relative;margin-bottom:8px;">
        <svg style="position:absolute;left:9px;top:50%;transform:translateY(-50%);width:13px;height:13px;stroke:#555;fill:none;" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input id="ae-search" type="text" placeholder="ID, profession, risk level…"
          style="width:100%;padding:8px 10px 8px 30px;background:#111;border:1px solid #222;border-radius:7px;color:#EEE;font-size:12px;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;"
          oninput="aeSearch=this.value;renderAEList()">
      </div>
      <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:8px;">
        ${['all','fraud','suspicious','dormant','clean'].map((f,i)=>{
          const colors={all:'#666',fraud:'#FF4757',suspicious:'#F5A623',dormant:'#7B5EA7',clean:'#00C48C'};
          const cnt=f==='all'?data.length:data.filter(a=>a.risk===f).length;
          return `<button id="ae-chip-${f}" onclick="aeFilter='${f}';document.querySelectorAll('[id^=ae-chip-]').forEach(c=>c.style.opacity='0.4');this.style.opacity='1';renderAEList()"
            style="padding:3px 9px;border-radius:20px;border:1px solid ${colors[f]};background:${f==='all'?'rgba(255,255,255,0.04)':'rgba(0,0,0,0)'};color:${colors[f]};font-size:10px;cursor:pointer;opacity:${i===0?'1':'0.45'};font-family:'DM Sans',sans-serif;">
            ${f==='all'?'All':f.charAt(0).toUpperCase()+f.slice(1)} <span style="opacity:0.7">${cnt}</span>
          </button>`;
        }).join('')}
      </div>
      <select id="ae-sort" onchange="aeSort=this.value;renderAEList()"
        style="width:100%;padding:6px 10px;background:#111;border:1px solid #222;border-radius:7px;color:#888;font-size:11px;font-family:'DM Mono',monospace;outline:none;cursor:pointer;">
        <option value="riskScore">Risk Score ↓</option>
        <option value="inflow">Inflow ↓</option>
        <option value="outflow">Outflow ↓</option>
        <option value="connections">Connections ↓</option>
        <option value="id">Account ID A→Z</option>
      </select>
    </div>
    <div id="ae-list" style="flex:1;overflow-y:auto;"></div>
  </div>

  <!-- RIGHT: Profile -->
  <div id="ae-profile" style="flex:1;overflow-y:auto;">
    <div style="display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column;gap:12px;">
      <svg viewBox="0 0 24 24" style="width:48px;height:48px;stroke:#222;fill:none;stroke-width:1.5;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
      <p style="color:#333;font-size:13px;">Select an account from the list</p>
    </div>
  </div>
</div>`;

  renderAEList();
};

window.renderAEList = function() {
  const data=(typeof realAccounts!=='undefined')?realAccounts:accounts;
  const list=document.getElementById('ae-list');
  const countEl=document.getElementById('ae-count');
  if(!list)return;

  const q=aeSearch.toLowerCase().trim();
  let filtered=data.filter(a=>{
    if(aeFilter!=='all'&&a.risk!==aeFilter)return false;
    if(q)return a.id.toLowerCase().includes(q)||(a.type||'').toLowerCase().includes(q)||(a.riskLevel||'').toLowerCase().includes(q);
    return true;
  });

  filtered.sort((a,b)=>{
    if(aeSort==='riskScore')return b.riskScore-a.riskScore;
    if(aeSort==='inflow')return parseINR(b.inflow)-parseINR(a.inflow);
    if(aeSort==='outflow')return parseINR(b.outflow)-parseINR(a.outflow);
    if(aeSort==='connections')return b.connections-a.connections;
    if(aeSort==='id')return a.id.localeCompare(b.id);
    return 0;
  });

  if(countEl)countEl.textContent=filtered.length;

  const rC={fraud:'#FF4757',suspicious:'#F5A623',dormant:'#7B5EA7',clean:'#00C48C'};
  if(!filtered.length){list.innerHTML='<div style="padding:30px;text-align:center;color:#333;font-size:12px;">No accounts found</div>';return;}

  list.innerHTML=filtered.map(a=>`
<div class="ae-row" onclick="selectAEAccount('${a.id}')"
  style="padding:10px 14px;cursor:pointer;border-bottom:1px solid #111;display:flex;align-items:center;gap:10px;${aeSelectedAcc===a.id?'background:#13131F;border-left:3px solid #E8660A;':'border-left:3px solid transparent;'}">
  <div style="width:34px;height:34px;border-radius:9px;background:rgba(0,0,0,0.3);border:1px solid ${rC[a.risk]||'#333'};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
    <span style="font-family:'Space Mono',monospace;font-size:10px;font-weight:700;color:${rC[a.risk]||'#888'}">${a.riskScore}</span>
  </div>
  <div style="flex:1;min-width:0;">
    <div style="display:flex;align-items:center;gap:5px;margin-bottom:1px;">
      <span style="font-family:'Space Mono',monospace;font-size:12px;font-weight:700;color:#F0F0F0;">${a.id}</span>
      ${a.dormant?'<span style="font-size:8px;background:rgba(123,94,167,0.2);color:#7B5EA7;padding:1px 4px;border-radius:3px;letter-spacing:0.5px;">DORMANT</span>':''}
    </div>
    <div style="font-size:10px;color:#555;">${a.type} · ${a.income} · ${a.connections} links</div>
  </div>
  <span style="font-size:9px;color:${rC[a.risk]};text-transform:uppercase;font-weight:600;letter-spacing:0.5px;">${a.risk}</span>
</div>`).join('');
};

window.selectAEAccount = function(accId) {
  aeSelectedAcc=accId;
  document.querySelectorAll('.ae-row').forEach(r=>{
    r.style.background='transparent';r.style.borderLeft='3px solid transparent';
  });
  const rows=[...document.querySelectorAll('.ae-row')];
  const sel=rows.find(r=>r.innerHTML.includes(`'${accId}'`));
  if(sel){sel.style.background='#13131F';sel.style.borderLeft='3px solid #E8660A';}

  const data=(typeof realAccounts!=='undefined')?realAccounts:accounts;
  const txns=(typeof realTransactions!=='undefined')?realTransactions:transactions;
  const acc=data.find(a=>a.id===accId);
  if(!acc)return;

  const profile=document.getElementById('ae-profile');
  const rC={fraud:'#FF4757',suspicious:'#F5A623',dormant:'#7B5EA7',clean:'#00C48C'};
  const rB={fraud:'rgba(255,71,87,0.06)',suspicious:'rgba(245,166,35,0.06)',dormant:'rgba(123,94,167,0.06)',clean:'rgba(0,196,140,0.04)'};

  const accTxns=txns.filter(t=>t.source===accId||t.target===accId);
  const totalIn=accTxns.filter(t=>t.target===accId).reduce((s,t)=>s+t.amount,0);
  const totalOut=accTxns.filter(t=>t.source===accId).reduce((s,t)=>s+t.amount,0);

  const channels={};
  accTxns.forEach(t=>{channels[t.channel]=(channels[t.channel]||0)+1;});

  const cp={};
  accTxns.forEach(t=>{const o=t.source===accId?t.target:t.source;if(!cp[o])cp[o]={count:0,total:0};cp[o].count++;cp[o].total+=t.amount;});
  const topCP=Object.entries(cp).sort((a,b)=>b[1].total-a[1].total).slice(0,8);

  const recentTxns=[...accTxns].sort((a,b)=>b.amount-a.amount).slice(0,10);
  const circleText=(acc.circles||[]).map(c=>Array.isArray(c)?c.join(' → '):'').filter(Boolean);

  profile.innerHTML=`<div style="padding:22px 24px;">

<!-- Header -->
<div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:20px;padding-bottom:18px;border-bottom:1px solid #1A1A2A;">
  <div style="width:52px;height:52px;border-radius:13px;background:${rB[acc.risk]};border:2px solid ${rC[acc.risk]};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
    <span style="font-family:'Space Mono',monospace;font-size:15px;font-weight:700;color:${rC[acc.risk]}">${acc.riskScore}</span>
  </div>
  <div style="flex:1;">
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:3px;">
      <h2 style="font-family:'Syne',sans-serif;font-size:20px;font-weight:800;color:#F0F0F0;margin:0;">${acc.id}</h2>
      <span style="padding:2px 9px;border-radius:20px;background:${rB[acc.risk]};border:1px solid ${rC[acc.risk]};color:${rC[acc.risk]};font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">${acc.risk}</span>
      ${acc.dormant?'<span style="padding:2px 9px;border-radius:20px;background:rgba(123,94,167,0.1);border:1px solid #7B5EA7;color:#7B5EA7;font-size:10px;font-weight:700;">DORMANT</span>':''}
    </div>
    <div style="color:#666;font-size:12px;">${acc.type} · Age ${acc.age} · Income: ${acc.income} · ${acc.riskLevel} Risk</div>
    <div style="color:#444;font-size:10px;font-family:'Space Mono',monospace;margin-top:2px;">Opened: ${acc.openDate||'—'} · Last Txn: ${acc.lastTxn||'—'}</div>
  </div>
  <button onclick="showAccountGraphModal('${acc.id}')"
    style="padding:7px 12px;background:linear-gradient(135deg,#E8660A,#F5A623);border:none;border-radius:7px;color:white;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap;flex-shrink:0;">
    View Graph ↗
  </button>
</div>

<!-- KPIs -->
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px;">
${[{l:'Inflow',v:`₹${totalIn.toLocaleString('en-IN')}`,c:'#00C48C'},{l:'Outflow',v:`₹${totalOut.toLocaleString('en-IN')}`,c:'#FF6B6B'},{l:'Transactions',v:accTxns.length,c:'#4F9EFF'},{l:'Connections',v:acc.connections,c:'#F5A623'}].map(k=>`
<div style="background:#0D0D0D;border:1px solid #1A1A2A;border-radius:9px;padding:12px 14px;">
  <div style="font-size:9px;color:#444;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px;">${k.l}</div>
  <div style="font-family:'Space Mono',monospace;font-size:13px;font-weight:700;color:${k.c};">${k.v}</div>
</div>`).join('')}
</div>

<!-- Fraud Flags -->
${(acc.structuring>0||acc.circles?.length>0||acc.dormant)?`
<div style="background:rgba(255,71,87,0.03);border:1px solid rgba(255,71,87,0.12);border-radius:9px;padding:12px 14px;margin-bottom:16px;">
  <div style="font-size:10px;color:#FF4757;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">⚠ Fraud Indicators</div>
  <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:${circleText.length?'10px':'0'};">
    ${acc.structuring>=2?`<span style="padding:3px 9px;background:rgba(255,71,87,0.08);border:1px solid rgba(255,71,87,0.25);border-radius:5px;font-size:10px;color:#FF4757;">${acc.structuring}× structuring</span>`:''}
    ${acc.circles?.length>0?`<span style="padding:3px 9px;background:rgba(245,166,35,0.08);border:1px solid rgba(245,166,35,0.25);border-radius:5px;font-size:10px;color:#F5A623;">${acc.circles.length} circular pattern${acc.circles.length>1?'s':''}</span>`:''}
    ${acc.dormant?`<span style="padding:3px 9px;background:rgba(123,94,167,0.08);border:1px solid rgba(123,94,167,0.25);border-radius:5px;font-size:10px;color:#7B5EA7;">Dormant + active txns</span>`:''}
  </div>
  ${circleText.length?`<div>${circleText.map(c=>`<div style="font-family:'Space Mono',monospace;font-size:9px;color:#F5A623;padding:3px 7px;background:#080810;border-radius:4px;margin-bottom:3px;">${c}</div>`).join('')}</div>`:''}
</div>`:''}

<!-- Two-col grid -->
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">

  <!-- Channels -->
  <div style="background:#0D0D0D;border:1px solid #1A1A2A;border-radius:9px;padding:12px 14px;">
    <div style="font-size:10px;color:#444;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Channels</div>
    ${Object.entries(channels).sort((a,b)=>b[1]-a[1]).map(([ch,cnt])=>{
      const pct=Math.round(cnt/accTxns.length*100);
      const chC={ATM:'#4F9EFF',NEFT:'#00C48C',UPI:'#F5A623',RTGS:'#FF6B6B',IMPS:'#7B5EA7'}[ch]||'#888';
      return `<div style="margin-bottom:7px;"><div style="display:flex;justify-content:space-between;margin-bottom:2px;"><span style="font-size:11px;color:#BBB;">${ch}</span><span style="font-family:'Space Mono',monospace;font-size:9px;color:#555;">${cnt} (${pct}%)</span></div><div style="height:3px;background:#1A1A1A;border-radius:2px;"><div style="height:3px;background:${chC};border-radius:2px;width:${pct}%;"></div></div></div>`;
    }).join('')}
  </div>

  <!-- Counterparties -->
  <div style="background:#0D0D0D;border:1px solid #1A1A2A;border-radius:9px;padding:12px 14px;overflow-y:auto;max-height:200px;">
    <div style="font-size:10px;color:#444;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Top Counterparties</div>
    ${topCP.map(([id,stat])=>{
      const cAcc=(typeof realAccounts!=='undefined'?realAccounts:accounts).find(a=>a.id===id);
      const cR=cAcc?.risk||'clean';
      const cC={fraud:'#FF4757',suspicious:'#F5A623',dormant:'#7B5EA7',clean:'#00C48C'}[cR];
      return `<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #111;cursor:pointer;" onclick="selectAEAccount('${id}')">
        <div><span style="font-family:'Space Mono',monospace;font-size:10px;color:#E8660A;">${id}</span><span style="font-size:9px;color:#444;margin-left:4px;">${stat.count}×</span></div>
        <div style="text-align:right;"><div style="font-family:'Space Mono',monospace;font-size:9px;color:#666;">₹${stat.total.toLocaleString('en-IN')}</div><div style="font-size:8px;color:${cC};text-transform:uppercase;">${cR}</div></div>
      </div>`;
    }).join('')}
  </div>
</div>

<!-- Transactions Table -->
<div style="background:#0D0D0D;border:1px solid #1A1A2A;border-radius:9px;padding:12px 14px;">
  <div style="font-size:10px;color:#444;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Top Transactions by Amount</div>
  <div style="overflow-x:auto;">
  <table style="width:100%;border-collapse:collapse;font-size:11px;">
    <thead><tr style="color:#444;font-size:9px;text-transform:uppercase;">
      <th style="text-align:left;padding:4px 6px;border-bottom:1px solid #1A1A2A;">ID</th>
      <th style="text-align:left;padding:4px 6px;border-bottom:1px solid #1A1A2A;">Dir</th>
      <th style="text-align:left;padding:4px 6px;border-bottom:1px solid #1A1A2A;">Counterparty</th>
      <th style="text-align:right;padding:4px 6px;border-bottom:1px solid #1A1A2A;">Amount</th>
      <th style="text-align:left;padding:4px 6px;border-bottom:1px solid #1A1A2A;">Ch</th>
      <th style="text-align:left;padding:4px 6px;border-bottom:1px solid #1A1A2A;">Branch</th>
      <th style="text-align:left;padding:4px 6px;border-bottom:1px solid #1A1A2A;">Time</th>
    </tr></thead>
    <tbody>
    ${recentTxns.map(t=>{
      const dir=t.source===accId?'OUT':'IN';
      const other=t.source===accId?t.target:t.source;
      const oA=(typeof realAccounts!=='undefined'?realAccounts:accounts).find(a=>a.id===other);
      const oR=oA?.risk||'clean';
      const oC={fraud:'#FF4757',suspicious:'#F5A623',dormant:'#7B5EA7',clean:'#00C48C'}[oR];
      return `<tr style="border-bottom:1px solid #111;">
        <td style="padding:5px 6px;font-family:'Space Mono',monospace;font-size:9px;color:#555;">${t.id}</td>
        <td style="padding:5px 6px;"><span style="font-size:9px;font-weight:700;color:${dir==='OUT'?'#FF6B6B':'#00C48C'}">${dir}</span></td>
        <td style="padding:5px 6px;"><span onclick="selectAEAccount('${other}')" style="font-family:'Space Mono',monospace;font-size:10px;color:#E8660A;cursor:pointer;">${other}</span><span style="font-size:8px;color:${oC};margin-left:3px;">${oR}</span></td>
        <td style="padding:5px 6px;text-align:right;font-family:'Space Mono',monospace;font-size:10px;color:#EEE;">₹${t.amount.toLocaleString('en-IN')}</td>
        <td style="padding:5px 6px;font-size:9px;color:#666;">${t.channel}</td>
        <td style="padding:5px 6px;font-size:9px;color:#555;">${t.branch}</td>
        <td style="padding:5px 6px;font-family:'Space Mono',monospace;font-size:9px;color:#444;">${t.time}</td>
      </tr>`;
    }).join('')}
    </tbody>
  </table>
  </div>
</div>
</div>`;
};

// ===================================================
// ACCOUNT GRAPH MODAL — D3 ego network
// ===================================================
window.showAccountGraphModal = function(accId) {
  document.getElementById('ae-graph-modal')?.remove();
  const overlay=document.createElement('div');
  overlay.id='ae-graph-modal';
  overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:9999;display:flex;align-items:center;justify-content:center;font-family:"DM Sans",sans-serif;';
  overlay.innerHTML=`<div style="background:#0D0D0D;border:1px solid #2A2A2A;border-radius:14px;width:88vw;max-width:880px;height:78vh;display:flex;flex-direction:column;overflow:hidden;">
<div style="padding:14px 18px;border-bottom:1px solid #1E1E2E;display:flex;align-items:center;justify-content:space-between;">
  <div><h3 style="font-family:'Syne',sans-serif;font-size:15px;font-weight:800;color:#F0F0F0;margin:0;">Transaction Network — <span style="color:#E8660A;">${accId}</span></h3>
  <p style="color:#444;font-size:10px;margin:2px 0 0;">Direct 1-hop connections · Drag nodes · Scroll to zoom · Click neighbor to view profile</p></div>
  <button onclick="document.getElementById('ae-graph-modal').remove()" style="width:30px;height:30px;border-radius:7px;border:1px solid #222;background:#111;color:#777;font-size:16px;cursor:pointer;">×</button>
</div>
<div id="ae-graph-canvas" style="flex:1;"></div>
</div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.remove();});
  setTimeout(()=>buildAccountGraph(accId),80);
};

window.buildAccountGraph = function(accId) {
  const canvas=document.getElementById('ae-graph-canvas');
  if(!canvas)return;
  const allAccounts=(typeof realAccounts!=='undefined')?realAccounts:accounts;
  const allTxns=(typeof realTransactions!=='undefined')?realTransactions:transactions;
  const W=canvas.offsetWidth||800;const H=canvas.offsetHeight||500;

  const relTxns=allTxns.filter(t=>t.source===accId||t.target===accId);
  const nIds=new Set([accId]);
  relTxns.forEach(t=>{nIds.add(t.source);nIds.add(t.target);});

  const nodes=allAccounts.filter(a=>nIds.has(a.id)).map(a=>({...a}));
  const links=relTxns.map(t=>({source:t.source,target:t.target,amount:t.amount,channel:t.channel}));
  const rC={fraud:'#FF4757',suspicious:'#F5A623',dormant:'#7B5EA7',clean:'#00C48C'};

  const svg=d3.select(canvas).append('svg').attr('width',W).attr('height',H).style('width','100%').style('height','100%');
  const g=svg.append('g');
  svg.call(d3.zoom().scaleExtent([0.2,6]).on('zoom',e=>g.attr('transform',e.transform)));

  const defs=svg.append('defs');
  const fl=defs.append('filter').attr('id','glowAE');
  fl.append('feGaussianBlur').attr('stdDeviation','5').attr('result','cb');
  const mg=fl.append('feMerge');mg.append('feMergeNode').attr('in','cb');mg.append('feMergeNode').attr('in','SourceGraphic');

  const sim=d3.forceSimulation(nodes)
    .force('link',d3.forceLink(links).id(d=>d.id).distance(d=>d.source.id===accId||d.target.id===accId?130:70))
    .force('charge',d3.forceManyBody().strength(-320))
    .force('center',d3.forceCenter(W/2,H/2))
    .force('collision',d3.forceCollide(26));

  const link=g.append('g').selectAll('line').data(links).enter().append('line')
    .attr('stroke',d=>{const s=nodes.find(n=>n.id===(d.source.id||d.source));const t=nodes.find(n=>n.id===(d.target.id||d.target));return(s?.risk==='fraud'||t?.risk==='fraud')?'rgba(255,71,87,0.5)':'rgba(79,158,255,0.22)';})
    .attr('stroke-width',d=>Math.max(1,Math.min(d.amount/80000,4)));

  const ng=g.append('g').selectAll('g').data(nodes).enter().append('g').style('cursor','pointer')
    .call(d3.drag()
      .on('start',(e,d)=>{if(!e.active)sim.alphaTarget(0.3).restart();d.fx=d.x;d.fy=d.y;})
      .on('drag', (e,d)=>{d.fx=e.x;d.fy=e.y;})
      .on('end',  (e,d)=>{if(!e.active)sim.alphaTarget(0);d.fx=null;d.fy=null;}));

  ng.append('circle')
    .attr('r',d=>d.id===accId?24:({fraud:13,suspicious:10,dormant:7,clean:9})[d.risk]||9)
    .attr('fill',d=>rC[d.risk]||'#888')
    .attr('stroke',d=>d.id===accId?'#E8660A':rC[d.risk]||'#888')
    .attr('stroke-width',d=>d.id===accId?3:2)
    .attr('stroke-opacity',0.5)
    .attr('filter',d=>(d.risk==='fraud'||d.id===accId)?'url(#glowAE)':'');

  ng.append('text')
    .text(d=>d.id)
    .attr('font-family','DM Mono, monospace').attr('font-size',d=>d.id===accId?'11px':'9px')
    .attr('fill',d=>d.id===accId?'#E8660A':'#AAA')
    .attr('font-weight',d=>d.id===accId?'700':'400')
    .attr('text-anchor','middle').attr('dy',d=>d.id===accId?38:24);

  ng.append('text')
    .text(d=>d.type||'')
    .attr('font-family','DM Sans, sans-serif').attr('font-size','8px')
    .attr('fill','#444').attr('text-anchor','middle')
    .attr('dy',d=>d.id===accId?50:34);

  ng.on('click',(e,d)=>{
    if(d.id!==accId){
      document.getElementById('ae-graph-modal')?.remove();
      selectAEAccount(d.id);
    }
  });

  sim.on('tick',()=>{
    link.attr('x1',d=>d.source.x).attr('y1',d=>d.source.y).attr('x2',d=>d.target.x).attr('y2',d=>d.target.y);
    ng.attr('transform',d=>`translate(${Math.max(28,Math.min(W-28,d.x))},${Math.max(28,Math.min(H-28,d.y))})`);
  });
};