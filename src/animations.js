export function initAnimations() {
  initScrollReveal()
  initCounters()
  initScrollProgress()
  initHeaderScroll()
  initMobileNav()
  initScrollSpy()
}

// ── SCROLL REVEAL ──────────────────────────────────────────────────────────
function initScrollReveal() {
  // Group staggered selectors by their parent so each grid resets delay counter
  const staggered = [
    '.matter-card',
    '.intro-stat',
    '.tier-card',
    '.scope-cat',
    '.transparency-card',
    '.contact-card',
    '.pylee-cred',
    '.path-item',
  ]

  // Non-staggered singles
  const singles = [
    '.tagline-inner',
    '.split-section figure',
    '.pylee-portrait-wrap',
    '.pylee-quote',
    '.pylee-dedication',
    '.bank-card',
    '.legacy-list',
    '.scope-total-badge',
    '.scope-details',
    '.tiers-intro',
    '.tier-note',
    '.footer-top',
  ]

  staggered.forEach(sel => {
    const parents = new Map()
    document.querySelectorAll(sel).forEach(el => {
      const p = el.parentElement
      if (!parents.has(p)) parents.set(p, [])
      parents.get(p).push(el)
    })
    parents.forEach(children => {
      children.forEach((el, i) => {
        el.classList.add('reveal')
        el.style.setProperty('--reveal-delay', `${i * 90}ms`)
      })
    })
  })

  singles.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'))
  })

  // Section headings get a slide-left reveal
  document.querySelectorAll('.section-kicker').forEach(el => {
    el.classList.add('reveal', 'reveal-left')
  })
  document.querySelectorAll('h2:not(#hero-title)').forEach(el => {
    el.classList.add('reveal', 'reveal-up-md')
  })

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  )

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
}

// ── COUNTERS ───────────────────────────────────────────────────────────────
function initCounters() {
  const DURATION = 1800

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3) }

  function animateCounter(el) {
    const raw = el.textContent.trim()

    // Parse: optional prefix (#), digits+commas, optional suffix (+, L, K)
    const m = raw.match(/^([#₹]?)([\d,]+(?:\.\d+)?)([L+K]*)$/)
    if (!m || m[1] === '#') return  // skip #1 — it's not a real counter

    const [, prefix, numStr, suffix] = m
    const target = parseFloat(numStr.replace(/,/g, ''))
    if (!isFinite(target) || target === 0) return

    const isDecimal = numStr.includes('.')
    const decimals = isDecimal ? numStr.split('.')[1].length : 0
    const start = performance.now()

    function tick(now) {
      const t = Math.min((now - start) / DURATION, 1)
      const val = target * easeOutCubic(t)
      const formatted = isDecimal
        ? val.toFixed(decimals)
        : Math.round(val).toLocaleString('en-IN')
      el.textContent = `${prefix}${formatted}${suffix}`
      if (t < 1) requestAnimationFrame(tick)
      else el.textContent = raw
    }

    requestAnimationFrame(tick)
  }

  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target)
          obs.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.6 }
  )

  document.querySelectorAll('.stat-number').forEach(el => obs.observe(el))
}

// ── SCROLL PROGRESS ────────────────────────────────────────────────────────
function initScrollProgress() {
  const bar = document.createElement('div')
  bar.className = 'scroll-progress'
  bar.setAttribute('aria-hidden', 'true')
  document.body.prepend(bar)

  function update() {
    const scrolled = window.scrollY
    const total = document.documentElement.scrollHeight - window.innerHeight
    bar.style.transform = `scaleX(${total > 0 ? scrolled / total : 0})`
  }

  window.addEventListener('scroll', update, { passive: true })
  update()
}

// ── HEADER ON SCROLL ───────────────────────────────────────────────────────
function initHeaderScroll() {
  const header = document.querySelector('.site-header')
  if (!header) return

  window.addEventListener(
    'scroll',
    () => header.classList.toggle('scrolled', window.scrollY > 80),
    { passive: true }
  )
}

// ── MOBILE NAV ─────────────────────────────────────────────────────────────
function initMobileNav() {
  const header = document.querySelector('.site-header')
  const toggle = document.querySelector('.nav-toggle')
  const nav    = document.querySelector('#site-nav')
  if (!header || !toggle || !nav) return

  function isOpen() { return header.classList.contains('nav-open') }

  function open() {
    header.classList.add('nav-open')
    toggle.setAttribute('aria-expanded', 'true')
    toggle.setAttribute('aria-label', 'Close navigation menu')
  }

  function close() {
    header.classList.remove('nav-open')
    toggle.setAttribute('aria-expanded', 'false')
    toggle.setAttribute('aria-label', 'Open navigation menu')
  }

  toggle.addEventListener('click', () => isOpen() ? close() : open())

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close))

  document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen()) close() })

  document.addEventListener('click', e => {
    if (isOpen() && !header.contains(e.target)) close()
  })
}

// ── SCROLL SPY ─────────────────────────────────────────────────────────────
function initScrollSpy() {
  const sectionIds = ['scope', 'tiers', 'transparency', 'contact']
  const links = sectionIds.map(id => document.querySelector(`.site-header nav a[href="#${id}"]`))
  const sections = sectionIds.map(id => document.getElementById(id))

  function update() {
    const threshold = window.scrollY + 100
    let current = -1
    sections.forEach((el, i) => { if (el && el.offsetTop <= threshold) current = i })
    links.forEach((link, i) => link?.classList.toggle('nav-active', i === current))
  }

  window.addEventListener('scroll', update, { passive: true })
  update()
}
