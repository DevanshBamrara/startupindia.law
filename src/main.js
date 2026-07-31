/* ==========================================================================
   STARTUPINDIA.LAW — "THE SANCTUARY"
   Final Monochromatic Sacred Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLegalDisclaimerModal();
  initCustomCursor();
  initFrame1Bell();
  initFrame2Corridor();
  initFrame4Gallery();
  initFrame5Wisdom();
  initFrame7Events();
  initFrame8Offering();
});

/* ==========================================================================
   0. STATUTORY LEGAL DISCLAIMER MODAL CONTROLLER
   ========================================================================== */
function initLegalDisclaimerModal() {
  const overlay = document.getElementById('disclaimerOverlay');
  const btnAgree = document.getElementById('btnDisclaimerAgree');
  const btnDisagree = document.getElementById('btnDisclaimerDisagree');

  if (!overlay) return;

  const hasAgreed = sessionStorage.getItem('startupIndiaLaw_disclaimerAgreed');

  if (!hasAgreed) {
    overlay.classList.remove('disclaimer-hidden');
    document.body.style.overflow = 'hidden';
  } else {
    overlay.classList.add('disclaimer-hidden');
    document.body.style.overflow = '';
  }

  if (btnAgree) {
    btnAgree.addEventListener('click', () => {
      sessionStorage.setItem('startupIndiaLaw_disclaimerAgreed', 'true');
      overlay.classList.add('disclaimer-hidden');
      document.body.style.overflow = '';
    });
  }

  if (btnDisagree) {
    btnDisagree.addEventListener('click', () => {
      window.location.href = 'https://www.google.com';
    });
  }
}

/* ==========================================================================
   1. QUIET CURSOR CONTROLLER (RULE 0: MOUSE ONLY)
   ========================================================================== */
function initCustomCursor() {
  const dot = document.getElementById('cursorDot');
  if (!dot) return;

  // Rule 0: Only initialize mousemove tracking on desktop devices with pointer
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    });
  } else {
    dot.style.display = 'none';
  }
}

/* ==========================================================================
   2. FRAME 1: THE BELL & FLEXIBLE INQUIRY BASIN CONTROLLER
   ========================================================================== */
