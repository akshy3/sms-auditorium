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
import brochurePdf from './assets/PROF. M V PYLEE AUDITORIUM.pdf?url'
import { icons, contributionTiers, COMMITMENT_FORM_URL, renderCta } from './shared.js'

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

const transparencyItems = [
  ['Financial transparency', 'Periodic updates on funds raised, allocation, utilisation, and batch/category-wise participation.'],
  ['Execution transparency', 'Milestone-based progress updates with visual documentation of the renovation journey.'],
  ['Governance transparency', 'Clear disclosure of project leadership, committee roles, contractor selection, and procurement processes.'],
  ['Audit and compliance', 'Independent audit and periodic financial reporting accessible to all contributors.'],
]

const smsToday = [
  ['trophy', 'NIRF 2025', '#1 Non-IIM Business School in Kerala', 'Ranked among the top 100 business schools in India out of 4,000+ institutions as per NIRF 2025.'],
  ['trending', 'Value', "One of India's Highest ROI Propositions", "In management education, powered by CUSAT's NIRF Rank 32 and QS-ranked ecosystem."],
  ['star', 'Excellence', 'Academic Rigor, Industry Relevance, Affordability', 'Recognised across decades as the defining advantage that sets SMS graduates apart.'],
]

const auditoriumMemories = [
  'Where journeys began with induction programmes',
  'Where voices were discovered on stage',
  'Where felicitation and cultural events came alive',
  'Where ideas were debated and celebrated',
  'Where friendships were formed and farewells became unforgettable',
]

