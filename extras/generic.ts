class LinearSeach<T> {
  constructor(public data: T[]) {}

  findElement(searchElement: T): number {
    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];
      if (element == searchElement) return i;
    }

    return -1;
  }
}

const LinearSearchFunction = <T>(data: T[]) => new LinearSeach<T>(data);

const lSearch = LinearSearchFunction([1, 2, 3, 4, 5, 'd']);
const lSearchTwo = LinearSearchFunction(['a', 'b', 'c', 'd', 'e']);

const result = lSearch.findElement(4)
const resultTwo = lSearchTwo.findElement('b')

console.log(result, resultTwo)

export const linearSearch = <T>(array: T[], target: T): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}