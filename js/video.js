var video = document.querySelector("#player1");

window.addEventListener('load', (event) => {
	console.log('page is fully loaded');
  	});

// play video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.getElementById("volume").innerHTML=video.volume*100+"%";
	});

// pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
	});

// slow down video
document.querySelector("#slower").addEventListener("click", function() {
	console.log(video.playbackRate);
	video.playbackRate-=0.05;
});

// speed up video
document.querySelector("#faster").addEventListener("click", function() {
	console.log(video.playbackRate);
	video.playbackRate+=0.05;
});

// skip 15s of video
document.querySelector('#skip').addEventListener("click", function() {
	console.log(video.currentTime);
	video.currentTime+=15;

	if (video.currentTime>=video.duration) {
		video.currentTime=0; // go back to start of video
		console.log(video.currentTime);
	}
});

// mute/unmute video
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");

	if(video.muted) {
		video.muted = false;
		document.getElementById("mute").innerHTML="Mute"
	} else {
		video.muted=true;
		document.getElementById("mute").innerHTML="Unmute"
	}
});

// volume slider
document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume=this.value/100;
	document.getElementById("volume").innerHTML=this.value+"%"
});

// oldSchool clicked
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool')
});

// Original clicked
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
});