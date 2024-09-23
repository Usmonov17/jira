<template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Name" name="name">
      <UInput v-model="state.name" color="blue" />
    </UFormGroup>

    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" color="blue" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" color="blue" />
    </UFormGroup>
    <div class="text-sm text-neutral-500">
      Already have an account?
      <span class="text-blue-500 hover:underline" role="button" @click="() => toogleLogin()">LogIn</span>
    </div>
    <UButton type="submit" color="blue">
      Submit
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { ACCOUNT, userID } from '~/libs/appwrite';

const state = reactive({
  email: undefined,
  password: undefined,
  name: undefined,
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Enter your name' })
  if (!state.email) errors.push({ path: 'email', message: 'Enter your email' })
  if (!state.password) errors.push({ path: 'password', message: 'Enter your password' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  const { name, email, password } = event.data
  try {
    const response = await ACCOUNT.create(userID, email, password, name)
    console.log(response);

  } catch (error) { }
}
const props = defineProps({
  toogleLogin: {
    type: Function,
    required: true
  }
})
</script>
