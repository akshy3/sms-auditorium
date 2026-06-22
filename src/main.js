import './style.css'
import { initAnimations } from './animations.js'
import campusAuditorium from './assets/campus-auditorium.jpg?format=webp&quality=82'
import smsBuilding from './assets/sms.png?format=webp&quality=82'
import mvPylee from './assets/MV Pylee.png?format=webp&quality=82'
import auditoriumTransformation from './assets/auditorium-transformation.png?format=webp&quality=82'
import auditoriumInterior from './assets/auditorium (1).png?format=webp&quality=82'
import smsLogo from './assets/SMS Logo.png?format=webp&lossless=true'
import cusatLogo from './assets/Logo of CUSAT.jpg?format=webp&quality=82'
import smscusatLogo from './assets/smscusat.png?format=webp&lossless=true'

const COMMITMENT_FORM_URL = 'https://forms.gle/f9nAfvDYh3UQ4uhX8'
const DONATION_FORM_URL = 'https://forms.gle/RaiL2NQ4xJ8MWcab9'

const scopeCategories = [
  ['Seating Refurbishment', 'Refurbishing all auditorium seating for comfort and longevity', 'seat'],
  ['Audio-visual Upgrades', 'Modern AV solution for learning and events', 'av'],
  ['Stage Redesign', 'Stage enhancement and movable steps with facade work', 'stage'],
  ['Lighting & Acoustics', 'Lighting upgrades, echo-proofing and sound panels', 'light'],
  ['Air-conditioning', 'Cooling, ventilation and ceiling improvements', 'ac'],
  ['Digital Infrastructure', 'Technology integration for a smart academic hall', 'digital'],
  ['Accessibility', 'Enhancements for universal access and usability', 'access'],
  ['Civil & Plumbing', 'Toilets, plumbing, generator area and civil works', 'civil'],
]


const contributionTiers = [
  { title: 'Diamond Patron', amount: '₹20 Lakhs & Above', recognition: 'Lead recognition and premier visibility across the auditorium', tier: 'diamond' },
  { title: 'Platinum Patron', amount: '₹10 – ₹20 Lakhs', recognition: 'Prominent recognition as a major institutional supporter', tier: 'platinum' },
  { title: 'Gold Patron', amount: '₹5 – ₹10 Lakhs', recognition: 'Major contributor recognition', tier: 'gold' },
  { title: 'Silver Patron', amount: '₹1 – ₹5 Lakhs', recognition: 'Valued supporter recognition', tier: 'silver' },
  { title: 'Friends of SMS', amount: 'Below ₹1 Lakh', recognition: 'Contributor acknowledgement certificate', tier: 'friends' },
]


const transparencyItems = [
  ['Financial transparency', 'Periodic updates on funds raised, allocation, utilisation, and batch/category-wise participation.'],
  ['Execution transparency', 'Milestone-based progress updates with visual documentation of the renovation journey.'],
  ['Governance transparency', 'Clear disclosure of project leadership, committee roles, contractor selection, and procurement processes.'],
  ['Audit and compliance', 'Independent audit and periodic financial reporting accessible to all contributors.'],
]

const icons = {
  seat: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10"/><path d="M2 17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1H2v1z"/><path d="M8 19v2m8-2v2"/></svg>`,
  av: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>`,
  stage: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-4h6v4"/></svg>`,
  light: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/><circle cx="12" cy="12" r="4"/></svg>`,
  ac: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="8" rx="2"/><path d="M12 11v10m-4-4 4 4 4-4"/></svg>`,
  digital: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
  access: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="m9 11 3-3 3 3m-3-3v8m-3 0H6m6 0h3"/></svg>`,
  civil: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 7l9-4 9 4M4 10v11m16-11v11M9 21v-5h6v5"/></svg>`,
  bank: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 10v11M12 10v11M16 10v11"/></svg>`,
  award: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  school: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/><path d="M12 4v2m-3 4h6"/></svg>`,
  book: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  chevron: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  copy: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  trophy: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
  trending: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  star: `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
}

const smsCredentials = [
  ['trophy', 'NIRF 2025', '#1 Non-IIM Business School in Kerala', 'Ranked among the top 100 business schools in India out of 4,000+ institutions as per NIRF 2025.'],
  ['trending', 'Value', "One of India's Highest ROI Propositions", "In management education, powered by CUSAT's NIRF Rank 32 and QS-ranked ecosystem."],
  ['star', 'Excellence', 'Academic Rigor, Industry Relevance, Affordability', 'Recognised across decades as the defining advantage that sets SMS graduates apart.'],
]

