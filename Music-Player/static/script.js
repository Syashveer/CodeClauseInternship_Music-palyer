document.addEventListener("DOMContentLoaded", function() {
    const playPauseBtn = document.getElementById("play-pause-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const songTitle = document.getElementById("song-title");
    const artist = document.getElementById("artist");
    const progressBar = document.querySelector(".progress-bar");

    let isPlaying = false;
    let currentSongIndex = 0;
    const songs = [
        { title: "Song 1", artist: "Artist 1", src: "D:\CodeCluase\Music-Player\static\music\song1.mp3" },
        { title: "Song 2", artist: "Artist 2", src: "D:\CodeCluase\Music-Player\static\music\song2.mp3" },
        // Add more songs as needed
    ];

    let audio = new Audio(songs[currentSongIndex].src);

    playPauseBtn.addEventListener("click", function() {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    function playSong() {
        isPlaying = true;
        playPauseBtn.innerHTML = "&#10074;&#10074;";
        audio.play();
    }

    function pauseSong() {
        isPlaying = false;
        playPauseBtn.innerHTML = "&#9658;";
        audio.pause();
    }

    prevBtn.addEventListener("click", function() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong();
    });

    nextBtn.addEventListener("click", function() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong();
    });

    function loadSong() {
        audio.pause();
        audio = new Audio(songs[currentSongIndex].src);
        songTitle.innerText = songs[currentSongIndex].title;
        artist.innerText = songs[currentSongIndex].artist;
        if (isPlaying) {
            playSong();
        }
    }
});
