/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Product
 *
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>;
/**
 * Model Image
 *
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>;
/**
 * Model CartItem
 *
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const ProductCategory: {
    MOBILE: 'MOBILE';
    LAPTOP: 'LAPTOP';
    WATCH: 'WATCH';
    OTHERS: 'OTHERS';
  };

  export type ProductCategory =
    (typeof ProductCategory)[keyof typeof ProductCategory];
}

export type ProductCategory = $Enums.ProductCategory;

export const ProductCategory: typeof $Enums.ProductCategory;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Images
   * const images = await prisma.image.findMany()
   * ```
   */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CartItems
   * const cartItems = await prisma.cartItem.findMany()
   * ```
   */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Product: 'Product';
    Image: 'Image';
    CartItem: 'CartItem';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'product' | 'image' | 'cartItem';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>;
        fields: Prisma.ProductFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
          };
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
          };
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
          };
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProduct>;
          };
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProductGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>;
            result: $Utils.Optional<ProductCountAggregateOutputType> | number;
          };
        };
      };
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>;
        fields: Prisma.ImageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[];
          };
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[];
          };
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[];
          };
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateImage>;
          };
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ImageGroupByOutputType>[];
          };
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>;
            result: $Utils.Optional<ImageCountAggregateOutputType> | number;
          };
        };
      };
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>;
        fields: Prisma.CartItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>;
          };
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>;
          };
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[];
          };
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>;
          };
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[];
          };
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>;
          };
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>;
          };
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[];
          };
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>;
          };
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCartItem>;
          };
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CartItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>;
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit;
    image?: ImageOmit;
    cartItem?: CartItemOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    images: number;
    cart: number;
  };

  export type ProductCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    images?: boolean | ProductCountOutputTypeCountImagesArgs;
    cart?: boolean | ProductCountOutputTypeCountCartArgs;
  };

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ImageWhereInput;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CartItemWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  export type ProductAvgAggregateOutputType = {
    price: number | null;
    quantity: number | null;
  };

  export type ProductSumAggregateOutputType = {
    price: number | null;
    quantity: number | null;
  };

  export type ProductMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    category: $Enums.ProductCategory | null;
    description: string | null;
    price: number | null;
    quantity: number | null;
  };

  export type ProductMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    category: $Enums.ProductCategory | null;
    description: string | null;
    price: number | null;
    quantity: number | null;
  };

  export type ProductCountAggregateOutputType = {
    id: number;
    name: number;
    category: number;
    description: number;
    price: number;
    quantity: number;
    _all: number;
  };

  export type ProductAvgAggregateInputType = {
    price?: true;
    quantity?: true;
  };

  export type ProductSumAggregateInputType = {
    price?: true;
    quantity?: true;
  };

  export type ProductMinAggregateInputType = {
    id?: true;
    name?: true;
    category?: true;
    description?: true;
    price?: true;
    quantity?: true;
  };

  export type ProductMaxAggregateInputType = {
    id?: true;
    name?: true;
    category?: true;
    description?: true;
    price?: true;
    quantity?: true;
  };

  export type ProductCountAggregateInputType = {
    id?: true;
    name?: true;
    category?: true;
    description?: true;
    price?: true;
    quantity?: true;
    _all?: true;
  };

  export type ProductAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Products
     **/
    _count?: true | ProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductMaxAggregateInputType;
  };

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>;
  };

  export type ProductGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductWhereInput;
    orderBy?:
      | ProductOrderByWithAggregationInput
      | ProductOrderByWithAggregationInput[];
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum;
    having?: ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
  };

  export type ProductGroupByOutputType = {
    id: string;
    name: string;
    category: $Enums.ProductCategory;
    description: string | null;
    price: number | null;
    quantity: number;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  type GetProductGroupByPayload<T extends ProductGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProductGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProductGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>;
        }
      >
    >;

  export type ProductSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      category?: boolean;
      description?: boolean;
      price?: boolean;
      quantity?: boolean;
      images?: boolean | Product$imagesArgs<ExtArgs>;
      cart?: boolean | Product$cartArgs<ExtArgs>;
      _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['product']
  >;

  export type ProductSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      category?: boolean;
      description?: boolean;
      price?: boolean;
      quantity?: boolean;
    },
    ExtArgs['result']['product']
  >;

  export type ProductSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      category?: boolean;
      description?: boolean;
      price?: boolean;
      quantity?: boolean;
    },
    ExtArgs['result']['product']
  >;

  export type ProductSelectScalar = {
    id?: boolean;
    name?: boolean;
    category?: boolean;
    description?: boolean;
    price?: boolean;
    quantity?: boolean;
  };

  export type ProductOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'category' | 'description' | 'price' | 'quantity',
    ExtArgs['result']['product']
  >;
  export type ProductInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    images?: boolean | Product$imagesArgs<ExtArgs>;
    cart?: boolean | Product$cartArgs<ExtArgs>;
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ProductIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type ProductIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $ProductPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Product';
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[];
      cart: Prisma.$CartItemPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        category: $Enums.ProductCategory;
        description: string | null;
        price: number | null;
        quantity: number;
      },
      ExtArgs['result']['product']
    >;
    composites: {};
  };

  type ProductGetPayload<
    S extends boolean | null | undefined | ProductDefaultArgs,
  > = $Result.GetResult<Prisma.$ProductPayload, S>;

  type ProductCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
  };

  export interface ProductDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Product'];
      meta: { name: 'Product' };
    };
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     *
     */
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     *
     */
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
     **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(
      args: Subset<T, ProductAggregateArgs>,
    ): Prisma.PrismaPromise<GetProductAggregateType<T>>;

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProductGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Product model
     */
    readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    images<T extends Product$imagesArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$imagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ImagePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    cart<T extends Product$cartArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$cartArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CartItemPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<'Product', 'String'>;
    readonly name: FieldRef<'Product', 'String'>;
    readonly category: FieldRef<'Product', 'ProductCategory'>;
    readonly description: FieldRef<'Product', 'String'>;
    readonly price: FieldRef<'Product', 'Float'>;
    readonly quantity: FieldRef<'Product', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product create
   */
  export type ProductCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>;
  };

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Product update
   */
  export type ProductUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>;
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput;
    /**
     * Limit how many Products to update.
     */
    limit?: number;
  };

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput;
    /**
     * Limit how many Products to update.
     */
    limit?: number;
  };

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput;
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>;
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>;
  };

  /**
   * Product delete
   */
  export type ProductDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput;
    /**
     * Limit how many Products to delete.
     */
    limit?: number;
  };

  /**
   * Product.images
   */
  export type Product$imagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    where?: ImageWhereInput;
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    cursor?: ImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Product.cart
   */
  export type Product$cartArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    where?: CartItemWhereInput;
    orderBy?:
      | CartItemOrderByWithRelationInput
      | CartItemOrderByWithRelationInput[];
    cursor?: CartItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[];
  };

  /**
   * Product without action
   */
  export type ProductDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
  };

  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null;
    _min: ImageMinAggregateOutputType | null;
    _max: ImageMaxAggregateOutputType | null;
  };

  export type ImageMinAggregateOutputType = {
    id: string | null;
    image: string | null;
    productId: string | null;
  };

  export type ImageMaxAggregateOutputType = {
    id: string | null;
    image: string | null;
    productId: string | null;
  };

  export type ImageCountAggregateOutputType = {
    id: number;
    image: number;
    productId: number;
    _all: number;
  };

  export type ImageMinAggregateInputType = {
    id?: true;
    image?: true;
    productId?: true;
  };

  export type ImageMaxAggregateInputType = {
    id?: true;
    image?: true;
    productId?: true;
  };

  export type ImageCountAggregateInputType = {
    id?: true;
    image?: true;
    productId?: true;
    _all?: true;
  };

  export type ImageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Images
     **/
    _count?: true | ImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ImageMaxAggregateInputType;
  };

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
    [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>;
  };

  export type ImageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ImageWhereInput;
    orderBy?:
      | ImageOrderByWithAggregationInput
      | ImageOrderByWithAggregationInput[];
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum;
    having?: ImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ImageCountAggregateInputType | true;
    _min?: ImageMinAggregateInputType;
    _max?: ImageMaxAggregateInputType;
  };

  export type ImageGroupByOutputType = {
    id: string;
    image: string;
    productId: string | null;
    _count: ImageCountAggregateOutputType | null;
    _min: ImageMinAggregateOutputType | null;
    _max: ImageMaxAggregateOutputType | null;
  };

  type GetImageGroupByPayload<T extends ImageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ImageGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ImageGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>;
        }
      >
    >;

  export type ImageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      image?: boolean;
      productId?: boolean;
      Product?: boolean | Image$ProductArgs<ExtArgs>;
    },
    ExtArgs['result']['image']
  >;

  export type ImageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      image?: boolean;
      productId?: boolean;
      Product?: boolean | Image$ProductArgs<ExtArgs>;
    },
    ExtArgs['result']['image']
  >;

  export type ImageSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      image?: boolean;
      productId?: boolean;
      Product?: boolean | Image$ProductArgs<ExtArgs>;
    },
    ExtArgs['result']['image']
  >;

  export type ImageSelectScalar = {
    id?: boolean;
    image?: boolean;
    productId?: boolean;
  };

  export type ImageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'image' | 'productId',
    ExtArgs['result']['image']
  >;
  export type ImageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Product?: boolean | Image$ProductArgs<ExtArgs>;
  };
  export type ImageIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Product?: boolean | Image$ProductArgs<ExtArgs>;
  };
  export type ImageIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Product?: boolean | Image$ProductArgs<ExtArgs>;
  };

  export type $ImagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Image';
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        image: string;
        productId: string | null;
      },
      ExtArgs['result']['image']
    >;
    composites: {};
  };

  type ImageGetPayload<
    S extends boolean | null | undefined | ImageDefaultArgs,
  > = $Result.GetResult<Prisma.$ImagePayload, S>;

  type ImageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ImageCountAggregateInputType | true;
  };

  export interface ImageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Image'];
      meta: { name: 'Image' };
    };
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(
      args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(
      args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     *
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ImageFindManyArgs>(
      args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     *
     */
    create<T extends ImageCreateArgs>(
      args: SelectSubset<T, ImageCreateArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ImageCreateManyArgs>(
      args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     *
     */
    delete<T extends ImageDeleteArgs>(
      args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ImageUpdateArgs>(
      args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ImageDeleteManyArgs>(
      args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ImageUpdateManyArgs>(
      args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(
      args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
     **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(
      args: Subset<T, ImageAggregateArgs>,
    ): Prisma.PrismaPromise<GetImageAggregateType<T>>;

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetImageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Image model
     */
    readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    Product<T extends Image$ProductArgs<ExtArgs> = {}>(
      args?: Subset<T, Image$ProductArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<'Image', 'String'>;
    readonly image: FieldRef<'Image', 'String'>;
    readonly productId: FieldRef<'Image', 'String'>;
  }

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput;
  };

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput;
  };

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Image create
   */
  export type ImageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>;
  };

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Image update
   */
  export type ImageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>;
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput;
  };

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>;
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput;
    /**
     * Limit how many Images to update.
     */
    limit?: number;
  };

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>;
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput;
    /**
     * Limit how many Images to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput;
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>;
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>;
  };

  /**
   * Image delete
   */
  export type ImageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput;
  };

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput;
    /**
     * Limit how many Images to delete.
     */
    limit?: number;
  };

  /**
   * Image.Product
   */
  export type Image$ProductArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    where?: ProductWhereInput;
  };

  /**
   * Image without action
   */
  export type ImageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
  };

  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null;
    _avg: CartItemAvgAggregateOutputType | null;
    _sum: CartItemSumAggregateOutputType | null;
    _min: CartItemMinAggregateOutputType | null;
    _max: CartItemMaxAggregateOutputType | null;
  };

  export type CartItemAvgAggregateOutputType = {
    id: number | null;
    quantity: number | null;
  };

  export type CartItemSumAggregateOutputType = {
    id: number | null;
    quantity: number | null;
  };

  export type CartItemMinAggregateOutputType = {
    id: number | null;
    userId: string | null;
    productId: string | null;
    quantity: number | null;
  };

  export type CartItemMaxAggregateOutputType = {
    id: number | null;
    userId: string | null;
    productId: string | null;
    quantity: number | null;
  };

  export type CartItemCountAggregateOutputType = {
    id: number;
    userId: number;
    productId: number;
    quantity: number;
    _all: number;
  };

  export type CartItemAvgAggregateInputType = {
    id?: true;
    quantity?: true;
  };

  export type CartItemSumAggregateInputType = {
    id?: true;
    quantity?: true;
  };

  export type CartItemMinAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    quantity?: true;
  };

  export type CartItemMaxAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    quantity?: true;
  };

  export type CartItemCountAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    quantity?: true;
    _all?: true;
  };

  export type CartItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CartItems to fetch.
     */
    orderBy?:
      | CartItemOrderByWithRelationInput
      | CartItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CartItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CartItems
     **/
    _count?: true | CartItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CartItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CartItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CartItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CartItemMaxAggregateInputType;
  };

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
    [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>;
  };

  export type CartItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CartItemWhereInput;
    orderBy?:
      | CartItemOrderByWithAggregationInput
      | CartItemOrderByWithAggregationInput[];
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum;
    having?: CartItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CartItemCountAggregateInputType | true;
    _avg?: CartItemAvgAggregateInputType;
    _sum?: CartItemSumAggregateInputType;
    _min?: CartItemMinAggregateInputType;
    _max?: CartItemMaxAggregateInputType;
  };

  export type CartItemGroupByOutputType = {
    id: number;
    userId: string;
    productId: string;
    quantity: number;
    _count: CartItemCountAggregateOutputType | null;
    _avg: CartItemAvgAggregateOutputType | null;
    _sum: CartItemSumAggregateOutputType | null;
    _min: CartItemMinAggregateOutputType | null;
    _max: CartItemMaxAggregateOutputType | null;
  };

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CartItemGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CartItemGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>;
        }
      >
    >;

  export type CartItemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      productId?: boolean;
      quantity?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['cartItem']
  >;

  export type CartItemSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      productId?: boolean;
      quantity?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['cartItem']
  >;

  export type CartItemSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      productId?: boolean;
      quantity?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['cartItem']
  >;

  export type CartItemSelectScalar = {
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    quantity?: boolean;
  };

  export type CartItemOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'productId' | 'quantity',
    ExtArgs['result']['cartItem']
  >;
  export type CartItemInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type CartItemIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type CartItemIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };

  export type $CartItemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'CartItem';
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        userId: string;
        productId: string;
        quantity: number;
      },
      ExtArgs['result']['cartItem']
    >;
    composites: {};
  };

  type CartItemGetPayload<
    S extends boolean | null | undefined | CartItemDefaultArgs,
  > = $Result.GetResult<Prisma.$CartItemPayload, S>;

  type CartItemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CartItemCountAggregateInputType | true;
  };

  export interface CartItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['CartItem'];
      meta: { name: 'CartItem' };
    };
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(
      args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>,
    ): Prisma__CartItemClient<
      $Result.GetResult<
        Prisma.$CartItemPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CartItemClient<
      $Result.GetResult<
        Prisma.$CartItemPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(
      args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>,
    ): Prisma__CartItemClient<
      $Result.GetResult<
        Prisma.$CartItemPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CartItemClient<
      $Result.GetResult<
        Prisma.$CartItemPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     *
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CartItemFindManyArgs>(
      args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CartItemPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     *
     */
    create<T extends CartItemCreateArgs>(
      args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>,
    ): Prisma__CartItemClient<
      $Result.GetResult<
        Prisma.$CartItemPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CartItemCreateManyArgs>(
      args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CartItemPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     *
     */
    delete<T extends CartItemDeleteArgs>(
      args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>,
    ): Prisma__CartItemClient<
      $Result.GetResult<
        Prisma.$CartItemPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CartItemUpdateArgs>(
      args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>,
    ): Prisma__CartItemClient<
      $Result.GetResult<
        Prisma.$CartItemPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CartItemDeleteManyArgs>(
      args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CartItemUpdateManyArgs>(
      args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CartItemPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(
      args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>,
    ): Prisma__CartItemClient<
      $Result.GetResult<
        Prisma.$CartItemPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
     **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemAggregateArgs>(
      args: Subset<T, CartItemAggregateArgs>,
    ): Prisma.PrismaPromise<GetCartItemAggregateType<T>>;

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
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
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCartItemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CartItem model
     */
    readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly id: FieldRef<'CartItem', 'Int'>;
    readonly userId: FieldRef<'CartItem', 'String'>;
    readonly productId: FieldRef<'CartItem', 'String'>;
    readonly quantity: FieldRef<'CartItem', 'Int'>;
  }

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput;
  };

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput;
  };

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CartItems to fetch.
     */
    orderBy?:
      | CartItemOrderByWithRelationInput
      | CartItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CartItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[];
  };

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CartItems to fetch.
     */
    orderBy?:
      | CartItemOrderByWithRelationInput
      | CartItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CartItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[];
  };

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CartItems to fetch.
     */
    orderBy?:
      | CartItemOrderByWithRelationInput
      | CartItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CartItems.
     */
    skip?: number;
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[];
  };

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>;
  };

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CartItem createManyAndReturn
   */
  export type CartItemCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>;
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput;
  };

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<
      CartItemUpdateManyMutationInput,
      CartItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput;
    /**
     * Limit how many CartItems to update.
     */
    limit?: number;
  };

  /**
   * CartItem updateManyAndReturn
   */
  export type CartItemUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * The data used to update CartItems.
     */
    data: XOR<
      CartItemUpdateManyMutationInput,
      CartItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput;
    /**
     * Limit how many CartItems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput;
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>;
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>;
  };

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput;
  };

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput;
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number;
  };

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ProductScalarFieldEnum: {
    id: 'id';
    name: 'name';
    category: 'category';
    description: 'description';
    price: 'price';
    quantity: 'quantity';
  };

  export type ProductScalarFieldEnum =
    (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];

  export const ImageScalarFieldEnum: {
    id: 'id';
    image: 'image';
    productId: 'productId';
  };

  export type ImageScalarFieldEnum =
    (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum];

  export const CartItemScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    productId: 'productId';
    quantity: 'quantity';
  };

  export type CartItemScalarFieldEnum =
    (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'ProductCategory'
   */
  export type EnumProductCategoryFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ProductCategory'>;

  /**
   * Reference to a field of type 'ProductCategory[]'
   */
  export type ListEnumProductCategoryFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ProductCategory[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Deep Input Types
   */

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[];
    OR?: ProductWhereInput[];
    NOT?: ProductWhereInput | ProductWhereInput[];
    id?: StringFilter<'Product'> | string;
    name?: StringFilter<'Product'> | string;
    category?: EnumProductCategoryFilter<'Product'> | $Enums.ProductCategory;
    description?: StringNullableFilter<'Product'> | string | null;
    price?: FloatNullableFilter<'Product'> | number | null;
    quantity?: IntFilter<'Product'> | number;
    images?: ImageListRelationFilter;
    cart?: CartItemListRelationFilter;
  };

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    category?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    quantity?: SortOrder;
    images?: ImageOrderByRelationAggregateInput;
    cart?: CartItemOrderByRelationAggregateInput;
  };

  export type ProductWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ProductWhereInput | ProductWhereInput[];
      OR?: ProductWhereInput[];
      NOT?: ProductWhereInput | ProductWhereInput[];
      name?: StringFilter<'Product'> | string;
      category?: EnumProductCategoryFilter<'Product'> | $Enums.ProductCategory;
      description?: StringNullableFilter<'Product'> | string | null;
      price?: FloatNullableFilter<'Product'> | number | null;
      quantity?: IntFilter<'Product'> | number;
      images?: ImageListRelationFilter;
      cart?: CartItemListRelationFilter;
    },
    'id'
  >;

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    category?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    quantity?: SortOrder;
    _count?: ProductCountOrderByAggregateInput;
    _avg?: ProductAvgOrderByAggregateInput;
    _max?: ProductMaxOrderByAggregateInput;
    _min?: ProductMinOrderByAggregateInput;
    _sum?: ProductSumOrderByAggregateInput;
  };

  export type ProductScalarWhereWithAggregatesInput = {
    AND?:
      | ProductScalarWhereWithAggregatesInput
      | ProductScalarWhereWithAggregatesInput[];
    OR?: ProductScalarWhereWithAggregatesInput[];
    NOT?:
      | ProductScalarWhereWithAggregatesInput
      | ProductScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Product'> | string;
    name?: StringWithAggregatesFilter<'Product'> | string;
    category?:
      | EnumProductCategoryWithAggregatesFilter<'Product'>
      | $Enums.ProductCategory;
    description?: StringNullableWithAggregatesFilter<'Product'> | string | null;
    price?: FloatNullableWithAggregatesFilter<'Product'> | number | null;
    quantity?: IntWithAggregatesFilter<'Product'> | number;
  };

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[];
    OR?: ImageWhereInput[];
    NOT?: ImageWhereInput | ImageWhereInput[];
    id?: StringFilter<'Image'> | string;
    image?: StringFilter<'Image'> | string;
    productId?: StringNullableFilter<'Image'> | string | null;
    Product?: XOR<
      ProductNullableScalarRelationFilter,
      ProductWhereInput
    > | null;
  };

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder;
    image?: SortOrder;
    productId?: SortOrderInput | SortOrder;
    Product?: ProductOrderByWithRelationInput;
  };

  export type ImageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ImageWhereInput | ImageWhereInput[];
      OR?: ImageWhereInput[];
      NOT?: ImageWhereInput | ImageWhereInput[];
      image?: StringFilter<'Image'> | string;
      productId?: StringNullableFilter<'Image'> | string | null;
      Product?: XOR<
        ProductNullableScalarRelationFilter,
        ProductWhereInput
      > | null;
    },
    'id'
  >;

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder;
    image?: SortOrder;
    productId?: SortOrderInput | SortOrder;
    _count?: ImageCountOrderByAggregateInput;
    _max?: ImageMaxOrderByAggregateInput;
    _min?: ImageMinOrderByAggregateInput;
  };

  export type ImageScalarWhereWithAggregatesInput = {
    AND?:
      | ImageScalarWhereWithAggregatesInput
      | ImageScalarWhereWithAggregatesInput[];
    OR?: ImageScalarWhereWithAggregatesInput[];
    NOT?:
      | ImageScalarWhereWithAggregatesInput
      | ImageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Image'> | string;
    image?: StringWithAggregatesFilter<'Image'> | string;
    productId?: StringNullableWithAggregatesFilter<'Image'> | string | null;
  };

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[];
    OR?: CartItemWhereInput[];
    NOT?: CartItemWhereInput | CartItemWhereInput[];
    id?: IntFilter<'CartItem'> | number;
    userId?: StringFilter<'CartItem'> | string;
    productId?: StringFilter<'CartItem'> | string;
    quantity?: IntFilter<'CartItem'> | number;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
  };

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    productId?: SortOrder;
    quantity?: SortOrder;
    product?: ProductOrderByWithRelationInput;
  };

  export type CartItemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: CartItemWhereInput | CartItemWhereInput[];
      OR?: CartItemWhereInput[];
      NOT?: CartItemWhereInput | CartItemWhereInput[];
      userId?: StringFilter<'CartItem'> | string;
      productId?: StringFilter<'CartItem'> | string;
      quantity?: IntFilter<'CartItem'> | number;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    },
    'id'
  >;

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    productId?: SortOrder;
    quantity?: SortOrder;
    _count?: CartItemCountOrderByAggregateInput;
    _avg?: CartItemAvgOrderByAggregateInput;
    _max?: CartItemMaxOrderByAggregateInput;
    _min?: CartItemMinOrderByAggregateInput;
    _sum?: CartItemSumOrderByAggregateInput;
  };

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?:
      | CartItemScalarWhereWithAggregatesInput
      | CartItemScalarWhereWithAggregatesInput[];
    OR?: CartItemScalarWhereWithAggregatesInput[];
    NOT?:
      | CartItemScalarWhereWithAggregatesInput
      | CartItemScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'CartItem'> | number;
    userId?: StringWithAggregatesFilter<'CartItem'> | string;
    productId?: StringWithAggregatesFilter<'CartItem'> | string;
    quantity?: IntWithAggregatesFilter<'CartItem'> | number;
  };

  export type ProductCreateInput = {
    id?: string;
    name: string;
    category: $Enums.ProductCategory;
    description?: string | null;
    price?: number | null;
    quantity?: number;
    images?: ImageCreateNestedManyWithoutProductInput;
    cart?: CartItemCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateInput = {
    id?: string;
    name: string;
    category: $Enums.ProductCategory;
    description?: string | null;
    price?: number | null;
    quantity?: number;
    images?: ImageUncheckedCreateNestedManyWithoutProductInput;
    cart?: CartItemUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?:
      | EnumProductCategoryFieldUpdateOperationsInput
      | $Enums.ProductCategory;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    quantity?: IntFieldUpdateOperationsInput | number;
    images?: ImageUpdateManyWithoutProductNestedInput;
    cart?: CartItemUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?:
      | EnumProductCategoryFieldUpdateOperationsInput
      | $Enums.ProductCategory;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    quantity?: IntFieldUpdateOperationsInput | number;
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput;
    cart?: CartItemUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductCreateManyInput = {
    id?: string;
    name: string;
    category: $Enums.ProductCategory;
    description?: string | null;
    price?: number | null;
    quantity?: number;
  };

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?:
      | EnumProductCategoryFieldUpdateOperationsInput
      | $Enums.ProductCategory;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?:
      | EnumProductCategoryFieldUpdateOperationsInput
      | $Enums.ProductCategory;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type ImageCreateInput = {
    id?: string;
    image: string;
    Product?: ProductCreateNestedOneWithoutImagesInput;
  };

  export type ImageUncheckedCreateInput = {
    id?: string;
    image: string;
    productId?: string | null;
  };

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    Product?: ProductUpdateOneWithoutImagesNestedInput;
  };

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    productId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ImageCreateManyInput = {
    id?: string;
    image: string;
    productId?: string | null;
  };

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
  };

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    productId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CartItemCreateInput = {
    userId: string;
    quantity: number;
    product: ProductCreateNestedOneWithoutCartInput;
  };

  export type CartItemUncheckedCreateInput = {
    id?: number;
    userId: string;
    productId: string;
    quantity: number;
  };

  export type CartItemUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    product?: ProductUpdateOneRequiredWithoutCartNestedInput;
  };

  export type CartItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: StringFieldUpdateOperationsInput | string;
    productId?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type CartItemCreateManyInput = {
    id?: number;
    userId: string;
    productId: string;
    quantity: number;
  };

  export type CartItemUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type CartItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: StringFieldUpdateOperationsInput | string;
    productId?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumProductCategoryFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ProductCategory
      | EnumProductCategoryFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProductCategoryFilter<$PrismaModel>
      | $Enums.ProductCategory;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type ImageListRelationFilter = {
    every?: ImageWhereInput;
    some?: ImageWhereInput;
    none?: ImageWhereInput;
  };

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput;
    some?: CartItemWhereInput;
    none?: CartItemWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    category?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    category?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    category?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumProductCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ProductCategory
      | EnumProductCategoryFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProductCategoryWithAggregatesFilter<$PrismaModel>
      | $Enums.ProductCategory;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumProductCategoryFilter<$PrismaModel>;
    _max?: NestedEnumProductCategoryFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null;
    isNot?: ProductWhereInput | null;
  };

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder;
    image?: SortOrder;
    productId?: SortOrder;
  };

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder;
    image?: SortOrder;
    productId?: SortOrder;
  };

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder;
    image?: SortOrder;
    productId?: SortOrder;
  };

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput;
    isNot?: ProductWhereInput;
  };

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    productId?: SortOrder;
    quantity?: SortOrder;
  };

  export type CartItemAvgOrderByAggregateInput = {
    id?: SortOrder;
    quantity?: SortOrder;
  };

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    productId?: SortOrder;
    quantity?: SortOrder;
  };

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    productId?: SortOrder;
    quantity?: SortOrder;
  };

  export type CartItemSumOrderByAggregateInput = {
    id?: SortOrder;
    quantity?: SortOrder;
  };

  export type ImageCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          ImageCreateWithoutProductInput,
          ImageUncheckedCreateWithoutProductInput
        >
      | ImageCreateWithoutProductInput[]
      | ImageUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | ImageCreateOrConnectWithoutProductInput
      | ImageCreateOrConnectWithoutProductInput[];
    createMany?: ImageCreateManyProductInputEnvelope;
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
  };

  export type CartItemCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          CartItemCreateWithoutProductInput,
          CartItemUncheckedCreateWithoutProductInput
        >
      | CartItemCreateWithoutProductInput[]
      | CartItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | CartItemCreateOrConnectWithoutProductInput
      | CartItemCreateOrConnectWithoutProductInput[];
    createMany?: CartItemCreateManyProductInputEnvelope;
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
  };

  export type ImageUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          ImageCreateWithoutProductInput,
          ImageUncheckedCreateWithoutProductInput
        >
      | ImageCreateWithoutProductInput[]
      | ImageUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | ImageCreateOrConnectWithoutProductInput
      | ImageCreateOrConnectWithoutProductInput[];
    createMany?: ImageCreateManyProductInputEnvelope;
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
  };

  export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          CartItemCreateWithoutProductInput,
          CartItemUncheckedCreateWithoutProductInput
        >
      | CartItemCreateWithoutProductInput[]
      | CartItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | CartItemCreateOrConnectWithoutProductInput
      | CartItemCreateOrConnectWithoutProductInput[];
    createMany?: CartItemCreateManyProductInputEnvelope;
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumProductCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ProductCategory;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ImageUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          ImageCreateWithoutProductInput,
          ImageUncheckedCreateWithoutProductInput
        >
      | ImageCreateWithoutProductInput[]
      | ImageUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | ImageCreateOrConnectWithoutProductInput
      | ImageCreateOrConnectWithoutProductInput[];
    upsert?:
      | ImageUpsertWithWhereUniqueWithoutProductInput
      | ImageUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: ImageCreateManyProductInputEnvelope;
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    update?:
      | ImageUpdateWithWhereUniqueWithoutProductInput
      | ImageUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | ImageUpdateManyWithWhereWithoutProductInput
      | ImageUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[];
  };

  export type CartItemUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          CartItemCreateWithoutProductInput,
          CartItemUncheckedCreateWithoutProductInput
        >
      | CartItemCreateWithoutProductInput[]
      | CartItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | CartItemCreateOrConnectWithoutProductInput
      | CartItemCreateOrConnectWithoutProductInput[];
    upsert?:
      | CartItemUpsertWithWhereUniqueWithoutProductInput
      | CartItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: CartItemCreateManyProductInputEnvelope;
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    update?:
      | CartItemUpdateWithWhereUniqueWithoutProductInput
      | CartItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | CartItemUpdateManyWithWhereWithoutProductInput
      | CartItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[];
  };

  export type ImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          ImageCreateWithoutProductInput,
          ImageUncheckedCreateWithoutProductInput
        >
      | ImageCreateWithoutProductInput[]
      | ImageUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | ImageCreateOrConnectWithoutProductInput
      | ImageCreateOrConnectWithoutProductInput[];
    upsert?:
      | ImageUpsertWithWhereUniqueWithoutProductInput
      | ImageUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: ImageCreateManyProductInputEnvelope;
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    update?:
      | ImageUpdateWithWhereUniqueWithoutProductInput
      | ImageUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | ImageUpdateManyWithWhereWithoutProductInput
      | ImageUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[];
  };

  export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          CartItemCreateWithoutProductInput,
          CartItemUncheckedCreateWithoutProductInput
        >
      | CartItemCreateWithoutProductInput[]
      | CartItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | CartItemCreateOrConnectWithoutProductInput
      | CartItemCreateOrConnectWithoutProductInput[];
    upsert?:
      | CartItemUpsertWithWhereUniqueWithoutProductInput
      | CartItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: CartItemCreateManyProductInputEnvelope;
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    update?:
      | CartItemUpdateWithWhereUniqueWithoutProductInput
      | CartItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | CartItemUpdateManyWithWhereWithoutProductInput
      | CartItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[];
  };

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<
      ProductCreateWithoutImagesInput,
      ProductUncheckedCreateWithoutImagesInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput;
    connect?: ProductWhereUniqueInput;
  };

  export type ProductUpdateOneWithoutImagesNestedInput = {
    create?: XOR<
      ProductCreateWithoutImagesInput,
      ProductUncheckedCreateWithoutImagesInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput;
    upsert?: ProductUpsertWithoutImagesInput;
    disconnect?: ProductWhereInput | boolean;
    delete?: ProductWhereInput | boolean;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductUpdateToOneWithWhereWithoutImagesInput,
        ProductUpdateWithoutImagesInput
      >,
      ProductUncheckedUpdateWithoutImagesInput
    >;
  };

  export type ProductCreateNestedOneWithoutCartInput = {
    create?: XOR<
      ProductCreateWithoutCartInput,
      ProductUncheckedCreateWithoutCartInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutCartInput;
    connect?: ProductWhereUniqueInput;
  };

  export type ProductUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<
      ProductCreateWithoutCartInput,
      ProductUncheckedCreateWithoutCartInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutCartInput;
    upsert?: ProductUpsertWithoutCartInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductUpdateToOneWithWhereWithoutCartInput,
        ProductUpdateWithoutCartInput
      >,
      ProductUncheckedUpdateWithoutCartInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumProductCategoryFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ProductCategory
      | EnumProductCategoryFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProductCategoryFilter<$PrismaModel>
      | $Enums.ProductCategory;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedEnumProductCategoryWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.ProductCategory
      | EnumProductCategoryFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProductCategoryWithAggregatesFilter<$PrismaModel>
      | $Enums.ProductCategory;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumProductCategoryFilter<$PrismaModel>;
    _max?: NestedEnumProductCategoryFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type ImageCreateWithoutProductInput = {
    id?: string;
    image: string;
  };

  export type ImageUncheckedCreateWithoutProductInput = {
    id?: string;
    image: string;
  };

  export type ImageCreateOrConnectWithoutProductInput = {
    where: ImageWhereUniqueInput;
    create: XOR<
      ImageCreateWithoutProductInput,
      ImageUncheckedCreateWithoutProductInput
    >;
  };

  export type ImageCreateManyProductInputEnvelope = {
    data: ImageCreateManyProductInput | ImageCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type CartItemCreateWithoutProductInput = {
    userId: string;
    quantity: number;
  };

  export type CartItemUncheckedCreateWithoutProductInput = {
    id?: number;
    userId: string;
    quantity: number;
  };

  export type CartItemCreateOrConnectWithoutProductInput = {
    where: CartItemWhereUniqueInput;
    create: XOR<
      CartItemCreateWithoutProductInput,
      CartItemUncheckedCreateWithoutProductInput
    >;
  };

  export type CartItemCreateManyProductInputEnvelope = {
    data: CartItemCreateManyProductInput | CartItemCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type ImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput;
    update: XOR<
      ImageUpdateWithoutProductInput,
      ImageUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      ImageCreateWithoutProductInput,
      ImageUncheckedCreateWithoutProductInput
    >;
  };

  export type ImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput;
    data: XOR<
      ImageUpdateWithoutProductInput,
      ImageUncheckedUpdateWithoutProductInput
    >;
  };

  export type ImageUpdateManyWithWhereWithoutProductInput = {
    where: ImageScalarWhereInput;
    data: XOR<
      ImageUpdateManyMutationInput,
      ImageUncheckedUpdateManyWithoutProductInput
    >;
  };

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[];
    OR?: ImageScalarWhereInput[];
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[];
    id?: StringFilter<'Image'> | string;
    image?: StringFilter<'Image'> | string;
    productId?: StringNullableFilter<'Image'> | string | null;
  };

  export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput;
    update: XOR<
      CartItemUpdateWithoutProductInput,
      CartItemUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      CartItemCreateWithoutProductInput,
      CartItemUncheckedCreateWithoutProductInput
    >;
  };

  export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput;
    data: XOR<
      CartItemUpdateWithoutProductInput,
      CartItemUncheckedUpdateWithoutProductInput
    >;
  };

  export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: CartItemScalarWhereInput;
    data: XOR<
      CartItemUpdateManyMutationInput,
      CartItemUncheckedUpdateManyWithoutProductInput
    >;
  };

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[];
    OR?: CartItemScalarWhereInput[];
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[];
    id?: IntFilter<'CartItem'> | number;
    userId?: StringFilter<'CartItem'> | string;
    productId?: StringFilter<'CartItem'> | string;
    quantity?: IntFilter<'CartItem'> | number;
  };

  export type ProductCreateWithoutImagesInput = {
    id?: string;
    name: string;
    category: $Enums.ProductCategory;
    description?: string | null;
    price?: number | null;
    quantity?: number;
    cart?: CartItemCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutImagesInput = {
    id?: string;
    name: string;
    category: $Enums.ProductCategory;
    description?: string | null;
    price?: number | null;
    quantity?: number;
    cart?: CartItemUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutImagesInput,
      ProductUncheckedCreateWithoutImagesInput
    >;
  };

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<
      ProductUpdateWithoutImagesInput,
      ProductUncheckedUpdateWithoutImagesInput
    >;
    create: XOR<
      ProductCreateWithoutImagesInput,
      ProductUncheckedCreateWithoutImagesInput
    >;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput;
    data: XOR<
      ProductUpdateWithoutImagesInput,
      ProductUncheckedUpdateWithoutImagesInput
    >;
  };

  export type ProductUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?:
      | EnumProductCategoryFieldUpdateOperationsInput
      | $Enums.ProductCategory;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    quantity?: IntFieldUpdateOperationsInput | number;
    cart?: CartItemUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?:
      | EnumProductCategoryFieldUpdateOperationsInput
      | $Enums.ProductCategory;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    quantity?: IntFieldUpdateOperationsInput | number;
    cart?: CartItemUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductCreateWithoutCartInput = {
    id?: string;
    name: string;
    category: $Enums.ProductCategory;
    description?: string | null;
    price?: number | null;
    quantity?: number;
    images?: ImageCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutCartInput = {
    id?: string;
    name: string;
    category: $Enums.ProductCategory;
    description?: string | null;
    price?: number | null;
    quantity?: number;
    images?: ImageUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutCartInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutCartInput,
      ProductUncheckedCreateWithoutCartInput
    >;
  };

  export type ProductUpsertWithoutCartInput = {
    update: XOR<
      ProductUpdateWithoutCartInput,
      ProductUncheckedUpdateWithoutCartInput
    >;
    create: XOR<
      ProductCreateWithoutCartInput,
      ProductUncheckedCreateWithoutCartInput
    >;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutCartInput = {
    where?: ProductWhereInput;
    data: XOR<
      ProductUpdateWithoutCartInput,
      ProductUncheckedUpdateWithoutCartInput
    >;
  };

  export type ProductUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?:
      | EnumProductCategoryFieldUpdateOperationsInput
      | $Enums.ProductCategory;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    quantity?: IntFieldUpdateOperationsInput | number;
    images?: ImageUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?:
      | EnumProductCategoryFieldUpdateOperationsInput
      | $Enums.ProductCategory;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    quantity?: IntFieldUpdateOperationsInput | number;
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ImageCreateManyProductInput = {
    id?: string;
    image: string;
  };

  export type CartItemCreateManyProductInput = {
    id?: number;
    userId: string;
    quantity: number;
  };

  export type ImageUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
  };

  export type ImageUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
  };

  export type ImageUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
  };

  export type CartItemUpdateWithoutProductInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type CartItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type CartItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
