interface ToastState {
    type: 'error' | 'warning' | 'success' | null,
    message: string,
    timeout: number
}

export const useToastStore = defineStore('toast', {
    state: (): ToastState => ({
        type: null,
        message: '',
        timeout: 2000
    }),

    actions: {
        showToast(type: 'error' | 'warning' | 'success', message: string) {
            if (!message.trim()) throw Error("Message cannot be empty");

            this.type = type;
            this.message = message;

            setTimeout(() => {
                this.$reset();
            }, this.timeout)
        }
    }
})