const qrPlaceholderSvg = `<svg class="qr-placeholder-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <rect x="5" y="5" width="28" height="28" rx="2" fill="currentColor"/>
  <rect x="10" y="10" width="18" height="18" rx="1" fill="white"/>
  <rect x="14" y="14" width="10" height="10" fill="currentColor"/>
  <rect x="67" y="5" width="28" height="28" rx="2" fill="currentColor"/>
  <rect x="72" y="10" width="18" height="18" rx="1" fill="white"/>
  <rect x="76" y="14" width="10" height="10" fill="currentColor"/>
  <rect x="5" y="67" width="28" height="28" rx="2" fill="currentColor"/>
  <rect x="10" y="72" width="18" height="18" rx="1" fill="white"/>
  <rect x="14" y="76" width="10" height="10" fill="currentColor"/>
  <rect x="40" y="5" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="50" y="5" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="60" y="5" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="40" y="14" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="50" y="14" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="40" y="23" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="60" y="23" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="5" y="40" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="14" y="40" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="23" y="40" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="40" y="40" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="50" y="40" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="60" y="40" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="70" y="40" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="80" y="40" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="89" y="40" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="5" y="50" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="23" y="50" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="40" y="50" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="60" y="50" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="80" y="50" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="5" y="60" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="14" y="60" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="40" y="60" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="50" y="60" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="70" y="60" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="89" y="60" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="40" y="70" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="60" y="70" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="80" y="70" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="40" y="80" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="50" y="80" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="89" y="80" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="40" y="89" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <rect x="60" y="89" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="70" y="89" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
</svg>`

function renderCta(label, url, className = '', modalId = '') {
  if (modalId) {
    return `<button class="button ${className}" type="button" data-open-modal="${modalId}">${label}<span>How to pay</span></button>`
  }
  if (!url) {
    return `<button class="button ${className}" type="button" disabled>${label}<span>Coming soon</span></button>`
  }
  return `<a class="button ${className}" href="${url}" target="_blank" rel="noreferrer">${label}<span>Open Form</span></a>`
}

