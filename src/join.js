import './style.css'
import { initAnimations } from './animations.js'
import smsLogo from './assets/SMS Logo.png?format=webp&lossless=true'
import cusatLogo from './assets/Logo of CUSAT.jpg?format=webp&quality=82'
import QRCode from 'qrcode'
import { COMMITMENT_FORM_URL, DONATION_FORM_URL, UPI_URL, contributionTiers, renderCta, icons } from './shared.js'

const html = `
  <header class="site-header">
    <div class="header-top">
      <a class="brand" href="./" aria-label="SMS Auditorium Renovation home">
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
      <a href="./">← Campaign</a>
      <a href="#tiers">Tiers</a>
      <a href="#contact">Contact</a>
      <a href="${COMMITMENT_FORM_URL}" target="_blank" rel="noreferrer" class="nav-cta">I want to commit</a>
    </nav>
  </header>

  <main id="top">

    <section class="give-intro" aria-labelledby="give-title">
      <p class="section-kicker">Join the Campaign</p>
      <h1 id="give-title">Your contribution<br>builds something<br>that lasts.</h1>
      <p class="give-lead">The Prof. M. V. Pylee Auditorium renovation is an alumni-led effort to restore a space that shaped every one of us. Every contribution — at any level — becomes part of the hall's lasting legacy.</p>
      <div class="give-paths">
        <div class="give-path">
          <div class="give-path-icon">${icons.award}</div>
          <strong>Make a commitment</strong>
          <p>Pledge your intent to give. We'll reach out to coordinate your contribution at a time that works for you.</p>
        </div>
        <div class="give-path">
          <div class="give-path-icon">${icons.bank}</div>
          <strong>Transfer now</strong>
          <p>Ready to give today? Transfer via bank or UPI, then confirm with a short form — takes under 5 minutes.</p>
        </div>
      </div>
      <div class="give-intro-actions">
        ${renderCta('I want to commit', COMMITMENT_FORM_URL, 'primary', 'Fill the form')}
        <button class="button secondary" type="button" data-open-modal="donation">I want to donate<span>See how to pay</span></button>
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
          <a href="./">Campaign</a>
          <a href="#tiers">Contribution Tiers</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <p>Funds are managed by the SMS Alumni Association. All contributions are subject to institutional governance and independent audit.</p>
        <p class="footer-tagline">Rebuilding a Legacy</p>
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
                <canvas class="upi-qr" aria-label="UPI QR code for SMS Infrastructure Development"></canvas>
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
              ? `<a class="button primary modal-cta" href="${DONATION_FORM_URL}" target="_blank" rel="noreferrer">I've made my transfer<span>Upload receipt</span></a>`
              : `<button class="button primary modal-cta" type="button" disabled>I've made my transfer<span>Coming soon</span></button>`}
          </div>
        </li>
      </ol>
    </div>
  </div>
`

document.querySelector('#app').innerHTML = html
initAnimations()

QRCode.toCanvas(document.querySelector('.upi-qr'), UPI_URL, {
  width: 160,
  margin: 2,
  color: { dark: '#1a2245', light: '#fffef9' },
})