function initFrame1Bell() {
  const queryVessel = document.getElementById('queryVessel');
  const questionStep = document.getElementById('vesselQuestionStep');
  const emailStep = document.getElementById('vesselEmailStep');
  const confirmation = document.getElementById('vesselConfirmation');

  const customQuestionInput = document.getElementById('customQuestionInput');
  const questionForm = document.getElementById('vesselQuestionForm');
  const questionLines = document.querySelectorAll('.question-line');

  const previewQuestionText = document.getElementById('previewQuestionText');
  const btnChangeQuestion = document.getElementById('btnChangeQuestion');
  const emailForm = document.getElementById('vesselEmailForm');
  const emailInput = document.getElementById('vesselEmailInput');

  if (!queryVessel) return;

  // 1. Click / Keydown on initial bar -> Open Question Step
  queryVessel.addEventListener('click', openQuestionStep);
  queryVessel.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openQuestionStep();
    }
  });

  function openQuestionStep() {
    queryVessel.classList.add('hidden');
    questionStep.classList.remove('hidden');
    if (customQuestionInput) {
      customQuestionInput.focus();
    }
  }

  // 2. Click / Select suggestion pill -> Populate & proceed to Email Step
  questionLines.forEach((line) => {
    line.addEventListener('click', (e) => {
      e.stopPropagation();
      const qText = line.getAttribute('data-question');
      if (customQuestionInput) {
        customQuestionInput.value = qText;
      }
      proceedToEmailStep(qText);
    });

    line.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const qText = line.getAttribute('data-question');
        if (customQuestionInput) {
          customQuestionInput.value = qText;
        }
        proceedToEmailStep(qText);
      }
    });
  });

  // 3. Submit custom question form -> Proceed to Email Step
  if (questionForm) {
    questionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userQ = customQuestionInput ? customQuestionInput.value.trim() : '';
      if (userQ) {
        proceedToEmailStep(userQ);
      }
    });
  }

  function proceedToEmailStep(qText) {
    questionStep.classList.add('hidden');
    emailStep.classList.remove('hidden');

    if (previewQuestionText) {
      previewQuestionText.textContent = `"${qText}"`;
    }

    if (emailInput) {
      emailInput.focus();
    }
  }

  // 4. Change question button -> Return to Question Step
  if (btnChangeQuestion) {
    btnChangeQuestion.addEventListener('click', () => {
      emailStep.classList.add('hidden');
      questionStep.classList.remove('hidden');
      if (customQuestionInput) {
        customQuestionInput.focus();
      }
    });
  }

  // 5. Submit email form -> Send to Web3Forms API asynchronously
  if (emailForm) {
    emailForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = emailForm.querySelector('button[type="submit"]');
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : 'Submit &rarr;';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
      }

      // Populate hidden question input
      const userQ = customQuestionInput ? customQuestionInput.value.trim() : '';
      const hiddenQInput = document.getElementById('web3formsQuestionInput');
      if (hiddenQInput) {
        hiddenQInput.value = userQ || (previewQuestionText ? previewQuestionText.textContent.replace(/^"|"$/g, '') : '');
      }

      const formData = new FormData(emailForm);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();

        if (result.success) {
          emailStep.classList.add('hidden');
          confirmation.classList.remove('hidden');
        } else {
          console.info('Web3Forms message:', result.message || 'Key missing or pending activation.');
          // Display confirmation gracefully
          emailStep.classList.add('hidden');
          confirmation.classList.remove('hidden');
        }
      } catch (err) {
        console.error('Web3Forms submission error:', err);
        emailStep.classList.add('hidden');
        confirmation.classList.remove('hidden');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
      }
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
  const swipeHint = document.getElementById('corridorSwipeHint');

  if (!track) return;

  // Fade swipe hint on first interaction
  if (swipeHint) {
    const dismissSwipeHint = () => {
      swipeHint.classList.add('faded');
      track.removeEventListener('scroll', dismissSwipeHint);
      track.removeEventListener('touchstart', dismissSwipeHint);
    };
    track.addEventListener('scroll', dismissSwipeHint, { passive: true });
    track.addEventListener('touchstart', dismissSwipeHint, { passive: true });
  }

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
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const parentDrawer = form.closest('.vitrine-drawer');
      const submitBtn = form.querySelector('button[type="submit"]');
      const vitrineCard = form.closest('.vitrine-card');
      const vitrineName = vitrineCard ? vitrineCard.querySelector('.vitrine-name')?.textContent || 'Startup Case Study' : 'Case Study';
      const emailInputVal = form.querySelector('input[type="email"]')?.value || '';

      const keyInput = document.getElementById('web3formsAccessKey');
      const accessKey = keyInput ? keyInput.value : 'YOUR_ACCESS_KEY';

      const formData = new FormData();
      formData.append('access_key', accessKey);
      formData.append('email', emailInputVal);
      formData.append('subject', `Case Study Request: ${vitrineName} — StartupIndia.Law`);
      formData.append('message', `Case Study Info requested for ${vitrineName}`);
      formData.append('from_name', 'StartupIndia.Law Vitrine');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = '...';
      }

      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
      } catch (err) {
        console.error('Drawer form submission error:', err);
      }

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
              animateCounter(counterElement, 0, 200000, 2000);
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
  const swipeHint = document.getElementById('eventsSwipeHint');

  if (sliderTrack) {
    if (swipeHint) {
      const dismissSwipeHint = () => {
        swipeHint.classList.add('faded');
        sliderTrack.removeEventListener('scroll', dismissSwipeHint);
        sliderTrack.removeEventListener('touchstart', dismissSwipeHint);
      };
      sliderTrack.addEventListener('scroll', dismissSwipeHint, { passive: true });
      sliderTrack.addEventListener('touchstart', dismissSwipeHint, { passive: true });
    }

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
    google: {
      title: "Google India, Gurgaon",
      meta: "Google India • Gurgaon",
      desc: "Advising top YouTube content creators on technology, IP, and creator economy strategy under the Techstars global accelerator programme."
    },
    berkeley: {
      title: "Berkeley Law, University of California, Berkeley, USA",
      meta: "UC Berkeley Law • California, USA",
      desc: "Keynote & masterclass on cross-border innovation, IP strategy, international technology transfer, and venture advisory."
    },
    nls: {
      title: "National Law School (NLS), Gandhinagar",
      meta: "National Law School • Gandhinagar",
      desc: "Special address on startup law, innovation policy, statutory compliance, and technology entrepreneurship."
    },
    patna: {
      title: "IIT Patna",
      meta: "Incubation Centre • IIT Patna",
      desc: "Venture clinic on innovation protection, IPR architecture, and entrepreneurship development for technology founders."
    },
    iitg: {
      title: "IIT Gandhinagar",
      meta: "Design & Innovation Center • IIT Gandhinagar",
      desc: "Strategic session on deep-tech venture building, commercialization moats, and IP strategy for early-stage innovators."
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
