const timeFormat = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const minutesRemainder = minutes % 60
    const hrOrHrs = hours > 1 ? "hrs" : "hr"
    return `${hours}${hrOrHrs} ${minutesRemainder}min`
}

export default timeFormat