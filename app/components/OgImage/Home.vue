<script setup lang="ts">
defineProps({
  title: { type: String, default: 'Gabriel Rosa' },
  subtitle: { type: String, default: 'Software Engineer & DevOps' },
  im: { type: String, default: "I'm" },
  aka: { type: String, default: 'aka' },
})
</script>

<template>
  <!-- eslint-disable vue/no-restricted-static-attribute, vue/no-bare-strings-in-template -->
  <div style="width: 100%; height: 100%; background-color: #1e1e2e">
    <h1
      style="
        border-bottom: 2px solid #f28aa9;
        font-size: 60px;
        color: #cdd5f4;
        position: absolute;
        left: 50%;
        top: 10%;
        transform: translate(-50%, -50%);
      ">
      {{ title }}
    </h1>
    <div
      style="
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
      <img
        src="https://rosa.dev.br/gsr.png"
        alt="Gabriel Rosa"
        width="13rem"
        height="13rem"
        style="
          border: 2px solid #f28aa9;
          border-radius: 9999px;
          width: 13rem;
          height: 13rem;
          margin-right: 30px;
        " />
      <div style="margin-inline-start: 1.5rem">
        <h2 style="font-size: 40px; color: #cdd5f4">
          <span style="margin-right: 10px">{{ im }}</span>
          <span style="border-bottom: 2px solid #f28aa9; margin-right: 10px">Gabriel Rosa</span>
          <span style="margin-right: 10px">{{ aka }}</span>
          <span style="border-bottom: 2px solid #f28aa9">Deth</span>
        </h2>
      </div>
      <h3 style="font-size: 20px; color: #cdd5f4">
        {{ subtitle }}
      </h3>
    </div>
  </div>
</template>
