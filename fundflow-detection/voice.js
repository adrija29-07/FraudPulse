// ===================================================
// VOICE.JS — Voice-Guided Investigation
// Uses: Web Speech API (SpeechRecognition + SpeechSynthesis)
// Features:
//   - Intent classification → graph actions
//   - Graph highlights on voice command
//   - TTS reads back top findings
// ===================================================

let recognition = null;
let voiceActive = false;
let selectedNodeForVoice = null;

const voiceIntents = [
  { patterns: ['fraud', 'show fraud', 'highlight fraud', 'fraud accounts'], action: 'highlightFraud' },
  { patterns: ['suspicious', 'show suspicious', 'flag suspicious'], action: 'highlightSuspicious' },
  { patterns: ['investigation', 'open investigation', 'investigate', 'go to investigation'], action: 'openInvestigation' },
  { patterns: ['graph', 'show graph', 'open graph', 'go to graph'], action: 'openGraph' },
  { patterns: ['dashboard', 'go to dashboard', 'home'], action: 'openDashboard' },
  { patterns: ['ring one', 'ring 1', 'fraud ring', 'show rings', 'open rings'], action: 'openRings' },
  { patterns: ['alerts', 'show alerts', 'open alerts'], action: 'openAlerts' },
  { patterns: ['reports', 'open reports', 'generate report', 'fiu report'], action: 'openReports' },
  { patterns: ['flow', 'money flow', 'show flow', 'play flow'], action: 'openFlow' },
  { patterns: ['read findings', 'read alerts', 'what is flagged', 'top findings', 'read'], action: 'readFindings' },
  { patterns: ['risk one', 'risk a001', 'rajesh', 'rajesh mehta'], action: 'highlightA001' },
  { patterns: ['shell corp', 'a002', 'shell corporation'], action: 'highlightA002' },
  { patterns: ['mule', 'mule account', 'a016', 'mule x1'], action: 'highlightA016' },
  { patterns: ['stop', 'cancel', 'close voice', 'stop listening'], action: 'stop' },
  { patterns: ['zoom in', 'zoom'], action: 'zoomIn' },
  { patterns: ['zoom out', 'zoom back'], action: 'zoomOut' },
];

function classifyIntent(transcript) {
  const lower = transcript.toLowerCase().trim();
  for (const intent of voiceIntents) {
    for (const pattern of intent.patterns) {
      if (lower.includes(pattern)) return intent.action;
    }
  }
  return null;
}

function executeVoiceAction(action, transcript) {
  const modal = document.getElementById('voiceModal');
  if (modal) modal.classList.add('flash-match');
  setTimeout(() => { if (modal) modal.classList.remove('flash-match'); }, 500);

  switch (action) {
    case 'highlightFraud':
      if (typeof triggerFraudFlash === 'function') {
        const fraudIds = (typeof accounts !== 'undefined')
          ? accounts.filter(a => a.risk === 'fraud').map(a => a.id)
          : ['A001', 'A002', 'A012', 'A016'];
        triggerFraudFlash(fraudIds);
      }
      switchView('graph');
      speak('Highlighting ' + (typeof accounts !== 'undefined' ? accounts.filter(a => a.risk === 'fraud').length : 4) + ' fraud accounts on the graph.');
      break;
    case 'highlightSuspicious':
      switchView('graph');
      speak('Highlighting suspicious accounts. 4 accounts flagged with risk scores above 55.');
      break;
    case 'openInvestigation': switchView('investigation'); speak('Opening investigation suite for case FD-2026-00842.'); break;
    case 'openGraph': switchView('graph'); speak('Opening transaction graph view.'); break;
    case 'openDashboard': switchView('dashboard'); speak('Opening dashboard.'); break;
    case 'openRings': switchView('rings'); speak('Opening fraud ring detection view. 2 confirmed rings detected.'); break;
    case 'openAlerts': switchView('alerts'); speak('Opening alert queue. 12 active alerts.'); break;
    case 'openReports': switchView('reports'); speak('Opening FIU report generator.'); break;
    case 'openFlow': switchView('flow'); setTimeout(playMoneyFlow, 500); speak('Opening money flow animation.'); break;
    case 'readFindings': readTopFindings(); break;
    case 'highlightA001':
      switchView('graph');
      speak('Highlighting A001 Rajesh Mehta Enterprises. Risk score 84 out of 100. Round-trip pattern detected with 3.07 times income mismatch.');
      break;
    case 'highlightA002':
      switchView('graph');
      speak('Highlighting A002 Shell Corp A. Risk score 92 out of 100. No declared business purpose. Registered 3 months ago.');
      break;
    case 'highlightA016':
      switchView('graph');
      speak('Highlighting A016 Mule Account X1. Risk score 95 out of 100. 45 lakh rupees flowing through a student savings account.');
      break;
    case 'zoomIn':
      speak('Zooming in on the graph.');
      break;
    case 'zoomOut':
      speak('Zooming out.');
      break;
    case 'stop': stopVoice(); return;
    default:
      speak('I heard: ' + transcript + '. I am not sure what to do with that. Try saying: show fraud, open investigation, or read findings.');
  }
  updateVoiceTranscript('Done: ' + transcript);
}

