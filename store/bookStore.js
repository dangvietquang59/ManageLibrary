import create from 'zustand';

const useBookStore = create(set => ({
  books: [],
  setBooks: bookData => set({books: bookData}),
}));

export default useBookStore;
