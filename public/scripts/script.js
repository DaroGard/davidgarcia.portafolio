window.addEventListener('load', function () {
    var maybeCanvas = document.getElementById("background");
    if (!(maybeCanvas instanceof HTMLCanvasElement)) {
        console.error("No se encontró el canvas con id 'background'.");
        return;
    }
    var canvas = maybeCanvas;
    var maybeCtx = canvas.getContext("2d");
    if (!maybeCtx) {
        console.error("No se pudo obtener el contexto 2D del canvas.");
        return;
    }
    var ctx = maybeCtx;
    var width, height;
    var Particle = /** @class */ (function () {
        function Particle() {
            this.reset();
        }
        Particle.prototype.reset = function () {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.radius = Math.random() * 3 + 2;
        };
        Particle.prototype.update = function () {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width)
                this.vx *= -1;
            if (this.y < 0 || this.y > height)
                this.vy *= -1;
        };
        Particle.prototype.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            ctx.fill();
        };
        return Particle;
    }());
    var PARTICLE_COUNT = 120;
    var MAX_DISTANCE = 120;
    var particles = [];
    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    for (var i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }
    function animateCanvas() {
        ctx.clearRect(0, 0, width, height);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            p.update();
            p.draw();
            for (var j = i + 1; j < particles.length; j++) {
                var q = particles[j];
                var dx = p.x - q.x;
                var dy = p.y - q.y;
                var dist = Math.hypot(dx, dy);
                if (dist < MAX_DISTANCE) {
                    var alpha = 1 - dist / MAX_DISTANCE;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = "rgba(255, 255, 255, ".concat(alpha * 0.5, ")");
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateCanvas);
    }
    animateCanvas();
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('[data-animate]').forEach(function (el) { return observer.observe(el); });
    //MODAL
    var modal = document.getElementById("ecommerceModal");
    var openTrigger = document.getElementById("ecommerceTrigger");
    var closeBtn = document.getElementById("closeModal");
    if (openTrigger && modal && closeBtn) {
        openTrigger.addEventListener("click", function () {
            modal.classList.remove("hidden");
        });
        closeBtn.addEventListener("click", function () {
            modal.classList.add("hidden");
        });
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.classList.add("hidden");
            }
        });
    }
    else {
        console.warn("Elementos del modal no encontrados.");
    }
});
var moviesapiModal = document.getElementById("moviesapiModal");
var moviesapiopenTrigger = document.getElementById("moviesapiTrigger");
var moviesapicloseBtn = document.getElementById("closeModal");
if (moviesapiopenTrigger && moviesapiModal && moviesapicloseBtn) {
    moviesapiopenTrigger.addEventListener("click", function () {
        moviesapiModal.classList.remove("hidden");
    });
    moviesapicloseBtn.addEventListener("click", function () {
        moviesapiModal.classList.add("hidden");
    });
    window.addEventListener("click", function (event) {
        if (event.target === moviesapiModal) {
            moviesapiModal.classList.add("hidden");
        }
    });
}
else {
    console.warn("Elementos del modal no encontrados.");
}
var pokequeueModal = document.getElementById("pokequeueModal");
var pokequeueopenTrigger = document.getElementById("pokequeueTrigger");
var pokequeuecloseBtn = document.getElementById("closeModal");
if (pokequeueopenTrigger && pokequeueModal && pokequeuecloseBtn) {
    pokequeueopenTrigger.addEventListener("click", function () {
        pokequeueModal.classList.remove("hidden");
    });
    pokequeuecloseBtn.addEventListener("click", function () {
        pokequeueModal.classList.add("hidden");
    });
    window.addEventListener("click", function (event) {
        if (event.target === pokequeueModal) {
            pokequeueModal.classList.add("hidden");
        }
    });
}
else {
    console.warn("Elementos del modal no encontrados.");
}
