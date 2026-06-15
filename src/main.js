import './style.css'
import { initAnimations } from './animations.js'
import campusAuditorium from './assets/campus-auditorium.jpg'
import auditoriumLayout from './assets/auditorium-layout.jpg'
import auditoriumRenderSide from './assets/auditorium-render-side.jpg'
import auditoriumRenderWide from './assets/auditorium-render-wide.jpg'
import mvPylee from './assets/MV Pylee.png'
import auditoriumTransformation from './assets/auditorium-transformation.png'
import auditoriumInterior from './assets/auditorium (1).png'
import smsLogo from './assets/SMS Logo.png'
import cusatLogo from './assets/Logo of CUSAT.jpg'
import smscusatLogo from './assets/smscusat.png'

const COMMITMENT_FORM_URL = ''
const DONATION_FORM_URL = ''

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

const scopeItems = [
  ['Civil works', 'Toilets, generator area, front porch, plumbing and sanitary work', '₹15.00L'],
  ['Ceiling', 'Gypsum ceiling for the auditorium main area', '₹6.50L'],
  ['Electrification & lighting', 'Lighting upgrades for an academic and event-ready hall', '₹11.00L'],
  ['Air-conditioning', 'Cooling and comfort improvements', '₹7.50L'],
  ['Flooring', 'PVC vinyl button flooring with laying', '₹1.50L'],
  ['Doors', 'Toughened glass doors with aluminium frame', '₹0.55L'],
  ['Echo-proofing', 'Wall panelling, window closure and soundproof panels', '₹6.50L'],
  ['Stage steps', 'Movable steps with castor wheels', '₹0.30L'],
  ['Front facade', 'Aluminium composite panel facade work', '₹2.25L'],
  ['Seating', 'Refurbishing existing auditorium seats', '₹7.50L'],
  ['Audio & video', 'Modern AV solution for learning and events', '₹11.00L'],
  ['Corridor beautification', 'Improved approach to the auditorium', '₹5.00L'],
  ['Generator', '40 KVA backup power', '₹8.00L'],
  ['Contingency', '10% project buffer', '₹8.26L'],
]

const contributionTiers = [
  { title: 'Diamond Patron', amount: '₹20 Lakhs & Above', recognition: 'Lead recognition and premier visibility across the auditorium', tier: 'diamond' },
  { title: 'Platinum Patron', amount: '₹10 – ₹20 Lakhs', recognition: 'Prominent recognition as a major institutional supporter', tier: 'platinum' },
  { title: 'Gold Patron', amount: '₹5 – ₹10 Lakhs', recognition: 'Major contributor recognition', tier: 'gold' },
  { title: 'Silver Patron', amount: '₹1 – ₹5 Lakhs', recognition: 'Valued supporter recognition', tier: 'silver' },
  { title: 'Friends of SMS', amount: 'Below ₹1 Lakh', recognition: 'Contributor acknowledgement certificate', tier: 'friends' },
]

const participationPaths = [
  ['Individual Alumni', 'A personal way to honour the place where journeys began, voices were found, and friendships became lifelong.'],
  ['Batch Contributions', 'Pool support batch-wise, build shared recognition, and make participation easier across graduating years.'],
  ['Corporate / CSR', 'Enable larger contributions through alumni-led organisations and institutional relationships.'],
  ['Friends of Prof. Pylee', 'Invite admirers, family, and well-wishers to be part of a lasting tribute to his extraordinary legacy.'],
]

const transparencyItems = [
  ['Financial transparency', 'Periodic updates on funds raised, allocation, utilisation, and batch/category-wise participation.'],
  ['Execution transparency', 'Milestone-based progress updates with visual documentation of the renovation journey.'],
  ['Governance transparency', 'Clear disclosure of project leadership, committee roles, contractor selection, and procurement processes.'],
  ['Audit and compliance', 'Independent audit and periodic financial reporting accessible to all contributors.'],
]

