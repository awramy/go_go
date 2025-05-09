
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tg_account
 * 
 */
export type Tg_account = $Result.DefaultSelection<Prisma.$Tg_accountPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Proxy
 * 
 */
export type Proxy = $Result.DefaultSelection<Prisma.$ProxyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProxyType: {
  socks5: 'socks5',
  http: 'http',
  https: 'https',
  socks: 'socks'
};

export type ProxyType = (typeof ProxyType)[keyof typeof ProxyType]

}

export type ProxyType = $Enums.ProxyType

export const ProxyType: typeof $Enums.ProxyType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tg_accounts
 * const tg_accounts = await prisma.tg_account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tg_accounts
   * const tg_accounts = await prisma.tg_account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tg_account`: Exposes CRUD operations for the **Tg_account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tg_accounts
    * const tg_accounts = await prisma.tg_account.findMany()
    * ```
    */
  get tg_account(): Prisma.Tg_accountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proxy`: Exposes CRUD operations for the **Proxy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proxies
    * const proxies = await prisma.proxy.findMany()
    * ```
    */
  get proxy(): Prisma.ProxyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tg_account: 'Tg_account',
    Comment: 'Comment',
    Proxy: 'Proxy'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tg_account" | "comment" | "proxy"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tg_account: {
        payload: Prisma.$Tg_accountPayload<ExtArgs>
        fields: Prisma.Tg_accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Tg_accountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tg_accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Tg_accountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tg_accountPayload>
          }
          findFirst: {
            args: Prisma.Tg_accountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tg_accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Tg_accountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tg_accountPayload>
          }
          findMany: {
            args: Prisma.Tg_accountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tg_accountPayload>[]
          }
          create: {
            args: Prisma.Tg_accountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tg_accountPayload>
          }
          createMany: {
            args: Prisma.Tg_accountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Tg_accountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tg_accountPayload>[]
          }
          delete: {
            args: Prisma.Tg_accountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tg_accountPayload>
          }
          update: {
            args: Prisma.Tg_accountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tg_accountPayload>
          }
          deleteMany: {
            args: Prisma.Tg_accountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Tg_accountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Tg_accountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tg_accountPayload>[]
          }
          upsert: {
            args: Prisma.Tg_accountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tg_accountPayload>
          }
          aggregate: {
            args: Prisma.Tg_accountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTg_account>
          }
          groupBy: {
            args: Prisma.Tg_accountGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tg_accountGroupByOutputType>[]
          }
          count: {
            args: Prisma.Tg_accountCountArgs<ExtArgs>
            result: $Utils.Optional<Tg_accountCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Proxy: {
        payload: Prisma.$ProxyPayload<ExtArgs>
        fields: Prisma.ProxyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProxyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProxyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          findFirst: {
            args: Prisma.ProxyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProxyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          findMany: {
            args: Prisma.ProxyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>[]
          }
          create: {
            args: Prisma.ProxyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          createMany: {
            args: Prisma.ProxyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProxyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>[]
          }
          delete: {
            args: Prisma.ProxyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          update: {
            args: Prisma.ProxyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          deleteMany: {
            args: Prisma.ProxyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProxyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProxyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>[]
          }
          upsert: {
            args: Prisma.ProxyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          aggregate: {
            args: Prisma.ProxyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProxy>
          }
          groupBy: {
            args: Prisma.ProxyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProxyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProxyCountArgs<ExtArgs>
            result: $Utils.Optional<ProxyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tg_account?: Tg_accountOmit
    comment?: CommentOmit
    proxy?: ProxyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Tg_accountCountOutputType
   */

  export type Tg_accountCountOutputType = {
    comments: number
  }

  export type Tg_accountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Tg_accountCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * Tg_accountCountOutputType without action
   */
  export type Tg_accountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_accountCountOutputType
     */
    select?: Tg_accountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tg_accountCountOutputType without action
   */
  export type Tg_accountCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tg_account
   */

  export type AggregateTg_account = {
    _count: Tg_accountCountAggregateOutputType | null
    _avg: Tg_accountAvgAggregateOutputType | null
    _sum: Tg_accountSumAggregateOutputType | null
    _min: Tg_accountMinAggregateOutputType | null
    _max: Tg_accountMaxAggregateOutputType | null
  }

  export type Tg_accountAvgAggregateOutputType = {
    id: number | null
    proxyId: number | null
  }

  export type Tg_accountSumAggregateOutputType = {
    id: number | null
    proxyId: number | null
  }

  export type Tg_accountMinAggregateOutputType = {
    id: number | null
    phone: string | null
    username: string | null
    firstname: string | null
    lastname: string | null
    proxyId: number | null
    session: string | null
  }

  export type Tg_accountMaxAggregateOutputType = {
    id: number | null
    phone: string | null
    username: string | null
    firstname: string | null
    lastname: string | null
    proxyId: number | null
    session: string | null
  }

  export type Tg_accountCountAggregateOutputType = {
    id: number
    phone: number
    username: number
    firstname: number
    lastname: number
    proxyId: number
    session: number
    _all: number
  }


  export type Tg_accountAvgAggregateInputType = {
    id?: true
    proxyId?: true
  }

  export type Tg_accountSumAggregateInputType = {
    id?: true
    proxyId?: true
  }

  export type Tg_accountMinAggregateInputType = {
    id?: true
    phone?: true
    username?: true
    firstname?: true
    lastname?: true
    proxyId?: true
    session?: true
  }

  export type Tg_accountMaxAggregateInputType = {
    id?: true
    phone?: true
    username?: true
    firstname?: true
    lastname?: true
    proxyId?: true
    session?: true
  }

  export type Tg_accountCountAggregateInputType = {
    id?: true
    phone?: true
    username?: true
    firstname?: true
    lastname?: true
    proxyId?: true
    session?: true
    _all?: true
  }

  export type Tg_accountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tg_account to aggregate.
     */
    where?: Tg_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tg_accounts to fetch.
     */
    orderBy?: Tg_accountOrderByWithRelationInput | Tg_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tg_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tg_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tg_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tg_accounts
    **/
    _count?: true | Tg_accountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tg_accountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tg_accountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tg_accountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tg_accountMaxAggregateInputType
  }

  export type GetTg_accountAggregateType<T extends Tg_accountAggregateArgs> = {
        [P in keyof T & keyof AggregateTg_account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTg_account[P]>
      : GetScalarType<T[P], AggregateTg_account[P]>
  }




  export type Tg_accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tg_accountWhereInput
    orderBy?: Tg_accountOrderByWithAggregationInput | Tg_accountOrderByWithAggregationInput[]
    by: Tg_accountScalarFieldEnum[] | Tg_accountScalarFieldEnum
    having?: Tg_accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tg_accountCountAggregateInputType | true
    _avg?: Tg_accountAvgAggregateInputType
    _sum?: Tg_accountSumAggregateInputType
    _min?: Tg_accountMinAggregateInputType
    _max?: Tg_accountMaxAggregateInputType
  }

  export type Tg_accountGroupByOutputType = {
    id: number
    phone: string
    username: string
    firstname: string
    lastname: string | null
    proxyId: number | null
    session: string | null
    _count: Tg_accountCountAggregateOutputType | null
    _avg: Tg_accountAvgAggregateOutputType | null
    _sum: Tg_accountSumAggregateOutputType | null
    _min: Tg_accountMinAggregateOutputType | null
    _max: Tg_accountMaxAggregateOutputType | null
  }

  type GetTg_accountGroupByPayload<T extends Tg_accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tg_accountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tg_accountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tg_accountGroupByOutputType[P]>
            : GetScalarType<T[P], Tg_accountGroupByOutputType[P]>
        }
      >
    >


  export type Tg_accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    proxyId?: boolean
    session?: boolean
    proxy?: boolean | Tg_account$proxyArgs<ExtArgs>
    comments?: boolean | Tg_account$commentsArgs<ExtArgs>
    _count?: boolean | Tg_accountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tg_account"]>

  export type Tg_accountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    proxyId?: boolean
    session?: boolean
    proxy?: boolean | Tg_account$proxyArgs<ExtArgs>
  }, ExtArgs["result"]["tg_account"]>

  export type Tg_accountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    proxyId?: boolean
    session?: boolean
    proxy?: boolean | Tg_account$proxyArgs<ExtArgs>
  }, ExtArgs["result"]["tg_account"]>

  export type Tg_accountSelectScalar = {
    id?: boolean
    phone?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    proxyId?: boolean
    session?: boolean
  }

  export type Tg_accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "username" | "firstname" | "lastname" | "proxyId" | "session", ExtArgs["result"]["tg_account"]>
  export type Tg_accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proxy?: boolean | Tg_account$proxyArgs<ExtArgs>
    comments?: boolean | Tg_account$commentsArgs<ExtArgs>
    _count?: boolean | Tg_accountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Tg_accountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proxy?: boolean | Tg_account$proxyArgs<ExtArgs>
  }
  export type Tg_accountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proxy?: boolean | Tg_account$proxyArgs<ExtArgs>
  }

  export type $Tg_accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tg_account"
    objects: {
      proxy: Prisma.$ProxyPayload<ExtArgs> | null
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phone: string
      username: string
      firstname: string
      lastname: string | null
      proxyId: number | null
      session: string | null
    }, ExtArgs["result"]["tg_account"]>
    composites: {}
  }

  type Tg_accountGetPayload<S extends boolean | null | undefined | Tg_accountDefaultArgs> = $Result.GetResult<Prisma.$Tg_accountPayload, S>

  type Tg_accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Tg_accountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tg_accountCountAggregateInputType | true
    }

  export interface Tg_accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tg_account'], meta: { name: 'Tg_account' } }
    /**
     * Find zero or one Tg_account that matches the filter.
     * @param {Tg_accountFindUniqueArgs} args - Arguments to find a Tg_account
     * @example
     * // Get one Tg_account
     * const tg_account = await prisma.tg_account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Tg_accountFindUniqueArgs>(args: SelectSubset<T, Tg_accountFindUniqueArgs<ExtArgs>>): Prisma__Tg_accountClient<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tg_account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Tg_accountFindUniqueOrThrowArgs} args - Arguments to find a Tg_account
     * @example
     * // Get one Tg_account
     * const tg_account = await prisma.tg_account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Tg_accountFindUniqueOrThrowArgs>(args: SelectSubset<T, Tg_accountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Tg_accountClient<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tg_account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tg_accountFindFirstArgs} args - Arguments to find a Tg_account
     * @example
     * // Get one Tg_account
     * const tg_account = await prisma.tg_account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Tg_accountFindFirstArgs>(args?: SelectSubset<T, Tg_accountFindFirstArgs<ExtArgs>>): Prisma__Tg_accountClient<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tg_account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tg_accountFindFirstOrThrowArgs} args - Arguments to find a Tg_account
     * @example
     * // Get one Tg_account
     * const tg_account = await prisma.tg_account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Tg_accountFindFirstOrThrowArgs>(args?: SelectSubset<T, Tg_accountFindFirstOrThrowArgs<ExtArgs>>): Prisma__Tg_accountClient<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tg_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tg_accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tg_accounts
     * const tg_accounts = await prisma.tg_account.findMany()
     * 
     * // Get first 10 Tg_accounts
     * const tg_accounts = await prisma.tg_account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tg_accountWithIdOnly = await prisma.tg_account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Tg_accountFindManyArgs>(args?: SelectSubset<T, Tg_accountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tg_account.
     * @param {Tg_accountCreateArgs} args - Arguments to create a Tg_account.
     * @example
     * // Create one Tg_account
     * const Tg_account = await prisma.tg_account.create({
     *   data: {
     *     // ... data to create a Tg_account
     *   }
     * })
     * 
     */
    create<T extends Tg_accountCreateArgs>(args: SelectSubset<T, Tg_accountCreateArgs<ExtArgs>>): Prisma__Tg_accountClient<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tg_accounts.
     * @param {Tg_accountCreateManyArgs} args - Arguments to create many Tg_accounts.
     * @example
     * // Create many Tg_accounts
     * const tg_account = await prisma.tg_account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Tg_accountCreateManyArgs>(args?: SelectSubset<T, Tg_accountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tg_accounts and returns the data saved in the database.
     * @param {Tg_accountCreateManyAndReturnArgs} args - Arguments to create many Tg_accounts.
     * @example
     * // Create many Tg_accounts
     * const tg_account = await prisma.tg_account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tg_accounts and only return the `id`
     * const tg_accountWithIdOnly = await prisma.tg_account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Tg_accountCreateManyAndReturnArgs>(args?: SelectSubset<T, Tg_accountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tg_account.
     * @param {Tg_accountDeleteArgs} args - Arguments to delete one Tg_account.
     * @example
     * // Delete one Tg_account
     * const Tg_account = await prisma.tg_account.delete({
     *   where: {
     *     // ... filter to delete one Tg_account
     *   }
     * })
     * 
     */
    delete<T extends Tg_accountDeleteArgs>(args: SelectSubset<T, Tg_accountDeleteArgs<ExtArgs>>): Prisma__Tg_accountClient<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tg_account.
     * @param {Tg_accountUpdateArgs} args - Arguments to update one Tg_account.
     * @example
     * // Update one Tg_account
     * const tg_account = await prisma.tg_account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Tg_accountUpdateArgs>(args: SelectSubset<T, Tg_accountUpdateArgs<ExtArgs>>): Prisma__Tg_accountClient<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tg_accounts.
     * @param {Tg_accountDeleteManyArgs} args - Arguments to filter Tg_accounts to delete.
     * @example
     * // Delete a few Tg_accounts
     * const { count } = await prisma.tg_account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Tg_accountDeleteManyArgs>(args?: SelectSubset<T, Tg_accountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tg_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tg_accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tg_accounts
     * const tg_account = await prisma.tg_account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Tg_accountUpdateManyArgs>(args: SelectSubset<T, Tg_accountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tg_accounts and returns the data updated in the database.
     * @param {Tg_accountUpdateManyAndReturnArgs} args - Arguments to update many Tg_accounts.
     * @example
     * // Update many Tg_accounts
     * const tg_account = await prisma.tg_account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tg_accounts and only return the `id`
     * const tg_accountWithIdOnly = await prisma.tg_account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Tg_accountUpdateManyAndReturnArgs>(args: SelectSubset<T, Tg_accountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tg_account.
     * @param {Tg_accountUpsertArgs} args - Arguments to update or create a Tg_account.
     * @example
     * // Update or create a Tg_account
     * const tg_account = await prisma.tg_account.upsert({
     *   create: {
     *     // ... data to create a Tg_account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tg_account we want to update
     *   }
     * })
     */
    upsert<T extends Tg_accountUpsertArgs>(args: SelectSubset<T, Tg_accountUpsertArgs<ExtArgs>>): Prisma__Tg_accountClient<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tg_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tg_accountCountArgs} args - Arguments to filter Tg_accounts to count.
     * @example
     * // Count the number of Tg_accounts
     * const count = await prisma.tg_account.count({
     *   where: {
     *     // ... the filter for the Tg_accounts we want to count
     *   }
     * })
    **/
    count<T extends Tg_accountCountArgs>(
      args?: Subset<T, Tg_accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tg_accountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tg_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tg_accountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tg_accountAggregateArgs>(args: Subset<T, Tg_accountAggregateArgs>): Prisma.PrismaPromise<GetTg_accountAggregateType<T>>

    /**
     * Group by Tg_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tg_accountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tg_accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tg_accountGroupByArgs['orderBy'] }
        : { orderBy?: Tg_accountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tg_accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTg_accountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tg_account model
   */
  readonly fields: Tg_accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tg_account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Tg_accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proxy<T extends Tg_account$proxyArgs<ExtArgs> = {}>(args?: Subset<T, Tg_account$proxyArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comments<T extends Tg_account$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Tg_account$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tg_account model
   */
  interface Tg_accountFieldRefs {
    readonly id: FieldRef<"Tg_account", 'Int'>
    readonly phone: FieldRef<"Tg_account", 'String'>
    readonly username: FieldRef<"Tg_account", 'String'>
    readonly firstname: FieldRef<"Tg_account", 'String'>
    readonly lastname: FieldRef<"Tg_account", 'String'>
    readonly proxyId: FieldRef<"Tg_account", 'Int'>
    readonly session: FieldRef<"Tg_account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tg_account findUnique
   */
  export type Tg_accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_account
     */
    select?: Tg_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tg_account
     */
    omit?: Tg_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tg_accountInclude<ExtArgs> | null
    /**
     * Filter, which Tg_account to fetch.
     */
    where: Tg_accountWhereUniqueInput
  }

  /**
   * Tg_account findUniqueOrThrow
   */
  export type Tg_accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_account
     */
    select?: Tg_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tg_account
     */
    omit?: Tg_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tg_accountInclude<ExtArgs> | null
    /**
     * Filter, which Tg_account to fetch.
     */
    where: Tg_accountWhereUniqueInput
  }

  /**
   * Tg_account findFirst
   */
  export type Tg_accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_account
     */
    select?: Tg_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tg_account
     */
    omit?: Tg_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tg_accountInclude<ExtArgs> | null
    /**
     * Filter, which Tg_account to fetch.
     */
    where?: Tg_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tg_accounts to fetch.
     */
    orderBy?: Tg_accountOrderByWithRelationInput | Tg_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tg_accounts.
     */
    cursor?: Tg_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tg_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tg_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tg_accounts.
     */
    distinct?: Tg_accountScalarFieldEnum | Tg_accountScalarFieldEnum[]
  }

  /**
   * Tg_account findFirstOrThrow
   */
  export type Tg_accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_account
     */
    select?: Tg_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tg_account
     */
    omit?: Tg_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tg_accountInclude<ExtArgs> | null
    /**
     * Filter, which Tg_account to fetch.
     */
    where?: Tg_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tg_accounts to fetch.
     */
    orderBy?: Tg_accountOrderByWithRelationInput | Tg_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tg_accounts.
     */
    cursor?: Tg_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tg_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tg_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tg_accounts.
     */
    distinct?: Tg_accountScalarFieldEnum | Tg_accountScalarFieldEnum[]
  }

  /**
   * Tg_account findMany
   */
  export type Tg_accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_account
     */
    select?: Tg_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tg_account
     */
    omit?: Tg_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tg_accountInclude<ExtArgs> | null
    /**
     * Filter, which Tg_accounts to fetch.
     */
    where?: Tg_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tg_accounts to fetch.
     */
    orderBy?: Tg_accountOrderByWithRelationInput | Tg_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tg_accounts.
     */
    cursor?: Tg_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tg_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tg_accounts.
     */
    skip?: number
    distinct?: Tg_accountScalarFieldEnum | Tg_accountScalarFieldEnum[]
  }

  /**
   * Tg_account create
   */
  export type Tg_accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_account
     */
    select?: Tg_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tg_account
     */
    omit?: Tg_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tg_accountInclude<ExtArgs> | null
    /**
     * The data needed to create a Tg_account.
     */
    data: XOR<Tg_accountCreateInput, Tg_accountUncheckedCreateInput>
  }

  /**
   * Tg_account createMany
   */
  export type Tg_accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tg_accounts.
     */
    data: Tg_accountCreateManyInput | Tg_accountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tg_account createManyAndReturn
   */
  export type Tg_accountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_account
     */
    select?: Tg_accountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tg_account
     */
    omit?: Tg_accountOmit<ExtArgs> | null
    /**
     * The data used to create many Tg_accounts.
     */
    data: Tg_accountCreateManyInput | Tg_accountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tg_accountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tg_account update
   */
  export type Tg_accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_account
     */
    select?: Tg_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tg_account
     */
    omit?: Tg_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tg_accountInclude<ExtArgs> | null
    /**
     * The data needed to update a Tg_account.
     */
    data: XOR<Tg_accountUpdateInput, Tg_accountUncheckedUpdateInput>
    /**
     * Choose, which Tg_account to update.
     */
    where: Tg_accountWhereUniqueInput
  }

  /**
   * Tg_account updateMany
   */
  export type Tg_accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tg_accounts.
     */
    data: XOR<Tg_accountUpdateManyMutationInput, Tg_accountUncheckedUpdateManyInput>
    /**
     * Filter which Tg_accounts to update
     */
    where?: Tg_accountWhereInput
    /**
     * Limit how many Tg_accounts to update.
     */
    limit?: number
  }

  /**
   * Tg_account updateManyAndReturn
   */
  export type Tg_accountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_account
     */
    select?: Tg_accountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tg_account
     */
    omit?: Tg_accountOmit<ExtArgs> | null
    /**
     * The data used to update Tg_accounts.
     */
    data: XOR<Tg_accountUpdateManyMutationInput, Tg_accountUncheckedUpdateManyInput>
    /**
     * Filter which Tg_accounts to update
     */
    where?: Tg_accountWhereInput
    /**
     * Limit how many Tg_accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tg_accountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tg_account upsert
   */
  export type Tg_accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_account
     */
    select?: Tg_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tg_account
     */
    omit?: Tg_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tg_accountInclude<ExtArgs> | null
    /**
     * The filter to search for the Tg_account to update in case it exists.
     */
    where: Tg_accountWhereUniqueInput
    /**
     * In case the Tg_account found by the `where` argument doesn't exist, create a new Tg_account with this data.
     */
    create: XOR<Tg_accountCreateInput, Tg_accountUncheckedCreateInput>
    /**
     * In case the Tg_account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tg_accountUpdateInput, Tg_accountUncheckedUpdateInput>
  }

  /**
   * Tg_account delete
   */
  export type Tg_accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_account
     */
    select?: Tg_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tg_account
     */
    omit?: Tg_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tg_accountInclude<ExtArgs> | null
    /**
     * Filter which Tg_account to delete.
     */
    where: Tg_accountWhereUniqueInput
  }

  /**
   * Tg_account deleteMany
   */
  export type Tg_accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tg_accounts to delete
     */
    where?: Tg_accountWhereInput
    /**
     * Limit how many Tg_accounts to delete.
     */
    limit?: number
  }

  /**
   * Tg_account.proxy
   */
  export type Tg_account$proxyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    where?: ProxyWhereInput
  }

  /**
   * Tg_account.comments
   */
  export type Tg_account$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Tg_account without action
   */
  export type Tg_accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_account
     */
    select?: Tg_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tg_account
     */
    omit?: Tg_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tg_accountInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    accountId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    accountId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    accountId: number | null
    message: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    accountId: number | null
    message: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    accountId: number
    message: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    accountId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    accountId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    accountId?: true
    message?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    accountId?: true
    message?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    accountId?: true
    message?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    accountId: number | null
    message: string
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    message?: boolean
    account?: boolean | Comment$accountArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    message?: boolean
    account?: boolean | Comment$accountArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    message?: boolean
    account?: boolean | Comment$accountArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    accountId?: boolean
    message?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "message", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Comment$accountArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Comment$accountArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Comment$accountArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      account: Prisma.$Tg_accountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accountId: number | null
      message: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends Comment$accountArgs<ExtArgs> = {}>(args?: Subset<T, Comment$accountArgs<ExtArgs>>): Prisma__Tg_accountClient<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly accountId: FieldRef<"Comment", 'Int'>
    readonly message: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.account
   */
  export type Comment$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_account
     */
    select?: Tg_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tg_account
     */
    omit?: Tg_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tg_accountInclude<ExtArgs> | null
    where?: Tg_accountWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Proxy
   */

  export type AggregateProxy = {
    _count: ProxyCountAggregateOutputType | null
    _avg: ProxyAvgAggregateOutputType | null
    _sum: ProxySumAggregateOutputType | null
    _min: ProxyMinAggregateOutputType | null
    _max: ProxyMaxAggregateOutputType | null
  }

  export type ProxyAvgAggregateOutputType = {
    id: number | null
    port: number | null
  }

  export type ProxySumAggregateOutputType = {
    id: number | null
    port: number | null
  }

  export type ProxyMinAggregateOutputType = {
    id: number | null
    type: $Enums.ProxyType | null
    host: string | null
    port: number | null
    isIPv6: boolean | null
    login: string | null
    password: string | null
  }

  export type ProxyMaxAggregateOutputType = {
    id: number | null
    type: $Enums.ProxyType | null
    host: string | null
    port: number | null
    isIPv6: boolean | null
    login: string | null
    password: string | null
  }

  export type ProxyCountAggregateOutputType = {
    id: number
    type: number
    host: number
    port: number
    isIPv6: number
    login: number
    password: number
    _all: number
  }


  export type ProxyAvgAggregateInputType = {
    id?: true
    port?: true
  }

  export type ProxySumAggregateInputType = {
    id?: true
    port?: true
  }

  export type ProxyMinAggregateInputType = {
    id?: true
    type?: true
    host?: true
    port?: true
    isIPv6?: true
    login?: true
    password?: true
  }

  export type ProxyMaxAggregateInputType = {
    id?: true
    type?: true
    host?: true
    port?: true
    isIPv6?: true
    login?: true
    password?: true
  }

  export type ProxyCountAggregateInputType = {
    id?: true
    type?: true
    host?: true
    port?: true
    isIPv6?: true
    login?: true
    password?: true
    _all?: true
  }

  export type ProxyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proxy to aggregate.
     */
    where?: ProxyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proxies to fetch.
     */
    orderBy?: ProxyOrderByWithRelationInput | ProxyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProxyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proxies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proxies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proxies
    **/
    _count?: true | ProxyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProxyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProxySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProxyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProxyMaxAggregateInputType
  }

  export type GetProxyAggregateType<T extends ProxyAggregateArgs> = {
        [P in keyof T & keyof AggregateProxy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProxy[P]>
      : GetScalarType<T[P], AggregateProxy[P]>
  }




  export type ProxyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProxyWhereInput
    orderBy?: ProxyOrderByWithAggregationInput | ProxyOrderByWithAggregationInput[]
    by: ProxyScalarFieldEnum[] | ProxyScalarFieldEnum
    having?: ProxyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProxyCountAggregateInputType | true
    _avg?: ProxyAvgAggregateInputType
    _sum?: ProxySumAggregateInputType
    _min?: ProxyMinAggregateInputType
    _max?: ProxyMaxAggregateInputType
  }

  export type ProxyGroupByOutputType = {
    id: number
    type: $Enums.ProxyType
    host: string
    port: number
    isIPv6: boolean
    login: string | null
    password: string | null
    _count: ProxyCountAggregateOutputType | null
    _avg: ProxyAvgAggregateOutputType | null
    _sum: ProxySumAggregateOutputType | null
    _min: ProxyMinAggregateOutputType | null
    _max: ProxyMaxAggregateOutputType | null
  }

  type GetProxyGroupByPayload<T extends ProxyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProxyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProxyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProxyGroupByOutputType[P]>
            : GetScalarType<T[P], ProxyGroupByOutputType[P]>
        }
      >
    >


  export type ProxySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    host?: boolean
    port?: boolean
    isIPv6?: boolean
    login?: boolean
    password?: boolean
    Tg_account?: boolean | Proxy$Tg_accountArgs<ExtArgs>
  }, ExtArgs["result"]["proxy"]>

  export type ProxySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    host?: boolean
    port?: boolean
    isIPv6?: boolean
    login?: boolean
    password?: boolean
  }, ExtArgs["result"]["proxy"]>

  export type ProxySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    host?: boolean
    port?: boolean
    isIPv6?: boolean
    login?: boolean
    password?: boolean
  }, ExtArgs["result"]["proxy"]>

  export type ProxySelectScalar = {
    id?: boolean
    type?: boolean
    host?: boolean
    port?: boolean
    isIPv6?: boolean
    login?: boolean
    password?: boolean
  }

  export type ProxyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "host" | "port" | "isIPv6" | "login" | "password", ExtArgs["result"]["proxy"]>
  export type ProxyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tg_account?: boolean | Proxy$Tg_accountArgs<ExtArgs>
  }
  export type ProxyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProxyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProxyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proxy"
    objects: {
      Tg_account: Prisma.$Tg_accountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.ProxyType
      host: string
      port: number
      isIPv6: boolean
      login: string | null
      password: string | null
    }, ExtArgs["result"]["proxy"]>
    composites: {}
  }

  type ProxyGetPayload<S extends boolean | null | undefined | ProxyDefaultArgs> = $Result.GetResult<Prisma.$ProxyPayload, S>

  type ProxyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProxyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProxyCountAggregateInputType | true
    }

  export interface ProxyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proxy'], meta: { name: 'Proxy' } }
    /**
     * Find zero or one Proxy that matches the filter.
     * @param {ProxyFindUniqueArgs} args - Arguments to find a Proxy
     * @example
     * // Get one Proxy
     * const proxy = await prisma.proxy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProxyFindUniqueArgs>(args: SelectSubset<T, ProxyFindUniqueArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proxy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProxyFindUniqueOrThrowArgs} args - Arguments to find a Proxy
     * @example
     * // Get one Proxy
     * const proxy = await prisma.proxy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProxyFindUniqueOrThrowArgs>(args: SelectSubset<T, ProxyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proxy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyFindFirstArgs} args - Arguments to find a Proxy
     * @example
     * // Get one Proxy
     * const proxy = await prisma.proxy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProxyFindFirstArgs>(args?: SelectSubset<T, ProxyFindFirstArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proxy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyFindFirstOrThrowArgs} args - Arguments to find a Proxy
     * @example
     * // Get one Proxy
     * const proxy = await prisma.proxy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProxyFindFirstOrThrowArgs>(args?: SelectSubset<T, ProxyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proxies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proxies
     * const proxies = await prisma.proxy.findMany()
     * 
     * // Get first 10 Proxies
     * const proxies = await prisma.proxy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proxyWithIdOnly = await prisma.proxy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProxyFindManyArgs>(args?: SelectSubset<T, ProxyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proxy.
     * @param {ProxyCreateArgs} args - Arguments to create a Proxy.
     * @example
     * // Create one Proxy
     * const Proxy = await prisma.proxy.create({
     *   data: {
     *     // ... data to create a Proxy
     *   }
     * })
     * 
     */
    create<T extends ProxyCreateArgs>(args: SelectSubset<T, ProxyCreateArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proxies.
     * @param {ProxyCreateManyArgs} args - Arguments to create many Proxies.
     * @example
     * // Create many Proxies
     * const proxy = await prisma.proxy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProxyCreateManyArgs>(args?: SelectSubset<T, ProxyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proxies and returns the data saved in the database.
     * @param {ProxyCreateManyAndReturnArgs} args - Arguments to create many Proxies.
     * @example
     * // Create many Proxies
     * const proxy = await prisma.proxy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proxies and only return the `id`
     * const proxyWithIdOnly = await prisma.proxy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProxyCreateManyAndReturnArgs>(args?: SelectSubset<T, ProxyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proxy.
     * @param {ProxyDeleteArgs} args - Arguments to delete one Proxy.
     * @example
     * // Delete one Proxy
     * const Proxy = await prisma.proxy.delete({
     *   where: {
     *     // ... filter to delete one Proxy
     *   }
     * })
     * 
     */
    delete<T extends ProxyDeleteArgs>(args: SelectSubset<T, ProxyDeleteArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proxy.
     * @param {ProxyUpdateArgs} args - Arguments to update one Proxy.
     * @example
     * // Update one Proxy
     * const proxy = await prisma.proxy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProxyUpdateArgs>(args: SelectSubset<T, ProxyUpdateArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proxies.
     * @param {ProxyDeleteManyArgs} args - Arguments to filter Proxies to delete.
     * @example
     * // Delete a few Proxies
     * const { count } = await prisma.proxy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProxyDeleteManyArgs>(args?: SelectSubset<T, ProxyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proxies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proxies
     * const proxy = await prisma.proxy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProxyUpdateManyArgs>(args: SelectSubset<T, ProxyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proxies and returns the data updated in the database.
     * @param {ProxyUpdateManyAndReturnArgs} args - Arguments to update many Proxies.
     * @example
     * // Update many Proxies
     * const proxy = await prisma.proxy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proxies and only return the `id`
     * const proxyWithIdOnly = await prisma.proxy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProxyUpdateManyAndReturnArgs>(args: SelectSubset<T, ProxyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proxy.
     * @param {ProxyUpsertArgs} args - Arguments to update or create a Proxy.
     * @example
     * // Update or create a Proxy
     * const proxy = await prisma.proxy.upsert({
     *   create: {
     *     // ... data to create a Proxy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proxy we want to update
     *   }
     * })
     */
    upsert<T extends ProxyUpsertArgs>(args: SelectSubset<T, ProxyUpsertArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proxies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyCountArgs} args - Arguments to filter Proxies to count.
     * @example
     * // Count the number of Proxies
     * const count = await prisma.proxy.count({
     *   where: {
     *     // ... the filter for the Proxies we want to count
     *   }
     * })
    **/
    count<T extends ProxyCountArgs>(
      args?: Subset<T, ProxyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProxyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proxy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProxyAggregateArgs>(args: Subset<T, ProxyAggregateArgs>): Prisma.PrismaPromise<GetProxyAggregateType<T>>

    /**
     * Group by Proxy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProxyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProxyGroupByArgs['orderBy'] }
        : { orderBy?: ProxyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProxyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProxyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proxy model
   */
  readonly fields: ProxyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proxy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProxyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tg_account<T extends Proxy$Tg_accountArgs<ExtArgs> = {}>(args?: Subset<T, Proxy$Tg_accountArgs<ExtArgs>>): Prisma__Tg_accountClient<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proxy model
   */
  interface ProxyFieldRefs {
    readonly id: FieldRef<"Proxy", 'Int'>
    readonly type: FieldRef<"Proxy", 'ProxyType'>
    readonly host: FieldRef<"Proxy", 'String'>
    readonly port: FieldRef<"Proxy", 'Int'>
    readonly isIPv6: FieldRef<"Proxy", 'Boolean'>
    readonly login: FieldRef<"Proxy", 'String'>
    readonly password: FieldRef<"Proxy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Proxy findUnique
   */
  export type ProxyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * Filter, which Proxy to fetch.
     */
    where: ProxyWhereUniqueInput
  }

  /**
   * Proxy findUniqueOrThrow
   */
  export type ProxyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * Filter, which Proxy to fetch.
     */
    where: ProxyWhereUniqueInput
  }

  /**
   * Proxy findFirst
   */
  export type ProxyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * Filter, which Proxy to fetch.
     */
    where?: ProxyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proxies to fetch.
     */
    orderBy?: ProxyOrderByWithRelationInput | ProxyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proxies.
     */
    cursor?: ProxyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proxies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proxies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proxies.
     */
    distinct?: ProxyScalarFieldEnum | ProxyScalarFieldEnum[]
  }

  /**
   * Proxy findFirstOrThrow
   */
  export type ProxyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * Filter, which Proxy to fetch.
     */
    where?: ProxyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proxies to fetch.
     */
    orderBy?: ProxyOrderByWithRelationInput | ProxyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proxies.
     */
    cursor?: ProxyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proxies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proxies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proxies.
     */
    distinct?: ProxyScalarFieldEnum | ProxyScalarFieldEnum[]
  }

  /**
   * Proxy findMany
   */
  export type ProxyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * Filter, which Proxies to fetch.
     */
    where?: ProxyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proxies to fetch.
     */
    orderBy?: ProxyOrderByWithRelationInput | ProxyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proxies.
     */
    cursor?: ProxyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proxies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proxies.
     */
    skip?: number
    distinct?: ProxyScalarFieldEnum | ProxyScalarFieldEnum[]
  }

  /**
   * Proxy create
   */
  export type ProxyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * The data needed to create a Proxy.
     */
    data: XOR<ProxyCreateInput, ProxyUncheckedCreateInput>
  }

  /**
   * Proxy createMany
   */
  export type ProxyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proxies.
     */
    data: ProxyCreateManyInput | ProxyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proxy createManyAndReturn
   */
  export type ProxyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * The data used to create many Proxies.
     */
    data: ProxyCreateManyInput | ProxyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proxy update
   */
  export type ProxyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * The data needed to update a Proxy.
     */
    data: XOR<ProxyUpdateInput, ProxyUncheckedUpdateInput>
    /**
     * Choose, which Proxy to update.
     */
    where: ProxyWhereUniqueInput
  }

  /**
   * Proxy updateMany
   */
  export type ProxyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proxies.
     */
    data: XOR<ProxyUpdateManyMutationInput, ProxyUncheckedUpdateManyInput>
    /**
     * Filter which Proxies to update
     */
    where?: ProxyWhereInput
    /**
     * Limit how many Proxies to update.
     */
    limit?: number
  }

  /**
   * Proxy updateManyAndReturn
   */
  export type ProxyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * The data used to update Proxies.
     */
    data: XOR<ProxyUpdateManyMutationInput, ProxyUncheckedUpdateManyInput>
    /**
     * Filter which Proxies to update
     */
    where?: ProxyWhereInput
    /**
     * Limit how many Proxies to update.
     */
    limit?: number
  }

  /**
   * Proxy upsert
   */
  export type ProxyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * The filter to search for the Proxy to update in case it exists.
     */
    where: ProxyWhereUniqueInput
    /**
     * In case the Proxy found by the `where` argument doesn't exist, create a new Proxy with this data.
     */
    create: XOR<ProxyCreateInput, ProxyUncheckedCreateInput>
    /**
     * In case the Proxy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProxyUpdateInput, ProxyUncheckedUpdateInput>
  }

  /**
   * Proxy delete
   */
  export type ProxyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * Filter which Proxy to delete.
     */
    where: ProxyWhereUniqueInput
  }

  /**
   * Proxy deleteMany
   */
  export type ProxyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proxies to delete
     */
    where?: ProxyWhereInput
    /**
     * Limit how many Proxies to delete.
     */
    limit?: number
  }

  /**
   * Proxy.Tg_account
   */
  export type Proxy$Tg_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tg_account
     */
    select?: Tg_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tg_account
     */
    omit?: Tg_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tg_accountInclude<ExtArgs> | null
    where?: Tg_accountWhereInput
  }

  /**
   * Proxy without action
   */
  export type ProxyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Tg_accountScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    username: 'username',
    firstname: 'firstname',
    lastname: 'lastname',
    proxyId: 'proxyId',
    session: 'session'
  };

  export type Tg_accountScalarFieldEnum = (typeof Tg_accountScalarFieldEnum)[keyof typeof Tg_accountScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    message: 'message'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ProxyScalarFieldEnum: {
    id: 'id',
    type: 'type',
    host: 'host',
    port: 'port',
    isIPv6: 'isIPv6',
    login: 'login',
    password: 'password'
  };

  export type ProxyScalarFieldEnum = (typeof ProxyScalarFieldEnum)[keyof typeof ProxyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ProxyType'
   */
  export type EnumProxyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProxyType'>
    


  /**
   * Reference to a field of type 'ProxyType[]'
   */
  export type ListEnumProxyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProxyType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type Tg_accountWhereInput = {
    AND?: Tg_accountWhereInput | Tg_accountWhereInput[]
    OR?: Tg_accountWhereInput[]
    NOT?: Tg_accountWhereInput | Tg_accountWhereInput[]
    id?: IntFilter<"Tg_account"> | number
    phone?: StringFilter<"Tg_account"> | string
    username?: StringFilter<"Tg_account"> | string
    firstname?: StringFilter<"Tg_account"> | string
    lastname?: StringNullableFilter<"Tg_account"> | string | null
    proxyId?: IntNullableFilter<"Tg_account"> | number | null
    session?: StringNullableFilter<"Tg_account"> | string | null
    proxy?: XOR<ProxyNullableScalarRelationFilter, ProxyWhereInput> | null
    comments?: CommentListRelationFilter
  }

  export type Tg_accountOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    proxyId?: SortOrderInput | SortOrder
    session?: SortOrderInput | SortOrder
    proxy?: ProxyOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type Tg_accountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    proxyId?: number
    AND?: Tg_accountWhereInput | Tg_accountWhereInput[]
    OR?: Tg_accountWhereInput[]
    NOT?: Tg_accountWhereInput | Tg_accountWhereInput[]
    phone?: StringFilter<"Tg_account"> | string
    username?: StringFilter<"Tg_account"> | string
    firstname?: StringFilter<"Tg_account"> | string
    lastname?: StringNullableFilter<"Tg_account"> | string | null
    session?: StringNullableFilter<"Tg_account"> | string | null
    proxy?: XOR<ProxyNullableScalarRelationFilter, ProxyWhereInput> | null
    comments?: CommentListRelationFilter
  }, "id" | "proxyId">

  export type Tg_accountOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    proxyId?: SortOrderInput | SortOrder
    session?: SortOrderInput | SortOrder
    _count?: Tg_accountCountOrderByAggregateInput
    _avg?: Tg_accountAvgOrderByAggregateInput
    _max?: Tg_accountMaxOrderByAggregateInput
    _min?: Tg_accountMinOrderByAggregateInput
    _sum?: Tg_accountSumOrderByAggregateInput
  }

  export type Tg_accountScalarWhereWithAggregatesInput = {
    AND?: Tg_accountScalarWhereWithAggregatesInput | Tg_accountScalarWhereWithAggregatesInput[]
    OR?: Tg_accountScalarWhereWithAggregatesInput[]
    NOT?: Tg_accountScalarWhereWithAggregatesInput | Tg_accountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tg_account"> | number
    phone?: StringWithAggregatesFilter<"Tg_account"> | string
    username?: StringWithAggregatesFilter<"Tg_account"> | string
    firstname?: StringWithAggregatesFilter<"Tg_account"> | string
    lastname?: StringNullableWithAggregatesFilter<"Tg_account"> | string | null
    proxyId?: IntNullableWithAggregatesFilter<"Tg_account"> | number | null
    session?: StringNullableWithAggregatesFilter<"Tg_account"> | string | null
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    accountId?: IntNullableFilter<"Comment"> | number | null
    message?: StringFilter<"Comment"> | string
    account?: XOR<Tg_accountNullableScalarRelationFilter, Tg_accountWhereInput> | null
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrderInput | SortOrder
    message?: SortOrder
    account?: Tg_accountOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    accountId?: IntNullableFilter<"Comment"> | number | null
    message?: StringFilter<"Comment"> | string
    account?: XOR<Tg_accountNullableScalarRelationFilter, Tg_accountWhereInput> | null
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrderInput | SortOrder
    message?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    accountId?: IntNullableWithAggregatesFilter<"Comment"> | number | null
    message?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type ProxyWhereInput = {
    AND?: ProxyWhereInput | ProxyWhereInput[]
    OR?: ProxyWhereInput[]
    NOT?: ProxyWhereInput | ProxyWhereInput[]
    id?: IntFilter<"Proxy"> | number
    type?: EnumProxyTypeFilter<"Proxy"> | $Enums.ProxyType
    host?: StringFilter<"Proxy"> | string
    port?: IntFilter<"Proxy"> | number
    isIPv6?: BoolFilter<"Proxy"> | boolean
    login?: StringNullableFilter<"Proxy"> | string | null
    password?: StringNullableFilter<"Proxy"> | string | null
    Tg_account?: XOR<Tg_accountNullableScalarRelationFilter, Tg_accountWhereInput> | null
  }

  export type ProxyOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    host?: SortOrder
    port?: SortOrder
    isIPv6?: SortOrder
    login?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    Tg_account?: Tg_accountOrderByWithRelationInput
  }

  export type ProxyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProxyWhereInput | ProxyWhereInput[]
    OR?: ProxyWhereInput[]
    NOT?: ProxyWhereInput | ProxyWhereInput[]
    type?: EnumProxyTypeFilter<"Proxy"> | $Enums.ProxyType
    host?: StringFilter<"Proxy"> | string
    port?: IntFilter<"Proxy"> | number
    isIPv6?: BoolFilter<"Proxy"> | boolean
    login?: StringNullableFilter<"Proxy"> | string | null
    password?: StringNullableFilter<"Proxy"> | string | null
    Tg_account?: XOR<Tg_accountNullableScalarRelationFilter, Tg_accountWhereInput> | null
  }, "id">

  export type ProxyOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    host?: SortOrder
    port?: SortOrder
    isIPv6?: SortOrder
    login?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: ProxyCountOrderByAggregateInput
    _avg?: ProxyAvgOrderByAggregateInput
    _max?: ProxyMaxOrderByAggregateInput
    _min?: ProxyMinOrderByAggregateInput
    _sum?: ProxySumOrderByAggregateInput
  }

  export type ProxyScalarWhereWithAggregatesInput = {
    AND?: ProxyScalarWhereWithAggregatesInput | ProxyScalarWhereWithAggregatesInput[]
    OR?: ProxyScalarWhereWithAggregatesInput[]
    NOT?: ProxyScalarWhereWithAggregatesInput | ProxyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Proxy"> | number
    type?: EnumProxyTypeWithAggregatesFilter<"Proxy"> | $Enums.ProxyType
    host?: StringWithAggregatesFilter<"Proxy"> | string
    port?: IntWithAggregatesFilter<"Proxy"> | number
    isIPv6?: BoolWithAggregatesFilter<"Proxy"> | boolean
    login?: StringNullableWithAggregatesFilter<"Proxy"> | string | null
    password?: StringNullableWithAggregatesFilter<"Proxy"> | string | null
  }

  export type Tg_accountCreateInput = {
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    session?: string | null
    proxy?: ProxyCreateNestedOneWithoutTg_accountInput
    comments?: CommentCreateNestedManyWithoutAccountInput
  }

  export type Tg_accountUncheckedCreateInput = {
    id?: number
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    proxyId?: number | null
    session?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput
  }

  export type Tg_accountUpdateInput = {
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    session?: NullableStringFieldUpdateOperationsInput | string | null
    proxy?: ProxyUpdateOneWithoutTg_accountNestedInput
    comments?: CommentUpdateManyWithoutAccountNestedInput
  }

  export type Tg_accountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    proxyId?: NullableIntFieldUpdateOperationsInput | number | null
    session?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type Tg_accountCreateManyInput = {
    id?: number
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    proxyId?: number | null
    session?: string | null
  }

  export type Tg_accountUpdateManyMutationInput = {
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    session?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tg_accountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    proxyId?: NullableIntFieldUpdateOperationsInput | number | null
    session?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateInput = {
    message: string
    account?: Tg_accountCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    accountId?: number | null
    message: string
  }

  export type CommentUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    account?: Tg_accountUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id?: number
    accountId?: number | null
    message: string
  }

  export type CommentUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ProxyCreateInput = {
    type: $Enums.ProxyType
    host: string
    port: number
    isIPv6?: boolean
    login?: string | null
    password?: string | null
    Tg_account?: Tg_accountCreateNestedOneWithoutProxyInput
  }

  export type ProxyUncheckedCreateInput = {
    id?: number
    type: $Enums.ProxyType
    host: string
    port: number
    isIPv6?: boolean
    login?: string | null
    password?: string | null
    Tg_account?: Tg_accountUncheckedCreateNestedOneWithoutProxyInput
  }

  export type ProxyUpdateInput = {
    type?: EnumProxyTypeFieldUpdateOperationsInput | $Enums.ProxyType
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    isIPv6?: BoolFieldUpdateOperationsInput | boolean
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Tg_account?: Tg_accountUpdateOneWithoutProxyNestedInput
  }

  export type ProxyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumProxyTypeFieldUpdateOperationsInput | $Enums.ProxyType
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    isIPv6?: BoolFieldUpdateOperationsInput | boolean
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Tg_account?: Tg_accountUncheckedUpdateOneWithoutProxyNestedInput
  }

  export type ProxyCreateManyInput = {
    id?: number
    type: $Enums.ProxyType
    host: string
    port: number
    isIPv6?: boolean
    login?: string | null
    password?: string | null
  }

  export type ProxyUpdateManyMutationInput = {
    type?: EnumProxyTypeFieldUpdateOperationsInput | $Enums.ProxyType
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    isIPv6?: BoolFieldUpdateOperationsInput | boolean
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProxyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumProxyTypeFieldUpdateOperationsInput | $Enums.ProxyType
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    isIPv6?: BoolFieldUpdateOperationsInput | boolean
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProxyNullableScalarRelationFilter = {
    is?: ProxyWhereInput | null
    isNot?: ProxyWhereInput | null
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Tg_accountCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    proxyId?: SortOrder
    session?: SortOrder
  }

  export type Tg_accountAvgOrderByAggregateInput = {
    id?: SortOrder
    proxyId?: SortOrder
  }

  export type Tg_accountMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    proxyId?: SortOrder
    session?: SortOrder
  }

  export type Tg_accountMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    proxyId?: SortOrder
    session?: SortOrder
  }

  export type Tg_accountSumOrderByAggregateInput = {
    id?: SortOrder
    proxyId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Tg_accountNullableScalarRelationFilter = {
    is?: Tg_accountWhereInput | null
    isNot?: Tg_accountWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    message?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    message?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    message?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
  }

  export type EnumProxyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProxyType | EnumProxyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProxyType[] | ListEnumProxyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProxyType[] | ListEnumProxyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProxyTypeFilter<$PrismaModel> | $Enums.ProxyType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProxyCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    host?: SortOrder
    port?: SortOrder
    isIPv6?: SortOrder
    login?: SortOrder
    password?: SortOrder
  }

  export type ProxyAvgOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
  }

  export type ProxyMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    host?: SortOrder
    port?: SortOrder
    isIPv6?: SortOrder
    login?: SortOrder
    password?: SortOrder
  }

  export type ProxyMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    host?: SortOrder
    port?: SortOrder
    isIPv6?: SortOrder
    login?: SortOrder
    password?: SortOrder
  }

  export type ProxySumOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
  }

  export type EnumProxyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProxyType | EnumProxyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProxyType[] | ListEnumProxyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProxyType[] | ListEnumProxyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProxyTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProxyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProxyTypeFilter<$PrismaModel>
    _max?: NestedEnumProxyTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProxyCreateNestedOneWithoutTg_accountInput = {
    create?: XOR<ProxyCreateWithoutTg_accountInput, ProxyUncheckedCreateWithoutTg_accountInput>
    connectOrCreate?: ProxyCreateOrConnectWithoutTg_accountInput
    connect?: ProxyWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutAccountInput = {
    create?: XOR<CommentCreateWithoutAccountInput, CommentUncheckedCreateWithoutAccountInput> | CommentCreateWithoutAccountInput[] | CommentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAccountInput | CommentCreateOrConnectWithoutAccountInput[]
    createMany?: CommentCreateManyAccountInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<CommentCreateWithoutAccountInput, CommentUncheckedCreateWithoutAccountInput> | CommentCreateWithoutAccountInput[] | CommentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAccountInput | CommentCreateOrConnectWithoutAccountInput[]
    createMany?: CommentCreateManyAccountInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProxyUpdateOneWithoutTg_accountNestedInput = {
    create?: XOR<ProxyCreateWithoutTg_accountInput, ProxyUncheckedCreateWithoutTg_accountInput>
    connectOrCreate?: ProxyCreateOrConnectWithoutTg_accountInput
    upsert?: ProxyUpsertWithoutTg_accountInput
    disconnect?: ProxyWhereInput | boolean
    delete?: ProxyWhereInput | boolean
    connect?: ProxyWhereUniqueInput
    update?: XOR<XOR<ProxyUpdateToOneWithWhereWithoutTg_accountInput, ProxyUpdateWithoutTg_accountInput>, ProxyUncheckedUpdateWithoutTg_accountInput>
  }

  export type CommentUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CommentCreateWithoutAccountInput, CommentUncheckedCreateWithoutAccountInput> | CommentCreateWithoutAccountInput[] | CommentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAccountInput | CommentCreateOrConnectWithoutAccountInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAccountInput | CommentUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CommentCreateManyAccountInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAccountInput | CommentUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAccountInput | CommentUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CommentCreateWithoutAccountInput, CommentUncheckedCreateWithoutAccountInput> | CommentCreateWithoutAccountInput[] | CommentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAccountInput | CommentCreateOrConnectWithoutAccountInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAccountInput | CommentUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CommentCreateManyAccountInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAccountInput | CommentUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAccountInput | CommentUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type Tg_accountCreateNestedOneWithoutCommentsInput = {
    create?: XOR<Tg_accountCreateWithoutCommentsInput, Tg_accountUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: Tg_accountCreateOrConnectWithoutCommentsInput
    connect?: Tg_accountWhereUniqueInput
  }

  export type Tg_accountUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<Tg_accountCreateWithoutCommentsInput, Tg_accountUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: Tg_accountCreateOrConnectWithoutCommentsInput
    upsert?: Tg_accountUpsertWithoutCommentsInput
    disconnect?: Tg_accountWhereInput | boolean
    delete?: Tg_accountWhereInput | boolean
    connect?: Tg_accountWhereUniqueInput
    update?: XOR<XOR<Tg_accountUpdateToOneWithWhereWithoutCommentsInput, Tg_accountUpdateWithoutCommentsInput>, Tg_accountUncheckedUpdateWithoutCommentsInput>
  }

  export type Tg_accountCreateNestedOneWithoutProxyInput = {
    create?: XOR<Tg_accountCreateWithoutProxyInput, Tg_accountUncheckedCreateWithoutProxyInput>
    connectOrCreate?: Tg_accountCreateOrConnectWithoutProxyInput
    connect?: Tg_accountWhereUniqueInput
  }

  export type Tg_accountUncheckedCreateNestedOneWithoutProxyInput = {
    create?: XOR<Tg_accountCreateWithoutProxyInput, Tg_accountUncheckedCreateWithoutProxyInput>
    connectOrCreate?: Tg_accountCreateOrConnectWithoutProxyInput
    connect?: Tg_accountWhereUniqueInput
  }

  export type EnumProxyTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProxyType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type Tg_accountUpdateOneWithoutProxyNestedInput = {
    create?: XOR<Tg_accountCreateWithoutProxyInput, Tg_accountUncheckedCreateWithoutProxyInput>
    connectOrCreate?: Tg_accountCreateOrConnectWithoutProxyInput
    upsert?: Tg_accountUpsertWithoutProxyInput
    disconnect?: Tg_accountWhereInput | boolean
    delete?: Tg_accountWhereInput | boolean
    connect?: Tg_accountWhereUniqueInput
    update?: XOR<XOR<Tg_accountUpdateToOneWithWhereWithoutProxyInput, Tg_accountUpdateWithoutProxyInput>, Tg_accountUncheckedUpdateWithoutProxyInput>
  }

  export type Tg_accountUncheckedUpdateOneWithoutProxyNestedInput = {
    create?: XOR<Tg_accountCreateWithoutProxyInput, Tg_accountUncheckedCreateWithoutProxyInput>
    connectOrCreate?: Tg_accountCreateOrConnectWithoutProxyInput
    upsert?: Tg_accountUpsertWithoutProxyInput
    disconnect?: Tg_accountWhereInput | boolean
    delete?: Tg_accountWhereInput | boolean
    connect?: Tg_accountWhereUniqueInput
    update?: XOR<XOR<Tg_accountUpdateToOneWithWhereWithoutProxyInput, Tg_accountUpdateWithoutProxyInput>, Tg_accountUncheckedUpdateWithoutProxyInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProxyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProxyType | EnumProxyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProxyType[] | ListEnumProxyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProxyType[] | ListEnumProxyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProxyTypeFilter<$PrismaModel> | $Enums.ProxyType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumProxyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProxyType | EnumProxyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProxyType[] | ListEnumProxyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProxyType[] | ListEnumProxyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProxyTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProxyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProxyTypeFilter<$PrismaModel>
    _max?: NestedEnumProxyTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProxyCreateWithoutTg_accountInput = {
    type: $Enums.ProxyType
    host: string
    port: number
    isIPv6?: boolean
    login?: string | null
    password?: string | null
  }

  export type ProxyUncheckedCreateWithoutTg_accountInput = {
    id?: number
    type: $Enums.ProxyType
    host: string
    port: number
    isIPv6?: boolean
    login?: string | null
    password?: string | null
  }

  export type ProxyCreateOrConnectWithoutTg_accountInput = {
    where: ProxyWhereUniqueInput
    create: XOR<ProxyCreateWithoutTg_accountInput, ProxyUncheckedCreateWithoutTg_accountInput>
  }

  export type CommentCreateWithoutAccountInput = {
    message: string
  }

  export type CommentUncheckedCreateWithoutAccountInput = {
    id?: number
    message: string
  }

  export type CommentCreateOrConnectWithoutAccountInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAccountInput, CommentUncheckedCreateWithoutAccountInput>
  }

  export type CommentCreateManyAccountInputEnvelope = {
    data: CommentCreateManyAccountInput | CommentCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type ProxyUpsertWithoutTg_accountInput = {
    update: XOR<ProxyUpdateWithoutTg_accountInput, ProxyUncheckedUpdateWithoutTg_accountInput>
    create: XOR<ProxyCreateWithoutTg_accountInput, ProxyUncheckedCreateWithoutTg_accountInput>
    where?: ProxyWhereInput
  }

  export type ProxyUpdateToOneWithWhereWithoutTg_accountInput = {
    where?: ProxyWhereInput
    data: XOR<ProxyUpdateWithoutTg_accountInput, ProxyUncheckedUpdateWithoutTg_accountInput>
  }

  export type ProxyUpdateWithoutTg_accountInput = {
    type?: EnumProxyTypeFieldUpdateOperationsInput | $Enums.ProxyType
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    isIPv6?: BoolFieldUpdateOperationsInput | boolean
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProxyUncheckedUpdateWithoutTg_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumProxyTypeFieldUpdateOperationsInput | $Enums.ProxyType
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    isIPv6?: BoolFieldUpdateOperationsInput | boolean
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUpsertWithWhereUniqueWithoutAccountInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAccountInput, CommentUncheckedUpdateWithoutAccountInput>
    create: XOR<CommentCreateWithoutAccountInput, CommentUncheckedCreateWithoutAccountInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAccountInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAccountInput, CommentUncheckedUpdateWithoutAccountInput>
  }

  export type CommentUpdateManyWithWhereWithoutAccountInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAccountInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    accountId?: IntNullableFilter<"Comment"> | number | null
    message?: StringFilter<"Comment"> | string
  }

  export type Tg_accountCreateWithoutCommentsInput = {
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    session?: string | null
    proxy?: ProxyCreateNestedOneWithoutTg_accountInput
  }

  export type Tg_accountUncheckedCreateWithoutCommentsInput = {
    id?: number
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    proxyId?: number | null
    session?: string | null
  }

  export type Tg_accountCreateOrConnectWithoutCommentsInput = {
    where: Tg_accountWhereUniqueInput
    create: XOR<Tg_accountCreateWithoutCommentsInput, Tg_accountUncheckedCreateWithoutCommentsInput>
  }

  export type Tg_accountUpsertWithoutCommentsInput = {
    update: XOR<Tg_accountUpdateWithoutCommentsInput, Tg_accountUncheckedUpdateWithoutCommentsInput>
    create: XOR<Tg_accountCreateWithoutCommentsInput, Tg_accountUncheckedCreateWithoutCommentsInput>
    where?: Tg_accountWhereInput
  }

  export type Tg_accountUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Tg_accountWhereInput
    data: XOR<Tg_accountUpdateWithoutCommentsInput, Tg_accountUncheckedUpdateWithoutCommentsInput>
  }

  export type Tg_accountUpdateWithoutCommentsInput = {
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    session?: NullableStringFieldUpdateOperationsInput | string | null
    proxy?: ProxyUpdateOneWithoutTg_accountNestedInput
  }

  export type Tg_accountUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    proxyId?: NullableIntFieldUpdateOperationsInput | number | null
    session?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tg_accountCreateWithoutProxyInput = {
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    session?: string | null
    comments?: CommentCreateNestedManyWithoutAccountInput
  }

  export type Tg_accountUncheckedCreateWithoutProxyInput = {
    id?: number
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    session?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput
  }

  export type Tg_accountCreateOrConnectWithoutProxyInput = {
    where: Tg_accountWhereUniqueInput
    create: XOR<Tg_accountCreateWithoutProxyInput, Tg_accountUncheckedCreateWithoutProxyInput>
  }

  export type Tg_accountUpsertWithoutProxyInput = {
    update: XOR<Tg_accountUpdateWithoutProxyInput, Tg_accountUncheckedUpdateWithoutProxyInput>
    create: XOR<Tg_accountCreateWithoutProxyInput, Tg_accountUncheckedCreateWithoutProxyInput>
    where?: Tg_accountWhereInput
  }

  export type Tg_accountUpdateToOneWithWhereWithoutProxyInput = {
    where?: Tg_accountWhereInput
    data: XOR<Tg_accountUpdateWithoutProxyInput, Tg_accountUncheckedUpdateWithoutProxyInput>
  }

  export type Tg_accountUpdateWithoutProxyInput = {
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    session?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUpdateManyWithoutAccountNestedInput
  }

  export type Tg_accountUncheckedUpdateWithoutProxyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    session?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type CommentCreateManyAccountInput = {
    id?: number
    message: string
  }

  export type CommentUpdateWithoutAccountInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}