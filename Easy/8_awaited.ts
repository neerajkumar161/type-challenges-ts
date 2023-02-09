// https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md

// Solution

// https://www.typescriptlang.org/play?#code/PQKgUABBCMAcCcEC0ECCB3AhgSwC4FMATSZJM8kgIwE8IBZTAY23wCsIBlbAawHsAnTBAAUAAQC2TFqwDOPAZgCUEAMT5MM2ioAO-XuOwz8qygFdsAG1xJsAOzAkVTiAEVT+Gbmy97JAJIAZhDoxgAWmABuxkK41NrG6KHYjKEQhsGC2vGEELHxEBY8xgAKegZGAHQQABK86MHGjJi2EADm+LgQMXEJSSlpMmm2coTGuKEJmdm5PQD8DlAAYgIQ+AAemOLaFvgAXGlBIRDhURAABqX6hvgAPACiG1s7ACo9AHxnx3W5vG0dEA9Ntt8K94vMSGdIbgZCQ8sZAU8QT0IABeCCXcq3Tz8OytN4LGb5ABKHlMVlR9GoGBwBEI90ewNB+DeEGAwAg2NxEMhBJZzySgwAju5PN4WultAJaRAAmVchMIABtATYVp2TAWLr8LyMHYAXWEoVwuG0Ml2bNGEQquF4wEkjDkfEEwEwhAizUYRCQcJkjBx2ms63w-GYRhkSGFHi8PiQ0CQABYAKzcePKGhKiRSNiOhQGo0ms1stXjUyUCqMfR2rOyeSCRS8iAANRY9R8EAA4nhqqX9vnTebgNCUhVZBUBK1gHB4GAQMAHKAIAB9Zcr1criAATV4pn4EAAwrxRjVg8Y12flxBZw44ZTqXgiDdnqs1gRbIRBhjrgAZIo3ZrUN4WTRJ91lfd90TKb9fzsAJgwgABVFkIFmCASGEeDnzAj9IKMH9uFuf8WRQugqSwe86UQiB9ng5QqIgWx8CifgwDZQljBIu9aUfTD8DfbCrlw39CKAiAQJfXjwM-QT8JuGC4KJIiRBY9koCJHi+IggT8DwgjbAA5DbzIriFLoolaP2BimNQhdzzPUSo33DQPCXWzV0vOdsC2KU2IgABvAFhQ1AAaAE1niRhOgAXxlOUAHJRDhJAUg1HZbHaGRgFMLwLBkWLr2RAANCkpKxXAcTS-Ebw3YqcNufyAhYCxCAs0xxEoODIsq5EAC0aq0m4SpuTk0ogAAfejWva-hALAG9uugPrMQG2rlv64bWjGiBKF4XgdmaQCuvyJ80X88ZeP2YQfACMkGosHZmpETB+FaFq2uDZQURZf8Pq+vSIEi-L8iaMMKUVEgHnC3B7kCiwbg4oyHwKt4QvWwCgvBsL8Ai6HTA1OHSJpB8N2RvyZUah7bEmjq0YxyGcbx+HCbpbqSfWzbKbe6bkdprGobuGH8c4h95tZsrcU27bdvUWwaagCHefp2HGfIx8SY5qaab1ed2QS8N1khpBgz0ZibyNlY0WVrj1eDfEWJAFzXIvRYdzO3cOAIU0Hcd9y7ZIFkOHCfhjGobddxkXasrFM1jmNfs2SHUIRxkMdnsnBAXWGEJmKgFlm3wepw4sSOfGjvtC0HX1E9Hcc0-gYBC+L4Y-foARjD3cI7t49Le1j8uE6TlPWhnOcgA

/*
  189 - Awaited
  -------
  by Maciej Sikora (@maciejsikora) #easy #promise #built-in

  ### Question

  If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

  For example: if we have `Promise<ExampleType>` how to get ExampleType?

  ```ts
  type ExampleType = Promise<string>

  type Result = MyAwaited<ExampleType> // string
  ```

  > This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora)

  > View on GitHub: https://tsch.js.org/189
*/

/* _____________ Your Code Here _____________ */

type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>  ? 
  (U extends PromiseLike<any> ? MyAwaited<U> : U)  : never
// type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer R> ? (
//   R extends PromiseLike<any> ? MyAwaited<R> : R)  : never 
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error
type error = MyAwaited<number>

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/189/answer
  > View solutions: https://tsch.js.org/189/solutions
  > More Challenges: https://tsch.js.org
*/
