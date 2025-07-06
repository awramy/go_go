
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
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
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
 * Model ChatUserList
 * 
 */
export type ChatUserList = $Result.DefaultSelection<Prisma.$ChatUserListPayload>
/**
 * Model UserData
 * 
 */
export type UserData = $Result.DefaultSelection<Prisma.$UserDataPayload>
/**
 * Model WarmingData
 * 
 */
export type WarmingData = $Result.DefaultSelection<Prisma.$WarmingDataPayload>
/**
 * Model FakeUserRole
 * 
 */
export type FakeUserRole = $Result.DefaultSelection<Prisma.$FakeUserRolePayload>

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
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.chatUserList`: Exposes CRUD operations for the **ChatUserList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatUserLists
    * const chatUserLists = await prisma.chatUserList.findMany()
    * ```
    */
  get chatUserList(): Prisma.ChatUserListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userData`: Exposes CRUD operations for the **UserData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserData
    * const userData = await prisma.userData.findMany()
    * ```
    */
  get userData(): Prisma.UserDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warmingData`: Exposes CRUD operations for the **WarmingData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WarmingData
    * const warmingData = await prisma.warmingData.findMany()
    * ```
    */
  get warmingData(): Prisma.WarmingDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fakeUserRole`: Exposes CRUD operations for the **FakeUserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FakeUserRoles
    * const fakeUserRoles = await prisma.fakeUserRole.findMany()
    * ```
    */
  get fakeUserRole(): Prisma.FakeUserRoleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Session: 'Session',
    Comment: 'Comment',
    Proxy: 'Proxy',
    ChatUserList: 'ChatUserList',
    UserData: 'UserData',
    WarmingData: 'WarmingData',
    FakeUserRole: 'FakeUserRole'
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
      modelProps: "tg_account" | "session" | "comment" | "proxy" | "chatUserList" | "userData" | "warmingData" | "fakeUserRole"
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
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
      ChatUserList: {
        payload: Prisma.$ChatUserListPayload<ExtArgs>
        fields: Prisma.ChatUserListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatUserListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatUserListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserListPayload>
          }
          findFirst: {
            args: Prisma.ChatUserListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatUserListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserListPayload>
          }
          findMany: {
            args: Prisma.ChatUserListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserListPayload>[]
          }
          create: {
            args: Prisma.ChatUserListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserListPayload>
          }
          createMany: {
            args: Prisma.ChatUserListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatUserListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserListPayload>[]
          }
          delete: {
            args: Prisma.ChatUserListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserListPayload>
          }
          update: {
            args: Prisma.ChatUserListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserListPayload>
          }
          deleteMany: {
            args: Prisma.ChatUserListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUserListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUserListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserListPayload>[]
          }
          upsert: {
            args: Prisma.ChatUserListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserListPayload>
          }
          aggregate: {
            args: Prisma.ChatUserListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatUserList>
          }
          groupBy: {
            args: Prisma.ChatUserListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatUserListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatUserListCountArgs<ExtArgs>
            result: $Utils.Optional<ChatUserListCountAggregateOutputType> | number
          }
        }
      }
      UserData: {
        payload: Prisma.$UserDataPayload<ExtArgs>
        fields: Prisma.UserDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          findFirst: {
            args: Prisma.UserDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          findMany: {
            args: Prisma.UserDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>[]
          }
          create: {
            args: Prisma.UserDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          createMany: {
            args: Prisma.UserDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>[]
          }
          delete: {
            args: Prisma.UserDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          update: {
            args: Prisma.UserDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          deleteMany: {
            args: Prisma.UserDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>[]
          }
          upsert: {
            args: Prisma.UserDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          aggregate: {
            args: Prisma.UserDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserData>
          }
          groupBy: {
            args: Prisma.UserDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDataCountArgs<ExtArgs>
            result: $Utils.Optional<UserDataCountAggregateOutputType> | number
          }
        }
      }
      WarmingData: {
        payload: Prisma.$WarmingDataPayload<ExtArgs>
        fields: Prisma.WarmingDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarmingDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmingDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarmingDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmingDataPayload>
          }
          findFirst: {
            args: Prisma.WarmingDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmingDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarmingDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmingDataPayload>
          }
          findMany: {
            args: Prisma.WarmingDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmingDataPayload>[]
          }
          create: {
            args: Prisma.WarmingDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmingDataPayload>
          }
          createMany: {
            args: Prisma.WarmingDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarmingDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmingDataPayload>[]
          }
          delete: {
            args: Prisma.WarmingDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmingDataPayload>
          }
          update: {
            args: Prisma.WarmingDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmingDataPayload>
          }
          deleteMany: {
            args: Prisma.WarmingDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarmingDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarmingDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmingDataPayload>[]
          }
          upsert: {
            args: Prisma.WarmingDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmingDataPayload>
          }
          aggregate: {
            args: Prisma.WarmingDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarmingData>
          }
          groupBy: {
            args: Prisma.WarmingDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarmingDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarmingDataCountArgs<ExtArgs>
            result: $Utils.Optional<WarmingDataCountAggregateOutputType> | number
          }
        }
      }
      FakeUserRole: {
        payload: Prisma.$FakeUserRolePayload<ExtArgs>
        fields: Prisma.FakeUserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FakeUserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FakeUserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FakeUserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FakeUserRolePayload>
          }
          findFirst: {
            args: Prisma.FakeUserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FakeUserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FakeUserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FakeUserRolePayload>
          }
          findMany: {
            args: Prisma.FakeUserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FakeUserRolePayload>[]
          }
          create: {
            args: Prisma.FakeUserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FakeUserRolePayload>
          }
          createMany: {
            args: Prisma.FakeUserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FakeUserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FakeUserRolePayload>[]
          }
          delete: {
            args: Prisma.FakeUserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FakeUserRolePayload>
          }
          update: {
            args: Prisma.FakeUserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FakeUserRolePayload>
          }
          deleteMany: {
            args: Prisma.FakeUserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FakeUserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FakeUserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FakeUserRolePayload>[]
          }
          upsert: {
            args: Prisma.FakeUserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FakeUserRolePayload>
          }
          aggregate: {
            args: Prisma.FakeUserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFakeUserRole>
          }
          groupBy: {
            args: Prisma.FakeUserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<FakeUserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.FakeUserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<FakeUserRoleCountAggregateOutputType> | number
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
    session?: SessionOmit
    comment?: CommentOmit
    proxy?: ProxyOmit
    chatUserList?: ChatUserListOmit
    userData?: UserDataOmit
    warmingData?: WarmingDataOmit
    fakeUserRole?: FakeUserRoleOmit
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
    ChatUserList: number
  }

  export type Tg_accountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Tg_accountCountOutputTypeCountCommentsArgs
    ChatUserList?: boolean | Tg_accountCountOutputTypeCountChatUserListArgs
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
   * Tg_accountCountOutputType without action
   */
  export type Tg_accountCountOutputTypeCountChatUserListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatUserListWhereInput
  }


  /**
   * Count Type ChatUserListCountOutputType
   */

  export type ChatUserListCountOutputType = {
    users: number
    warmingData: number
  }

  export type ChatUserListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ChatUserListCountOutputTypeCountUsersArgs
    warmingData?: boolean | ChatUserListCountOutputTypeCountWarmingDataArgs
  }

  // Custom InputTypes
  /**
   * ChatUserListCountOutputType without action
   */
  export type ChatUserListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserListCountOutputType
     */
    select?: ChatUserListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatUserListCountOutputType without action
   */
  export type ChatUserListCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDataWhereInput
  }

  /**
   * ChatUserListCountOutputType without action
   */
  export type ChatUserListCountOutputTypeCountWarmingDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarmingDataWhereInput
  }


  /**
   * Count Type FakeUserRoleCountOutputType
   */

  export type FakeUserRoleCountOutputType = {
    warmingData: number
  }

  export type FakeUserRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warmingData?: boolean | FakeUserRoleCountOutputTypeCountWarmingDataArgs
  }

  // Custom InputTypes
  /**
   * FakeUserRoleCountOutputType without action
   */
  export type FakeUserRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FakeUserRoleCountOutputType
     */
    select?: FakeUserRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FakeUserRoleCountOutputType without action
   */
  export type FakeUserRoleCountOutputTypeCountWarmingDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarmingDataWhereInput
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
    sessionId: number | null
  }

  export type Tg_accountSumAggregateOutputType = {
    id: number | null
    proxyId: number | null
    sessionId: number | null
  }

  export type Tg_accountMinAggregateOutputType = {
    id: number | null
    phone: string | null
    username: string | null
    firstname: string | null
    lastname: string | null
    proxyId: number | null
    sessionId: number | null
  }

  export type Tg_accountMaxAggregateOutputType = {
    id: number | null
    phone: string | null
    username: string | null
    firstname: string | null
    lastname: string | null
    proxyId: number | null
    sessionId: number | null
  }

  export type Tg_accountCountAggregateOutputType = {
    id: number
    phone: number
    username: number
    firstname: number
    lastname: number
    proxyId: number
    sessionId: number
    _all: number
  }


  export type Tg_accountAvgAggregateInputType = {
    id?: true
    proxyId?: true
    sessionId?: true
  }

  export type Tg_accountSumAggregateInputType = {
    id?: true
    proxyId?: true
    sessionId?: true
  }

  export type Tg_accountMinAggregateInputType = {
    id?: true
    phone?: true
    username?: true
    firstname?: true
    lastname?: true
    proxyId?: true
    sessionId?: true
  }

  export type Tg_accountMaxAggregateInputType = {
    id?: true
    phone?: true
    username?: true
    firstname?: true
    lastname?: true
    proxyId?: true
    sessionId?: true
  }

  export type Tg_accountCountAggregateInputType = {
    id?: true
    phone?: true
    username?: true
    firstname?: true
    lastname?: true
    proxyId?: true
    sessionId?: true
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
    sessionId: number | null
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
    sessionId?: boolean
    proxy?: boolean | Tg_account$proxyArgs<ExtArgs>
    comments?: boolean | Tg_account$commentsArgs<ExtArgs>
    session?: boolean | Tg_account$sessionArgs<ExtArgs>
    ChatUserList?: boolean | Tg_account$ChatUserListArgs<ExtArgs>
    warmingData?: boolean | Tg_account$warmingDataArgs<ExtArgs>
    _count?: boolean | Tg_accountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tg_account"]>

  export type Tg_accountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    proxyId?: boolean
    sessionId?: boolean
    proxy?: boolean | Tg_account$proxyArgs<ExtArgs>
    session?: boolean | Tg_account$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["tg_account"]>

  export type Tg_accountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    proxyId?: boolean
    sessionId?: boolean
    proxy?: boolean | Tg_account$proxyArgs<ExtArgs>
    session?: boolean | Tg_account$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["tg_account"]>

  export type Tg_accountSelectScalar = {
    id?: boolean
    phone?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    proxyId?: boolean
    sessionId?: boolean
  }

  export type Tg_accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "username" | "firstname" | "lastname" | "proxyId" | "sessionId", ExtArgs["result"]["tg_account"]>
  export type Tg_accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proxy?: boolean | Tg_account$proxyArgs<ExtArgs>
    comments?: boolean | Tg_account$commentsArgs<ExtArgs>
    session?: boolean | Tg_account$sessionArgs<ExtArgs>
    ChatUserList?: boolean | Tg_account$ChatUserListArgs<ExtArgs>
    warmingData?: boolean | Tg_account$warmingDataArgs<ExtArgs>
    _count?: boolean | Tg_accountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Tg_accountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proxy?: boolean | Tg_account$proxyArgs<ExtArgs>
    session?: boolean | Tg_account$sessionArgs<ExtArgs>
  }
  export type Tg_accountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proxy?: boolean | Tg_account$proxyArgs<ExtArgs>
    session?: boolean | Tg_account$sessionArgs<ExtArgs>
  }

  export type $Tg_accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tg_account"
    objects: {
      proxy: Prisma.$ProxyPayload<ExtArgs> | null
      comments: Prisma.$CommentPayload<ExtArgs>[]
      session: Prisma.$SessionPayload<ExtArgs> | null
      ChatUserList: Prisma.$ChatUserListPayload<ExtArgs>[]
      warmingData: Prisma.$WarmingDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phone: string
      username: string
      firstname: string
      lastname: string | null
      proxyId: number | null
      sessionId: number | null
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
    session<T extends Tg_account$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Tg_account$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ChatUserList<T extends Tg_account$ChatUserListArgs<ExtArgs> = {}>(args?: Subset<T, Tg_account$ChatUserListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    warmingData<T extends Tg_account$warmingDataArgs<ExtArgs> = {}>(args?: Subset<T, Tg_account$warmingDataArgs<ExtArgs>>): Prisma__WarmingDataClient<$Result.GetResult<Prisma.$WarmingDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly sessionId: FieldRef<"Tg_account", 'Int'>
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
   * Tg_account.session
   */
  export type Tg_account$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
  }

  /**
   * Tg_account.ChatUserList
   */
  export type Tg_account$ChatUserListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserList
     */
    select?: ChatUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUserList
     */
    omit?: ChatUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserListInclude<ExtArgs> | null
    where?: ChatUserListWhereInput
    orderBy?: ChatUserListOrderByWithRelationInput | ChatUserListOrderByWithRelationInput[]
    cursor?: ChatUserListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatUserListScalarFieldEnum | ChatUserListScalarFieldEnum[]
  }

  /**
   * Tg_account.warmingData
   */
  export type Tg_account$warmingDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataInclude<ExtArgs> | null
    where?: WarmingDataWhereInput
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    sessionString: string | null
    apiId: string | null
    apiHash: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    sessionString: string | null
    apiId: string | null
    apiHash: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionString: number
    apiId: number
    apiHash: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    sessionString?: true
    apiId?: true
    apiHash?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionString?: true
    apiId?: true
    apiHash?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionString?: true
    apiId?: true
    apiHash?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    sessionString: string
    apiId: string
    apiHash: string
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionString?: boolean
    apiId?: boolean
    apiHash?: boolean
    Tg_account?: boolean | Session$Tg_accountArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionString?: boolean
    apiId?: boolean
    apiHash?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionString?: boolean
    apiId?: boolean
    apiHash?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionString?: boolean
    apiId?: boolean
    apiHash?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionString" | "apiId" | "apiHash", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tg_account?: boolean | Session$Tg_accountArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      Tg_account: Prisma.$Tg_accountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionString: string
      apiId: string
      apiHash: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tg_account<T extends Session$Tg_accountArgs<ExtArgs> = {}>(args?: Subset<T, Session$Tg_accountArgs<ExtArgs>>): Prisma__Tg_accountClient<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'Int'>
    readonly sessionString: FieldRef<"Session", 'String'>
    readonly apiId: FieldRef<"Session", 'String'>
    readonly apiHash: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.Tg_account
   */
  export type Session$Tg_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
   * Model ChatUserList
   */

  export type AggregateChatUserList = {
    _count: ChatUserListCountAggregateOutputType | null
    _avg: ChatUserListAvgAggregateOutputType | null
    _sum: ChatUserListSumAggregateOutputType | null
    _min: ChatUserListMinAggregateOutputType | null
    _max: ChatUserListMaxAggregateOutputType | null
  }

  export type ChatUserListAvgAggregateOutputType = {
    id: number | null
    tg_accountId: number | null
  }

  export type ChatUserListSumAggregateOutputType = {
    id: number | null
    tg_accountId: number | null
  }

  export type ChatUserListMinAggregateOutputType = {
    id: number | null
    name: string | null
    tg_accountId: number | null
  }

  export type ChatUserListMaxAggregateOutputType = {
    id: number | null
    name: string | null
    tg_accountId: number | null
  }

  export type ChatUserListCountAggregateOutputType = {
    id: number
    name: number
    tg_accountId: number
    _all: number
  }


  export type ChatUserListAvgAggregateInputType = {
    id?: true
    tg_accountId?: true
  }

  export type ChatUserListSumAggregateInputType = {
    id?: true
    tg_accountId?: true
  }

  export type ChatUserListMinAggregateInputType = {
    id?: true
    name?: true
    tg_accountId?: true
  }

  export type ChatUserListMaxAggregateInputType = {
    id?: true
    name?: true
    tg_accountId?: true
  }

  export type ChatUserListCountAggregateInputType = {
    id?: true
    name?: true
    tg_accountId?: true
    _all?: true
  }

  export type ChatUserListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatUserList to aggregate.
     */
    where?: ChatUserListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUserLists to fetch.
     */
    orderBy?: ChatUserListOrderByWithRelationInput | ChatUserListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatUserListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUserLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUserLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatUserLists
    **/
    _count?: true | ChatUserListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatUserListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatUserListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatUserListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatUserListMaxAggregateInputType
  }

  export type GetChatUserListAggregateType<T extends ChatUserListAggregateArgs> = {
        [P in keyof T & keyof AggregateChatUserList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatUserList[P]>
      : GetScalarType<T[P], AggregateChatUserList[P]>
  }




  export type ChatUserListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatUserListWhereInput
    orderBy?: ChatUserListOrderByWithAggregationInput | ChatUserListOrderByWithAggregationInput[]
    by: ChatUserListScalarFieldEnum[] | ChatUserListScalarFieldEnum
    having?: ChatUserListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatUserListCountAggregateInputType | true
    _avg?: ChatUserListAvgAggregateInputType
    _sum?: ChatUserListSumAggregateInputType
    _min?: ChatUserListMinAggregateInputType
    _max?: ChatUserListMaxAggregateInputType
  }

  export type ChatUserListGroupByOutputType = {
    id: number
    name: string
    tg_accountId: number
    _count: ChatUserListCountAggregateOutputType | null
    _avg: ChatUserListAvgAggregateOutputType | null
    _sum: ChatUserListSumAggregateOutputType | null
    _min: ChatUserListMinAggregateOutputType | null
    _max: ChatUserListMaxAggregateOutputType | null
  }

  type GetChatUserListGroupByPayload<T extends ChatUserListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatUserListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatUserListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatUserListGroupByOutputType[P]>
            : GetScalarType<T[P], ChatUserListGroupByOutputType[P]>
        }
      >
    >


  export type ChatUserListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tg_accountId?: boolean
    tg_account?: boolean | Tg_accountDefaultArgs<ExtArgs>
    users?: boolean | ChatUserList$usersArgs<ExtArgs>
    warmingData?: boolean | ChatUserList$warmingDataArgs<ExtArgs>
    _count?: boolean | ChatUserListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatUserList"]>

  export type ChatUserListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tg_accountId?: boolean
    tg_account?: boolean | Tg_accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatUserList"]>

  export type ChatUserListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tg_accountId?: boolean
    tg_account?: boolean | Tg_accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatUserList"]>

  export type ChatUserListSelectScalar = {
    id?: boolean
    name?: boolean
    tg_accountId?: boolean
  }

  export type ChatUserListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tg_accountId", ExtArgs["result"]["chatUserList"]>
  export type ChatUserListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tg_account?: boolean | Tg_accountDefaultArgs<ExtArgs>
    users?: boolean | ChatUserList$usersArgs<ExtArgs>
    warmingData?: boolean | ChatUserList$warmingDataArgs<ExtArgs>
    _count?: boolean | ChatUserListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatUserListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tg_account?: boolean | Tg_accountDefaultArgs<ExtArgs>
  }
  export type ChatUserListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tg_account?: boolean | Tg_accountDefaultArgs<ExtArgs>
  }

  export type $ChatUserListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatUserList"
    objects: {
      tg_account: Prisma.$Tg_accountPayload<ExtArgs>
      users: Prisma.$UserDataPayload<ExtArgs>[]
      warmingData: Prisma.$WarmingDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      tg_accountId: number
    }, ExtArgs["result"]["chatUserList"]>
    composites: {}
  }

  type ChatUserListGetPayload<S extends boolean | null | undefined | ChatUserListDefaultArgs> = $Result.GetResult<Prisma.$ChatUserListPayload, S>

  type ChatUserListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatUserListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatUserListCountAggregateInputType | true
    }

  export interface ChatUserListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatUserList'], meta: { name: 'ChatUserList' } }
    /**
     * Find zero or one ChatUserList that matches the filter.
     * @param {ChatUserListFindUniqueArgs} args - Arguments to find a ChatUserList
     * @example
     * // Get one ChatUserList
     * const chatUserList = await prisma.chatUserList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatUserListFindUniqueArgs>(args: SelectSubset<T, ChatUserListFindUniqueArgs<ExtArgs>>): Prisma__ChatUserListClient<$Result.GetResult<Prisma.$ChatUserListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatUserList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatUserListFindUniqueOrThrowArgs} args - Arguments to find a ChatUserList
     * @example
     * // Get one ChatUserList
     * const chatUserList = await prisma.chatUserList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatUserListFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatUserListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatUserListClient<$Result.GetResult<Prisma.$ChatUserListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatUserList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserListFindFirstArgs} args - Arguments to find a ChatUserList
     * @example
     * // Get one ChatUserList
     * const chatUserList = await prisma.chatUserList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatUserListFindFirstArgs>(args?: SelectSubset<T, ChatUserListFindFirstArgs<ExtArgs>>): Prisma__ChatUserListClient<$Result.GetResult<Prisma.$ChatUserListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatUserList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserListFindFirstOrThrowArgs} args - Arguments to find a ChatUserList
     * @example
     * // Get one ChatUserList
     * const chatUserList = await prisma.chatUserList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatUserListFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatUserListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatUserListClient<$Result.GetResult<Prisma.$ChatUserListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatUserLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatUserLists
     * const chatUserLists = await prisma.chatUserList.findMany()
     * 
     * // Get first 10 ChatUserLists
     * const chatUserLists = await prisma.chatUserList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatUserListWithIdOnly = await prisma.chatUserList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatUserListFindManyArgs>(args?: SelectSubset<T, ChatUserListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatUserList.
     * @param {ChatUserListCreateArgs} args - Arguments to create a ChatUserList.
     * @example
     * // Create one ChatUserList
     * const ChatUserList = await prisma.chatUserList.create({
     *   data: {
     *     // ... data to create a ChatUserList
     *   }
     * })
     * 
     */
    create<T extends ChatUserListCreateArgs>(args: SelectSubset<T, ChatUserListCreateArgs<ExtArgs>>): Prisma__ChatUserListClient<$Result.GetResult<Prisma.$ChatUserListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatUserLists.
     * @param {ChatUserListCreateManyArgs} args - Arguments to create many ChatUserLists.
     * @example
     * // Create many ChatUserLists
     * const chatUserList = await prisma.chatUserList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatUserListCreateManyArgs>(args?: SelectSubset<T, ChatUserListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatUserLists and returns the data saved in the database.
     * @param {ChatUserListCreateManyAndReturnArgs} args - Arguments to create many ChatUserLists.
     * @example
     * // Create many ChatUserLists
     * const chatUserList = await prisma.chatUserList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatUserLists and only return the `id`
     * const chatUserListWithIdOnly = await prisma.chatUserList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatUserListCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatUserListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatUserList.
     * @param {ChatUserListDeleteArgs} args - Arguments to delete one ChatUserList.
     * @example
     * // Delete one ChatUserList
     * const ChatUserList = await prisma.chatUserList.delete({
     *   where: {
     *     // ... filter to delete one ChatUserList
     *   }
     * })
     * 
     */
    delete<T extends ChatUserListDeleteArgs>(args: SelectSubset<T, ChatUserListDeleteArgs<ExtArgs>>): Prisma__ChatUserListClient<$Result.GetResult<Prisma.$ChatUserListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatUserList.
     * @param {ChatUserListUpdateArgs} args - Arguments to update one ChatUserList.
     * @example
     * // Update one ChatUserList
     * const chatUserList = await prisma.chatUserList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUserListUpdateArgs>(args: SelectSubset<T, ChatUserListUpdateArgs<ExtArgs>>): Prisma__ChatUserListClient<$Result.GetResult<Prisma.$ChatUserListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatUserLists.
     * @param {ChatUserListDeleteManyArgs} args - Arguments to filter ChatUserLists to delete.
     * @example
     * // Delete a few ChatUserLists
     * const { count } = await prisma.chatUserList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatUserListDeleteManyArgs>(args?: SelectSubset<T, ChatUserListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatUserLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatUserLists
     * const chatUserList = await prisma.chatUserList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUserListUpdateManyArgs>(args: SelectSubset<T, ChatUserListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatUserLists and returns the data updated in the database.
     * @param {ChatUserListUpdateManyAndReturnArgs} args - Arguments to update many ChatUserLists.
     * @example
     * // Update many ChatUserLists
     * const chatUserList = await prisma.chatUserList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatUserLists and only return the `id`
     * const chatUserListWithIdOnly = await prisma.chatUserList.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatUserListUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUserListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatUserList.
     * @param {ChatUserListUpsertArgs} args - Arguments to update or create a ChatUserList.
     * @example
     * // Update or create a ChatUserList
     * const chatUserList = await prisma.chatUserList.upsert({
     *   create: {
     *     // ... data to create a ChatUserList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatUserList we want to update
     *   }
     * })
     */
    upsert<T extends ChatUserListUpsertArgs>(args: SelectSubset<T, ChatUserListUpsertArgs<ExtArgs>>): Prisma__ChatUserListClient<$Result.GetResult<Prisma.$ChatUserListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatUserLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserListCountArgs} args - Arguments to filter ChatUserLists to count.
     * @example
     * // Count the number of ChatUserLists
     * const count = await prisma.chatUserList.count({
     *   where: {
     *     // ... the filter for the ChatUserLists we want to count
     *   }
     * })
    **/
    count<T extends ChatUserListCountArgs>(
      args?: Subset<T, ChatUserListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatUserListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatUserList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatUserListAggregateArgs>(args: Subset<T, ChatUserListAggregateArgs>): Prisma.PrismaPromise<GetChatUserListAggregateType<T>>

    /**
     * Group by ChatUserList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserListGroupByArgs} args - Group by arguments.
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
      T extends ChatUserListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatUserListGroupByArgs['orderBy'] }
        : { orderBy?: ChatUserListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatUserListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatUserListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatUserList model
   */
  readonly fields: ChatUserListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatUserList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatUserListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tg_account<T extends Tg_accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Tg_accountDefaultArgs<ExtArgs>>): Prisma__Tg_accountClient<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends ChatUserList$usersArgs<ExtArgs> = {}>(args?: Subset<T, ChatUserList$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    warmingData<T extends ChatUserList$warmingDataArgs<ExtArgs> = {}>(args?: Subset<T, ChatUserList$warmingDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarmingDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChatUserList model
   */
  interface ChatUserListFieldRefs {
    readonly id: FieldRef<"ChatUserList", 'Int'>
    readonly name: FieldRef<"ChatUserList", 'String'>
    readonly tg_accountId: FieldRef<"ChatUserList", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ChatUserList findUnique
   */
  export type ChatUserListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserList
     */
    select?: ChatUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUserList
     */
    omit?: ChatUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserListInclude<ExtArgs> | null
    /**
     * Filter, which ChatUserList to fetch.
     */
    where: ChatUserListWhereUniqueInput
  }

  /**
   * ChatUserList findUniqueOrThrow
   */
  export type ChatUserListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserList
     */
    select?: ChatUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUserList
     */
    omit?: ChatUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserListInclude<ExtArgs> | null
    /**
     * Filter, which ChatUserList to fetch.
     */
    where: ChatUserListWhereUniqueInput
  }

  /**
   * ChatUserList findFirst
   */
  export type ChatUserListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserList
     */
    select?: ChatUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUserList
     */
    omit?: ChatUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserListInclude<ExtArgs> | null
    /**
     * Filter, which ChatUserList to fetch.
     */
    where?: ChatUserListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUserLists to fetch.
     */
    orderBy?: ChatUserListOrderByWithRelationInput | ChatUserListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatUserLists.
     */
    cursor?: ChatUserListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUserLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUserLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatUserLists.
     */
    distinct?: ChatUserListScalarFieldEnum | ChatUserListScalarFieldEnum[]
  }

  /**
   * ChatUserList findFirstOrThrow
   */
  export type ChatUserListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserList
     */
    select?: ChatUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUserList
     */
    omit?: ChatUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserListInclude<ExtArgs> | null
    /**
     * Filter, which ChatUserList to fetch.
     */
    where?: ChatUserListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUserLists to fetch.
     */
    orderBy?: ChatUserListOrderByWithRelationInput | ChatUserListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatUserLists.
     */
    cursor?: ChatUserListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUserLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUserLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatUserLists.
     */
    distinct?: ChatUserListScalarFieldEnum | ChatUserListScalarFieldEnum[]
  }

  /**
   * ChatUserList findMany
   */
  export type ChatUserListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserList
     */
    select?: ChatUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUserList
     */
    omit?: ChatUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserListInclude<ExtArgs> | null
    /**
     * Filter, which ChatUserLists to fetch.
     */
    where?: ChatUserListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUserLists to fetch.
     */
    orderBy?: ChatUserListOrderByWithRelationInput | ChatUserListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatUserLists.
     */
    cursor?: ChatUserListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUserLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUserLists.
     */
    skip?: number
    distinct?: ChatUserListScalarFieldEnum | ChatUserListScalarFieldEnum[]
  }

  /**
   * ChatUserList create
   */
  export type ChatUserListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserList
     */
    select?: ChatUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUserList
     */
    omit?: ChatUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserListInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatUserList.
     */
    data: XOR<ChatUserListCreateInput, ChatUserListUncheckedCreateInput>
  }

  /**
   * ChatUserList createMany
   */
  export type ChatUserListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatUserLists.
     */
    data: ChatUserListCreateManyInput | ChatUserListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatUserList createManyAndReturn
   */
  export type ChatUserListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserList
     */
    select?: ChatUserListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUserList
     */
    omit?: ChatUserListOmit<ExtArgs> | null
    /**
     * The data used to create many ChatUserLists.
     */
    data: ChatUserListCreateManyInput | ChatUserListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatUserList update
   */
  export type ChatUserListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserList
     */
    select?: ChatUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUserList
     */
    omit?: ChatUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserListInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatUserList.
     */
    data: XOR<ChatUserListUpdateInput, ChatUserListUncheckedUpdateInput>
    /**
     * Choose, which ChatUserList to update.
     */
    where: ChatUserListWhereUniqueInput
  }

  /**
   * ChatUserList updateMany
   */
  export type ChatUserListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatUserLists.
     */
    data: XOR<ChatUserListUpdateManyMutationInput, ChatUserListUncheckedUpdateManyInput>
    /**
     * Filter which ChatUserLists to update
     */
    where?: ChatUserListWhereInput
    /**
     * Limit how many ChatUserLists to update.
     */
    limit?: number
  }

  /**
   * ChatUserList updateManyAndReturn
   */
  export type ChatUserListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserList
     */
    select?: ChatUserListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUserList
     */
    omit?: ChatUserListOmit<ExtArgs> | null
    /**
     * The data used to update ChatUserLists.
     */
    data: XOR<ChatUserListUpdateManyMutationInput, ChatUserListUncheckedUpdateManyInput>
    /**
     * Filter which ChatUserLists to update
     */
    where?: ChatUserListWhereInput
    /**
     * Limit how many ChatUserLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatUserList upsert
   */
  export type ChatUserListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserList
     */
    select?: ChatUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUserList
     */
    omit?: ChatUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserListInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatUserList to update in case it exists.
     */
    where: ChatUserListWhereUniqueInput
    /**
     * In case the ChatUserList found by the `where` argument doesn't exist, create a new ChatUserList with this data.
     */
    create: XOR<ChatUserListCreateInput, ChatUserListUncheckedCreateInput>
    /**
     * In case the ChatUserList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUserListUpdateInput, ChatUserListUncheckedUpdateInput>
  }

  /**
   * ChatUserList delete
   */
  export type ChatUserListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserList
     */
    select?: ChatUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUserList
     */
    omit?: ChatUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserListInclude<ExtArgs> | null
    /**
     * Filter which ChatUserList to delete.
     */
    where: ChatUserListWhereUniqueInput
  }

  /**
   * ChatUserList deleteMany
   */
  export type ChatUserListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatUserLists to delete
     */
    where?: ChatUserListWhereInput
    /**
     * Limit how many ChatUserLists to delete.
     */
    limit?: number
  }

  /**
   * ChatUserList.users
   */
  export type ChatUserList$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    where?: UserDataWhereInput
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    cursor?: UserDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDataScalarFieldEnum | UserDataScalarFieldEnum[]
  }

  /**
   * ChatUserList.warmingData
   */
  export type ChatUserList$warmingDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataInclude<ExtArgs> | null
    where?: WarmingDataWhereInput
    orderBy?: WarmingDataOrderByWithRelationInput | WarmingDataOrderByWithRelationInput[]
    cursor?: WarmingDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarmingDataScalarFieldEnum | WarmingDataScalarFieldEnum[]
  }

  /**
   * ChatUserList without action
   */
  export type ChatUserListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserList
     */
    select?: ChatUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUserList
     */
    omit?: ChatUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserListInclude<ExtArgs> | null
  }


  /**
   * Model UserData
   */

  export type AggregateUserData = {
    _count: UserDataCountAggregateOutputType | null
    _avg: UserDataAvgAggregateOutputType | null
    _sum: UserDataSumAggregateOutputType | null
    _min: UserDataMinAggregateOutputType | null
    _max: UserDataMaxAggregateOutputType | null
  }

  export type UserDataAvgAggregateOutputType = {
    id: number | null
    userListId: number | null
  }

  export type UserDataSumAggregateOutputType = {
    id: number | null
    userListId: number | null
  }

  export type UserDataMinAggregateOutputType = {
    id: number | null
    userListId: number | null
    username: string | null
    phone: string | null
  }

  export type UserDataMaxAggregateOutputType = {
    id: number | null
    userListId: number | null
    username: string | null
    phone: string | null
  }

  export type UserDataCountAggregateOutputType = {
    id: number
    userListId: number
    username: number
    phone: number
    _all: number
  }


  export type UserDataAvgAggregateInputType = {
    id?: true
    userListId?: true
  }

  export type UserDataSumAggregateInputType = {
    id?: true
    userListId?: true
  }

  export type UserDataMinAggregateInputType = {
    id?: true
    userListId?: true
    username?: true
    phone?: true
  }

  export type UserDataMaxAggregateInputType = {
    id?: true
    userListId?: true
    username?: true
    phone?: true
  }

  export type UserDataCountAggregateInputType = {
    id?: true
    userListId?: true
    username?: true
    phone?: true
    _all?: true
  }

  export type UserDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserData to aggregate.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserData
    **/
    _count?: true | UserDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDataMaxAggregateInputType
  }

  export type GetUserDataAggregateType<T extends UserDataAggregateArgs> = {
        [P in keyof T & keyof AggregateUserData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserData[P]>
      : GetScalarType<T[P], AggregateUserData[P]>
  }




  export type UserDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDataWhereInput
    orderBy?: UserDataOrderByWithAggregationInput | UserDataOrderByWithAggregationInput[]
    by: UserDataScalarFieldEnum[] | UserDataScalarFieldEnum
    having?: UserDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDataCountAggregateInputType | true
    _avg?: UserDataAvgAggregateInputType
    _sum?: UserDataSumAggregateInputType
    _min?: UserDataMinAggregateInputType
    _max?: UserDataMaxAggregateInputType
  }

  export type UserDataGroupByOutputType = {
    id: number
    userListId: number
    username: string | null
    phone: string | null
    _count: UserDataCountAggregateOutputType | null
    _avg: UserDataAvgAggregateOutputType | null
    _sum: UserDataSumAggregateOutputType | null
    _min: UserDataMinAggregateOutputType | null
    _max: UserDataMaxAggregateOutputType | null
  }

  type GetUserDataGroupByPayload<T extends UserDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDataGroupByOutputType[P]>
            : GetScalarType<T[P], UserDataGroupByOutputType[P]>
        }
      >
    >


  export type UserDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userListId?: boolean
    username?: boolean
    phone?: boolean
    userList?: boolean | ChatUserListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userData"]>

  export type UserDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userListId?: boolean
    username?: boolean
    phone?: boolean
    userList?: boolean | ChatUserListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userData"]>

  export type UserDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userListId?: boolean
    username?: boolean
    phone?: boolean
    userList?: boolean | ChatUserListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userData"]>

  export type UserDataSelectScalar = {
    id?: boolean
    userListId?: boolean
    username?: boolean
    phone?: boolean
  }

  export type UserDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userListId" | "username" | "phone", ExtArgs["result"]["userData"]>
  export type UserDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userList?: boolean | ChatUserListDefaultArgs<ExtArgs>
  }
  export type UserDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userList?: boolean | ChatUserListDefaultArgs<ExtArgs>
  }
  export type UserDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userList?: boolean | ChatUserListDefaultArgs<ExtArgs>
  }

  export type $UserDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserData"
    objects: {
      userList: Prisma.$ChatUserListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userListId: number
      username: string | null
      phone: string | null
    }, ExtArgs["result"]["userData"]>
    composites: {}
  }

  type UserDataGetPayload<S extends boolean | null | undefined | UserDataDefaultArgs> = $Result.GetResult<Prisma.$UserDataPayload, S>

  type UserDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDataCountAggregateInputType | true
    }

  export interface UserDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserData'], meta: { name: 'UserData' } }
    /**
     * Find zero or one UserData that matches the filter.
     * @param {UserDataFindUniqueArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDataFindUniqueArgs>(args: SelectSubset<T, UserDataFindUniqueArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDataFindUniqueOrThrowArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDataFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataFindFirstArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDataFindFirstArgs>(args?: SelectSubset<T, UserDataFindFirstArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataFindFirstOrThrowArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDataFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserData
     * const userData = await prisma.userData.findMany()
     * 
     * // Get first 10 UserData
     * const userData = await prisma.userData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDataWithIdOnly = await prisma.userData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDataFindManyArgs>(args?: SelectSubset<T, UserDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserData.
     * @param {UserDataCreateArgs} args - Arguments to create a UserData.
     * @example
     * // Create one UserData
     * const UserData = await prisma.userData.create({
     *   data: {
     *     // ... data to create a UserData
     *   }
     * })
     * 
     */
    create<T extends UserDataCreateArgs>(args: SelectSubset<T, UserDataCreateArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserData.
     * @param {UserDataCreateManyArgs} args - Arguments to create many UserData.
     * @example
     * // Create many UserData
     * const userData = await prisma.userData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDataCreateManyArgs>(args?: SelectSubset<T, UserDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserData and returns the data saved in the database.
     * @param {UserDataCreateManyAndReturnArgs} args - Arguments to create many UserData.
     * @example
     * // Create many UserData
     * const userData = await prisma.userData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserData and only return the `id`
     * const userDataWithIdOnly = await prisma.userData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDataCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserData.
     * @param {UserDataDeleteArgs} args - Arguments to delete one UserData.
     * @example
     * // Delete one UserData
     * const UserData = await prisma.userData.delete({
     *   where: {
     *     // ... filter to delete one UserData
     *   }
     * })
     * 
     */
    delete<T extends UserDataDeleteArgs>(args: SelectSubset<T, UserDataDeleteArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserData.
     * @param {UserDataUpdateArgs} args - Arguments to update one UserData.
     * @example
     * // Update one UserData
     * const userData = await prisma.userData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDataUpdateArgs>(args: SelectSubset<T, UserDataUpdateArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserData.
     * @param {UserDataDeleteManyArgs} args - Arguments to filter UserData to delete.
     * @example
     * // Delete a few UserData
     * const { count } = await prisma.userData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDataDeleteManyArgs>(args?: SelectSubset<T, UserDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserData
     * const userData = await prisma.userData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDataUpdateManyArgs>(args: SelectSubset<T, UserDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserData and returns the data updated in the database.
     * @param {UserDataUpdateManyAndReturnArgs} args - Arguments to update many UserData.
     * @example
     * // Update many UserData
     * const userData = await prisma.userData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserData and only return the `id`
     * const userDataWithIdOnly = await prisma.userData.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserDataUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserData.
     * @param {UserDataUpsertArgs} args - Arguments to update or create a UserData.
     * @example
     * // Update or create a UserData
     * const userData = await prisma.userData.upsert({
     *   create: {
     *     // ... data to create a UserData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserData we want to update
     *   }
     * })
     */
    upsert<T extends UserDataUpsertArgs>(args: SelectSubset<T, UserDataUpsertArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataCountArgs} args - Arguments to filter UserData to count.
     * @example
     * // Count the number of UserData
     * const count = await prisma.userData.count({
     *   where: {
     *     // ... the filter for the UserData we want to count
     *   }
     * })
    **/
    count<T extends UserDataCountArgs>(
      args?: Subset<T, UserDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDataAggregateArgs>(args: Subset<T, UserDataAggregateArgs>): Prisma.PrismaPromise<GetUserDataAggregateType<T>>

    /**
     * Group by UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataGroupByArgs} args - Group by arguments.
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
      T extends UserDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDataGroupByArgs['orderBy'] }
        : { orderBy?: UserDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserData model
   */
  readonly fields: UserDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userList<T extends ChatUserListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatUserListDefaultArgs<ExtArgs>>): Prisma__ChatUserListClient<$Result.GetResult<Prisma.$ChatUserListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserData model
   */
  interface UserDataFieldRefs {
    readonly id: FieldRef<"UserData", 'Int'>
    readonly userListId: FieldRef<"UserData", 'Int'>
    readonly username: FieldRef<"UserData", 'String'>
    readonly phone: FieldRef<"UserData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserData findUnique
   */
  export type UserDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData findUniqueOrThrow
   */
  export type UserDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData findFirst
   */
  export type UserDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserData.
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserData.
     */
    distinct?: UserDataScalarFieldEnum | UserDataScalarFieldEnum[]
  }

  /**
   * UserData findFirstOrThrow
   */
  export type UserDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserData.
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserData.
     */
    distinct?: UserDataScalarFieldEnum | UserDataScalarFieldEnum[]
  }

  /**
   * UserData findMany
   */
  export type UserDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserData.
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    distinct?: UserDataScalarFieldEnum | UserDataScalarFieldEnum[]
  }

  /**
   * UserData create
   */
  export type UserDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * The data needed to create a UserData.
     */
    data: XOR<UserDataCreateInput, UserDataUncheckedCreateInput>
  }

  /**
   * UserData createMany
   */
  export type UserDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserData.
     */
    data: UserDataCreateManyInput | UserDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserData createManyAndReturn
   */
  export type UserDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * The data used to create many UserData.
     */
    data: UserDataCreateManyInput | UserDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserData update
   */
  export type UserDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * The data needed to update a UserData.
     */
    data: XOR<UserDataUpdateInput, UserDataUncheckedUpdateInput>
    /**
     * Choose, which UserData to update.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData updateMany
   */
  export type UserDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserData.
     */
    data: XOR<UserDataUpdateManyMutationInput, UserDataUncheckedUpdateManyInput>
    /**
     * Filter which UserData to update
     */
    where?: UserDataWhereInput
    /**
     * Limit how many UserData to update.
     */
    limit?: number
  }

  /**
   * UserData updateManyAndReturn
   */
  export type UserDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * The data used to update UserData.
     */
    data: XOR<UserDataUpdateManyMutationInput, UserDataUncheckedUpdateManyInput>
    /**
     * Filter which UserData to update
     */
    where?: UserDataWhereInput
    /**
     * Limit how many UserData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserData upsert
   */
  export type UserDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * The filter to search for the UserData to update in case it exists.
     */
    where: UserDataWhereUniqueInput
    /**
     * In case the UserData found by the `where` argument doesn't exist, create a new UserData with this data.
     */
    create: XOR<UserDataCreateInput, UserDataUncheckedCreateInput>
    /**
     * In case the UserData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDataUpdateInput, UserDataUncheckedUpdateInput>
  }

  /**
   * UserData delete
   */
  export type UserDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter which UserData to delete.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData deleteMany
   */
  export type UserDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserData to delete
     */
    where?: UserDataWhereInput
    /**
     * Limit how many UserData to delete.
     */
    limit?: number
  }

  /**
   * UserData without action
   */
  export type UserDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
  }


  /**
   * Model WarmingData
   */

  export type AggregateWarmingData = {
    _count: WarmingDataCountAggregateOutputType | null
    _avg: WarmingDataAvgAggregateOutputType | null
    _sum: WarmingDataSumAggregateOutputType | null
    _min: WarmingDataMinAggregateOutputType | null
    _max: WarmingDataMaxAggregateOutputType | null
  }

  export type WarmingDataAvgAggregateOutputType = {
    id: number | null
    tg_accountId: number | null
    userListId: number | null
    fakeUserRoleId: number | null
    stepCounter: number | null
    messagesCounter: number | null
    answersCounter: number | null
    reactionsCounter: number | null
    commentsCounter: number | null
    messagesPerHour: number | null
    answersPerHour: number | null
    reactionsPerHour: number | null
    commentsPerHour: number | null
    startDelay: number | null
  }

  export type WarmingDataSumAggregateOutputType = {
    id: number | null
    tg_accountId: number | null
    userListId: number | null
    fakeUserRoleId: number | null
    stepCounter: number | null
    messagesCounter: number | null
    answersCounter: number | null
    reactionsCounter: number | null
    commentsCounter: number | null
    messagesPerHour: number | null
    answersPerHour: number | null
    reactionsPerHour: number | null
    commentsPerHour: number | null
    startDelay: number | null
  }

  export type WarmingDataMinAggregateOutputType = {
    id: number | null
    tg_accountId: number | null
    userListId: number | null
    fakeUserRoleId: number | null
    timeLastStep: Date | null
    timeStop: Date | null
    stepCounter: number | null
    messagesCounter: number | null
    answersCounter: number | null
    reactionsCounter: number | null
    commentsCounter: number | null
    messagesPerHour: number | null
    answersPerHour: number | null
    reactionsPerHour: number | null
    commentsPerHour: number | null
    startDelay: number | null
  }

  export type WarmingDataMaxAggregateOutputType = {
    id: number | null
    tg_accountId: number | null
    userListId: number | null
    fakeUserRoleId: number | null
    timeLastStep: Date | null
    timeStop: Date | null
    stepCounter: number | null
    messagesCounter: number | null
    answersCounter: number | null
    reactionsCounter: number | null
    commentsCounter: number | null
    messagesPerHour: number | null
    answersPerHour: number | null
    reactionsPerHour: number | null
    commentsPerHour: number | null
    startDelay: number | null
  }

  export type WarmingDataCountAggregateOutputType = {
    id: number
    tg_accountId: number
    userListId: number
    fakeUserRoleId: number
    timeLastStep: number
    timeStop: number
    stepCounter: number
    messagesCounter: number
    answersCounter: number
    reactionsCounter: number
    commentsCounter: number
    messagesPerHour: number
    answersPerHour: number
    reactionsPerHour: number
    commentsPerHour: number
    startDelay: number
    _all: number
  }


  export type WarmingDataAvgAggregateInputType = {
    id?: true
    tg_accountId?: true
    userListId?: true
    fakeUserRoleId?: true
    stepCounter?: true
    messagesCounter?: true
    answersCounter?: true
    reactionsCounter?: true
    commentsCounter?: true
    messagesPerHour?: true
    answersPerHour?: true
    reactionsPerHour?: true
    commentsPerHour?: true
    startDelay?: true
  }

  export type WarmingDataSumAggregateInputType = {
    id?: true
    tg_accountId?: true
    userListId?: true
    fakeUserRoleId?: true
    stepCounter?: true
    messagesCounter?: true
    answersCounter?: true
    reactionsCounter?: true
    commentsCounter?: true
    messagesPerHour?: true
    answersPerHour?: true
    reactionsPerHour?: true
    commentsPerHour?: true
    startDelay?: true
  }

  export type WarmingDataMinAggregateInputType = {
    id?: true
    tg_accountId?: true
    userListId?: true
    fakeUserRoleId?: true
    timeLastStep?: true
    timeStop?: true
    stepCounter?: true
    messagesCounter?: true
    answersCounter?: true
    reactionsCounter?: true
    commentsCounter?: true
    messagesPerHour?: true
    answersPerHour?: true
    reactionsPerHour?: true
    commentsPerHour?: true
    startDelay?: true
  }

  export type WarmingDataMaxAggregateInputType = {
    id?: true
    tg_accountId?: true
    userListId?: true
    fakeUserRoleId?: true
    timeLastStep?: true
    timeStop?: true
    stepCounter?: true
    messagesCounter?: true
    answersCounter?: true
    reactionsCounter?: true
    commentsCounter?: true
    messagesPerHour?: true
    answersPerHour?: true
    reactionsPerHour?: true
    commentsPerHour?: true
    startDelay?: true
  }

  export type WarmingDataCountAggregateInputType = {
    id?: true
    tg_accountId?: true
    userListId?: true
    fakeUserRoleId?: true
    timeLastStep?: true
    timeStop?: true
    stepCounter?: true
    messagesCounter?: true
    answersCounter?: true
    reactionsCounter?: true
    commentsCounter?: true
    messagesPerHour?: true
    answersPerHour?: true
    reactionsPerHour?: true
    commentsPerHour?: true
    startDelay?: true
    _all?: true
  }

  export type WarmingDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarmingData to aggregate.
     */
    where?: WarmingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarmingData to fetch.
     */
    orderBy?: WarmingDataOrderByWithRelationInput | WarmingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarmingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarmingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarmingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WarmingData
    **/
    _count?: true | WarmingDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarmingDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarmingDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarmingDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarmingDataMaxAggregateInputType
  }

  export type GetWarmingDataAggregateType<T extends WarmingDataAggregateArgs> = {
        [P in keyof T & keyof AggregateWarmingData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarmingData[P]>
      : GetScalarType<T[P], AggregateWarmingData[P]>
  }




  export type WarmingDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarmingDataWhereInput
    orderBy?: WarmingDataOrderByWithAggregationInput | WarmingDataOrderByWithAggregationInput[]
    by: WarmingDataScalarFieldEnum[] | WarmingDataScalarFieldEnum
    having?: WarmingDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarmingDataCountAggregateInputType | true
    _avg?: WarmingDataAvgAggregateInputType
    _sum?: WarmingDataSumAggregateInputType
    _min?: WarmingDataMinAggregateInputType
    _max?: WarmingDataMaxAggregateInputType
  }

  export type WarmingDataGroupByOutputType = {
    id: number
    tg_accountId: number
    userListId: number
    fakeUserRoleId: number
    timeLastStep: Date
    timeStop: Date
    stepCounter: number
    messagesCounter: number
    answersCounter: number
    reactionsCounter: number
    commentsCounter: number
    messagesPerHour: number
    answersPerHour: number
    reactionsPerHour: number
    commentsPerHour: number
    startDelay: number
    _count: WarmingDataCountAggregateOutputType | null
    _avg: WarmingDataAvgAggregateOutputType | null
    _sum: WarmingDataSumAggregateOutputType | null
    _min: WarmingDataMinAggregateOutputType | null
    _max: WarmingDataMaxAggregateOutputType | null
  }

  type GetWarmingDataGroupByPayload<T extends WarmingDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarmingDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarmingDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarmingDataGroupByOutputType[P]>
            : GetScalarType<T[P], WarmingDataGroupByOutputType[P]>
        }
      >
    >


  export type WarmingDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tg_accountId?: boolean
    userListId?: boolean
    fakeUserRoleId?: boolean
    timeLastStep?: boolean
    timeStop?: boolean
    stepCounter?: boolean
    messagesCounter?: boolean
    answersCounter?: boolean
    reactionsCounter?: boolean
    commentsCounter?: boolean
    messagesPerHour?: boolean
    answersPerHour?: boolean
    reactionsPerHour?: boolean
    commentsPerHour?: boolean
    startDelay?: boolean
    tg_account?: boolean | Tg_accountDefaultArgs<ExtArgs>
    userList?: boolean | ChatUserListDefaultArgs<ExtArgs>
    fakeUserRole?: boolean | FakeUserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warmingData"]>

  export type WarmingDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tg_accountId?: boolean
    userListId?: boolean
    fakeUserRoleId?: boolean
    timeLastStep?: boolean
    timeStop?: boolean
    stepCounter?: boolean
    messagesCounter?: boolean
    answersCounter?: boolean
    reactionsCounter?: boolean
    commentsCounter?: boolean
    messagesPerHour?: boolean
    answersPerHour?: boolean
    reactionsPerHour?: boolean
    commentsPerHour?: boolean
    startDelay?: boolean
    tg_account?: boolean | Tg_accountDefaultArgs<ExtArgs>
    userList?: boolean | ChatUserListDefaultArgs<ExtArgs>
    fakeUserRole?: boolean | FakeUserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warmingData"]>

  export type WarmingDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tg_accountId?: boolean
    userListId?: boolean
    fakeUserRoleId?: boolean
    timeLastStep?: boolean
    timeStop?: boolean
    stepCounter?: boolean
    messagesCounter?: boolean
    answersCounter?: boolean
    reactionsCounter?: boolean
    commentsCounter?: boolean
    messagesPerHour?: boolean
    answersPerHour?: boolean
    reactionsPerHour?: boolean
    commentsPerHour?: boolean
    startDelay?: boolean
    tg_account?: boolean | Tg_accountDefaultArgs<ExtArgs>
    userList?: boolean | ChatUserListDefaultArgs<ExtArgs>
    fakeUserRole?: boolean | FakeUserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warmingData"]>

  export type WarmingDataSelectScalar = {
    id?: boolean
    tg_accountId?: boolean
    userListId?: boolean
    fakeUserRoleId?: boolean
    timeLastStep?: boolean
    timeStop?: boolean
    stepCounter?: boolean
    messagesCounter?: boolean
    answersCounter?: boolean
    reactionsCounter?: boolean
    commentsCounter?: boolean
    messagesPerHour?: boolean
    answersPerHour?: boolean
    reactionsPerHour?: boolean
    commentsPerHour?: boolean
    startDelay?: boolean
  }

  export type WarmingDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tg_accountId" | "userListId" | "fakeUserRoleId" | "timeLastStep" | "timeStop" | "stepCounter" | "messagesCounter" | "answersCounter" | "reactionsCounter" | "commentsCounter" | "messagesPerHour" | "answersPerHour" | "reactionsPerHour" | "commentsPerHour" | "startDelay", ExtArgs["result"]["warmingData"]>
  export type WarmingDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tg_account?: boolean | Tg_accountDefaultArgs<ExtArgs>
    userList?: boolean | ChatUserListDefaultArgs<ExtArgs>
    fakeUserRole?: boolean | FakeUserRoleDefaultArgs<ExtArgs>
  }
  export type WarmingDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tg_account?: boolean | Tg_accountDefaultArgs<ExtArgs>
    userList?: boolean | ChatUserListDefaultArgs<ExtArgs>
    fakeUserRole?: boolean | FakeUserRoleDefaultArgs<ExtArgs>
  }
  export type WarmingDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tg_account?: boolean | Tg_accountDefaultArgs<ExtArgs>
    userList?: boolean | ChatUserListDefaultArgs<ExtArgs>
    fakeUserRole?: boolean | FakeUserRoleDefaultArgs<ExtArgs>
  }

  export type $WarmingDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WarmingData"
    objects: {
      tg_account: Prisma.$Tg_accountPayload<ExtArgs>
      userList: Prisma.$ChatUserListPayload<ExtArgs>
      fakeUserRole: Prisma.$FakeUserRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tg_accountId: number
      userListId: number
      fakeUserRoleId: number
      timeLastStep: Date
      timeStop: Date
      stepCounter: number
      messagesCounter: number
      answersCounter: number
      reactionsCounter: number
      commentsCounter: number
      messagesPerHour: number
      answersPerHour: number
      reactionsPerHour: number
      commentsPerHour: number
      startDelay: number
    }, ExtArgs["result"]["warmingData"]>
    composites: {}
  }

  type WarmingDataGetPayload<S extends boolean | null | undefined | WarmingDataDefaultArgs> = $Result.GetResult<Prisma.$WarmingDataPayload, S>

  type WarmingDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarmingDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarmingDataCountAggregateInputType | true
    }

  export interface WarmingDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WarmingData'], meta: { name: 'WarmingData' } }
    /**
     * Find zero or one WarmingData that matches the filter.
     * @param {WarmingDataFindUniqueArgs} args - Arguments to find a WarmingData
     * @example
     * // Get one WarmingData
     * const warmingData = await prisma.warmingData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarmingDataFindUniqueArgs>(args: SelectSubset<T, WarmingDataFindUniqueArgs<ExtArgs>>): Prisma__WarmingDataClient<$Result.GetResult<Prisma.$WarmingDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WarmingData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarmingDataFindUniqueOrThrowArgs} args - Arguments to find a WarmingData
     * @example
     * // Get one WarmingData
     * const warmingData = await prisma.warmingData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarmingDataFindUniqueOrThrowArgs>(args: SelectSubset<T, WarmingDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarmingDataClient<$Result.GetResult<Prisma.$WarmingDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WarmingData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarmingDataFindFirstArgs} args - Arguments to find a WarmingData
     * @example
     * // Get one WarmingData
     * const warmingData = await prisma.warmingData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarmingDataFindFirstArgs>(args?: SelectSubset<T, WarmingDataFindFirstArgs<ExtArgs>>): Prisma__WarmingDataClient<$Result.GetResult<Prisma.$WarmingDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WarmingData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarmingDataFindFirstOrThrowArgs} args - Arguments to find a WarmingData
     * @example
     * // Get one WarmingData
     * const warmingData = await prisma.warmingData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarmingDataFindFirstOrThrowArgs>(args?: SelectSubset<T, WarmingDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarmingDataClient<$Result.GetResult<Prisma.$WarmingDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WarmingData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarmingDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WarmingData
     * const warmingData = await prisma.warmingData.findMany()
     * 
     * // Get first 10 WarmingData
     * const warmingData = await prisma.warmingData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warmingDataWithIdOnly = await prisma.warmingData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarmingDataFindManyArgs>(args?: SelectSubset<T, WarmingDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarmingDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WarmingData.
     * @param {WarmingDataCreateArgs} args - Arguments to create a WarmingData.
     * @example
     * // Create one WarmingData
     * const WarmingData = await prisma.warmingData.create({
     *   data: {
     *     // ... data to create a WarmingData
     *   }
     * })
     * 
     */
    create<T extends WarmingDataCreateArgs>(args: SelectSubset<T, WarmingDataCreateArgs<ExtArgs>>): Prisma__WarmingDataClient<$Result.GetResult<Prisma.$WarmingDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WarmingData.
     * @param {WarmingDataCreateManyArgs} args - Arguments to create many WarmingData.
     * @example
     * // Create many WarmingData
     * const warmingData = await prisma.warmingData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarmingDataCreateManyArgs>(args?: SelectSubset<T, WarmingDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WarmingData and returns the data saved in the database.
     * @param {WarmingDataCreateManyAndReturnArgs} args - Arguments to create many WarmingData.
     * @example
     * // Create many WarmingData
     * const warmingData = await prisma.warmingData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WarmingData and only return the `id`
     * const warmingDataWithIdOnly = await prisma.warmingData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarmingDataCreateManyAndReturnArgs>(args?: SelectSubset<T, WarmingDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarmingDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WarmingData.
     * @param {WarmingDataDeleteArgs} args - Arguments to delete one WarmingData.
     * @example
     * // Delete one WarmingData
     * const WarmingData = await prisma.warmingData.delete({
     *   where: {
     *     // ... filter to delete one WarmingData
     *   }
     * })
     * 
     */
    delete<T extends WarmingDataDeleteArgs>(args: SelectSubset<T, WarmingDataDeleteArgs<ExtArgs>>): Prisma__WarmingDataClient<$Result.GetResult<Prisma.$WarmingDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WarmingData.
     * @param {WarmingDataUpdateArgs} args - Arguments to update one WarmingData.
     * @example
     * // Update one WarmingData
     * const warmingData = await prisma.warmingData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarmingDataUpdateArgs>(args: SelectSubset<T, WarmingDataUpdateArgs<ExtArgs>>): Prisma__WarmingDataClient<$Result.GetResult<Prisma.$WarmingDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WarmingData.
     * @param {WarmingDataDeleteManyArgs} args - Arguments to filter WarmingData to delete.
     * @example
     * // Delete a few WarmingData
     * const { count } = await prisma.warmingData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarmingDataDeleteManyArgs>(args?: SelectSubset<T, WarmingDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WarmingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarmingDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WarmingData
     * const warmingData = await prisma.warmingData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarmingDataUpdateManyArgs>(args: SelectSubset<T, WarmingDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WarmingData and returns the data updated in the database.
     * @param {WarmingDataUpdateManyAndReturnArgs} args - Arguments to update many WarmingData.
     * @example
     * // Update many WarmingData
     * const warmingData = await prisma.warmingData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WarmingData and only return the `id`
     * const warmingDataWithIdOnly = await prisma.warmingData.updateManyAndReturn({
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
    updateManyAndReturn<T extends WarmingDataUpdateManyAndReturnArgs>(args: SelectSubset<T, WarmingDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarmingDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WarmingData.
     * @param {WarmingDataUpsertArgs} args - Arguments to update or create a WarmingData.
     * @example
     * // Update or create a WarmingData
     * const warmingData = await prisma.warmingData.upsert({
     *   create: {
     *     // ... data to create a WarmingData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WarmingData we want to update
     *   }
     * })
     */
    upsert<T extends WarmingDataUpsertArgs>(args: SelectSubset<T, WarmingDataUpsertArgs<ExtArgs>>): Prisma__WarmingDataClient<$Result.GetResult<Prisma.$WarmingDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WarmingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarmingDataCountArgs} args - Arguments to filter WarmingData to count.
     * @example
     * // Count the number of WarmingData
     * const count = await prisma.warmingData.count({
     *   where: {
     *     // ... the filter for the WarmingData we want to count
     *   }
     * })
    **/
    count<T extends WarmingDataCountArgs>(
      args?: Subset<T, WarmingDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarmingDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WarmingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarmingDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarmingDataAggregateArgs>(args: Subset<T, WarmingDataAggregateArgs>): Prisma.PrismaPromise<GetWarmingDataAggregateType<T>>

    /**
     * Group by WarmingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarmingDataGroupByArgs} args - Group by arguments.
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
      T extends WarmingDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarmingDataGroupByArgs['orderBy'] }
        : { orderBy?: WarmingDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarmingDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarmingDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WarmingData model
   */
  readonly fields: WarmingDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WarmingData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarmingDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tg_account<T extends Tg_accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Tg_accountDefaultArgs<ExtArgs>>): Prisma__Tg_accountClient<$Result.GetResult<Prisma.$Tg_accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userList<T extends ChatUserListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatUserListDefaultArgs<ExtArgs>>): Prisma__ChatUserListClient<$Result.GetResult<Prisma.$ChatUserListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fakeUserRole<T extends FakeUserRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FakeUserRoleDefaultArgs<ExtArgs>>): Prisma__FakeUserRoleClient<$Result.GetResult<Prisma.$FakeUserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WarmingData model
   */
  interface WarmingDataFieldRefs {
    readonly id: FieldRef<"WarmingData", 'Int'>
    readonly tg_accountId: FieldRef<"WarmingData", 'Int'>
    readonly userListId: FieldRef<"WarmingData", 'Int'>
    readonly fakeUserRoleId: FieldRef<"WarmingData", 'Int'>
    readonly timeLastStep: FieldRef<"WarmingData", 'DateTime'>
    readonly timeStop: FieldRef<"WarmingData", 'DateTime'>
    readonly stepCounter: FieldRef<"WarmingData", 'Int'>
    readonly messagesCounter: FieldRef<"WarmingData", 'Int'>
    readonly answersCounter: FieldRef<"WarmingData", 'Int'>
    readonly reactionsCounter: FieldRef<"WarmingData", 'Int'>
    readonly commentsCounter: FieldRef<"WarmingData", 'Int'>
    readonly messagesPerHour: FieldRef<"WarmingData", 'Int'>
    readonly answersPerHour: FieldRef<"WarmingData", 'Int'>
    readonly reactionsPerHour: FieldRef<"WarmingData", 'Int'>
    readonly commentsPerHour: FieldRef<"WarmingData", 'Int'>
    readonly startDelay: FieldRef<"WarmingData", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WarmingData findUnique
   */
  export type WarmingDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataInclude<ExtArgs> | null
    /**
     * Filter, which WarmingData to fetch.
     */
    where: WarmingDataWhereUniqueInput
  }

  /**
   * WarmingData findUniqueOrThrow
   */
  export type WarmingDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataInclude<ExtArgs> | null
    /**
     * Filter, which WarmingData to fetch.
     */
    where: WarmingDataWhereUniqueInput
  }

  /**
   * WarmingData findFirst
   */
  export type WarmingDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataInclude<ExtArgs> | null
    /**
     * Filter, which WarmingData to fetch.
     */
    where?: WarmingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarmingData to fetch.
     */
    orderBy?: WarmingDataOrderByWithRelationInput | WarmingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarmingData.
     */
    cursor?: WarmingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarmingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarmingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarmingData.
     */
    distinct?: WarmingDataScalarFieldEnum | WarmingDataScalarFieldEnum[]
  }

  /**
   * WarmingData findFirstOrThrow
   */
  export type WarmingDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataInclude<ExtArgs> | null
    /**
     * Filter, which WarmingData to fetch.
     */
    where?: WarmingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarmingData to fetch.
     */
    orderBy?: WarmingDataOrderByWithRelationInput | WarmingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarmingData.
     */
    cursor?: WarmingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarmingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarmingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarmingData.
     */
    distinct?: WarmingDataScalarFieldEnum | WarmingDataScalarFieldEnum[]
  }

  /**
   * WarmingData findMany
   */
  export type WarmingDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataInclude<ExtArgs> | null
    /**
     * Filter, which WarmingData to fetch.
     */
    where?: WarmingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarmingData to fetch.
     */
    orderBy?: WarmingDataOrderByWithRelationInput | WarmingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WarmingData.
     */
    cursor?: WarmingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarmingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarmingData.
     */
    skip?: number
    distinct?: WarmingDataScalarFieldEnum | WarmingDataScalarFieldEnum[]
  }

  /**
   * WarmingData create
   */
  export type WarmingDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataInclude<ExtArgs> | null
    /**
     * The data needed to create a WarmingData.
     */
    data: XOR<WarmingDataCreateInput, WarmingDataUncheckedCreateInput>
  }

  /**
   * WarmingData createMany
   */
  export type WarmingDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WarmingData.
     */
    data: WarmingDataCreateManyInput | WarmingDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WarmingData createManyAndReturn
   */
  export type WarmingDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * The data used to create many WarmingData.
     */
    data: WarmingDataCreateManyInput | WarmingDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WarmingData update
   */
  export type WarmingDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataInclude<ExtArgs> | null
    /**
     * The data needed to update a WarmingData.
     */
    data: XOR<WarmingDataUpdateInput, WarmingDataUncheckedUpdateInput>
    /**
     * Choose, which WarmingData to update.
     */
    where: WarmingDataWhereUniqueInput
  }

  /**
   * WarmingData updateMany
   */
  export type WarmingDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WarmingData.
     */
    data: XOR<WarmingDataUpdateManyMutationInput, WarmingDataUncheckedUpdateManyInput>
    /**
     * Filter which WarmingData to update
     */
    where?: WarmingDataWhereInput
    /**
     * Limit how many WarmingData to update.
     */
    limit?: number
  }

  /**
   * WarmingData updateManyAndReturn
   */
  export type WarmingDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * The data used to update WarmingData.
     */
    data: XOR<WarmingDataUpdateManyMutationInput, WarmingDataUncheckedUpdateManyInput>
    /**
     * Filter which WarmingData to update
     */
    where?: WarmingDataWhereInput
    /**
     * Limit how many WarmingData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WarmingData upsert
   */
  export type WarmingDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataInclude<ExtArgs> | null
    /**
     * The filter to search for the WarmingData to update in case it exists.
     */
    where: WarmingDataWhereUniqueInput
    /**
     * In case the WarmingData found by the `where` argument doesn't exist, create a new WarmingData with this data.
     */
    create: XOR<WarmingDataCreateInput, WarmingDataUncheckedCreateInput>
    /**
     * In case the WarmingData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarmingDataUpdateInput, WarmingDataUncheckedUpdateInput>
  }

  /**
   * WarmingData delete
   */
  export type WarmingDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataInclude<ExtArgs> | null
    /**
     * Filter which WarmingData to delete.
     */
    where: WarmingDataWhereUniqueInput
  }

  /**
   * WarmingData deleteMany
   */
  export type WarmingDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarmingData to delete
     */
    where?: WarmingDataWhereInput
    /**
     * Limit how many WarmingData to delete.
     */
    limit?: number
  }

  /**
   * WarmingData without action
   */
  export type WarmingDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataInclude<ExtArgs> | null
  }


  /**
   * Model FakeUserRole
   */

  export type AggregateFakeUserRole = {
    _count: FakeUserRoleCountAggregateOutputType | null
    _avg: FakeUserRoleAvgAggregateOutputType | null
    _sum: FakeUserRoleSumAggregateOutputType | null
    _min: FakeUserRoleMinAggregateOutputType | null
    _max: FakeUserRoleMaxAggregateOutputType | null
  }

  export type FakeUserRoleAvgAggregateOutputType = {
    id: number | null
  }

  export type FakeUserRoleSumAggregateOutputType = {
    id: number | null
  }

  export type FakeUserRoleMinAggregateOutputType = {
    id: number | null
    role: string | null
    description: string | null
  }

  export type FakeUserRoleMaxAggregateOutputType = {
    id: number | null
    role: string | null
    description: string | null
  }

  export type FakeUserRoleCountAggregateOutputType = {
    id: number
    role: number
    description: number
    _all: number
  }


  export type FakeUserRoleAvgAggregateInputType = {
    id?: true
  }

  export type FakeUserRoleSumAggregateInputType = {
    id?: true
  }

  export type FakeUserRoleMinAggregateInputType = {
    id?: true
    role?: true
    description?: true
  }

  export type FakeUserRoleMaxAggregateInputType = {
    id?: true
    role?: true
    description?: true
  }

  export type FakeUserRoleCountAggregateInputType = {
    id?: true
    role?: true
    description?: true
    _all?: true
  }

  export type FakeUserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FakeUserRole to aggregate.
     */
    where?: FakeUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FakeUserRoles to fetch.
     */
    orderBy?: FakeUserRoleOrderByWithRelationInput | FakeUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FakeUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FakeUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FakeUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FakeUserRoles
    **/
    _count?: true | FakeUserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FakeUserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FakeUserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FakeUserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FakeUserRoleMaxAggregateInputType
  }

  export type GetFakeUserRoleAggregateType<T extends FakeUserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateFakeUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFakeUserRole[P]>
      : GetScalarType<T[P], AggregateFakeUserRole[P]>
  }




  export type FakeUserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FakeUserRoleWhereInput
    orderBy?: FakeUserRoleOrderByWithAggregationInput | FakeUserRoleOrderByWithAggregationInput[]
    by: FakeUserRoleScalarFieldEnum[] | FakeUserRoleScalarFieldEnum
    having?: FakeUserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FakeUserRoleCountAggregateInputType | true
    _avg?: FakeUserRoleAvgAggregateInputType
    _sum?: FakeUserRoleSumAggregateInputType
    _min?: FakeUserRoleMinAggregateInputType
    _max?: FakeUserRoleMaxAggregateInputType
  }

  export type FakeUserRoleGroupByOutputType = {
    id: number
    role: string
    description: string
    _count: FakeUserRoleCountAggregateOutputType | null
    _avg: FakeUserRoleAvgAggregateOutputType | null
    _sum: FakeUserRoleSumAggregateOutputType | null
    _min: FakeUserRoleMinAggregateOutputType | null
    _max: FakeUserRoleMaxAggregateOutputType | null
  }

  type GetFakeUserRoleGroupByPayload<T extends FakeUserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FakeUserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FakeUserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FakeUserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], FakeUserRoleGroupByOutputType[P]>
        }
      >
    >


  export type FakeUserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    description?: boolean
    warmingData?: boolean | FakeUserRole$warmingDataArgs<ExtArgs>
    _count?: boolean | FakeUserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fakeUserRole"]>

  export type FakeUserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    description?: boolean
  }, ExtArgs["result"]["fakeUserRole"]>

  export type FakeUserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    description?: boolean
  }, ExtArgs["result"]["fakeUserRole"]>

  export type FakeUserRoleSelectScalar = {
    id?: boolean
    role?: boolean
    description?: boolean
  }

  export type FakeUserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "description", ExtArgs["result"]["fakeUserRole"]>
  export type FakeUserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warmingData?: boolean | FakeUserRole$warmingDataArgs<ExtArgs>
    _count?: boolean | FakeUserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FakeUserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FakeUserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FakeUserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FakeUserRole"
    objects: {
      warmingData: Prisma.$WarmingDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: string
      description: string
    }, ExtArgs["result"]["fakeUserRole"]>
    composites: {}
  }

  type FakeUserRoleGetPayload<S extends boolean | null | undefined | FakeUserRoleDefaultArgs> = $Result.GetResult<Prisma.$FakeUserRolePayload, S>

  type FakeUserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FakeUserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FakeUserRoleCountAggregateInputType | true
    }

  export interface FakeUserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FakeUserRole'], meta: { name: 'FakeUserRole' } }
    /**
     * Find zero or one FakeUserRole that matches the filter.
     * @param {FakeUserRoleFindUniqueArgs} args - Arguments to find a FakeUserRole
     * @example
     * // Get one FakeUserRole
     * const fakeUserRole = await prisma.fakeUserRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FakeUserRoleFindUniqueArgs>(args: SelectSubset<T, FakeUserRoleFindUniqueArgs<ExtArgs>>): Prisma__FakeUserRoleClient<$Result.GetResult<Prisma.$FakeUserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FakeUserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FakeUserRoleFindUniqueOrThrowArgs} args - Arguments to find a FakeUserRole
     * @example
     * // Get one FakeUserRole
     * const fakeUserRole = await prisma.fakeUserRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FakeUserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, FakeUserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FakeUserRoleClient<$Result.GetResult<Prisma.$FakeUserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FakeUserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FakeUserRoleFindFirstArgs} args - Arguments to find a FakeUserRole
     * @example
     * // Get one FakeUserRole
     * const fakeUserRole = await prisma.fakeUserRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FakeUserRoleFindFirstArgs>(args?: SelectSubset<T, FakeUserRoleFindFirstArgs<ExtArgs>>): Prisma__FakeUserRoleClient<$Result.GetResult<Prisma.$FakeUserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FakeUserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FakeUserRoleFindFirstOrThrowArgs} args - Arguments to find a FakeUserRole
     * @example
     * // Get one FakeUserRole
     * const fakeUserRole = await prisma.fakeUserRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FakeUserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, FakeUserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__FakeUserRoleClient<$Result.GetResult<Prisma.$FakeUserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FakeUserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FakeUserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FakeUserRoles
     * const fakeUserRoles = await prisma.fakeUserRole.findMany()
     * 
     * // Get first 10 FakeUserRoles
     * const fakeUserRoles = await prisma.fakeUserRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fakeUserRoleWithIdOnly = await prisma.fakeUserRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FakeUserRoleFindManyArgs>(args?: SelectSubset<T, FakeUserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FakeUserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FakeUserRole.
     * @param {FakeUserRoleCreateArgs} args - Arguments to create a FakeUserRole.
     * @example
     * // Create one FakeUserRole
     * const FakeUserRole = await prisma.fakeUserRole.create({
     *   data: {
     *     // ... data to create a FakeUserRole
     *   }
     * })
     * 
     */
    create<T extends FakeUserRoleCreateArgs>(args: SelectSubset<T, FakeUserRoleCreateArgs<ExtArgs>>): Prisma__FakeUserRoleClient<$Result.GetResult<Prisma.$FakeUserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FakeUserRoles.
     * @param {FakeUserRoleCreateManyArgs} args - Arguments to create many FakeUserRoles.
     * @example
     * // Create many FakeUserRoles
     * const fakeUserRole = await prisma.fakeUserRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FakeUserRoleCreateManyArgs>(args?: SelectSubset<T, FakeUserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FakeUserRoles and returns the data saved in the database.
     * @param {FakeUserRoleCreateManyAndReturnArgs} args - Arguments to create many FakeUserRoles.
     * @example
     * // Create many FakeUserRoles
     * const fakeUserRole = await prisma.fakeUserRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FakeUserRoles and only return the `id`
     * const fakeUserRoleWithIdOnly = await prisma.fakeUserRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FakeUserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, FakeUserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FakeUserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FakeUserRole.
     * @param {FakeUserRoleDeleteArgs} args - Arguments to delete one FakeUserRole.
     * @example
     * // Delete one FakeUserRole
     * const FakeUserRole = await prisma.fakeUserRole.delete({
     *   where: {
     *     // ... filter to delete one FakeUserRole
     *   }
     * })
     * 
     */
    delete<T extends FakeUserRoleDeleteArgs>(args: SelectSubset<T, FakeUserRoleDeleteArgs<ExtArgs>>): Prisma__FakeUserRoleClient<$Result.GetResult<Prisma.$FakeUserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FakeUserRole.
     * @param {FakeUserRoleUpdateArgs} args - Arguments to update one FakeUserRole.
     * @example
     * // Update one FakeUserRole
     * const fakeUserRole = await prisma.fakeUserRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FakeUserRoleUpdateArgs>(args: SelectSubset<T, FakeUserRoleUpdateArgs<ExtArgs>>): Prisma__FakeUserRoleClient<$Result.GetResult<Prisma.$FakeUserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FakeUserRoles.
     * @param {FakeUserRoleDeleteManyArgs} args - Arguments to filter FakeUserRoles to delete.
     * @example
     * // Delete a few FakeUserRoles
     * const { count } = await prisma.fakeUserRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FakeUserRoleDeleteManyArgs>(args?: SelectSubset<T, FakeUserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FakeUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FakeUserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FakeUserRoles
     * const fakeUserRole = await prisma.fakeUserRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FakeUserRoleUpdateManyArgs>(args: SelectSubset<T, FakeUserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FakeUserRoles and returns the data updated in the database.
     * @param {FakeUserRoleUpdateManyAndReturnArgs} args - Arguments to update many FakeUserRoles.
     * @example
     * // Update many FakeUserRoles
     * const fakeUserRole = await prisma.fakeUserRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FakeUserRoles and only return the `id`
     * const fakeUserRoleWithIdOnly = await prisma.fakeUserRole.updateManyAndReturn({
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
    updateManyAndReturn<T extends FakeUserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, FakeUserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FakeUserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FakeUserRole.
     * @param {FakeUserRoleUpsertArgs} args - Arguments to update or create a FakeUserRole.
     * @example
     * // Update or create a FakeUserRole
     * const fakeUserRole = await prisma.fakeUserRole.upsert({
     *   create: {
     *     // ... data to create a FakeUserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FakeUserRole we want to update
     *   }
     * })
     */
    upsert<T extends FakeUserRoleUpsertArgs>(args: SelectSubset<T, FakeUserRoleUpsertArgs<ExtArgs>>): Prisma__FakeUserRoleClient<$Result.GetResult<Prisma.$FakeUserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FakeUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FakeUserRoleCountArgs} args - Arguments to filter FakeUserRoles to count.
     * @example
     * // Count the number of FakeUserRoles
     * const count = await prisma.fakeUserRole.count({
     *   where: {
     *     // ... the filter for the FakeUserRoles we want to count
     *   }
     * })
    **/
    count<T extends FakeUserRoleCountArgs>(
      args?: Subset<T, FakeUserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FakeUserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FakeUserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FakeUserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FakeUserRoleAggregateArgs>(args: Subset<T, FakeUserRoleAggregateArgs>): Prisma.PrismaPromise<GetFakeUserRoleAggregateType<T>>

    /**
     * Group by FakeUserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FakeUserRoleGroupByArgs} args - Group by arguments.
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
      T extends FakeUserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FakeUserRoleGroupByArgs['orderBy'] }
        : { orderBy?: FakeUserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FakeUserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFakeUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FakeUserRole model
   */
  readonly fields: FakeUserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FakeUserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FakeUserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warmingData<T extends FakeUserRole$warmingDataArgs<ExtArgs> = {}>(args?: Subset<T, FakeUserRole$warmingDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarmingDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FakeUserRole model
   */
  interface FakeUserRoleFieldRefs {
    readonly id: FieldRef<"FakeUserRole", 'Int'>
    readonly role: FieldRef<"FakeUserRole", 'String'>
    readonly description: FieldRef<"FakeUserRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FakeUserRole findUnique
   */
  export type FakeUserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FakeUserRole
     */
    select?: FakeUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FakeUserRole
     */
    omit?: FakeUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FakeUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which FakeUserRole to fetch.
     */
    where: FakeUserRoleWhereUniqueInput
  }

  /**
   * FakeUserRole findUniqueOrThrow
   */
  export type FakeUserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FakeUserRole
     */
    select?: FakeUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FakeUserRole
     */
    omit?: FakeUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FakeUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which FakeUserRole to fetch.
     */
    where: FakeUserRoleWhereUniqueInput
  }

  /**
   * FakeUserRole findFirst
   */
  export type FakeUserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FakeUserRole
     */
    select?: FakeUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FakeUserRole
     */
    omit?: FakeUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FakeUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which FakeUserRole to fetch.
     */
    where?: FakeUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FakeUserRoles to fetch.
     */
    orderBy?: FakeUserRoleOrderByWithRelationInput | FakeUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FakeUserRoles.
     */
    cursor?: FakeUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FakeUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FakeUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FakeUserRoles.
     */
    distinct?: FakeUserRoleScalarFieldEnum | FakeUserRoleScalarFieldEnum[]
  }

  /**
   * FakeUserRole findFirstOrThrow
   */
  export type FakeUserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FakeUserRole
     */
    select?: FakeUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FakeUserRole
     */
    omit?: FakeUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FakeUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which FakeUserRole to fetch.
     */
    where?: FakeUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FakeUserRoles to fetch.
     */
    orderBy?: FakeUserRoleOrderByWithRelationInput | FakeUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FakeUserRoles.
     */
    cursor?: FakeUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FakeUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FakeUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FakeUserRoles.
     */
    distinct?: FakeUserRoleScalarFieldEnum | FakeUserRoleScalarFieldEnum[]
  }

  /**
   * FakeUserRole findMany
   */
  export type FakeUserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FakeUserRole
     */
    select?: FakeUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FakeUserRole
     */
    omit?: FakeUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FakeUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which FakeUserRoles to fetch.
     */
    where?: FakeUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FakeUserRoles to fetch.
     */
    orderBy?: FakeUserRoleOrderByWithRelationInput | FakeUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FakeUserRoles.
     */
    cursor?: FakeUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FakeUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FakeUserRoles.
     */
    skip?: number
    distinct?: FakeUserRoleScalarFieldEnum | FakeUserRoleScalarFieldEnum[]
  }

  /**
   * FakeUserRole create
   */
  export type FakeUserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FakeUserRole
     */
    select?: FakeUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FakeUserRole
     */
    omit?: FakeUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FakeUserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a FakeUserRole.
     */
    data: XOR<FakeUserRoleCreateInput, FakeUserRoleUncheckedCreateInput>
  }

  /**
   * FakeUserRole createMany
   */
  export type FakeUserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FakeUserRoles.
     */
    data: FakeUserRoleCreateManyInput | FakeUserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FakeUserRole createManyAndReturn
   */
  export type FakeUserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FakeUserRole
     */
    select?: FakeUserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FakeUserRole
     */
    omit?: FakeUserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many FakeUserRoles.
     */
    data: FakeUserRoleCreateManyInput | FakeUserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FakeUserRole update
   */
  export type FakeUserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FakeUserRole
     */
    select?: FakeUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FakeUserRole
     */
    omit?: FakeUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FakeUserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a FakeUserRole.
     */
    data: XOR<FakeUserRoleUpdateInput, FakeUserRoleUncheckedUpdateInput>
    /**
     * Choose, which FakeUserRole to update.
     */
    where: FakeUserRoleWhereUniqueInput
  }

  /**
   * FakeUserRole updateMany
   */
  export type FakeUserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FakeUserRoles.
     */
    data: XOR<FakeUserRoleUpdateManyMutationInput, FakeUserRoleUncheckedUpdateManyInput>
    /**
     * Filter which FakeUserRoles to update
     */
    where?: FakeUserRoleWhereInput
    /**
     * Limit how many FakeUserRoles to update.
     */
    limit?: number
  }

  /**
   * FakeUserRole updateManyAndReturn
   */
  export type FakeUserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FakeUserRole
     */
    select?: FakeUserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FakeUserRole
     */
    omit?: FakeUserRoleOmit<ExtArgs> | null
    /**
     * The data used to update FakeUserRoles.
     */
    data: XOR<FakeUserRoleUpdateManyMutationInput, FakeUserRoleUncheckedUpdateManyInput>
    /**
     * Filter which FakeUserRoles to update
     */
    where?: FakeUserRoleWhereInput
    /**
     * Limit how many FakeUserRoles to update.
     */
    limit?: number
  }

  /**
   * FakeUserRole upsert
   */
  export type FakeUserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FakeUserRole
     */
    select?: FakeUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FakeUserRole
     */
    omit?: FakeUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FakeUserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the FakeUserRole to update in case it exists.
     */
    where: FakeUserRoleWhereUniqueInput
    /**
     * In case the FakeUserRole found by the `where` argument doesn't exist, create a new FakeUserRole with this data.
     */
    create: XOR<FakeUserRoleCreateInput, FakeUserRoleUncheckedCreateInput>
    /**
     * In case the FakeUserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FakeUserRoleUpdateInput, FakeUserRoleUncheckedUpdateInput>
  }

  /**
   * FakeUserRole delete
   */
  export type FakeUserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FakeUserRole
     */
    select?: FakeUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FakeUserRole
     */
    omit?: FakeUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FakeUserRoleInclude<ExtArgs> | null
    /**
     * Filter which FakeUserRole to delete.
     */
    where: FakeUserRoleWhereUniqueInput
  }

  /**
   * FakeUserRole deleteMany
   */
  export type FakeUserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FakeUserRoles to delete
     */
    where?: FakeUserRoleWhereInput
    /**
     * Limit how many FakeUserRoles to delete.
     */
    limit?: number
  }

  /**
   * FakeUserRole.warmingData
   */
  export type FakeUserRole$warmingDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmingData
     */
    select?: WarmingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarmingData
     */
    omit?: WarmingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmingDataInclude<ExtArgs> | null
    where?: WarmingDataWhereInput
    orderBy?: WarmingDataOrderByWithRelationInput | WarmingDataOrderByWithRelationInput[]
    cursor?: WarmingDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarmingDataScalarFieldEnum | WarmingDataScalarFieldEnum[]
  }

  /**
   * FakeUserRole without action
   */
  export type FakeUserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FakeUserRole
     */
    select?: FakeUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FakeUserRole
     */
    omit?: FakeUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FakeUserRoleInclude<ExtArgs> | null
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
    sessionId: 'sessionId'
  };

  export type Tg_accountScalarFieldEnum = (typeof Tg_accountScalarFieldEnum)[keyof typeof Tg_accountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionString: 'sessionString',
    apiId: 'apiId',
    apiHash: 'apiHash'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


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


  export const ChatUserListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tg_accountId: 'tg_accountId'
  };

  export type ChatUserListScalarFieldEnum = (typeof ChatUserListScalarFieldEnum)[keyof typeof ChatUserListScalarFieldEnum]


  export const UserDataScalarFieldEnum: {
    id: 'id',
    userListId: 'userListId',
    username: 'username',
    phone: 'phone'
  };

  export type UserDataScalarFieldEnum = (typeof UserDataScalarFieldEnum)[keyof typeof UserDataScalarFieldEnum]


  export const WarmingDataScalarFieldEnum: {
    id: 'id',
    tg_accountId: 'tg_accountId',
    userListId: 'userListId',
    fakeUserRoleId: 'fakeUserRoleId',
    timeLastStep: 'timeLastStep',
    timeStop: 'timeStop',
    stepCounter: 'stepCounter',
    messagesCounter: 'messagesCounter',
    answersCounter: 'answersCounter',
    reactionsCounter: 'reactionsCounter',
    commentsCounter: 'commentsCounter',
    messagesPerHour: 'messagesPerHour',
    answersPerHour: 'answersPerHour',
    reactionsPerHour: 'reactionsPerHour',
    commentsPerHour: 'commentsPerHour',
    startDelay: 'startDelay'
  };

  export type WarmingDataScalarFieldEnum = (typeof WarmingDataScalarFieldEnum)[keyof typeof WarmingDataScalarFieldEnum]


  export const FakeUserRoleScalarFieldEnum: {
    id: 'id',
    role: 'role',
    description: 'description'
  };

  export type FakeUserRoleScalarFieldEnum = (typeof FakeUserRoleScalarFieldEnum)[keyof typeof FakeUserRoleScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    sessionId?: IntNullableFilter<"Tg_account"> | number | null
    proxy?: XOR<ProxyNullableScalarRelationFilter, ProxyWhereInput> | null
    comments?: CommentListRelationFilter
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
    ChatUserList?: ChatUserListListRelationFilter
    warmingData?: XOR<WarmingDataNullableScalarRelationFilter, WarmingDataWhereInput> | null
  }

  export type Tg_accountOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    proxyId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    proxy?: ProxyOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    session?: SessionOrderByWithRelationInput
    ChatUserList?: ChatUserListOrderByRelationAggregateInput
    warmingData?: WarmingDataOrderByWithRelationInput
  }

  export type Tg_accountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    proxyId?: number
    sessionId?: number
    AND?: Tg_accountWhereInput | Tg_accountWhereInput[]
    OR?: Tg_accountWhereInput[]
    NOT?: Tg_accountWhereInput | Tg_accountWhereInput[]
    phone?: StringFilter<"Tg_account"> | string
    username?: StringFilter<"Tg_account"> | string
    firstname?: StringFilter<"Tg_account"> | string
    lastname?: StringNullableFilter<"Tg_account"> | string | null
    proxy?: XOR<ProxyNullableScalarRelationFilter, ProxyWhereInput> | null
    comments?: CommentListRelationFilter
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
    ChatUserList?: ChatUserListListRelationFilter
    warmingData?: XOR<WarmingDataNullableScalarRelationFilter, WarmingDataWhereInput> | null
  }, "id" | "proxyId" | "sessionId">

  export type Tg_accountOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    proxyId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
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
    sessionId?: IntNullableWithAggregatesFilter<"Tg_account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: IntFilter<"Session"> | number
    sessionString?: StringFilter<"Session"> | string
    apiId?: StringFilter<"Session"> | string
    apiHash?: StringFilter<"Session"> | string
    Tg_account?: XOR<Tg_accountNullableScalarRelationFilter, Tg_accountWhereInput> | null
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionString?: SortOrder
    apiId?: SortOrder
    apiHash?: SortOrder
    Tg_account?: Tg_accountOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionString?: StringFilter<"Session"> | string
    apiId?: StringFilter<"Session"> | string
    apiHash?: StringFilter<"Session"> | string
    Tg_account?: XOR<Tg_accountNullableScalarRelationFilter, Tg_accountWhereInput> | null
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionString?: SortOrder
    apiId?: SortOrder
    apiHash?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Session"> | number
    sessionString?: StringWithAggregatesFilter<"Session"> | string
    apiId?: StringWithAggregatesFilter<"Session"> | string
    apiHash?: StringWithAggregatesFilter<"Session"> | string
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

  export type ChatUserListWhereInput = {
    AND?: ChatUserListWhereInput | ChatUserListWhereInput[]
    OR?: ChatUserListWhereInput[]
    NOT?: ChatUserListWhereInput | ChatUserListWhereInput[]
    id?: IntFilter<"ChatUserList"> | number
    name?: StringFilter<"ChatUserList"> | string
    tg_accountId?: IntFilter<"ChatUserList"> | number
    tg_account?: XOR<Tg_accountScalarRelationFilter, Tg_accountWhereInput>
    users?: UserDataListRelationFilter
    warmingData?: WarmingDataListRelationFilter
  }

  export type ChatUserListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tg_accountId?: SortOrder
    tg_account?: Tg_accountOrderByWithRelationInput
    users?: UserDataOrderByRelationAggregateInput
    warmingData?: WarmingDataOrderByRelationAggregateInput
  }

  export type ChatUserListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatUserListWhereInput | ChatUserListWhereInput[]
    OR?: ChatUserListWhereInput[]
    NOT?: ChatUserListWhereInput | ChatUserListWhereInput[]
    name?: StringFilter<"ChatUserList"> | string
    tg_accountId?: IntFilter<"ChatUserList"> | number
    tg_account?: XOR<Tg_accountScalarRelationFilter, Tg_accountWhereInput>
    users?: UserDataListRelationFilter
    warmingData?: WarmingDataListRelationFilter
  }, "id">

  export type ChatUserListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tg_accountId?: SortOrder
    _count?: ChatUserListCountOrderByAggregateInput
    _avg?: ChatUserListAvgOrderByAggregateInput
    _max?: ChatUserListMaxOrderByAggregateInput
    _min?: ChatUserListMinOrderByAggregateInput
    _sum?: ChatUserListSumOrderByAggregateInput
  }

  export type ChatUserListScalarWhereWithAggregatesInput = {
    AND?: ChatUserListScalarWhereWithAggregatesInput | ChatUserListScalarWhereWithAggregatesInput[]
    OR?: ChatUserListScalarWhereWithAggregatesInput[]
    NOT?: ChatUserListScalarWhereWithAggregatesInput | ChatUserListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatUserList"> | number
    name?: StringWithAggregatesFilter<"ChatUserList"> | string
    tg_accountId?: IntWithAggregatesFilter<"ChatUserList"> | number
  }

  export type UserDataWhereInput = {
    AND?: UserDataWhereInput | UserDataWhereInput[]
    OR?: UserDataWhereInput[]
    NOT?: UserDataWhereInput | UserDataWhereInput[]
    id?: IntFilter<"UserData"> | number
    userListId?: IntFilter<"UserData"> | number
    username?: StringNullableFilter<"UserData"> | string | null
    phone?: StringNullableFilter<"UserData"> | string | null
    userList?: XOR<ChatUserListScalarRelationFilter, ChatUserListWhereInput>
  }

  export type UserDataOrderByWithRelationInput = {
    id?: SortOrder
    userListId?: SortOrder
    username?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    userList?: ChatUserListOrderByWithRelationInput
  }

  export type UserDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserDataWhereInput | UserDataWhereInput[]
    OR?: UserDataWhereInput[]
    NOT?: UserDataWhereInput | UserDataWhereInput[]
    userListId?: IntFilter<"UserData"> | number
    username?: StringNullableFilter<"UserData"> | string | null
    phone?: StringNullableFilter<"UserData"> | string | null
    userList?: XOR<ChatUserListScalarRelationFilter, ChatUserListWhereInput>
  }, "id">

  export type UserDataOrderByWithAggregationInput = {
    id?: SortOrder
    userListId?: SortOrder
    username?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: UserDataCountOrderByAggregateInput
    _avg?: UserDataAvgOrderByAggregateInput
    _max?: UserDataMaxOrderByAggregateInput
    _min?: UserDataMinOrderByAggregateInput
    _sum?: UserDataSumOrderByAggregateInput
  }

  export type UserDataScalarWhereWithAggregatesInput = {
    AND?: UserDataScalarWhereWithAggregatesInput | UserDataScalarWhereWithAggregatesInput[]
    OR?: UserDataScalarWhereWithAggregatesInput[]
    NOT?: UserDataScalarWhereWithAggregatesInput | UserDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserData"> | number
    userListId?: IntWithAggregatesFilter<"UserData"> | number
    username?: StringNullableWithAggregatesFilter<"UserData"> | string | null
    phone?: StringNullableWithAggregatesFilter<"UserData"> | string | null
  }

  export type WarmingDataWhereInput = {
    AND?: WarmingDataWhereInput | WarmingDataWhereInput[]
    OR?: WarmingDataWhereInput[]
    NOT?: WarmingDataWhereInput | WarmingDataWhereInput[]
    id?: IntFilter<"WarmingData"> | number
    tg_accountId?: IntFilter<"WarmingData"> | number
    userListId?: IntFilter<"WarmingData"> | number
    fakeUserRoleId?: IntFilter<"WarmingData"> | number
    timeLastStep?: DateTimeFilter<"WarmingData"> | Date | string
    timeStop?: DateTimeFilter<"WarmingData"> | Date | string
    stepCounter?: IntFilter<"WarmingData"> | number
    messagesCounter?: IntFilter<"WarmingData"> | number
    answersCounter?: IntFilter<"WarmingData"> | number
    reactionsCounter?: IntFilter<"WarmingData"> | number
    commentsCounter?: IntFilter<"WarmingData"> | number
    messagesPerHour?: IntFilter<"WarmingData"> | number
    answersPerHour?: IntFilter<"WarmingData"> | number
    reactionsPerHour?: IntFilter<"WarmingData"> | number
    commentsPerHour?: IntFilter<"WarmingData"> | number
    startDelay?: IntFilter<"WarmingData"> | number
    tg_account?: XOR<Tg_accountScalarRelationFilter, Tg_accountWhereInput>
    userList?: XOR<ChatUserListScalarRelationFilter, ChatUserListWhereInput>
    fakeUserRole?: XOR<FakeUserRoleScalarRelationFilter, FakeUserRoleWhereInput>
  }

  export type WarmingDataOrderByWithRelationInput = {
    id?: SortOrder
    tg_accountId?: SortOrder
    userListId?: SortOrder
    fakeUserRoleId?: SortOrder
    timeLastStep?: SortOrder
    timeStop?: SortOrder
    stepCounter?: SortOrder
    messagesCounter?: SortOrder
    answersCounter?: SortOrder
    reactionsCounter?: SortOrder
    commentsCounter?: SortOrder
    messagesPerHour?: SortOrder
    answersPerHour?: SortOrder
    reactionsPerHour?: SortOrder
    commentsPerHour?: SortOrder
    startDelay?: SortOrder
    tg_account?: Tg_accountOrderByWithRelationInput
    userList?: ChatUserListOrderByWithRelationInput
    fakeUserRole?: FakeUserRoleOrderByWithRelationInput
  }

  export type WarmingDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tg_accountId?: number
    AND?: WarmingDataWhereInput | WarmingDataWhereInput[]
    OR?: WarmingDataWhereInput[]
    NOT?: WarmingDataWhereInput | WarmingDataWhereInput[]
    userListId?: IntFilter<"WarmingData"> | number
    fakeUserRoleId?: IntFilter<"WarmingData"> | number
    timeLastStep?: DateTimeFilter<"WarmingData"> | Date | string
    timeStop?: DateTimeFilter<"WarmingData"> | Date | string
    stepCounter?: IntFilter<"WarmingData"> | number
    messagesCounter?: IntFilter<"WarmingData"> | number
    answersCounter?: IntFilter<"WarmingData"> | number
    reactionsCounter?: IntFilter<"WarmingData"> | number
    commentsCounter?: IntFilter<"WarmingData"> | number
    messagesPerHour?: IntFilter<"WarmingData"> | number
    answersPerHour?: IntFilter<"WarmingData"> | number
    reactionsPerHour?: IntFilter<"WarmingData"> | number
    commentsPerHour?: IntFilter<"WarmingData"> | number
    startDelay?: IntFilter<"WarmingData"> | number
    tg_account?: XOR<Tg_accountScalarRelationFilter, Tg_accountWhereInput>
    userList?: XOR<ChatUserListScalarRelationFilter, ChatUserListWhereInput>
    fakeUserRole?: XOR<FakeUserRoleScalarRelationFilter, FakeUserRoleWhereInput>
  }, "id" | "tg_accountId">

  export type WarmingDataOrderByWithAggregationInput = {
    id?: SortOrder
    tg_accountId?: SortOrder
    userListId?: SortOrder
    fakeUserRoleId?: SortOrder
    timeLastStep?: SortOrder
    timeStop?: SortOrder
    stepCounter?: SortOrder
    messagesCounter?: SortOrder
    answersCounter?: SortOrder
    reactionsCounter?: SortOrder
    commentsCounter?: SortOrder
    messagesPerHour?: SortOrder
    answersPerHour?: SortOrder
    reactionsPerHour?: SortOrder
    commentsPerHour?: SortOrder
    startDelay?: SortOrder
    _count?: WarmingDataCountOrderByAggregateInput
    _avg?: WarmingDataAvgOrderByAggregateInput
    _max?: WarmingDataMaxOrderByAggregateInput
    _min?: WarmingDataMinOrderByAggregateInput
    _sum?: WarmingDataSumOrderByAggregateInput
  }

  export type WarmingDataScalarWhereWithAggregatesInput = {
    AND?: WarmingDataScalarWhereWithAggregatesInput | WarmingDataScalarWhereWithAggregatesInput[]
    OR?: WarmingDataScalarWhereWithAggregatesInput[]
    NOT?: WarmingDataScalarWhereWithAggregatesInput | WarmingDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WarmingData"> | number
    tg_accountId?: IntWithAggregatesFilter<"WarmingData"> | number
    userListId?: IntWithAggregatesFilter<"WarmingData"> | number
    fakeUserRoleId?: IntWithAggregatesFilter<"WarmingData"> | number
    timeLastStep?: DateTimeWithAggregatesFilter<"WarmingData"> | Date | string
    timeStop?: DateTimeWithAggregatesFilter<"WarmingData"> | Date | string
    stepCounter?: IntWithAggregatesFilter<"WarmingData"> | number
    messagesCounter?: IntWithAggregatesFilter<"WarmingData"> | number
    answersCounter?: IntWithAggregatesFilter<"WarmingData"> | number
    reactionsCounter?: IntWithAggregatesFilter<"WarmingData"> | number
    commentsCounter?: IntWithAggregatesFilter<"WarmingData"> | number
    messagesPerHour?: IntWithAggregatesFilter<"WarmingData"> | number
    answersPerHour?: IntWithAggregatesFilter<"WarmingData"> | number
    reactionsPerHour?: IntWithAggregatesFilter<"WarmingData"> | number
    commentsPerHour?: IntWithAggregatesFilter<"WarmingData"> | number
    startDelay?: IntWithAggregatesFilter<"WarmingData"> | number
  }

  export type FakeUserRoleWhereInput = {
    AND?: FakeUserRoleWhereInput | FakeUserRoleWhereInput[]
    OR?: FakeUserRoleWhereInput[]
    NOT?: FakeUserRoleWhereInput | FakeUserRoleWhereInput[]
    id?: IntFilter<"FakeUserRole"> | number
    role?: StringFilter<"FakeUserRole"> | string
    description?: StringFilter<"FakeUserRole"> | string
    warmingData?: WarmingDataListRelationFilter
  }

  export type FakeUserRoleOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    description?: SortOrder
    warmingData?: WarmingDataOrderByRelationAggregateInput
  }

  export type FakeUserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FakeUserRoleWhereInput | FakeUserRoleWhereInput[]
    OR?: FakeUserRoleWhereInput[]
    NOT?: FakeUserRoleWhereInput | FakeUserRoleWhereInput[]
    role?: StringFilter<"FakeUserRole"> | string
    description?: StringFilter<"FakeUserRole"> | string
    warmingData?: WarmingDataListRelationFilter
  }, "id">

  export type FakeUserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    description?: SortOrder
    _count?: FakeUserRoleCountOrderByAggregateInput
    _avg?: FakeUserRoleAvgOrderByAggregateInput
    _max?: FakeUserRoleMaxOrderByAggregateInput
    _min?: FakeUserRoleMinOrderByAggregateInput
    _sum?: FakeUserRoleSumOrderByAggregateInput
  }

  export type FakeUserRoleScalarWhereWithAggregatesInput = {
    AND?: FakeUserRoleScalarWhereWithAggregatesInput | FakeUserRoleScalarWhereWithAggregatesInput[]
    OR?: FakeUserRoleScalarWhereWithAggregatesInput[]
    NOT?: FakeUserRoleScalarWhereWithAggregatesInput | FakeUserRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FakeUserRole"> | number
    role?: StringWithAggregatesFilter<"FakeUserRole"> | string
    description?: StringWithAggregatesFilter<"FakeUserRole"> | string
  }

  export type Tg_accountCreateInput = {
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    proxy?: ProxyCreateNestedOneWithoutTg_accountInput
    comments?: CommentCreateNestedManyWithoutAccountInput
    session?: SessionCreateNestedOneWithoutTg_accountInput
    ChatUserList?: ChatUserListCreateNestedManyWithoutTg_accountInput
    warmingData?: WarmingDataCreateNestedOneWithoutTg_accountInput
  }

  export type Tg_accountUncheckedCreateInput = {
    id?: number
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    proxyId?: number | null
    sessionId?: number | null
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput
    ChatUserList?: ChatUserListUncheckedCreateNestedManyWithoutTg_accountInput
    warmingData?: WarmingDataUncheckedCreateNestedOneWithoutTg_accountInput
  }

  export type Tg_accountUpdateInput = {
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    proxy?: ProxyUpdateOneWithoutTg_accountNestedInput
    comments?: CommentUpdateManyWithoutAccountNestedInput
    session?: SessionUpdateOneWithoutTg_accountNestedInput
    ChatUserList?: ChatUserListUpdateManyWithoutTg_accountNestedInput
    warmingData?: WarmingDataUpdateOneWithoutTg_accountNestedInput
  }

  export type Tg_accountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    proxyId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput
    ChatUserList?: ChatUserListUncheckedUpdateManyWithoutTg_accountNestedInput
    warmingData?: WarmingDataUncheckedUpdateOneWithoutTg_accountNestedInput
  }

  export type Tg_accountCreateManyInput = {
    id?: number
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    proxyId?: number | null
    sessionId?: number | null
  }

  export type Tg_accountUpdateManyMutationInput = {
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tg_accountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    proxyId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    sessionString: string
    apiId: string
    apiHash: string
    Tg_account?: Tg_accountCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    sessionString: string
    apiId: string
    apiHash: string
    Tg_account?: Tg_accountUncheckedCreateNestedOneWithoutSessionInput
  }

  export type SessionUpdateInput = {
    sessionString?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    apiHash?: StringFieldUpdateOperationsInput | string
    Tg_account?: Tg_accountUpdateOneWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionString?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    apiHash?: StringFieldUpdateOperationsInput | string
    Tg_account?: Tg_accountUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: number
    sessionString: string
    apiId: string
    apiHash: string
  }

  export type SessionUpdateManyMutationInput = {
    sessionString?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    apiHash?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionString?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    apiHash?: StringFieldUpdateOperationsInput | string
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

  export type ChatUserListCreateInput = {
    name: string
    tg_account: Tg_accountCreateNestedOneWithoutChatUserListInput
    users?: UserDataCreateNestedManyWithoutUserListInput
    warmingData?: WarmingDataCreateNestedManyWithoutUserListInput
  }

  export type ChatUserListUncheckedCreateInput = {
    id?: number
    name: string
    tg_accountId: number
    users?: UserDataUncheckedCreateNestedManyWithoutUserListInput
    warmingData?: WarmingDataUncheckedCreateNestedManyWithoutUserListInput
  }

  export type ChatUserListUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tg_account?: Tg_accountUpdateOneRequiredWithoutChatUserListNestedInput
    users?: UserDataUpdateManyWithoutUserListNestedInput
    warmingData?: WarmingDataUpdateManyWithoutUserListNestedInput
  }

  export type ChatUserListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tg_accountId?: IntFieldUpdateOperationsInput | number
    users?: UserDataUncheckedUpdateManyWithoutUserListNestedInput
    warmingData?: WarmingDataUncheckedUpdateManyWithoutUserListNestedInput
  }

  export type ChatUserListCreateManyInput = {
    id?: number
    name: string
    tg_accountId: number
  }

  export type ChatUserListUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUserListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tg_accountId?: IntFieldUpdateOperationsInput | number
  }

  export type UserDataCreateInput = {
    username?: string | null
    phone?: string | null
    userList: ChatUserListCreateNestedOneWithoutUsersInput
  }

  export type UserDataUncheckedCreateInput = {
    id?: number
    userListId: number
    username?: string | null
    phone?: string | null
  }

  export type UserDataUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    userList?: ChatUserListUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userListId?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDataCreateManyInput = {
    id?: number
    userListId: number
    username?: string | null
    phone?: string | null
  }

  export type UserDataUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userListId?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WarmingDataCreateInput = {
    timeLastStep?: Date | string
    timeStop: Date | string
    stepCounter?: number
    messagesCounter?: number
    answersCounter?: number
    reactionsCounter?: number
    commentsCounter?: number
    messagesPerHour: number
    answersPerHour: number
    reactionsPerHour: number
    commentsPerHour: number
    startDelay: number
    tg_account: Tg_accountCreateNestedOneWithoutWarmingDataInput
    userList: ChatUserListCreateNestedOneWithoutWarmingDataInput
    fakeUserRole: FakeUserRoleCreateNestedOneWithoutWarmingDataInput
  }

  export type WarmingDataUncheckedCreateInput = {
    id?: number
    tg_accountId: number
    userListId: number
    fakeUserRoleId: number
    timeLastStep?: Date | string
    timeStop: Date | string
    stepCounter?: number
    messagesCounter?: number
    answersCounter?: number
    reactionsCounter?: number
    commentsCounter?: number
    messagesPerHour: number
    answersPerHour: number
    reactionsPerHour: number
    commentsPerHour: number
    startDelay: number
  }

  export type WarmingDataUpdateInput = {
    timeLastStep?: DateTimeFieldUpdateOperationsInput | Date | string
    timeStop?: DateTimeFieldUpdateOperationsInput | Date | string
    stepCounter?: IntFieldUpdateOperationsInput | number
    messagesCounter?: IntFieldUpdateOperationsInput | number
    answersCounter?: IntFieldUpdateOperationsInput | number
    reactionsCounter?: IntFieldUpdateOperationsInput | number
    commentsCounter?: IntFieldUpdateOperationsInput | number
    messagesPerHour?: IntFieldUpdateOperationsInput | number
    answersPerHour?: IntFieldUpdateOperationsInput | number
    reactionsPerHour?: IntFieldUpdateOperationsInput | number
    commentsPerHour?: IntFieldUpdateOperationsInput | number
    startDelay?: IntFieldUpdateOperationsInput | number
    tg_account?: Tg_accountUpdateOneRequiredWithoutWarmingDataNestedInput
    userList?: ChatUserListUpdateOneRequiredWithoutWarmingDataNestedInput
    fakeUserRole?: FakeUserRoleUpdateOneRequiredWithoutWarmingDataNestedInput
  }

  export type WarmingDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tg_accountId?: IntFieldUpdateOperationsInput | number
    userListId?: IntFieldUpdateOperationsInput | number
    fakeUserRoleId?: IntFieldUpdateOperationsInput | number
    timeLastStep?: DateTimeFieldUpdateOperationsInput | Date | string
    timeStop?: DateTimeFieldUpdateOperationsInput | Date | string
    stepCounter?: IntFieldUpdateOperationsInput | number
    messagesCounter?: IntFieldUpdateOperationsInput | number
    answersCounter?: IntFieldUpdateOperationsInput | number
    reactionsCounter?: IntFieldUpdateOperationsInput | number
    commentsCounter?: IntFieldUpdateOperationsInput | number
    messagesPerHour?: IntFieldUpdateOperationsInput | number
    answersPerHour?: IntFieldUpdateOperationsInput | number
    reactionsPerHour?: IntFieldUpdateOperationsInput | number
    commentsPerHour?: IntFieldUpdateOperationsInput | number
    startDelay?: IntFieldUpdateOperationsInput | number
  }

  export type WarmingDataCreateManyInput = {
    id?: number
    tg_accountId: number
    userListId: number
    fakeUserRoleId: number
    timeLastStep?: Date | string
    timeStop: Date | string
    stepCounter?: number
    messagesCounter?: number
    answersCounter?: number
    reactionsCounter?: number
    commentsCounter?: number
    messagesPerHour: number
    answersPerHour: number
    reactionsPerHour: number
    commentsPerHour: number
    startDelay: number
  }

  export type WarmingDataUpdateManyMutationInput = {
    timeLastStep?: DateTimeFieldUpdateOperationsInput | Date | string
    timeStop?: DateTimeFieldUpdateOperationsInput | Date | string
    stepCounter?: IntFieldUpdateOperationsInput | number
    messagesCounter?: IntFieldUpdateOperationsInput | number
    answersCounter?: IntFieldUpdateOperationsInput | number
    reactionsCounter?: IntFieldUpdateOperationsInput | number
    commentsCounter?: IntFieldUpdateOperationsInput | number
    messagesPerHour?: IntFieldUpdateOperationsInput | number
    answersPerHour?: IntFieldUpdateOperationsInput | number
    reactionsPerHour?: IntFieldUpdateOperationsInput | number
    commentsPerHour?: IntFieldUpdateOperationsInput | number
    startDelay?: IntFieldUpdateOperationsInput | number
  }

  export type WarmingDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tg_accountId?: IntFieldUpdateOperationsInput | number
    userListId?: IntFieldUpdateOperationsInput | number
    fakeUserRoleId?: IntFieldUpdateOperationsInput | number
    timeLastStep?: DateTimeFieldUpdateOperationsInput | Date | string
    timeStop?: DateTimeFieldUpdateOperationsInput | Date | string
    stepCounter?: IntFieldUpdateOperationsInput | number
    messagesCounter?: IntFieldUpdateOperationsInput | number
    answersCounter?: IntFieldUpdateOperationsInput | number
    reactionsCounter?: IntFieldUpdateOperationsInput | number
    commentsCounter?: IntFieldUpdateOperationsInput | number
    messagesPerHour?: IntFieldUpdateOperationsInput | number
    answersPerHour?: IntFieldUpdateOperationsInput | number
    reactionsPerHour?: IntFieldUpdateOperationsInput | number
    commentsPerHour?: IntFieldUpdateOperationsInput | number
    startDelay?: IntFieldUpdateOperationsInput | number
  }

  export type FakeUserRoleCreateInput = {
    role: string
    description: string
    warmingData?: WarmingDataCreateNestedManyWithoutFakeUserRoleInput
  }

  export type FakeUserRoleUncheckedCreateInput = {
    id?: number
    role: string
    description: string
    warmingData?: WarmingDataUncheckedCreateNestedManyWithoutFakeUserRoleInput
  }

  export type FakeUserRoleUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    warmingData?: WarmingDataUpdateManyWithoutFakeUserRoleNestedInput
  }

  export type FakeUserRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    warmingData?: WarmingDataUncheckedUpdateManyWithoutFakeUserRoleNestedInput
  }

  export type FakeUserRoleCreateManyInput = {
    id?: number
    role: string
    description: string
  }

  export type FakeUserRoleUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FakeUserRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
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

  export type SessionNullableScalarRelationFilter = {
    is?: SessionWhereInput | null
    isNot?: SessionWhereInput | null
  }

  export type ChatUserListListRelationFilter = {
    every?: ChatUserListWhereInput
    some?: ChatUserListWhereInput
    none?: ChatUserListWhereInput
  }

  export type WarmingDataNullableScalarRelationFilter = {
    is?: WarmingDataWhereInput | null
    isNot?: WarmingDataWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatUserListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Tg_accountCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    proxyId?: SortOrder
    sessionId?: SortOrder
  }

  export type Tg_accountAvgOrderByAggregateInput = {
    id?: SortOrder
    proxyId?: SortOrder
    sessionId?: SortOrder
  }

  export type Tg_accountMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    proxyId?: SortOrder
    sessionId?: SortOrder
  }

  export type Tg_accountMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    proxyId?: SortOrder
    sessionId?: SortOrder
  }

  export type Tg_accountSumOrderByAggregateInput = {
    id?: SortOrder
    proxyId?: SortOrder
    sessionId?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionString?: SortOrder
    apiId?: SortOrder
    apiHash?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionString?: SortOrder
    apiId?: SortOrder
    apiHash?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionString?: SortOrder
    apiId?: SortOrder
    apiHash?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type Tg_accountScalarRelationFilter = {
    is?: Tg_accountWhereInput
    isNot?: Tg_accountWhereInput
  }

  export type UserDataListRelationFilter = {
    every?: UserDataWhereInput
    some?: UserDataWhereInput
    none?: UserDataWhereInput
  }

  export type WarmingDataListRelationFilter = {
    every?: WarmingDataWhereInput
    some?: WarmingDataWhereInput
    none?: WarmingDataWhereInput
  }

  export type UserDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarmingDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatUserListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tg_accountId?: SortOrder
  }

  export type ChatUserListAvgOrderByAggregateInput = {
    id?: SortOrder
    tg_accountId?: SortOrder
  }

  export type ChatUserListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tg_accountId?: SortOrder
  }

  export type ChatUserListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tg_accountId?: SortOrder
  }

  export type ChatUserListSumOrderByAggregateInput = {
    id?: SortOrder
    tg_accountId?: SortOrder
  }

  export type ChatUserListScalarRelationFilter = {
    is?: ChatUserListWhereInput
    isNot?: ChatUserListWhereInput
  }

  export type UserDataCountOrderByAggregateInput = {
    id?: SortOrder
    userListId?: SortOrder
    username?: SortOrder
    phone?: SortOrder
  }

  export type UserDataAvgOrderByAggregateInput = {
    id?: SortOrder
    userListId?: SortOrder
  }

  export type UserDataMaxOrderByAggregateInput = {
    id?: SortOrder
    userListId?: SortOrder
    username?: SortOrder
    phone?: SortOrder
  }

  export type UserDataMinOrderByAggregateInput = {
    id?: SortOrder
    userListId?: SortOrder
    username?: SortOrder
    phone?: SortOrder
  }

  export type UserDataSumOrderByAggregateInput = {
    id?: SortOrder
    userListId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FakeUserRoleScalarRelationFilter = {
    is?: FakeUserRoleWhereInput
    isNot?: FakeUserRoleWhereInput
  }

  export type WarmingDataCountOrderByAggregateInput = {
    id?: SortOrder
    tg_accountId?: SortOrder
    userListId?: SortOrder
    fakeUserRoleId?: SortOrder
    timeLastStep?: SortOrder
    timeStop?: SortOrder
    stepCounter?: SortOrder
    messagesCounter?: SortOrder
    answersCounter?: SortOrder
    reactionsCounter?: SortOrder
    commentsCounter?: SortOrder
    messagesPerHour?: SortOrder
    answersPerHour?: SortOrder
    reactionsPerHour?: SortOrder
    commentsPerHour?: SortOrder
    startDelay?: SortOrder
  }

  export type WarmingDataAvgOrderByAggregateInput = {
    id?: SortOrder
    tg_accountId?: SortOrder
    userListId?: SortOrder
    fakeUserRoleId?: SortOrder
    stepCounter?: SortOrder
    messagesCounter?: SortOrder
    answersCounter?: SortOrder
    reactionsCounter?: SortOrder
    commentsCounter?: SortOrder
    messagesPerHour?: SortOrder
    answersPerHour?: SortOrder
    reactionsPerHour?: SortOrder
    commentsPerHour?: SortOrder
    startDelay?: SortOrder
  }

  export type WarmingDataMaxOrderByAggregateInput = {
    id?: SortOrder
    tg_accountId?: SortOrder
    userListId?: SortOrder
    fakeUserRoleId?: SortOrder
    timeLastStep?: SortOrder
    timeStop?: SortOrder
    stepCounter?: SortOrder
    messagesCounter?: SortOrder
    answersCounter?: SortOrder
    reactionsCounter?: SortOrder
    commentsCounter?: SortOrder
    messagesPerHour?: SortOrder
    answersPerHour?: SortOrder
    reactionsPerHour?: SortOrder
    commentsPerHour?: SortOrder
    startDelay?: SortOrder
  }

  export type WarmingDataMinOrderByAggregateInput = {
    id?: SortOrder
    tg_accountId?: SortOrder
    userListId?: SortOrder
    fakeUserRoleId?: SortOrder
    timeLastStep?: SortOrder
    timeStop?: SortOrder
    stepCounter?: SortOrder
    messagesCounter?: SortOrder
    answersCounter?: SortOrder
    reactionsCounter?: SortOrder
    commentsCounter?: SortOrder
    messagesPerHour?: SortOrder
    answersPerHour?: SortOrder
    reactionsPerHour?: SortOrder
    commentsPerHour?: SortOrder
    startDelay?: SortOrder
  }

  export type WarmingDataSumOrderByAggregateInput = {
    id?: SortOrder
    tg_accountId?: SortOrder
    userListId?: SortOrder
    fakeUserRoleId?: SortOrder
    stepCounter?: SortOrder
    messagesCounter?: SortOrder
    answersCounter?: SortOrder
    reactionsCounter?: SortOrder
    commentsCounter?: SortOrder
    messagesPerHour?: SortOrder
    answersPerHour?: SortOrder
    reactionsPerHour?: SortOrder
    commentsPerHour?: SortOrder
    startDelay?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FakeUserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    description?: SortOrder
  }

  export type FakeUserRoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FakeUserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    description?: SortOrder
  }

  export type FakeUserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    description?: SortOrder
  }

  export type FakeUserRoleSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type SessionCreateNestedOneWithoutTg_accountInput = {
    create?: XOR<SessionCreateWithoutTg_accountInput, SessionUncheckedCreateWithoutTg_accountInput>
    connectOrCreate?: SessionCreateOrConnectWithoutTg_accountInput
    connect?: SessionWhereUniqueInput
  }

  export type ChatUserListCreateNestedManyWithoutTg_accountInput = {
    create?: XOR<ChatUserListCreateWithoutTg_accountInput, ChatUserListUncheckedCreateWithoutTg_accountInput> | ChatUserListCreateWithoutTg_accountInput[] | ChatUserListUncheckedCreateWithoutTg_accountInput[]
    connectOrCreate?: ChatUserListCreateOrConnectWithoutTg_accountInput | ChatUserListCreateOrConnectWithoutTg_accountInput[]
    createMany?: ChatUserListCreateManyTg_accountInputEnvelope
    connect?: ChatUserListWhereUniqueInput | ChatUserListWhereUniqueInput[]
  }

  export type WarmingDataCreateNestedOneWithoutTg_accountInput = {
    create?: XOR<WarmingDataCreateWithoutTg_accountInput, WarmingDataUncheckedCreateWithoutTg_accountInput>
    connectOrCreate?: WarmingDataCreateOrConnectWithoutTg_accountInput
    connect?: WarmingDataWhereUniqueInput
  }

  export type CommentUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<CommentCreateWithoutAccountInput, CommentUncheckedCreateWithoutAccountInput> | CommentCreateWithoutAccountInput[] | CommentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAccountInput | CommentCreateOrConnectWithoutAccountInput[]
    createMany?: CommentCreateManyAccountInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ChatUserListUncheckedCreateNestedManyWithoutTg_accountInput = {
    create?: XOR<ChatUserListCreateWithoutTg_accountInput, ChatUserListUncheckedCreateWithoutTg_accountInput> | ChatUserListCreateWithoutTg_accountInput[] | ChatUserListUncheckedCreateWithoutTg_accountInput[]
    connectOrCreate?: ChatUserListCreateOrConnectWithoutTg_accountInput | ChatUserListCreateOrConnectWithoutTg_accountInput[]
    createMany?: ChatUserListCreateManyTg_accountInputEnvelope
    connect?: ChatUserListWhereUniqueInput | ChatUserListWhereUniqueInput[]
  }

  export type WarmingDataUncheckedCreateNestedOneWithoutTg_accountInput = {
    create?: XOR<WarmingDataCreateWithoutTg_accountInput, WarmingDataUncheckedCreateWithoutTg_accountInput>
    connectOrCreate?: WarmingDataCreateOrConnectWithoutTg_accountInput
    connect?: WarmingDataWhereUniqueInput
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

  export type SessionUpdateOneWithoutTg_accountNestedInput = {
    create?: XOR<SessionCreateWithoutTg_accountInput, SessionUncheckedCreateWithoutTg_accountInput>
    connectOrCreate?: SessionCreateOrConnectWithoutTg_accountInput
    upsert?: SessionUpsertWithoutTg_accountInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutTg_accountInput, SessionUpdateWithoutTg_accountInput>, SessionUncheckedUpdateWithoutTg_accountInput>
  }

  export type ChatUserListUpdateManyWithoutTg_accountNestedInput = {
    create?: XOR<ChatUserListCreateWithoutTg_accountInput, ChatUserListUncheckedCreateWithoutTg_accountInput> | ChatUserListCreateWithoutTg_accountInput[] | ChatUserListUncheckedCreateWithoutTg_accountInput[]
    connectOrCreate?: ChatUserListCreateOrConnectWithoutTg_accountInput | ChatUserListCreateOrConnectWithoutTg_accountInput[]
    upsert?: ChatUserListUpsertWithWhereUniqueWithoutTg_accountInput | ChatUserListUpsertWithWhereUniqueWithoutTg_accountInput[]
    createMany?: ChatUserListCreateManyTg_accountInputEnvelope
    set?: ChatUserListWhereUniqueInput | ChatUserListWhereUniqueInput[]
    disconnect?: ChatUserListWhereUniqueInput | ChatUserListWhereUniqueInput[]
    delete?: ChatUserListWhereUniqueInput | ChatUserListWhereUniqueInput[]
    connect?: ChatUserListWhereUniqueInput | ChatUserListWhereUniqueInput[]
    update?: ChatUserListUpdateWithWhereUniqueWithoutTg_accountInput | ChatUserListUpdateWithWhereUniqueWithoutTg_accountInput[]
    updateMany?: ChatUserListUpdateManyWithWhereWithoutTg_accountInput | ChatUserListUpdateManyWithWhereWithoutTg_accountInput[]
    deleteMany?: ChatUserListScalarWhereInput | ChatUserListScalarWhereInput[]
  }

  export type WarmingDataUpdateOneWithoutTg_accountNestedInput = {
    create?: XOR<WarmingDataCreateWithoutTg_accountInput, WarmingDataUncheckedCreateWithoutTg_accountInput>
    connectOrCreate?: WarmingDataCreateOrConnectWithoutTg_accountInput
    upsert?: WarmingDataUpsertWithoutTg_accountInput
    disconnect?: WarmingDataWhereInput | boolean
    delete?: WarmingDataWhereInput | boolean
    connect?: WarmingDataWhereUniqueInput
    update?: XOR<XOR<WarmingDataUpdateToOneWithWhereWithoutTg_accountInput, WarmingDataUpdateWithoutTg_accountInput>, WarmingDataUncheckedUpdateWithoutTg_accountInput>
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

  export type ChatUserListUncheckedUpdateManyWithoutTg_accountNestedInput = {
    create?: XOR<ChatUserListCreateWithoutTg_accountInput, ChatUserListUncheckedCreateWithoutTg_accountInput> | ChatUserListCreateWithoutTg_accountInput[] | ChatUserListUncheckedCreateWithoutTg_accountInput[]
    connectOrCreate?: ChatUserListCreateOrConnectWithoutTg_accountInput | ChatUserListCreateOrConnectWithoutTg_accountInput[]
    upsert?: ChatUserListUpsertWithWhereUniqueWithoutTg_accountInput | ChatUserListUpsertWithWhereUniqueWithoutTg_accountInput[]
    createMany?: ChatUserListCreateManyTg_accountInputEnvelope
    set?: ChatUserListWhereUniqueInput | ChatUserListWhereUniqueInput[]
    disconnect?: ChatUserListWhereUniqueInput | ChatUserListWhereUniqueInput[]
    delete?: ChatUserListWhereUniqueInput | ChatUserListWhereUniqueInput[]
    connect?: ChatUserListWhereUniqueInput | ChatUserListWhereUniqueInput[]
    update?: ChatUserListUpdateWithWhereUniqueWithoutTg_accountInput | ChatUserListUpdateWithWhereUniqueWithoutTg_accountInput[]
    updateMany?: ChatUserListUpdateManyWithWhereWithoutTg_accountInput | ChatUserListUpdateManyWithWhereWithoutTg_accountInput[]
    deleteMany?: ChatUserListScalarWhereInput | ChatUserListScalarWhereInput[]
  }

  export type WarmingDataUncheckedUpdateOneWithoutTg_accountNestedInput = {
    create?: XOR<WarmingDataCreateWithoutTg_accountInput, WarmingDataUncheckedCreateWithoutTg_accountInput>
    connectOrCreate?: WarmingDataCreateOrConnectWithoutTg_accountInput
    upsert?: WarmingDataUpsertWithoutTg_accountInput
    disconnect?: WarmingDataWhereInput | boolean
    delete?: WarmingDataWhereInput | boolean
    connect?: WarmingDataWhereUniqueInput
    update?: XOR<XOR<WarmingDataUpdateToOneWithWhereWithoutTg_accountInput, WarmingDataUpdateWithoutTg_accountInput>, WarmingDataUncheckedUpdateWithoutTg_accountInput>
  }

  export type Tg_accountCreateNestedOneWithoutSessionInput = {
    create?: XOR<Tg_accountCreateWithoutSessionInput, Tg_accountUncheckedCreateWithoutSessionInput>
    connectOrCreate?: Tg_accountCreateOrConnectWithoutSessionInput
    connect?: Tg_accountWhereUniqueInput
  }

  export type Tg_accountUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<Tg_accountCreateWithoutSessionInput, Tg_accountUncheckedCreateWithoutSessionInput>
    connectOrCreate?: Tg_accountCreateOrConnectWithoutSessionInput
    connect?: Tg_accountWhereUniqueInput
  }

  export type Tg_accountUpdateOneWithoutSessionNestedInput = {
    create?: XOR<Tg_accountCreateWithoutSessionInput, Tg_accountUncheckedCreateWithoutSessionInput>
    connectOrCreate?: Tg_accountCreateOrConnectWithoutSessionInput
    upsert?: Tg_accountUpsertWithoutSessionInput
    disconnect?: Tg_accountWhereInput | boolean
    delete?: Tg_accountWhereInput | boolean
    connect?: Tg_accountWhereUniqueInput
    update?: XOR<XOR<Tg_accountUpdateToOneWithWhereWithoutSessionInput, Tg_accountUpdateWithoutSessionInput>, Tg_accountUncheckedUpdateWithoutSessionInput>
  }

  export type Tg_accountUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<Tg_accountCreateWithoutSessionInput, Tg_accountUncheckedCreateWithoutSessionInput>
    connectOrCreate?: Tg_accountCreateOrConnectWithoutSessionInput
    upsert?: Tg_accountUpsertWithoutSessionInput
    disconnect?: Tg_accountWhereInput | boolean
    delete?: Tg_accountWhereInput | boolean
    connect?: Tg_accountWhereUniqueInput
    update?: XOR<XOR<Tg_accountUpdateToOneWithWhereWithoutSessionInput, Tg_accountUpdateWithoutSessionInput>, Tg_accountUncheckedUpdateWithoutSessionInput>
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

  export type Tg_accountCreateNestedOneWithoutChatUserListInput = {
    create?: XOR<Tg_accountCreateWithoutChatUserListInput, Tg_accountUncheckedCreateWithoutChatUserListInput>
    connectOrCreate?: Tg_accountCreateOrConnectWithoutChatUserListInput
    connect?: Tg_accountWhereUniqueInput
  }

  export type UserDataCreateNestedManyWithoutUserListInput = {
    create?: XOR<UserDataCreateWithoutUserListInput, UserDataUncheckedCreateWithoutUserListInput> | UserDataCreateWithoutUserListInput[] | UserDataUncheckedCreateWithoutUserListInput[]
    connectOrCreate?: UserDataCreateOrConnectWithoutUserListInput | UserDataCreateOrConnectWithoutUserListInput[]
    createMany?: UserDataCreateManyUserListInputEnvelope
    connect?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
  }

  export type WarmingDataCreateNestedManyWithoutUserListInput = {
    create?: XOR<WarmingDataCreateWithoutUserListInput, WarmingDataUncheckedCreateWithoutUserListInput> | WarmingDataCreateWithoutUserListInput[] | WarmingDataUncheckedCreateWithoutUserListInput[]
    connectOrCreate?: WarmingDataCreateOrConnectWithoutUserListInput | WarmingDataCreateOrConnectWithoutUserListInput[]
    createMany?: WarmingDataCreateManyUserListInputEnvelope
    connect?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
  }

  export type UserDataUncheckedCreateNestedManyWithoutUserListInput = {
    create?: XOR<UserDataCreateWithoutUserListInput, UserDataUncheckedCreateWithoutUserListInput> | UserDataCreateWithoutUserListInput[] | UserDataUncheckedCreateWithoutUserListInput[]
    connectOrCreate?: UserDataCreateOrConnectWithoutUserListInput | UserDataCreateOrConnectWithoutUserListInput[]
    createMany?: UserDataCreateManyUserListInputEnvelope
    connect?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
  }

  export type WarmingDataUncheckedCreateNestedManyWithoutUserListInput = {
    create?: XOR<WarmingDataCreateWithoutUserListInput, WarmingDataUncheckedCreateWithoutUserListInput> | WarmingDataCreateWithoutUserListInput[] | WarmingDataUncheckedCreateWithoutUserListInput[]
    connectOrCreate?: WarmingDataCreateOrConnectWithoutUserListInput | WarmingDataCreateOrConnectWithoutUserListInput[]
    createMany?: WarmingDataCreateManyUserListInputEnvelope
    connect?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
  }

  export type Tg_accountUpdateOneRequiredWithoutChatUserListNestedInput = {
    create?: XOR<Tg_accountCreateWithoutChatUserListInput, Tg_accountUncheckedCreateWithoutChatUserListInput>
    connectOrCreate?: Tg_accountCreateOrConnectWithoutChatUserListInput
    upsert?: Tg_accountUpsertWithoutChatUserListInput
    connect?: Tg_accountWhereUniqueInput
    update?: XOR<XOR<Tg_accountUpdateToOneWithWhereWithoutChatUserListInput, Tg_accountUpdateWithoutChatUserListInput>, Tg_accountUncheckedUpdateWithoutChatUserListInput>
  }

  export type UserDataUpdateManyWithoutUserListNestedInput = {
    create?: XOR<UserDataCreateWithoutUserListInput, UserDataUncheckedCreateWithoutUserListInput> | UserDataCreateWithoutUserListInput[] | UserDataUncheckedCreateWithoutUserListInput[]
    connectOrCreate?: UserDataCreateOrConnectWithoutUserListInput | UserDataCreateOrConnectWithoutUserListInput[]
    upsert?: UserDataUpsertWithWhereUniqueWithoutUserListInput | UserDataUpsertWithWhereUniqueWithoutUserListInput[]
    createMany?: UserDataCreateManyUserListInputEnvelope
    set?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    disconnect?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    delete?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    connect?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    update?: UserDataUpdateWithWhereUniqueWithoutUserListInput | UserDataUpdateWithWhereUniqueWithoutUserListInput[]
    updateMany?: UserDataUpdateManyWithWhereWithoutUserListInput | UserDataUpdateManyWithWhereWithoutUserListInput[]
    deleteMany?: UserDataScalarWhereInput | UserDataScalarWhereInput[]
  }

  export type WarmingDataUpdateManyWithoutUserListNestedInput = {
    create?: XOR<WarmingDataCreateWithoutUserListInput, WarmingDataUncheckedCreateWithoutUserListInput> | WarmingDataCreateWithoutUserListInput[] | WarmingDataUncheckedCreateWithoutUserListInput[]
    connectOrCreate?: WarmingDataCreateOrConnectWithoutUserListInput | WarmingDataCreateOrConnectWithoutUserListInput[]
    upsert?: WarmingDataUpsertWithWhereUniqueWithoutUserListInput | WarmingDataUpsertWithWhereUniqueWithoutUserListInput[]
    createMany?: WarmingDataCreateManyUserListInputEnvelope
    set?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    disconnect?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    delete?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    connect?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    update?: WarmingDataUpdateWithWhereUniqueWithoutUserListInput | WarmingDataUpdateWithWhereUniqueWithoutUserListInput[]
    updateMany?: WarmingDataUpdateManyWithWhereWithoutUserListInput | WarmingDataUpdateManyWithWhereWithoutUserListInput[]
    deleteMany?: WarmingDataScalarWhereInput | WarmingDataScalarWhereInput[]
  }

  export type UserDataUncheckedUpdateManyWithoutUserListNestedInput = {
    create?: XOR<UserDataCreateWithoutUserListInput, UserDataUncheckedCreateWithoutUserListInput> | UserDataCreateWithoutUserListInput[] | UserDataUncheckedCreateWithoutUserListInput[]
    connectOrCreate?: UserDataCreateOrConnectWithoutUserListInput | UserDataCreateOrConnectWithoutUserListInput[]
    upsert?: UserDataUpsertWithWhereUniqueWithoutUserListInput | UserDataUpsertWithWhereUniqueWithoutUserListInput[]
    createMany?: UserDataCreateManyUserListInputEnvelope
    set?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    disconnect?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    delete?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    connect?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    update?: UserDataUpdateWithWhereUniqueWithoutUserListInput | UserDataUpdateWithWhereUniqueWithoutUserListInput[]
    updateMany?: UserDataUpdateManyWithWhereWithoutUserListInput | UserDataUpdateManyWithWhereWithoutUserListInput[]
    deleteMany?: UserDataScalarWhereInput | UserDataScalarWhereInput[]
  }

  export type WarmingDataUncheckedUpdateManyWithoutUserListNestedInput = {
    create?: XOR<WarmingDataCreateWithoutUserListInput, WarmingDataUncheckedCreateWithoutUserListInput> | WarmingDataCreateWithoutUserListInput[] | WarmingDataUncheckedCreateWithoutUserListInput[]
    connectOrCreate?: WarmingDataCreateOrConnectWithoutUserListInput | WarmingDataCreateOrConnectWithoutUserListInput[]
    upsert?: WarmingDataUpsertWithWhereUniqueWithoutUserListInput | WarmingDataUpsertWithWhereUniqueWithoutUserListInput[]
    createMany?: WarmingDataCreateManyUserListInputEnvelope
    set?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    disconnect?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    delete?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    connect?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    update?: WarmingDataUpdateWithWhereUniqueWithoutUserListInput | WarmingDataUpdateWithWhereUniqueWithoutUserListInput[]
    updateMany?: WarmingDataUpdateManyWithWhereWithoutUserListInput | WarmingDataUpdateManyWithWhereWithoutUserListInput[]
    deleteMany?: WarmingDataScalarWhereInput | WarmingDataScalarWhereInput[]
  }

  export type ChatUserListCreateNestedOneWithoutUsersInput = {
    create?: XOR<ChatUserListCreateWithoutUsersInput, ChatUserListUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ChatUserListCreateOrConnectWithoutUsersInput
    connect?: ChatUserListWhereUniqueInput
  }

  export type ChatUserListUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ChatUserListCreateWithoutUsersInput, ChatUserListUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ChatUserListCreateOrConnectWithoutUsersInput
    upsert?: ChatUserListUpsertWithoutUsersInput
    connect?: ChatUserListWhereUniqueInput
    update?: XOR<XOR<ChatUserListUpdateToOneWithWhereWithoutUsersInput, ChatUserListUpdateWithoutUsersInput>, ChatUserListUncheckedUpdateWithoutUsersInput>
  }

  export type Tg_accountCreateNestedOneWithoutWarmingDataInput = {
    create?: XOR<Tg_accountCreateWithoutWarmingDataInput, Tg_accountUncheckedCreateWithoutWarmingDataInput>
    connectOrCreate?: Tg_accountCreateOrConnectWithoutWarmingDataInput
    connect?: Tg_accountWhereUniqueInput
  }

  export type ChatUserListCreateNestedOneWithoutWarmingDataInput = {
    create?: XOR<ChatUserListCreateWithoutWarmingDataInput, ChatUserListUncheckedCreateWithoutWarmingDataInput>
    connectOrCreate?: ChatUserListCreateOrConnectWithoutWarmingDataInput
    connect?: ChatUserListWhereUniqueInput
  }

  export type FakeUserRoleCreateNestedOneWithoutWarmingDataInput = {
    create?: XOR<FakeUserRoleCreateWithoutWarmingDataInput, FakeUserRoleUncheckedCreateWithoutWarmingDataInput>
    connectOrCreate?: FakeUserRoleCreateOrConnectWithoutWarmingDataInput
    connect?: FakeUserRoleWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Tg_accountUpdateOneRequiredWithoutWarmingDataNestedInput = {
    create?: XOR<Tg_accountCreateWithoutWarmingDataInput, Tg_accountUncheckedCreateWithoutWarmingDataInput>
    connectOrCreate?: Tg_accountCreateOrConnectWithoutWarmingDataInput
    upsert?: Tg_accountUpsertWithoutWarmingDataInput
    connect?: Tg_accountWhereUniqueInput
    update?: XOR<XOR<Tg_accountUpdateToOneWithWhereWithoutWarmingDataInput, Tg_accountUpdateWithoutWarmingDataInput>, Tg_accountUncheckedUpdateWithoutWarmingDataInput>
  }

  export type ChatUserListUpdateOneRequiredWithoutWarmingDataNestedInput = {
    create?: XOR<ChatUserListCreateWithoutWarmingDataInput, ChatUserListUncheckedCreateWithoutWarmingDataInput>
    connectOrCreate?: ChatUserListCreateOrConnectWithoutWarmingDataInput
    upsert?: ChatUserListUpsertWithoutWarmingDataInput
    connect?: ChatUserListWhereUniqueInput
    update?: XOR<XOR<ChatUserListUpdateToOneWithWhereWithoutWarmingDataInput, ChatUserListUpdateWithoutWarmingDataInput>, ChatUserListUncheckedUpdateWithoutWarmingDataInput>
  }

  export type FakeUserRoleUpdateOneRequiredWithoutWarmingDataNestedInput = {
    create?: XOR<FakeUserRoleCreateWithoutWarmingDataInput, FakeUserRoleUncheckedCreateWithoutWarmingDataInput>
    connectOrCreate?: FakeUserRoleCreateOrConnectWithoutWarmingDataInput
    upsert?: FakeUserRoleUpsertWithoutWarmingDataInput
    connect?: FakeUserRoleWhereUniqueInput
    update?: XOR<XOR<FakeUserRoleUpdateToOneWithWhereWithoutWarmingDataInput, FakeUserRoleUpdateWithoutWarmingDataInput>, FakeUserRoleUncheckedUpdateWithoutWarmingDataInput>
  }

  export type WarmingDataCreateNestedManyWithoutFakeUserRoleInput = {
    create?: XOR<WarmingDataCreateWithoutFakeUserRoleInput, WarmingDataUncheckedCreateWithoutFakeUserRoleInput> | WarmingDataCreateWithoutFakeUserRoleInput[] | WarmingDataUncheckedCreateWithoutFakeUserRoleInput[]
    connectOrCreate?: WarmingDataCreateOrConnectWithoutFakeUserRoleInput | WarmingDataCreateOrConnectWithoutFakeUserRoleInput[]
    createMany?: WarmingDataCreateManyFakeUserRoleInputEnvelope
    connect?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
  }

  export type WarmingDataUncheckedCreateNestedManyWithoutFakeUserRoleInput = {
    create?: XOR<WarmingDataCreateWithoutFakeUserRoleInput, WarmingDataUncheckedCreateWithoutFakeUserRoleInput> | WarmingDataCreateWithoutFakeUserRoleInput[] | WarmingDataUncheckedCreateWithoutFakeUserRoleInput[]
    connectOrCreate?: WarmingDataCreateOrConnectWithoutFakeUserRoleInput | WarmingDataCreateOrConnectWithoutFakeUserRoleInput[]
    createMany?: WarmingDataCreateManyFakeUserRoleInputEnvelope
    connect?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
  }

  export type WarmingDataUpdateManyWithoutFakeUserRoleNestedInput = {
    create?: XOR<WarmingDataCreateWithoutFakeUserRoleInput, WarmingDataUncheckedCreateWithoutFakeUserRoleInput> | WarmingDataCreateWithoutFakeUserRoleInput[] | WarmingDataUncheckedCreateWithoutFakeUserRoleInput[]
    connectOrCreate?: WarmingDataCreateOrConnectWithoutFakeUserRoleInput | WarmingDataCreateOrConnectWithoutFakeUserRoleInput[]
    upsert?: WarmingDataUpsertWithWhereUniqueWithoutFakeUserRoleInput | WarmingDataUpsertWithWhereUniqueWithoutFakeUserRoleInput[]
    createMany?: WarmingDataCreateManyFakeUserRoleInputEnvelope
    set?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    disconnect?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    delete?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    connect?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    update?: WarmingDataUpdateWithWhereUniqueWithoutFakeUserRoleInput | WarmingDataUpdateWithWhereUniqueWithoutFakeUserRoleInput[]
    updateMany?: WarmingDataUpdateManyWithWhereWithoutFakeUserRoleInput | WarmingDataUpdateManyWithWhereWithoutFakeUserRoleInput[]
    deleteMany?: WarmingDataScalarWhereInput | WarmingDataScalarWhereInput[]
  }

  export type WarmingDataUncheckedUpdateManyWithoutFakeUserRoleNestedInput = {
    create?: XOR<WarmingDataCreateWithoutFakeUserRoleInput, WarmingDataUncheckedCreateWithoutFakeUserRoleInput> | WarmingDataCreateWithoutFakeUserRoleInput[] | WarmingDataUncheckedCreateWithoutFakeUserRoleInput[]
    connectOrCreate?: WarmingDataCreateOrConnectWithoutFakeUserRoleInput | WarmingDataCreateOrConnectWithoutFakeUserRoleInput[]
    upsert?: WarmingDataUpsertWithWhereUniqueWithoutFakeUserRoleInput | WarmingDataUpsertWithWhereUniqueWithoutFakeUserRoleInput[]
    createMany?: WarmingDataCreateManyFakeUserRoleInputEnvelope
    set?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    disconnect?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    delete?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    connect?: WarmingDataWhereUniqueInput | WarmingDataWhereUniqueInput[]
    update?: WarmingDataUpdateWithWhereUniqueWithoutFakeUserRoleInput | WarmingDataUpdateWithWhereUniqueWithoutFakeUserRoleInput[]
    updateMany?: WarmingDataUpdateManyWithWhereWithoutFakeUserRoleInput | WarmingDataUpdateManyWithWhereWithoutFakeUserRoleInput[]
    deleteMany?: WarmingDataScalarWhereInput | WarmingDataScalarWhereInput[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type SessionCreateWithoutTg_accountInput = {
    sessionString: string
    apiId: string
    apiHash: string
  }

  export type SessionUncheckedCreateWithoutTg_accountInput = {
    id?: number
    sessionString: string
    apiId: string
    apiHash: string
  }

  export type SessionCreateOrConnectWithoutTg_accountInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutTg_accountInput, SessionUncheckedCreateWithoutTg_accountInput>
  }

  export type ChatUserListCreateWithoutTg_accountInput = {
    name: string
    users?: UserDataCreateNestedManyWithoutUserListInput
    warmingData?: WarmingDataCreateNestedManyWithoutUserListInput
  }

  export type ChatUserListUncheckedCreateWithoutTg_accountInput = {
    id?: number
    name: string
    users?: UserDataUncheckedCreateNestedManyWithoutUserListInput
    warmingData?: WarmingDataUncheckedCreateNestedManyWithoutUserListInput
  }

  export type ChatUserListCreateOrConnectWithoutTg_accountInput = {
    where: ChatUserListWhereUniqueInput
    create: XOR<ChatUserListCreateWithoutTg_accountInput, ChatUserListUncheckedCreateWithoutTg_accountInput>
  }

  export type ChatUserListCreateManyTg_accountInputEnvelope = {
    data: ChatUserListCreateManyTg_accountInput | ChatUserListCreateManyTg_accountInput[]
    skipDuplicates?: boolean
  }

  export type WarmingDataCreateWithoutTg_accountInput = {
    timeLastStep?: Date | string
    timeStop: Date | string
    stepCounter?: number
    messagesCounter?: number
    answersCounter?: number
    reactionsCounter?: number
    commentsCounter?: number
    messagesPerHour: number
    answersPerHour: number
    reactionsPerHour: number
    commentsPerHour: number
    startDelay: number
    userList: ChatUserListCreateNestedOneWithoutWarmingDataInput
    fakeUserRole: FakeUserRoleCreateNestedOneWithoutWarmingDataInput
  }

  export type WarmingDataUncheckedCreateWithoutTg_accountInput = {
    id?: number
    userListId: number
    fakeUserRoleId: number
    timeLastStep?: Date | string
    timeStop: Date | string
    stepCounter?: number
    messagesCounter?: number
    answersCounter?: number
    reactionsCounter?: number
    commentsCounter?: number
    messagesPerHour: number
    answersPerHour: number
    reactionsPerHour: number
    commentsPerHour: number
    startDelay: number
  }

  export type WarmingDataCreateOrConnectWithoutTg_accountInput = {
    where: WarmingDataWhereUniqueInput
    create: XOR<WarmingDataCreateWithoutTg_accountInput, WarmingDataUncheckedCreateWithoutTg_accountInput>
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

  export type SessionUpsertWithoutTg_accountInput = {
    update: XOR<SessionUpdateWithoutTg_accountInput, SessionUncheckedUpdateWithoutTg_accountInput>
    create: XOR<SessionCreateWithoutTg_accountInput, SessionUncheckedCreateWithoutTg_accountInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutTg_accountInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutTg_accountInput, SessionUncheckedUpdateWithoutTg_accountInput>
  }

  export type SessionUpdateWithoutTg_accountInput = {
    sessionString?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    apiHash?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUncheckedUpdateWithoutTg_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionString?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    apiHash?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUserListUpsertWithWhereUniqueWithoutTg_accountInput = {
    where: ChatUserListWhereUniqueInput
    update: XOR<ChatUserListUpdateWithoutTg_accountInput, ChatUserListUncheckedUpdateWithoutTg_accountInput>
    create: XOR<ChatUserListCreateWithoutTg_accountInput, ChatUserListUncheckedCreateWithoutTg_accountInput>
  }

  export type ChatUserListUpdateWithWhereUniqueWithoutTg_accountInput = {
    where: ChatUserListWhereUniqueInput
    data: XOR<ChatUserListUpdateWithoutTg_accountInput, ChatUserListUncheckedUpdateWithoutTg_accountInput>
  }

  export type ChatUserListUpdateManyWithWhereWithoutTg_accountInput = {
    where: ChatUserListScalarWhereInput
    data: XOR<ChatUserListUpdateManyMutationInput, ChatUserListUncheckedUpdateManyWithoutTg_accountInput>
  }

  export type ChatUserListScalarWhereInput = {
    AND?: ChatUserListScalarWhereInput | ChatUserListScalarWhereInput[]
    OR?: ChatUserListScalarWhereInput[]
    NOT?: ChatUserListScalarWhereInput | ChatUserListScalarWhereInput[]
    id?: IntFilter<"ChatUserList"> | number
    name?: StringFilter<"ChatUserList"> | string
    tg_accountId?: IntFilter<"ChatUserList"> | number
  }

  export type WarmingDataUpsertWithoutTg_accountInput = {
    update: XOR<WarmingDataUpdateWithoutTg_accountInput, WarmingDataUncheckedUpdateWithoutTg_accountInput>
    create: XOR<WarmingDataCreateWithoutTg_accountInput, WarmingDataUncheckedCreateWithoutTg_accountInput>
    where?: WarmingDataWhereInput
  }

  export type WarmingDataUpdateToOneWithWhereWithoutTg_accountInput = {
    where?: WarmingDataWhereInput
    data: XOR<WarmingDataUpdateWithoutTg_accountInput, WarmingDataUncheckedUpdateWithoutTg_accountInput>
  }

  export type WarmingDataUpdateWithoutTg_accountInput = {
    timeLastStep?: DateTimeFieldUpdateOperationsInput | Date | string
    timeStop?: DateTimeFieldUpdateOperationsInput | Date | string
    stepCounter?: IntFieldUpdateOperationsInput | number
    messagesCounter?: IntFieldUpdateOperationsInput | number
    answersCounter?: IntFieldUpdateOperationsInput | number
    reactionsCounter?: IntFieldUpdateOperationsInput | number
    commentsCounter?: IntFieldUpdateOperationsInput | number
    messagesPerHour?: IntFieldUpdateOperationsInput | number
    answersPerHour?: IntFieldUpdateOperationsInput | number
    reactionsPerHour?: IntFieldUpdateOperationsInput | number
    commentsPerHour?: IntFieldUpdateOperationsInput | number
    startDelay?: IntFieldUpdateOperationsInput | number
    userList?: ChatUserListUpdateOneRequiredWithoutWarmingDataNestedInput
    fakeUserRole?: FakeUserRoleUpdateOneRequiredWithoutWarmingDataNestedInput
  }

  export type WarmingDataUncheckedUpdateWithoutTg_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userListId?: IntFieldUpdateOperationsInput | number
    fakeUserRoleId?: IntFieldUpdateOperationsInput | number
    timeLastStep?: DateTimeFieldUpdateOperationsInput | Date | string
    timeStop?: DateTimeFieldUpdateOperationsInput | Date | string
    stepCounter?: IntFieldUpdateOperationsInput | number
    messagesCounter?: IntFieldUpdateOperationsInput | number
    answersCounter?: IntFieldUpdateOperationsInput | number
    reactionsCounter?: IntFieldUpdateOperationsInput | number
    commentsCounter?: IntFieldUpdateOperationsInput | number
    messagesPerHour?: IntFieldUpdateOperationsInput | number
    answersPerHour?: IntFieldUpdateOperationsInput | number
    reactionsPerHour?: IntFieldUpdateOperationsInput | number
    commentsPerHour?: IntFieldUpdateOperationsInput | number
    startDelay?: IntFieldUpdateOperationsInput | number
  }

  export type Tg_accountCreateWithoutSessionInput = {
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    proxy?: ProxyCreateNestedOneWithoutTg_accountInput
    comments?: CommentCreateNestedManyWithoutAccountInput
    ChatUserList?: ChatUserListCreateNestedManyWithoutTg_accountInput
    warmingData?: WarmingDataCreateNestedOneWithoutTg_accountInput
  }

  export type Tg_accountUncheckedCreateWithoutSessionInput = {
    id?: number
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    proxyId?: number | null
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput
    ChatUserList?: ChatUserListUncheckedCreateNestedManyWithoutTg_accountInput
    warmingData?: WarmingDataUncheckedCreateNestedOneWithoutTg_accountInput
  }

  export type Tg_accountCreateOrConnectWithoutSessionInput = {
    where: Tg_accountWhereUniqueInput
    create: XOR<Tg_accountCreateWithoutSessionInput, Tg_accountUncheckedCreateWithoutSessionInput>
  }

  export type Tg_accountUpsertWithoutSessionInput = {
    update: XOR<Tg_accountUpdateWithoutSessionInput, Tg_accountUncheckedUpdateWithoutSessionInput>
    create: XOR<Tg_accountCreateWithoutSessionInput, Tg_accountUncheckedCreateWithoutSessionInput>
    where?: Tg_accountWhereInput
  }

  export type Tg_accountUpdateToOneWithWhereWithoutSessionInput = {
    where?: Tg_accountWhereInput
    data: XOR<Tg_accountUpdateWithoutSessionInput, Tg_accountUncheckedUpdateWithoutSessionInput>
  }

  export type Tg_accountUpdateWithoutSessionInput = {
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    proxy?: ProxyUpdateOneWithoutTg_accountNestedInput
    comments?: CommentUpdateManyWithoutAccountNestedInput
    ChatUserList?: ChatUserListUpdateManyWithoutTg_accountNestedInput
    warmingData?: WarmingDataUpdateOneWithoutTg_accountNestedInput
  }

  export type Tg_accountUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    proxyId?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput
    ChatUserList?: ChatUserListUncheckedUpdateManyWithoutTg_accountNestedInput
    warmingData?: WarmingDataUncheckedUpdateOneWithoutTg_accountNestedInput
  }

  export type Tg_accountCreateWithoutCommentsInput = {
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    proxy?: ProxyCreateNestedOneWithoutTg_accountInput
    session?: SessionCreateNestedOneWithoutTg_accountInput
    ChatUserList?: ChatUserListCreateNestedManyWithoutTg_accountInput
    warmingData?: WarmingDataCreateNestedOneWithoutTg_accountInput
  }

  export type Tg_accountUncheckedCreateWithoutCommentsInput = {
    id?: number
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    proxyId?: number | null
    sessionId?: number | null
    ChatUserList?: ChatUserListUncheckedCreateNestedManyWithoutTg_accountInput
    warmingData?: WarmingDataUncheckedCreateNestedOneWithoutTg_accountInput
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
    proxy?: ProxyUpdateOneWithoutTg_accountNestedInput
    session?: SessionUpdateOneWithoutTg_accountNestedInput
    ChatUserList?: ChatUserListUpdateManyWithoutTg_accountNestedInput
    warmingData?: WarmingDataUpdateOneWithoutTg_accountNestedInput
  }

  export type Tg_accountUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    proxyId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    ChatUserList?: ChatUserListUncheckedUpdateManyWithoutTg_accountNestedInput
    warmingData?: WarmingDataUncheckedUpdateOneWithoutTg_accountNestedInput
  }

  export type Tg_accountCreateWithoutProxyInput = {
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    comments?: CommentCreateNestedManyWithoutAccountInput
    session?: SessionCreateNestedOneWithoutTg_accountInput
    ChatUserList?: ChatUserListCreateNestedManyWithoutTg_accountInput
    warmingData?: WarmingDataCreateNestedOneWithoutTg_accountInput
  }

  export type Tg_accountUncheckedCreateWithoutProxyInput = {
    id?: number
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    sessionId?: number | null
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput
    ChatUserList?: ChatUserListUncheckedCreateNestedManyWithoutTg_accountInput
    warmingData?: WarmingDataUncheckedCreateNestedOneWithoutTg_accountInput
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
    comments?: CommentUpdateManyWithoutAccountNestedInput
    session?: SessionUpdateOneWithoutTg_accountNestedInput
    ChatUserList?: ChatUserListUpdateManyWithoutTg_accountNestedInput
    warmingData?: WarmingDataUpdateOneWithoutTg_accountNestedInput
  }

  export type Tg_accountUncheckedUpdateWithoutProxyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput
    ChatUserList?: ChatUserListUncheckedUpdateManyWithoutTg_accountNestedInput
    warmingData?: WarmingDataUncheckedUpdateOneWithoutTg_accountNestedInput
  }

  export type Tg_accountCreateWithoutChatUserListInput = {
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    proxy?: ProxyCreateNestedOneWithoutTg_accountInput
    comments?: CommentCreateNestedManyWithoutAccountInput
    session?: SessionCreateNestedOneWithoutTg_accountInput
    warmingData?: WarmingDataCreateNestedOneWithoutTg_accountInput
  }

  export type Tg_accountUncheckedCreateWithoutChatUserListInput = {
    id?: number
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    proxyId?: number | null
    sessionId?: number | null
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput
    warmingData?: WarmingDataUncheckedCreateNestedOneWithoutTg_accountInput
  }

  export type Tg_accountCreateOrConnectWithoutChatUserListInput = {
    where: Tg_accountWhereUniqueInput
    create: XOR<Tg_accountCreateWithoutChatUserListInput, Tg_accountUncheckedCreateWithoutChatUserListInput>
  }

  export type UserDataCreateWithoutUserListInput = {
    username?: string | null
    phone?: string | null
  }

  export type UserDataUncheckedCreateWithoutUserListInput = {
    id?: number
    username?: string | null
    phone?: string | null
  }

  export type UserDataCreateOrConnectWithoutUserListInput = {
    where: UserDataWhereUniqueInput
    create: XOR<UserDataCreateWithoutUserListInput, UserDataUncheckedCreateWithoutUserListInput>
  }

  export type UserDataCreateManyUserListInputEnvelope = {
    data: UserDataCreateManyUserListInput | UserDataCreateManyUserListInput[]
    skipDuplicates?: boolean
  }

  export type WarmingDataCreateWithoutUserListInput = {
    timeLastStep?: Date | string
    timeStop: Date | string
    stepCounter?: number
    messagesCounter?: number
    answersCounter?: number
    reactionsCounter?: number
    commentsCounter?: number
    messagesPerHour: number
    answersPerHour: number
    reactionsPerHour: number
    commentsPerHour: number
    startDelay: number
    tg_account: Tg_accountCreateNestedOneWithoutWarmingDataInput
    fakeUserRole: FakeUserRoleCreateNestedOneWithoutWarmingDataInput
  }

  export type WarmingDataUncheckedCreateWithoutUserListInput = {
    id?: number
    tg_accountId: number
    fakeUserRoleId: number
    timeLastStep?: Date | string
    timeStop: Date | string
    stepCounter?: number
    messagesCounter?: number
    answersCounter?: number
    reactionsCounter?: number
    commentsCounter?: number
    messagesPerHour: number
    answersPerHour: number
    reactionsPerHour: number
    commentsPerHour: number
    startDelay: number
  }

  export type WarmingDataCreateOrConnectWithoutUserListInput = {
    where: WarmingDataWhereUniqueInput
    create: XOR<WarmingDataCreateWithoutUserListInput, WarmingDataUncheckedCreateWithoutUserListInput>
  }

  export type WarmingDataCreateManyUserListInputEnvelope = {
    data: WarmingDataCreateManyUserListInput | WarmingDataCreateManyUserListInput[]
    skipDuplicates?: boolean
  }

  export type Tg_accountUpsertWithoutChatUserListInput = {
    update: XOR<Tg_accountUpdateWithoutChatUserListInput, Tg_accountUncheckedUpdateWithoutChatUserListInput>
    create: XOR<Tg_accountCreateWithoutChatUserListInput, Tg_accountUncheckedCreateWithoutChatUserListInput>
    where?: Tg_accountWhereInput
  }

  export type Tg_accountUpdateToOneWithWhereWithoutChatUserListInput = {
    where?: Tg_accountWhereInput
    data: XOR<Tg_accountUpdateWithoutChatUserListInput, Tg_accountUncheckedUpdateWithoutChatUserListInput>
  }

  export type Tg_accountUpdateWithoutChatUserListInput = {
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    proxy?: ProxyUpdateOneWithoutTg_accountNestedInput
    comments?: CommentUpdateManyWithoutAccountNestedInput
    session?: SessionUpdateOneWithoutTg_accountNestedInput
    warmingData?: WarmingDataUpdateOneWithoutTg_accountNestedInput
  }

  export type Tg_accountUncheckedUpdateWithoutChatUserListInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    proxyId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput
    warmingData?: WarmingDataUncheckedUpdateOneWithoutTg_accountNestedInput
  }

  export type UserDataUpsertWithWhereUniqueWithoutUserListInput = {
    where: UserDataWhereUniqueInput
    update: XOR<UserDataUpdateWithoutUserListInput, UserDataUncheckedUpdateWithoutUserListInput>
    create: XOR<UserDataCreateWithoutUserListInput, UserDataUncheckedCreateWithoutUserListInput>
  }

  export type UserDataUpdateWithWhereUniqueWithoutUserListInput = {
    where: UserDataWhereUniqueInput
    data: XOR<UserDataUpdateWithoutUserListInput, UserDataUncheckedUpdateWithoutUserListInput>
  }

  export type UserDataUpdateManyWithWhereWithoutUserListInput = {
    where: UserDataScalarWhereInput
    data: XOR<UserDataUpdateManyMutationInput, UserDataUncheckedUpdateManyWithoutUserListInput>
  }

  export type UserDataScalarWhereInput = {
    AND?: UserDataScalarWhereInput | UserDataScalarWhereInput[]
    OR?: UserDataScalarWhereInput[]
    NOT?: UserDataScalarWhereInput | UserDataScalarWhereInput[]
    id?: IntFilter<"UserData"> | number
    userListId?: IntFilter<"UserData"> | number
    username?: StringNullableFilter<"UserData"> | string | null
    phone?: StringNullableFilter<"UserData"> | string | null
  }

  export type WarmingDataUpsertWithWhereUniqueWithoutUserListInput = {
    where: WarmingDataWhereUniqueInput
    update: XOR<WarmingDataUpdateWithoutUserListInput, WarmingDataUncheckedUpdateWithoutUserListInput>
    create: XOR<WarmingDataCreateWithoutUserListInput, WarmingDataUncheckedCreateWithoutUserListInput>
  }

  export type WarmingDataUpdateWithWhereUniqueWithoutUserListInput = {
    where: WarmingDataWhereUniqueInput
    data: XOR<WarmingDataUpdateWithoutUserListInput, WarmingDataUncheckedUpdateWithoutUserListInput>
  }

  export type WarmingDataUpdateManyWithWhereWithoutUserListInput = {
    where: WarmingDataScalarWhereInput
    data: XOR<WarmingDataUpdateManyMutationInput, WarmingDataUncheckedUpdateManyWithoutUserListInput>
  }

  export type WarmingDataScalarWhereInput = {
    AND?: WarmingDataScalarWhereInput | WarmingDataScalarWhereInput[]
    OR?: WarmingDataScalarWhereInput[]
    NOT?: WarmingDataScalarWhereInput | WarmingDataScalarWhereInput[]
    id?: IntFilter<"WarmingData"> | number
    tg_accountId?: IntFilter<"WarmingData"> | number
    userListId?: IntFilter<"WarmingData"> | number
    fakeUserRoleId?: IntFilter<"WarmingData"> | number
    timeLastStep?: DateTimeFilter<"WarmingData"> | Date | string
    timeStop?: DateTimeFilter<"WarmingData"> | Date | string
    stepCounter?: IntFilter<"WarmingData"> | number
    messagesCounter?: IntFilter<"WarmingData"> | number
    answersCounter?: IntFilter<"WarmingData"> | number
    reactionsCounter?: IntFilter<"WarmingData"> | number
    commentsCounter?: IntFilter<"WarmingData"> | number
    messagesPerHour?: IntFilter<"WarmingData"> | number
    answersPerHour?: IntFilter<"WarmingData"> | number
    reactionsPerHour?: IntFilter<"WarmingData"> | number
    commentsPerHour?: IntFilter<"WarmingData"> | number
    startDelay?: IntFilter<"WarmingData"> | number
  }

  export type ChatUserListCreateWithoutUsersInput = {
    name: string
    tg_account: Tg_accountCreateNestedOneWithoutChatUserListInput
    warmingData?: WarmingDataCreateNestedManyWithoutUserListInput
  }

  export type ChatUserListUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    tg_accountId: number
    warmingData?: WarmingDataUncheckedCreateNestedManyWithoutUserListInput
  }

  export type ChatUserListCreateOrConnectWithoutUsersInput = {
    where: ChatUserListWhereUniqueInput
    create: XOR<ChatUserListCreateWithoutUsersInput, ChatUserListUncheckedCreateWithoutUsersInput>
  }

  export type ChatUserListUpsertWithoutUsersInput = {
    update: XOR<ChatUserListUpdateWithoutUsersInput, ChatUserListUncheckedUpdateWithoutUsersInput>
    create: XOR<ChatUserListCreateWithoutUsersInput, ChatUserListUncheckedCreateWithoutUsersInput>
    where?: ChatUserListWhereInput
  }

  export type ChatUserListUpdateToOneWithWhereWithoutUsersInput = {
    where?: ChatUserListWhereInput
    data: XOR<ChatUserListUpdateWithoutUsersInput, ChatUserListUncheckedUpdateWithoutUsersInput>
  }

  export type ChatUserListUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    tg_account?: Tg_accountUpdateOneRequiredWithoutChatUserListNestedInput
    warmingData?: WarmingDataUpdateManyWithoutUserListNestedInput
  }

  export type ChatUserListUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tg_accountId?: IntFieldUpdateOperationsInput | number
    warmingData?: WarmingDataUncheckedUpdateManyWithoutUserListNestedInput
  }

  export type Tg_accountCreateWithoutWarmingDataInput = {
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    proxy?: ProxyCreateNestedOneWithoutTg_accountInput
    comments?: CommentCreateNestedManyWithoutAccountInput
    session?: SessionCreateNestedOneWithoutTg_accountInput
    ChatUserList?: ChatUserListCreateNestedManyWithoutTg_accountInput
  }

  export type Tg_accountUncheckedCreateWithoutWarmingDataInput = {
    id?: number
    phone: string
    username: string
    firstname: string
    lastname?: string | null
    proxyId?: number | null
    sessionId?: number | null
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput
    ChatUserList?: ChatUserListUncheckedCreateNestedManyWithoutTg_accountInput
  }

  export type Tg_accountCreateOrConnectWithoutWarmingDataInput = {
    where: Tg_accountWhereUniqueInput
    create: XOR<Tg_accountCreateWithoutWarmingDataInput, Tg_accountUncheckedCreateWithoutWarmingDataInput>
  }

  export type ChatUserListCreateWithoutWarmingDataInput = {
    name: string
    tg_account: Tg_accountCreateNestedOneWithoutChatUserListInput
    users?: UserDataCreateNestedManyWithoutUserListInput
  }

  export type ChatUserListUncheckedCreateWithoutWarmingDataInput = {
    id?: number
    name: string
    tg_accountId: number
    users?: UserDataUncheckedCreateNestedManyWithoutUserListInput
  }

  export type ChatUserListCreateOrConnectWithoutWarmingDataInput = {
    where: ChatUserListWhereUniqueInput
    create: XOR<ChatUserListCreateWithoutWarmingDataInput, ChatUserListUncheckedCreateWithoutWarmingDataInput>
  }

  export type FakeUserRoleCreateWithoutWarmingDataInput = {
    role: string
    description: string
  }

  export type FakeUserRoleUncheckedCreateWithoutWarmingDataInput = {
    id?: number
    role: string
    description: string
  }

  export type FakeUserRoleCreateOrConnectWithoutWarmingDataInput = {
    where: FakeUserRoleWhereUniqueInput
    create: XOR<FakeUserRoleCreateWithoutWarmingDataInput, FakeUserRoleUncheckedCreateWithoutWarmingDataInput>
  }

  export type Tg_accountUpsertWithoutWarmingDataInput = {
    update: XOR<Tg_accountUpdateWithoutWarmingDataInput, Tg_accountUncheckedUpdateWithoutWarmingDataInput>
    create: XOR<Tg_accountCreateWithoutWarmingDataInput, Tg_accountUncheckedCreateWithoutWarmingDataInput>
    where?: Tg_accountWhereInput
  }

  export type Tg_accountUpdateToOneWithWhereWithoutWarmingDataInput = {
    where?: Tg_accountWhereInput
    data: XOR<Tg_accountUpdateWithoutWarmingDataInput, Tg_accountUncheckedUpdateWithoutWarmingDataInput>
  }

  export type Tg_accountUpdateWithoutWarmingDataInput = {
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    proxy?: ProxyUpdateOneWithoutTg_accountNestedInput
    comments?: CommentUpdateManyWithoutAccountNestedInput
    session?: SessionUpdateOneWithoutTg_accountNestedInput
    ChatUserList?: ChatUserListUpdateManyWithoutTg_accountNestedInput
  }

  export type Tg_accountUncheckedUpdateWithoutWarmingDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    proxyId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput
    ChatUserList?: ChatUserListUncheckedUpdateManyWithoutTg_accountNestedInput
  }

  export type ChatUserListUpsertWithoutWarmingDataInput = {
    update: XOR<ChatUserListUpdateWithoutWarmingDataInput, ChatUserListUncheckedUpdateWithoutWarmingDataInput>
    create: XOR<ChatUserListCreateWithoutWarmingDataInput, ChatUserListUncheckedCreateWithoutWarmingDataInput>
    where?: ChatUserListWhereInput
  }

  export type ChatUserListUpdateToOneWithWhereWithoutWarmingDataInput = {
    where?: ChatUserListWhereInput
    data: XOR<ChatUserListUpdateWithoutWarmingDataInput, ChatUserListUncheckedUpdateWithoutWarmingDataInput>
  }

  export type ChatUserListUpdateWithoutWarmingDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    tg_account?: Tg_accountUpdateOneRequiredWithoutChatUserListNestedInput
    users?: UserDataUpdateManyWithoutUserListNestedInput
  }

  export type ChatUserListUncheckedUpdateWithoutWarmingDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tg_accountId?: IntFieldUpdateOperationsInput | number
    users?: UserDataUncheckedUpdateManyWithoutUserListNestedInput
  }

  export type FakeUserRoleUpsertWithoutWarmingDataInput = {
    update: XOR<FakeUserRoleUpdateWithoutWarmingDataInput, FakeUserRoleUncheckedUpdateWithoutWarmingDataInput>
    create: XOR<FakeUserRoleCreateWithoutWarmingDataInput, FakeUserRoleUncheckedCreateWithoutWarmingDataInput>
    where?: FakeUserRoleWhereInput
  }

  export type FakeUserRoleUpdateToOneWithWhereWithoutWarmingDataInput = {
    where?: FakeUserRoleWhereInput
    data: XOR<FakeUserRoleUpdateWithoutWarmingDataInput, FakeUserRoleUncheckedUpdateWithoutWarmingDataInput>
  }

  export type FakeUserRoleUpdateWithoutWarmingDataInput = {
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FakeUserRoleUncheckedUpdateWithoutWarmingDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WarmingDataCreateWithoutFakeUserRoleInput = {
    timeLastStep?: Date | string
    timeStop: Date | string
    stepCounter?: number
    messagesCounter?: number
    answersCounter?: number
    reactionsCounter?: number
    commentsCounter?: number
    messagesPerHour: number
    answersPerHour: number
    reactionsPerHour: number
    commentsPerHour: number
    startDelay: number
    tg_account: Tg_accountCreateNestedOneWithoutWarmingDataInput
    userList: ChatUserListCreateNestedOneWithoutWarmingDataInput
  }

  export type WarmingDataUncheckedCreateWithoutFakeUserRoleInput = {
    id?: number
    tg_accountId: number
    userListId: number
    timeLastStep?: Date | string
    timeStop: Date | string
    stepCounter?: number
    messagesCounter?: number
    answersCounter?: number
    reactionsCounter?: number
    commentsCounter?: number
    messagesPerHour: number
    answersPerHour: number
    reactionsPerHour: number
    commentsPerHour: number
    startDelay: number
  }

  export type WarmingDataCreateOrConnectWithoutFakeUserRoleInput = {
    where: WarmingDataWhereUniqueInput
    create: XOR<WarmingDataCreateWithoutFakeUserRoleInput, WarmingDataUncheckedCreateWithoutFakeUserRoleInput>
  }

  export type WarmingDataCreateManyFakeUserRoleInputEnvelope = {
    data: WarmingDataCreateManyFakeUserRoleInput | WarmingDataCreateManyFakeUserRoleInput[]
    skipDuplicates?: boolean
  }

  export type WarmingDataUpsertWithWhereUniqueWithoutFakeUserRoleInput = {
    where: WarmingDataWhereUniqueInput
    update: XOR<WarmingDataUpdateWithoutFakeUserRoleInput, WarmingDataUncheckedUpdateWithoutFakeUserRoleInput>
    create: XOR<WarmingDataCreateWithoutFakeUserRoleInput, WarmingDataUncheckedCreateWithoutFakeUserRoleInput>
  }

  export type WarmingDataUpdateWithWhereUniqueWithoutFakeUserRoleInput = {
    where: WarmingDataWhereUniqueInput
    data: XOR<WarmingDataUpdateWithoutFakeUserRoleInput, WarmingDataUncheckedUpdateWithoutFakeUserRoleInput>
  }

  export type WarmingDataUpdateManyWithWhereWithoutFakeUserRoleInput = {
    where: WarmingDataScalarWhereInput
    data: XOR<WarmingDataUpdateManyMutationInput, WarmingDataUncheckedUpdateManyWithoutFakeUserRoleInput>
  }

  export type CommentCreateManyAccountInput = {
    id?: number
    message: string
  }

  export type ChatUserListCreateManyTg_accountInput = {
    id?: number
    name: string
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

  export type ChatUserListUpdateWithoutTg_accountInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserDataUpdateManyWithoutUserListNestedInput
    warmingData?: WarmingDataUpdateManyWithoutUserListNestedInput
  }

  export type ChatUserListUncheckedUpdateWithoutTg_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserDataUncheckedUpdateManyWithoutUserListNestedInput
    warmingData?: WarmingDataUncheckedUpdateManyWithoutUserListNestedInput
  }

  export type ChatUserListUncheckedUpdateManyWithoutTg_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserDataCreateManyUserListInput = {
    id?: number
    username?: string | null
    phone?: string | null
  }

  export type WarmingDataCreateManyUserListInput = {
    id?: number
    tg_accountId: number
    fakeUserRoleId: number
    timeLastStep?: Date | string
    timeStop: Date | string
    stepCounter?: number
    messagesCounter?: number
    answersCounter?: number
    reactionsCounter?: number
    commentsCounter?: number
    messagesPerHour: number
    answersPerHour: number
    reactionsPerHour: number
    commentsPerHour: number
    startDelay: number
  }

  export type UserDataUpdateWithoutUserListInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDataUncheckedUpdateWithoutUserListInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDataUncheckedUpdateManyWithoutUserListInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WarmingDataUpdateWithoutUserListInput = {
    timeLastStep?: DateTimeFieldUpdateOperationsInput | Date | string
    timeStop?: DateTimeFieldUpdateOperationsInput | Date | string
    stepCounter?: IntFieldUpdateOperationsInput | number
    messagesCounter?: IntFieldUpdateOperationsInput | number
    answersCounter?: IntFieldUpdateOperationsInput | number
    reactionsCounter?: IntFieldUpdateOperationsInput | number
    commentsCounter?: IntFieldUpdateOperationsInput | number
    messagesPerHour?: IntFieldUpdateOperationsInput | number
    answersPerHour?: IntFieldUpdateOperationsInput | number
    reactionsPerHour?: IntFieldUpdateOperationsInput | number
    commentsPerHour?: IntFieldUpdateOperationsInput | number
    startDelay?: IntFieldUpdateOperationsInput | number
    tg_account?: Tg_accountUpdateOneRequiredWithoutWarmingDataNestedInput
    fakeUserRole?: FakeUserRoleUpdateOneRequiredWithoutWarmingDataNestedInput
  }

  export type WarmingDataUncheckedUpdateWithoutUserListInput = {
    id?: IntFieldUpdateOperationsInput | number
    tg_accountId?: IntFieldUpdateOperationsInput | number
    fakeUserRoleId?: IntFieldUpdateOperationsInput | number
    timeLastStep?: DateTimeFieldUpdateOperationsInput | Date | string
    timeStop?: DateTimeFieldUpdateOperationsInput | Date | string
    stepCounter?: IntFieldUpdateOperationsInput | number
    messagesCounter?: IntFieldUpdateOperationsInput | number
    answersCounter?: IntFieldUpdateOperationsInput | number
    reactionsCounter?: IntFieldUpdateOperationsInput | number
    commentsCounter?: IntFieldUpdateOperationsInput | number
    messagesPerHour?: IntFieldUpdateOperationsInput | number
    answersPerHour?: IntFieldUpdateOperationsInput | number
    reactionsPerHour?: IntFieldUpdateOperationsInput | number
    commentsPerHour?: IntFieldUpdateOperationsInput | number
    startDelay?: IntFieldUpdateOperationsInput | number
  }

  export type WarmingDataUncheckedUpdateManyWithoutUserListInput = {
    id?: IntFieldUpdateOperationsInput | number
    tg_accountId?: IntFieldUpdateOperationsInput | number
    fakeUserRoleId?: IntFieldUpdateOperationsInput | number
    timeLastStep?: DateTimeFieldUpdateOperationsInput | Date | string
    timeStop?: DateTimeFieldUpdateOperationsInput | Date | string
    stepCounter?: IntFieldUpdateOperationsInput | number
    messagesCounter?: IntFieldUpdateOperationsInput | number
    answersCounter?: IntFieldUpdateOperationsInput | number
    reactionsCounter?: IntFieldUpdateOperationsInput | number
    commentsCounter?: IntFieldUpdateOperationsInput | number
    messagesPerHour?: IntFieldUpdateOperationsInput | number
    answersPerHour?: IntFieldUpdateOperationsInput | number
    reactionsPerHour?: IntFieldUpdateOperationsInput | number
    commentsPerHour?: IntFieldUpdateOperationsInput | number
    startDelay?: IntFieldUpdateOperationsInput | number
  }

  export type WarmingDataCreateManyFakeUserRoleInput = {
    id?: number
    tg_accountId: number
    userListId: number
    timeLastStep?: Date | string
    timeStop: Date | string
    stepCounter?: number
    messagesCounter?: number
    answersCounter?: number
    reactionsCounter?: number
    commentsCounter?: number
    messagesPerHour: number
    answersPerHour: number
    reactionsPerHour: number
    commentsPerHour: number
    startDelay: number
  }

  export type WarmingDataUpdateWithoutFakeUserRoleInput = {
    timeLastStep?: DateTimeFieldUpdateOperationsInput | Date | string
    timeStop?: DateTimeFieldUpdateOperationsInput | Date | string
    stepCounter?: IntFieldUpdateOperationsInput | number
    messagesCounter?: IntFieldUpdateOperationsInput | number
    answersCounter?: IntFieldUpdateOperationsInput | number
    reactionsCounter?: IntFieldUpdateOperationsInput | number
    commentsCounter?: IntFieldUpdateOperationsInput | number
    messagesPerHour?: IntFieldUpdateOperationsInput | number
    answersPerHour?: IntFieldUpdateOperationsInput | number
    reactionsPerHour?: IntFieldUpdateOperationsInput | number
    commentsPerHour?: IntFieldUpdateOperationsInput | number
    startDelay?: IntFieldUpdateOperationsInput | number
    tg_account?: Tg_accountUpdateOneRequiredWithoutWarmingDataNestedInput
    userList?: ChatUserListUpdateOneRequiredWithoutWarmingDataNestedInput
  }

  export type WarmingDataUncheckedUpdateWithoutFakeUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    tg_accountId?: IntFieldUpdateOperationsInput | number
    userListId?: IntFieldUpdateOperationsInput | number
    timeLastStep?: DateTimeFieldUpdateOperationsInput | Date | string
    timeStop?: DateTimeFieldUpdateOperationsInput | Date | string
    stepCounter?: IntFieldUpdateOperationsInput | number
    messagesCounter?: IntFieldUpdateOperationsInput | number
    answersCounter?: IntFieldUpdateOperationsInput | number
    reactionsCounter?: IntFieldUpdateOperationsInput | number
    commentsCounter?: IntFieldUpdateOperationsInput | number
    messagesPerHour?: IntFieldUpdateOperationsInput | number
    answersPerHour?: IntFieldUpdateOperationsInput | number
    reactionsPerHour?: IntFieldUpdateOperationsInput | number
    commentsPerHour?: IntFieldUpdateOperationsInput | number
    startDelay?: IntFieldUpdateOperationsInput | number
  }

  export type WarmingDataUncheckedUpdateManyWithoutFakeUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    tg_accountId?: IntFieldUpdateOperationsInput | number
    userListId?: IntFieldUpdateOperationsInput | number
    timeLastStep?: DateTimeFieldUpdateOperationsInput | Date | string
    timeStop?: DateTimeFieldUpdateOperationsInput | Date | string
    stepCounter?: IntFieldUpdateOperationsInput | number
    messagesCounter?: IntFieldUpdateOperationsInput | number
    answersCounter?: IntFieldUpdateOperationsInput | number
    reactionsCounter?: IntFieldUpdateOperationsInput | number
    commentsCounter?: IntFieldUpdateOperationsInput | number
    messagesPerHour?: IntFieldUpdateOperationsInput | number
    answersPerHour?: IntFieldUpdateOperationsInput | number
    reactionsPerHour?: IntFieldUpdateOperationsInput | number
    commentsPerHour?: IntFieldUpdateOperationsInput | number
    startDelay?: IntFieldUpdateOperationsInput | number
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