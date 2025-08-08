window.addEventListener('load', () => {
  const maybeCanvas = document.getElementById("background");
  if (!(maybeCanvas instanceof HTMLCanvasElement)) {
    console.error("No se encontró el canvas con id 'background'.");
    return;
  }
  const canvas = maybeCanvas;

  const maybeCtx = canvas.getContext("2d");
  if (!maybeCtx) {
    console.error("No se pudo obtener el contexto 2D del canvas.");
    return;
  }
  const ctx = maybeCtx;

  let width: number, height: number;

  class Particle {
    x!: number;
    y!: number;
    vx!: number;
    vy!: number;
    radius!: number;

    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.radius = Math.random() * 3 + 2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.fill();
    }
  }

  const PARTICLE_COUNT = 120;
  const MAX_DISTANCE = 120;
  const particles: Particle[] = [];

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  function animateCanvas() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.update();
      p.draw();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.hypot(dx, dy);

        if (dist < MAX_DISTANCE) {
          const alpha = 1 - dist / MAX_DISTANCE;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animateCanvas);
  }
  animateCanvas();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll<HTMLElement>('[data-animate]').forEach(el => observer.observe(el));

  //MODAL
  const modal = document.getElementById("ecommerceModal") as HTMLElement | null;
  const openTrigger = document.getElementById("ecommerceTrigger") as HTMLElement | null;
  const closeBtn = document.getElementById("closeModal") as HTMLElement | null;

  if (openTrigger && modal && closeBtn) {
    openTrigger.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  } else {
    console.warn("Elementos del modal no encontrados.");
  }

});

const moviesapiModal = document.getElementById("moviesapiModal") as HTMLElement | null;
const moviesapiopenTrigger = document.getElementById("moviesapiTrigger") as HTMLElement | null;
const moviesapicloseBtn = document.getElementById("closeModal") as HTMLElement | null;

if (moviesapiopenTrigger && moviesapiModal && moviesapicloseBtn) {
  moviesapiopenTrigger.addEventListener("click", () => {
    moviesapiModal.classList.remove("hidden");
  });

  moviesapicloseBtn.addEventListener("click", () => {
    moviesapiModal.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === moviesapiModal) {
      moviesapiModal.classList.add("hidden");
    }
  });
} else {
  console.warn("Elementos del modal no encontrados.");
}

const pokequeueModal = document.getElementById("pokequeueModal") as HTMLElement | null;
const pokequeueopenTrigger = document.getElementById("pokequeueTrigger") as HTMLElement | null;
const pokequeuecloseBtn = document.getElementById("closeModal") as HTMLElement | null;

if (pokequeueopenTrigger && pokequeueModal && pokequeuecloseBtn) {
  pokequeueopenTrigger.addEventListener("click", () => {
    pokequeueModal.classList.remove("hidden");
  });

  pokequeuecloseBtn.addEventListener("click", () => {
    pokequeueModal.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === pokequeueModal) {
      pokequeueModal.classList.add("hidden");
    }
  });
} else {
  console.warn("Elementos del modal no encontrados.");
}