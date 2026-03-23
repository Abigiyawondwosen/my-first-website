document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const greetBtn = document.getElementById("greetBtn");
  const form = document.getElementById("contactForm");
  const messagesList = document.getElementById("messagesList");
  const revealSections = document.querySelectorAll(".reveal");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("theme-dark");
  }

  themeToggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("theme-dark");
    const themeValue = document.body.classList.contains("theme-dark")
      ? "dark"
      : "light";
    localStorage.setItem("theme", themeValue);
  });

  greetBtn?.addEventListener("click", () => {
    alert("Hello! Thanks for visiting my website.");
  });

  function addMessage(messageText) {
    const li = document.createElement("li");
    li.className = "message-item";

    const messageSpan = document.createElement("span");
    messageSpan.className = "message-text";
    messageSpan.textContent = messageText;

    const likeBtn = document.createElement("button");
    likeBtn.className = "message-action";
    likeBtn.type = "button";
    likeBtn.textContent = "Like (0)";

    let likeCount = 0;
    likeBtn.addEventListener("click", () => {
      likeCount += 1;
      likeBtn.textContent = `Like (${likeCount})`;
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "message-action";
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(messageSpan);
    li.appendChild(likeBtn);
    li.appendChild(deleteBtn);
    messagesList?.appendChild(li);
  }

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");

    const name = nameInput?.value.trim() || "Anonymous";
    const message = messageInput?.value.trim() || "";

    if (!message) {
      return;
    }

    addMessage(`${name}: ${message}`);
    form.reset();
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 90);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  revealSections.forEach((section) => observer.observe(section));
});
