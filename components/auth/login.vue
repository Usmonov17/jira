<template>
  <UAlert icon="i-heroicons-command-line" :description="error" title="Error!" v-if="error" color="red"
    variant="outline" />
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
    <UButton type="submit" color="blue" block class="w-[30%]" :disabled="loading">
      <template v-if="loading">
        <Icon name="eos-icons:three-dots-loading" class="w-8" />
      </template>
      <template v-else>
        Submit
      </template>

    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { ACCOUNT } from '~/libs/appwrite';
import { useAuthStore } from '../../store/auth';
const loading = ref(false)
const error = ref('')
const toast = useToast()
const authStore = useAuthStore()
const router = useRouter()

const state = reactive({
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Enter your E-mail' })
  if (!state.password) errors.push({ path: 'password', message: 'Enter your password' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  loading.value = true
  const { email, password } = event.data
  try {
    await ACCOUNT.createEmailPasswordSession(email, password)
    const res = await ACCOUNT.get()
    authStore.set({
      email: res.email,
      id: res.$id,
      name: res.name,
      status: res.status
    })
    toast.add({
      title: 'Logged in'
    })
    await router.push("/")
  } catch (e: any) {
    loading.value = false
    error.value = e.message
  }
}

const props = defineProps({
  toogleLogin: {
    type: Function,
    required: true
  }
})
</script>
