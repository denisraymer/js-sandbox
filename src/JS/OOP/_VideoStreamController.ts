class Logger {
  getError = (): void => {}
}

class MessageDispatcher {
  getMessage = (): void => {}
  onMessage = (): void => {}
}

class MediaSourceController {
  private logger = new Logger()
  private mediaSource: MediaSource = new MediaSource()

  createSourceBuffer = (): void => {}

  /**/
  // loadPackage = (): void => {}
  // pushPackage = (): void => {}
  /**/

  public loadPackage = (): void => {}
}

class VideoStreamController {
  private mediaSourceController = new MediaSourceController()
  private messageDispatcher = new MessageDispatcher()

  // return {
  //   isRecording,
  //   messageType,
  // }
}
