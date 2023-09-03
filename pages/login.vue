<template>
	<div class="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
			<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
		</div>

		<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
			<Form @submit="signIn" v-slot="{ values }" class="space-y-6" :validation-schema="signInSchema">
				<div>
					<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address ({{ staticCredentials.email }})</label>
					<div class="mt-2">
						<Field id="email" :value="staticCredentials.email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
						<ErrorMessage class="text-red-600" name="email" />
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password ({{ staticCredentials.password }})</label>
					<div class="mt-2">
						<Field id="password" :value="staticCredentials.password" name="password" type="password" autocomplete="current-password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
						<ErrorMessage class="text-red-600" name="password" />
					</div>
				</div>

				<div>
					<button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
				</div>
			</Form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage  } from 'vee-validate';
import * as yup from 'yup';
import { useAuthStore } from "~/store/auth.store";

definePageMeta({
	auth: false
})

const authStore = useAuthStore();
const { staticCredentials } = authStore;

const signInSchema = yup.object({
	email: yup.string().required().email(),
	password: yup.string().required().min(7),
});

const signIn = (credentials: LoginCredentials) => {
	authStore.login(credentials);
}

export interface LoginCredentials {
	email: string,
	password: string
}
</script>