import './style.css'
import campusAuditorium from './assets/campus-auditorium.jpg'
import auditoriumLayout from './assets/auditorium-layout.jpg'
import auditoriumRenderSide from './assets/auditorium-render-side.jpg'
import auditoriumRenderWide from './assets/auditorium-render-wide.jpg'

const COMMITMENT_FORM_URL = ''
const DONATION_FORM_URL = ''

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
  ['Legacy Title Sponsor', '₹20 Lakhs & Above', 'Lead recognition and premier visibility'],
  ['Platinum Patron', '₹10 - ₹20 Lakhs', 'Prominent recognition'],
  ['Gold Patron', '₹5 - ₹10 Lakhs', 'Major contributor recognition'],
  ['Silver Patron', '₹1 - ₹5 Lakhs', 'Valued supporter recognition'],
  ['Friends of SMS', 'Below ₹1 Lakh', 'Contributor acknowledgement certificate'],
]

const participationPaths = [
  ['Individual Alumni', 'A personal way to honour the place where journeys began, voices were found, and friendships became lifelong.'],
  ['Batch Contributions', 'Pool support batch-wise, build shared recognition, and make participation easier across graduating years.'],
  ['Corporate / CSR', 'Enable larger contributions through alumni-led organisations and institutional relationships.'],
  ['Friends of Prof. Pylee', 'Invite admirers, family, and well-wishers to be part of a lasting tribute.'],
]

const transparencyItems = [
  ['Financial transparency', 'Periodic updates on funds raised, allocation, utilisation, and batch/category-wise participation.'],
  ['Execution transparency', 'Milestone-based progress updates with visual documentation of the renovation journey.'],
  ['Governance transparency', 'Clear disclosure of project leadership, committee roles, contractor selection, and procurement processes.'],
  ['Audit and compliance', 'Independent audit and periodic financial reporting accessible to contributors.'],
]

