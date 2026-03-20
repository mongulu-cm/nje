(() => {
  const root = document.documentElement;
  const targets = Array.from(
    document.querySelectorAll(
      ".reveal-target"
    ),
  );

  if (!targets.length) return;

  let rafId = 0;
  const updateParallax = () => {
    rafId = 0;
    const depth = Math.min(window.scrollY, window.innerHeight * 1.25);
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = Math.max(0, Math.min(window.scrollY / maxScroll, 1));
    root.style.setProperty("--hero-parallax", `${depth * 0.08}px`);
    root.style.setProperty("--section-parallax", `${depth * 0.05}px`);
    root.style.setProperty("--scroll-progress", `${(progress * 100).toFixed(2)}%`);
  };

  const scheduleParallax = () => {
    if (rafId) return;
    rafId = window.requestAnimationFrame(updateParallax);
  };

  updateParallax();
  window.addEventListener("scroll", scheduleParallax, { passive: true });
  window.addEventListener("resize", scheduleParallax, { passive: true });

  targets.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((element) => {
      element.classList.add("is-revealed");
    });
    window.removeEventListener("scroll", scheduleParallax);
    window.removeEventListener("resize", scheduleParallax);
    return;
  }

  if (!("IntersectionObserver" in window)) {
    targets.forEach((element) => {
      element.classList.add("is-revealed");
    });
    window.removeEventListener("scroll", scheduleParallax);
    window.removeEventListener("resize", scheduleParallax);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      }
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.18,
    },
  );

  requestAnimationFrame(() => {
    targets.forEach((element) => observer.observe(element));
  });
})();
