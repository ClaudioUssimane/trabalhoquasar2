<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Estrelas Decorativas</h5>
    <div class="stars">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StarsView'
})
</script>

<style scoped>
.stars {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.star {
  width: 150px; /* Tamanho ainda maior das estrelas */
  height: 150px; /* Tamanho ainda maior das estrelas */
  background: #ff0000; /* Cor vermelha das estrelas */
  border-radius: 50%;
  margin: 0 30px; /* Espaçamento entre as estrelas */
  animation: twinkle 1s infinite alternate; /* Animação de rotação e piscar mais rápida */
  transform-origin: center;
}

@keyframes twinkle {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 0.3;
  }
  100% {
    transform: scale(1.1) rotate(360deg);
    opacity: 1;
  }
}
</style>
