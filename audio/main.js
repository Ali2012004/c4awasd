var audiotrack = WaveSurfer.create({
    container: '.audio',
    waveColor: '#eee',
    progressColor: 'red',
    barwidth: 5,
  })

  audiotrack.load('../audio/track1.mp3')

  const playBtn = document.querySelector('.play-btn');
  const stopBtn = document.querySelector('.stop-btn');
  const muteBtn = document.querySelector('.mute-btn');
  const volumeSlider = document.querySelector('.volume-slider');

