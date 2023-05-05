<script setup lang="ts">
const { data, signOut } = useAuth()
</script>

<template>
  <div>
    <h1>Home</h1>

    <pre>{{ data }}</pre>

    <button @click="signOut">Sign out</button>
  </div>
</template>
