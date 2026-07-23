// Progressive enhancement — the page is fully readable without JS.

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Scroll-based nav background ── */
const nav = document.getElementById('nav');
if (nav) {
  let ticking = false;
  const update = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
  update();
}

/* ── Mobile menu toggle ── */
const toggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');
if (toggle && navLinks) {
  const setOpen = (open: boolean) => {
    navLinks.classList.toggle('show', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', () => {
    setOpen(!navLinks.classList.contains('show'));
  });
  navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
}

/* ── Reveal-on-scroll animations ── */
const reveals = document.querySelectorAll<HTMLElement>('.reveal');
if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((el) => el.classList.add('visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      visible.forEach((entry, i) => {
        window.setTimeout(() => (entry.target as HTMLElement).classList.add('visible'), i * 40);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
  );
  reveals.forEach((el) => observer.observe(el));
}

/* ── Active section highlight in nav (pill) ── */
const navLinkEls = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
const sectionMap = new Map<Element, HTMLAnchorElement>();
navLinkEls.forEach((a) => {
  const id = a.getAttribute('href');
  if (!id || !id.startsWith('#')) return;
  const el = document.querySelector(id);
  if (el) sectionMap.set(el, a);
});
if (sectionMap.size && 'IntersectionObserver' in window) {
  const setActive = (link: HTMLAnchorElement) => {
    navLinkEls.forEach((a) => a.classList.toggle('is-active', a === link));
  };
  const sectionObs = new IntersectionObserver(
    (entries) => {
      const top = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (top) {
        const link = sectionMap.get(top.target);
        if (link) setActive(link);
      }
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
  );
  sectionMap.forEach((_, section) => sectionObs.observe(section));
}

/* ── Smooth anchor scrolling for both "#foo" and "/#foo" links ── */
const isSamePageHashLink = (href: string): string | null => {
  if (href.startsWith('#') && href.length > 1) return href;
  // "/#foo" style — scroll if already on the same base path.
  if (href.startsWith('/#') && (location.pathname === '/' || location.pathname === '')) {
    return href.slice(1);
  }
  return null;
};

document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href) return;
    const hash = isSamePageHashLink(href);
    if (!hash) return;
    const target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    if (history.replaceState) history.replaceState(null, '', hash);
  });
});

/* ── Click-to-play video (lazy-load — video only fetched on user click) ── */
document.querySelectorAll<HTMLElement>('[data-video-block]').forEach((block) => {
  const poster = block.querySelector<HTMLElement>('.work-video-poster');
  const playBtn = block.querySelector<HTMLButtonElement>('[data-video-play]');
  if (!poster || !playBtn) return;
  playBtn.addEventListener('click', () => {
    if (poster.querySelector('video')) return;
    const video = document.createElement('video');
    video.src = '/videos/B-roll_of_products.mp4';
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'auto';
    poster.appendChild(video);
    poster.classList.add('is-playing');
  });
});

