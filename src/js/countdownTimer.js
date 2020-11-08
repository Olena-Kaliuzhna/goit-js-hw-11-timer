export default class CountdownTimer{
  constructor({ selector, targetDate}){
        this.intervalId = null;
        this.selector = document.querySelector(`${selector}`);
        this.targetDate = targetDate;

        this.init();
    }
     init() {
        const time = this.getTimeComponents(0);
        this.updateClockFace(time);
    }
     start() {
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            
            const time = this.getTimeComponents(deltaTime);
            this.updateClockFace(time);
        }, 1000);
    }
      updateClockFace({ days, hours, mins, secs }) {
        this.selector.querySelector('[data-value="days"]').textContent = days;
        this.selector.querySelector('[data-value="hours"]').textContent = hours;
        this.selector.querySelector('[data-value="mins"]').textContent = mins;
        this.selector.querySelector('[data-value="secs"]').textContent = secs;
    }  
    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }
      pad(value) {
        return String(value).padStart(2, '0');
    }
     
     
};



