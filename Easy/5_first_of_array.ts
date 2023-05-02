// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
// Solution
// https://www.typescriptlang.org/play?#code/PQKgUABBCMAsEFoIDECWAnAzgFwgewDMIBBddAQwE9JEE76aAjSkgO2wAs9WXkBXCAAoAAuXYE+ASggBiAKblMLGeTJUwNGVogBFPnJypuGqAEkAtgAcANnPNz2EchADmDuelQBjCAAM0WNgAPAAqAHy+EJzkuNjkANYGTqwkaiy+IZFiACYQ6HLYfOismBCo2KUEGDgQcrb27ADkpdiUlnIAdCYoeOi1AB7kVrYAXN2+ExU0re1OZNAQALwQANqN5I0ANBCNjFs7Xo0AutNtcnPoAExLqwDM25fb0CensxwK2QvLAThBqujQMIQYDAAbtLzYOS5bB4CCMc7rRqvc7vcjZa7farBf6XIEgsFyCFQqKw+EQW40Ca+bpAgBqqDkAHd8CkAOLlAASfEYIwgHGw2EsmBGIIqXg4HQAVpgOr0XMA4GAQMANKAIAB9TVa7VaiAATTwRQgAGE8NlzhyPOcdTbNRBlRoZucfsEQgNIaxsqUxJQVkcgcs3XJ+h6vatUKwCB4UFjth14xGo30AEoGbBHCAAfhjgQgvNYcgAbh5VSANbadRAQmmTYokhXKw7UFZerEzhAAN4QACiAEc+ORrNtu-1wbgAL4QAjoPDmHbCJ0IcWD2ysNyYYB8bCoayYJFgJ0QLx10rLFY0EdjoJ9gfWIIuoIre4QR4wf3bW5hMKbC+jwnBG9B3vLFH0EaRFiBaBLmfLtyF5HBPDXCBx3fIRwMg6Cvx-KBL3-a9+yAh8-W-CAC2LdAsN-K9ALvIi+E9OQqgLbJUPo80mKhSiXkPDwZywG5zygfEF0wBBgzHMSyF6GgH0aVg8GwUgKEoRpvxoYSKjEv8IUkviZJArsAAZeXWNIABlUESRpkLUl41QbbUUCKThowAZUhIVywc9V7RVUAaCBVyOFUc5KENPpMDwawtyMEpeX5QVhVFTBxSlGU5QVWBgDETBGRLKA6QZZlIui7duGFPkBSFEVgDFCVpVldB5TgYASpi8qAogABZXpzmNYLrFXdd4qqpLapS+r0qapUVSAA

/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #easy #array

  ### Question

  Implement a generic `First<T>` that takes an Array `T` and returns its first element's type.

  For example:

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```

  > View on GitHub: https://tsch.js.org/14
*/

/* _____________ Your Code Here _____________ */

type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/14/answer
  > View solutions: https://tsch.js.org/14/solutions
  > More Challenges: https://tsch.js.org
*/
