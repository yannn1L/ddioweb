(function() {
  // ==================== SLIDESHOW + SWIPE ====================
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('dotsContainer');
  const captionEl = document.getElementById('caption');
  const swipeArea = document.getElementById('swipeArea');
  let currentIndex = 0;
  let slideInterval;
  const captions = [
    "Cokelat dan cinta, paduan manis",
    "Mawar merah untuk hatimu",
    "Hadiah kecil, makna besar",
    "Beruang yang selalu memeluk",
    "Kue cokelat, manis seperti senyummu"
  ];

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    const dots = document.querySelectorAll('.dot');
    dots.forEach((d, i) => d.classList.toggle('active-dot', i === index));
    captionEl.textContent = captions[index];
    captionEl.classList.add('show');
    setTimeout(() => captionEl.classList.remove('show'), 2000);
    currentIndex = index;
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  }

  function startSlideInterval() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  function createDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('button');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active-dot');
      dot.addEventListener('click', () => {
        showSlide(i);
        startSlideInterval();
      });
      dotsContainer.appendChild(dot);
    }
  }
  showSlide(0);
  createDots();
  startSlideInterval();

  swipeArea.addEventListener('mouseenter', () => clearInterval(slideInterval));
  swipeArea.addEventListener('mouseleave', startSlideInterval);

  // Swipe gesture
  let touchStartX = 0;
  let touchEndX = 0;
  const minSwipeDistance = 50;

  swipeArea.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  swipeArea.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  let mouseDown = false;
  swipeArea.addEventListener('mousedown', (e) => {
    mouseDown = true;
    touchStartX = e.screenX;
  });
  swipeArea.addEventListener('mousemove', (e) => {
    if (!mouseDown) return;
    touchEndX = e.screenX;
  });
  swipeArea.addEventListener('mouseup', () => {
    if (mouseDown) {
      handleSwipe();
      mouseDown = false;
    }
  });
  swipeArea.addEventListener('mouseleave', () => {
    mouseDown = false;
  });

  function handleSwipe() {
    const distance = touchEndX - touchStartX;
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) prevSlide();
      else nextSlide();
      startSlideInterval();
    }
  }

  // ==================== MUSIK ====================
  const audio = document.getElementById('bg-music');
  const musicToggle = document.getElementById('musicToggle');
  const musicStatus = document.getElementById('musicStatus');
  let musicPlaying = false;

  audio.muted = true;
  audio.play().then(() => {
    musicPlaying = true;
    musicStatus.innerText = 'Musik: menyala (mute)';
  }).catch(() => {
    musicStatus.innerText = 'Musik: klik untuk putar';
  });

  musicToggle.addEventListener('click', () => {
    if (musicPlaying) {
      if (audio.muted) {
        audio.muted = false;
        musicStatus.innerText = 'Musik: menyala ♫';
      } else {
        audio.pause();
        musicPlaying = false;
        musicStatus.innerText = 'Musik: mati';
      }
    } else {
      audio.muted = false;
      audio.play().then(() => {
        musicPlaying = true;
        musicStatus.innerText = 'Musik: menyala ♫';
      }).catch(() => alert('Izinkan interaksi untuk memutar musik.'));
    }
  });

  // ==================== PARTIKEL LATAR ====================
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];

  function resizeCanvas() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: 2 + Math.random() * 5,
        speedY: 0.1 + Math.random() * 0.2,
        speedX: (Math.random() - 0.5) * 0.1,
        opacity: 0.1 + Math.random() * 0.15,
        color: Math.random() > 0.6 ? '#8b6f50' : '#d4a574',
        shape: Math.random() > 0.9 ? '❤️' : '•'
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      ctx.globalAlpha = p.opacity;
      if (p.shape === '❤️') {
        ctx.font = `${p.size * 3}px 'Inter', sans-serif`;
        ctx.fillStyle = p.color;
        ctx.fillText('❤️', p.x, p.y);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      p.y += p.speedY;
      p.x += p.speedX;
      if (p.y > h + 10) { p.y = -10; p.x = Math.random() * w; }
      if (p.x > w + 10) p.x = -10;
      if (p.x < -10) p.x = w + 10;
    });
    requestAnimationFrame(drawParticles);
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });
  resizeCanvas();
  initParticles();
  drawParticles();

  // ==================== TIGA KUCING + NAMETAG + INTERAKSI ====================
  const catsContainer = document.getElementById('catsContainer');
  const meowAudio = document.getElementById('meowSound');
  const growlAudio = document.getElementById('growlSound');

  // Daftar pesan random
  const randomMessages = [
    "Meow! ❤️", "Purrr...", "Aku cinta kamu", "Cuddle?",
    "🐾", "Valentine!", "😽", "I love you", "cium dong",
    "miaw", "selamat hari kasih sayang", "nyenye", "nyiii", "🥰","sentuh aku!"
  ];

  // Data kucing dengan nama untuk nametag
  const catData = [
    { colorClass: 'cat-brown', startLeft: '5%', nama: 'tete' },
    { colorClass: 'cat-garfield', startLeft: '40%', nama: 'Garfield' },
    { colorClass: 'cat-blackwhite', startLeft: '75%', nama: 'ciko' }
  ];

  const cats = [];
  const CAT_WIDTH = 90;

  // Fungsi membuat partikel love di posisi kucing
  function createLoveParticles(catElement) {
    const rect = catElement.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 3;

    for (let i = 0; i < 5; i++) {
      const love = document.createElement('div');
      love.className = 'love-particle';
      love.textContent = '❤️';
      love.style.left = (x + (Math.random() - 0.5) * 40) + 'px';
      love.style.top = (y + (Math.random() - 0.5) * 20) + 'px';
      love.style.fontSize = (1.2 + Math.random() * 1) + 'rem';
      love.style.animationDuration = (0.8 + Math.random() * 0.5) + 's';
      document.body.appendChild(love);
      setTimeout(() => love.remove(), 1000);
    }
  }

  // Fungsi untuk melompat (menambahkan class jump dan menghapus setelah animasi)
  function jump(cat) {
    if (!cat.element) return;
    cat.element.classList.add('jump');
    setTimeout(() => {
      cat.element.classList.remove('jump');
    }, 500);
  }

  // Fungsi menampilkan pesan random
  function showRandomMessage(cat) {
    const msg = randomMessages[Math.floor(Math.random() * randomMessages.length)];
    cat.speech.textContent = msg;
    cat.speech.style.opacity = '1';
    setTimeout(() => {
      cat.speech.style.opacity = '0';
    }, 2000);
  }

  // Inisialisasi kucing
  catData.forEach((data, idx) => {
    const catDiv = document.createElement('div');
    catDiv.className = `cat ${data.colorClass}`;
    catDiv.style.bottom = '0px';

    // 1. NAMETAG
    const nameTag = document.createElement('div');
    nameTag.className = 'nametag';
    nameTag.textContent = data.nama;
    catDiv.appendChild(nameTag);

    // 2. SPEECH BUBBLE
    const speechDiv = document.createElement('div');
    speechDiv.className = 'speech-bubble';
    speechDiv.textContent = 'halo';
    catDiv.appendChild(speechDiv);

    // 3. BADAN KUCING
    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'cat-body';
    bodyDiv.innerHTML = `
      <div class="cat-ear ear-left"></div>
      <div class="cat-ear ear-right"></div>
      <div class="cat-face">
        <div class="eye eye-left"><div class="pupil"></div></div>
        <div class="eye eye-right"><div class="pupil"></div></div>
        <div class="nose"></div>
        <div class="whiskers">
          <div class="whisker whisker-left1"></div>
          <div class="whisker whisker-left2"></div>
          <div class="whisker whisker-right1"></div>
          <div class="whisker whisker-right2"></div>
        </div>
      </div>
      <div class="cat-tail"></div>
    `;
    catDiv.appendChild(bodyDiv);

    catsContainer.appendChild(catDiv);

    // Hitung posisi awal
    const startLeftPercent = parseFloat(data.startLeft) / 100;
    let startX = startLeftPercent * window.innerWidth;
    startX = Math.max(-30, Math.min(window.innerWidth - CAT_WIDTH + 30, startX));
    catDiv.style.left = startX + 'px';

    const catState = {
      element: catDiv,
      speech: speechDiv,
      x: startX,
      direction: Math.random() > 0.5 ? 1 : -1,
      speed: 0.3 + Math.random() * 0.5,
      jumpTimer: null,
      messageTimer: null,
      idx: idx
    };

    // Event interaksi: lompat + partikel + suara + bubble
    const interact = (e) => {
      e.preventDefault();
      jump(catState);
      createLoveParticles(catDiv);
      speechDiv.textContent = idx === 1 ? 'purrr...' : 'meow!';
      speechDiv.style.opacity = '1';
      setTimeout(() => { speechDiv.style.opacity = '0'; }, 1500);
      if (idx === 1) growlAudio.play().catch(()=>{});
      else meowAudio.play().catch(()=>{});
    };

    catDiv.addEventListener('mouseenter', interact);
    catDiv.addEventListener('touchstart', interact);

    cats.push(catState);
  });

  // Timer lompat dan pesan random
  cats.forEach(cat => {
    function scheduleJump() {
      const delay = 8000 + Math.random() * 5000;
      cat.jumpTimer = setTimeout(() => {
        jump(cat);
        scheduleJump();
      }, delay);
    }
    scheduleJump();

    function scheduleMessage() {
      const delay = 4000 + Math.random() * 4000;
      cat.messageTimer = setTimeout(() => {
        showRandomMessage(cat);
        scheduleMessage();
      }, delay);
    }
    scheduleMessage();
  });

  // Animasi jalan
  function walkAnimation() {
    cats.forEach(cat => {
      let newX = cat.x + cat.direction * cat.speed;
      const minX = -30;
      const maxX = window.innerWidth - CAT_WIDTH + 30;

      if (newX < minX) {
        newX = minX;
        cat.direction = 1;
      } else if (newX > maxX) {
        newX = maxX;
        cat.direction = -1;
      }

      cat.x = newX;
      cat.element.style.left = newX + 'px';
    });
    requestAnimationFrame(walkAnimation);
  }
  walkAnimation();

  window.addEventListener('resize', () => {
    cats.forEach(cat => {
      const maxX = window.innerWidth - CAT_WIDTH + 30;
      const minX = -30;
      let x = cat.x;
      if (x < minX) x = minX;
      if (x > maxX) x = maxX;
      cat.x = x;
      cat.element.style.left = x + 'px';
    });
  });

  window.addEventListener('beforeunload', () => {
    cats.forEach(cat => {
      if (cat.jumpTimer) clearTimeout(cat.jumpTimer);
      if (cat.messageTimer) clearTimeout(cat.messageTimer);
    });
  });
})();
