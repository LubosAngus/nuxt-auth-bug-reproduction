<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
})
const { data, signIn } = useAuth()
</script>

<template>
  <div>
    <h1>Sign in</h1>

    <pre>{{ data || {} }}</pre>

    <button @click="signIn('credentials', { username: 'test', password: 'hunter2' })">click to sign in</button>
  </div>
</template>
