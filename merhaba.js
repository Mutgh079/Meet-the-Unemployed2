const avatarPreview = document.getElementById("avatarPreview");

document.getElementById("downloadBtn").addEventListener("click", () => {
  window.print();
});

(function () {
  const decor = document.getElementById("decor");
  if (!decor) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const STAR_COUNT = 36;
  const SPARKLE_COUNT = 16;
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
  );
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0,
  );

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < STAR_COUNT; i++) {
    const el = document.createElement("div");
    el.className = "star";
    const size = Math.round(rand(8, 22));
    const left = rand(2, 96);
    const top = rand(2, 92);
    const dur = rand(6, 14).toFixed(2) + "s";
    const delay = rand(0, 8).toFixed(2) + "s";
    el.style.setProperty("--size", size + "px");
    el.style.left = left + "%";
    el.style.top = top + "%";
    el.style.setProperty("--dur", reduce ? "0s" : dur);
    el.style.setProperty("--delay", delay);
    el.style.transform = "rotate(45deg)";
    decor.appendChild(el);
  }
  for (let i = 0; i < SPARKLE_COUNT; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.textContent = "✦";
    const size = Math.round(rand(14, 30));
    const left = rand(4, 94);
    const top = rand(4, 88);
    const dur = rand(2.5, 5).toFixed(2) + "s";
    const delay = rand(0, 6).toFixed(2) + "s";
    s.style.fontSize = size + "px";
    s.style.left = left + "%";
    s.style.top = top + "%";
    s.style.setProperty("--dur", reduce ? "0s" : dur);
    s.style.setProperty("--delay", delay);
    decor.appendChild(s);
  }

  if (!reduce) {
    window.addEventListener("mousemove", (e) => {
      const cx = e.clientX / vw - 0.5;
      const cy = e.clientY / vh - 0.5;

      decor.style.transform = `translate(${(-cx * 6).toFixed(2)}px,${(-cy * 6).toFixed(2)}px)`;
    });
  }
})();
