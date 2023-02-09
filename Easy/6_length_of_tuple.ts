// https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md

// Solution
//https://www.typescriptlang.org/play?ssl=34&ssc=8&pln=32&pc=1#code/PQKgUABBCMAcEFoIBkCmA7A5gFwBYQHsAzCAFQFcAHAG1UkQUafoCMBPCAZwEt0CD0EABQABHnwEBKCAGJUAQ04cZ2KrTD0ZWiAEVyqTtm4CNUAGIEAThEzcAbhgjyIqmqgA0ENgXIR0qVAATCABjSwVsVCcbDFRLbhCIAAM0LDwkz0oEgGsXXCjaNPxiPKjXdXoLa1QAD3kAWzcALlNkpKTsTnpsNkoyg2pnAF4IAG0AckjOQfHPcfqCQNRqCABmWYh5xeWIAA0NraWVgE1xgF1u3qjOSnkQ1F2IEYmzAEFkAGEAeQA5CABOA5vT6-CAACQAoq8AGqnOYAEQASq8AOK-A4AZVIr0RGLBAEkAAoHMEAVQAsq8-hjCa8PhCzMh8SiwaRzq0en0XAN5KkcPgRny8AAeKaDAB8UGAwAgtT6IUiwQALJcuTc7g8hQKUBh+cL1fddpLpbKavLFRAAKz0dpJVqS6HcVAAd0IghR3GwYPILCaEFw2GwlE4TWlnRCuAAdAArTiRqyYYBwMAgYAaUAQAD62ZzuZzEGOPmsH224LiUTzlezEFTGk5US1wtIpsi6ECnAg4XkgQE1A48nQbFGZ0lI1IE0K-PZYAzVcrZAM2AgH0UBizc9zNbT3EaViX9YgAG8IBCAI7keTUTwQs2oBUQAC+ECIlgI9U2InrCAjl8nBmA5BGNQnDjBoIQCIY3LTMMYyTDyBwLEcawIdsKz7HMiE7KcZxOB24HoIYYD4ZBBoPE8sHAt8fyAnMlGgpCMJwpsSKouicxYjieJEiSFJUhANJ0gyTIsmyOGKKEEHYHWVxkK85GNvWJRivI4ozjKUAAHoAPxgAeISrh2zz0De5rCmeF7UMKClXEpPLip4SrivZxm3gqZnnpeVm6iKikkKRRqeJaTnuPQJqfpwCByne2CRZYr6WPQjZBSFUoyuFkWuTFcTxYl3m4MK4z5NQ1AEBAzpWNQgTjM5FwziA64btWZjkJYeBxPxkTBg1jVbnV9CShiuDyOEXhFlwBDUIBxgEX6AZBiGYacBGMZxgmSawMAA6cM6cT9RAjouuNk1GBBs2BsGobAOGUaxvGliJnAwCcBNU0QXt5JWFEHxDcVuoGGd82XddK13ZgKZpkAA

/*
  18 - Length of Tuple
  -------
  by sinoon (@sinoon) #easy #tuple

  ### Question

  For given a tuple, you need create a generic `Length`, pick the length of the tuple

  For example:

  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```

  > View on GitHub: https://tsch.js.org/18
*/

/* _____________ Your Code Here _____________ */

type Length<T extends readonly any[]> = T['length']

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type TA = Length<typeof tesla>
//   ^?
type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/18/answer
  > View solutions: https://tsch.js.org/18/solutions
  > More Challenges: https://tsch.js.org
*/
