<script setup>
import { defineProps, defineEmits, ref } from 'vue';


// Structure must be [{val: "EMIT VAL", text: "DISPLAY TEXT"}]
const props = defineProps(["opts"])
const emits = defineEmits(["didChange"])

const modeled = ref(props.opts[0].val)
</script>

<template>
    <select v-model="modeled" @change="$emit('didChange', modeled)">
        <option v-for="opt in opts" :value="opt.val" :selected="opt.selected" :disabled="opt.disabled">{{ opt.text }}
        </option>
    </select>
</template>