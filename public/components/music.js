// open music player from nav
const musicPlayer = document.querySelector('.music_player');

document.querySelector('.music_player_open').addEventListener('click', () => {
  musicPlayer.style.display = 'flex';
});

// close music player 

document.querySelector('.close_music').addEventListener('click', () => {
  musicPlayer.style.display = 'none';
})
