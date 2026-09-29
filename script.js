// If an image or video file is missing, show a dashed box telling you which file to add.
document.querySelectorAll("img, video").forEach((el) => {
  const showPlaceholder = () => {
    const src = el.getAttribute("src") || el.querySelector("source")?.getAttribute("src");
    const box = document.createElement("div");
    box.className = "ph";
    box.textContent = "Add file: " + src;
    el.replaceWith(box);
  };
  if (el.tagName === "IMG") {
    el.addEventListener("error", showPlaceholder);
    if (el.complete && el.naturalWidth === 0) showPlaceholder();
  } else {
    el.addEventListener("error", showPlaceholder, true);
  }
});

// Fade sections in as you scroll
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
  { threshold: 0.1 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Footer year
document.querySelectorAll(".year").forEach((el) => (el.textContent = new Date().getFullYear()));
