const commandTimings = () => {
    Cypress.on('log:changed', options => {
      if (options.instrument === 'command' && options.consoleProps) {
        options.wallClockStoppedAt = Date.now()
        options.duration = +options.wallClockStoppedAt - (+ new Date(options.wallClockStartedAt))
        options.consoleProps.Duration = options.duration
      }
    })
  }
  
  module.exports = {commandTimings}
  