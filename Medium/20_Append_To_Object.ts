/*
  527 - Append to object
  -------
  by Andrey Krasovsky (@bre30kra69cs) #medium #object-keys

  ### Question

  Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.

  For example

  ```ts
  type Test = { id: '1' }
  type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
  ```

  > View on GitHub: https://tsch.js.org/527
*/

/* _____________ Your Code Here _____________ */

type AppendToObjectTwo<T, U extends string , V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}

// This will result the same thing, we just need to flatten the object
type AppendToObjectOne<T, U extends string, V> = { [K in keyof T]: T[K]} & Record<U, V>

type Prettify<T> = { [K in keyof T]: T[K]}

type Test = AppendToObjectOne<test1, 'home', boolean>
//   ^?
type Test2 = Prettify<AppendToObjectTwo<test1, 'home', boolean>>
//   ^?

type AppendToObject<T, U extends string, V> = Prettify<AppendToObjectOne<T, U, V>>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type test1 = {
  key: 'cat'
  value: 'green'
}

type testExpect1 = {
  key: 'cat'
  value: 'green'
  home: boolean
}

type test2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
}

type testExpect2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
  home: 1
}

type test3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
}

type testExpect3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
  isMotherRussia: false | undefined
}

type T2 = AppendToObject<test1, 'home', boolean>
//   ^?

type cases = [
  Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, 'isMotherRussia', false | undefined>, testExpect3>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/527/answer
  > View solutions: https://tsch.js.org/527/solutions
  > More Challenges: https://tsch.js.org
*/
