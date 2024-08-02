interface Writer {
  penName: string;
  books: string[];
  writeBook: (title: string, numPages: number) => string;
}

const myWriter: Writer = {
  penName: 'Agatha Christie',
  books: [],
  writeBook: (title: string, numPages: number) => { return 'good day' }
}
