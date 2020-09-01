const videoElement = document.getElementById('video');
const button = document.getElementById('button');




// Prompt user to select a media stream, pass that to video element, then play
async function selectMediaStream() {

    try {

        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {

            videoElement.play();
        }

    } catch (error) {

        console.log('oops, error here: ', error);
    }
}

button.addEventListener('click', async () => {

    button.disabled = false;


    if (videoElement.srcObject === null) {
        selectMediaStream();
    }


    // Start Picture in picture
    await videoElement.requestPictureInPicture();

    // Disable the Button
    button.disabled = true;


});