/* ── Contact form — step-by-step stepper ── */
const form = document.getElementById('contact-form') as HTMLFormElement | null;
if (form) {
  const steps = Array.from(form.querySelectorAll<HTMLElement>('.stepper-step'));
  const total = steps.length;
  const bar = form.querySelector<HTMLElement>('#stepper-bar');
  const counter = form.querySelector<HTMLElement>('#stepper-current');
  const doneEl = form.querySelector<HTMLElement>('.stepper-done');
  const nextBtn = form.querySelector<HTMLButtonElement>('[data-next]');
  const backBtn = form.querySelector<HTMLButtonElement>('[data-back]');
  const skipBtn = form.querySelector<HTMLButtonElement>('[data-skip]');
  const nextLabel = form.querySelector<HTMLElement>('[data-next-label]');
  const restartBtn = form.querySelector<HTMLButtonElement>('[data-restart]');
  const tip = form.querySelector<HTMLElement>('.stepper-tip');

  let index = 0;
  let animating = false;

  const stepInput = (step: HTMLElement) =>
    step.querySelector<HTMLInputElement | HTMLTextAreaElement>('input, textarea');

  const isValid = (step: HTMLElement): boolean => {
    const input = stepInput(step);
    if (!input) return true;
    const required = step.dataset.required === 'true';
    const value = input.value.trim();
    if (!required) return true;
    if (!value) return false;
    if (input instanceof HTMLInputElement) return input.checkValidity();
    return true;
  };

  const setError = (step: HTMLElement, on: boolean) => {
    step.classList.toggle('invalid', on);
    const err = step.querySelector<HTMLElement>('[data-error]');
    if (err) err.hidden = !on;
  };

  const updateChrome = () => {
    if (counter) counter.textContent = String(Math.min(index + 1, total));
    if (bar) bar.style.width = `${((index + 1) / total) * 100}%`;
    const current = steps[index];
    if (!current) return;
    const isLast = index === total - 1;
    if (nextLabel) nextLabel.textContent = isLast ? 'Odoslať' : 'Ďalej';
    if (backBtn) backBtn.hidden = index === 0;
    if (skipBtn) skipBtn.hidden = current.dataset.skippable !== 'true';
  };

  const focusStep = (step: HTMLElement) => {
    const input = stepInput(step);
    if (input) window.setTimeout(() => input.focus({ preventScroll: true }), 60);
  };

  const goTo = (target: number, direction: 'forward' | 'back') => {
    if (animating || target === index) return;
    const outClass = direction === 'forward' ? 'leaving' : 'leaving-back';
    const inClass = direction === 'forward' ? '' : 'entering-back';
    const current = steps[index];
    const next = steps[target];
    if (!current || !next) return;
    animating = true;
    current.classList.add(outClass);
    window.setTimeout(() => {
      current.hidden = true;
      current.classList.remove(outClass);
      next.hidden = false;
      if (inClass) next.classList.add(inClass);
      index = target;
      updateChrome();
      focusStep(next);
      window.setTimeout(() => {
        if (inClass) next.classList.remove(inClass);
        animating = false;
      }, 340);
    }, 200);
  };

  const showDone = () => {
    if (!doneEl) return;
    const current = steps[index];
    if (current) {
      current.classList.add('leaving');
      window.setTimeout(() => {
        current.hidden = true;
        current.classList.remove('leaving');
        doneEl.hidden = false;
        if (bar) bar.style.width = '100%';
      }, 200);
    } else {
      doneEl.hidden = false;
    }
    if (nextBtn) nextBtn.hidden = true;
    if (backBtn) backBtn.hidden = true;
    if (skipBtn) skipBtn.hidden = true;
    if (tip) tip.hidden = true;
  };

  const submit = async () => {
    if (!nextBtn) return;
    nextBtn.classList.add('is-submitting');
    nextBtn.disabled = true;

    const data: Record<string, string> = {};
    steps.forEach((s) => {
      const input = stepInput(s);
      if (input && s.dataset.key) data[s.dataset.key] = input.value.trim();
    });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error || 'Nepodarilo sa odoslať správu.');
      }

      window.location.href = '/dakujeme';
    } catch (e) {
      nextBtn.classList.remove('is-submitting');
      nextBtn.disabled = false;
      const last = steps[index];
      if (last) {
        const errEl = last.querySelector<HTMLElement>('[data-error]');
        if (errEl) {
          errEl.textContent =
            e instanceof Error ? e.message : 'Niečo sa pokazilo. Skúste to znova.';
          errEl.hidden = false;
        }
      }
    }
  };

  const advance = async () => {
    const current = steps[index];
    if (!current) return;
    if (!isValid(current)) {
      setError(current, true);
      const input = stepInput(current);
      input?.focus();
      return;
    }
    setError(current, false);
    if (index === total - 1) {
      await submit();
    } else {
      goTo(index + 1, 'forward');
    }
  };

  const retreat = () => {
    if (index === 0) return;
    const current = steps[index];
    if (current) setError(current, false);
    goTo(index - 1, 'back');
  };

  const skip = () => {
    const current = steps[index];
    if (!current || current.dataset.skippable !== 'true') return;
    const input = stepInput(current);
    if (input) input.value = '';
    setError(current, false);
    if (index === total - 1) submit();
    else goTo(index + 1, 'forward');
  };

  nextBtn?.addEventListener('click', advance);
  backBtn?.addEventListener('click', retreat);
  skipBtn?.addEventListener('click', skip);

  restartBtn?.addEventListener('click', () => {
    form.reset();
    if (doneEl) doneEl.hidden = true;
    steps.forEach((s, i) => {
      s.hidden = i !== 0;
      setError(s, false);
    });
    index = 0;
    if (nextBtn) nextBtn.hidden = false;
    if (tip) tip.hidden = false;
    updateChrome();
    focusStep(steps[0]);
  });

  form.addEventListener('keydown', (e) => {
    const key = (e as KeyboardEvent).key;
    if (key === 'Enter') {
      const target = e.target as HTMLElement;
      const isTextarea = target instanceof HTMLTextAreaElement;
      // In textarea, only Ctrl/Cmd+Enter advances; plain Enter inserts newline.
      if (isTextarea && !(e as KeyboardEvent).ctrlKey && !(e as KeyboardEvent).metaKey) return;
      e.preventDefault();
      advance();
    }
  });

  // Clear inline error the moment the user starts typing.
  steps.forEach((step) => {
    const input = stepInput(step);
    input?.addEventListener('input', () => setError(step, false));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    advance();
  });

  updateChrome();
}