function renderCta(label, url, className = '') {
  if (!url) {
    return `<button class="button ${className}" type="button" disabled>${label}<span>Coming soon</span></button>`
  }

  return `<a class="button ${className}" href="${url}" target="_blank" rel="noreferrer">${label}<span>Open Google Form</span></a>`
}

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="SMS Auditorium campaign home">
      <span class="brand-mark">SMS</span>
      <span>
        <strong>Prof. M. V. Pylee Auditorium</strong>
        <small>School of Management Studies, CUSAT</small>
      </span>
    </a>
    <nav aria-label="Campaign sections">
      <a href="#scope">Scope</a>
      <a href="#tiers">Contribute</a>
      <a href="#transparency">Transparency</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero-section" aria-labelledby="hero-title">
      <img src="${campusAuditorium}" alt="SMS campus building with the Dr. M. V. Pylee Memorial Auditorium sign" />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="eyebrow">SMS Auditorium Renovation Campaign</p>
        <h1 id="hero-title">Together, let us rebuild what built us.</h1>
        <p class="hero-copy">
          A collective alumni-led effort to transform the SMS auditorium into the
          Prof. M. V. Pylee Auditorium: a future-ready space for learning,
          leadership, memory, and pride.
        </p>
        <div class="hero-actions">
          ${renderCta('Make a Commitment', COMMITMENT_FORM_URL, 'primary')}
          ${renderCta('Complete Donation', DONATION_FORM_URL, 'secondary')}
        </div>
        <p class="form-note">Google Forms for pledges and completed donations will be connected shortly.</p>
      </div>
      <aside class="target-card" aria-label="Fundraising target">
        <span>Campaign target</span>
        <strong>₹90.86L</strong>
        <p>Detailed project estimate including contingency.</p>
      </aside>
    </section>

    <section class="intro-band" aria-label="Campaign highlights">
      <div>
        <span>1</span>
        <h2>Non-IIM business school in Kerala</h2>
        <p>SMS continues to stand out for value, rigor, and outcomes.</p>
      </div>
      <div>
        <span>60+</span>
        <h2>Years of shared legacy</h2>
        <p>A space remembered across generations of SMS students.</p>
      </div>
      <div>
        <span>338</span>
        <h2>Proposed seats</h2>
        <p>A modern academic and event hall for future cohorts.</p>
      </div>
    </section>

    <section class="section matters" aria-labelledby="matters-title">
      <div class="section-kicker">Why this project matters</div>
      <h2 id="matters-title">A hall, a tribute, and a platform for what comes next.</h2>
      <div class="matter-grid">
        <article>
          <span>01</span>
          <h3>Restore what built us</h3>
          <p>The auditorium shaped inductions, Talent Time, debates, farewells, and the stories every SMS batch carries forward.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Honour who built SMS</h3>
          <p>Naming the renovated facility for Padma Bhushan Prof. M. V. Pylee creates a lasting tribute to the founder and pioneer.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Enable what comes next</h3>
          <p>The renewed auditorium will support conferences, executive education, workshops, student development, and cultural life.</p>
        </article>
      </div>
    </section>

    <section class="split-section legacy-section" aria-labelledby="legacy-title">
      <div>
        <p class="section-kicker">Legacy and future</p>
        <h2 id="legacy-title">More than a hall: a shared memory becoming a future-ready academic space.</h2>
        <p>
          The SMS auditorium has been a silent witness to thousands of beginnings,
          performances, ideas, celebrations, and farewells. Today, it no longer
          reflects the stature or aspirations of SMS. This renovation restores a
          beloved space while preparing it for new programmes, leadership events,
          and student experiences.
        </p>
      </div>
      <figure>
        <img src="${auditoriumRenderWide}" alt="Proposed renovated auditorium interior with seating and lighting" />
        <figcaption>Proposed auditorium interior concept</figcaption>
      </figure>
    </section>

    <section class="section scope-section" id="scope" aria-labelledby="scope-title">
      <div class="section-heading">
        <p class="section-kicker">Use of funds</p>
        <h2 id="scope-title">A detailed ₹90.86L estimate for a complete renovation.</h2>
      </div>
      <div class="scope-layout">
        <figure>
          <img src="${auditoriumLayout}" alt="Proposed layout plan for the CUSAT auditorium renovation" />
          <figcaption>Proposed layout plan</figcaption>
        </figure>
        <div class="scope-list">
          ${scopeItems
            .map(
              ([title, description, amount]) => `
                <article>
                  <div>
                    <h3>${title}</h3>
                    <p>${description}</p>
                  </div>
                  <strong>${amount}</strong>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section tiers-section" id="tiers" aria-labelledby="tiers-title">
      <div class="section-heading">
        <p class="section-kicker">Contribution tiers</p>
        <h2 id="tiers-title">Structured recognition for every scale of support.</h2>
      </div>
      <div class="tier-grid">
        ${contributionTiers
          .map(
            ([title, amount, recognition]) => `
              <article>
                <h3>${title}</h3>
                <strong>${amount}</strong>
                <p>${recognition}</p>
              </article>
            `,
          )
          .join('')}
      </div>
      <p class="tier-note">Recognition may include donor plaques, named sections, seating rows, audio systems, air-conditioning, stage elements, and digital acknowledgements, subject to institutional policy.</p>
    </section>

    <section class="split-section participation-section" aria-labelledby="participation-title">
      <figure>
        <img src="${auditoriumRenderSide}" alt="Proposed auditorium side view with stage, seating and lectern" />
        <figcaption>Concept view of the renewed academic space</figcaption>
      </figure>
      <div>
        <p class="section-kicker">Ways to participate</p>
        <h2 id="participation-title">Designed for alumni first, with room for every supporter.</h2>
        <div class="path-list">
          ${participationPaths
            .map(
              ([title, description]) => `
                <article>
                  <h3>${title}</h3>
                  <p>${description}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section transparency-section" id="transparency" aria-labelledby="transparency-title">
      <div class="section-heading">
        <p class="section-kicker">Transparency and governance</p>
        <h2 id="transparency-title">Trust is part of the campaign architecture.</h2>
      </div>
      <div class="transparency-grid">
        ${transparencyItems
          .map(
            ([title, description]) => `
              <article>
                <h3>${title}</h3>
                <p>${description}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="final-cta" aria-labelledby="final-cta-title">
      <p class="section-kicker">Let us come together</p>
      <h2 id="final-cta-title">Let us rebuild a space that has been part of all our journeys.</h2>
      <p>
        Your commitment helps honour Prof. M. V. Pylee, restore a space that shaped
        generations, and create an auditorium that will inspire the students who follow.
      </p>
      <div class="hero-actions">
        ${renderCta('Make a Commitment', COMMITMENT_FORM_URL, 'primary')}
        ${renderCta('Complete Donation', DONATION_FORM_URL, 'secondary')}
      </div>
      <p class="form-note">Form links will be added when the pledge and donation workflows are ready.</p>
    </section>
  </main>
`