const icons = {
  seat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10"/><path d="M2 17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1H2v1z"/><path d="M8 19v2m8-2v2"/></svg>`,
  av: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>`,
  stage: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-4h6v4"/></svg>`,
  light: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/><circle cx="12" cy="12" r="4"/></svg>`,
  ac: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="8" rx="2"/><path d="M12 11v10m-4-4 4 4 4-4"/></svg>`,
  digital: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
  access: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="m9 11 3-3 3 3m-3-3v8m-3 0H6m6 0h3"/></svg>`,
  civil: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 7l9-4 9 4M4 10v11m16-11v11M9 21v-5h6v5"/></svg>`,
  bank: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 10v11M12 10v11M16 10v11"/></svg>`,
  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  school: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/><path d="M12 4v2m-3 4h6"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
}

function renderCta(label, url, className = '') {
  if (!url) {
    return `<button class="button ${className}" type="button" disabled>${label}<span>Coming soon</span></button>`
  }
  return `<a class="button ${className}" href="${url}" target="_blank" rel="noreferrer">${label}<span>Open Form</span></a>`
}

const html = `
  <header class="site-header">
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
    <nav aria-label="Campaign sections">
      <a href="#scope">Scope</a>
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
        <p class="eyebrow">SMS Auditorium Renovation Campaign · Since 1964</p>
        <h1 id="hero-title">Together, let us<br>rebuild what<br>built us.</h1>
        <p class="hero-copy">A collective alumni-led effort to transform the SMS auditorium into the Prof. M. V. Pylee Auditorium — a future-ready space for learning, leadership, memory, and pride.</p>
        <div class="hero-actions">
          ${renderCta('Make a Commitment', COMMITMENT_FORM_URL, 'primary')}
          ${renderCta('Complete Donation', DONATION_FORM_URL, 'secondary')}
        </div>
        ${!COMMITMENT_FORM_URL && !DONATION_FORM_URL ? '<p class="form-note">Form links will be connected shortly. Contact us to pledge now.</p>' : ''}
      </div>
      <div class="hero-stats-bar">
        <div class="hero-stat">
          <strong>₹90.86L</strong>
          <span>Campaign Target</span>
        </div>
        <div class="hero-stat-sep"></div>
        <div class="hero-stat">
          <strong>338</strong>
          <span>Proposed Seats</span>
        </div>
        <div class="hero-stat-sep"></div>
        <div class="hero-stat">
          <strong>#1</strong>
          <span>Non-IIM B-School in Kerala</span>
        </div>
        <div class="hero-stat-sep"></div>
        <div class="hero-stat">
          <strong>60+</strong>
          <span>Years of Legacy</span>
        </div>
      </div>
    </section>

    <div class="tagline-band">
      <div class="tagline-inner">
        <span class="tagline-label">Reimagining a CUSAT Landmark</span>
        <p>The SMS Auditorium has witnessed every beginning, celebration, and farewell since 1964. Today, we restore it together — for the generations ahead.</p>
      </div>
    </div>

    <section class="intro-band" aria-label="Campaign highlights">
      <div class="intro-stat">
        <span class="stat-number">#1</span>
        <h3>Non-IIM Business School in Kerala</h3>
        <p>Top 100 in India · NIRF 2025 · QS-ranked CUSAT ecosystem</p>
      </div>
      <div class="intro-stat">
        <span class="stat-number">60+</span>
        <h3>Years of Shared Legacy</h3>
        <p>A space remembered across every SMS generation since 1964</p>
      </div>
      <div class="intro-stat">
        <span class="stat-number">8,000+</span>
        <h3>Students in CUSAT Ecosystem</h3>
        <p>A vibrant, growing campus community this space will serve</p>
      </div>
      <div class="intro-stat">
        <span class="stat-number">338</span>
        <h3>Proposed Seats</h3>
        <p>A modern academic and cultural hall for future cohorts</p>
      </div>
    </section>

    <section class="section matters-section" aria-labelledby="matters-title">
      <p class="section-kicker">Why this project matters</p>
      <h2 id="matters-title">A hall, a tribute, and a platform for what comes next.</h2>
      <div class="matter-grid">
        <article class="matter-card">
          <div class="matter-num">01</div>
          <h3>Restore what built us</h3>
          <p>The auditorium shaped inductions, Talent Time, debates, farewells, and the stories every SMS batch carries forward.</p>
        </article>
        <article class="matter-card">
          <div class="matter-num">02</div>
          <h3>Honour who built SMS</h3>
          <p>Naming the renovated facility for Padma Bhushan Prof. M. V. Pylee creates a lasting tribute to the founder and pioneer of management education in Kerala.</p>
        </article>
        <article class="matter-card">
          <div class="matter-num">03</div>
          <h3>Enable what comes next</h3>
          <p>The renewed auditorium will support conferences, executive education, workshops, student development, and cultural life at CUSAT.</p>
        </article>
      </div>
    </section>

    <section class="transformation-section" aria-labelledby="transformation-title">
      <div class="transformation-inner">
        <div class="transformation-header">
          <p class="section-kicker">Before &amp; After</p>
          <h2 id="transformation-title">See what your support will make possible.</h2>
        </div>
        <div class="transformation-figure-wrap">
          <figure class="transformation-figure">
            <img src="${auditoriumTransformation}" alt="Before and after comparison of the SMS auditorium renovation" />
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
        </div>
      </div>
    </section>

    <section class="pylee-section" aria-labelledby="pylee-title">
      <div class="pylee-inner">
        <div class="pylee-left">
          <p class="section-kicker pylee-kicker">A Tribute to Our Founder</p>
          <h2 id="pylee-title">Padmabhushan<br>Prof. M. V. Pylee</h2>
          <div class="pylee-portrait-wrap">
            <img src="${mvPylee}" alt="Prof. M. V. Pylee, Founder Director of SMS CUSAT" class="pylee-portrait" />
          </div>
          <blockquote class="pylee-quote">
            "The visionary Founder Director of the School of Management Studies — Father of management education in Kerala and a mentor who shaped generations of leaders. His contributions extended far beyond the classroom, influencing academia, industry, and institutional development."
          </blockquote>
        </div>
        <div class="pylee-right">
          <div class="pylee-cred">
            <div class="pylee-cred-icon">${icons.award}</div>
            <div>
              <strong>Padma Bhushan</strong>
              <span>India's third highest civilian honour</span>
            </div>
          </div>
          <div class="pylee-cred">
            <div class="pylee-cred-icon">${icons.school}</div>
            <div>
              <strong>Founder Director, SMS CUSAT</strong>
              <span>Established the School of Management Studies in 1964</span>
            </div>
          </div>
          <div class="pylee-cred">
            <div class="pylee-cred-icon">${icons.book}</div>
            <div>
              <strong>Father of Management Education</strong>
              <span>In Kerala — six decades of shaping leaders</span>
            </div>
          </div>
          <div class="pylee-dedication">
            Renaming this auditorium in his honour is not just a gesture — it is a declaration of where we come from and who we aspire to be.
          </div>
        </div>
      </div>
    </section>

    <section class="split-section legacy-section" aria-labelledby="legacy-title">
      <div class="split-text">
        <p class="section-kicker">Legacy and future</p>
        <h2 id="legacy-title">More than a hall: a shared memory becoming a future-ready academic space.</h2>
        <p>The SMS auditorium has been a silent witness to thousands of beginnings, performances, ideas, celebrations, and farewells. Today, it no longer reflects the stature or aspirations of SMS. This renovation restores a beloved space while preparing it for new programmes, leadership events, and student experiences.</p>
        <ul class="legacy-list">
          <li>Academic conferences &amp; seminars</li>
          <li>Executive education &amp; part-time programmes</li>
          <li>Workshops, MDPs &amp; training programmes</li>
          <li>Student development &amp; cultural activities</li>
        </ul>
      </div>
      <figure>
        <img src="${auditoriumRenderWide}" alt="Proposed renovated auditorium interior" />
        <figcaption>Proposed auditorium interior concept</figcaption>
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

      <div class="scope-categories">
        ${scopeCategories.map(([title, desc, key]) => `
          <div class="scope-cat">
            <div class="scope-cat-icon">${icons[key]}</div>
            <h3>${title}</h3>
            <p>${desc}</p>
          </div>
        `).join('')}
      </div>

      <details class="scope-details">
        <summary>
          <span>View complete cost breakdown</span>
          <span class="details-chevron">${icons.chevron}</span>
        </summary>
        <div class="scope-detail-body">
          <div class="scope-layout">
            <figure>
              <img src="${auditoriumLayout}" alt="Proposed layout plan for the CUSAT auditorium renovation" />
              <figcaption>Proposed layout plan</figcaption>
            </figure>
            <div class="scope-list">
              ${scopeItems.map(([title, description, amount]) => `
                <article class="scope-item">
                  <div class="scope-item-text">
                    <h3>${title}</h3>
                    <p>${description}</p>
                  </div>
                  <strong class="scope-item-amount">${amount}</strong>
                </article>
              `).join('')}
              <article class="scope-item scope-total-row">
                <strong>Project Total</strong>
                <strong>₹90.86L</strong>
              </article>
            </div>
          </div>
        </div>
      </details>
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

    <section class="split-section participation-section" aria-labelledby="participation-title">
      <figure>
        <img src="${auditoriumRenderSide}" alt="Proposed auditorium side view with stage, seating and lectern" />
        <figcaption>Concept view of the renewed academic space</figcaption>
      </figure>
      <div class="split-text">
        <p class="section-kicker">Ways to participate</p>
        <h2 id="participation-title">Designed for alumni first, with room for every supporter.</h2>
        <div class="path-list">
          ${participationPaths.map(([title, description]) => `
            <article class="path-item">
              <h3>${title}</h3>
              <p>${description}</p>
            </article>
          `).join('')}
        </div>
      </div>
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
            <div class="bank-row"><dt>Account Number</dt><dd class="bank-mono">44972355745</dd></div>
            <div class="bank-row"><dt>IFSC Code</dt><dd class="bank-mono">SBIN0070235</dd></div>
          </dl>
          <p class="bank-note">Please share your name and batch year after transferring so we can acknowledge your contribution.</p>
        </div>
      </div>
    </section>

    <section class="final-cta" aria-labelledby="final-cta-title">
      <img src="${campusAuditorium}" alt="SMS CUSAT campus — home of the Prof. M. V. Pylee Auditorium" class="final-cta-bg" />
      <div class="final-cta-overlay"></div>
      <div class="final-cta-inner">
        <img src="${smscusatLogo}" alt="School of Management Studies, CUSAT" class="cta-institution-logo" />
        <p class="section-kicker">Let us come together</p>
        <h2 id="final-cta-title">Let us rebuild a space that has been part of all our journeys.</h2>
        <p>Your commitment helps honour Prof. M. V. Pylee, restore a space that shaped generations, and create an auditorium that will inspire the students who follow.</p>
        <div class="hero-actions">
          ${renderCta('Make a Commitment', COMMITMENT_FORM_URL, 'primary')}
          ${renderCta('Complete Donation', DONATION_FORM_URL, 'secondary')}
        </div>
        ${!COMMITMENT_FORM_URL && !DONATION_FORM_URL ? '<p class="form-note">Form links will be added when ready. Contact the campaign team in the meantime.</p>' : ''}
      </div>
    </section>

  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="${smsLogo}" alt="SMS CUSAT" class="footer-sms-logo" />
          <div>
            <strong>Prof. M. V. Pylee Auditorium</strong>
            <p>School of Management Studies<br>Cochin University of Science and Technology</p>
          </div>
        </div>
        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="#scope">Scope of Work</a>
          <a href="#tiers">Contribution Tiers</a>
          <a href="#transparency">Transparency</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <p>Funds are managed by the SMS Alumni Association. All contributions are subject to institutional governance and independent audit.</p>
        <p class="footer-tagline">Reimagining a CUSAT Landmark · Since 1964</p>
      </div>
    </div>
  </footer>
`

document.querySelector('#app').innerHTML = html
initAnimations()
