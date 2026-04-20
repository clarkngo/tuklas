/* ── Smooth scroll for anchor links ──────────────────────── */
document.querySelectorAll('a[href^="#"], .scroll-link').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeMenu();
        }
    });
});

/* ── Active nav on scroll ─────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));

/* ── Hamburger menu ──────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navList   = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navList.classList.toggle('open');
});
function closeMenu() {
    hamburger.classList.remove('open');
    navList.classList.remove('open');
}

/* ── Topic filtering ─────────────────────────────────────── */
const filterBtns   = document.querySelectorAll('.filter-btn');
const topicCards   = document.querySelectorAll('.topic-card');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        topicCards.forEach(card => {
            const mentors = card.dataset.mentors || '';
            if (filter === 'all' || mentors.includes(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

/* ── Booking modal ───────────────────────────────────────── */
const bookingModal  = document.getElementById('booking-modal');
const modalClose    = document.getElementById('modal-close');
const bookMentorSel = document.getElementById('book-mentor');
const bookTopicSel  = document.getElementById('book-topic');

function openBookingModal(mentor = '', topic = '') {
    if (mentor) bookMentorSel.value = mentor;
    if (topic)  bookTopicSel.value  = topic;
    bookingModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeBookingModal() {
    bookingModal.classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('nav-book-btn').addEventListener('click', () => openBookingModal());

document.querySelectorAll('.book-mentor-btn').forEach(btn => {
    btn.addEventListener('click', () => openBookingModal(btn.dataset.mentor));
});

document.querySelectorAll('.topic-book-btn').forEach(btn => {
    btn.addEventListener('click', () => openBookingModal(btn.dataset.mentor, btn.dataset.topic));
});

modalClose.addEventListener('click', closeBookingModal);
bookingModal.querySelector('.modal-overlay').addEventListener('click', closeBookingModal);

document.getElementById('booking-form').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const sessionType = e.target.querySelector('[name="session-type"]:checked').value;
    const body = `Name: ${data.name}\nEmail: ${data.email}\nMentor: ${data.mentor || 'No preference'}\nTopic: ${data.topic || 'TBD'}\nSession: ${sessionType}\n\n${data.message || ''}`;
    window.location.href = `mailto:clarkngo@gmail.com?subject=Tuklas Session Request – ${data.topic || 'General'}&body=${encodeURIComponent(body)}`;
    closeBookingModal();
    showToast('Booking request sent! We\'ll be in touch soon.');
    e.target.reset();
});

/* ── Match quiz modal ────────────────────────────────────── */
const matchModal    = document.getElementById('match-modal');
const matchClose    = document.getElementById('match-close');
const quizContainer = document.getElementById('quiz-container');

const quiz = [
    {
        q: 'What best describes your primary goal?',
        opts: [
            { text: '🚀 Build a tech product or start coding', scores: { clark: 3, christine: 0 } },
            { text: '📊 Work with data, AI, or automation',    scores: { clark: 3, christine: 0 } },
            { text: '🎉 Plan an event or manage a project',    scores: { clark: 0, christine: 3 } },
            { text: '📣 Grow a brand or manage social media',  scores: { clark: 0, christine: 3 } },
        ]
    },
    {
        q: 'Which field are you currently working in?',
        opts: [
            { text: '💻 Software / Engineering',     scores: { clark: 3, christine: 0 } },
            { text: '📈 Marketing / Communications',  scores: { clark: 0, christine: 3 } },
            { text: '🏢 Business / Operations',       scores: { clark: 1, christine: 2 } },
            { text: '🌱 I\'m switching careers',      scores: { clark: 1, christine: 1 } },
        ]
    },
    {
        q: 'Which skill do you most want to develop?',
        opts: [
            { text: '🤖 AI, ML, or data pipelines',     scores: { clark: 3, christine: 0 } },
            { text: '🌐 Web/mobile app development',     scores: { clark: 3, christine: 0 } },
            { text: '🎨 Creative or content production', scores: { clark: 0, christine: 3 } },
            { text: '📋 Project or event coordination',  scores: { clark: 1, christine: 3 } },
        ]
    }
];

let quizScores = { clark: 0, christine: 0 };
let quizStep   = 0;

function renderQuiz() {
    if (quizStep < quiz.length) {
        const step = quiz[quizStep];
        quizContainer.innerHTML = `
            <div class="quiz-step">
                <p style="font-size:0.82rem;color:var(--muted)">Question ${quizStep + 1} of ${quiz.length}</p>
                <h3>${step.q}</h3>
                <div class="quiz-options">
                    ${step.opts.map((o, i) => `<button class="quiz-option" data-index="${i}">${o.text}</button>`).join('')}
                </div>
            </div>`;
        quizContainer.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const opt = step.opts[+btn.dataset.index];
                quizScores.clark     += opt.scores.clark;
                quizScores.christine += opt.scores.christine;
                quizStep++;
                renderQuiz();
            });
        });
    } else {
        const winner = quizScores.clark >= quizScores.christine ? 'clark' : 'christine';
        const name   = winner === 'clark' ? 'Clark Ngo' : 'Christine Emano';
        const img    = winner === 'clark' ? 'assets/clark-ngo.png' : 'assets/christine-emano.png';
        const skills = winner === 'clark'
            ? 'AI/ML, Full-Stack Development, Data Engineering, and DevOps'
            : 'Event Management, Creative Direction, Social Media, and Copywriting';
        quizContainer.innerHTML = `
            <div class="quiz-result">
                <p>Your best match is</p>
                <img src="${img}" alt="${name}">
                <div class="match-name">${name}</div>
                <p class="match-reason">Based on your answers, ${name.split(' ')[0]} can help you with ${skills}.</p>
                <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">
                    <button class="btn btn-primary" id="quiz-book-btn" data-mentor="${name}">Book a Session</button>
                    <button class="btn btn-ghost" id="quiz-restart-btn">Try Again</button>
                </div>
            </div>`;
        document.getElementById('quiz-book-btn').addEventListener('click', e => {
            closeMatchModal();
            openBookingModal(e.target.dataset.mentor);
        });
        document.getElementById('quiz-restart-btn').addEventListener('click', () => {
            quizScores = { clark: 0, christine: 0 };
            quizStep = 0;
            renderQuiz();
        });
    }
}

function openMatchModal() {
    quizScores = { clark: 0, christine: 0 };
    quizStep = 0;
    renderQuiz();
    matchModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeMatchModal() {
    matchModal.classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('hero-match-btn').addEventListener('click', openMatchModal);
matchClose.addEventListener('click', closeMatchModal);
matchModal.querySelector('.modal-overlay').addEventListener('click', closeMatchModal);

/* ── Close modals with Escape ────────────────────────────── */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeBookingModal();
        closeMatchModal();
    }
});

/* ── Contact form ─────────────────────────────────────────── */
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const body = `From: ${data.name} <${data.email}>\n\n${data.message}`;
    window.location.href = `mailto:clarkngo@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
    showToast('Message sent! We\'ll get back to you soon.');
    e.target.reset();
});

/* ── Toast notification ──────────────────────────────────── */
function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ── Scroll-reveal animations ────────────────────────────── */
const fadeTargets = document.querySelectorAll(
    '.topic-card, .mentor-card, .about-card, .stat, .section-header'
);
fadeTargets.forEach(el => el.classList.add('fade-up'));
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
fadeTargets.forEach(el => revealObserver.observe(el));
