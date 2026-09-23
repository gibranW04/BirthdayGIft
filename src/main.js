import "./style.css";
import gsap from "gsap";
import { birthdayData } from "./content.js";

/* ── DOM Container ── */
const app = document.querySelector("#app");

/* ── Render Base HTML ── */
app.innerHTML = `
    <!-- Ambient Petals Background -->
    <div class="ambient-petals" id="ambientPetals"></div>

    <!-- PHASE 1: MINI GAME SCENE -->
    <section class="scene active" data-scene="game">
        <div class="game-container">
            <h1 class="game-title">${birthdayData.game.title}</h1>
            <p class="game-subtitle">${birthdayData.game.subtitle}</p>

            <div class="quiz-progress" id="quizProgress">1 / ${birthdayData.game.questions.length}</div>

            <div class="quiz-card" id="quizCard">
                <p class="quiz-question" id="quizQuestion"></p>
                <div class="quiz-options" id="quizOptions"></div>
            </div>

            <p class="game-toast" id="gameToast"></p>
        </div>
    </section>

    <!-- PHASE 2: UNLOCK LETTER SCENE -->
    <section class="scene" data-scene="envelope">
        <div class="envelope-container">
            <h1 class="envelope-scene-title">${birthdayData.envelope.title}</h1>
            <p class="envelope-scene-subtitle">${birthdayData.envelope.subtitle}</p>

            <div class="envelope-wrapper" id="envelopeWrapper">
                <div class="envelope-glow"></div>
                <div class="envelope-main">
                    <div class="envelope-top-flap" id="envelopeFlap"></div>
                    <div class="wax-seal" id="waxSeal" title="Click to unseal">🌹</div>
                    <div class="envelope-letter-preview">
                        <h4>A Letter For You</h4>
                        <p>Opening your surprise...</p>
                    </div>
                </div>
            </div>

            <button class="unlock-btn" id="unlockButton">${birthdayData.envelope.buttonLabel}</button>
        </div>
    </section>

    <!-- PHASE 3: ONE LONG MAIN EXPERIENCE SCENE -->
    <section class="scene" data-scene="main-experience" id="mainExperience">
        <div class="main-experience-container">
            
            <!-- SECTION 1: HERO -->
            <section class="section section-hero" id="sec-hero">
                <div class="section-content">
                    <span class="hero-badge">Special Birthday Experience</span>
                    <h1 class="hero-title">${birthdayData.hero.title}</h1>
                    <h2 class="hero-subtitle">${birthdayData.hero.subtitle}</h2>
                    <h3 class="hero-name">${birthdayData.recipientName}</h3>
                    <button class="scroll-down-btn" id="scrollDownBtn">${birthdayData.hero.scrollLabel}</button>
                </div>
            </section>

            <!-- SECTION 2: PERSONAL MESSAGE -->
            <section class="section section-personal" id="sec-personal">
                <div class="section-content">
                    <div class="personal-card">
                        <h2 class="section-heading">${birthdayData.personalMessage.title}</h2>
                        <div class="divider-line"></div>
                        ${birthdayData.personalMessage.lines
                            .map((line) => `<p class="personal-line">${line}</p>`)
                            .join("")}
                    </div>
                </div>
            </section>

            <!-- SECTION 3: PHYSICAL LETTER -->
            <section class="section section-letter" id="sec-letter">
                <div class="section-content">
                    <div class="paper-letter">
                        <div class="letter-header-icon">🌸</div>
                        <h2>${birthdayData.letter.title}</h2>
                        ${birthdayData.letter.paragraphs
                            .map((p) => `<p class="paper-paragraph">${p}</p>`)
                            .join("")}
                        <p class="paper-signature">${birthdayData.letter.signature}</p>
                    </div>
                </div>
            </section>

            <!-- SECTION 4: MUSIC PLAYER -->
            <section class="section section-music" id="sec-music">
                <div class="section-content">
                    <h2 class="section-heading">${birthdayData.music.title}</h2>
                    <p class="section-subheading">${birthdayData.music.subtitle}</p>

                    <div class="player-card" id="playerCard">
                        <div class="vinyl-container" id="vinylContainer">
                            <img class="album-art" id="albumArt" src="${birthdayData.music.tracks[0].cover}" alt="Album Artwork" />
                            <div class="vinyl-disc"></div>
                        </div>

                        <h3 class="song-title" id="songTitle">${birthdayData.music.tracks[0].trackName}</h3>
                        <p class="song-artist" id="songArtist">${birthdayData.music.tracks[0].artist}</p>

                        <div class="music-bars">
                            <div class="music-bar-item"></div>
                            <div class="music-bar-item"></div>
                            <div class="music-bar-item"></div>
                            <div class="music-bar-item"></div>
                            <div class="music-bar-item"></div>
                        </div>

                        <div class="progress-container" id="progressContainer">
                            <div class="progress-track" id="progressTrack">
                                <div class="progress-fill" id="progressFill"></div>
                            </div>
                        </div>

                        <div class="time-row">
                            <span id="timeCurrent">0:00</span>
                            <span id="timeTotal">0:00</span>
                        </div>

                        <div class="player-controls">
                            <button class="control-btn prev-btn" id="prevBtn" aria-label="Previous Track" title="Previous Track">⏮</button>
                            <button class="play-btn" id="playBtn" aria-label="Play Track">
                                <span class="play-icon" id="playIcon">▶</span>
                            </button>
                            <button class="control-btn next-btn" id="nextBtn" aria-label="Next Track" title="Next Track">⏭</button>
                        </div>

                        <div class="playlist-selector" id="playlistSelector">
                            ${birthdayData.music.tracks.map((t, idx) => `
                                <button class="playlist-pill ${idx === 0 ? "active" : ""}" data-index="${idx}">
                                    ${t.trackName}
                                </button>
                            `).join("")}
                        </div>

                        <audio id="audioPlayer" src="${birthdayData.music.tracks[0].track}" preload="metadata"></audio>
                    </div>
                </div>
            </section>

            <!-- SECTION 5: MEMORIES / PHOTOS -->
            <section class="section section-memories" id="sec-memories">
                <div class="section-content">
                    <h2 class="section-heading">${birthdayData.memories.title}</h2>
                    <p class="section-subheading">${birthdayData.memories.subtitle}</p>

                    <div class="scrapbook-grid">
                        ${birthdayData.memories.photos
                            .map(
                                (photo) => `
                            <div class="polaroid-card" style="transform: rotate(${photo.rotation}deg)">
                                <div class="polaroid-pin">📍</div>
                                <div class="polaroid-img-wrapper">
                                    <img src="${photo.src}" alt="${photo.caption}" loading="lazy" />
                                </div>
                                <div class="polaroid-caption">
                                    <p class="photo-title">${photo.caption}</p>
                                    <span class="photo-date">${photo.tag}</span>
                                </div>
                            </div>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            </section>

            <!-- SECTION 6: SMALL SURPRISE -->
            <section class="section section-surprise" id="sec-surprise">
                <div class="section-content">
                    <h2 class="section-heading">${birthdayData.surprise.title}</h2>
                    <p class="section-subheading">${birthdayData.surprise.subtitle}</p>

                    <div class="gift-wrapper" id="giftWrapper">
                        <div class="gift-lid" id="giftLid">
                            <span class="gift-bow">🎁</span>
                        </div>
                        <div class="gift-body" id="giftBody">💖</div>
                    </div>

                    <div class="surprise-reveal-box" id="surpriseRevealBox">
                        <p class="surprise-message">${birthdayData.surprise.revealText}</p>
                    </div>
                </div>
            </section>

            <!-- SECTION 7: FINAL -->
            <section class="section section-final" id="sec-final">
                <div class="section-content">
                    <h1 class="final-title">${birthdayData.final.title}</h1>
                    <p class="final-message">${birthdayData.final.message}</p>
                    <p class="final-closing">${birthdayData.final.closing}</p>

                    <div class="qr-panel">
                        <p class="qr-heading">${birthdayData.final.qr.heading}</p>
                        <div class="qr-frame">
                            <img
                                class="qr-image"
                                src="${birthdayData.final.qr.image}"
                                alt="${birthdayData.final.qr.alt}"
                            />
                        </div>
                        <p class="qr-caption">${birthdayData.final.qr.caption}</p>
                        <a
                            class="qr-link"
                            href="${birthdayData.final.qr.link}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ${birthdayData.final.qr.link}
                        </a>
                    </div>

                    <button class="replay-btn" id="replayBtn">${birthdayData.final.replayLabel}</button>
                </div>
            </section>

        </div>
    </section>
