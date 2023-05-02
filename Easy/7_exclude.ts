//https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md
// Solution
// https://www.typescriptlang.org/play?#code/PQKgUABBAsDMEFoIFEAeBjANgVwCYFNJEETSiAjATwgC0ALfRgOwHMIAKAAQC8HmWAlBADE+AIYBnasPLYAlpgAuCOUxHYmcgPZMwRYQYgBFbPgmLtuogEkAtgAdM+W-iaKIihhFkLlqlBg4BAA8ACoANBAAqgB8elAxAVh4+BAAZgBOWrYQoR50WhKpipT2Zvli7mIZqZIScixMYuROHlrR8RAAYloZEPioYg5OAFydAAaTihJEJWUQAEpm2EoQALwQALKUaMkhAORi+xAAPhD75Mdn++j7kYf7icDA55en57dEk+OdiQBqcnwAHcIDoIABxOSKAAS2HIIwgdEUinsEhGz2m6DoADoAFYSbG9FjAOBgEDAPSgCAAfVpdPpdIgAE0tNg+gBhLQECDQ-A1GkMwXUiDkvRzVLbXZBfBhSKxda5fqoRSuXASaJQAD8ECY+AAbnyEaE9GAqULBbkzO52ZJyuaGSKKXIHL13OKIABvFAAR2wYkwkTQZXQ7gAvuksjl9pxxQgsf6nKwzMBsBZMBJ9mLSql0Lb1RsANpEIP4EPBZC+-3BSWBFLBB7vC5XD53c5HGL3N7XW4xDvF1DBxTlyuYas7WsHI6Nrst+5T66XDst3vhfuD4d+0c1vYy8wZVRsM5MbC2ch897sdhCNaJPVaOS4ASRLoaEOWJd7g-vY+nvkrsAALqUiAAr2rS3Rsp454AMoqqioFgY6prgAkEDQXQ1SpJQrJ9BIWg4BYOhooiyKouiwCYji+KEhkxJwMAYhMBIQJ8kQ-yAiCeEEZYxFIiiaIYhIWJ4gSRIkrAwBcamPFsVsvSpOyGGYImLBmAifFkYJwnUUSZIUkAA
/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in #union

  ### Question

  Implement the built-in Exclude<T, U>

  > Exclude from T those types that are assignable to U

  For example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > View on GitHub: https://tsch.js.org/43
*/

/* _____________ Your Code Here _____________ */

type MyExclude<T, U> = T extends U  ? never: T


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/
