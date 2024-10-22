<template>
  <div class="slot-machine">
    <div class="wallet" v-if="!gameOver">
      <p>Presupuesto: {{ budget }} monedas</p>
    </div>
    
    <div class="reels" v-if="!gameOver">
      <div v-for="(reel, index) in currentReels" :key="index" class="reel">
        <img :src="reel.img" :alt="reel.name" />
      </div>
    </div>
    
    <button @click="spin" :disabled="budget <= 0 || gameOver" v-if="!gameOver">Tirar</button>
    
    <div v-if="message && !gameOver" class="message">{{ message }}</div>
    
    <div v-if="gameOver" class="game-over">
      <p>Has perdido</p>
      <button @click="restartGame" class="close-btn">X</button>
    </div>
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>
