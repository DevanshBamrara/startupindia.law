/* ==========================================================================
   STARTUPINDIA.LAW — "THE SANCTUARY"
   Final Monochromatic Sacred Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initFrame1Bell();
  initFrame2Corridor();
  initFrame4Gallery();
  initFrame5Wisdom();
  initFrame7Events();
  initFrame8Offering();
});

/* ==========================================================================
   1. QUIET CURSOR CONTROLLER
   ========================================================================== */
function initCustomCursor() {
  const dot = document.getElementById('cursorDot');
  if (!dot) return;

  window.addEventListener('mousemove', (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
  });
}

/* ==========================================================================
   2. FRAME 1: THE BELL
   ========================================================================== */
function initFrame1Bell() {
  const vessel = document.getElementById('queryVessel');
  const placeholder = document.getElementById('vesselPlaceholder');
  const activeContent = document.getElementById('vesselActiveContent');
  const revealedQuestions = document.getElementById('revealedQuestions');
  const questionLines = document.querySelectorAll('.question-line');
  const vesselEmailForm = document.getElementById('vesselEmailForm');
  const vesselConfirmation = document.getElementById('vesselConfirmation');
  const vesselPromptText = document.getElementById('vesselPromptText');

  if (!vessel) return;

  let isRevealed = false;

  vessel.addEventListener('click', revealQuestions);
  vessel.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      revealQuestions();
    }
  });

  function revealQuestions() {
    if (isRevealed) return;
    isRevealed = true;
    vessel.setAttribute('aria-expanded', 'true');
    revealedQuestions.classList.remove('hidden');

    questionLines.forEach((line, index) => {
      line.style.opacity = '0';
      line.style.transform = 'translateY(10px)';
      line.style.transition = `opacity 500ms var(--ease-temple) ${index * 120}ms, transform 500ms var(--ease-temple) ${index * 120}ms`;

      setTimeout(() => {
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
      }, 50);
    });
  }

  questionLines.forEach((line) => {
    line.addEventListener('click', (e) => {
      e.stopPropagation();
      const questionText = line.getAttribute('data-question');
      transformVesselToEmail(questionText);
    });

    line.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const questionText = line.getAttribute('data-question');
        transformVesselToEmail(questionText);
      }
    });
  });

  function transformVesselToEmail(selectedQuestion) {
    placeholder.classList.add('hidden');
    activeContent.classList.remove('hidden');

    if (selectedQuestion) {
      vesselPromptText.textContent = `Regarding "${selectedQuestion}" — leave your email and we respond within a sunrise.`;
    }

    const emailInput = document.getElementById('vesselEmailInput');
    if (emailInput) emailInput.focus();
  }

  if (vesselEmailForm) {
    vesselEmailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      activeContent.classList.add('hidden');
      vesselConfirmation.classList.remove('hidden');
    });
  }
}

/* ==========================================================================
   3. FRAME 2: CORRIDOR WITH ARROWS & KEYBOARD NAVIGATION
   ========================================================================== */
function initFrame2Corridor() {
  const track = document.getElementById('corridorTrack');
  const prevBtn = document.getElementById('corridorPrev');
  const nextBtn = document.getElementById('corridorNext');
  const tallyMarks = document.querySelectorAll('.tally-mark');

  if (!track) return;

  const getScrollStep = () => track.clientWidth;

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    });
  }

  // Keyboard Left / Right Navigation
  window.addEventListener('keydown', (e) => {
    const rect = track.getBoundingClientRect();
    const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (isInViewport || document.activeElement === track) {
      if (e.key === 'ArrowLeft') {
        track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
      } else if (e.key === 'ArrowRight') {
        track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
      }
    }
  });

  // Tally Marks Sync
  track.addEventListener('scroll', () => {
    if (!tallyMarks.length) return;
    const scrollLeft = track.scrollLeft;
    const itemWidth = track.clientWidth;
    const activeIndex = Math.min(
      tallyMarks.length - 1,
      Math.max(0, Math.round(scrollLeft / itemWidth))
    );

    tallyMarks.forEach((mark, i) => {
      if (i === activeIndex) {
        mark.classList.add('active');
      } else {
        mark.classList.remove('active');
      }
    });
  });
}

/* ==========================================================================
   4. FRAME 4: GALLERY DRAWERS
   ========================================================================== */
function initFrame4Gallery() {
  const mysteryLinks = document.querySelectorAll('.vitrine-mystery-link');

  mysteryLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('data-target');
      const drawer = document.getElementById(targetId);

      if (drawer) {
        drawer.classList.toggle('hidden');
      }
    });
  });

  const drawerForms = document.querySelectorAll('.drawer-form');
  drawerForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const parentDrawer = form.closest('.vitrine-drawer');
      if (parentDrawer) {
        parentDrawer.innerHTML = '<p class="drawer-text" style="color:#1A1A1A;">&#10003; Case study sent to your email.</p>';
      }
    });
  });
}

/* ==========================================================================
   5. FRAME 5: WISDOM POOL REVELATIONS & COUNTER
   ========================================================================== */
function initFrame5Wisdom() {
  const revelations = document.querySelectorAll('.wisdom-revelation');
  const counterElement = document.getElementById('counterNumber');
  let hasCounted = false;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');

            if (entry.target.id === 'rev-1' && !hasCounted && counterElement) {
              hasCounted = true;
              animateCounter(counterElement, 0, 113000, 2000);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    revelations.forEach((rev) => observer.observe(rev));
  } else {
    revelations.forEach((rev) => rev.classList.add('in-view'));
  }

  function animateCounter(element, start, end, duration) {
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentVal = Math.floor(start + (end - start) * progress);

      element.textContent = currentVal.toLocaleString('en-IN') + '+';

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }
}

