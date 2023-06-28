<template>
  <div class="flex justify-center h-screen">
    <div class="animate-container">
      <transition name="fade" mode="out-in">
        <div :key="currentWord" class="animate-word">
          <span>{{ currentWord }}</span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    const words = ref(['Hello', 'World', 'Vue'])
    const currentIndex = ref(0)

    const currentWord = computed(() => words.value[currentIndex.value])

    const updateIndex = () => {
      currentIndex.value = (currentIndex.value + 1) % words.value.length
    }

    onMounted(() => {
      setInterval(updateIndex, 2000)
    })

    return {
      currentWord,
    }
  },
}
</script>

<!-- const words = ref(['you', 'a friend', 'Charity'])
const colors = ref(['#2AC769', '#295F2D ', '#E6D171']) // Array of colors for each word
const currentIndex = ref(0)

const currentWord = computed(() => words.value[currentIndex.value])
const currentWordColor = computed(() => colors.value[currentIndex.value])

const updateIndex = () => {
  currentIndex.value = (currentIndex.value + 1) % words.value.length
}

onMounted(() => {
  setInterval(updateIndex, 2000)
})

const currentWordData = {
  currentWord,
  currentWordColor,
}

return currentWordData -->
