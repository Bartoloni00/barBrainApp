<script setup></script>
<template>
    <div class="h-[78vh] flex items-center justify-center">
        <div class="loader"></div>
    </div>
</template>
<style scoped>
.loader {
    width: 42px;
    height: 96px;
    position: relative;
  }
  .loader:after {
    content: "";
    position: absolute;
    inset: 0;
    padding: 3px 5px;
    border-top: 1px solid #FFD166;
    border-bottom: 4px solid #FFD166;
    background: 
      linear-gradient(#8f0010 0 0) bottom no-repeat content-box, 
      #957200;
    mix-blend-mode: darken;
    animation: l1 1.5s infinite linear;
  }
  .loader:before {
    content: "";
    position: absolute;
    inset: -18px calc(50% - 2px) 8px;
    background: #FF6F61;   
    transform-origin: bottom;
    transform: rotate(8deg);
  }
  @keyframes l1 {
   0%   {background-size: 100% 100%}
   100% {background-size: 100% 5%}
  }
</style>