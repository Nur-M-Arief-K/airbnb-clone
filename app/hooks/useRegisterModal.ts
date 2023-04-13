import { create } from 'zustand'

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModal = create<RegisterModalStore>() ((set, get) => ({
    isOpen: false,
    onOpen: () => {
        set((state) => ({ isOpen: true }))
    },
    onClose: () => {
        set((state) => ({ isOpen: false }));
    }
}));

export default useRegisterModal;