/* https://www.typescriptlang.org/play?#code/PTAEFEDcFMCdQO4HsB2ATO00BpQAskFQAXPASwGdQLoAbaAY2NAEN1q7HiAxWJAW1D9opJGlBl+AB3rCUxLKFQkAnlOih6MWgH4AUCHzFiUigC4QCKwDoVSAK7F7AI2jWGA4AhbEGeHZAAvAAcKgBaJgBKKgCaZJEAsqAAtKAAyki0jmTKziqgAILosNBEAEL2sADm0BQUBmB4xqYWwADWKjS0KtYYkMBoSAwUwDIsKlV89ugGAFSgHigUzOqwFKgAKqCBrN5kzGjOeqCg1l1cvAIAFADkq+soNwCUoIYbeLUaxMhCIgRo9ROZ04TCuAG0bmQ0DdcDcAGZkNbEAD6KBYwlYVARSIAcujoDcALpPY6nBAfEq3KEw0A3QI0m4ARmepOs0AAHoxHNANiw2tBuIjllcSaBZsA9HpiGoNLznPQqDsAN6k+6oMygFUnE5QjUoez8VywUknbHLVH4jXLWBkFBVUkAX2wqr4aHsTA1Wu1utA+sNcBNvst1GINrtgakNoY0D1BqNgYYJR8WA1ABFk469A7JVKZaA5Qq8Ridvy7HD8yx5bUGtqAHr6XPqQq0MgsCgAHlJWw5CnQVGttvtAD5tvnQD3oH3QAADAAkSoHdodmNA89tcLgzdbFAd09AOi3bdAeugMGNjY0AHkbVVbSxaJ2Tt32b2ASGw8PR8-X1Q50r15ul7Lke86LlUu77qAl7Hr6p4BheUE3netAbLUzA7NeZC3miD6QuIR5qigACS0JDjWJz1ghaQAI60AULZtu2ADCmQGkWtTji+k5vmBI47CxWT8OxVATlOAlsfiVAHn+4lCZJwFUKBoaDhBJ5npK0pNqhyyjvR27tvCQoomiGJHmaxDsTcZGGHWDaabKaEAEyjjRdEMR2hlIhawg3KAAA+tLUtZYC2eRFF2XmslLMxrH8CgwmcT+76DnxoBRQlAWuXpjHpZJZEIdpxAAMyjlFHnUv5tLmd5BLBaFVEggoaCRCIlQoI+oDsYl3FUAWtTsc6JxRd1YmxdFpZIOWfUUGC7GEqAABkyV2mRqVeicYJMRIKBpWNK7ZR2TEjqJb4oHBxrapBW0agdzFDoSGpbSdVATVNlYKrN+KEoGB7TZ9wiEpt80aph2H3ndI1vq9FZVjNc0-TDH1zWCoPIXdwOwepl2GCZMadfig3aoYHi0OY6SNVgsmAqA2YaXm3C0D47YbGtpJggA0ttoDQxsD35hz3203oGAMIzJSgHC0xMDkO3nEwHVdc9iP9QTpJpBTaBU5DVBle2PPvbU-3QPNS28XoQ5XMQBvsRqA0LGNGrq-QTCU7FM3Eo7GstU4sDtXbTtcK7gkUPliw6YRo5y8QtyETSELUrC1W4yu5mWbCUIroRJFEiSYcrK67roRwzvR3cBdMHHeEMpGZDRgyibQMm+FUA3TcFMQOd002AAKjKjgzTP2ZNoCEXV4UId3zk7APxDtkP5aRmIhdj6A9ZAA */
  type Tables = {
    person: {
      id: number
      first_name: string
    },
    product: {
      id: number
      name: string
      price: number
      created: Date
    }
  }
  
  
  type TablesName = keyof Tables
  //   ^?
  
  type Alias<
    T extends string
  > = T extends `${string} as ${infer Alias}` ? Alias : never
  
  type Original<
    T extends string
  > = T extends `${infer O} as ${string}` ? O : never
  
  type OriginalTest = Original<'id as personId'>
  //   ^?
  type SqlAlias<ColumNames extends string> = ColumNames extends ColumNames ? `${ColumNames} as ${string}` : never
  
  type AliasTest = Alias<'first_name as firstName'>
  //    ^?
  
  type SqlAliasTest = SqlAlias<'first_name' | 'id'>
  //    ^?
  //    ^?
  
  type Columns<ColumnNames extends string> = ColumnNames | SqlAlias<ColumnNames>
  
  // type Test3 = Columns<'id' | 'first_name'>
  //   ^?
  
  type SelectedReturn<
    Name extends TablesName,
    Column extends Columns<keyof Tables[Name] & string>
  > = {
      [C in Column as Alias<C> extends never
      ? C : Alias<C>]: C extends keyof Tables[Name]
      ? Tables[Name][C] : Original<C> extends keyof Tables[Name]
      ? Tables[Name][Original<C>] : never
      // name: Name,
      // cols: SelectedColums
    }
  
  
  type Flat<T> = {
    [K in keyof T]: T[K]
  }
  
  
  declare function select<
    Name extends TablesName,
    SelectedColums extends Columns<keyof Tables[Name] & string>
  >(tableName: Name, column: SelectedColums[]): SelectedReturn<Name, SelectedColums>
  
  const person = select('person', ['id', 'first_name as firstName', 'id as personId'])
  const product = select('product', ['id', 'price', 'created as createdAt'])
  
  type P1 = Flat<typeof person>
  //   ^?
  type P2 = Flat<typeof product>
  //   ^?