const html = `
  <header class="site-header">
    <div class="header-top">
      <a class="brand" href="#top" aria-label="SMS Auditorium campaign home">
        <div class="brand-logos">
          <img src="${smsLogo}" alt="SMS CUSAT" class="brand-logo-img" />
          <img src="${cusatLogo}" alt="Cochin University of Science and Technology" class="brand-cusat-img" />
        </div>
        <div class="brand-text">
          <strong>Prof. M. V. Pylee Auditorium</strong>
          <small>School of Management Studies · CUSAT</small>
        </div>
      </a>
      <button class="nav-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="site-nav">
        <span class="nav-bar"></span>
        <span class="nav-bar"></span>
        <span class="nav-bar"></span>
      </button>
    </div>
    <nav id="site-nav" aria-label="Campaign sections">
      <a href="#scope">Use of Funds</a>
      <a href="#tiers">Contribute</a>
      <a href="#transparency">Transparency</a>
      <a href="#contact">Contact</a>
      <a href="#tiers" class="nav-cta">Donate Now</a>
    </nav>
  </header>

  <main id="top">

    <section class="hero-section" aria-labelledby="hero-title">
      <img src="${auditoriumInterior}" alt="The proposed Prof. M. V. Pylee Auditorium interior — modern seating, stage and warm lighting" />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="eyebrow">SMS Auditorium Renovation Campaign</p>
        <h1 id="hero-title">Together, let us<br>rebuild what<br>built us.</h1>
        <p class="hero-copy">A collective alumni-led effort to transform the SMS auditorium into the Prof. M. V. Pylee Auditorium — a future-ready space for learning, leadership, memory, and pride.</p>
        <div class="hero-actions">
          ${renderCta('Make a Commitment', COMMITMENT_FORM_URL, 'primary')}
          ${renderCta('Complete Donation', DONATION_FORM_URL, 'secondary', 'donation')}
        </div>
        ${!COMMITMENT_FORM_URL ? '<p class="form-note">Commitment form coming soon. Contact us to pledge now.</p>' : ''}
      </div>
    </section>

    <section class="pylee-section" aria-labelledby="pylee-title">
      <div class="pylee-inner">
        <div class="pylee-left">
          <p class="section-kicker pylee-kicker">A Tribute to Our Founder</p>
          <h2 id="pylee-title">Padma Bhushan<br>Prof. M. V. Pylee</h2>
          <div class="pylee-portrait-wrap">
            <img src="${mvPylee}" alt="Prof. M. V. Pylee, Founder Director of SMS CUSAT" class="pylee-portrait" loading="lazy" />
          </div>
          <blockquote class="pylee-quote">
            "The visionary Founder Director of the School of Management Studies — Father of management education in Kerala and a mentor who shaped generations of leaders. His contributions extended far beyond the classroom, influencing academia, industry, and institutional development."
          </blockquote>
        </div>
        <div class="pylee-right">
          <div class="pylee-dedication">
            Renaming this auditorium in his honour is not just a gesture — it is a declaration of where we come from and who we aspire to be.
          </div>
        </div>
      </div>
    </section>

    <div class="tagline-band">
      <div class="tagline-inner">
        <span class="tagline-label">Reimagining a CUSAT Landmark</span>
        <p>The SMS Auditorium has witnessed every beginning, celebration, and farewell since 1964. Today, we restore it together — for the generations ahead.</p>
      </div>
    </div>


    <section class="section sms-section" aria-labelledby="sms-title">
      <div class="sms-header">
        <div>
          <p class="section-kicker">About SMS CUSAT</p>
          <h2 id="sms-title">Advancing management excellence.</h2>
        </div>
        <div class="sms-since-badge">Since<br>1964</div>
      </div>
      <div class="sms-cred-grid">
        ${smsCredentials.map(([icon, label, title, desc]) => `
          <article class="sms-cred-card">
            <div class="sms-cred-icon">${icons[icon]}</div>
            <p class="sms-cred-label">${label}</p>
            <h3>${title}</h3>
            <p>${desc}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="section matters-section" aria-labelledby="matters-title">
      <p class="section-kicker">Why this project matters</p>
      <h2 id="matters-title">A hall, a tribute, and<br>a platform for what comes next.</h2>
      <div class="matter-grid">
        <article class="matter-card">
          <div class="matter-icon">${icons.school}</div>
          <div class="matter-num">01</div>
          <h3>Restore what built us</h3>
          <p>The auditorium shaped inductions, Talent Time, debates, farewells, and the stories every SMS batch carries forward.</p>
        </article>
        <article class="matter-card">
          <div class="matter-icon">${icons.award}</div>
          <div class="matter-num">02</div>
          <h3>Honour who built SMS</h3>
          <p>Naming the renovated facility for Padma Bhushan Prof. M. V. Pylee creates a lasting tribute to the founder and pioneer of management education in Kerala.</p>
        </article>
        <article class="matter-card">
          <div class="matter-icon">${icons.trending}</div>
          <div class="matter-num">03</div>
          <h3>Enable what comes next</h3>
          <p>The renewed auditorium will support conferences, executive education, workshops, student development, and cultural life at CUSAT.</p>
        </article>
      </div>
    </section>

    <section class="split-section legacy-section" aria-labelledby="legacy-title">
      <div class="split-text">
        <p class="section-kicker">Legacy and future</p>
        <h2 id="legacy-title">More than a hall: a shared memory becoming a future-ready academic space.</h2>
        <p>CUSAT's earliest and most cherished auditorium, the SMS Auditorium stands as a defining landmark in the university's journey — a centre stage for knowledge, culture, and collaboration across generations. Today, within a vibrant CUSAT ecosystem of 8,000+ students, this iconic space is being reimagined to further elevate its role as a modern hub for:</p>
        <ul class="legacy-list">
          <li>Academic conferences &amp; seminars</li>
          <li>Executive education &amp; part-time programmes</li>
          <li>Regular meetings of professional bodies</li>
          <li>Workshops, MDPs &amp; training programmes</li>
          <li>Student development &amp; cultural activities</li>
        </ul>
      </div>
      <figure>
        <img src="${smsBuilding}" alt="School of Management Studies, CUSAT campus" loading="lazy" />
        <figcaption>School of Management Studies, CUSAT</figcaption>
      </figure>
    </section>

    <section class="section scope-section" id="scope" aria-labelledby="scope-title">
      <div class="scope-header">
        <div>
          <p class="section-kicker">Use of funds</p>
          <h2 id="scope-title">A comprehensive ₹90.86L renovation.</h2>
        </div>
        <div class="scope-total-badge">
          <span>Total Estimate</span>
          <strong>₹90.86 Lakhs</strong>
        </div>
      </div>

      <figure class="transformation-figure">
        <img src="${auditoriumTransformation}" alt="Before and after comparison of the SMS auditorium renovation" loading="lazy" />
        <div class="transform-label transform-label-before">
          <span>Before</span>
          <p>Current state</p>
        </div>
        <div class="transform-label transform-label-after">
          <span>After</span>
          <p>Proposed renovation</p>
        </div>
        <div class="transform-divider" aria-hidden="true"></div>
      </figure>
      <figcaption class="transformation-caption">
        Left: The SMS Auditorium as it stands today — worn seating, bare walls, ageing infrastructure. &nbsp;·&nbsp; Right: The proposed Prof. M. V. Pylee Auditorium — modern seating, warm lighting, a dignified stage.
      </figcaption>

      <div class="scope-categories">
        ${scopeCategories.map(([title, desc, key]) => `
          <div class="scope-cat">
            <div class="scope-cat-icon">${icons[key]}</div>
            <h3>${title}</h3>
            <p>${desc}</p>
          </div>
        `).join('')}
      </div>

    </section>

    <section class="section tiers-section" id="tiers" aria-labelledby="tiers-title">
      <p class="section-kicker">Contribution tiers</p>
      <h2 id="tiers-title">Every name will be remembered.</h2>
      <p class="tiers-intro">Structured recognition for every scale of support — from individuals to institutions.</p>
      <div class="tier-grid">
        ${contributionTiers.map(({ title, amount, recognition, tier }) => `
          <article class="tier-card tier-${tier}">
            <div class="tier-mark"></div>
            <h3>${title}</h3>
            <strong class="tier-amount">${amount}</strong>
            <p>${recognition}</p>
          </article>
        `).join('')}
      </div>
      <p class="tier-note">Recognition may include donor plaques, named sections, seating rows, audio systems, air-conditioning, stage elements, and digital acknowledgements, subject to institutional policy.</p>
    </section>


    <section class="section transparency-section" id="transparency" aria-labelledby="transparency-title">
      <p class="section-kicker">Transparency and governance</p>
      <h2 id="transparency-title">Trust is part of the campaign architecture.</h2>
      <div class="transparency-grid">
        ${transparencyItems.map(([title, description], i) => `
          <article class="transparency-card">
            <div class="transparency-num">${String(i + 1).padStart(2, '0')}</div>
            <h3>${title}</h3>
            <p>${description}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="section contact-section" id="contact" aria-labelledby="contact-title">
      <p class="section-kicker">Get in touch</p>
      <h2 id="contact-title">Reach the campaign team directly.</h2>
      <div class="contact-grid">
        <div class="contact-people">
          <article class="contact-card">
            <div class="contact-avatar">BA</div>
            <div class="contact-info">
              <strong>Mr. Baiju Ambadan</strong>
              <p>President, SMS Alumni Association</p>
              <a href="tel:+919447755222">+91 94477 55222</a>
            </div>
          </article>
          <article class="contact-card">
            <div class="contact-avatar">ME</div>
            <div class="contact-info">
              <strong>Prof. (Dr.) Manoj Edward</strong>
              <p>Treasurer, SMS Alumni Association</p>
              <a href="tel:+919846280535">+91 98462 80535</a>
              <a href="mailto:manojedw@gmail.com">manojedw@gmail.com</a>
            </div>
          </article>
        </div>
        <div class="bank-card">
          <div class="bank-card-header">
            ${icons.bank}
            <strong>Bank Transfer Details</strong>
          </div>
          <dl class="bank-dl">
            <div class="bank-row"><dt>Account Name</dt><dd>SMS Infrastructure Development</dd></div>
            <div class="bank-row"><dt>Bank</dt><dd>State Bank of India</dd></div>
            <div class="bank-row"><dt>Branch</dt><dd>Cochin University Campus Branch</dd></div>
            <div class="bank-row"><dt>Account Number</dt><dd class="bank-mono">44972355745<button class="copy-btn" data-copy="44972355745" aria-label="Copy account number">${icons.copy}</button></dd></div>
            <div class="bank-row"><dt>IFSC Code</dt><dd class="bank-mono">SBIN0070235<button class="copy-btn" data-copy="SBIN0070235" aria-label="Copy IFSC code">${icons.copy}</button></dd></div>
          </dl>
          <p class="bank-note">Please share your name and batch year after transferring so we can acknowledge your contribution.</p>
        </div>
      </div>
    </section>

    <section class="final-cta" aria-labelledby="final-cta-title">
      <img src="${campusAuditorium}" alt="SMS CUSAT campus — home of the Prof. M. V. Pylee Auditorium" class="final-cta-bg" loading="lazy" />
      <div class="final-cta-overlay"></div>
      <div class="final-cta-inner">
        <img src="${smscusatLogo}" alt="School of Management Studies, CUSAT" class="cta-institution-logo" loading="lazy" />
        <p class="section-kicker">Let us come together</p>
        <h2 id="final-cta-title">Let us rebuild a space that has been part of all our journeys.</h2>
        <p>Your commitment helps honour Prof. M. V. Pylee, restore a space that shaped generations, and create an auditorium that will inspire the students who follow.</p>
        <div class="hero-actions">
          ${renderCta('Make a Commitment', COMMITMENT_FORM_URL, 'primary')}
          ${renderCta('Complete Donation', DONATION_FORM_URL, 'secondary', 'donation')}
        </div>
        ${!COMMITMENT_FORM_URL ? '<p class="form-note">Commitment form coming soon. Contact the campaign team in the meantime.</p>' : ''}
      </div>
    </section>

  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="${smsLogo}" alt="SMS CUSAT" class="footer-sms-logo" loading="lazy" />
          <div>
            <strong>Prof. M. V. Pylee Auditorium</strong>
            <p>School of Management Studies<br>Cochin University of Science and Technology</p>
          </div>
        </div>
        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="#scope">Use of Funds</a>
          <a href="#tiers">Contribution Tiers</a>
          <a href="#transparency">Transparency</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <p>Funds are managed by the SMS Alumni Association. All contributions are subject to institutional governance and independent audit.</p>
        <p class="footer-tagline">Reimagining a CUSAT Landmark</p>
      </div>
    </div>
  </footer>

  <div class="modal-overlay" id="donation-modal" role="dialog" aria-modal="true" aria-labelledby="donation-modal-title" hidden>
    <div class="modal-box" tabindex="-1">
      <button class="modal-close" aria-label="Close">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>

      <div class="modal-header">
        <p class="section-kicker">Step by step</p>
        <h2 id="donation-modal-title">How to complete your donation</h2>
      </div>

      <ol class="modal-steps">
        <li class="modal-step">
          <div class="modal-step-num">01</div>
          <div class="modal-step-body">
            <h3>Transfer your contribution</h3>
            <p>Use the bank details below or scan the QR code to pay via UPI.</p>
            <div class="modal-payment">
              <dl class="modal-bank-dl">
                <div class="modal-bank-row"><dt>Account Name</dt><dd>SMS Infrastructure Development</dd></div>
                <div class="modal-bank-row"><dt>Bank</dt><dd>State Bank of India</dd></div>
                <div class="modal-bank-row"><dt>Branch</dt><dd>Cochin University Campus Branch</dd></div>
                <div class="modal-bank-row"><dt>Account No.</dt><dd class="modal-mono">44972355745</dd></div>
                <div class="modal-bank-row"><dt>IFSC</dt><dd class="modal-mono">SBIN0070235</dd></div>
              </dl>
              <div class="modal-qr">
                <div class="modal-qr-inner">
                  ${qrPlaceholderSvg}
                  <div class="modal-qr-badge">QR coming soon</div>
                </div>
                <p class="modal-qr-label">Scan to pay via UPI</p>
              </div>
            </div>
          </div>
        </li>

        <li class="modal-step">
          <div class="modal-step-num">02</div>
          <div class="modal-step-body">
            <h3>Screenshot your payment confirmation</h3>
            <p>Take a screenshot of the success screen from your UPI app or bank. You will need to upload it in the next step — keep it handy.</p>
          </div>
        </li>

        <li class="modal-step">
          <div class="modal-step-num">03</div>
          <div class="modal-step-body">
            <h3>Confirm your donation</h3>
            <p>Fill in your name, batch year, and transaction reference, then upload the screenshot so we can acknowledge your contribution.</p>
            ${DONATION_FORM_URL
              ? `<a class="button primary modal-cta" href="${DONATION_FORM_URL}" target="_blank" rel="noreferrer">Confirm my donation<span>Open Form</span></a>`
              : `<button class="button primary modal-cta" type="button" disabled>Confirm my donation<span>Coming soon</span></button>`}
          </div>
        </li>
      </ol>
    </div>
  </div>
`

document.querySelector('#app').innerHTML = html
initAnimations()
