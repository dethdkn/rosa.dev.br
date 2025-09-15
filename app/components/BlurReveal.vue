<script setup lang="ts">
import { Motion } from 'motion-v'

const props = defineProps({
  duration: { type: Number, default: 1 },
  delay: { type: Number, default: 2 },
  blur: { type: String, default: '20px' },
  yOffset: { type: Number, default: 20 },
})

const container = ref(null)
const childElements = ref([])
const slots = useSlots()

// eslint-disable-next-line typescript/no-explicit-any
const children = ref<any>([])

onMounted(() => {
  watchEffect(() => {
    children.value = slots.default ? slots.default() : []
  })
})

function getInitial(){
  return {
    opacity: 0,
    filter: `blur(${props.blur})`,
    y: props.yOffset,
  }
}

function getAnimate(){
  return {
    opacity: 1,
    filter: `blur(0px)`,
    y: 0,
  }
}
</script>

<template>
  <div ref="container">
    <Motion
      v-for="(child, index) in children"
      :key="index"
      ref="childElements"
      as="div"
      :initial="getInitial()"
      :while-in-view="getAnimate()"
      :transition="{
        duration: props.duration,
        delay: props.delay * index,
      }"
    >
      <component :is="child" />
    </Motion>
  </div>
</template>
