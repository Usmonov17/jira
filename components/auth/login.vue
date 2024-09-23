<template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" color="blue" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" color="blue" />
    </UFormGroup>
    <div class="text-sm text-neutral-500">
      Are you not registered yet?
      <span class="text-blue-500 hover:underline" role="button" @click="() => toogleLogin()">Sign Up</span>
    </div>
    <UButton type="submit" color="blue">
      Submit
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}

const props = defineProps({
  toogleLogin: {
    type: Function,
    required: true
  }
})
</script>