const html = `
  <header class="site-header">
    <div class="header-top">
      <a class="brand" href="#top" aria-label="SMS Auditorium Renovation home">
        <div class="brand-logos">
          <img src="${smsLogo}" alt="SMS CUSAT" class="brand-logo-img" />
          <img src="${cusatLogo}" alt="Cochin University of Science and Technology" class="brand-cusat-img" />
        </div>
        <div class="brand-text">
          <strong>SMS Auditorium Renovation</strong>
          <small>as Prof. M. V. Pylee Auditorium</small>
        </div>
      </a>
      <button class="nav-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="site-nav">
        <span class="nav-bar"></span>
        <span class="nav-bar"></span>
        <span class="nav-bar"></span>
      </button>
    </div>
    <nav id="site-nav" aria-label="Site navigation">
      <a href="#scope">The Renovation</a>
      <a href="#transparency">Transparency</a>
      <a href="#contact">Contact</a>
      <a href="${brochurePdf}" download="Prof-MV-Pylee-Auditorium-Brochure.pdf">Brochure</a>
      <p class="nav-cta-label">Be part of this restoration.</p>
      <a href="./join.html" class="nav-cta">Be Part of This</a>
    </nav>
  </header>

  <main id="top">

    <section class="hero-section" aria-labelledby="hero-title">
      <img src="${auditoriumInterior}" alt="The proposed Prof. M. V. Pylee Auditorium interior: modern seating, stage and warm lighting" />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="eyebrow">Rebuilding a Legacy</p>
        <h1 id="hero-title">Together, let us<br>rebuild what<br>built us.</h1>
        <p class="hero-copy">The SMS Auditorium has witnessed every beginning, celebration, and farewell since 1964. Today, as alumni, we restore it together, transforming it into the Prof. M. V. Pylee Auditorium, a future-ready space for learning, leadership, memory, and pride. This hall was there for your first day, your debates, your farewells. Now it is our turn to be there for it.</p>
        <div class="hero-actions">
          <a class="button primary" href="./join.html">Be Part of This<span>See how to give</span></a>
        </div>
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
            "The visionary Founder Director of the School of Management Studies, Father of management education in Kerala and a mentor who shaped generations of leaders. His contributions extended far beyond the classroom, influencing academia, industry, and institutional development."
          </blockquote>
        </div>
        <div class="pylee-right">
          <div class="pylee-dedication">
            Renaming this auditorium in his honour is not just a gesture. It is a declaration of where we come from and who we aspire to be.
          </div>
        </div>
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
        <p class="section-kicker">The SMS Auditorium</p>
        <h2 id="legacy-title">This hall shaped every one of us.</h2>
        <ul class="legacy-list">
          ${auditoriumMemories.map(m => `<li>${m}</li>`).join('\n          ')}
        </ul>
      </div>
      <figure>
        <img src="${smsBuilding}" alt="School of Management Studies, CUSAT campus" loading="lazy" />
        <figcaption>School of Management Studies, CUSAT · Since 1964</figcaption>
      </figure>
    </section>

    <section class="section scope-section" id="scope" aria-labelledby="scope-title">
      <div class="scope-header">
        <div>
          <p class="section-kicker">The Renovation</p>
          <h2 id="scope-title">What we're rebuilding, and why.</h2>
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
        Left: The SMS Auditorium as it stands today: worn seating, bare walls, ageing infrastructure. &nbsp;·&nbsp; Right: The proposed Prof. M. V. Pylee Auditorium: modern seating, warm lighting, a dignified stage.
      </figcaption>

    </section>

    <section class="section sms-today-section" aria-labelledby="sms-today-title">
      <p class="section-kicker">SMS CUSAT Today</p>
      <h2 id="sms-today-title">Your alma mater has only grown stronger.</h2>
      <div class="sms-today-grid">
        ${smsToday.map(([icon, label, title, desc]) => `
          <article class="sms-today-card">
            <div class="sms-today-icon">${icons[icon]}</div>
            <p class="sms-today-label">${label}</p>
            <h3>${title}</h3>
            <p>${desc}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="section transparency-section" id="transparency" aria-labelledby="transparency-title">
      <p class="section-kicker">Transparency and governance</p>
      <h2 id="transparency-title">Trust is built into how this works.</h2>
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
      <h2 id="contact-title">Reach the team directly.</h2>
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
    </section>

    <section class="section tiers-section" id="tiers" aria-labelledby="tiers-title">
      <p class="section-kicker">Contribution tiers</p>
      <h2 id="tiers-title">Every name will be remembered.</h2>
      <p class="tiers-intro">Choose a level that reflects your connection to SMS CUSAT. Every contribution, large or small, will be acknowledged and remembered.</p>
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

    <section class="final-cta" aria-labelledby="final-cta-title">
      <img src="${campusAuditorium}" alt="SMS CUSAT campus, home of the Prof. M. V. Pylee Auditorium" class="final-cta-bg" loading="lazy" />
      <div class="final-cta-overlay"></div>
      <div class="final-cta-inner">
        <img src="${smscusatLogo}" alt="School of Management Studies, CUSAT" class="cta-institution-logo" loading="lazy" />
        <p class="section-kicker">Let us come together</p>
        <h2 id="final-cta-title">Let us rebuild a space that has been part of all our journeys.</h2>
        <p>Your commitment helps honour Prof. M. V. Pylee, restore a space that shaped generations, and create an auditorium that will inspire the students who follow.</p>
        <div class="hero-actions">
          <a class="button primary" href="./join.html">Be Part of This<span>See how to give</span></a>
        </div>
      </div>
    </section>

  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="${smsLogo}" alt="SMS CUSAT" class="footer-sms-logo" loading="lazy" />
          <div>
            <strong>SMS Auditorium Renovation</strong>
            <p>as Prof. M. V. Pylee Auditorium<br>School of Management Studies · CUSAT</p>
          </div>
        </div>
        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="#scope">The Renovation</a>
          <a href="./join.html">Be Part of This</a>
          <a href="#transparency">Transparency</a>
          <a href="#contact">Contact</a>
          <a href="${brochurePdf}" download="Prof-MV-Pylee-Auditorium-Brochure.pdf">Download Brochure</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <p>Funds are managed by the SMS Alumni Association. All contributions are subject to institutional governance and independent audit.</p>
        <p class="footer-tagline">Rebuilding a Legacy</p>
      </div>
    </div>
  </footer>
`

document.querySelector('#app').innerHTML = html
initAnimations()
