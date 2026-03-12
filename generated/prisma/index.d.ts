
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model StaffSkill
 * 
 */
export type StaffSkill = $Result.DefaultSelection<Prisma.$StaffSkillPayload>
/**
 * Model Shift
 * 
 */
export type Shift = $Result.DefaultSelection<Prisma.$ShiftPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Certification
 * 
 */
export type Certification = $Result.DefaultSelection<Prisma.$CertificationPayload>
/**
 * Model ShiftAssignment
 * 
 */
export type ShiftAssignment = $Result.DefaultSelection<Prisma.$ShiftAssignmentPayload>
/**
 * Model SwapRequest
 * 
 */
export type SwapRequest = $Result.DefaultSelection<Prisma.$SwapRequestPayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  STAFF: 'STAFF'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SwapStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  MANAGER_APPROVED: 'MANAGER_APPROVED',
  CANCELLED: 'CANCELLED',
  REJECTED: 'REJECTED',
  EXPIRED: 'EXPIRED'
};

export type SwapStatus = (typeof SwapStatus)[keyof typeof SwapStatus]


export const ShiftStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  CANCELLED: 'CANCELLED'
};

export type ShiftStatus = (typeof ShiftStatus)[keyof typeof ShiftStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SwapStatus = $Enums.SwapStatus

export const SwapStatus: typeof $Enums.SwapStatus

export type ShiftStatus = $Enums.ShiftStatus

export const ShiftStatus: typeof $Enums.ShiftStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffSkill`: Exposes CRUD operations for the **StaffSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffSkills
    * const staffSkills = await prisma.staffSkill.findMany()
    * ```
    */
  get staffSkill(): Prisma.StaffSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shift`: Exposes CRUD operations for the **Shift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shifts
    * const shifts = await prisma.shift.findMany()
    * ```
    */
  get shift(): Prisma.ShiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certification`: Exposes CRUD operations for the **Certification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certifications
    * const certifications = await prisma.certification.findMany()
    * ```
    */
  get certification(): Prisma.CertificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shiftAssignment`: Exposes CRUD operations for the **ShiftAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftAssignments
    * const shiftAssignments = await prisma.shiftAssignment.findMany()
    * ```
    */
  get shiftAssignment(): Prisma.ShiftAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.swapRequest`: Exposes CRUD operations for the **SwapRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SwapRequests
    * const swapRequests = await prisma.swapRequest.findMany()
    * ```
    */
  get swapRequest(): Prisma.SwapRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Skill: 'Skill',
    StaffSkill: 'StaffSkill',
    Shift: 'Shift',
    Location: 'Location',
    Certification: 'Certification',
    ShiftAssignment: 'ShiftAssignment',
    SwapRequest: 'SwapRequest',
    Availability: 'Availability',
    Notification: 'Notification',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "skill" | "staffSkill" | "shift" | "location" | "certification" | "shiftAssignment" | "swapRequest" | "availability" | "notification" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      StaffSkill: {
        payload: Prisma.$StaffSkillPayload<ExtArgs>
        fields: Prisma.StaffSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffSkillPayload>
          }
          findFirst: {
            args: Prisma.StaffSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffSkillPayload>
          }
          findMany: {
            args: Prisma.StaffSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffSkillPayload>[]
          }
          create: {
            args: Prisma.StaffSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffSkillPayload>
          }
          createMany: {
            args: Prisma.StaffSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffSkillPayload>[]
          }
          delete: {
            args: Prisma.StaffSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffSkillPayload>
          }
          update: {
            args: Prisma.StaffSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffSkillPayload>
          }
          deleteMany: {
            args: Prisma.StaffSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffSkillPayload>[]
          }
          upsert: {
            args: Prisma.StaffSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffSkillPayload>
          }
          aggregate: {
            args: Prisma.StaffSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffSkill>
          }
          groupBy: {
            args: Prisma.StaffSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffSkillCountArgs<ExtArgs>
            result: $Utils.Optional<StaffSkillCountAggregateOutputType> | number
          }
        }
      }
      Shift: {
        payload: Prisma.$ShiftPayload<ExtArgs>
        fields: Prisma.ShiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findFirst: {
            args: Prisma.ShiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findMany: {
            args: Prisma.ShiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          create: {
            args: Prisma.ShiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          createMany: {
            args: Prisma.ShiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          delete: {
            args: Prisma.ShiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          update: {
            args: Prisma.ShiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          deleteMany: {
            args: Prisma.ShiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          upsert: {
            args: Prisma.ShiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          aggregate: {
            args: Prisma.ShiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShift>
          }
          groupBy: {
            args: Prisma.ShiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Certification: {
        payload: Prisma.$CertificationPayload<ExtArgs>
        fields: Prisma.CertificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>
          }
          findFirst: {
            args: Prisma.CertificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>
          }
          findMany: {
            args: Prisma.CertificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>[]
          }
          create: {
            args: Prisma.CertificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>
          }
          createMany: {
            args: Prisma.CertificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>[]
          }
          delete: {
            args: Prisma.CertificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>
          }
          update: {
            args: Prisma.CertificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>
          }
          deleteMany: {
            args: Prisma.CertificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>[]
          }
          upsert: {
            args: Prisma.CertificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>
          }
          aggregate: {
            args: Prisma.CertificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertification>
          }
          groupBy: {
            args: Prisma.CertificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificationCountArgs<ExtArgs>
            result: $Utils.Optional<CertificationCountAggregateOutputType> | number
          }
        }
      }
      ShiftAssignment: {
        payload: Prisma.$ShiftAssignmentPayload<ExtArgs>
        fields: Prisma.ShiftAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ShiftAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          findMany: {
            args: Prisma.ShiftAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>[]
          }
          create: {
            args: Prisma.ShiftAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          createMany: {
            args: Prisma.ShiftAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>[]
          }
          delete: {
            args: Prisma.ShiftAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          update: {
            args: Prisma.ShiftAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ShiftAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.ShiftAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ShiftAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShiftAssignment>
          }
          groupBy: {
            args: Prisma.ShiftAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftAssignmentCountAggregateOutputType> | number
          }
        }
      }
      SwapRequest: {
        payload: Prisma.$SwapRequestPayload<ExtArgs>
        fields: Prisma.SwapRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SwapRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SwapRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>
          }
          findFirst: {
            args: Prisma.SwapRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SwapRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>
          }
          findMany: {
            args: Prisma.SwapRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>[]
          }
          create: {
            args: Prisma.SwapRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>
          }
          createMany: {
            args: Prisma.SwapRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SwapRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>[]
          }
          delete: {
            args: Prisma.SwapRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>
          }
          update: {
            args: Prisma.SwapRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>
          }
          deleteMany: {
            args: Prisma.SwapRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SwapRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SwapRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>[]
          }
          upsert: {
            args: Prisma.SwapRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>
          }
          aggregate: {
            args: Prisma.SwapRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSwapRequest>
          }
          groupBy: {
            args: Prisma.SwapRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<SwapRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.SwapRequestCountArgs<ExtArgs>
            result: $Utils.Optional<SwapRequestCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          createMany: {
            args: Prisma.AvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    skill?: SkillOmit
    staffSkill?: StaffSkillOmit
    shift?: ShiftOmit
    location?: LocationOmit
    certification?: CertificationOmit
    shiftAssignment?: ShiftAssignmentOmit
    swapRequest?: SwapRequestOmit
    availability?: AvailabilityOmit
    notification?: NotificationOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    managedLocations: number
    skills: number
    certifications: number
    availability: number
    assignments: number
    notifications: number
    swapRequests: number
    targetSwaps: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managedLocations?: boolean | UserCountOutputTypeCountManagedLocationsArgs
    skills?: boolean | UserCountOutputTypeCountSkillsArgs
    certifications?: boolean | UserCountOutputTypeCountCertificationsArgs
    availability?: boolean | UserCountOutputTypeCountAvailabilityArgs
    assignments?: boolean | UserCountOutputTypeCountAssignmentsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    swapRequests?: boolean | UserCountOutputTypeCountSwapRequestsArgs
    targetSwaps?: boolean | UserCountOutputTypeCountTargetSwapsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManagedLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffSkillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSwapRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwapRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTargetSwapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwapRequestWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    staff: number
    shifts: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | SkillCountOutputTypeCountStaffArgs
    shifts?: boolean | SkillCountOutputTypeCountShiftsArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffSkillWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
  }


  /**
   * Count Type ShiftCountOutputType
   */

  export type ShiftCountOutputType = {
    assignments: number
    swapRequests: number
  }

  export type ShiftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | ShiftCountOutputTypeCountAssignmentsArgs
    swapRequests?: boolean | ShiftCountOutputTypeCountSwapRequestsArgs
  }

  // Custom InputTypes
  /**
   * ShiftCountOutputType without action
   */
  export type ShiftCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftCountOutputType
     */
    select?: ShiftCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShiftCountOutputType without action
   */
  export type ShiftCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftAssignmentWhereInput
  }

  /**
   * ShiftCountOutputType without action
   */
  export type ShiftCountOutputTypeCountSwapRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwapRequestWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    managers: number
    shifts: number
    certifications: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managers?: boolean | LocationCountOutputTypeCountManagersArgs
    shifts?: boolean | LocationCountOutputTypeCountShiftsArgs
    certifications?: boolean | LocationCountOutputTypeCountCertificationsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountManagersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountCertificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    desiredHours: number | null
  }

  export type UserSumAggregateOutputType = {
    desiredHours: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    desiredHours: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    desiredHours: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    desiredHours: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    desiredHours?: true
  }

  export type UserSumAggregateInputType = {
    desiredHours?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    desiredHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    desiredHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    desiredHours?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    desiredHours: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    desiredHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    managedLocations?: boolean | User$managedLocationsArgs<ExtArgs>
    skills?: boolean | User$skillsArgs<ExtArgs>
    certifications?: boolean | User$certificationsArgs<ExtArgs>
    availability?: boolean | User$availabilityArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    swapRequests?: boolean | User$swapRequestsArgs<ExtArgs>
    targetSwaps?: boolean | User$targetSwapsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    desiredHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    desiredHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    desiredHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "desiredHours" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managedLocations?: boolean | User$managedLocationsArgs<ExtArgs>
    skills?: boolean | User$skillsArgs<ExtArgs>
    certifications?: boolean | User$certificationsArgs<ExtArgs>
    availability?: boolean | User$availabilityArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    swapRequests?: boolean | User$swapRequestsArgs<ExtArgs>
    targetSwaps?: boolean | User$targetSwapsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      managedLocations: Prisma.$LocationPayload<ExtArgs>[]
      skills: Prisma.$StaffSkillPayload<ExtArgs>[]
      certifications: Prisma.$CertificationPayload<ExtArgs>[]
      availability: Prisma.$AvailabilityPayload<ExtArgs>[]
      assignments: Prisma.$ShiftAssignmentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      swapRequests: Prisma.$SwapRequestPayload<ExtArgs>[]
      targetSwaps: Prisma.$SwapRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      desiredHours: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    managedLocations<T extends User$managedLocationsArgs<ExtArgs> = {}>(args?: Subset<T, User$managedLocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skills<T extends User$skillsArgs<ExtArgs> = {}>(args?: Subset<T, User$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certifications<T extends User$certificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$certificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availability<T extends User$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, User$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends User$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swapRequests<T extends User$swapRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$swapRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    targetSwaps<T extends User$targetSwapsArgs<ExtArgs> = {}>(args?: Subset<T, User$targetSwapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly desiredHours: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.managedLocations
   */
  export type User$managedLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * User.skills
   */
  export type User$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffSkill
     */
    select?: StaffSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffSkill
     */
    omit?: StaffSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffSkillInclude<ExtArgs> | null
    where?: StaffSkillWhereInput
    orderBy?: StaffSkillOrderByWithRelationInput | StaffSkillOrderByWithRelationInput[]
    cursor?: StaffSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffSkillScalarFieldEnum | StaffSkillScalarFieldEnum[]
  }

  /**
   * User.certifications
   */
  export type User$certificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    where?: CertificationWhereInput
    orderBy?: CertificationOrderByWithRelationInput | CertificationOrderByWithRelationInput[]
    cursor?: CertificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificationScalarFieldEnum | CertificationScalarFieldEnum[]
  }

  /**
   * User.availability
   */
  export type User$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * User.assignments
   */
  export type User$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    where?: ShiftAssignmentWhereInput
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    cursor?: ShiftAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.swapRequests
   */
  export type User$swapRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    where?: SwapRequestWhereInput
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    cursor?: SwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwapRequestScalarFieldEnum | SwapRequestScalarFieldEnum[]
  }

  /**
   * User.targetSwaps
   */
  export type User$targetSwapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    where?: SwapRequestWhereInput
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    cursor?: SwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwapRequestScalarFieldEnum | SwapRequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    staff?: boolean | Skill$staffArgs<ExtArgs>
    shifts?: boolean | Skill$shiftsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | Skill$staffArgs<ExtArgs>
    shifts?: boolean | Skill$shiftsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      staff: Prisma.$StaffSkillPayload<ExtArgs>[]
      shifts: Prisma.$ShiftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends Skill$staffArgs<ExtArgs> = {}>(args?: Subset<T, Skill$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shifts<T extends Skill$shiftsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$shiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.staff
   */
  export type Skill$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffSkill
     */
    select?: StaffSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffSkill
     */
    omit?: StaffSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffSkillInclude<ExtArgs> | null
    where?: StaffSkillWhereInput
    orderBy?: StaffSkillOrderByWithRelationInput | StaffSkillOrderByWithRelationInput[]
    cursor?: StaffSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffSkillScalarFieldEnum | StaffSkillScalarFieldEnum[]
  }

  /**
   * Skill.shifts
   */
  export type Skill$shiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    cursor?: ShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model StaffSkill
   */

  export type AggregateStaffSkill = {
    _count: StaffSkillCountAggregateOutputType | null
    _min: StaffSkillMinAggregateOutputType | null
    _max: StaffSkillMaxAggregateOutputType | null
  }

  export type StaffSkillMinAggregateOutputType = {
    id: string | null
    userId: string | null
    skillId: string | null
  }

  export type StaffSkillMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    skillId: string | null
  }

  export type StaffSkillCountAggregateOutputType = {
    id: number
    userId: number
    skillId: number
    _all: number
  }


  export type StaffSkillMinAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
  }

  export type StaffSkillMaxAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
  }

  export type StaffSkillCountAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    _all?: true
  }

  export type StaffSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffSkill to aggregate.
     */
    where?: StaffSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffSkills to fetch.
     */
    orderBy?: StaffSkillOrderByWithRelationInput | StaffSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffSkills
    **/
    _count?: true | StaffSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffSkillMaxAggregateInputType
  }

  export type GetStaffSkillAggregateType<T extends StaffSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffSkill[P]>
      : GetScalarType<T[P], AggregateStaffSkill[P]>
  }




  export type StaffSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffSkillWhereInput
    orderBy?: StaffSkillOrderByWithAggregationInput | StaffSkillOrderByWithAggregationInput[]
    by: StaffSkillScalarFieldEnum[] | StaffSkillScalarFieldEnum
    having?: StaffSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffSkillCountAggregateInputType | true
    _min?: StaffSkillMinAggregateInputType
    _max?: StaffSkillMaxAggregateInputType
  }

  export type StaffSkillGroupByOutputType = {
    id: string
    userId: string
    skillId: string
    _count: StaffSkillCountAggregateOutputType | null
    _min: StaffSkillMinAggregateOutputType | null
    _max: StaffSkillMaxAggregateOutputType | null
  }

  type GetStaffSkillGroupByPayload<T extends StaffSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffSkillGroupByOutputType[P]>
            : GetScalarType<T[P], StaffSkillGroupByOutputType[P]>
        }
      >
    >


  export type StaffSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffSkill"]>

  export type StaffSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffSkill"]>

  export type StaffSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffSkill"]>

  export type StaffSkillSelectScalar = {
    id?: boolean
    userId?: boolean
    skillId?: boolean
  }

  export type StaffSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "skillId", ExtArgs["result"]["staffSkill"]>
  export type StaffSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type StaffSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type StaffSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $StaffSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffSkill"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      skillId: string
    }, ExtArgs["result"]["staffSkill"]>
    composites: {}
  }

  type StaffSkillGetPayload<S extends boolean | null | undefined | StaffSkillDefaultArgs> = $Result.GetResult<Prisma.$StaffSkillPayload, S>

  type StaffSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffSkillCountAggregateInputType | true
    }

  export interface StaffSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffSkill'], meta: { name: 'StaffSkill' } }
    /**
     * Find zero or one StaffSkill that matches the filter.
     * @param {StaffSkillFindUniqueArgs} args - Arguments to find a StaffSkill
     * @example
     * // Get one StaffSkill
     * const staffSkill = await prisma.staffSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffSkillFindUniqueArgs>(args: SelectSubset<T, StaffSkillFindUniqueArgs<ExtArgs>>): Prisma__StaffSkillClient<$Result.GetResult<Prisma.$StaffSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffSkillFindUniqueOrThrowArgs} args - Arguments to find a StaffSkill
     * @example
     * // Get one StaffSkill
     * const staffSkill = await prisma.staffSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffSkillClient<$Result.GetResult<Prisma.$StaffSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffSkillFindFirstArgs} args - Arguments to find a StaffSkill
     * @example
     * // Get one StaffSkill
     * const staffSkill = await prisma.staffSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffSkillFindFirstArgs>(args?: SelectSubset<T, StaffSkillFindFirstArgs<ExtArgs>>): Prisma__StaffSkillClient<$Result.GetResult<Prisma.$StaffSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffSkillFindFirstOrThrowArgs} args - Arguments to find a StaffSkill
     * @example
     * // Get one StaffSkill
     * const staffSkill = await prisma.staffSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffSkillClient<$Result.GetResult<Prisma.$StaffSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffSkills
     * const staffSkills = await prisma.staffSkill.findMany()
     * 
     * // Get first 10 StaffSkills
     * const staffSkills = await prisma.staffSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffSkillWithIdOnly = await prisma.staffSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffSkillFindManyArgs>(args?: SelectSubset<T, StaffSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffSkill.
     * @param {StaffSkillCreateArgs} args - Arguments to create a StaffSkill.
     * @example
     * // Create one StaffSkill
     * const StaffSkill = await prisma.staffSkill.create({
     *   data: {
     *     // ... data to create a StaffSkill
     *   }
     * })
     * 
     */
    create<T extends StaffSkillCreateArgs>(args: SelectSubset<T, StaffSkillCreateArgs<ExtArgs>>): Prisma__StaffSkillClient<$Result.GetResult<Prisma.$StaffSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffSkills.
     * @param {StaffSkillCreateManyArgs} args - Arguments to create many StaffSkills.
     * @example
     * // Create many StaffSkills
     * const staffSkill = await prisma.staffSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffSkillCreateManyArgs>(args?: SelectSubset<T, StaffSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffSkills and returns the data saved in the database.
     * @param {StaffSkillCreateManyAndReturnArgs} args - Arguments to create many StaffSkills.
     * @example
     * // Create many StaffSkills
     * const staffSkill = await prisma.staffSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffSkills and only return the `id`
     * const staffSkillWithIdOnly = await prisma.staffSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffSkill.
     * @param {StaffSkillDeleteArgs} args - Arguments to delete one StaffSkill.
     * @example
     * // Delete one StaffSkill
     * const StaffSkill = await prisma.staffSkill.delete({
     *   where: {
     *     // ... filter to delete one StaffSkill
     *   }
     * })
     * 
     */
    delete<T extends StaffSkillDeleteArgs>(args: SelectSubset<T, StaffSkillDeleteArgs<ExtArgs>>): Prisma__StaffSkillClient<$Result.GetResult<Prisma.$StaffSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffSkill.
     * @param {StaffSkillUpdateArgs} args - Arguments to update one StaffSkill.
     * @example
     * // Update one StaffSkill
     * const staffSkill = await prisma.staffSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffSkillUpdateArgs>(args: SelectSubset<T, StaffSkillUpdateArgs<ExtArgs>>): Prisma__StaffSkillClient<$Result.GetResult<Prisma.$StaffSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffSkills.
     * @param {StaffSkillDeleteManyArgs} args - Arguments to filter StaffSkills to delete.
     * @example
     * // Delete a few StaffSkills
     * const { count } = await prisma.staffSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffSkillDeleteManyArgs>(args?: SelectSubset<T, StaffSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffSkills
     * const staffSkill = await prisma.staffSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffSkillUpdateManyArgs>(args: SelectSubset<T, StaffSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffSkills and returns the data updated in the database.
     * @param {StaffSkillUpdateManyAndReturnArgs} args - Arguments to update many StaffSkills.
     * @example
     * // Update many StaffSkills
     * const staffSkill = await prisma.staffSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffSkills and only return the `id`
     * const staffSkillWithIdOnly = await prisma.staffSkill.updateManyAndReturn({
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
    updateManyAndReturn<T extends StaffSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffSkill.
     * @param {StaffSkillUpsertArgs} args - Arguments to update or create a StaffSkill.
     * @example
     * // Update or create a StaffSkill
     * const staffSkill = await prisma.staffSkill.upsert({
     *   create: {
     *     // ... data to create a StaffSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffSkill we want to update
     *   }
     * })
     */
    upsert<T extends StaffSkillUpsertArgs>(args: SelectSubset<T, StaffSkillUpsertArgs<ExtArgs>>): Prisma__StaffSkillClient<$Result.GetResult<Prisma.$StaffSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffSkillCountArgs} args - Arguments to filter StaffSkills to count.
     * @example
     * // Count the number of StaffSkills
     * const count = await prisma.staffSkill.count({
     *   where: {
     *     // ... the filter for the StaffSkills we want to count
     *   }
     * })
    **/
    count<T extends StaffSkillCountArgs>(
      args?: Subset<T, StaffSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffSkillAggregateArgs>(args: Subset<T, StaffSkillAggregateArgs>): Prisma.PrismaPromise<GetStaffSkillAggregateType<T>>

    /**
     * Group by StaffSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffSkillGroupByArgs} args - Group by arguments.
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
      T extends StaffSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffSkillGroupByArgs['orderBy'] }
        : { orderBy?: StaffSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffSkill model
   */
  readonly fields: StaffSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StaffSkill model
   */
  interface StaffSkillFieldRefs {
    readonly id: FieldRef<"StaffSkill", 'String'>
    readonly userId: FieldRef<"StaffSkill", 'String'>
    readonly skillId: FieldRef<"StaffSkill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StaffSkill findUnique
   */
  export type StaffSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffSkill
     */
    select?: StaffSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffSkill
     */
    omit?: StaffSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffSkillInclude<ExtArgs> | null
    /**
     * Filter, which StaffSkill to fetch.
     */
    where: StaffSkillWhereUniqueInput
  }

  /**
   * StaffSkill findUniqueOrThrow
   */
  export type StaffSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffSkill
     */
    select?: StaffSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffSkill
     */
    omit?: StaffSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffSkillInclude<ExtArgs> | null
    /**
     * Filter, which StaffSkill to fetch.
     */
    where: StaffSkillWhereUniqueInput
  }

  /**
   * StaffSkill findFirst
   */
  export type StaffSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffSkill
     */
    select?: StaffSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffSkill
     */
    omit?: StaffSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffSkillInclude<ExtArgs> | null
    /**
     * Filter, which StaffSkill to fetch.
     */
    where?: StaffSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffSkills to fetch.
     */
    orderBy?: StaffSkillOrderByWithRelationInput | StaffSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffSkills.
     */
    cursor?: StaffSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffSkills.
     */
    distinct?: StaffSkillScalarFieldEnum | StaffSkillScalarFieldEnum[]
  }

  /**
   * StaffSkill findFirstOrThrow
   */
  export type StaffSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffSkill
     */
    select?: StaffSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffSkill
     */
    omit?: StaffSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffSkillInclude<ExtArgs> | null
    /**
     * Filter, which StaffSkill to fetch.
     */
    where?: StaffSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffSkills to fetch.
     */
    orderBy?: StaffSkillOrderByWithRelationInput | StaffSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffSkills.
     */
    cursor?: StaffSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffSkills.
     */
    distinct?: StaffSkillScalarFieldEnum | StaffSkillScalarFieldEnum[]
  }

  /**
   * StaffSkill findMany
   */
  export type StaffSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffSkill
     */
    select?: StaffSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffSkill
     */
    omit?: StaffSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffSkillInclude<ExtArgs> | null
    /**
     * Filter, which StaffSkills to fetch.
     */
    where?: StaffSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffSkills to fetch.
     */
    orderBy?: StaffSkillOrderByWithRelationInput | StaffSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffSkills.
     */
    cursor?: StaffSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffSkills.
     */
    skip?: number
    distinct?: StaffSkillScalarFieldEnum | StaffSkillScalarFieldEnum[]
  }

  /**
   * StaffSkill create
   */
  export type StaffSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffSkill
     */
    select?: StaffSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffSkill
     */
    omit?: StaffSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffSkill.
     */
    data: XOR<StaffSkillCreateInput, StaffSkillUncheckedCreateInput>
  }

  /**
   * StaffSkill createMany
   */
  export type StaffSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffSkills.
     */
    data: StaffSkillCreateManyInput | StaffSkillCreateManyInput[]
  }

  /**
   * StaffSkill createManyAndReturn
   */
  export type StaffSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffSkill
     */
    select?: StaffSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffSkill
     */
    omit?: StaffSkillOmit<ExtArgs> | null
    /**
     * The data used to create many StaffSkills.
     */
    data: StaffSkillCreateManyInput | StaffSkillCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffSkill update
   */
  export type StaffSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffSkill
     */
    select?: StaffSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffSkill
     */
    omit?: StaffSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffSkill.
     */
    data: XOR<StaffSkillUpdateInput, StaffSkillUncheckedUpdateInput>
    /**
     * Choose, which StaffSkill to update.
     */
    where: StaffSkillWhereUniqueInput
  }

  /**
   * StaffSkill updateMany
   */
  export type StaffSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffSkills.
     */
    data: XOR<StaffSkillUpdateManyMutationInput, StaffSkillUncheckedUpdateManyInput>
    /**
     * Filter which StaffSkills to update
     */
    where?: StaffSkillWhereInput
    /**
     * Limit how many StaffSkills to update.
     */
    limit?: number
  }

  /**
   * StaffSkill updateManyAndReturn
   */
  export type StaffSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffSkill
     */
    select?: StaffSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffSkill
     */
    omit?: StaffSkillOmit<ExtArgs> | null
    /**
     * The data used to update StaffSkills.
     */
    data: XOR<StaffSkillUpdateManyMutationInput, StaffSkillUncheckedUpdateManyInput>
    /**
     * Filter which StaffSkills to update
     */
    where?: StaffSkillWhereInput
    /**
     * Limit how many StaffSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffSkill upsert
   */
  export type StaffSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffSkill
     */
    select?: StaffSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffSkill
     */
    omit?: StaffSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffSkill to update in case it exists.
     */
    where: StaffSkillWhereUniqueInput
    /**
     * In case the StaffSkill found by the `where` argument doesn't exist, create a new StaffSkill with this data.
     */
    create: XOR<StaffSkillCreateInput, StaffSkillUncheckedCreateInput>
    /**
     * In case the StaffSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffSkillUpdateInput, StaffSkillUncheckedUpdateInput>
  }

  /**
   * StaffSkill delete
   */
  export type StaffSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffSkill
     */
    select?: StaffSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffSkill
     */
    omit?: StaffSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffSkillInclude<ExtArgs> | null
    /**
     * Filter which StaffSkill to delete.
     */
    where: StaffSkillWhereUniqueInput
  }

  /**
   * StaffSkill deleteMany
   */
  export type StaffSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffSkills to delete
     */
    where?: StaffSkillWhereInput
    /**
     * Limit how many StaffSkills to delete.
     */
    limit?: number
  }

  /**
   * StaffSkill without action
   */
  export type StaffSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffSkill
     */
    select?: StaffSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffSkill
     */
    omit?: StaffSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffSkillInclude<ExtArgs> | null
  }


  /**
   * Model Shift
   */

  export type AggregateShift = {
    _count: ShiftCountAggregateOutputType | null
    _avg: ShiftAvgAggregateOutputType | null
    _sum: ShiftSumAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  export type ShiftAvgAggregateOutputType = {
    headCount: number | null
    version: number | null
  }

  export type ShiftSumAggregateOutputType = {
    headCount: number | null
    version: number | null
  }

  export type ShiftMinAggregateOutputType = {
    id: string | null
    locationId: string | null
    skillId: string | null
    startDate: Date | null
    endDate: Date | null
    headCount: number | null
    status: $Enums.ShiftStatus | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftMaxAggregateOutputType = {
    id: string | null
    locationId: string | null
    skillId: string | null
    startDate: Date | null
    endDate: Date | null
    headCount: number | null
    status: $Enums.ShiftStatus | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftCountAggregateOutputType = {
    id: number
    locationId: number
    skillId: number
    startDate: number
    endDate: number
    headCount: number
    status: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShiftAvgAggregateInputType = {
    headCount?: true
    version?: true
  }

  export type ShiftSumAggregateInputType = {
    headCount?: true
    version?: true
  }

  export type ShiftMinAggregateInputType = {
    id?: true
    locationId?: true
    skillId?: true
    startDate?: true
    endDate?: true
    headCount?: true
    status?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftMaxAggregateInputType = {
    id?: true
    locationId?: true
    skillId?: true
    startDate?: true
    endDate?: true
    headCount?: true
    status?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftCountAggregateInputType = {
    id?: true
    locationId?: true
    skillId?: true
    startDate?: true
    endDate?: true
    headCount?: true
    status?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shift to aggregate.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shifts
    **/
    _count?: true | ShiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftMaxAggregateInputType
  }

  export type GetShiftAggregateType<T extends ShiftAggregateArgs> = {
        [P in keyof T & keyof AggregateShift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShift[P]>
      : GetScalarType<T[P], AggregateShift[P]>
  }




  export type ShiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithAggregationInput | ShiftOrderByWithAggregationInput[]
    by: ShiftScalarFieldEnum[] | ShiftScalarFieldEnum
    having?: ShiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftCountAggregateInputType | true
    _avg?: ShiftAvgAggregateInputType
    _sum?: ShiftSumAggregateInputType
    _min?: ShiftMinAggregateInputType
    _max?: ShiftMaxAggregateInputType
  }

  export type ShiftGroupByOutputType = {
    id: string
    locationId: string
    skillId: string
    startDate: Date
    endDate: Date
    headCount: number
    status: $Enums.ShiftStatus
    version: number
    createdAt: Date
    updatedAt: Date
    _count: ShiftCountAggregateOutputType | null
    _avg: ShiftAvgAggregateOutputType | null
    _sum: ShiftSumAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  type GetShiftGroupByPayload<T extends ShiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftGroupByOutputType[P]>
        }
      >
    >


  export type ShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    skillId?: boolean
    startDate?: boolean
    endDate?: boolean
    headCount?: boolean
    status?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    requiredSkill?: boolean | SkillDefaultArgs<ExtArgs>
    assignments?: boolean | Shift$assignmentsArgs<ExtArgs>
    swapRequests?: boolean | Shift$swapRequestsArgs<ExtArgs>
    _count?: boolean | ShiftCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    skillId?: boolean
    startDate?: boolean
    endDate?: boolean
    headCount?: boolean
    status?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    requiredSkill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    skillId?: boolean
    startDate?: boolean
    endDate?: boolean
    headCount?: boolean
    status?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    requiredSkill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectScalar = {
    id?: boolean
    locationId?: boolean
    skillId?: boolean
    startDate?: boolean
    endDate?: boolean
    headCount?: boolean
    status?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locationId" | "skillId" | "startDate" | "endDate" | "headCount" | "status" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["shift"]>
  export type ShiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    requiredSkill?: boolean | SkillDefaultArgs<ExtArgs>
    assignments?: boolean | Shift$assignmentsArgs<ExtArgs>
    swapRequests?: boolean | Shift$swapRequestsArgs<ExtArgs>
    _count?: boolean | ShiftCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShiftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    requiredSkill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type ShiftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    requiredSkill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $ShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shift"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      requiredSkill: Prisma.$SkillPayload<ExtArgs>
      assignments: Prisma.$ShiftAssignmentPayload<ExtArgs>[]
      swapRequests: Prisma.$SwapRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locationId: string
      skillId: string
      startDate: Date
      endDate: Date
      headCount: number
      status: $Enums.ShiftStatus
      version: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shift"]>
    composites: {}
  }

  type ShiftGetPayload<S extends boolean | null | undefined | ShiftDefaultArgs> = $Result.GetResult<Prisma.$ShiftPayload, S>

  type ShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftCountAggregateInputType | true
    }

  export interface ShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shift'], meta: { name: 'Shift' } }
    /**
     * Find zero or one Shift that matches the filter.
     * @param {ShiftFindUniqueArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftFindUniqueArgs>(args: SelectSubset<T, ShiftFindUniqueArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftFindUniqueOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftFindFirstArgs>(args?: SelectSubset<T, ShiftFindFirstArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shifts
     * const shifts = await prisma.shift.findMany()
     * 
     * // Get first 10 Shifts
     * const shifts = await prisma.shift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftWithIdOnly = await prisma.shift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftFindManyArgs>(args?: SelectSubset<T, ShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shift.
     * @param {ShiftCreateArgs} args - Arguments to create a Shift.
     * @example
     * // Create one Shift
     * const Shift = await prisma.shift.create({
     *   data: {
     *     // ... data to create a Shift
     *   }
     * })
     * 
     */
    create<T extends ShiftCreateArgs>(args: SelectSubset<T, ShiftCreateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shifts.
     * @param {ShiftCreateManyArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shift = await prisma.shift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftCreateManyArgs>(args?: SelectSubset<T, ShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shifts and returns the data saved in the database.
     * @param {ShiftCreateManyAndReturnArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shift = await prisma.shift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shifts and only return the `id`
     * const shiftWithIdOnly = await prisma.shift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shift.
     * @param {ShiftDeleteArgs} args - Arguments to delete one Shift.
     * @example
     * // Delete one Shift
     * const Shift = await prisma.shift.delete({
     *   where: {
     *     // ... filter to delete one Shift
     *   }
     * })
     * 
     */
    delete<T extends ShiftDeleteArgs>(args: SelectSubset<T, ShiftDeleteArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shift.
     * @param {ShiftUpdateArgs} args - Arguments to update one Shift.
     * @example
     * // Update one Shift
     * const shift = await prisma.shift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftUpdateArgs>(args: SelectSubset<T, ShiftUpdateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shifts.
     * @param {ShiftDeleteManyArgs} args - Arguments to filter Shifts to delete.
     * @example
     * // Delete a few Shifts
     * const { count } = await prisma.shift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftDeleteManyArgs>(args?: SelectSubset<T, ShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shifts
     * const shift = await prisma.shift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftUpdateManyArgs>(args: SelectSubset<T, ShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts and returns the data updated in the database.
     * @param {ShiftUpdateManyAndReturnArgs} args - Arguments to update many Shifts.
     * @example
     * // Update many Shifts
     * const shift = await prisma.shift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shifts and only return the `id`
     * const shiftWithIdOnly = await prisma.shift.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShiftUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shift.
     * @param {ShiftUpsertArgs} args - Arguments to update or create a Shift.
     * @example
     * // Update or create a Shift
     * const shift = await prisma.shift.upsert({
     *   create: {
     *     // ... data to create a Shift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shift we want to update
     *   }
     * })
     */
    upsert<T extends ShiftUpsertArgs>(args: SelectSubset<T, ShiftUpsertArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftCountArgs} args - Arguments to filter Shifts to count.
     * @example
     * // Count the number of Shifts
     * const count = await prisma.shift.count({
     *   where: {
     *     // ... the filter for the Shifts we want to count
     *   }
     * })
    **/
    count<T extends ShiftCountArgs>(
      args?: Subset<T, ShiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShiftAggregateArgs>(args: Subset<T, ShiftAggregateArgs>): Prisma.PrismaPromise<GetShiftAggregateType<T>>

    /**
     * Group by Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftGroupByArgs} args - Group by arguments.
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
      T extends ShiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftGroupByArgs['orderBy'] }
        : { orderBy?: ShiftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shift model
   */
  readonly fields: ShiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requiredSkill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignments<T extends Shift$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Shift$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swapRequests<T extends Shift$swapRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Shift$swapRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Shift model
   */
  interface ShiftFieldRefs {
    readonly id: FieldRef<"Shift", 'String'>
    readonly locationId: FieldRef<"Shift", 'String'>
    readonly skillId: FieldRef<"Shift", 'String'>
    readonly startDate: FieldRef<"Shift", 'DateTime'>
    readonly endDate: FieldRef<"Shift", 'DateTime'>
    readonly headCount: FieldRef<"Shift", 'Int'>
    readonly status: FieldRef<"Shift", 'ShiftStatus'>
    readonly version: FieldRef<"Shift", 'Int'>
    readonly createdAt: FieldRef<"Shift", 'DateTime'>
    readonly updatedAt: FieldRef<"Shift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shift findUnique
   */
  export type ShiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift findUniqueOrThrow
   */
  export type ShiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift findFirst
   */
  export type ShiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift findFirstOrThrow
   */
  export type ShiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift findMany
   */
  export type ShiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shifts to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift create
   */
  export type ShiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The data needed to create a Shift.
     */
    data: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
  }

  /**
   * Shift createMany
   */
  export type ShiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shifts.
     */
    data: ShiftCreateManyInput | ShiftCreateManyInput[]
  }

  /**
   * Shift createManyAndReturn
   */
  export type ShiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The data used to create many Shifts.
     */
    data: ShiftCreateManyInput | ShiftCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shift update
   */
  export type ShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The data needed to update a Shift.
     */
    data: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
    /**
     * Choose, which Shift to update.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift updateMany
   */
  export type ShiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shifts.
     */
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyInput>
    /**
     * Filter which Shifts to update
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to update.
     */
    limit?: number
  }

  /**
   * Shift updateManyAndReturn
   */
  export type ShiftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The data used to update Shifts.
     */
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyInput>
    /**
     * Filter which Shifts to update
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shift upsert
   */
  export type ShiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The filter to search for the Shift to update in case it exists.
     */
    where: ShiftWhereUniqueInput
    /**
     * In case the Shift found by the `where` argument doesn't exist, create a new Shift with this data.
     */
    create: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
    /**
     * In case the Shift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
  }

  /**
   * Shift delete
   */
  export type ShiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter which Shift to delete.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift deleteMany
   */
  export type ShiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shifts to delete
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to delete.
     */
    limit?: number
  }

  /**
   * Shift.assignments
   */
  export type Shift$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    where?: ShiftAssignmentWhereInput
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    cursor?: ShiftAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * Shift.swapRequests
   */
  export type Shift$swapRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    where?: SwapRequestWhereInput
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    cursor?: SwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwapRequestScalarFieldEnum | SwapRequestScalarFieldEnum[]
  }

  /**
   * Shift without action
   */
  export type ShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    timezone: string | null
    createdAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    timezone: string | null
    createdAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    timezone: number
    createdAt: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    timezone?: true
    createdAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    timezone?: true
    createdAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    timezone?: true
    createdAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    name: string
    timezone: string
    createdAt: Date
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    timezone?: boolean
    createdAt?: boolean
    managers?: boolean | Location$managersArgs<ExtArgs>
    shifts?: boolean | Location$shiftsArgs<ExtArgs>
    certifications?: boolean | Location$certificationsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    timezone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    timezone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    timezone?: boolean
    createdAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "timezone" | "createdAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managers?: boolean | Location$managersArgs<ExtArgs>
    shifts?: boolean | Location$shiftsArgs<ExtArgs>
    certifications?: boolean | Location$certificationsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      managers: Prisma.$UserPayload<ExtArgs>[]
      shifts: Prisma.$ShiftPayload<ExtArgs>[]
      certifications: Prisma.$CertificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      timezone: string
      createdAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    managers<T extends Location$managersArgs<ExtArgs> = {}>(args?: Subset<T, Location$managersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shifts<T extends Location$shiftsArgs<ExtArgs> = {}>(args?: Subset<T, Location$shiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certifications<T extends Location$certificationsArgs<ExtArgs> = {}>(args?: Subset<T, Location$certificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly name: FieldRef<"Location", 'String'>
    readonly timezone: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.managers
   */
  export type Location$managersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Location.shifts
   */
  export type Location$shiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    cursor?: ShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Location.certifications
   */
  export type Location$certificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    where?: CertificationWhereInput
    orderBy?: CertificationOrderByWithRelationInput | CertificationOrderByWithRelationInput[]
    cursor?: CertificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificationScalarFieldEnum | CertificationScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Certification
   */

  export type AggregateCertification = {
    _count: CertificationCountAggregateOutputType | null
    _min: CertificationMinAggregateOutputType | null
    _max: CertificationMaxAggregateOutputType | null
  }

  export type CertificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    locationId: string | null
  }

  export type CertificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    locationId: string | null
  }

  export type CertificationCountAggregateOutputType = {
    id: number
    userId: number
    locationId: number
    _all: number
  }


  export type CertificationMinAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
  }

  export type CertificationMaxAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
  }

  export type CertificationCountAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
    _all?: true
  }

  export type CertificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certification to aggregate.
     */
    where?: CertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certifications to fetch.
     */
    orderBy?: CertificationOrderByWithRelationInput | CertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certifications
    **/
    _count?: true | CertificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificationMaxAggregateInputType
  }

  export type GetCertificationAggregateType<T extends CertificationAggregateArgs> = {
        [P in keyof T & keyof AggregateCertification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertification[P]>
      : GetScalarType<T[P], AggregateCertification[P]>
  }




  export type CertificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificationWhereInput
    orderBy?: CertificationOrderByWithAggregationInput | CertificationOrderByWithAggregationInput[]
    by: CertificationScalarFieldEnum[] | CertificationScalarFieldEnum
    having?: CertificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificationCountAggregateInputType | true
    _min?: CertificationMinAggregateInputType
    _max?: CertificationMaxAggregateInputType
  }

  export type CertificationGroupByOutputType = {
    id: string
    userId: string
    locationId: string
    _count: CertificationCountAggregateOutputType | null
    _min: CertificationMinAggregateOutputType | null
    _max: CertificationMaxAggregateOutputType | null
  }

  type GetCertificationGroupByPayload<T extends CertificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificationGroupByOutputType[P]>
            : GetScalarType<T[P], CertificationGroupByOutputType[P]>
        }
      >
    >


  export type CertificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    locationId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certification"]>

  export type CertificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    locationId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certification"]>

  export type CertificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    locationId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certification"]>

  export type CertificationSelectScalar = {
    id?: boolean
    userId?: boolean
    locationId?: boolean
  }

  export type CertificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "locationId", ExtArgs["result"]["certification"]>
  export type CertificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type CertificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type CertificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $CertificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      locationId: string
    }, ExtArgs["result"]["certification"]>
    composites: {}
  }

  type CertificationGetPayload<S extends boolean | null | undefined | CertificationDefaultArgs> = $Result.GetResult<Prisma.$CertificationPayload, S>

  type CertificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificationCountAggregateInputType | true
    }

  export interface CertificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certification'], meta: { name: 'Certification' } }
    /**
     * Find zero or one Certification that matches the filter.
     * @param {CertificationFindUniqueArgs} args - Arguments to find a Certification
     * @example
     * // Get one Certification
     * const certification = await prisma.certification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificationFindUniqueArgs>(args: SelectSubset<T, CertificationFindUniqueArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificationFindUniqueOrThrowArgs} args - Arguments to find a Certification
     * @example
     * // Get one Certification
     * const certification = await prisma.certification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificationFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationFindFirstArgs} args - Arguments to find a Certification
     * @example
     * // Get one Certification
     * const certification = await prisma.certification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificationFindFirstArgs>(args?: SelectSubset<T, CertificationFindFirstArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationFindFirstOrThrowArgs} args - Arguments to find a Certification
     * @example
     * // Get one Certification
     * const certification = await prisma.certification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificationFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certifications
     * const certifications = await prisma.certification.findMany()
     * 
     * // Get first 10 Certifications
     * const certifications = await prisma.certification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificationWithIdOnly = await prisma.certification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificationFindManyArgs>(args?: SelectSubset<T, CertificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certification.
     * @param {CertificationCreateArgs} args - Arguments to create a Certification.
     * @example
     * // Create one Certification
     * const Certification = await prisma.certification.create({
     *   data: {
     *     // ... data to create a Certification
     *   }
     * })
     * 
     */
    create<T extends CertificationCreateArgs>(args: SelectSubset<T, CertificationCreateArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certifications.
     * @param {CertificationCreateManyArgs} args - Arguments to create many Certifications.
     * @example
     * // Create many Certifications
     * const certification = await prisma.certification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificationCreateManyArgs>(args?: SelectSubset<T, CertificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certifications and returns the data saved in the database.
     * @param {CertificationCreateManyAndReturnArgs} args - Arguments to create many Certifications.
     * @example
     * // Create many Certifications
     * const certification = await prisma.certification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certifications and only return the `id`
     * const certificationWithIdOnly = await prisma.certification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificationCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certification.
     * @param {CertificationDeleteArgs} args - Arguments to delete one Certification.
     * @example
     * // Delete one Certification
     * const Certification = await prisma.certification.delete({
     *   where: {
     *     // ... filter to delete one Certification
     *   }
     * })
     * 
     */
    delete<T extends CertificationDeleteArgs>(args: SelectSubset<T, CertificationDeleteArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certification.
     * @param {CertificationUpdateArgs} args - Arguments to update one Certification.
     * @example
     * // Update one Certification
     * const certification = await prisma.certification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificationUpdateArgs>(args: SelectSubset<T, CertificationUpdateArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certifications.
     * @param {CertificationDeleteManyArgs} args - Arguments to filter Certifications to delete.
     * @example
     * // Delete a few Certifications
     * const { count } = await prisma.certification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificationDeleteManyArgs>(args?: SelectSubset<T, CertificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certifications
     * const certification = await prisma.certification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificationUpdateManyArgs>(args: SelectSubset<T, CertificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certifications and returns the data updated in the database.
     * @param {CertificationUpdateManyAndReturnArgs} args - Arguments to update many Certifications.
     * @example
     * // Update many Certifications
     * const certification = await prisma.certification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certifications and only return the `id`
     * const certificationWithIdOnly = await prisma.certification.updateManyAndReturn({
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
    updateManyAndReturn<T extends CertificationUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certification.
     * @param {CertificationUpsertArgs} args - Arguments to update or create a Certification.
     * @example
     * // Update or create a Certification
     * const certification = await prisma.certification.upsert({
     *   create: {
     *     // ... data to create a Certification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certification we want to update
     *   }
     * })
     */
    upsert<T extends CertificationUpsertArgs>(args: SelectSubset<T, CertificationUpsertArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationCountArgs} args - Arguments to filter Certifications to count.
     * @example
     * // Count the number of Certifications
     * const count = await prisma.certification.count({
     *   where: {
     *     // ... the filter for the Certifications we want to count
     *   }
     * })
    **/
    count<T extends CertificationCountArgs>(
      args?: Subset<T, CertificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificationAggregateArgs>(args: Subset<T, CertificationAggregateArgs>): Prisma.PrismaPromise<GetCertificationAggregateType<T>>

    /**
     * Group by Certification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationGroupByArgs} args - Group by arguments.
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
      T extends CertificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificationGroupByArgs['orderBy'] }
        : { orderBy?: CertificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CertificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certification model
   */
  readonly fields: CertificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Certification model
   */
  interface CertificationFieldRefs {
    readonly id: FieldRef<"Certification", 'String'>
    readonly userId: FieldRef<"Certification", 'String'>
    readonly locationId: FieldRef<"Certification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Certification findUnique
   */
  export type CertificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * Filter, which Certification to fetch.
     */
    where: CertificationWhereUniqueInput
  }

  /**
   * Certification findUniqueOrThrow
   */
  export type CertificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * Filter, which Certification to fetch.
     */
    where: CertificationWhereUniqueInput
  }

  /**
   * Certification findFirst
   */
  export type CertificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * Filter, which Certification to fetch.
     */
    where?: CertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certifications to fetch.
     */
    orderBy?: CertificationOrderByWithRelationInput | CertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certifications.
     */
    cursor?: CertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certifications.
     */
    distinct?: CertificationScalarFieldEnum | CertificationScalarFieldEnum[]
  }

  /**
   * Certification findFirstOrThrow
   */
  export type CertificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * Filter, which Certification to fetch.
     */
    where?: CertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certifications to fetch.
     */
    orderBy?: CertificationOrderByWithRelationInput | CertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certifications.
     */
    cursor?: CertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certifications.
     */
    distinct?: CertificationScalarFieldEnum | CertificationScalarFieldEnum[]
  }

  /**
   * Certification findMany
   */
  export type CertificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * Filter, which Certifications to fetch.
     */
    where?: CertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certifications to fetch.
     */
    orderBy?: CertificationOrderByWithRelationInput | CertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certifications.
     */
    cursor?: CertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certifications.
     */
    skip?: number
    distinct?: CertificationScalarFieldEnum | CertificationScalarFieldEnum[]
  }

  /**
   * Certification create
   */
  export type CertificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Certification.
     */
    data: XOR<CertificationCreateInput, CertificationUncheckedCreateInput>
  }

  /**
   * Certification createMany
   */
  export type CertificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certifications.
     */
    data: CertificationCreateManyInput | CertificationCreateManyInput[]
  }

  /**
   * Certification createManyAndReturn
   */
  export type CertificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * The data used to create many Certifications.
     */
    data: CertificationCreateManyInput | CertificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certification update
   */
  export type CertificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Certification.
     */
    data: XOR<CertificationUpdateInput, CertificationUncheckedUpdateInput>
    /**
     * Choose, which Certification to update.
     */
    where: CertificationWhereUniqueInput
  }

  /**
   * Certification updateMany
   */
  export type CertificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certifications.
     */
    data: XOR<CertificationUpdateManyMutationInput, CertificationUncheckedUpdateManyInput>
    /**
     * Filter which Certifications to update
     */
    where?: CertificationWhereInput
    /**
     * Limit how many Certifications to update.
     */
    limit?: number
  }

  /**
   * Certification updateManyAndReturn
   */
  export type CertificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * The data used to update Certifications.
     */
    data: XOR<CertificationUpdateManyMutationInput, CertificationUncheckedUpdateManyInput>
    /**
     * Filter which Certifications to update
     */
    where?: CertificationWhereInput
    /**
     * Limit how many Certifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certification upsert
   */
  export type CertificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Certification to update in case it exists.
     */
    where: CertificationWhereUniqueInput
    /**
     * In case the Certification found by the `where` argument doesn't exist, create a new Certification with this data.
     */
    create: XOR<CertificationCreateInput, CertificationUncheckedCreateInput>
    /**
     * In case the Certification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificationUpdateInput, CertificationUncheckedUpdateInput>
  }

  /**
   * Certification delete
   */
  export type CertificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * Filter which Certification to delete.
     */
    where: CertificationWhereUniqueInput
  }

  /**
   * Certification deleteMany
   */
  export type CertificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certifications to delete
     */
    where?: CertificationWhereInput
    /**
     * Limit how many Certifications to delete.
     */
    limit?: number
  }

  /**
   * Certification without action
   */
  export type CertificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
  }


  /**
   * Model ShiftAssignment
   */

  export type AggregateShiftAssignment = {
    _count: ShiftAssignmentCountAggregateOutputType | null
    _min: ShiftAssignmentMinAggregateOutputType | null
    _max: ShiftAssignmentMaxAggregateOutputType | null
  }

  export type ShiftAssignmentMinAggregateOutputType = {
    id: string | null
    shiftId: string | null
    userId: string | null
  }

  export type ShiftAssignmentMaxAggregateOutputType = {
    id: string | null
    shiftId: string | null
    userId: string | null
  }

  export type ShiftAssignmentCountAggregateOutputType = {
    id: number
    shiftId: number
    userId: number
    _all: number
  }


  export type ShiftAssignmentMinAggregateInputType = {
    id?: true
    shiftId?: true
    userId?: true
  }

  export type ShiftAssignmentMaxAggregateInputType = {
    id?: true
    shiftId?: true
    userId?: true
  }

  export type ShiftAssignmentCountAggregateInputType = {
    id?: true
    shiftId?: true
    userId?: true
    _all?: true
  }

  export type ShiftAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftAssignment to aggregate.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftAssignments
    **/
    _count?: true | ShiftAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftAssignmentMaxAggregateInputType
  }

  export type GetShiftAssignmentAggregateType<T extends ShiftAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftAssignment[P]>
      : GetScalarType<T[P], AggregateShiftAssignment[P]>
  }




  export type ShiftAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftAssignmentWhereInput
    orderBy?: ShiftAssignmentOrderByWithAggregationInput | ShiftAssignmentOrderByWithAggregationInput[]
    by: ShiftAssignmentScalarFieldEnum[] | ShiftAssignmentScalarFieldEnum
    having?: ShiftAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftAssignmentCountAggregateInputType | true
    _min?: ShiftAssignmentMinAggregateInputType
    _max?: ShiftAssignmentMaxAggregateInputType
  }

  export type ShiftAssignmentGroupByOutputType = {
    id: string
    shiftId: string
    userId: string
    _count: ShiftAssignmentCountAggregateOutputType | null
    _min: ShiftAssignmentMinAggregateOutputType | null
    _max: ShiftAssignmentMaxAggregateOutputType | null
  }

  type GetShiftAssignmentGroupByPayload<T extends ShiftAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ShiftAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftId?: boolean
    userId?: boolean
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftAssignment"]>

  export type ShiftAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftId?: boolean
    userId?: boolean
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftAssignment"]>

  export type ShiftAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftId?: boolean
    userId?: boolean
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftAssignment"]>

  export type ShiftAssignmentSelectScalar = {
    id?: boolean
    shiftId?: boolean
    userId?: boolean
  }

  export type ShiftAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shiftId" | "userId", ExtArgs["result"]["shiftAssignment"]>
  export type ShiftAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShiftAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShiftAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShiftAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftAssignment"
    objects: {
      shift: Prisma.$ShiftPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shiftId: string
      userId: string
    }, ExtArgs["result"]["shiftAssignment"]>
    composites: {}
  }

  type ShiftAssignmentGetPayload<S extends boolean | null | undefined | ShiftAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ShiftAssignmentPayload, S>

  type ShiftAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftAssignmentCountAggregateInputType | true
    }

  export interface ShiftAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftAssignment'], meta: { name: 'ShiftAssignment' } }
    /**
     * Find zero or one ShiftAssignment that matches the filter.
     * @param {ShiftAssignmentFindUniqueArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftAssignmentFindUniqueArgs>(args: SelectSubset<T, ShiftAssignmentFindUniqueArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShiftAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentFindFirstArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftAssignmentFindFirstArgs>(args?: SelectSubset<T, ShiftAssignmentFindFirstArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentFindFirstOrThrowArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShiftAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftAssignments
     * const shiftAssignments = await prisma.shiftAssignment.findMany()
     * 
     * // Get first 10 ShiftAssignments
     * const shiftAssignments = await prisma.shiftAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftAssignmentWithIdOnly = await prisma.shiftAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftAssignmentFindManyArgs>(args?: SelectSubset<T, ShiftAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShiftAssignment.
     * @param {ShiftAssignmentCreateArgs} args - Arguments to create a ShiftAssignment.
     * @example
     * // Create one ShiftAssignment
     * const ShiftAssignment = await prisma.shiftAssignment.create({
     *   data: {
     *     // ... data to create a ShiftAssignment
     *   }
     * })
     * 
     */
    create<T extends ShiftAssignmentCreateArgs>(args: SelectSubset<T, ShiftAssignmentCreateArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShiftAssignments.
     * @param {ShiftAssignmentCreateManyArgs} args - Arguments to create many ShiftAssignments.
     * @example
     * // Create many ShiftAssignments
     * const shiftAssignment = await prisma.shiftAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftAssignmentCreateManyArgs>(args?: SelectSubset<T, ShiftAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShiftAssignments and returns the data saved in the database.
     * @param {ShiftAssignmentCreateManyAndReturnArgs} args - Arguments to create many ShiftAssignments.
     * @example
     * // Create many ShiftAssignments
     * const shiftAssignment = await prisma.shiftAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShiftAssignments and only return the `id`
     * const shiftAssignmentWithIdOnly = await prisma.shiftAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShiftAssignment.
     * @param {ShiftAssignmentDeleteArgs} args - Arguments to delete one ShiftAssignment.
     * @example
     * // Delete one ShiftAssignment
     * const ShiftAssignment = await prisma.shiftAssignment.delete({
     *   where: {
     *     // ... filter to delete one ShiftAssignment
     *   }
     * })
     * 
     */
    delete<T extends ShiftAssignmentDeleteArgs>(args: SelectSubset<T, ShiftAssignmentDeleteArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShiftAssignment.
     * @param {ShiftAssignmentUpdateArgs} args - Arguments to update one ShiftAssignment.
     * @example
     * // Update one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftAssignmentUpdateArgs>(args: SelectSubset<T, ShiftAssignmentUpdateArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShiftAssignments.
     * @param {ShiftAssignmentDeleteManyArgs} args - Arguments to filter ShiftAssignments to delete.
     * @example
     * // Delete a few ShiftAssignments
     * const { count } = await prisma.shiftAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftAssignmentDeleteManyArgs>(args?: SelectSubset<T, ShiftAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftAssignments
     * const shiftAssignment = await prisma.shiftAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftAssignmentUpdateManyArgs>(args: SelectSubset<T, ShiftAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftAssignments and returns the data updated in the database.
     * @param {ShiftAssignmentUpdateManyAndReturnArgs} args - Arguments to update many ShiftAssignments.
     * @example
     * // Update many ShiftAssignments
     * const shiftAssignment = await prisma.shiftAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShiftAssignments and only return the `id`
     * const shiftAssignmentWithIdOnly = await prisma.shiftAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShiftAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShiftAssignment.
     * @param {ShiftAssignmentUpsertArgs} args - Arguments to update or create a ShiftAssignment.
     * @example
     * // Update or create a ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.upsert({
     *   create: {
     *     // ... data to create a ShiftAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftAssignment we want to update
     *   }
     * })
     */
    upsert<T extends ShiftAssignmentUpsertArgs>(args: SelectSubset<T, ShiftAssignmentUpsertArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShiftAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentCountArgs} args - Arguments to filter ShiftAssignments to count.
     * @example
     * // Count the number of ShiftAssignments
     * const count = await prisma.shiftAssignment.count({
     *   where: {
     *     // ... the filter for the ShiftAssignments we want to count
     *   }
     * })
    **/
    count<T extends ShiftAssignmentCountArgs>(
      args?: Subset<T, ShiftAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShiftAssignmentAggregateArgs>(args: Subset<T, ShiftAssignmentAggregateArgs>): Prisma.PrismaPromise<GetShiftAssignmentAggregateType<T>>

    /**
     * Group by ShiftAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentGroupByArgs} args - Group by arguments.
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
      T extends ShiftAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ShiftAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShiftAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftAssignment model
   */
  readonly fields: ShiftAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shift<T extends ShiftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShiftDefaultArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShiftAssignment model
   */
  interface ShiftAssignmentFieldRefs {
    readonly id: FieldRef<"ShiftAssignment", 'String'>
    readonly shiftId: FieldRef<"ShiftAssignment", 'String'>
    readonly userId: FieldRef<"ShiftAssignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShiftAssignment findUnique
   */
  export type ShiftAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where: ShiftAssignmentWhereUniqueInput
  }

  /**
   * ShiftAssignment findUniqueOrThrow
   */
  export type ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where: ShiftAssignmentWhereUniqueInput
  }

  /**
   * ShiftAssignment findFirst
   */
  export type ShiftAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftAssignments.
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftAssignments.
     */
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * ShiftAssignment findFirstOrThrow
   */
  export type ShiftAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftAssignments.
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftAssignments.
     */
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * ShiftAssignment findMany
   */
  export type ShiftAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignments to fetch.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftAssignments.
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * ShiftAssignment create
   */
  export type ShiftAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftAssignment.
     */
    data: XOR<ShiftAssignmentCreateInput, ShiftAssignmentUncheckedCreateInput>
  }

  /**
   * ShiftAssignment createMany
   */
  export type ShiftAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShiftAssignments.
     */
    data: ShiftAssignmentCreateManyInput | ShiftAssignmentCreateManyInput[]
  }

  /**
   * ShiftAssignment createManyAndReturn
   */
  export type ShiftAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many ShiftAssignments.
     */
    data: ShiftAssignmentCreateManyInput | ShiftAssignmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftAssignment update
   */
  export type ShiftAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftAssignment.
     */
    data: XOR<ShiftAssignmentUpdateInput, ShiftAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ShiftAssignment to update.
     */
    where: ShiftAssignmentWhereUniqueInput
  }

  /**
   * ShiftAssignment updateMany
   */
  export type ShiftAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftAssignments.
     */
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ShiftAssignments to update
     */
    where?: ShiftAssignmentWhereInput
    /**
     * Limit how many ShiftAssignments to update.
     */
    limit?: number
  }

  /**
   * ShiftAssignment updateManyAndReturn
   */
  export type ShiftAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update ShiftAssignments.
     */
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ShiftAssignments to update
     */
    where?: ShiftAssignmentWhereInput
    /**
     * Limit how many ShiftAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftAssignment upsert
   */
  export type ShiftAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftAssignment to update in case it exists.
     */
    where: ShiftAssignmentWhereUniqueInput
    /**
     * In case the ShiftAssignment found by the `where` argument doesn't exist, create a new ShiftAssignment with this data.
     */
    create: XOR<ShiftAssignmentCreateInput, ShiftAssignmentUncheckedCreateInput>
    /**
     * In case the ShiftAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftAssignmentUpdateInput, ShiftAssignmentUncheckedUpdateInput>
  }

  /**
   * ShiftAssignment delete
   */
  export type ShiftAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ShiftAssignment to delete.
     */
    where: ShiftAssignmentWhereUniqueInput
  }

  /**
   * ShiftAssignment deleteMany
   */
  export type ShiftAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftAssignments to delete
     */
    where?: ShiftAssignmentWhereInput
    /**
     * Limit how many ShiftAssignments to delete.
     */
    limit?: number
  }

  /**
   * ShiftAssignment without action
   */
  export type ShiftAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model SwapRequest
   */

  export type AggregateSwapRequest = {
    _count: SwapRequestCountAggregateOutputType | null
    _min: SwapRequestMinAggregateOutputType | null
    _max: SwapRequestMaxAggregateOutputType | null
  }

  export type SwapRequestMinAggregateOutputType = {
    id: string | null
    shiftId: string | null
    requesterId: string | null
    targetUserId: string | null
    status: $Enums.SwapStatus | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type SwapRequestMaxAggregateOutputType = {
    id: string | null
    shiftId: string | null
    requesterId: string | null
    targetUserId: string | null
    status: $Enums.SwapStatus | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type SwapRequestCountAggregateOutputType = {
    id: number
    shiftId: number
    requesterId: number
    targetUserId: number
    status: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type SwapRequestMinAggregateInputType = {
    id?: true
    shiftId?: true
    requesterId?: true
    targetUserId?: true
    status?: true
    createdAt?: true
    expiresAt?: true
  }

  export type SwapRequestMaxAggregateInputType = {
    id?: true
    shiftId?: true
    requesterId?: true
    targetUserId?: true
    status?: true
    createdAt?: true
    expiresAt?: true
  }

  export type SwapRequestCountAggregateInputType = {
    id?: true
    shiftId?: true
    requesterId?: true
    targetUserId?: true
    status?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type SwapRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SwapRequest to aggregate.
     */
    where?: SwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapRequests to fetch.
     */
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SwapRequests
    **/
    _count?: true | SwapRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SwapRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SwapRequestMaxAggregateInputType
  }

  export type GetSwapRequestAggregateType<T extends SwapRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateSwapRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSwapRequest[P]>
      : GetScalarType<T[P], AggregateSwapRequest[P]>
  }




  export type SwapRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwapRequestWhereInput
    orderBy?: SwapRequestOrderByWithAggregationInput | SwapRequestOrderByWithAggregationInput[]
    by: SwapRequestScalarFieldEnum[] | SwapRequestScalarFieldEnum
    having?: SwapRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SwapRequestCountAggregateInputType | true
    _min?: SwapRequestMinAggregateInputType
    _max?: SwapRequestMaxAggregateInputType
  }

  export type SwapRequestGroupByOutputType = {
    id: string
    shiftId: string
    requesterId: string
    targetUserId: string | null
    status: $Enums.SwapStatus
    createdAt: Date
    expiresAt: Date
    _count: SwapRequestCountAggregateOutputType | null
    _min: SwapRequestMinAggregateOutputType | null
    _max: SwapRequestMaxAggregateOutputType | null
  }

  type GetSwapRequestGroupByPayload<T extends SwapRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SwapRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SwapRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SwapRequestGroupByOutputType[P]>
            : GetScalarType<T[P], SwapRequestGroupByOutputType[P]>
        }
      >
    >


  export type SwapRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftId?: boolean
    requesterId?: boolean
    targetUserId?: boolean
    status?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | SwapRequest$targetUserArgs<ExtArgs>
  }, ExtArgs["result"]["swapRequest"]>

  export type SwapRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftId?: boolean
    requesterId?: boolean
    targetUserId?: boolean
    status?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | SwapRequest$targetUserArgs<ExtArgs>
  }, ExtArgs["result"]["swapRequest"]>

  export type SwapRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftId?: boolean
    requesterId?: boolean
    targetUserId?: boolean
    status?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | SwapRequest$targetUserArgs<ExtArgs>
  }, ExtArgs["result"]["swapRequest"]>

  export type SwapRequestSelectScalar = {
    id?: boolean
    shiftId?: boolean
    requesterId?: boolean
    targetUserId?: boolean
    status?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type SwapRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shiftId" | "requesterId" | "targetUserId" | "status" | "createdAt" | "expiresAt", ExtArgs["result"]["swapRequest"]>
  export type SwapRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | SwapRequest$targetUserArgs<ExtArgs>
  }
  export type SwapRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | SwapRequest$targetUserArgs<ExtArgs>
  }
  export type SwapRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | SwapRequest$targetUserArgs<ExtArgs>
  }

  export type $SwapRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SwapRequest"
    objects: {
      shift: Prisma.$ShiftPayload<ExtArgs>
      requester: Prisma.$UserPayload<ExtArgs>
      targetUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shiftId: string
      requesterId: string
      targetUserId: string | null
      status: $Enums.SwapStatus
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["swapRequest"]>
    composites: {}
  }

  type SwapRequestGetPayload<S extends boolean | null | undefined | SwapRequestDefaultArgs> = $Result.GetResult<Prisma.$SwapRequestPayload, S>

  type SwapRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SwapRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SwapRequestCountAggregateInputType | true
    }

  export interface SwapRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SwapRequest'], meta: { name: 'SwapRequest' } }
    /**
     * Find zero or one SwapRequest that matches the filter.
     * @param {SwapRequestFindUniqueArgs} args - Arguments to find a SwapRequest
     * @example
     * // Get one SwapRequest
     * const swapRequest = await prisma.swapRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SwapRequestFindUniqueArgs>(args: SelectSubset<T, SwapRequestFindUniqueArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SwapRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SwapRequestFindUniqueOrThrowArgs} args - Arguments to find a SwapRequest
     * @example
     * // Get one SwapRequest
     * const swapRequest = await prisma.swapRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SwapRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, SwapRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SwapRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapRequestFindFirstArgs} args - Arguments to find a SwapRequest
     * @example
     * // Get one SwapRequest
     * const swapRequest = await prisma.swapRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SwapRequestFindFirstArgs>(args?: SelectSubset<T, SwapRequestFindFirstArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SwapRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapRequestFindFirstOrThrowArgs} args - Arguments to find a SwapRequest
     * @example
     * // Get one SwapRequest
     * const swapRequest = await prisma.swapRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SwapRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, SwapRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SwapRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SwapRequests
     * const swapRequests = await prisma.swapRequest.findMany()
     * 
     * // Get first 10 SwapRequests
     * const swapRequests = await prisma.swapRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const swapRequestWithIdOnly = await prisma.swapRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SwapRequestFindManyArgs>(args?: SelectSubset<T, SwapRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SwapRequest.
     * @param {SwapRequestCreateArgs} args - Arguments to create a SwapRequest.
     * @example
     * // Create one SwapRequest
     * const SwapRequest = await prisma.swapRequest.create({
     *   data: {
     *     // ... data to create a SwapRequest
     *   }
     * })
     * 
     */
    create<T extends SwapRequestCreateArgs>(args: SelectSubset<T, SwapRequestCreateArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SwapRequests.
     * @param {SwapRequestCreateManyArgs} args - Arguments to create many SwapRequests.
     * @example
     * // Create many SwapRequests
     * const swapRequest = await prisma.swapRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SwapRequestCreateManyArgs>(args?: SelectSubset<T, SwapRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SwapRequests and returns the data saved in the database.
     * @param {SwapRequestCreateManyAndReturnArgs} args - Arguments to create many SwapRequests.
     * @example
     * // Create many SwapRequests
     * const swapRequest = await prisma.swapRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SwapRequests and only return the `id`
     * const swapRequestWithIdOnly = await prisma.swapRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SwapRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, SwapRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SwapRequest.
     * @param {SwapRequestDeleteArgs} args - Arguments to delete one SwapRequest.
     * @example
     * // Delete one SwapRequest
     * const SwapRequest = await prisma.swapRequest.delete({
     *   where: {
     *     // ... filter to delete one SwapRequest
     *   }
     * })
     * 
     */
    delete<T extends SwapRequestDeleteArgs>(args: SelectSubset<T, SwapRequestDeleteArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SwapRequest.
     * @param {SwapRequestUpdateArgs} args - Arguments to update one SwapRequest.
     * @example
     * // Update one SwapRequest
     * const swapRequest = await prisma.swapRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SwapRequestUpdateArgs>(args: SelectSubset<T, SwapRequestUpdateArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SwapRequests.
     * @param {SwapRequestDeleteManyArgs} args - Arguments to filter SwapRequests to delete.
     * @example
     * // Delete a few SwapRequests
     * const { count } = await prisma.swapRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SwapRequestDeleteManyArgs>(args?: SelectSubset<T, SwapRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SwapRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SwapRequests
     * const swapRequest = await prisma.swapRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SwapRequestUpdateManyArgs>(args: SelectSubset<T, SwapRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SwapRequests and returns the data updated in the database.
     * @param {SwapRequestUpdateManyAndReturnArgs} args - Arguments to update many SwapRequests.
     * @example
     * // Update many SwapRequests
     * const swapRequest = await prisma.swapRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SwapRequests and only return the `id`
     * const swapRequestWithIdOnly = await prisma.swapRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends SwapRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, SwapRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SwapRequest.
     * @param {SwapRequestUpsertArgs} args - Arguments to update or create a SwapRequest.
     * @example
     * // Update or create a SwapRequest
     * const swapRequest = await prisma.swapRequest.upsert({
     *   create: {
     *     // ... data to create a SwapRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SwapRequest we want to update
     *   }
     * })
     */
    upsert<T extends SwapRequestUpsertArgs>(args: SelectSubset<T, SwapRequestUpsertArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SwapRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapRequestCountArgs} args - Arguments to filter SwapRequests to count.
     * @example
     * // Count the number of SwapRequests
     * const count = await prisma.swapRequest.count({
     *   where: {
     *     // ... the filter for the SwapRequests we want to count
     *   }
     * })
    **/
    count<T extends SwapRequestCountArgs>(
      args?: Subset<T, SwapRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SwapRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SwapRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SwapRequestAggregateArgs>(args: Subset<T, SwapRequestAggregateArgs>): Prisma.PrismaPromise<GetSwapRequestAggregateType<T>>

    /**
     * Group by SwapRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapRequestGroupByArgs} args - Group by arguments.
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
      T extends SwapRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SwapRequestGroupByArgs['orderBy'] }
        : { orderBy?: SwapRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SwapRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSwapRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SwapRequest model
   */
  readonly fields: SwapRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SwapRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SwapRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shift<T extends ShiftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShiftDefaultArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetUser<T extends SwapRequest$targetUserArgs<ExtArgs> = {}>(args?: Subset<T, SwapRequest$targetUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SwapRequest model
   */
  interface SwapRequestFieldRefs {
    readonly id: FieldRef<"SwapRequest", 'String'>
    readonly shiftId: FieldRef<"SwapRequest", 'String'>
    readonly requesterId: FieldRef<"SwapRequest", 'String'>
    readonly targetUserId: FieldRef<"SwapRequest", 'String'>
    readonly status: FieldRef<"SwapRequest", 'SwapStatus'>
    readonly createdAt: FieldRef<"SwapRequest", 'DateTime'>
    readonly expiresAt: FieldRef<"SwapRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SwapRequest findUnique
   */
  export type SwapRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which SwapRequest to fetch.
     */
    where: SwapRequestWhereUniqueInput
  }

  /**
   * SwapRequest findUniqueOrThrow
   */
  export type SwapRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which SwapRequest to fetch.
     */
    where: SwapRequestWhereUniqueInput
  }

  /**
   * SwapRequest findFirst
   */
  export type SwapRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which SwapRequest to fetch.
     */
    where?: SwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapRequests to fetch.
     */
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SwapRequests.
     */
    cursor?: SwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SwapRequests.
     */
    distinct?: SwapRequestScalarFieldEnum | SwapRequestScalarFieldEnum[]
  }

  /**
   * SwapRequest findFirstOrThrow
   */
  export type SwapRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which SwapRequest to fetch.
     */
    where?: SwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapRequests to fetch.
     */
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SwapRequests.
     */
    cursor?: SwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SwapRequests.
     */
    distinct?: SwapRequestScalarFieldEnum | SwapRequestScalarFieldEnum[]
  }

  /**
   * SwapRequest findMany
   */
  export type SwapRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which SwapRequests to fetch.
     */
    where?: SwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapRequests to fetch.
     */
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SwapRequests.
     */
    cursor?: SwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapRequests.
     */
    skip?: number
    distinct?: SwapRequestScalarFieldEnum | SwapRequestScalarFieldEnum[]
  }

  /**
   * SwapRequest create
   */
  export type SwapRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a SwapRequest.
     */
    data: XOR<SwapRequestCreateInput, SwapRequestUncheckedCreateInput>
  }

  /**
   * SwapRequest createMany
   */
  export type SwapRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SwapRequests.
     */
    data: SwapRequestCreateManyInput | SwapRequestCreateManyInput[]
  }

  /**
   * SwapRequest createManyAndReturn
   */
  export type SwapRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * The data used to create many SwapRequests.
     */
    data: SwapRequestCreateManyInput | SwapRequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SwapRequest update
   */
  export type SwapRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a SwapRequest.
     */
    data: XOR<SwapRequestUpdateInput, SwapRequestUncheckedUpdateInput>
    /**
     * Choose, which SwapRequest to update.
     */
    where: SwapRequestWhereUniqueInput
  }

  /**
   * SwapRequest updateMany
   */
  export type SwapRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SwapRequests.
     */
    data: XOR<SwapRequestUpdateManyMutationInput, SwapRequestUncheckedUpdateManyInput>
    /**
     * Filter which SwapRequests to update
     */
    where?: SwapRequestWhereInput
    /**
     * Limit how many SwapRequests to update.
     */
    limit?: number
  }

  /**
   * SwapRequest updateManyAndReturn
   */
  export type SwapRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * The data used to update SwapRequests.
     */
    data: XOR<SwapRequestUpdateManyMutationInput, SwapRequestUncheckedUpdateManyInput>
    /**
     * Filter which SwapRequests to update
     */
    where?: SwapRequestWhereInput
    /**
     * Limit how many SwapRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SwapRequest upsert
   */
  export type SwapRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the SwapRequest to update in case it exists.
     */
    where: SwapRequestWhereUniqueInput
    /**
     * In case the SwapRequest found by the `where` argument doesn't exist, create a new SwapRequest with this data.
     */
    create: XOR<SwapRequestCreateInput, SwapRequestUncheckedCreateInput>
    /**
     * In case the SwapRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SwapRequestUpdateInput, SwapRequestUncheckedUpdateInput>
  }

  /**
   * SwapRequest delete
   */
  export type SwapRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * Filter which SwapRequest to delete.
     */
    where: SwapRequestWhereUniqueInput
  }

  /**
   * SwapRequest deleteMany
   */
  export type SwapRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SwapRequests to delete
     */
    where?: SwapRequestWhereInput
    /**
     * Limit how many SwapRequests to delete.
     */
    limit?: number
  }

  /**
   * SwapRequest.targetUser
   */
  export type SwapRequest$targetUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SwapRequest without action
   */
  export type SwapRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
  }


  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type AvailabilitySumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    isException: boolean | null
    specificDate: Date | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    isException: boolean | null
    specificDate: Date | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    userId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    isException: number
    specificDate: number
    _all: number
  }


  export type AvailabilityAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type AvailabilitySumAggregateInputType = {
    dayOfWeek?: true
  }

  export type AvailabilityMinAggregateInputType = {
    id?: true
    userId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isException?: true
    specificDate?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    userId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isException?: true
    specificDate?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    userId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isException?: true
    specificDate?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _avg?: AvailabilityAvgAggregateInputType
    _sum?: AvailabilitySumAggregateInputType
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: string
    userId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isException: boolean
    specificDate: Date | null
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isException?: boolean
    specificDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isException?: boolean
    specificDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isException?: boolean
    specificDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectScalar = {
    id?: boolean
    userId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isException?: boolean
    specificDate?: boolean
  }

  export type AvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dayOfWeek" | "startTime" | "endTime" | "isException" | "specificDate", ExtArgs["result"]["availability"]>
  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dayOfWeek: number
      startTime: string
      endTime: string
      isException: boolean
      specificDate: Date | null
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }

  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityFindUniqueArgs>(args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityFindFirstArgs>(args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityFindManyArgs>(args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
     */
    create<T extends AvailabilityCreateArgs>(args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Availabilities.
     * @param {AvailabilityCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityCreateManyArgs>(args?: SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Availabilities and returns the data saved in the database.
     * @param {AvailabilityCreateManyAndReturnArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityDeleteArgs>(args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityUpdateArgs>(args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityDeleteManyArgs>(args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityUpdateManyArgs>(args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities and returns the data updated in the database.
     * @param {AvailabilityUpdateManyAndReturnArgs} args - Arguments to update many Availabilities.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityUpsertArgs>(args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Availability model
   */
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'String'>
    readonly userId: FieldRef<"Availability", 'String'>
    readonly dayOfWeek: FieldRef<"Availability", 'Int'>
    readonly startTime: FieldRef<"Availability", 'String'>
    readonly endTime: FieldRef<"Availability", 'String'>
    readonly isException: FieldRef<"Availability", 'Boolean'>
    readonly specificDate: FieldRef<"Availability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }

  /**
   * Availability createMany
   */
  export type AvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
  }

  /**
   * Availability createManyAndReturn
   */
  export type AvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
  }

  /**
   * Availability updateManyAndReturn
   */
  export type AvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }

  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to delete.
     */
    limit?: number
  }

  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    title: string
    message: string
    read: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "read" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      message: string
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    entity: string | null
    entityId: string | null
    action: string | null
    before: string | null
    after: string | null
    actorId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    entity: string | null
    entityId: string | null
    action: string | null
    before: string | null
    after: string | null
    actorId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    entity: number
    entityId: number
    action: number
    before: number
    after: number
    actorId: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    entity?: true
    entityId?: true
    action?: true
    before?: true
    after?: true
    actorId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    entity?: true
    entityId?: true
    action?: true
    before?: true
    after?: true
    actorId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    entity?: true
    entityId?: true
    action?: true
    before?: true
    after?: true
    actorId?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    entity: string
    entityId: string
    action: string
    before: string | null
    after: string | null
    actorId: string
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    actorId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    actorId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    actorId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    actorId?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entity" | "entityId" | "action" | "before" | "after" | "actorId" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entity: string
      entityId: string
      action: string
      before: string | null
      after: string | null
      actorId: string
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly before: FieldRef<"AuditLog", 'String'>
    readonly after: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    desiredHours: 'desiredHours',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const StaffSkillScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    skillId: 'skillId'
  };

  export type StaffSkillScalarFieldEnum = (typeof StaffSkillScalarFieldEnum)[keyof typeof StaffSkillScalarFieldEnum]


  export const ShiftScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    skillId: 'skillId',
    startDate: 'startDate',
    endDate: 'endDate',
    headCount: 'headCount',
    status: 'status',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShiftScalarFieldEnum = (typeof ShiftScalarFieldEnum)[keyof typeof ShiftScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    timezone: 'timezone',
    createdAt: 'createdAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const CertificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    locationId: 'locationId'
  };

  export type CertificationScalarFieldEnum = (typeof CertificationScalarFieldEnum)[keyof typeof CertificationScalarFieldEnum]


  export const ShiftAssignmentScalarFieldEnum: {
    id: 'id',
    shiftId: 'shiftId',
    userId: 'userId'
  };

  export type ShiftAssignmentScalarFieldEnum = (typeof ShiftAssignmentScalarFieldEnum)[keyof typeof ShiftAssignmentScalarFieldEnum]


  export const SwapRequestScalarFieldEnum: {
    id: 'id',
    shiftId: 'shiftId',
    requesterId: 'requesterId',
    targetUserId: 'targetUserId',
    status: 'status',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type SwapRequestScalarFieldEnum = (typeof SwapRequestScalarFieldEnum)[keyof typeof SwapRequestScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    isException: 'isException',
    specificDate: 'specificDate'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    entity: 'entity',
    entityId: 'entityId',
    action: 'action',
    before: 'before',
    after: 'after',
    actorId: 'actorId',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ShiftStatus'
   */
  export type EnumShiftStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftStatus'>
    


  /**
   * Reference to a field of type 'SwapStatus'
   */
  export type EnumSwapStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwapStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    desiredHours?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    managedLocations?: LocationListRelationFilter
    skills?: StaffSkillListRelationFilter
    certifications?: CertificationListRelationFilter
    availability?: AvailabilityListRelationFilter
    assignments?: ShiftAssignmentListRelationFilter
    notifications?: NotificationListRelationFilter
    swapRequests?: SwapRequestListRelationFilter
    targetSwaps?: SwapRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    desiredHours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    managedLocations?: LocationOrderByRelationAggregateInput
    skills?: StaffSkillOrderByRelationAggregateInput
    certifications?: CertificationOrderByRelationAggregateInput
    availability?: AvailabilityOrderByRelationAggregateInput
    assignments?: ShiftAssignmentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    swapRequests?: SwapRequestOrderByRelationAggregateInput
    targetSwaps?: SwapRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    desiredHours?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    managedLocations?: LocationListRelationFilter
    skills?: StaffSkillListRelationFilter
    certifications?: CertificationListRelationFilter
    availability?: AvailabilityListRelationFilter
    assignments?: ShiftAssignmentListRelationFilter
    notifications?: NotificationListRelationFilter
    swapRequests?: SwapRequestListRelationFilter
    targetSwaps?: SwapRequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    desiredHours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    desiredHours?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    staff?: StaffSkillListRelationFilter
    shifts?: ShiftListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    staff?: StaffSkillOrderByRelationAggregateInput
    shifts?: ShiftOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    staff?: StaffSkillListRelationFilter
    shifts?: ShiftListRelationFilter
  }, "id" | "name">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type StaffSkillWhereInput = {
    AND?: StaffSkillWhereInput | StaffSkillWhereInput[]
    OR?: StaffSkillWhereInput[]
    NOT?: StaffSkillWhereInput | StaffSkillWhereInput[]
    id?: StringFilter<"StaffSkill"> | string
    userId?: StringFilter<"StaffSkill"> | string
    skillId?: StringFilter<"StaffSkill"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type StaffSkillOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    user?: UserOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type StaffSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StaffSkillWhereInput | StaffSkillWhereInput[]
    OR?: StaffSkillWhereInput[]
    NOT?: StaffSkillWhereInput | StaffSkillWhereInput[]
    userId?: StringFilter<"StaffSkill"> | string
    skillId?: StringFilter<"StaffSkill"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "id">

  export type StaffSkillOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    _count?: StaffSkillCountOrderByAggregateInput
    _max?: StaffSkillMaxOrderByAggregateInput
    _min?: StaffSkillMinOrderByAggregateInput
  }

  export type StaffSkillScalarWhereWithAggregatesInput = {
    AND?: StaffSkillScalarWhereWithAggregatesInput | StaffSkillScalarWhereWithAggregatesInput[]
    OR?: StaffSkillScalarWhereWithAggregatesInput[]
    NOT?: StaffSkillScalarWhereWithAggregatesInput | StaffSkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffSkill"> | string
    userId?: StringWithAggregatesFilter<"StaffSkill"> | string
    skillId?: StringWithAggregatesFilter<"StaffSkill"> | string
  }

  export type ShiftWhereInput = {
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    id?: StringFilter<"Shift"> | string
    locationId?: StringFilter<"Shift"> | string
    skillId?: StringFilter<"Shift"> | string
    startDate?: DateTimeFilter<"Shift"> | Date | string
    endDate?: DateTimeFilter<"Shift"> | Date | string
    headCount?: IntFilter<"Shift"> | number
    status?: EnumShiftStatusFilter<"Shift"> | $Enums.ShiftStatus
    version?: IntFilter<"Shift"> | number
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    requiredSkill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    assignments?: ShiftAssignmentListRelationFilter
    swapRequests?: SwapRequestListRelationFilter
  }

  export type ShiftOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    skillId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    headCount?: SortOrder
    status?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: LocationOrderByWithRelationInput
    requiredSkill?: SkillOrderByWithRelationInput
    assignments?: ShiftAssignmentOrderByRelationAggregateInput
    swapRequests?: SwapRequestOrderByRelationAggregateInput
  }

  export type ShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    locationId?: StringFilter<"Shift"> | string
    skillId?: StringFilter<"Shift"> | string
    startDate?: DateTimeFilter<"Shift"> | Date | string
    endDate?: DateTimeFilter<"Shift"> | Date | string
    headCount?: IntFilter<"Shift"> | number
    status?: EnumShiftStatusFilter<"Shift"> | $Enums.ShiftStatus
    version?: IntFilter<"Shift"> | number
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    requiredSkill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    assignments?: ShiftAssignmentListRelationFilter
    swapRequests?: SwapRequestListRelationFilter
  }, "id">

  export type ShiftOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    skillId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    headCount?: SortOrder
    status?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShiftCountOrderByAggregateInput
    _avg?: ShiftAvgOrderByAggregateInput
    _max?: ShiftMaxOrderByAggregateInput
    _min?: ShiftMinOrderByAggregateInput
    _sum?: ShiftSumOrderByAggregateInput
  }

  export type ShiftScalarWhereWithAggregatesInput = {
    AND?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    OR?: ShiftScalarWhereWithAggregatesInput[]
    NOT?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shift"> | string
    locationId?: StringWithAggregatesFilter<"Shift"> | string
    skillId?: StringWithAggregatesFilter<"Shift"> | string
    startDate?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    headCount?: IntWithAggregatesFilter<"Shift"> | number
    status?: EnumShiftStatusWithAggregatesFilter<"Shift"> | $Enums.ShiftStatus
    version?: IntWithAggregatesFilter<"Shift"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    timezone?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    managers?: UserListRelationFilter
    shifts?: ShiftListRelationFilter
    certifications?: CertificationListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    managers?: UserOrderByRelationAggregateInput
    shifts?: ShiftOrderByRelationAggregateInput
    certifications?: CertificationOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    name?: StringFilter<"Location"> | string
    timezone?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    managers?: UserListRelationFilter
    shifts?: ShiftListRelationFilter
    certifications?: CertificationListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    name?: StringWithAggregatesFilter<"Location"> | string
    timezone?: StringWithAggregatesFilter<"Location"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type CertificationWhereInput = {
    AND?: CertificationWhereInput | CertificationWhereInput[]
    OR?: CertificationWhereInput[]
    NOT?: CertificationWhereInput | CertificationWhereInput[]
    id?: StringFilter<"Certification"> | string
    userId?: StringFilter<"Certification"> | string
    locationId?: StringFilter<"Certification"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }

  export type CertificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    user?: UserOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type CertificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CertificationWhereInput | CertificationWhereInput[]
    OR?: CertificationWhereInput[]
    NOT?: CertificationWhereInput | CertificationWhereInput[]
    userId?: StringFilter<"Certification"> | string
    locationId?: StringFilter<"Certification"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }, "id">

  export type CertificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    _count?: CertificationCountOrderByAggregateInput
    _max?: CertificationMaxOrderByAggregateInput
    _min?: CertificationMinOrderByAggregateInput
  }

  export type CertificationScalarWhereWithAggregatesInput = {
    AND?: CertificationScalarWhereWithAggregatesInput | CertificationScalarWhereWithAggregatesInput[]
    OR?: CertificationScalarWhereWithAggregatesInput[]
    NOT?: CertificationScalarWhereWithAggregatesInput | CertificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certification"> | string
    userId?: StringWithAggregatesFilter<"Certification"> | string
    locationId?: StringWithAggregatesFilter<"Certification"> | string
  }

  export type ShiftAssignmentWhereInput = {
    AND?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    OR?: ShiftAssignmentWhereInput[]
    NOT?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    id?: StringFilter<"ShiftAssignment"> | string
    shiftId?: StringFilter<"ShiftAssignment"> | string
    userId?: StringFilter<"ShiftAssignment"> | string
    shift?: XOR<ShiftScalarRelationFilter, ShiftWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ShiftAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    shiftId?: SortOrder
    userId?: SortOrder
    shift?: ShiftOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ShiftAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    OR?: ShiftAssignmentWhereInput[]
    NOT?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    shiftId?: StringFilter<"ShiftAssignment"> | string
    userId?: StringFilter<"ShiftAssignment"> | string
    shift?: XOR<ShiftScalarRelationFilter, ShiftWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ShiftAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    shiftId?: SortOrder
    userId?: SortOrder
    _count?: ShiftAssignmentCountOrderByAggregateInput
    _max?: ShiftAssignmentMaxOrderByAggregateInput
    _min?: ShiftAssignmentMinOrderByAggregateInput
  }

  export type ShiftAssignmentScalarWhereWithAggregatesInput = {
    AND?: ShiftAssignmentScalarWhereWithAggregatesInput | ShiftAssignmentScalarWhereWithAggregatesInput[]
    OR?: ShiftAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ShiftAssignmentScalarWhereWithAggregatesInput | ShiftAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShiftAssignment"> | string
    shiftId?: StringWithAggregatesFilter<"ShiftAssignment"> | string
    userId?: StringWithAggregatesFilter<"ShiftAssignment"> | string
  }

  export type SwapRequestWhereInput = {
    AND?: SwapRequestWhereInput | SwapRequestWhereInput[]
    OR?: SwapRequestWhereInput[]
    NOT?: SwapRequestWhereInput | SwapRequestWhereInput[]
    id?: StringFilter<"SwapRequest"> | string
    shiftId?: StringFilter<"SwapRequest"> | string
    requesterId?: StringFilter<"SwapRequest"> | string
    targetUserId?: StringNullableFilter<"SwapRequest"> | string | null
    status?: EnumSwapStatusFilter<"SwapRequest"> | $Enums.SwapStatus
    createdAt?: DateTimeFilter<"SwapRequest"> | Date | string
    expiresAt?: DateTimeFilter<"SwapRequest"> | Date | string
    shift?: XOR<ShiftScalarRelationFilter, ShiftWhereInput>
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SwapRequestOrderByWithRelationInput = {
    id?: SortOrder
    shiftId?: SortOrder
    requesterId?: SortOrder
    targetUserId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    shift?: ShiftOrderByWithRelationInput
    requester?: UserOrderByWithRelationInput
    targetUser?: UserOrderByWithRelationInput
  }

  export type SwapRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SwapRequestWhereInput | SwapRequestWhereInput[]
    OR?: SwapRequestWhereInput[]
    NOT?: SwapRequestWhereInput | SwapRequestWhereInput[]
    shiftId?: StringFilter<"SwapRequest"> | string
    requesterId?: StringFilter<"SwapRequest"> | string
    targetUserId?: StringNullableFilter<"SwapRequest"> | string | null
    status?: EnumSwapStatusFilter<"SwapRequest"> | $Enums.SwapStatus
    createdAt?: DateTimeFilter<"SwapRequest"> | Date | string
    expiresAt?: DateTimeFilter<"SwapRequest"> | Date | string
    shift?: XOR<ShiftScalarRelationFilter, ShiftWhereInput>
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type SwapRequestOrderByWithAggregationInput = {
    id?: SortOrder
    shiftId?: SortOrder
    requesterId?: SortOrder
    targetUserId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: SwapRequestCountOrderByAggregateInput
    _max?: SwapRequestMaxOrderByAggregateInput
    _min?: SwapRequestMinOrderByAggregateInput
  }

  export type SwapRequestScalarWhereWithAggregatesInput = {
    AND?: SwapRequestScalarWhereWithAggregatesInput | SwapRequestScalarWhereWithAggregatesInput[]
    OR?: SwapRequestScalarWhereWithAggregatesInput[]
    NOT?: SwapRequestScalarWhereWithAggregatesInput | SwapRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SwapRequest"> | string
    shiftId?: StringWithAggregatesFilter<"SwapRequest"> | string
    requesterId?: StringWithAggregatesFilter<"SwapRequest"> | string
    targetUserId?: StringNullableWithAggregatesFilter<"SwapRequest"> | string | null
    status?: EnumSwapStatusWithAggregatesFilter<"SwapRequest"> | $Enums.SwapStatus
    createdAt?: DateTimeWithAggregatesFilter<"SwapRequest"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"SwapRequest"> | Date | string
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: StringFilter<"Availability"> | string
    userId?: StringFilter<"Availability"> | string
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    isException?: BoolFilter<"Availability"> | boolean
    specificDate?: DateTimeNullableFilter<"Availability"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isException?: SortOrder
    specificDate?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    userId?: StringFilter<"Availability"> | string
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    isException?: BoolFilter<"Availability"> | boolean
    specificDate?: DateTimeNullableFilter<"Availability"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isException?: SortOrder
    specificDate?: SortOrderInput | SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _avg?: AvailabilityAvgOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
    _sum?: AvailabilitySumOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Availability"> | string
    userId?: StringWithAggregatesFilter<"Availability"> | string
    dayOfWeek?: IntWithAggregatesFilter<"Availability"> | number
    startTime?: StringWithAggregatesFilter<"Availability"> | string
    endTime?: StringWithAggregatesFilter<"Availability"> | string
    isException?: BoolWithAggregatesFilter<"Availability"> | boolean
    specificDate?: DateTimeNullableWithAggregatesFilter<"Availability"> | Date | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    before?: StringNullableFilter<"AuditLog"> | string | null
    after?: StringNullableFilter<"AuditLog"> | string | null
    actorId?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    before?: SortOrderInput | SortOrder
    after?: SortOrderInput | SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    before?: StringNullableFilter<"AuditLog"> | string | null
    after?: StringNullableFilter<"AuditLog"> | string | null
    actorId?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    before?: SortOrderInput | SortOrder
    after?: SortOrderInput | SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    before?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    after?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    actorId?: StringWithAggregatesFilter<"AuditLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationCreateNestedManyWithoutManagersInput
    skills?: StaffSkillCreateNestedManyWithoutUserInput
    certifications?: CertificationCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestCreateNestedManyWithoutRequesterInput
    targetSwaps?: SwapRequestCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationUncheckedCreateNestedManyWithoutManagersInput
    skills?: StaffSkillUncheckedCreateNestedManyWithoutUserInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestUncheckedCreateNestedManyWithoutRequesterInput
    targetSwaps?: SwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUpdateManyWithoutManagersNestedInput
    skills?: StaffSkillUpdateManyWithoutUserNestedInput
    certifications?: CertificationUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUpdateManyWithoutRequesterNestedInput
    targetSwaps?: SwapRequestUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUncheckedUpdateManyWithoutManagersNestedInput
    skills?: StaffSkillUncheckedUpdateManyWithoutUserNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUncheckedUpdateManyWithoutRequesterNestedInput
    targetSwaps?: SwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    staff?: StaffSkillCreateNestedManyWithoutSkillInput
    shifts?: ShiftCreateNestedManyWithoutRequiredSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    staff?: StaffSkillUncheckedCreateNestedManyWithoutSkillInput
    shifts?: ShiftUncheckedCreateNestedManyWithoutRequiredSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    staff?: StaffSkillUpdateManyWithoutSkillNestedInput
    shifts?: ShiftUpdateManyWithoutRequiredSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    staff?: StaffSkillUncheckedUpdateManyWithoutSkillNestedInput
    shifts?: ShiftUncheckedUpdateManyWithoutRequiredSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StaffSkillCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutSkillsInput
    skill: SkillCreateNestedOneWithoutStaffInput
  }

  export type StaffSkillUncheckedCreateInput = {
    id?: string
    userId: string
    skillId: string
  }

  export type StaffSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type StaffSkillCreateManyInput = {
    id?: string
    userId: string
    skillId: string
  }

  export type StaffSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type StaffSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type ShiftCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    headCount: number
    status?: $Enums.ShiftStatus
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutShiftsInput
    requiredSkill: SkillCreateNestedOneWithoutShiftsInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutShiftInput
    swapRequests?: SwapRequestCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateInput = {
    id?: string
    locationId: string
    skillId: string
    startDate: Date | string
    endDate: Date | string
    headCount: number
    status?: $Enums.ShiftStatus
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput
    swapRequests?: SwapRequestUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    headCount?: IntFieldUpdateOperationsInput | number
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutShiftsNestedInput
    requiredSkill?: SkillUpdateOneRequiredWithoutShiftsNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutShiftNestedInput
    swapRequests?: SwapRequestUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    headCount?: IntFieldUpdateOperationsInput | number
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput
    swapRequests?: SwapRequestUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type ShiftCreateManyInput = {
    id?: string
    locationId: string
    skillId: string
    startDate: Date | string
    endDate: Date | string
    headCount: number
    status?: $Enums.ShiftStatus
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    headCount?: IntFieldUpdateOperationsInput | number
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    headCount?: IntFieldUpdateOperationsInput | number
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    timezone: string
    createdAt?: Date | string
    managers?: UserCreateNestedManyWithoutManagedLocationsInput
    shifts?: ShiftCreateNestedManyWithoutLocationInput
    certifications?: CertificationCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    name: string
    timezone: string
    createdAt?: Date | string
    managers?: UserUncheckedCreateNestedManyWithoutManagedLocationsInput
    shifts?: ShiftUncheckedCreateNestedManyWithoutLocationInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserUpdateManyWithoutManagedLocationsNestedInput
    shifts?: ShiftUpdateManyWithoutLocationNestedInput
    certifications?: CertificationUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserUncheckedUpdateManyWithoutManagedLocationsNestedInput
    shifts?: ShiftUncheckedUpdateManyWithoutLocationNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    name: string
    timezone: string
    createdAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificationCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutCertificationsInput
    location: LocationCreateNestedOneWithoutCertificationsInput
  }

  export type CertificationUncheckedCreateInput = {
    id?: string
    userId: string
    locationId: string
  }

  export type CertificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCertificationsNestedInput
    location?: LocationUpdateOneRequiredWithoutCertificationsNestedInput
  }

  export type CertificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificationCreateManyInput = {
    id?: string
    userId: string
    locationId: string
  }

  export type CertificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type CertificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type ShiftAssignmentCreateInput = {
    id?: string
    shift: ShiftCreateNestedOneWithoutAssignmentsInput
    user: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type ShiftAssignmentUncheckedCreateInput = {
    id?: string
    shiftId: string
    userId: string
  }

  export type ShiftAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shift?: ShiftUpdateOneRequiredWithoutAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ShiftAssignmentCreateManyInput = {
    id?: string
    shiftId: string
    userId: string
  }

  export type ShiftAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ShiftAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SwapRequestCreateInput = {
    id?: string
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    expiresAt: Date | string
    shift: ShiftCreateNestedOneWithoutSwapRequestsInput
    requester: UserCreateNestedOneWithoutSwapRequestsInput
    targetUser?: UserCreateNestedOneWithoutTargetSwapsInput
  }

  export type SwapRequestUncheckedCreateInput = {
    id?: string
    shiftId: string
    requesterId: string
    targetUserId?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SwapRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: ShiftUpdateOneRequiredWithoutSwapRequestsNestedInput
    requester?: UserUpdateOneRequiredWithoutSwapRequestsNestedInput
    targetUser?: UserUpdateOneWithoutTargetSwapsNestedInput
  }

  export type SwapRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    targetUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapRequestCreateManyInput = {
    id?: string
    shiftId: string
    requesterId: string
    targetUserId?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SwapRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    targetUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isException?: boolean
    specificDate?: Date | string | null
    user: UserCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: string
    userId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isException?: boolean
    specificDate?: Date | string | null
  }

  export type AvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isException?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isException?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvailabilityCreateManyInput = {
    id?: string
    userId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isException?: boolean
    specificDate?: Date | string | null
  }

  export type AvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isException?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isException?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    entity: string
    entityId: string
    action: string
    before?: string | null
    after?: string | null
    actorId: string
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    entity: string
    entityId: string
    action: string
    before?: string | null
    after?: string | null
    actorId: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableStringFieldUpdateOperationsInput | string | null
    after?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableStringFieldUpdateOperationsInput | string | null
    after?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    entity: string
    entityId: string
    action: string
    before?: string | null
    after?: string | null
    actorId: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableStringFieldUpdateOperationsInput | string | null
    after?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableStringFieldUpdateOperationsInput | string | null
    after?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type StaffSkillListRelationFilter = {
    every?: StaffSkillWhereInput
    some?: StaffSkillWhereInput
    none?: StaffSkillWhereInput
  }

  export type CertificationListRelationFilter = {
    every?: CertificationWhereInput
    some?: CertificationWhereInput
    none?: CertificationWhereInput
  }

  export type AvailabilityListRelationFilter = {
    every?: AvailabilityWhereInput
    some?: AvailabilityWhereInput
    none?: AvailabilityWhereInput
  }

  export type ShiftAssignmentListRelationFilter = {
    every?: ShiftAssignmentWhereInput
    some?: ShiftAssignmentWhereInput
    none?: ShiftAssignmentWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SwapRequestListRelationFilter = {
    every?: SwapRequestWhereInput
    some?: SwapRequestWhereInput
    none?: SwapRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SwapRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    desiredHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    desiredHours?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    desiredHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    desiredHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    desiredHours?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ShiftListRelationFilter = {
    every?: ShiftWhereInput
    some?: ShiftWhereInput
    none?: ShiftWhereInput
  }

  export type ShiftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type StaffSkillCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
  }

  export type StaffSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
  }

  export type StaffSkillMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumShiftStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftStatus | EnumShiftStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftStatus[]
    notIn?: $Enums.ShiftStatus[]
    not?: NestedEnumShiftStatusFilter<$PrismaModel> | $Enums.ShiftStatus
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type ShiftCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    skillId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    headCount?: SortOrder
    status?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftAvgOrderByAggregateInput = {
    headCount?: SortOrder
    version?: SortOrder
  }

  export type ShiftMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    skillId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    headCount?: SortOrder
    status?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    skillId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    headCount?: SortOrder
    status?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftSumOrderByAggregateInput = {
    headCount?: SortOrder
    version?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumShiftStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftStatus | EnumShiftStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftStatus[]
    notIn?: $Enums.ShiftStatus[]
    not?: NestedEnumShiftStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShiftStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftStatusFilter<$PrismaModel>
    _max?: NestedEnumShiftStatusFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type CertificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
  }

  export type CertificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
  }

  export type CertificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
  }

  export type ShiftScalarRelationFilter = {
    is?: ShiftWhereInput
    isNot?: ShiftWhereInput
  }

  export type ShiftAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    shiftId?: SortOrder
    userId?: SortOrder
  }

  export type ShiftAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    shiftId?: SortOrder
    userId?: SortOrder
  }

  export type ShiftAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    shiftId?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSwapStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[]
    notIn?: $Enums.SwapStatus[]
    not?: NestedEnumSwapStatusFilter<$PrismaModel> | $Enums.SwapStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SwapRequestCountOrderByAggregateInput = {
    id?: SortOrder
    shiftId?: SortOrder
    requesterId?: SortOrder
    targetUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SwapRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    shiftId?: SortOrder
    requesterId?: SortOrder
    targetUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SwapRequestMinOrderByAggregateInput = {
    id?: SortOrder
    shiftId?: SortOrder
    requesterId?: SortOrder
    targetUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type EnumSwapStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[]
    notIn?: $Enums.SwapStatus[]
    not?: NestedEnumSwapStatusWithAggregatesFilter<$PrismaModel> | $Enums.SwapStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwapStatusFilter<$PrismaModel>
    _max?: NestedEnumSwapStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isException?: SortOrder
    specificDate?: SortOrder
  }

  export type AvailabilityAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isException?: SortOrder
    specificDate?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isException?: SortOrder
    specificDate?: SortOrder
  }

  export type AvailabilitySumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    before?: SortOrder
    after?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    before?: SortOrder
    after?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    before?: SortOrder
    after?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationCreateNestedManyWithoutManagersInput = {
    create?: XOR<LocationCreateWithoutManagersInput, LocationUncheckedCreateWithoutManagersInput> | LocationCreateWithoutManagersInput[] | LocationUncheckedCreateWithoutManagersInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutManagersInput | LocationCreateOrConnectWithoutManagersInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type StaffSkillCreateNestedManyWithoutUserInput = {
    create?: XOR<StaffSkillCreateWithoutUserInput, StaffSkillUncheckedCreateWithoutUserInput> | StaffSkillCreateWithoutUserInput[] | StaffSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffSkillCreateOrConnectWithoutUserInput | StaffSkillCreateOrConnectWithoutUserInput[]
    createMany?: StaffSkillCreateManyUserInputEnvelope
    connect?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
  }

  export type CertificationCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificationCreateWithoutUserInput, CertificationUncheckedCreateWithoutUserInput> | CertificationCreateWithoutUserInput[] | CertificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificationCreateOrConnectWithoutUserInput | CertificationCreateOrConnectWithoutUserInput[]
    createMany?: CertificationCreateManyUserInputEnvelope
    connect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
  }

  export type AvailabilityCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type ShiftAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput> | ShiftAssignmentCreateWithoutUserInput[] | ShiftAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutUserInput | ShiftAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: ShiftAssignmentCreateManyUserInputEnvelope
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type SwapRequestCreateNestedManyWithoutRequesterInput = {
    create?: XOR<SwapRequestCreateWithoutRequesterInput, SwapRequestUncheckedCreateWithoutRequesterInput> | SwapRequestCreateWithoutRequesterInput[] | SwapRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutRequesterInput | SwapRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: SwapRequestCreateManyRequesterInputEnvelope
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
  }

  export type SwapRequestCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<SwapRequestCreateWithoutTargetUserInput, SwapRequestUncheckedCreateWithoutTargetUserInput> | SwapRequestCreateWithoutTargetUserInput[] | SwapRequestUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutTargetUserInput | SwapRequestCreateOrConnectWithoutTargetUserInput[]
    createMany?: SwapRequestCreateManyTargetUserInputEnvelope
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutManagersInput = {
    create?: XOR<LocationCreateWithoutManagersInput, LocationUncheckedCreateWithoutManagersInput> | LocationCreateWithoutManagersInput[] | LocationUncheckedCreateWithoutManagersInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutManagersInput | LocationCreateOrConnectWithoutManagersInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type StaffSkillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StaffSkillCreateWithoutUserInput, StaffSkillUncheckedCreateWithoutUserInput> | StaffSkillCreateWithoutUserInput[] | StaffSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffSkillCreateOrConnectWithoutUserInput | StaffSkillCreateOrConnectWithoutUserInput[]
    createMany?: StaffSkillCreateManyUserInputEnvelope
    connect?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
  }

  export type CertificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificationCreateWithoutUserInput, CertificationUncheckedCreateWithoutUserInput> | CertificationCreateWithoutUserInput[] | CertificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificationCreateOrConnectWithoutUserInput | CertificationCreateOrConnectWithoutUserInput[]
    createMany?: CertificationCreateManyUserInputEnvelope
    connect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput> | ShiftAssignmentCreateWithoutUserInput[] | ShiftAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutUserInput | ShiftAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: ShiftAssignmentCreateManyUserInputEnvelope
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type SwapRequestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<SwapRequestCreateWithoutRequesterInput, SwapRequestUncheckedCreateWithoutRequesterInput> | SwapRequestCreateWithoutRequesterInput[] | SwapRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutRequesterInput | SwapRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: SwapRequestCreateManyRequesterInputEnvelope
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
  }

  export type SwapRequestUncheckedCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<SwapRequestCreateWithoutTargetUserInput, SwapRequestUncheckedCreateWithoutTargetUserInput> | SwapRequestCreateWithoutTargetUserInput[] | SwapRequestUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutTargetUserInput | SwapRequestCreateOrConnectWithoutTargetUserInput[]
    createMany?: SwapRequestCreateManyTargetUserInputEnvelope
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LocationUpdateManyWithoutManagersNestedInput = {
    create?: XOR<LocationCreateWithoutManagersInput, LocationUncheckedCreateWithoutManagersInput> | LocationCreateWithoutManagersInput[] | LocationUncheckedCreateWithoutManagersInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutManagersInput | LocationCreateOrConnectWithoutManagersInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutManagersInput | LocationUpsertWithWhereUniqueWithoutManagersInput[]
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutManagersInput | LocationUpdateWithWhereUniqueWithoutManagersInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutManagersInput | LocationUpdateManyWithWhereWithoutManagersInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type StaffSkillUpdateManyWithoutUserNestedInput = {
    create?: XOR<StaffSkillCreateWithoutUserInput, StaffSkillUncheckedCreateWithoutUserInput> | StaffSkillCreateWithoutUserInput[] | StaffSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffSkillCreateOrConnectWithoutUserInput | StaffSkillCreateOrConnectWithoutUserInput[]
    upsert?: StaffSkillUpsertWithWhereUniqueWithoutUserInput | StaffSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StaffSkillCreateManyUserInputEnvelope
    set?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    disconnect?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    delete?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    connect?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    update?: StaffSkillUpdateWithWhereUniqueWithoutUserInput | StaffSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StaffSkillUpdateManyWithWhereWithoutUserInput | StaffSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StaffSkillScalarWhereInput | StaffSkillScalarWhereInput[]
  }

  export type CertificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificationCreateWithoutUserInput, CertificationUncheckedCreateWithoutUserInput> | CertificationCreateWithoutUserInput[] | CertificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificationCreateOrConnectWithoutUserInput | CertificationCreateOrConnectWithoutUserInput[]
    upsert?: CertificationUpsertWithWhereUniqueWithoutUserInput | CertificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificationCreateManyUserInputEnvelope
    set?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    disconnect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    delete?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    connect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    update?: CertificationUpdateWithWhereUniqueWithoutUserInput | CertificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificationUpdateManyWithWhereWithoutUserInput | CertificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificationScalarWhereInput | CertificationScalarWhereInput[]
  }

  export type AvailabilityUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutUserInput | AvailabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutUserInput | AvailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutUserInput | AvailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type ShiftAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput> | ShiftAssignmentCreateWithoutUserInput[] | ShiftAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutUserInput | ShiftAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput | ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShiftAssignmentCreateManyUserInputEnvelope
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput | ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutUserInput | ShiftAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type SwapRequestUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<SwapRequestCreateWithoutRequesterInput, SwapRequestUncheckedCreateWithoutRequesterInput> | SwapRequestCreateWithoutRequesterInput[] | SwapRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutRequesterInput | SwapRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: SwapRequestUpsertWithWhereUniqueWithoutRequesterInput | SwapRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: SwapRequestCreateManyRequesterInputEnvelope
    set?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    disconnect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    delete?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    update?: SwapRequestUpdateWithWhereUniqueWithoutRequesterInput | SwapRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: SwapRequestUpdateManyWithWhereWithoutRequesterInput | SwapRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
  }

  export type SwapRequestUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<SwapRequestCreateWithoutTargetUserInput, SwapRequestUncheckedCreateWithoutTargetUserInput> | SwapRequestCreateWithoutTargetUserInput[] | SwapRequestUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutTargetUserInput | SwapRequestCreateOrConnectWithoutTargetUserInput[]
    upsert?: SwapRequestUpsertWithWhereUniqueWithoutTargetUserInput | SwapRequestUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: SwapRequestCreateManyTargetUserInputEnvelope
    set?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    disconnect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    delete?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    update?: SwapRequestUpdateWithWhereUniqueWithoutTargetUserInput | SwapRequestUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: SwapRequestUpdateManyWithWhereWithoutTargetUserInput | SwapRequestUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutManagersNestedInput = {
    create?: XOR<LocationCreateWithoutManagersInput, LocationUncheckedCreateWithoutManagersInput> | LocationCreateWithoutManagersInput[] | LocationUncheckedCreateWithoutManagersInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutManagersInput | LocationCreateOrConnectWithoutManagersInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutManagersInput | LocationUpsertWithWhereUniqueWithoutManagersInput[]
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutManagersInput | LocationUpdateWithWhereUniqueWithoutManagersInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutManagersInput | LocationUpdateManyWithWhereWithoutManagersInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type StaffSkillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StaffSkillCreateWithoutUserInput, StaffSkillUncheckedCreateWithoutUserInput> | StaffSkillCreateWithoutUserInput[] | StaffSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffSkillCreateOrConnectWithoutUserInput | StaffSkillCreateOrConnectWithoutUserInput[]
    upsert?: StaffSkillUpsertWithWhereUniqueWithoutUserInput | StaffSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StaffSkillCreateManyUserInputEnvelope
    set?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    disconnect?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    delete?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    connect?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    update?: StaffSkillUpdateWithWhereUniqueWithoutUserInput | StaffSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StaffSkillUpdateManyWithWhereWithoutUserInput | StaffSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StaffSkillScalarWhereInput | StaffSkillScalarWhereInput[]
  }

  export type CertificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificationCreateWithoutUserInput, CertificationUncheckedCreateWithoutUserInput> | CertificationCreateWithoutUserInput[] | CertificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificationCreateOrConnectWithoutUserInput | CertificationCreateOrConnectWithoutUserInput[]
    upsert?: CertificationUpsertWithWhereUniqueWithoutUserInput | CertificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificationCreateManyUserInputEnvelope
    set?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    disconnect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    delete?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    connect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    update?: CertificationUpdateWithWhereUniqueWithoutUserInput | CertificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificationUpdateManyWithWhereWithoutUserInput | CertificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificationScalarWhereInput | CertificationScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutUserInput | AvailabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutUserInput | AvailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutUserInput | AvailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput> | ShiftAssignmentCreateWithoutUserInput[] | ShiftAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutUserInput | ShiftAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput | ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShiftAssignmentCreateManyUserInputEnvelope
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput | ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutUserInput | ShiftAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type SwapRequestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<SwapRequestCreateWithoutRequesterInput, SwapRequestUncheckedCreateWithoutRequesterInput> | SwapRequestCreateWithoutRequesterInput[] | SwapRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutRequesterInput | SwapRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: SwapRequestUpsertWithWhereUniqueWithoutRequesterInput | SwapRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: SwapRequestCreateManyRequesterInputEnvelope
    set?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    disconnect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    delete?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    update?: SwapRequestUpdateWithWhereUniqueWithoutRequesterInput | SwapRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: SwapRequestUpdateManyWithWhereWithoutRequesterInput | SwapRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
  }

  export type SwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<SwapRequestCreateWithoutTargetUserInput, SwapRequestUncheckedCreateWithoutTargetUserInput> | SwapRequestCreateWithoutTargetUserInput[] | SwapRequestUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutTargetUserInput | SwapRequestCreateOrConnectWithoutTargetUserInput[]
    upsert?: SwapRequestUpsertWithWhereUniqueWithoutTargetUserInput | SwapRequestUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: SwapRequestCreateManyTargetUserInputEnvelope
    set?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    disconnect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    delete?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    update?: SwapRequestUpdateWithWhereUniqueWithoutTargetUserInput | SwapRequestUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: SwapRequestUpdateManyWithWhereWithoutTargetUserInput | SwapRequestUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
  }

  export type StaffSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<StaffSkillCreateWithoutSkillInput, StaffSkillUncheckedCreateWithoutSkillInput> | StaffSkillCreateWithoutSkillInput[] | StaffSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: StaffSkillCreateOrConnectWithoutSkillInput | StaffSkillCreateOrConnectWithoutSkillInput[]
    createMany?: StaffSkillCreateManySkillInputEnvelope
    connect?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
  }

  export type ShiftCreateNestedManyWithoutRequiredSkillInput = {
    create?: XOR<ShiftCreateWithoutRequiredSkillInput, ShiftUncheckedCreateWithoutRequiredSkillInput> | ShiftCreateWithoutRequiredSkillInput[] | ShiftUncheckedCreateWithoutRequiredSkillInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutRequiredSkillInput | ShiftCreateOrConnectWithoutRequiredSkillInput[]
    createMany?: ShiftCreateManyRequiredSkillInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type StaffSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<StaffSkillCreateWithoutSkillInput, StaffSkillUncheckedCreateWithoutSkillInput> | StaffSkillCreateWithoutSkillInput[] | StaffSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: StaffSkillCreateOrConnectWithoutSkillInput | StaffSkillCreateOrConnectWithoutSkillInput[]
    createMany?: StaffSkillCreateManySkillInputEnvelope
    connect?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
  }

  export type ShiftUncheckedCreateNestedManyWithoutRequiredSkillInput = {
    create?: XOR<ShiftCreateWithoutRequiredSkillInput, ShiftUncheckedCreateWithoutRequiredSkillInput> | ShiftCreateWithoutRequiredSkillInput[] | ShiftUncheckedCreateWithoutRequiredSkillInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutRequiredSkillInput | ShiftCreateOrConnectWithoutRequiredSkillInput[]
    createMany?: ShiftCreateManyRequiredSkillInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type StaffSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<StaffSkillCreateWithoutSkillInput, StaffSkillUncheckedCreateWithoutSkillInput> | StaffSkillCreateWithoutSkillInput[] | StaffSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: StaffSkillCreateOrConnectWithoutSkillInput | StaffSkillCreateOrConnectWithoutSkillInput[]
    upsert?: StaffSkillUpsertWithWhereUniqueWithoutSkillInput | StaffSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: StaffSkillCreateManySkillInputEnvelope
    set?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    disconnect?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    delete?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    connect?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    update?: StaffSkillUpdateWithWhereUniqueWithoutSkillInput | StaffSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: StaffSkillUpdateManyWithWhereWithoutSkillInput | StaffSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: StaffSkillScalarWhereInput | StaffSkillScalarWhereInput[]
  }

  export type ShiftUpdateManyWithoutRequiredSkillNestedInput = {
    create?: XOR<ShiftCreateWithoutRequiredSkillInput, ShiftUncheckedCreateWithoutRequiredSkillInput> | ShiftCreateWithoutRequiredSkillInput[] | ShiftUncheckedCreateWithoutRequiredSkillInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutRequiredSkillInput | ShiftCreateOrConnectWithoutRequiredSkillInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutRequiredSkillInput | ShiftUpsertWithWhereUniqueWithoutRequiredSkillInput[]
    createMany?: ShiftCreateManyRequiredSkillInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutRequiredSkillInput | ShiftUpdateWithWhereUniqueWithoutRequiredSkillInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutRequiredSkillInput | ShiftUpdateManyWithWhereWithoutRequiredSkillInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type StaffSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<StaffSkillCreateWithoutSkillInput, StaffSkillUncheckedCreateWithoutSkillInput> | StaffSkillCreateWithoutSkillInput[] | StaffSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: StaffSkillCreateOrConnectWithoutSkillInput | StaffSkillCreateOrConnectWithoutSkillInput[]
    upsert?: StaffSkillUpsertWithWhereUniqueWithoutSkillInput | StaffSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: StaffSkillCreateManySkillInputEnvelope
    set?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    disconnect?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    delete?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    connect?: StaffSkillWhereUniqueInput | StaffSkillWhereUniqueInput[]
    update?: StaffSkillUpdateWithWhereUniqueWithoutSkillInput | StaffSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: StaffSkillUpdateManyWithWhereWithoutSkillInput | StaffSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: StaffSkillScalarWhereInput | StaffSkillScalarWhereInput[]
  }

  export type ShiftUncheckedUpdateManyWithoutRequiredSkillNestedInput = {
    create?: XOR<ShiftCreateWithoutRequiredSkillInput, ShiftUncheckedCreateWithoutRequiredSkillInput> | ShiftCreateWithoutRequiredSkillInput[] | ShiftUncheckedCreateWithoutRequiredSkillInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutRequiredSkillInput | ShiftCreateOrConnectWithoutRequiredSkillInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutRequiredSkillInput | ShiftUpsertWithWhereUniqueWithoutRequiredSkillInput[]
    createMany?: ShiftCreateManyRequiredSkillInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutRequiredSkillInput | ShiftUpdateWithWhereUniqueWithoutRequiredSkillInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutRequiredSkillInput | ShiftUpdateManyWithWhereWithoutRequiredSkillInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSkillsInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    connect?: UserWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutStaffInput = {
    create?: XOR<SkillCreateWithoutStaffInput, SkillUncheckedCreateWithoutStaffInput>
    connectOrCreate?: SkillCreateOrConnectWithoutStaffInput
    connect?: SkillWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    upsert?: UserUpsertWithoutSkillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillsInput, UserUpdateWithoutSkillsInput>, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<SkillCreateWithoutStaffInput, SkillUncheckedCreateWithoutStaffInput>
    connectOrCreate?: SkillCreateOrConnectWithoutStaffInput
    upsert?: SkillUpsertWithoutStaffInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutStaffInput, SkillUpdateWithoutStaffInput>, SkillUncheckedUpdateWithoutStaffInput>
  }

  export type LocationCreateNestedOneWithoutShiftsInput = {
    create?: XOR<LocationCreateWithoutShiftsInput, LocationUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutShiftsInput
    connect?: LocationWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutShiftsInput = {
    create?: XOR<SkillCreateWithoutShiftsInput, SkillUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutShiftsInput
    connect?: SkillWhereUniqueInput
  }

  export type ShiftAssignmentCreateNestedManyWithoutShiftInput = {
    create?: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput> | ShiftAssignmentCreateWithoutShiftInput[] | ShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutShiftInput | ShiftAssignmentCreateOrConnectWithoutShiftInput[]
    createMany?: ShiftAssignmentCreateManyShiftInputEnvelope
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type SwapRequestCreateNestedManyWithoutShiftInput = {
    create?: XOR<SwapRequestCreateWithoutShiftInput, SwapRequestUncheckedCreateWithoutShiftInput> | SwapRequestCreateWithoutShiftInput[] | SwapRequestUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutShiftInput | SwapRequestCreateOrConnectWithoutShiftInput[]
    createMany?: SwapRequestCreateManyShiftInputEnvelope
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
  }

  export type ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput = {
    create?: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput> | ShiftAssignmentCreateWithoutShiftInput[] | ShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutShiftInput | ShiftAssignmentCreateOrConnectWithoutShiftInput[]
    createMany?: ShiftAssignmentCreateManyShiftInputEnvelope
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type SwapRequestUncheckedCreateNestedManyWithoutShiftInput = {
    create?: XOR<SwapRequestCreateWithoutShiftInput, SwapRequestUncheckedCreateWithoutShiftInput> | SwapRequestCreateWithoutShiftInput[] | SwapRequestUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutShiftInput | SwapRequestCreateOrConnectWithoutShiftInput[]
    createMany?: SwapRequestCreateManyShiftInputEnvelope
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumShiftStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShiftStatus
  }

  export type LocationUpdateOneRequiredWithoutShiftsNestedInput = {
    create?: XOR<LocationCreateWithoutShiftsInput, LocationUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutShiftsInput
    upsert?: LocationUpsertWithoutShiftsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutShiftsInput, LocationUpdateWithoutShiftsInput>, LocationUncheckedUpdateWithoutShiftsInput>
  }

  export type SkillUpdateOneRequiredWithoutShiftsNestedInput = {
    create?: XOR<SkillCreateWithoutShiftsInput, SkillUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutShiftsInput
    upsert?: SkillUpsertWithoutShiftsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutShiftsInput, SkillUpdateWithoutShiftsInput>, SkillUncheckedUpdateWithoutShiftsInput>
  }

  export type ShiftAssignmentUpdateManyWithoutShiftNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput> | ShiftAssignmentCreateWithoutShiftInput[] | ShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutShiftInput | ShiftAssignmentCreateOrConnectWithoutShiftInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput | ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: ShiftAssignmentCreateManyShiftInputEnvelope
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput | ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutShiftInput | ShiftAssignmentUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type SwapRequestUpdateManyWithoutShiftNestedInput = {
    create?: XOR<SwapRequestCreateWithoutShiftInput, SwapRequestUncheckedCreateWithoutShiftInput> | SwapRequestCreateWithoutShiftInput[] | SwapRequestUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutShiftInput | SwapRequestCreateOrConnectWithoutShiftInput[]
    upsert?: SwapRequestUpsertWithWhereUniqueWithoutShiftInput | SwapRequestUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: SwapRequestCreateManyShiftInputEnvelope
    set?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    disconnect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    delete?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    update?: SwapRequestUpdateWithWhereUniqueWithoutShiftInput | SwapRequestUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: SwapRequestUpdateManyWithWhereWithoutShiftInput | SwapRequestUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput> | ShiftAssignmentCreateWithoutShiftInput[] | ShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutShiftInput | ShiftAssignmentCreateOrConnectWithoutShiftInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput | ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: ShiftAssignmentCreateManyShiftInputEnvelope
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput | ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutShiftInput | ShiftAssignmentUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type SwapRequestUncheckedUpdateManyWithoutShiftNestedInput = {
    create?: XOR<SwapRequestCreateWithoutShiftInput, SwapRequestUncheckedCreateWithoutShiftInput> | SwapRequestCreateWithoutShiftInput[] | SwapRequestUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutShiftInput | SwapRequestCreateOrConnectWithoutShiftInput[]
    upsert?: SwapRequestUpsertWithWhereUniqueWithoutShiftInput | SwapRequestUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: SwapRequestCreateManyShiftInputEnvelope
    set?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    disconnect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    delete?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    update?: SwapRequestUpdateWithWhereUniqueWithoutShiftInput | SwapRequestUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: SwapRequestUpdateManyWithWhereWithoutShiftInput | SwapRequestUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutManagedLocationsInput = {
    create?: XOR<UserCreateWithoutManagedLocationsInput, UserUncheckedCreateWithoutManagedLocationsInput> | UserCreateWithoutManagedLocationsInput[] | UserUncheckedCreateWithoutManagedLocationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagedLocationsInput | UserCreateOrConnectWithoutManagedLocationsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ShiftCreateNestedManyWithoutLocationInput = {
    create?: XOR<ShiftCreateWithoutLocationInput, ShiftUncheckedCreateWithoutLocationInput> | ShiftCreateWithoutLocationInput[] | ShiftUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutLocationInput | ShiftCreateOrConnectWithoutLocationInput[]
    createMany?: ShiftCreateManyLocationInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type CertificationCreateNestedManyWithoutLocationInput = {
    create?: XOR<CertificationCreateWithoutLocationInput, CertificationUncheckedCreateWithoutLocationInput> | CertificationCreateWithoutLocationInput[] | CertificationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: CertificationCreateOrConnectWithoutLocationInput | CertificationCreateOrConnectWithoutLocationInput[]
    createMany?: CertificationCreateManyLocationInputEnvelope
    connect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutManagedLocationsInput = {
    create?: XOR<UserCreateWithoutManagedLocationsInput, UserUncheckedCreateWithoutManagedLocationsInput> | UserCreateWithoutManagedLocationsInput[] | UserUncheckedCreateWithoutManagedLocationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagedLocationsInput | UserCreateOrConnectWithoutManagedLocationsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ShiftUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<ShiftCreateWithoutLocationInput, ShiftUncheckedCreateWithoutLocationInput> | ShiftCreateWithoutLocationInput[] | ShiftUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutLocationInput | ShiftCreateOrConnectWithoutLocationInput[]
    createMany?: ShiftCreateManyLocationInputEnvelope
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type CertificationUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<CertificationCreateWithoutLocationInput, CertificationUncheckedCreateWithoutLocationInput> | CertificationCreateWithoutLocationInput[] | CertificationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: CertificationCreateOrConnectWithoutLocationInput | CertificationCreateOrConnectWithoutLocationInput[]
    createMany?: CertificationCreateManyLocationInputEnvelope
    connect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutManagedLocationsNestedInput = {
    create?: XOR<UserCreateWithoutManagedLocationsInput, UserUncheckedCreateWithoutManagedLocationsInput> | UserCreateWithoutManagedLocationsInput[] | UserUncheckedCreateWithoutManagedLocationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagedLocationsInput | UserCreateOrConnectWithoutManagedLocationsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagedLocationsInput | UserUpsertWithWhereUniqueWithoutManagedLocationsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagedLocationsInput | UserUpdateWithWhereUniqueWithoutManagedLocationsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagedLocationsInput | UserUpdateManyWithWhereWithoutManagedLocationsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ShiftUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ShiftCreateWithoutLocationInput, ShiftUncheckedCreateWithoutLocationInput> | ShiftCreateWithoutLocationInput[] | ShiftUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutLocationInput | ShiftCreateOrConnectWithoutLocationInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutLocationInput | ShiftUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ShiftCreateManyLocationInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutLocationInput | ShiftUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutLocationInput | ShiftUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type CertificationUpdateManyWithoutLocationNestedInput = {
    create?: XOR<CertificationCreateWithoutLocationInput, CertificationUncheckedCreateWithoutLocationInput> | CertificationCreateWithoutLocationInput[] | CertificationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: CertificationCreateOrConnectWithoutLocationInput | CertificationCreateOrConnectWithoutLocationInput[]
    upsert?: CertificationUpsertWithWhereUniqueWithoutLocationInput | CertificationUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: CertificationCreateManyLocationInputEnvelope
    set?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    disconnect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    delete?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    connect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    update?: CertificationUpdateWithWhereUniqueWithoutLocationInput | CertificationUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: CertificationUpdateManyWithWhereWithoutLocationInput | CertificationUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: CertificationScalarWhereInput | CertificationScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutManagedLocationsNestedInput = {
    create?: XOR<UserCreateWithoutManagedLocationsInput, UserUncheckedCreateWithoutManagedLocationsInput> | UserCreateWithoutManagedLocationsInput[] | UserUncheckedCreateWithoutManagedLocationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagedLocationsInput | UserCreateOrConnectWithoutManagedLocationsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagedLocationsInput | UserUpsertWithWhereUniqueWithoutManagedLocationsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagedLocationsInput | UserUpdateWithWhereUniqueWithoutManagedLocationsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagedLocationsInput | UserUpdateManyWithWhereWithoutManagedLocationsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ShiftUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ShiftCreateWithoutLocationInput, ShiftUncheckedCreateWithoutLocationInput> | ShiftCreateWithoutLocationInput[] | ShiftUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutLocationInput | ShiftCreateOrConnectWithoutLocationInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutLocationInput | ShiftUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ShiftCreateManyLocationInputEnvelope
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutLocationInput | ShiftUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutLocationInput | ShiftUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type CertificationUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<CertificationCreateWithoutLocationInput, CertificationUncheckedCreateWithoutLocationInput> | CertificationCreateWithoutLocationInput[] | CertificationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: CertificationCreateOrConnectWithoutLocationInput | CertificationCreateOrConnectWithoutLocationInput[]
    upsert?: CertificationUpsertWithWhereUniqueWithoutLocationInput | CertificationUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: CertificationCreateManyLocationInputEnvelope
    set?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    disconnect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    delete?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    connect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    update?: CertificationUpdateWithWhereUniqueWithoutLocationInput | CertificationUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: CertificationUpdateManyWithWhereWithoutLocationInput | CertificationUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: CertificationScalarWhereInput | CertificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCertificationsInput = {
    create?: XOR<UserCreateWithoutCertificationsInput, UserUncheckedCreateWithoutCertificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificationsInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutCertificationsInput = {
    create?: XOR<LocationCreateWithoutCertificationsInput, LocationUncheckedCreateWithoutCertificationsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutCertificationsInput
    connect?: LocationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCertificationsNestedInput = {
    create?: XOR<UserCreateWithoutCertificationsInput, UserUncheckedCreateWithoutCertificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificationsInput
    upsert?: UserUpsertWithoutCertificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCertificationsInput, UserUpdateWithoutCertificationsInput>, UserUncheckedUpdateWithoutCertificationsInput>
  }

  export type LocationUpdateOneRequiredWithoutCertificationsNestedInput = {
    create?: XOR<LocationCreateWithoutCertificationsInput, LocationUncheckedCreateWithoutCertificationsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutCertificationsInput
    upsert?: LocationUpsertWithoutCertificationsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutCertificationsInput, LocationUpdateWithoutCertificationsInput>, LocationUncheckedUpdateWithoutCertificationsInput>
  }

  export type ShiftCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<ShiftCreateWithoutAssignmentsInput, ShiftUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutAssignmentsInput
    connect?: ShiftWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type ShiftUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<ShiftCreateWithoutAssignmentsInput, ShiftUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutAssignmentsInput
    upsert?: ShiftUpsertWithoutAssignmentsInput
    connect?: ShiftWhereUniqueInput
    update?: XOR<XOR<ShiftUpdateToOneWithWhereWithoutAssignmentsInput, ShiftUpdateWithoutAssignmentsInput>, ShiftUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    upsert?: UserUpsertWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignmentsInput, UserUpdateWithoutAssignmentsInput>, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ShiftCreateNestedOneWithoutSwapRequestsInput = {
    create?: XOR<ShiftCreateWithoutSwapRequestsInput, ShiftUncheckedCreateWithoutSwapRequestsInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutSwapRequestsInput
    connect?: ShiftWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSwapRequestsInput = {
    create?: XOR<UserCreateWithoutSwapRequestsInput, UserUncheckedCreateWithoutSwapRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwapRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTargetSwapsInput = {
    create?: XOR<UserCreateWithoutTargetSwapsInput, UserUncheckedCreateWithoutTargetSwapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTargetSwapsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSwapStatusFieldUpdateOperationsInput = {
    set?: $Enums.SwapStatus
  }

  export type ShiftUpdateOneRequiredWithoutSwapRequestsNestedInput = {
    create?: XOR<ShiftCreateWithoutSwapRequestsInput, ShiftUncheckedCreateWithoutSwapRequestsInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutSwapRequestsInput
    upsert?: ShiftUpsertWithoutSwapRequestsInput
    connect?: ShiftWhereUniqueInput
    update?: XOR<XOR<ShiftUpdateToOneWithWhereWithoutSwapRequestsInput, ShiftUpdateWithoutSwapRequestsInput>, ShiftUncheckedUpdateWithoutSwapRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutSwapRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSwapRequestsInput, UserUncheckedCreateWithoutSwapRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwapRequestsInput
    upsert?: UserUpsertWithoutSwapRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSwapRequestsInput, UserUpdateWithoutSwapRequestsInput>, UserUncheckedUpdateWithoutSwapRequestsInput>
  }

  export type UserUpdateOneWithoutTargetSwapsNestedInput = {
    create?: XOR<UserCreateWithoutTargetSwapsInput, UserUncheckedCreateWithoutTargetSwapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTargetSwapsInput
    upsert?: UserUpsertWithoutTargetSwapsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTargetSwapsInput, UserUpdateWithoutTargetSwapsInput>, UserUncheckedUpdateWithoutTargetSwapsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput
    upsert?: UserUpsertWithoutAvailabilityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvailabilityInput, UserUpdateWithoutAvailabilityInput>, UserUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumShiftStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftStatus | EnumShiftStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftStatus[]
    notIn?: $Enums.ShiftStatus[]
    not?: NestedEnumShiftStatusFilter<$PrismaModel> | $Enums.ShiftStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumShiftStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftStatus | EnumShiftStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftStatus[]
    notIn?: $Enums.ShiftStatus[]
    not?: NestedEnumShiftStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShiftStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftStatusFilter<$PrismaModel>
    _max?: NestedEnumShiftStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSwapStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[]
    notIn?: $Enums.SwapStatus[]
    not?: NestedEnumSwapStatusFilter<$PrismaModel> | $Enums.SwapStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedEnumSwapStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[]
    notIn?: $Enums.SwapStatus[]
    not?: NestedEnumSwapStatusWithAggregatesFilter<$PrismaModel> | $Enums.SwapStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwapStatusFilter<$PrismaModel>
    _max?: NestedEnumSwapStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LocationCreateWithoutManagersInput = {
    id?: string
    name: string
    timezone: string
    createdAt?: Date | string
    shifts?: ShiftCreateNestedManyWithoutLocationInput
    certifications?: CertificationCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutManagersInput = {
    id?: string
    name: string
    timezone: string
    createdAt?: Date | string
    shifts?: ShiftUncheckedCreateNestedManyWithoutLocationInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutManagersInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutManagersInput, LocationUncheckedCreateWithoutManagersInput>
  }

  export type StaffSkillCreateWithoutUserInput = {
    id?: string
    skill: SkillCreateNestedOneWithoutStaffInput
  }

  export type StaffSkillUncheckedCreateWithoutUserInput = {
    id?: string
    skillId: string
  }

  export type StaffSkillCreateOrConnectWithoutUserInput = {
    where: StaffSkillWhereUniqueInput
    create: XOR<StaffSkillCreateWithoutUserInput, StaffSkillUncheckedCreateWithoutUserInput>
  }

  export type StaffSkillCreateManyUserInputEnvelope = {
    data: StaffSkillCreateManyUserInput | StaffSkillCreateManyUserInput[]
  }

  export type CertificationCreateWithoutUserInput = {
    id?: string
    location: LocationCreateNestedOneWithoutCertificationsInput
  }

  export type CertificationUncheckedCreateWithoutUserInput = {
    id?: string
    locationId: string
  }

  export type CertificationCreateOrConnectWithoutUserInput = {
    where: CertificationWhereUniqueInput
    create: XOR<CertificationCreateWithoutUserInput, CertificationUncheckedCreateWithoutUserInput>
  }

  export type CertificationCreateManyUserInputEnvelope = {
    data: CertificationCreateManyUserInput | CertificationCreateManyUserInput[]
  }

  export type AvailabilityCreateWithoutUserInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isException?: boolean
    specificDate?: Date | string | null
  }

  export type AvailabilityUncheckedCreateWithoutUserInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isException?: boolean
    specificDate?: Date | string | null
  }

  export type AvailabilityCreateOrConnectWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput>
  }

  export type AvailabilityCreateManyUserInputEnvelope = {
    data: AvailabilityCreateManyUserInput | AvailabilityCreateManyUserInput[]
  }

  export type ShiftAssignmentCreateWithoutUserInput = {
    id?: string
    shift: ShiftCreateNestedOneWithoutAssignmentsInput
  }

  export type ShiftAssignmentUncheckedCreateWithoutUserInput = {
    id?: string
    shiftId: string
  }

  export type ShiftAssignmentCreateOrConnectWithoutUserInput = {
    where: ShiftAssignmentWhereUniqueInput
    create: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput>
  }

  export type ShiftAssignmentCreateManyUserInputEnvelope = {
    data: ShiftAssignmentCreateManyUserInput | ShiftAssignmentCreateManyUserInput[]
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type SwapRequestCreateWithoutRequesterInput = {
    id?: string
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    expiresAt: Date | string
    shift: ShiftCreateNestedOneWithoutSwapRequestsInput
    targetUser?: UserCreateNestedOneWithoutTargetSwapsInput
  }

  export type SwapRequestUncheckedCreateWithoutRequesterInput = {
    id?: string
    shiftId: string
    targetUserId?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SwapRequestCreateOrConnectWithoutRequesterInput = {
    where: SwapRequestWhereUniqueInput
    create: XOR<SwapRequestCreateWithoutRequesterInput, SwapRequestUncheckedCreateWithoutRequesterInput>
  }

  export type SwapRequestCreateManyRequesterInputEnvelope = {
    data: SwapRequestCreateManyRequesterInput | SwapRequestCreateManyRequesterInput[]
  }

  export type SwapRequestCreateWithoutTargetUserInput = {
    id?: string
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    expiresAt: Date | string
    shift: ShiftCreateNestedOneWithoutSwapRequestsInput
    requester: UserCreateNestedOneWithoutSwapRequestsInput
  }

  export type SwapRequestUncheckedCreateWithoutTargetUserInput = {
    id?: string
    shiftId: string
    requesterId: string
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SwapRequestCreateOrConnectWithoutTargetUserInput = {
    where: SwapRequestWhereUniqueInput
    create: XOR<SwapRequestCreateWithoutTargetUserInput, SwapRequestUncheckedCreateWithoutTargetUserInput>
  }

  export type SwapRequestCreateManyTargetUserInputEnvelope = {
    data: SwapRequestCreateManyTargetUserInput | SwapRequestCreateManyTargetUserInput[]
  }

  export type LocationUpsertWithWhereUniqueWithoutManagersInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutManagersInput, LocationUncheckedUpdateWithoutManagersInput>
    create: XOR<LocationCreateWithoutManagersInput, LocationUncheckedCreateWithoutManagersInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutManagersInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutManagersInput, LocationUncheckedUpdateWithoutManagersInput>
  }

  export type LocationUpdateManyWithWhereWithoutManagersInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutManagersInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    timezone?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
  }

  export type StaffSkillUpsertWithWhereUniqueWithoutUserInput = {
    where: StaffSkillWhereUniqueInput
    update: XOR<StaffSkillUpdateWithoutUserInput, StaffSkillUncheckedUpdateWithoutUserInput>
    create: XOR<StaffSkillCreateWithoutUserInput, StaffSkillUncheckedCreateWithoutUserInput>
  }

  export type StaffSkillUpdateWithWhereUniqueWithoutUserInput = {
    where: StaffSkillWhereUniqueInput
    data: XOR<StaffSkillUpdateWithoutUserInput, StaffSkillUncheckedUpdateWithoutUserInput>
  }

  export type StaffSkillUpdateManyWithWhereWithoutUserInput = {
    where: StaffSkillScalarWhereInput
    data: XOR<StaffSkillUpdateManyMutationInput, StaffSkillUncheckedUpdateManyWithoutUserInput>
  }

  export type StaffSkillScalarWhereInput = {
    AND?: StaffSkillScalarWhereInput | StaffSkillScalarWhereInput[]
    OR?: StaffSkillScalarWhereInput[]
    NOT?: StaffSkillScalarWhereInput | StaffSkillScalarWhereInput[]
    id?: StringFilter<"StaffSkill"> | string
    userId?: StringFilter<"StaffSkill"> | string
    skillId?: StringFilter<"StaffSkill"> | string
  }

  export type CertificationUpsertWithWhereUniqueWithoutUserInput = {
    where: CertificationWhereUniqueInput
    update: XOR<CertificationUpdateWithoutUserInput, CertificationUncheckedUpdateWithoutUserInput>
    create: XOR<CertificationCreateWithoutUserInput, CertificationUncheckedCreateWithoutUserInput>
  }

  export type CertificationUpdateWithWhereUniqueWithoutUserInput = {
    where: CertificationWhereUniqueInput
    data: XOR<CertificationUpdateWithoutUserInput, CertificationUncheckedUpdateWithoutUserInput>
  }

  export type CertificationUpdateManyWithWhereWithoutUserInput = {
    where: CertificationScalarWhereInput
    data: XOR<CertificationUpdateManyMutationInput, CertificationUncheckedUpdateManyWithoutUserInput>
  }

  export type CertificationScalarWhereInput = {
    AND?: CertificationScalarWhereInput | CertificationScalarWhereInput[]
    OR?: CertificationScalarWhereInput[]
    NOT?: CertificationScalarWhereInput | CertificationScalarWhereInput[]
    id?: StringFilter<"Certification"> | string
    userId?: StringFilter<"Certification"> | string
    locationId?: StringFilter<"Certification"> | string
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutUserInput, AvailabilityUncheckedUpdateWithoutUserInput>
    create: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutUserInput, AvailabilityUncheckedUpdateWithoutUserInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutUserInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutUserInput>
  }

  export type AvailabilityScalarWhereInput = {
    AND?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    OR?: AvailabilityScalarWhereInput[]
    NOT?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    id?: StringFilter<"Availability"> | string
    userId?: StringFilter<"Availability"> | string
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    isException?: BoolFilter<"Availability"> | boolean
    specificDate?: DateTimeNullableFilter<"Availability"> | Date | string | null
  }

  export type ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: ShiftAssignmentWhereUniqueInput
    update: XOR<ShiftAssignmentUpdateWithoutUserInput, ShiftAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput>
  }

  export type ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: ShiftAssignmentWhereUniqueInput
    data: XOR<ShiftAssignmentUpdateWithoutUserInput, ShiftAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type ShiftAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: ShiftAssignmentScalarWhereInput
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type ShiftAssignmentScalarWhereInput = {
    AND?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
    OR?: ShiftAssignmentScalarWhereInput[]
    NOT?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
    id?: StringFilter<"ShiftAssignment"> | string
    shiftId?: StringFilter<"ShiftAssignment"> | string
    userId?: StringFilter<"ShiftAssignment"> | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type SwapRequestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: SwapRequestWhereUniqueInput
    update: XOR<SwapRequestUpdateWithoutRequesterInput, SwapRequestUncheckedUpdateWithoutRequesterInput>
    create: XOR<SwapRequestCreateWithoutRequesterInput, SwapRequestUncheckedCreateWithoutRequesterInput>
  }

  export type SwapRequestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: SwapRequestWhereUniqueInput
    data: XOR<SwapRequestUpdateWithoutRequesterInput, SwapRequestUncheckedUpdateWithoutRequesterInput>
  }

  export type SwapRequestUpdateManyWithWhereWithoutRequesterInput = {
    where: SwapRequestScalarWhereInput
    data: XOR<SwapRequestUpdateManyMutationInput, SwapRequestUncheckedUpdateManyWithoutRequesterInput>
  }

  export type SwapRequestScalarWhereInput = {
    AND?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
    OR?: SwapRequestScalarWhereInput[]
    NOT?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
    id?: StringFilter<"SwapRequest"> | string
    shiftId?: StringFilter<"SwapRequest"> | string
    requesterId?: StringFilter<"SwapRequest"> | string
    targetUserId?: StringNullableFilter<"SwapRequest"> | string | null
    status?: EnumSwapStatusFilter<"SwapRequest"> | $Enums.SwapStatus
    createdAt?: DateTimeFilter<"SwapRequest"> | Date | string
    expiresAt?: DateTimeFilter<"SwapRequest"> | Date | string
  }

  export type SwapRequestUpsertWithWhereUniqueWithoutTargetUserInput = {
    where: SwapRequestWhereUniqueInput
    update: XOR<SwapRequestUpdateWithoutTargetUserInput, SwapRequestUncheckedUpdateWithoutTargetUserInput>
    create: XOR<SwapRequestCreateWithoutTargetUserInput, SwapRequestUncheckedCreateWithoutTargetUserInput>
  }

  export type SwapRequestUpdateWithWhereUniqueWithoutTargetUserInput = {
    where: SwapRequestWhereUniqueInput
    data: XOR<SwapRequestUpdateWithoutTargetUserInput, SwapRequestUncheckedUpdateWithoutTargetUserInput>
  }

  export type SwapRequestUpdateManyWithWhereWithoutTargetUserInput = {
    where: SwapRequestScalarWhereInput
    data: XOR<SwapRequestUpdateManyMutationInput, SwapRequestUncheckedUpdateManyWithoutTargetUserInput>
  }

  export type StaffSkillCreateWithoutSkillInput = {
    id?: string
    user: UserCreateNestedOneWithoutSkillsInput
  }

  export type StaffSkillUncheckedCreateWithoutSkillInput = {
    id?: string
    userId: string
  }

  export type StaffSkillCreateOrConnectWithoutSkillInput = {
    where: StaffSkillWhereUniqueInput
    create: XOR<StaffSkillCreateWithoutSkillInput, StaffSkillUncheckedCreateWithoutSkillInput>
  }

  export type StaffSkillCreateManySkillInputEnvelope = {
    data: StaffSkillCreateManySkillInput | StaffSkillCreateManySkillInput[]
  }

  export type ShiftCreateWithoutRequiredSkillInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    headCount: number
    status?: $Enums.ShiftStatus
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutShiftsInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutShiftInput
    swapRequests?: SwapRequestCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateWithoutRequiredSkillInput = {
    id?: string
    locationId: string
    startDate: Date | string
    endDate: Date | string
    headCount: number
    status?: $Enums.ShiftStatus
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput
    swapRequests?: SwapRequestUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftCreateOrConnectWithoutRequiredSkillInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutRequiredSkillInput, ShiftUncheckedCreateWithoutRequiredSkillInput>
  }

  export type ShiftCreateManyRequiredSkillInputEnvelope = {
    data: ShiftCreateManyRequiredSkillInput | ShiftCreateManyRequiredSkillInput[]
  }

  export type StaffSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: StaffSkillWhereUniqueInput
    update: XOR<StaffSkillUpdateWithoutSkillInput, StaffSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<StaffSkillCreateWithoutSkillInput, StaffSkillUncheckedCreateWithoutSkillInput>
  }

  export type StaffSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: StaffSkillWhereUniqueInput
    data: XOR<StaffSkillUpdateWithoutSkillInput, StaffSkillUncheckedUpdateWithoutSkillInput>
  }

  export type StaffSkillUpdateManyWithWhereWithoutSkillInput = {
    where: StaffSkillScalarWhereInput
    data: XOR<StaffSkillUpdateManyMutationInput, StaffSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type ShiftUpsertWithWhereUniqueWithoutRequiredSkillInput = {
    where: ShiftWhereUniqueInput
    update: XOR<ShiftUpdateWithoutRequiredSkillInput, ShiftUncheckedUpdateWithoutRequiredSkillInput>
    create: XOR<ShiftCreateWithoutRequiredSkillInput, ShiftUncheckedCreateWithoutRequiredSkillInput>
  }

  export type ShiftUpdateWithWhereUniqueWithoutRequiredSkillInput = {
    where: ShiftWhereUniqueInput
    data: XOR<ShiftUpdateWithoutRequiredSkillInput, ShiftUncheckedUpdateWithoutRequiredSkillInput>
  }

  export type ShiftUpdateManyWithWhereWithoutRequiredSkillInput = {
    where: ShiftScalarWhereInput
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyWithoutRequiredSkillInput>
  }

  export type ShiftScalarWhereInput = {
    AND?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
    OR?: ShiftScalarWhereInput[]
    NOT?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
    id?: StringFilter<"Shift"> | string
    locationId?: StringFilter<"Shift"> | string
    skillId?: StringFilter<"Shift"> | string
    startDate?: DateTimeFilter<"Shift"> | Date | string
    endDate?: DateTimeFilter<"Shift"> | Date | string
    headCount?: IntFilter<"Shift"> | number
    status?: EnumShiftStatusFilter<"Shift"> | $Enums.ShiftStatus
    version?: IntFilter<"Shift"> | number
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
  }

  export type UserCreateWithoutSkillsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationCreateNestedManyWithoutManagersInput
    certifications?: CertificationCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestCreateNestedManyWithoutRequesterInput
    targetSwaps?: SwapRequestCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutSkillsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationUncheckedCreateNestedManyWithoutManagersInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestUncheckedCreateNestedManyWithoutRequesterInput
    targetSwaps?: SwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
  }

  export type SkillCreateWithoutStaffInput = {
    id?: string
    name: string
    shifts?: ShiftCreateNestedManyWithoutRequiredSkillInput
  }

  export type SkillUncheckedCreateWithoutStaffInput = {
    id?: string
    name: string
    shifts?: ShiftUncheckedCreateNestedManyWithoutRequiredSkillInput
  }

  export type SkillCreateOrConnectWithoutStaffInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutStaffInput, SkillUncheckedCreateWithoutStaffInput>
  }

  export type UserUpsertWithoutSkillsInput = {
    update: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUpdateManyWithoutManagersNestedInput
    certifications?: CertificationUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUpdateManyWithoutRequesterNestedInput
    targetSwaps?: SwapRequestUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUncheckedUpdateManyWithoutManagersNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUncheckedUpdateManyWithoutRequesterNestedInput
    targetSwaps?: SwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type SkillUpsertWithoutStaffInput = {
    update: XOR<SkillUpdateWithoutStaffInput, SkillUncheckedUpdateWithoutStaffInput>
    create: XOR<SkillCreateWithoutStaffInput, SkillUncheckedCreateWithoutStaffInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutStaffInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutStaffInput, SkillUncheckedUpdateWithoutStaffInput>
  }

  export type SkillUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shifts?: ShiftUpdateManyWithoutRequiredSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shifts?: ShiftUncheckedUpdateManyWithoutRequiredSkillNestedInput
  }

  export type LocationCreateWithoutShiftsInput = {
    id?: string
    name: string
    timezone: string
    createdAt?: Date | string
    managers?: UserCreateNestedManyWithoutManagedLocationsInput
    certifications?: CertificationCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutShiftsInput = {
    id?: string
    name: string
    timezone: string
    createdAt?: Date | string
    managers?: UserUncheckedCreateNestedManyWithoutManagedLocationsInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutShiftsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutShiftsInput, LocationUncheckedCreateWithoutShiftsInput>
  }

  export type SkillCreateWithoutShiftsInput = {
    id?: string
    name: string
    staff?: StaffSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutShiftsInput = {
    id?: string
    name: string
    staff?: StaffSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutShiftsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutShiftsInput, SkillUncheckedCreateWithoutShiftsInput>
  }

  export type ShiftAssignmentCreateWithoutShiftInput = {
    id?: string
    user: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type ShiftAssignmentUncheckedCreateWithoutShiftInput = {
    id?: string
    userId: string
  }

  export type ShiftAssignmentCreateOrConnectWithoutShiftInput = {
    where: ShiftAssignmentWhereUniqueInput
    create: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput>
  }

  export type ShiftAssignmentCreateManyShiftInputEnvelope = {
    data: ShiftAssignmentCreateManyShiftInput | ShiftAssignmentCreateManyShiftInput[]
  }

  export type SwapRequestCreateWithoutShiftInput = {
    id?: string
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    expiresAt: Date | string
    requester: UserCreateNestedOneWithoutSwapRequestsInput
    targetUser?: UserCreateNestedOneWithoutTargetSwapsInput
  }

  export type SwapRequestUncheckedCreateWithoutShiftInput = {
    id?: string
    requesterId: string
    targetUserId?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SwapRequestCreateOrConnectWithoutShiftInput = {
    where: SwapRequestWhereUniqueInput
    create: XOR<SwapRequestCreateWithoutShiftInput, SwapRequestUncheckedCreateWithoutShiftInput>
  }

  export type SwapRequestCreateManyShiftInputEnvelope = {
    data: SwapRequestCreateManyShiftInput | SwapRequestCreateManyShiftInput[]
  }

  export type LocationUpsertWithoutShiftsInput = {
    update: XOR<LocationUpdateWithoutShiftsInput, LocationUncheckedUpdateWithoutShiftsInput>
    create: XOR<LocationCreateWithoutShiftsInput, LocationUncheckedCreateWithoutShiftsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutShiftsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutShiftsInput, LocationUncheckedUpdateWithoutShiftsInput>
  }

  export type LocationUpdateWithoutShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserUpdateManyWithoutManagedLocationsNestedInput
    certifications?: CertificationUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserUncheckedUpdateManyWithoutManagedLocationsNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type SkillUpsertWithoutShiftsInput = {
    update: XOR<SkillUpdateWithoutShiftsInput, SkillUncheckedUpdateWithoutShiftsInput>
    create: XOR<SkillCreateWithoutShiftsInput, SkillUncheckedCreateWithoutShiftsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutShiftsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutShiftsInput, SkillUncheckedUpdateWithoutShiftsInput>
  }

  export type SkillUpdateWithoutShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    staff?: StaffSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    staff?: StaffSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput = {
    where: ShiftAssignmentWhereUniqueInput
    update: XOR<ShiftAssignmentUpdateWithoutShiftInput, ShiftAssignmentUncheckedUpdateWithoutShiftInput>
    create: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput>
  }

  export type ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput = {
    where: ShiftAssignmentWhereUniqueInput
    data: XOR<ShiftAssignmentUpdateWithoutShiftInput, ShiftAssignmentUncheckedUpdateWithoutShiftInput>
  }

  export type ShiftAssignmentUpdateManyWithWhereWithoutShiftInput = {
    where: ShiftAssignmentScalarWhereInput
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyWithoutShiftInput>
  }

  export type SwapRequestUpsertWithWhereUniqueWithoutShiftInput = {
    where: SwapRequestWhereUniqueInput
    update: XOR<SwapRequestUpdateWithoutShiftInput, SwapRequestUncheckedUpdateWithoutShiftInput>
    create: XOR<SwapRequestCreateWithoutShiftInput, SwapRequestUncheckedCreateWithoutShiftInput>
  }

  export type SwapRequestUpdateWithWhereUniqueWithoutShiftInput = {
    where: SwapRequestWhereUniqueInput
    data: XOR<SwapRequestUpdateWithoutShiftInput, SwapRequestUncheckedUpdateWithoutShiftInput>
  }

  export type SwapRequestUpdateManyWithWhereWithoutShiftInput = {
    where: SwapRequestScalarWhereInput
    data: XOR<SwapRequestUpdateManyMutationInput, SwapRequestUncheckedUpdateManyWithoutShiftInput>
  }

  export type UserCreateWithoutManagedLocationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: StaffSkillCreateNestedManyWithoutUserInput
    certifications?: CertificationCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestCreateNestedManyWithoutRequesterInput
    targetSwaps?: SwapRequestCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutManagedLocationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: StaffSkillUncheckedCreateNestedManyWithoutUserInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestUncheckedCreateNestedManyWithoutRequesterInput
    targetSwaps?: SwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutManagedLocationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagedLocationsInput, UserUncheckedCreateWithoutManagedLocationsInput>
  }

  export type ShiftCreateWithoutLocationInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    headCount: number
    status?: $Enums.ShiftStatus
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredSkill: SkillCreateNestedOneWithoutShiftsInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutShiftInput
    swapRequests?: SwapRequestCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateWithoutLocationInput = {
    id?: string
    skillId: string
    startDate: Date | string
    endDate: Date | string
    headCount: number
    status?: $Enums.ShiftStatus
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput
    swapRequests?: SwapRequestUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftCreateOrConnectWithoutLocationInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutLocationInput, ShiftUncheckedCreateWithoutLocationInput>
  }

  export type ShiftCreateManyLocationInputEnvelope = {
    data: ShiftCreateManyLocationInput | ShiftCreateManyLocationInput[]
  }

  export type CertificationCreateWithoutLocationInput = {
    id?: string
    user: UserCreateNestedOneWithoutCertificationsInput
  }

  export type CertificationUncheckedCreateWithoutLocationInput = {
    id?: string
    userId: string
  }

  export type CertificationCreateOrConnectWithoutLocationInput = {
    where: CertificationWhereUniqueInput
    create: XOR<CertificationCreateWithoutLocationInput, CertificationUncheckedCreateWithoutLocationInput>
  }

  export type CertificationCreateManyLocationInputEnvelope = {
    data: CertificationCreateManyLocationInput | CertificationCreateManyLocationInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutManagedLocationsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutManagedLocationsInput, UserUncheckedUpdateWithoutManagedLocationsInput>
    create: XOR<UserCreateWithoutManagedLocationsInput, UserUncheckedCreateWithoutManagedLocationsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutManagedLocationsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutManagedLocationsInput, UserUncheckedUpdateWithoutManagedLocationsInput>
  }

  export type UserUpdateManyWithWhereWithoutManagedLocationsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutManagedLocationsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    desiredHours?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ShiftUpsertWithWhereUniqueWithoutLocationInput = {
    where: ShiftWhereUniqueInput
    update: XOR<ShiftUpdateWithoutLocationInput, ShiftUncheckedUpdateWithoutLocationInput>
    create: XOR<ShiftCreateWithoutLocationInput, ShiftUncheckedCreateWithoutLocationInput>
  }

  export type ShiftUpdateWithWhereUniqueWithoutLocationInput = {
    where: ShiftWhereUniqueInput
    data: XOR<ShiftUpdateWithoutLocationInput, ShiftUncheckedUpdateWithoutLocationInput>
  }

  export type ShiftUpdateManyWithWhereWithoutLocationInput = {
    where: ShiftScalarWhereInput
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyWithoutLocationInput>
  }

  export type CertificationUpsertWithWhereUniqueWithoutLocationInput = {
    where: CertificationWhereUniqueInput
    update: XOR<CertificationUpdateWithoutLocationInput, CertificationUncheckedUpdateWithoutLocationInput>
    create: XOR<CertificationCreateWithoutLocationInput, CertificationUncheckedCreateWithoutLocationInput>
  }

  export type CertificationUpdateWithWhereUniqueWithoutLocationInput = {
    where: CertificationWhereUniqueInput
    data: XOR<CertificationUpdateWithoutLocationInput, CertificationUncheckedUpdateWithoutLocationInput>
  }

  export type CertificationUpdateManyWithWhereWithoutLocationInput = {
    where: CertificationScalarWhereInput
    data: XOR<CertificationUpdateManyMutationInput, CertificationUncheckedUpdateManyWithoutLocationInput>
  }

  export type UserCreateWithoutCertificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationCreateNestedManyWithoutManagersInput
    skills?: StaffSkillCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestCreateNestedManyWithoutRequesterInput
    targetSwaps?: SwapRequestCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutCertificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationUncheckedCreateNestedManyWithoutManagersInput
    skills?: StaffSkillUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestUncheckedCreateNestedManyWithoutRequesterInput
    targetSwaps?: SwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutCertificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCertificationsInput, UserUncheckedCreateWithoutCertificationsInput>
  }

  export type LocationCreateWithoutCertificationsInput = {
    id?: string
    name: string
    timezone: string
    createdAt?: Date | string
    managers?: UserCreateNestedManyWithoutManagedLocationsInput
    shifts?: ShiftCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutCertificationsInput = {
    id?: string
    name: string
    timezone: string
    createdAt?: Date | string
    managers?: UserUncheckedCreateNestedManyWithoutManagedLocationsInput
    shifts?: ShiftUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutCertificationsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutCertificationsInput, LocationUncheckedCreateWithoutCertificationsInput>
  }

  export type UserUpsertWithoutCertificationsInput = {
    update: XOR<UserUpdateWithoutCertificationsInput, UserUncheckedUpdateWithoutCertificationsInput>
    create: XOR<UserCreateWithoutCertificationsInput, UserUncheckedCreateWithoutCertificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCertificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCertificationsInput, UserUncheckedUpdateWithoutCertificationsInput>
  }

  export type UserUpdateWithoutCertificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUpdateManyWithoutManagersNestedInput
    skills?: StaffSkillUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUpdateManyWithoutRequesterNestedInput
    targetSwaps?: SwapRequestUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCertificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUncheckedUpdateManyWithoutManagersNestedInput
    skills?: StaffSkillUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUncheckedUpdateManyWithoutRequesterNestedInput
    targetSwaps?: SwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type LocationUpsertWithoutCertificationsInput = {
    update: XOR<LocationUpdateWithoutCertificationsInput, LocationUncheckedUpdateWithoutCertificationsInput>
    create: XOR<LocationCreateWithoutCertificationsInput, LocationUncheckedCreateWithoutCertificationsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutCertificationsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutCertificationsInput, LocationUncheckedUpdateWithoutCertificationsInput>
  }

  export type LocationUpdateWithoutCertificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserUpdateManyWithoutManagedLocationsNestedInput
    shifts?: ShiftUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutCertificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserUncheckedUpdateManyWithoutManagedLocationsNestedInput
    shifts?: ShiftUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type ShiftCreateWithoutAssignmentsInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    headCount: number
    status?: $Enums.ShiftStatus
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutShiftsInput
    requiredSkill: SkillCreateNestedOneWithoutShiftsInput
    swapRequests?: SwapRequestCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    locationId: string
    skillId: string
    startDate: Date | string
    endDate: Date | string
    headCount: number
    status?: $Enums.ShiftStatus
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    swapRequests?: SwapRequestUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftCreateOrConnectWithoutAssignmentsInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutAssignmentsInput, ShiftUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationCreateNestedManyWithoutManagersInput
    skills?: StaffSkillCreateNestedManyWithoutUserInput
    certifications?: CertificationCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestCreateNestedManyWithoutRequesterInput
    targetSwaps?: SwapRequestCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationUncheckedCreateNestedManyWithoutManagersInput
    skills?: StaffSkillUncheckedCreateNestedManyWithoutUserInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestUncheckedCreateNestedManyWithoutRequesterInput
    targetSwaps?: SwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
  }

  export type ShiftUpsertWithoutAssignmentsInput = {
    update: XOR<ShiftUpdateWithoutAssignmentsInput, ShiftUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<ShiftCreateWithoutAssignmentsInput, ShiftUncheckedCreateWithoutAssignmentsInput>
    where?: ShiftWhereInput
  }

  export type ShiftUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: ShiftWhereInput
    data: XOR<ShiftUpdateWithoutAssignmentsInput, ShiftUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ShiftUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    headCount?: IntFieldUpdateOperationsInput | number
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutShiftsNestedInput
    requiredSkill?: SkillUpdateOneRequiredWithoutShiftsNestedInput
    swapRequests?: SwapRequestUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    headCount?: IntFieldUpdateOperationsInput | number
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    swapRequests?: SwapRequestUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type UserUpsertWithoutAssignmentsInput = {
    update: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUpdateManyWithoutManagersNestedInput
    skills?: StaffSkillUpdateManyWithoutUserNestedInput
    certifications?: CertificationUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUpdateManyWithoutRequesterNestedInput
    targetSwaps?: SwapRequestUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUncheckedUpdateManyWithoutManagersNestedInput
    skills?: StaffSkillUncheckedUpdateManyWithoutUserNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUncheckedUpdateManyWithoutRequesterNestedInput
    targetSwaps?: SwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type ShiftCreateWithoutSwapRequestsInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    headCount: number
    status?: $Enums.ShiftStatus
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutShiftsInput
    requiredSkill: SkillCreateNestedOneWithoutShiftsInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateWithoutSwapRequestsInput = {
    id?: string
    locationId: string
    skillId: string
    startDate: Date | string
    endDate: Date | string
    headCount: number
    status?: $Enums.ShiftStatus
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftCreateOrConnectWithoutSwapRequestsInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutSwapRequestsInput, ShiftUncheckedCreateWithoutSwapRequestsInput>
  }

  export type UserCreateWithoutSwapRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationCreateNestedManyWithoutManagersInput
    skills?: StaffSkillCreateNestedManyWithoutUserInput
    certifications?: CertificationCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    targetSwaps?: SwapRequestCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutSwapRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationUncheckedCreateNestedManyWithoutManagersInput
    skills?: StaffSkillUncheckedCreateNestedManyWithoutUserInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    targetSwaps?: SwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutSwapRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSwapRequestsInput, UserUncheckedCreateWithoutSwapRequestsInput>
  }

  export type UserCreateWithoutTargetSwapsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationCreateNestedManyWithoutManagersInput
    skills?: StaffSkillCreateNestedManyWithoutUserInput
    certifications?: CertificationCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutTargetSwapsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationUncheckedCreateNestedManyWithoutManagersInput
    skills?: StaffSkillUncheckedCreateNestedManyWithoutUserInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutTargetSwapsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTargetSwapsInput, UserUncheckedCreateWithoutTargetSwapsInput>
  }

  export type ShiftUpsertWithoutSwapRequestsInput = {
    update: XOR<ShiftUpdateWithoutSwapRequestsInput, ShiftUncheckedUpdateWithoutSwapRequestsInput>
    create: XOR<ShiftCreateWithoutSwapRequestsInput, ShiftUncheckedCreateWithoutSwapRequestsInput>
    where?: ShiftWhereInput
  }

  export type ShiftUpdateToOneWithWhereWithoutSwapRequestsInput = {
    where?: ShiftWhereInput
    data: XOR<ShiftUpdateWithoutSwapRequestsInput, ShiftUncheckedUpdateWithoutSwapRequestsInput>
  }

  export type ShiftUpdateWithoutSwapRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    headCount?: IntFieldUpdateOperationsInput | number
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutShiftsNestedInput
    requiredSkill?: SkillUpdateOneRequiredWithoutShiftsNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateWithoutSwapRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    headCount?: IntFieldUpdateOperationsInput | number
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type UserUpsertWithoutSwapRequestsInput = {
    update: XOR<UserUpdateWithoutSwapRequestsInput, UserUncheckedUpdateWithoutSwapRequestsInput>
    create: XOR<UserCreateWithoutSwapRequestsInput, UserUncheckedCreateWithoutSwapRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSwapRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSwapRequestsInput, UserUncheckedUpdateWithoutSwapRequestsInput>
  }

  export type UserUpdateWithoutSwapRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUpdateManyWithoutManagersNestedInput
    skills?: StaffSkillUpdateManyWithoutUserNestedInput
    certifications?: CertificationUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    targetSwaps?: SwapRequestUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSwapRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUncheckedUpdateManyWithoutManagersNestedInput
    skills?: StaffSkillUncheckedUpdateManyWithoutUserNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    targetSwaps?: SwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUpsertWithoutTargetSwapsInput = {
    update: XOR<UserUpdateWithoutTargetSwapsInput, UserUncheckedUpdateWithoutTargetSwapsInput>
    create: XOR<UserCreateWithoutTargetSwapsInput, UserUncheckedCreateWithoutTargetSwapsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTargetSwapsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTargetSwapsInput, UserUncheckedUpdateWithoutTargetSwapsInput>
  }

  export type UserUpdateWithoutTargetSwapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUpdateManyWithoutManagersNestedInput
    skills?: StaffSkillUpdateManyWithoutUserNestedInput
    certifications?: CertificationUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutTargetSwapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUncheckedUpdateManyWithoutManagersNestedInput
    skills?: StaffSkillUncheckedUpdateManyWithoutUserNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type UserCreateWithoutAvailabilityInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationCreateNestedManyWithoutManagersInput
    skills?: StaffSkillCreateNestedManyWithoutUserInput
    certifications?: CertificationCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestCreateNestedManyWithoutRequesterInput
    targetSwaps?: SwapRequestCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationUncheckedCreateNestedManyWithoutManagersInput
    skills?: StaffSkillUncheckedCreateNestedManyWithoutUserInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestUncheckedCreateNestedManyWithoutRequesterInput
    targetSwaps?: SwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutAvailabilityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
  }

  export type UserUpsertWithoutAvailabilityInput = {
    update: XOR<UserUpdateWithoutAvailabilityInput, UserUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvailabilityInput, UserUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UserUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUpdateManyWithoutManagersNestedInput
    skills?: StaffSkillUpdateManyWithoutUserNestedInput
    certifications?: CertificationUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUpdateManyWithoutRequesterNestedInput
    targetSwaps?: SwapRequestUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUncheckedUpdateManyWithoutManagersNestedInput
    skills?: StaffSkillUncheckedUpdateManyWithoutUserNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUncheckedUpdateManyWithoutRequesterNestedInput
    targetSwaps?: SwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationCreateNestedManyWithoutManagersInput
    skills?: StaffSkillCreateNestedManyWithoutUserInput
    certifications?: CertificationCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestCreateNestedManyWithoutRequesterInput
    targetSwaps?: SwapRequestCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    desiredHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedLocations?: LocationUncheckedCreateNestedManyWithoutManagersInput
    skills?: StaffSkillUncheckedCreateNestedManyWithoutUserInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    assignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    swapRequests?: SwapRequestUncheckedCreateNestedManyWithoutRequesterInput
    targetSwaps?: SwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUpdateManyWithoutManagersNestedInput
    skills?: StaffSkillUpdateManyWithoutUserNestedInput
    certifications?: CertificationUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUpdateManyWithoutRequesterNestedInput
    targetSwaps?: SwapRequestUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedLocations?: LocationUncheckedUpdateManyWithoutManagersNestedInput
    skills?: StaffSkillUncheckedUpdateManyWithoutUserNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUncheckedUpdateManyWithoutRequesterNestedInput
    targetSwaps?: SwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type StaffSkillCreateManyUserInput = {
    id?: string
    skillId: string
  }

  export type CertificationCreateManyUserInput = {
    id?: string
    locationId: string
  }

  export type AvailabilityCreateManyUserInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isException?: boolean
    specificDate?: Date | string | null
  }

  export type ShiftAssignmentCreateManyUserInput = {
    id?: string
    shiftId: string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type SwapRequestCreateManyRequesterInput = {
    id?: string
    shiftId: string
    targetUserId?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SwapRequestCreateManyTargetUserInput = {
    id?: string
    shiftId: string
    requesterId: string
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type LocationUpdateWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: ShiftUpdateManyWithoutLocationNestedInput
    certifications?: CertificationUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: ShiftUncheckedUpdateManyWithoutLocationNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffSkillUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: SkillUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffSkillUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type StaffSkillUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneRequiredWithoutCertificationsNestedInput
  }

  export type CertificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isException?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvailabilityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isException?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvailabilityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isException?: BoolFieldUpdateOperationsInput | boolean
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShiftAssignmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shift?: ShiftUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapRequestUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: ShiftUpdateOneRequiredWithoutSwapRequestsNestedInput
    targetUser?: UserUpdateOneWithoutTargetSwapsNestedInput
  }

  export type SwapRequestUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    targetUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapRequestUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    targetUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapRequestUpdateWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: ShiftUpdateOneRequiredWithoutSwapRequestsNestedInput
    requester?: UserUpdateOneRequiredWithoutSwapRequestsNestedInput
  }

  export type SwapRequestUncheckedUpdateWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapRequestUncheckedUpdateManyWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffSkillCreateManySkillInput = {
    id?: string
    userId: string
  }

  export type ShiftCreateManyRequiredSkillInput = {
    id?: string
    locationId: string
    startDate: Date | string
    endDate: Date | string
    headCount: number
    status?: $Enums.ShiftStatus
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffSkillUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type StaffSkillUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StaffSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ShiftUpdateWithoutRequiredSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    headCount?: IntFieldUpdateOperationsInput | number
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutShiftsNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutShiftNestedInput
    swapRequests?: SwapRequestUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateWithoutRequiredSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    headCount?: IntFieldUpdateOperationsInput | number
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput
    swapRequests?: SwapRequestUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateManyWithoutRequiredSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    headCount?: IntFieldUpdateOperationsInput | number
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftAssignmentCreateManyShiftInput = {
    id?: string
    userId: string
  }

  export type SwapRequestCreateManyShiftInput = {
    id?: string
    requesterId: string
    targetUserId?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type ShiftAssignmentUpdateWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SwapRequestUpdateWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutSwapRequestsNestedInput
    targetUser?: UserUpdateOneWithoutTargetSwapsNestedInput
  }

  export type SwapRequestUncheckedUpdateWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    targetUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapRequestUncheckedUpdateManyWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    targetUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftCreateManyLocationInput = {
    id?: string
    skillId: string
    startDate: Date | string
    endDate: Date | string
    headCount: number
    status?: $Enums.ShiftStatus
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificationCreateManyLocationInput = {
    id?: string
    userId: string
  }

  export type UserUpdateWithoutManagedLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: StaffSkillUpdateManyWithoutUserNestedInput
    certifications?: CertificationUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUpdateManyWithoutRequesterNestedInput
    targetSwaps?: SwapRequestUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagedLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: StaffSkillUncheckedUpdateManyWithoutUserNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    swapRequests?: SwapRequestUncheckedUpdateManyWithoutRequesterNestedInput
    targetSwaps?: SwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutManagedLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    desiredHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    headCount?: IntFieldUpdateOperationsInput | number
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredSkill?: SkillUpdateOneRequiredWithoutShiftsNestedInput
    assignments?: ShiftAssignmentUpdateManyWithoutShiftNestedInput
    swapRequests?: SwapRequestUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    headCount?: IntFieldUpdateOperationsInput | number
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput
    swapRequests?: SwapRequestUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    headCount?: IntFieldUpdateOperationsInput | number
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificationUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCertificationsNestedInput
  }

  export type CertificationUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificationUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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