/* to set current time */
const time = new Date();
const hour = -3600 * (time.getHours() % 12);
const mins = -60 * time.getMinutes();
document.body.style.setProperty('--clock-delay-minutes', `${mins}s`);
document.body.style.setProperty('--clock-delay-hours', `${(hour+mins)}s`);