import { create } from 'zustand'

export const useCounterStore = create((set,get) => ({
  count: 1,
  inc: () => set(state => ({ count: state.count + 1 })),
}))