function readTopFindings() {
  const findings = [
    'Finding 1: Circular fund flow detected across 4 accounts totaling 18 lakh 45 thousand rupees. Round-trip completed in 8 hours 40 minutes. Confidence: 94 percent.',
    'Finding 2: Structuring detected. Two ATM withdrawals of 49,900 and 49,800 rupees, both below the 50,000 rupee reporting threshold.',
    'Finding 3: Mule account X1 shows 45 lakh rupees flowing through a savings account declared at only 1 lakh 80 thousand income — a 25 times income mismatch.',
  ];
  const text = findings.join(' ');
  speak(text);
  updateVoiceTranscript('Reading top 3 findings...');
}

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1.0;
  utterance.volume = 0.9;
  // Prefer a clear voice
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(v => v.name.includes('Google') || v.name.includes('Neural') || v.lang === 'en-IN');
  if (preferred) utterance.voice = preferred;
  window.speechSynthesis.speak(utterance);
}

function updateVoiceTranscript(text) {
  const t1 = document.getElementById('voiceTranscript');
  const t2 = document.getElementById('voiceModalTranscript');
  if (t1) t1.textContent = text;
  if (t2) t2.textContent = text;
}

function toggleVoice() {
  if (voiceActive) { stopVoice(); return; }
  startVoice();
}

function startVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('Voice recognition is not supported in this browser. Please use Chrome or Edge.');
    return;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-IN';

  recognition.onstart = () => {
    voiceActive = true;
    const btn = document.getElementById('voiceBtn');
    if (btn) btn.classList.add('listening');
    const bar = document.getElementById('voiceStatusBar');
    if (bar) bar.style.display = 'flex';
    const modal = document.getElementById('voiceModal');
    if (modal) modal.style.display = 'flex';
    updateVoiceTranscript('Listening...');
    speak('Voice investigation active. How can I help?');
  };

  recognition.onresult = (e) => {
    let interim = '';
    let final = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) {
        final += e.results[i][0].transcript;
      } else {
        interim += e.results[i][0].transcript;
      }
    }
    updateVoiceTranscript(final || interim);
    if (final) {
      const action = classifyIntent(final);
      if (action) {
        executeVoiceAction(action, final.trim());
      } else {
        speak('Command not recognised: ' + final);
      }
    }
  };

  recognition.onerror = (e) => {
    if (e.error === 'not-allowed') {
      alert('Microphone permission denied. Please allow microphone access and try again.');
    }
    stopVoice();
  };

  recognition.onend = () => {
    if (voiceActive) recognition.start(); // keep listening
  };

  recognition.start();
}

function stopVoice() {
  voiceActive = false;
  if (recognition) { recognition.stop(); recognition = null; }
  window.speechSynthesis.cancel();
  const btn = document.getElementById('voiceBtn');
  if (btn) btn.classList.remove('listening');
  const bar = document.getElementById('voiceStatusBar');
  if (bar) bar.style.display = 'none';
  const modal = document.getElementById('voiceModal');
  if (modal) modal.style.display = 'none';
}

function askAIAboutNode() {
  const name = document.getElementById('nodeName')?.textContent;
  const id = document.getElementById('nodeId')?.textContent;
  if (!name || name === 'Account Name') return;
  toggleAIChat();
  setTimeout(() => {
    const input = document.getElementById('aiChatInput');
    if (input) {
      input.value = 'Why is ' + name + ' (' + id + ') suspicious? Give a forensic analysis with citations.';
      sendAIMessage();
    }
  }, 400);
}