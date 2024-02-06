/// <reference no-default-lib="true"/>

/** ## THIS IS NOT PART OF THE STANDARD LIBRARY */
export interface __safescript_internals__ {
    /** SafeScript version */
    readonly __version__: 'v0.0.1-dev';
}

declare global {
    export namespace core {
        export namespace eh {
            /**
             * The {@link Result} type is a type that represents a value that may or may not be an error.
             * This is used all over the place in SafeScript. Especially in IO operations.
             * This is one of the ways that SafeScript can guarantee safety.
             * 
             * @template O the type of the Ok value
             * @template E the type of the Err value
            */
            export interface Result<O, E> {
                /**
                 * Returns true if the result is a Ok value.
                 * 
                 * @returns {owned<bool>}
                */
                isOk(this: ref<this>): owned<bool>;
                /**
                 * Returns true if the result is a Err value.
                 * 
                 * @returns {owned<bool>}
                */
                isErr(this: ref<this>): owned<bool>;
                /**
                 * If the result is a Ok value, returns a Some value with the inner value.
                 * If the result is a Err value, returns a None value.
                 * 
                 * @returns {owned<Option<O>>}
                */
                ok(this: owned<this>): owned<Option<O>>;
                /**
                 * If the result is a Ok value, returns a None value.
                 * If the result is a Err value, returns a Some value with the inner value.
                 * 
                 * @returns {owned<Option<E>>}
                */
                err(this: owned<this>): owned<Option<E>>;
                /**
                 * Returns the inner value of the result.
                 * Panics with {@link msg} if the result is a Err value.
                 * 
                 * @param {owned<str>} msg
                 * @returns {owned<O>}
                */
                expect(this: owned<this>, msg: owned<str>): owned<O>;
                /**
                 * Returns the inner error of the result.
                 * Panics with {@link msg} if the result is a Ok value.
                 * 
                 * @param {owned<str>} msg
                 * @returns {owned<E>}
                */
                expectErr(this: owned<this>, msg: owned<str>): owned<E>;
                /**
                 * Returns the inner value of the result.
                 * Panics if the result is a Err value.
                 * 
                 * @returns {owned<O> | never}
                */
                unwrap(this: owned<this>): owned<O> | never;
                /**
                 * Returns the inner value of the result if it is a Ok value.
                 * If the result is a Err value, returns {@link backup}.
                 * 
                 * @param {owned<O>} backup
                 * @returns {owned<O>}
                */
                unwrapOr(this: owned<this>, backup: owned<O>): owned<O>;
                /**
                 * Returns the inner value of the result if it is a Ok value.
                 * If the result is a Err value, invokes {@link f} with the inner value and returns the result of the invocation.
                 * 
                 * @param {() => owned<O>} f
                 * @returns {owned<O>}
                */
                unwrapOrElse(this: owned<this>, f: () => owned<O>): owned<O>;
                /**
                 * If the result is a Ok value,
                 * returns a Ok value with the result of invoking {@link f} on the inner value.
                 * If the result is a Err value, returns a Err value with the inner value.
                 *
                 * @param {(ok: O) => U} f
                 * @returns {Result<U, E>}
                 * @template U the type of the new value
                */
                map<U>(this: owned<this>, f: (value: owned<O>) => owned<U>): owned<Result<U, E>>;
                /**
                 * If the result is a Ok value,
                 * returns a Ok value with the inner value.
                 * If the result is a Err value,
                 * returns a Err value with the result of invoking {@link f} on the inner value.
                 * 
                 * @param {(err: owned<E>) => owned<F>} f
                 * @returns {owned<Result<O, F>>}
                 * @template F the type of the new error
                */
                mapErr<F>(this: owned<this>, f: (err: owned<E>) => owned<F>): owned<Result<O, F>>;
                /**
                 * If the result is a Ok value,
                 * returns the result of invoking {@link f} on the inner value.
                 * If the result is a Err value, returns {@link backup}.
                 * 
                 * @param {owned<U>} backup
                 * @param {(ok: owned<O>) => owned<U>} f
                 * @returns {owned<U>}
                 * @template U the type of the value
                 */
                mapOr<U>(this: owned<this>, backup: owned<U>, f: (ok: owned<O>) => owned<U>): owned<U>;
                /**
                 * 
                 * 
                 * @param backup 
                 * @param f 
                 */
                mapOrElse<U>(this: owned<this>, backup: (err: owned<E>) => owned<U>, f: (ok: owned<O>) => owned<U>): owned<U>;

                get $(): O | never;
            }
            export namespace Result {
                /**
                 * A simple wrapper to create a new {@link Result}
                 * @param {O} value successful value
                 * @returns {Result<O,E>} the result
                */
                export function Ok<O, E>(value: owned<O>): owned<Result<O, E>>;
        
                /**
                 * A simple wrapper to create a new {@link Result}
                 * @param {E} err error value
                 * @returns {Result<O,E>} the result
                */
                export function Err<O, E>(err: owned<E>): owned<Result<O, E>>;
            }
            export interface Option<T> extends
                fmt.Debug, fmt.Display
            {
                /**
                 * Returns true if the option is a Some value.
                 * 
                 * @returns {bool}
                */
                isSome(this: ref<this>): bool;
                /**
                 * Returns true if the option is a None value.
                 * 
                 * @returns {bool}
                */
                isNone(this: ref<this>): bool;
                /**
                 * Returns the inner value of the option.
                 * Panics with `msg` if the option is a None value.
                 * 
                 * @panics
                 * @param {str} msg
                */
                expect(this: owned<this>, msg: str): owned<T> | never;
                /**
                 * return the value v out of the Option<T> if it is Some(v).
                 * @returns {T | never} the value
                */
                unwrap(this: owned<this>): owned<T> | never;
                /**
                 * Returns the contained value or a placeholder.
                 * @param {T} placeholder the placeholder to use
                 * @returns {T} the value
                */
                unwrapOr(this: owned<this>, placeholder: owned<T>): T;
                /**
                 * Returns the contained value or computes it from a placeholderFn.
                 * @param {() => T} placeholderFn the function to use
                 * @returns {T} the value
                */
                unwrapOrElse(this: owned<this>, placeholderFn: () => T): T;
                /**
                 * Maps an Option<T> to Option<U> by applying a function to a contained value.
                 * @param {(value: T) => U} fn the function to apply
                 * @returns {Option<U>} the option
                 * @template U the type of the value
                */
                map<U>(this: owned<this>, fn: (value: T) => U): Option<U>;
                /**
                 * Applies a function to the contained value (if any), or returns the provided placeholder (if not).
                 * @param {U} placeholder the placeholder to use
                 * @param {(value: T) => U} fn the function to apply
                 * @returns {U} the value
                 * @template U the type of the value
                */
                mapOr<U>(this: owned<this>, placeholder: U, fn: (value: T) => U): U;
                /**
                 * Applies a function to the contained value (if any), or computes with placeholderFn (if not).
                 * @param {() => U} placeholderFn the function to use
                 * @param {(value: T) => U} fn the function to apply
                 * @returns {U} the value
                 * @template U the type of the value
                */
                mapOrElse<U>(this: owned<this>, placeholderFn: () => U, fn: (value: T) => U): U;
                /**
                 * Transforms the Option<T> into a Result<T, E>, mapping Some(v) to Ok(v) and None to Err(err).
                 * @param {E} err the error to use
                 * @returns {Result<T, E>} the result
                 * @template E the type of the error
                */
                okOr<E>(this: owned<this>, err: E): Result<T, E>;
                /**
                 * Transforms the Option<T> into a Result<T, E>, mapping Some(v) to Ok(v) and None to Err(err()).
                 * @param {() => E} err the function to use
                 * @returns {Result<T, E>} the result
                 * @template E the type of the error
                */
                okOrElse<E>(this: owned<this>, err: () => E): Result<T, E>;
                /**
                 * Returns None if the option is None, otherwise returns optb.
                 * @param {Option<U>} optb the option to use
                 * @returns {Option<U>} the option
                 * @template U the type of the value
                */
                and<U>(this: owned<this>, optb: Option<U>): Option<U>;
                /**
                 * Returns None if the option is None, otherwise calls f with the wrapped value and returns the result.
                 * You can recognize it as flatMap.
                 * @param {(value: T) => Option<U>} fn the function to apply
                 * @returns {Option<U>} the option
                 * @template U the type of the value
                */
                andThen<U>(this: owned<this>, fn: (value: T) => Option<U>): Option<U>;
                /**
                 * Returns None if the option is None, otherwise calls {@link predicate}
                 * with the wrapped value and returns:
                 * 
                 * - Some(v) if predicate returns true (where 'v' is the wrapped value), and
                 * - None if predicate returns false.
                 * @param {(value: T) => bool} predicate the predicate to use
                 * @returns {Option<T>} the option
                 * @template U the type of the value
                */
                filter(this: owned<this>, predicate: (value: T) => bool): Option<T>;
                /**
                 * Returns the option if it contains a value, otherwise returns optb.
                 * @param {Option<T>} optb the option to use
                 * @returns {Option<T>} the option
                */
                or(this: owned<this>, optb: Option<T>): Option<T>;
                /**
                 * Returns the option if it contains a value, otherwise calls f and returns the result.
                 * @param {() => Option<T>} fn the function to apply
                 * @returns {Option<T>} the option
                */
                orElse(this: owned<this>, fn: () => Option<T>): Option<T>;
                /**
                 * Returns Some if exactly one of self, optb is Some, otherwise returns None.
                 * @param {Option<T>} optb the option to use
                 * @returns {Option<T>} the option
                */
                xor(this: owned<this>, optb: Option<T>): Option<T>;
                /**
                 * shortcut of unwrap
                 * 
                 * throws a {@link Error} if the value is a None
                 * @returns {T | never} the value
                */
                get $(): T | never;
            }
            export namespace Option {
                /**
                 * A simple wrapper to create an {@link Option} enum
                 * @param {T | undefined} value value to use
                 * @returns {Option<T>} the resulting option enum
                */
                export function Some<T>(value: owned<T>): owned<Option<T>>;

                /**
                 * A none value
                 * @type {Option<any>} None
                */
                //deno-lint-ignore no-explicit-any
                export const None: owned<Option<any>>;
            }
            /**
             * The {@link Error} is a trait that all error types should implement.
             * Implementing this trait allows for better error handling and interoperability.
             * And allows for the use of short-circuiting early returns.
             * 
             * Example:
             * 
             * ```rust
             * function read_file(path: str) -> Result<str, FileError> {
             *     // Code here...
             * }
             * 

             * function main() -> Result<(), dyn Error> {
             * let contents = read_file("file.txt")?;
             * // With the Error trait, we can use the ? operator to short-circuit early returns.
             * // Otherwise, we would have to do this:
             * // let contents = match read_file("file.txt") {
             * //     Ok(contents) => contents,
             * //     Err(err) => return Err(err),
             * // };
             * }
             * ```
            */
            export interface Error extends fmt.Debug, fmt.Display {
                /**
                 * Returns the underlying cause of this error, if any.
                 * (If the error is a wrapper around another error, this method should return the underlying error.)
                 * Should default to `None`.
                 * 
                 * @returns {Option<ref<Error>>}
                */
                source(): Option<ref<Error>>;
            }

            export function panic(msg: str): never;
        }
        export namespace prelude {
            export type  Option<T> = eh.Option<T>;
            export const Option: typeof eh.Option;
            export type Some<T> = typeof eh.Option.Some<T>;
            export const Some: typeof eh.Option.Some;
            export const None: typeof eh.Option.None;

            export type  Result<O, E> = eh.Result<O, E>;
            export const Result: typeof eh.Result;
            export type  Ok<O, E> = typeof eh.Result.Ok<O, E>;
            export const Ok: typeof eh.Result.Ok;
            export type  Err<O, E> = typeof eh.Result.Err<O, E>;
            export const Err: typeof eh.Result.Err;
        }
    }
}
