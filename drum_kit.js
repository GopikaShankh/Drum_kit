const buttons = document.querySelectorAll('button');
const bassDrumButton = document.querySelector('.bass_drum');
const snareDrumButton = document.querySelector('.snare_drum');
const tomsButton = document.querySelector('.toms');
const hiHatButton = document.querySelector('.hi-hat');
const rideCymbalButton = document.querySelector('.ride_cymbal');
const crashCymbalButton = document.querySelector('.crash_cymbal');

let currentlyPlayingAudio = null;
const originalBackground = "url('https://cdnb.artstation.com/p/assets/images/images/039/879/487/original/stanislaw-maciejewski-creaks-transformation-animation.gif?1627227872')";

function playAudio(audioSrc, imageUrl) {
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0;
    }

    const audio = new Audio(audioSrc);

    audio.play();
    currentlyPlayingAudio = audio;

    document.body.style.backgroundImage = `url('${imageUrl}')`;

    buttons.forEach(button => button.classList.add('transparent'));

    audio.addEventListener('ended', () => {
        document.body.style.backgroundImage = originalBackground; // Revert to original background
        buttons.forEach(button => button.classList.remove('transparent')); // Make all buttons fully visible again
    });
}

bassDrumButton.addEventListener('click', () => {
    playAudio('mixkit-cool-impact-movie-trailer-2909.wav', 'https://giffiles.alphacoders.com/200/200780.gif'); 
});

snareDrumButton.addEventListener('click', () => {
    playAudio('mixkit-drum-joke-accent-579.wav', 'https://i.chzbgr.com/full/6209449216/h79F82EEA/ai-is-a-rock-god');
});

tomsButton.addEventListener('click', () => {
    playAudio('mixkit-drumming-jungle-music-2426.wav', 'https://i.pinimg.com/originals/82/78/66/82786662cee268c2628bdf038f5cd7a4.gif');
});

hiHatButton.addEventListener('click', () => {
    playAudio('sunflower-street-drumloop-85bpm-163900.mp3', 'https://media.tenor.com/Qp0P8P7EICcAAAAM/sifchain-cosmos.gif');
});

rideCymbalButton.addEventListener('click', () => {
    playAudio('54323351_drums-opening-logo_by_ecolins_preview.mp3', 'https://i.pinimg.com/originals/2d/8a/ef/2d8aefd6d5c5a7f16bcbb974380e31a8.gif');
});

crashCymbalButton.addEventListener('click', () => {
    playAudio('54110073_ethnic-drum-ident_by_elegantdiamond_preview.mp3', 'https://media.tenor.com/5DWvhSm0804AAAAM/zoe-playing-drums.gif');
});

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'b':
            bassDrumButton.click();
            break;
        case 's':
            snareDrumButton.click();
            break;
        case 't':
            tomsButton.click();
            break;
        case 'h':
            hiHatButton.click();
            break;
        case 'r':
            rideCymbalButton.click();
            break;
        case 'c':
            crashCymbalButton.click();
            break;
    }
});
