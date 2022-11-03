// https://www.youtube.com/watch?v=SLQAVVziUzg
"use strict"

const USERS_API_URL = "https:///jsonplaceholder.typicode.com/users"

// const webCam = navigator.mediaDevices
//   .getUserMedia({ video: true })
//   .then((mediaStream) => {
//     // $Video.srcObject = mediaStream
//   })
//   .catch((error) => {
//     console.log("Video ERROR: ", error.message)
//   })

const getUser = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    return `User data: ${data}`
  } catch (error) {
    console.error("User data error: ", error.message)
  }
}

const getWebCam = async (videoElement, enableVideo = false) => {
  try {
    videoElement.srcObject = await navigator.mediaDevices.getUserMedia({
      video: enableVideo,
    })
  } catch (error) {
    console.log("Video ERROR: ", error.message)
  }
}

;(function startApp() {
  const $content = document.getElementById("root")
  const $Video = document.getElementById("video")

  getWebCam($Video, false)
  getUser(USERS_API_URL)
})()
