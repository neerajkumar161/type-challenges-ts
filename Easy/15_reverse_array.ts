// This is tried and implemented by myself
/*
 Implement the reverse of elements on type level
*/

/* _____________ Your Code Here _____________ */

type Length<T extends readonly any[]> = T['length']

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'


type ReverseArray<T> = T extends [...infer R, infer L] ? [L, ...ReverseArray<[...R]>] : []

type cases = [
  Expect<Equal<ReverseArray<[1,2,3,4,5]>, [5,4,3,2,1]>>,
  Expect<Equal<ReverseArray<[1,2,3,4,5,1]>, [1,5,4,3,2,1]>>,
  Expect<Equal<ReverseArray<[1,'Hello',2,3,4,5]>, [5,4,3,2, 'Hello', 1]>>,
]