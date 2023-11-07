// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md

//Solution
// https://www.typescriptlang.org/play?#code/PQKgUABBBMBsAcEC0ECSAzSyk91gRgJ4QAKAhgG4CmANhAOI0CuAzgBYDWA9hRABQABAA5l2TAC4cAlBADEVUcVkSAljRZgss7RACKTKi3EquAO01RUAWyE0qVqqfERxbKhFV1xhIe4AGGAA8AMIANBAAKuEAYgB8fhAA7mwqAMZsEGSpqVRC4iwQqWYAJirGZhB+wX7hZC4AThJsxBRkzP4RNZmmxZkQ6G0sLW0GldF+AHSV1RAqBVQAHr6p4lS94lwQ+O5UZW71leKNVAlcB34D6idJKXaVnd29fuOFZKZb7m-E3r4TFhDRM4QRZkGx2ABc-z80PyWB+7gAghAALxodCBI4GcIAcjI2Jx+GxsSgwGAwKWVBWaxcm22EFx2LhPncACEUWjApcWFQcXiCUSIKTyctVutae5sYSsNC-P9iQA1FRURIQCr0MoACSY+HBEDY4nEQhY4NJ+XSEwAViwJmcAObAODwMAgYCaUAQAD6Xu9Pu9EAAmlwmAdglxiu4NVR6u5fbGvRAXZp4RzguTVj0CvguFw7G9wlEAcTUanFunigVMe4APyRCC66IQN0gT1x32RQzOYKiQwt1t+xMqGxnZzJgDeEAAogBHJhtcITikrCAAX369S4VnpAnhSHSbTsplthmAnhYjLAydS3YKqIA2lgFyLAtPZzRAkFK7z8fTCbEv7E-wfRdxGfGc2nfdEuR5ek+RgP84MAgBdN0yW3FgkEWEUMPqdd6gvZlgRwoFUSCUwmBoGgv35WIm17PsPQBYNXCjCAAGVViNOi+wTV1QCwYlWLYMhowgQggwOFgc1UMxjT1A0jRNYAzTYS1rTtB0EGAN4WESKN+IgRVlQgSTmHKUxZP1Q1jVNFhzStG16ntR1gBM6TzP0gBZM53GCISKMcI8LPk6ylNslT7LtZ1XSAA


/*
  268 - If
  -------
  by Pavel Glushkov (@pashutk) #easy #utils

  ### Question

  Implement the util type `If<C, T, F>` which accepts condition `C`, a truthy value `T`, and a falsy value `F`. `C` is expected to be either `true` or `false` while `T` and `F` can be any type.

  For example:

  ```ts
  type A = If<true, 'a', 'b'>  // expected to be 'a'
  type B = If<false, 'a', 'b'> // expected to be 'b'
  ```

  > View on GitHub: https://tsch.js.org/268
*/

/* _____________ Your Code Here _____________ */

type If<C extends boolean, T, F> = C extends true ? T : F 

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/268/answer
  > View solutions: https://tsch.js.org/268/solutions
  > More Challenges: https://tsch.js.org
*/