/* ==========================================================================
   6. FRAME 7: EVENTS SLIDER WITH ARROWS
   ========================================================================== */
function initFrame7Events() {
  const sliderTrack = document.getElementById('eventsSlider');
  const prevBtn = document.getElementById('eventsPrev');
  const nextBtn = document.getElementById('eventsNext');

  if (sliderTrack) {
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        sliderTrack.scrollBy({ left: -320, behavior: 'smooth' });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        sliderTrack.scrollBy({ left: 320, behavior: 'smooth' });
      });
    }
  }

  const eventCards = document.querySelectorAll('.event-card');
  const modal = document.getElementById('eventModal');
  const modalTitle = document.getElementById('eventModalTitle');
  const modalMeta = document.getElementById('eventModalMeta');
  const modalDesc = document.getElementById('eventModalDesc');
  const modalClose = document.getElementById('eventModalClose');

  const eventData = {
    sine: {
      title: "SINE — IIT Bombay",
      meta: "Technology Business Incubator • IIT Bombay",
      desc: "Invited keynote and legal clinic on technology law strategies, patent defensive publishing, and corporate structure for deep-tech innovators."
    },
    boeing: {
      title: "Boeing BUILD 3.0",
      meta: "Boeing University Innovation Leadership Development • Aerospace & Defense",
      desc: "Comprehensive workshop on IP fundamentals, patent protection, and licensing agreements tailored for aerospace and defense tech founders."
    },
    roorkee: {
      title: "IIT Roorkee",
      meta: "Entrepreneurship Development Cell • IIT Roorkee",
      desc: "Expert panel on innovation protection, university IP commercialization, and founder equity structures."
    },
    cii: {
      title: "CII — Confederation of Indian Industry",
      meta: "National IPR Conference • Confederation of Indian Industry",
      desc: "Keynote on IPR awareness, trademark valuation, and patent enforcement for Indian MSMEs and technopreneurs."
    },
    les: {
      title: "LES APAC Conference",
      meta: "Licensing Executives Society Asia-Pacific",
      desc: "Address on 'IP Drives the Bottom Line' — cross-border technology licensing, patent valuation, and M&A transactions."
    },
    iic: {
      title: "Institution's Innovation Council",
      meta: "Ministry of Education Innovation Cell",
      desc: "Strategy session on building robust IP ecosystems and incubation legal compliance in higher education institutes."
    },
    its: {
      title: "ITS Engineering College, Greater Noida",
      meta: "Entrepreneurship & Venture Capital Summit • Greater Noida",
      desc: "Session on Angel Investment term sheets, VC due diligence readiness, and founder vesting frameworks."
    }
  };

  eventCards.forEach((card) => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-event');
      const data = eventData[key];

      if (data && modal) {
        modalTitle.textContent = data.title;
        modalMeta.textContent = data.meta;
        modalDesc.textContent = data.desc;
        modal.classList.remove('hidden');
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => modal.classList.add('hidden'));
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
}

/* ==========================================================================
   7. FRAME 8: SCHEME MODALS
   ========================================================================== */
function initFrame8Offering() {
  const schemeItems = document.querySelectorAll('.scheme-item');
  const modal = document.getElementById('schemeModal');
  const modalTitle = document.getElementById('schemeModalTitle');
  const modalDesc = document.getElementById('schemeModalDesc');
  const modalClose = document.getElementById('schemeModalClose');

  const schemeData = {
    sisfs: {
      title: "Startup India Seed Fund Scheme (SISFS)",
      desc: "Financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization with grants up to ₹20 Lakhs and convertible debentures up to ₹50 Lakhs.",
      link: "https://seedfund.startupindia.gov.in"
    },
    gujarat: {
      title: "Gujarat Startup & Innovation Scheme",
      desc: "Sustained mentorship, IP filing assistance up to ₹3 Lakhs for national patents and ₹10 Lakhs for international patents, alongside monthly sustenance allowances for early-stage Gujarat founders.",
      link: "https://startup.gujarat.gov.in"
    },
    msme: {
      title: "MSME Innovative Scheme",
      desc: "Comprehensive support encompassing Incubation, Design expertise, and Intellectual Property Rights (IPR) reimbursement for registered micro, small, and medium enterprises.",
      link: "https://msme.gov.in"
    },
    dpiit: {
      title: "DPIIT Patent Fee Rebate (80% Subsidy)",
      desc: "Statutory 80% reduction in official patent filing fees and 50% rebate in trademark application fees for recognized Indian startups, paired with expedited examination workflows.",
      link: "https://dpiit.gov.in"
    },
    samridh: {
      title: "SAMRIDH Scheme for Software Startups",
      desc: "MeitY scheme providing matching acceleration funding up to ₹40 Lakhs along with enterprise growth programs for tech startups with working products.",
      link: "https://meitystartups.in"
    },
    nidhi: {
      title: "NIDHI-Seed Support System (NIDHI-SSS)",
      desc: "DST initiative providing seed support funding up to ₹100 Lakhs per venture through technology business incubators across premier engineering and research institutes.",
      link: "https://nidhi-sss.dst.gov.in"
    }
  };

  schemeItems.forEach((item) => {
    item.addEventListener('click', () => {
      const schemeKey = item.getAttribute('data-scheme');
      const info = schemeData[schemeKey];

      if (info && modal) {
        modalTitle.textContent = info.title;
        modalDesc.textContent = info.desc;
        const link = document.getElementById('schemeModalLink');
        if (link) link.href = info.link;
        modal.classList.remove('hidden');
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => modal.classList.add('hidden'));
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
}
