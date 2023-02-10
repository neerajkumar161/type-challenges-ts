// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md

// Solution
// https://www.typescriptlang.org/play?#code/PQKgUABBCsDMsQLQQMIHsB2BjAhgF0iUWJMICMBPCAQQwBMAnAUyoGkGcBnNAN04GsqACgACZZrAAM-DgDYAnFk4BKCAGImXKmpwMOFMITXGIARQCuTTngCWmQ1ACSAWwAOAGybOmGPBDwAFkwQAFI4PDgAylgMNq5+AAbUejgUAHRYmLh4CRAAZubYtpgQNhj+Qf4UrsGcFNZeaTRVNf44-FYVwXgA7mgQugDm5t6+nE0AKpVo5niusxCcATPudBBkwTgQGEw9AylUgfil2O7mdJ1l83icJxDueAwQaAwXDA4QAGIvEEwAHjg3J4AFwfBLgm6EPDVYIAJSs5geEAAvKgsvgADwAbQAjABdAA0ECxACY8QA+CDAYC-P41LB4JhrPD9DbEnFEsmEcEJD6UgBqNl2z3KAHEbHgABLmMjAiABPBzTjA6k3LABNIAK3GL0GwDgsDAIGAhlAEAA+pardarRAAJozJ7oC4QSVMZgWm1e80QY2GaGtdDYTETWmM+i3HAYChYwkQACqYZ8dEj0djlNRWLS2YmROzaXjeNNIE93utEAmVj8KC4nTLNt9JpsbhefgDwQA3hAAKIAR3MOHcRO7dKYDIgAF98gw0M4IAByETtxDqweeDCDKzAWY2dycef+mEQXCcTqZwgj+l4DF9gfuDFB7LYuPponp8kEi+jhk3-uDh-otesZvviH7shSH5flev53gBwZARyEBkm+sBEgALBSIGckSqEQBh5KQVAl5jtet7-o+mJYvOOLzthC6wPOL55IOp5EmQaBoJ4UZEvOaGMWBVE0XR84MUSzF7kwbEcVxGA8XxEGfkWYBmvW5afOYDCBO6ECRIyri3Kptp+qAhCUpEAS6MEFCOosnE7pgyryoq+kqsAaoatqaS6vq8DAFGnA9O6pkQIKwrcGcxQYI5CpKq57lajqDB6gawDhfZUXBQAsi8wQoBZ7jrpu0XOcqqqcOqCVeUlRomkAA

/*
  533 - Concat
  -------
  by Andrey Krasovsky (@bre30kra69cs) #easy #array

  ### Question

  Implement the JavaScript `Array.concat` function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

  For example:

  ```ts
  type Result = Concat<[1], [2]> // expected to be [1, 2]
  ```

  > View on GitHub: https://tsch.js.org/533
*/

/* _____________ Your Code Here _____________ */

type Concat<T extends any[], U extends any[]> = [...T, ...U]

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '..//utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/533/answer
  > View solutions: https://tsch.js.org/533/solutions
  > More Challenges: https://tsch.js.org
*/
