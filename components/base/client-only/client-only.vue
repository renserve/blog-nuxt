<template>
    <div>
        <no-ssr v-if="public">
            <slot></slot>
        </no-ssr>
        <slot v-else></slot>
    </div>
</template>
<script>
  export default {
      props:{
          public:{
              type:Number,
              default:0
          }
      }
  }
</script>
<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
}

.spinner {
  position: relative;
  width: 40px;
  height: 40px;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
}

.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #3063b2;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@keyframes bounce {
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  }

  50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}

</style>
