/// <reference no-default-lib="true"/>

/** ## THIS IS NOT PART OF THE STANDARD LIBRARY */
export interface __safescript_internals__ {
    /** SafeScript version */
    readonly __version__: 'v0.0.1-dev';
}

declare global {
    export namespace core {
        export namespace result {
            /**
             * The Typescript representation of SafeScript's `Result` enum.
             * It is similar to Rust's `Result` enum.
             * 
             * It has two variants, `Ok` and `Err`.
             * 
             * `Ok` is used to represent a successful value, and `Err` is used to represent an error.
            */
            export interface Result<O, E> {
                /**
                 * Returns true if the result is Ok.
                 * @returns {bool} true if the result is Ok
                */
                isOk(): bool;
                /**
                 * Returns true if the result is Err.
                 * @returns {bool} true if the result is Err
                */
                isErr(): bool;
                /**
                 * Converts from Result<O, E> to Option<O> and discarding the error, if any.
                 * @returns {Option<O>} the option containing Some if the result is Ok, otherwise None
                */
                ok(): Option<O>;
                /**
                 * Converts from Result<O, E> to Option<E> and discarding the success value, if any.
                 * @returns {Option<E>} the option containing Some if the result is Err, otherwise None
                */
                err(): Option<E>;
                /**
                 * Maps a Result<O, E> to Result<U, E> by applying a function to a contained Ok value, leaving an Err value untouched.
                 *
                 * This function can be used to compose the results of two functions.
                 * @param {(t: O) => U} op the function to apply to the contained Ok value
                 * @returns {Result<U, E>} the result of the function
                 * @template U the type of the successful value
                */
                map<U>(op: (t: O) => U): Result<U, E>;
                /**
                 * Maps a Result<O, E> to U by applying a function to a contained Ok value, or a fallback function to a contained Err value.
                 *
                 * This function can be used to unpack a successful result while handling an error.
                 * @param {(e: E) => U} fallback the function to apply to the contained Err value
                 * @param {(t: O) => U} map the function to apply to the contained Ok value
                 * @returns {U} the result of the function
                 * @template U the type of the successful value
                */
                mapOrElse<U>(fallback: (e: E) => U, map: (t: O) => U): U;
                /**
                 * Maps a Result<O, E> to Result<O, F> by applying a function to a contained Err value, leaving an Ok value untouched.
                 *
                 * This function can be used to pass through a successful result while handling an error.
                 * @param {(e: E) => F} op the function to apply to the contained Err value
                 * @returns {Result<O, F>} the result of the function
                 * @template F the type of the error value
                */
                mapErr<F>(op: (e: E) => F): Result<O, F>;
                /**
                 * Returns res if the result is Ok, otherwise returns the Err value of self.
                 * @param {Result<O, E>} res the result to return if self is Ok
                 * @returns {Result<O, E>} the result
                 * @template U the type of the successful value
                */
                and<U>(res: Result<U, E>): Result<U, E>;
                /**
                 * Calls op if the result is Ok, otherwise returns the Err value of self.
                 *
                 * This function can be used for control flow based on Result values.
                 * @param {(t: O) => Result<U, E>} op the function to call if the result is Ok
                 * @returns {Result<U, E>} the result of the function
                 * @template U the type of the successful value
                */
                andThen<U>(op: (t: O) => Result<U, E>): Result<U, E>;
                /**
                 * Returns res if the result is Err, otherwise returns the Ok value of self.
                 * @param {Result<O, F>} res the result to return if self is Err
                 * @returns {Result<O, F>} the result
                 * @template F the type of the error value
                */
                or<F>(res: Result<O, F>): Result<O, F>;
                /**
                 * Calls op if the result is Err, otherwise returns the Ok value of self.
                 *
                 * This function can be used for control flow based on result values.
                 * @param {(e: E) => Result<O, F>} op the function to call if the result is Err
                 * @returns {Result<O, F>} the result of the function
                 * @template F the type of the error value
                */
                orElse<F>(op: (e: E) => Result<O, F>): Result<O, F>;
                /**
                 * Unwraps a result, yielding the content of an Ok. Else, it returns optb.
                 * @param {O} optb the value to return if the result is Err
                 * @returns {O} the value
                */
                unwrapOr(optb: O): O;
                /**
                 * Unwraps a result, yielding the content of an Ok. If the value is an Err then it calls op with its value.
                 * @param {(e: E) => O} op the function to call if the result is Err
                 * @returns {O} the value
                */
                unwrapOrElse(op: (e: E) => O): O;
                /**
                 * Unwraps a result, yielding the content of an Ok.
                 *
                 * Throws Error if the value is an Err, with a error message provided by the Err's value.
                 * @returns {O | never} the value
                */
                unwrap(): O | never;
                /**
                 * Unwraps a result, yielding the content of an Ok.
                 *
                 * Throws Error if the value is an Err, with the error message being the passed message.
                 * @param {str} msg the message to use
                 * @returns {O | never} the value
                */
                expect(msg: str): O | never;
                /**
                 * Unwraps a result, yielding the content of an Err.
                 *
                 * Throws Error if the value is an Ok.
                 * @returns {E | never} the value
                */
                unwrapErr(): E | never;
                /**
                 * Unwraps a result, yielding the content of an Err.
                 *
                 * Throws Error if the value is an Ok, with the error message being the passed message.
                 * @param {str} msg the message to use
                 * @returns {E | never} the value
                */
                expectErr(msg: str): E | never;
                /**
                 * shortcut of unwrap, throws the error if Result is Err
                 * @returns {O | never} the value
                */
                get $(): O | never;
            }
            export namespace Result {
                /**
                 * A simple wrapper to create a new {@link Result}
                 * @param {O} value successful value
                 * @returns {Result<O,E>} the result
                */
                export function Ok<O, E>(value: O): Result<O, E>;
        
                /**
                 * A simple wrapper to create a new {@link Result}
                 * @param {E} err error value
                 * @returns {Result<O,E>} the result
                */
                export function Err<O, E>(err: E): Result<O, E>;
            }
        }
        export namespace prelude {
            export type  Result<O, E> = result.Result<O, E>;
            export const Result: typeof result.Result;
            export type  Ok<O, E> = typeof result.Result.Ok<O, E>;
            export const Ok: typeof result.Result.Ok;
            export type  Err<O, E> = typeof result.Result.Err<O, E>;
            export const Err: typeof result.Result.Err;
        }
    }
}
