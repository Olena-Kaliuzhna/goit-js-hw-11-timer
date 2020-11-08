
import CountdownTimer from './countdownTimer';
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021 00:00:01'),
});

window.onload = timer.start();



