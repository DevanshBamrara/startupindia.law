/* ==========================================================================
   STARTUPINDIA.LAW — "THE SANCTUARY"
   Master JavaScript Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initFrame1Bell();
  initFrame2Corridor();
  initFrame3Sanctum();
  initFrame4Gallery();
  initFrame5Wisdom();
  initFrame7Offering();
});

/* ==========================================================================
   1. CUSTOM CURSOR CONTROLLER
   ========================================================================== */
function initCustomCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Instant dot movement
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  // Smooth ring tracking loop
  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover detection on interactive elements
  const interactiveSelectors = 'a, button, input, textarea, [role="button"], .question-line, .niche-card, .scheme-item, .incubator-item, .vitrine-card';

  document.querySelectorAll(interactiveSelectors).forEach((el) => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ==========================================================================
   2. FRAME 1: THE BELL — QUERY VESSEL & BREATHING REVEAL
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

  // Click or keydown on query vessel triggers breathing reveal
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

    // Reveal questions container
    revealedQuestions.classList.remove('hidden');

    // Staggered reveal animation
    questionLines.forEach((line, index) => {
      line.style.opacity = '0';
      line.style.transform = 'translateY(12px)';
      line.style.transition = `opacity 500ms var(--ease-temple) ${index * 200}ms, transform 500ms var(--ease-temple) ${index * 200}ms, background-color 400ms var(--ease-temple)`;

      setTimeout(() => {
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
      }, 50);
    });
  }

  // Clicking a specific question transforms vessel into email capture
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
      vesselPromptText.textContent = `Regarding "${selectedQuestion}" — leave your email and we'll respond within a sunrise.`;
    }

    const emailInput = document.getElementById('vesselEmailInput');
    if (emailInput) emailInput.focus();
  }

  // Handle Form Submission
  if (vesselEmailForm) {
    vesselEmailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      activeContent.classList.add('hidden');
      vesselConfirmation.classList.remove('hidden');
    });
  }
}

/* ==========================================================================
   3. FRAME 2: THE CORRIDOR — HORIZONTAL TRUST SCROLL
   ========================================================================== */
function initFrame2Corridor() {
  const track = document.getElementById('corridorTrack');
  const tallyMarks = document.querySelectorAll('.tally-mark');

  if (!track || !tallyMarks.length) return;

  // Synchronize scroll position with tally marks
  track.addEventListener('scroll', () => {
    const scrollLeft = track.scrollLeft;
    const itemWidth = track.clientWidth * 0.65;
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

  // Enable Mouse Drag Horizontal Scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => { isDown = false; });
  track.addEventListener('mouseup', () => { isDown = false; });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });
}

/* ==========================================================================
   4. FRAME 3: THE SANCTUM — DIYA FLAME GLOW EFFECT
   ========================================================================== */
function initFrame3Sanctum() {
  const nicheCards = document.querySelectorAll('.niche-card');

  nicheCards.forEach((card) => {
    const glow = card.querySelector('.diya-glow');
    if (!glow) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glow.style.background = `radial-gradient(ellipse at ${x}px ${y}px, rgba(245, 230, 204, 0.8) 0%, rgba(245, 230, 204, 0) 70%)`;
    });
  });
}

/* ==========================================================================
   5. FRAME 4: GALLERY OF BEINGS — MYSTERY DRAWERS
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

  // Handle drawer form submissions
  const drawerForms = document.querySelectorAll('.drawer-form');
  drawerForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const parentDrawer = form.closest('.vitrine-drawer');
      if (parentDrawer) {
        parentDrawer.innerHTML = '<p class="drawer-text" style="color:#8B6F47;">&#10003; Thank you. Case study and complete portfolio spreadsheet sent to your inbox.</p>';
      }
    });
  });
}

/* ==========================================================================
   6. FRAME 5: THE WISDOM POOL — DATA COUNTER & SCROLL REVELATIONS
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

            // Trigger count up for 113,000+
            if (entry.target.id === 'rev-1' && !hasCounted && counterElement) {
              hasCounted = true;
              animateMechanicalCounter(counterElement, 0, 113000, 2000);
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

  function animateMechanicalCounter(element, start, end, duration) {
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
   7. FRAME 7: THE OFFERING — SCHEMES, INCUBATORS & MODALS
   ========================================================================== */
function initFrame7Offering() {
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
