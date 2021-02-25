<template>
  <div class="hello">
    <button type="button" @click="show">Roll It</button><br><br>
    <div id="base" :class="rotate ? 'rotate' : ''">
      <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <rect v-if="help" x="0" y="0" width="100%" height="100%" fill="#dddddd"/>
        <circle cx="500" cy="500" r="487" stroke="#1da025" stroke-width="25" fill="#ffffff"/>
        <!-- grid -->
        <template v-if="help">
          <line v-for="n in 42" :key="`hor_${n}`" x1="0" x2="1000" :y1="25*n" :y2="25*n" class="grid-line grid-line-hor"/>
          <line v-for="n in 42" :key="`ver_${n}`" y1="0" y2="1000" :x1="25*n" :x2="25*n" class="grid-line grid-line-ver"/>
        </template>

        <path d="M300,200 L300,800 L700,800 L700,775 L325,775 L325,500 
        A 375, 150, 0, 1, 0, 325, 200 
        L325,200 L300,200 z" stroke="#251da0" fill="#251da0"/>

        <path d="M325,255 L325,475
        A 340, 125, 0, 1, 0, 325, 225 
        z" stroke="#251da0" fill="white"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      help: false,
      rotate: false,
    }
  },
  methods: {
    show() {
      this.rotate = true
    },
  },
}
</script>

<style scoped>
#base {
  width: 1000px;
  margin: auto;
  position: relative;
  left: -600px;
  top: -400px;
  transform: scale(0.1);
}

#base.rotate {
  animation: 3s linear 0.1s 1 forwards rotation;
}

@keyframes rotation {
  0% {
    transform: scale(0.1) translate(0px, 0px) rotate(0deg);
  }
  20% {
    transform: scale(0.1) translate(10000px, 0px) rotate(360deg);
  }
  40% {
    transform: scale(0.1) translate(10000px, 2000px) rotate(720deg);
  }
  60% {
    transform: scale(0.1) translate(6000px, 2000px) rotate(1080deg);
  }
  70% {
    transform: scale(0.1) translate(6000px, 3500px) rotate(1440deg);
  }
  80% {
    transform: scale(0.1) translate(6000px, 3500px) rotate(2160deg);
  }
  85% {
    transform: scale(0.1) translate(6000px, 3500px) rotate(2160deg);
  }
  100% {
    transform: scale(1) translate(600px, 480px) rotate(2520deg);
  }
}

.grid-line {
  stroke: rgb(175, 175, 175);
  stroke-width: 1;
  stroke-dasharray: 5, 5;
}

.grid-line-hor:nth-child(4n+2) {
  stroke: rgb(125, 125, 125);
  stroke-dasharray: 0;
}

.grid-line-ver:nth-child(4n) {
  stroke: rgb(125, 125, 125);
  stroke-dasharray: 0;
}
</style>
