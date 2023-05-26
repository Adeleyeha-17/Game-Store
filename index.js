"use strict";

const video = document.getElementById("video");
const loopBtn = document.getElementById("loop-button");
const playBtn = document.getElementById("play-button");
const volBtn = document.getElementById("volume-button");
const vidLength = document.querySelector(".video-length");
const viewersBtn = document.getElementById("live-streamers");
const viewersNum = document.getElementById("toggle-number");

// Play  and pause the video when the play button is clicked
playBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.classList.replace("fi-rs-play", "fi-rs-pause");
  } else {
    video.pause();
    playBtn.classList.replace("fi-rs-pause", "fi-rs-play");
  }
});

// Mute or unmute the video when the volume button is clicked
volBtn.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    volBtn.classList.replace("fi-rs-volume-mute", "fi-rs-volume");
  } else {
    video.muted = true;
    volBtn.classList.replace("fi-rs-volume", "fi-rs-volume-mute");
  }
});

// Video length and countdown
video.addEventListener("loadedmetadata", function () {
  const duration = video.duration;

  const hours = Math.floor(duration / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((duration % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(duration % 60)
  
    .toString()
    .padStart(2, "0");

  vidLength.textContent = `${hours}:${minutes}:${seconds}`;

  video.addEventListener("timeupdate", function () {
    const currentTime = video.currentTime;
    const remainingTime = duration - currentTime;

    const remainingHours = Math.floor(remainingTime / 3600)
      .toString()
      .padStart(2, "0");
    const remainingMinutes = Math.floor((remainingTime % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = Math.floor(remainingTime % 60)
      .toString()
      .padStart(2, "0");

    // Display the formatted remaining time in the vidLength element
    const timeStamp = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`
    vidLength.textContent = timeStamp;

    if (timeStamp === "00:00:00") {
      playBtn.classList.replace("fi-rs-pause", "fi-rs-play")
    }
  });
});

// Loop functionality
loopBtn.addEventListener("click", function () {
  video.loop = !video.loop;
  if (video.loop) {
    loopBtn.style.color = "#cad686";
  } else {
    loopBtn.style.color = "inherit";
  }
});

viewersBtn.addEventListener("click", function () {
  //   viewersNum.textContent = viewersNum.textContent === '24.7k' ? '***' : '24.7k'

  if (viewersNum.textContent === "24.7k") {
    viewersNum.textContent = "***";
    viewersBtn.classList.replace("fi fi-rs-eye", "fi fi-br-eye-crossed");
  } else {
    viewersNum.textContent = "24.7k";
    viewersBtn.classList.replace("fi fi-br-eye-crossed", "fi fi-rs-eye");
  }
});