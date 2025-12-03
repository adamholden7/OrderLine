<script>
  document.getElementById("year").textContent = new Date().getFullYear();

  // simple FAQ accordion
  document.querySelectorAll(".faq-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const body = btn.parentElement.querySelector(".faq-body");
      const icon = btn.querySelector("span:last-child");
      const isOpen = !body.classList.contains("hidden");
      document.querySelectorAll(".faq-body").forEach((b) => b.classList.add("hidden"));
      document
        .querySelectorAll(".faq-toggle span:last-child")
        .forEach((i) => (i.textContent = "+"));
      if (!isOpen) {
        body.classList.remove("hidden");
        icon.textContent = "–";
      }
    });
  });

  // Bar chart scroll animation
  (function () {
    const chart = document.getElementById("analytics-chart");
    if (!chart) return;

    const bars = Array.from(chart.querySelectorAll("[data-height]"));

    function animateBars() {
      bars.forEach((bar, index) => {
        const target = bar.getAttribute("data-height");
        setTimeout(() => {
          bar.style.height = target + "%";
        }, index * 120); // stagger by 120ms
      });
    }

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateBars();
              observer.disconnect(); // only run once
            }
          });
        },
        { threshold: 0.4 }
      );
      observer.observe(chart);
    } else {
      // fallback for older browsers
      animateBars();
    }
  })();
</script>
