const API_KEY = 'AIzaSyDCN-xfHa988YHgnBY3gobChyjUdp6iwQU';


const VIDEO_ID = '12219190';

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {

    switch (event.data) {
        case YT.PlayerState.PLAYING:

            console.log('Video is playing');
            break;
        case YT.PlayerState.PAUSED:

            console.log('Video is paused');
            break;
        case YT.PlayerState.ENDED:

            console.log('Video has ended');
            break;
        case YT.PlayerState.BUFFERING:

            console.log('Video is buffering');
            break;
        case YT.PlayerState.CUED:

            console.log('Video is cued');
            break;
    }
}