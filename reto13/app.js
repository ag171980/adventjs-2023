function calculateTime (deliveries) {
  const HOUR_LIMIT = 25200
  const MINUTE_DEFAULT = 60
  const HOUR_DEFAULT = 3600
  let timeSeconds = 0

  for (const delivery of deliveries) {
    timeSeconds +=
      +delivery.split(':')[0] * HOUR_DEFAULT +
      +delivery.split(':')[1] * MINUTE_DEFAULT +
      +delivery.split(':')[2]
  }
  let diffPositive = HOUR_LIMIT > timeSeconds
  timeSeconds = HOUR_LIMIT - timeSeconds
  let hours = Math.trunc(timeSeconds / HOUR_DEFAULT)
  timeSeconds = timeSeconds - HOUR_DEFAULT * hours
  let minutes = Math.trunc(timeSeconds / MINUTE_DEFAULT)
  timeSeconds = timeSeconds - MINUTE_DEFAULT * minutes

  return `${diffPositive ? '-' : ''}${'0'.repeat(
    Math.abs(hours) < 10
  )}${Math.abs(hours)}:${'0'.repeat(Math.abs(minutes) < 10)}${Math.abs(
    minutes
  )}:${'0'.repeat(Math.abs(timeSeconds) < 10)}${Math.abs(timeSeconds)}`
}

// calculateTime(['00:10:00', '01:00:00', '03:30:00'])
// // '-02:20:00'

// calculateTime(['02:00:00', '05:00:00', '00:30:00'])
// // '00:30:00'

// calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']) // '-05:29:00'

calculateTime(['01:00:00', '05:00:00', '00:30:00'])
//21600
//1800
