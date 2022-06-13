const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// prompt usern to select media stream,pass to video element then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (err) {
        // catch error here
        console.log('OOPS !! Error occured !! ', err)
    }
}

// on load

button.addEventListener('click', async () => {
    button.disabled = true
    await videoElement.requestPictureInPicture()
    button.disabled = false

})
selectMediaStream()