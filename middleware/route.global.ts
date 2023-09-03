import { useAuthStore } from "~/store/auth.store";
import { useToastStore } from "~/store/toast.store";
import { storeToRefs } from "pinia";
import { navigateTo } from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
    const toastStore = useToastStore();
    const { authenticated } = storeToRefs(useAuthStore());

    const token = useCookie('token');
    const authRequired = to.meta.auth ?? true;

    if (token.value) {
        authenticated.value = true;
    }

    if (to.fullPath === '/login' && token.value) {
        return navigateTo('/dashboard');
    }

    if (authRequired && !token.value) {
        toastStore.showToast('warning', 'This page is for authorized users only');

        return navigateTo('/login');
    }
})