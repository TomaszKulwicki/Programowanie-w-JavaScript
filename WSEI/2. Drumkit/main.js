document.body.addEventListener('keypress', onKeyPress);
document.querySelector('#recordBtn').addEventListener('click', onRecordBtnClick);
document.querySelector('#playBtn').addEventListener('click', onPlayBtnClick);
document.querySelector('#clearBtn').addEventListener('click', onClearBtnClick);

let recordStartTime;
const recordedSounds = [];

function onKeyPress(ev) {
    let soundName;
    switch (ev.code) {
    case 'KeyA':
        soundName = 'boom';
        break;
    case 'KeyS':
        soundName = 'clap';
        break;
    case 'KeyD':
        soundName = 'hihat';
        break;
    case 'KeyF':
        soundName = 'kick';
        break;
    case 'KeyG':
        soundName = 'openhat';
        break;
    case 'KeyH':
        soundName = 'ride';
        break;
    case 'KeyJ':
        soundName = 'snare';
        break;
    case 'KeyK':
        soundName = 'tink';
        break;
    case 'KeyL':
        soundName = 'tom';
        break;
    }
    if (soundName) {
        const soundTime = Date.now() - recordStartTime;
        const soundObj = {
            id: soundName, 
            time: soundTime
        };
        recordedSounds.push(soundObj);
        playSound(soundName);
    }
}

function onClearBtnClick() {
    recordedSounds.length = 0;
    console.log('clear');
}

function onRecordBtnClick() {
    recordStartTime = Date.now();
    console.log('record');
}

function onPlayBtnClick() {
    for (let index = 0; index < recordedSounds.length; index++) {
        const soundObj = recordedSounds[index];
        setTimeout(
            () => {
                playSound(soundObj.id);
            },
            soundObj.time
        );
    }
    console.log('play');
}

function playSound(id) {
    const sound = document.querySelector('#' + id);
    sound.currentTime = 0;
    sound.play();
    console.log(sound);
}