import { LoginCredentials } from "~/pages/login.vue";
import { useToastStore } from "~/store/toast.store";

interface AuthState {
    // Static for test
    staticCredentials: {
        email: string,
        password: string
    },
    authenticated: boolean,
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        // Static for test
        staticCredentials: {
            email: "test@gmail.com",
            password: "1234567"
        },
        authenticated: false,
    }),

    actions: {
        login({ email, password }: LoginCredentials): void {
            const toastStore = useToastStore();

            if (email === this.staticCredentials.email &&
                password === this.staticCredentials.password) {
                this.setToken();
                navigateTo('/dashboard');
            } else {
                toastStore.showToast("error", 'Invalid credentials');
            }
        },
        logout(): void {
            const token = useCookie('token');
            this.authenticated = false;
            token.value = null;

            navigateTo('/login');
        },
        setToken(): void {
            const token = useCookie('token');
            token.value = 'Bearer 123';
            this.authenticated = true;
        }
    }
})