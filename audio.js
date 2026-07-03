// Shared background audio for the site
(function () {
  const existing = document.getElementById('bg-audio');
  if (existing) return; // avoid duplicate

  const bgAudio = document.createElement('audio');
  bgAudio.id = 'bg-audio';
  bgAudio.src = 'yalin-aksamustu-37.mp3';
  bgAudio.loop = true;
  bgAudio.autoplay = true;
  bgAudio.preload = 'auto';
  bgAudio.playsInline = true;
  document.body.appendChild(bgAudio);

  const audioToggle = document.createElement('button');
  audioToggle.id = 'audio-toggle';
  audioToggle.className = 'audio-toggle';
  audioToggle.setAttribute('aria-pressed', 'false');
  audioToggle.title = 'Müziği başlat/durdur';
  audioToggle.textContent = '♫';
  document.body.appendChild(audioToggle);

  function updateToggleState() {
    audioToggle.setAttribute('aria-pressed', String(!bgAudio.paused));
    audioToggle.textContent = bgAudio.paused ? '♫' : '▮▮';
  }

  audioToggle.addEventListener('click', () => {
    if (bgAudio.paused) bgAudio.play(); else bgAudio.pause();
    updateToggleState();
  });

  // Attempt immediate playback; if blocked, user can use the toggle
  bgAudio.play().then(() => updateToggleState()).catch(() => updateToggleState());
})();