`;

/* ── Confetti Layer ── */
const confettiLayer = document.createElement("div");
confettiLayer.className = "confetti-layer";
document.querySelector("#app").appendChild(confettiLayer);

/* ── Global State ── */
const state = {
    currentScene: "game",
    quizIndex: 0,
    isPlayingMusic: false,
    envelopeOpened: false,
    surpriseOpened: false,
};

/* ── Motion Preferences ── */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

/* ── Scene Navigation ── */
function showScene(name) {
    const currentEl = document.querySelector(`.scene[data-scene="${state.currentScene}"]`);
    const nextEl = document.querySelector(`.scene[data-scene="${name}"]`);

    if (!currentEl || !nextEl || state.currentScene === name) return;

    const tl = gsap.timeline();

    tl.to(currentEl, {
        opacity: 0,
        scale: 0.96,
        duration: prefersReducedMotion.matches ? 0.01 : 0.5,
        ease: "power2.inOut",
    })
        .call(() => {
            currentEl.classList.remove("active");
            nextEl.classList.add("active");
            state.currentScene = name;
            gsap.set(nextEl, { opacity: 0, scale: 1 });
        })
        .to(nextEl, {
            opacity: 1,
            scale: 1,
            duration: prefersReducedMotion.matches ? 0.01 : 0.6,
            ease: "power2.out",
        });

    return tl;
}

/* ── Ambient Falling Petals Generation ── */
function createAmbientPetals() {
    const container = document.querySelector("#ambientPetals");
    container.innerHTML = "";
    if (prefersReducedMotion.matches) return;

    const totalPetals = window.innerWidth < 768 ? 10 : 22;
    const types = ["petal-rose", "petal-soft", "petal-gold", "petal-emoji"];
    const emojis = ["🌸", "🌺", "🌸", "✨", "🪻"];

    for (let i = 0; i < totalPetals; i++) {
        const petal = document.createElement("div");
        const type = types[Math.floor(Math.random() * types.length)];
        petal.className = `petal ${type}`;

        if (type === "petal-emoji") {
            petal.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        } else {
            const size = 14 + Math.random() * 16;
            petal.style.width = `${size}px`;
            petal.style.height = `${size * 1.35}px`;
        }

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * (window.innerHeight + 200) - 200;

        petal.style.left = `${startX}px`;
        petal.style.top = `${startY}px`;

        container.appendChild(petal);

        const fallDuration = 7 + Math.random() * 8;
        const swayAmp = 80 + Math.random() * 120;
        const delay = Math.random() * 4;

        const animateFall = (target) => {
            gsap.set(target, {
                top: -40,
                left: Math.random() * window.innerWidth,
                opacity: 0.7 + Math.random() * 0.3,
                scale: 0.6 + Math.random() * 0.6,
                rotation: Math.random() * 360,
            });

            gsap.to(target, {
                top: window.innerHeight + 60,
                x: `+=${(Math.random() - 0.5) * swayAmp}`,
                rotation: `+=${180 + Math.random() * 360}`,
                duration: fallDuration,
                ease: "none",
                onComplete: () => animateFall(target),
            });
        };

        const initialRatio = Math.max(0.1, (window.innerHeight + 60 - startY) / (window.innerHeight + 100));

        gsap.to(petal, {
            top: window.innerHeight + 60,
            x: `+=${(Math.random() - 0.5) * swayAmp}`,
            rotation: `+=${180 + Math.random() * 360}`,
            duration: fallDuration * initialRatio,
            delay: delay,
            ease: "none",
            onComplete: () => animateFall(petal),
        });
    }
}

/* ── PHASE 1: MINI GAME (QUIZ) ── */
function initGame() {
    state.quizIndex = 0;
    const progress = document.querySelector("#quizProgress");
    const card = document.querySelector("#quizCard");
    const questionEl = document.querySelector("#quizQuestion");
    const optionsEl = document.querySelector("#quizOptions");
    const toast = document.querySelector("#gameToast");
    const questions = birthdayData.game.questions;

    toast.textContent = "";
    toast.classList.remove("visible");

    function renderQuestion(index) {
        const q = questions[index];
        progress.textContent = `${index + 1} / ${questions.length}`;
        questionEl.textContent = q.question;
        optionsEl.innerHTML = "";

        q.options.forEach((opt, i) => {
            const btn = document.createElement("button");
            btn.className = "quiz-option";
            btn.textContent = opt;
            btn.setAttribute("type", "button");
            btn.addEventListener("click", () => handleAnswer(btn, i));
            optionsEl.appendChild(btn);
        });

        gsap.fromTo(
            card,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: prefersReducedMotion.matches ? 0.01 : 0.5, ease: "power2.out" }
        );
    }

    function handleAnswer(btn, chosenIndex) {
        if (btn.dataset.locked === "true") return;
        const q = questions[state.quizIndex];

        if (chosenIndex === q.answer) {
            btn.dataset.locked = "true";
            btn.classList.add("correct");
            toast.textContent = "Benar! ♡";
            toast.classList.add("visible");

            const rect = btn.getBoundingClientRect();
            spawnPetalBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);

            optionsEl.querySelectorAll(".quiz-option").forEach((b) => {
                b.disabled = true;
            });

            if (state.quizIndex < questions.length - 1) {
                setTimeout(() => {
                    state.quizIndex += 1;
                    renderQuestion(state.quizIndex);
                }, 900);
            } else {
                toast.textContent = birthdayData.game.completeMsg;
                gsap.fromTo(
                    optionsEl,
                    { scale: 1 },
                    { scale: 1.06, duration: 0.3, yoyo: true, repeat: 3, ease: "sine.inOut" }
                );

                setTimeout(() => {
                    showScene("envelope");
                    initEnvelope();
                }, 1600);
            }
        } else {
            if (btn.dataset.locked === "true") return;
            btn.dataset.locked = "true";
            btn.classList.add("wrong");
            toast.textContent = "Coba lagi yaa..";
            toast.classList.add("visible");

            if (prefersReducedMotion.matches) {
                setTimeout(() => {
                    btn.classList.remove("wrong");
                    delete btn.dataset.locked;
                }, 300);
                return;
            }

            gsap.fromTo(
                btn,
                { x: 0 },
                {
                    x: 10,
                    duration: 0.06,
                    repeat: 4,
                    yoyo: true,
                    ease: "sine.inOut",
                    onComplete: () => {
                        btn.classList.remove("wrong");
                        delete btn.dataset.locked;
                    },
                }
            );
        }
    }

    renderQuestion(0);
}

function spawnPetalBurst(x, y) {
    if (prefersReducedMotion.matches) return;
    const colors = ["#f48fb1", "#ffd54f", "#c2185b", "#ffffff"];

    for (let i = 0; i < 8; i++) {
        const particle = document.createElement("div");
        particle.className = "petal";
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.width = "10px";
        particle.style.height = "10px";
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(particle);

        const angle = (i / 8) * Math.PI * 2;
        const dist = 30 + Math.random() * 40;

        gsap.to(particle, {
            x: Math.cos(angle) * dist,
            y: Math.sin(angle) * dist,
            opacity: 0,
            scale: 0.2,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => particle.remove(),
        });
    }
}

/* ── PHASE 2: UNLOCK LETTER (ENVELOPE) ── */
function initEnvelope() {
    state.envelopeOpened = false;
    const wrapper = document.querySelector("#envelopeWrapper");
    const waxSeal = document.querySelector("#waxSeal");
    const unlockBtn = document.querySelector("#unlockButton");

    // Intro entrance tween
    gsap.fromTo(
        wrapper,
        { scale: 0.8, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.4)" }
    );

    gsap.fromTo(
        unlockBtn,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: "power2.out" }
    );

    // Continuous floating if reduced motion is off
    if (!prefersReducedMotion.matches) {
        gsap.to(wrapper, {
            y: -8,
            duration: 2.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }

    const openEnvelope = () => {
        if (state.envelopeOpened) return;
        state.envelopeOpened = true;

        gsap.killTweensOf(wrapper);
        wrapper.classList.add("open");

        gsap.to(unlockBtn, { opacity: 0, y: 15, duration: 0.4 });

        // Open sequence
        gsap.to(wrapper, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                // Glow burst
                spawnPetalBurst(window.innerWidth / 2, window.innerHeight / 2);

                // Transition into Main Experience
                setTimeout(() => {
                    showScene("main-experience");
                    initMainExperience();
                }, 1400);
            },
        });
    };

    waxSeal.addEventListener("click", openEnvelope);
    wrapper.addEventListener("click", openEnvelope);
    unlockBtn.addEventListener("click", openEnvelope);
}

/* ── PHASE 3: MAIN EXPERIENCE (SCROLLING PAGE) ── */
function initMainExperience() {
    const container = document.querySelector("#mainExperience");
    container.scrollTop = 0;

    // Scroll Down Button
    const scrollDownBtn = document.querySelector("#scrollDownBtn");
    scrollDownBtn.addEventListener("click", () => {
        const target = document.querySelector("#sec-personal");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });

    // Init Audio Player
    initMusicPlayer();

    // Init Surprise Gift
    initSurpriseBox();

    // Init Replay Button
    const replayBtn = document.querySelector("#replayBtn");
    replayBtn.addEventListener("click", () => {
        // Reset audio if playing
        const audio = document.querySelector("#audioPlayer");
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        showScene("game");
        initGame();
    });

    // Setup Scroll Reveal Observer
    setupScrollObserver();
}

/* ── MUSIC PLAYER LOGIC ── */
function initMusicPlayer() {
    const audio = document.querySelector("#audioPlayer");
    const playBtn = document.querySelector("#playBtn");
    const playIcon = document.querySelector("#playIcon");
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");
    const albumArt = document.querySelector("#albumArt");
    const songTitle = document.querySelector("#songTitle");
    const songArtist = document.querySelector("#songArtist");
    const playerCard = document.querySelector("#playerCard");
    const progressFill = document.querySelector("#progressFill");
    const progressTrack = document.querySelector("#progressTrack");
    const timeCurrent = document.querySelector("#timeCurrent");
    const timeTotal = document.querySelector("#timeTotal");
    const bars = document.querySelectorAll(".music-bar-item");
    const pills = document.querySelectorAll(".playlist-pill");

    let currentTrackIndex = 0;
    state.isPlayingMusic = false;

    const tracks = birthdayData.music.tracks;

    function loadTrack(index, autoPlay = false) {
        currentTrackIndex = (index + tracks.length) % tracks.length;
        const trackObj = tracks[currentTrackIndex];

        audio.src = trackObj.track;
        albumArt.src = trackObj.cover;
        songTitle.textContent = trackObj.trackName;
        songArtist.textContent = trackObj.artist;

        progressFill.style.width = "0%";
        timeCurrent.textContent = "0:00";
        timeTotal.textContent = "0:00";

        pills.forEach((p, idx) => {
            if (idx === currentTrackIndex) {
                p.classList.add("active");
            } else {
                p.classList.remove("active");
            }
        });

        if (autoPlay || state.isPlayingMusic) {
            audio.play().then(() => {
                state.isPlayingMusic = true;
                playIcon.textContent = "❚❚";
                playerCard.classList.add("playing");
                animateMusicBars(true);
            }).catch(err => {
                console.log("Audio play error:", err);
            });
        } else {
            state.isPlayingMusic = false;
            playIcon.textContent = "▶";
            playerCard.classList.remove("playing");
            animateMusicBars(false);
        }
    }

    audio.addEventListener("loadedmetadata", () => {
        timeTotal.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
        if (audio.duration) {
            const pct = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = `${pct}%`;
            timeCurrent.textContent = formatTime(audio.currentTime);
        }
    });

    audio.addEventListener("ended", () => {
        // Auto-advance to next song
        loadTrack(currentTrackIndex + 1, true);
    });

    // Progress bar click to seek
    progressTrack.addEventListener("click", (e) => {
        const rect = progressTrack.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const pct = Math.max(0, Math.min(1, clickX / rect.width));
        if (audio.duration) {
            audio.currentTime = pct * audio.duration;
        }
    });

    playBtn.addEventListener("click", () => {
        if (state.isPlayingMusic) {
            audio.pause();
            playIcon.textContent = "▶";
            playerCard.classList.remove("playing");
            animateMusicBars(false);
            state.isPlayingMusic = false;
        } else {
            audio.play().then(() => {
                playIcon.textContent = "❚❚";
                playerCard.classList.add("playing");
                animateMusicBars(true);
                state.isPlayingMusic = true;
            }).catch(err => {
                console.log("Audio play error:", err);
            });
        }
    });

    prevBtn.addEventListener("click", () => {
        loadTrack(currentTrackIndex - 1, state.isPlayingMusic);
    });

    nextBtn.addEventListener("click", () => {
        loadTrack(currentTrackIndex + 1, state.isPlayingMusic);
    });

    pills.forEach((pill) => {
        pill.addEventListener("click", () => {
            const idx = parseInt(pill.dataset.index);
            loadTrack(idx, true);
        });
    });

    // Play the first track automatically when the experience is entered
    loadTrack(0, true);

    function animateMusicBars(playing) {
        if (!playing || prefersReducedMotion.matches) {
            gsap.to(bars, { scaleY: 0.3, duration: 0.3 });
            return;
        }
        gsap.to(bars, {
            scaleY: 1,
            duration: 0.4,
            stagger: 0.08,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
}

/* ── SMALL SURPRISE LOGIC ── */
function initSurpriseBox() {
    state.surpriseOpened = false;
    const wrapper = document.querySelector("#giftWrapper");
    const lid = document.querySelector("#giftLid");
    const revealBox = document.querySelector("#surpriseRevealBox");

    wrapper.addEventListener("click", () => {
        if (state.surpriseOpened) return;
        state.surpriseOpened = true;

        // Pop lid animation
        gsap.to(lid, {
            y: -50,
            rotation: -18,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.6)",
        });

        // Launch confetti burst
        launchConfetti();

        // Reveal surprise text card
        revealBox.classList.add("active");

        gsap.fromTo(
            revealBox,
            { scale: 0.85, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.7, delay: 0.3, ease: "back.out(1.4)" }
        );
    });
}

/* ── CONFETTI BURST ── */
function launchConfetti() {
    if (prefersReducedMotion.matches) return;
    const colors = ["#ffd54f", "#f48fb1", "#c2185b", "#ffffff", "#ff8a80"];

    for (let i = 0; i < 45; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.width = `${6 + Math.random() * 8}px`;
        piece.style.height = `${10 + Math.random() * 12}px`;
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
        confettiLayer.appendChild(piece);

        gsap.fromTo(
            piece,
            { y: -20, rotation: 0, opacity: 1 },
            {
                y: window.innerHeight * 0.8 + Math.random() * 200,
                x: (Math.random() - 0.5) * 250,
                rotation: 360 + Math.random() * 540,
                duration: 2 + Math.random() * 1.5,
                ease: "power1.out",
                onComplete: () => piece.remove(),
            }
        );
    }
}

/* ── SCROLL REVEAL OBSERVER ── */
function setupScrollObserver() {
    const targets = document.querySelectorAll(
        ".personal-card, .paper-letter, .player-card, .polaroid-card, .qr-panel, .section-hero .section-content, .section-final .section-content"
    );

    if (prefersReducedMotion.matches) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(
                        entry.target,
                        { opacity: 0, y: 35 },
                        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
                    );
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    targets.forEach((el) => {
        gsap.set(el, { opacity: 0 });
        observer.observe(el);
    });
}

/* ── INITIALIZATION ── */
createAmbientPetals();
initGame();
