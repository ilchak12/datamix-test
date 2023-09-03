<template>
	<div class="min-h-screen">
		<header class="bg-white flex justify-between items-center shadow px-4 py-6 sm:px-6 lg:px-8">
			<div>
				<h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
			</div>

			<div class="cursor-pointer text-xl font-medium bg-gray-300 px-2 py-1 rounded-md"
				 @click="logout"
			>
				Logout
			</div>
		</header>
		<main>
			<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth.store";

const authStore = useAuthStore();

const logout = () => {
	authStore.logout();
}
</script>

<style scoped>

</style>