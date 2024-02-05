/// <reference no-default-lib="true"/>

/** ## THIS IS NOT PART OF THE STANDARD LIBRARY */
export interface __safescript_internals__ {
    /** SafeScript version */
    readonly __version__: 'v0.0.1-dev';
}

declare global {
    export namespace core {
        export namespace option {
            /**
             * The Typescript representation of SafeScript's `Option` enum.
             * It is similar to Rust's `Option` enum.
             * 
             * It has two variants, `Some` and `None`.
             * 
             * `Some` is used to represent a value that is present, and `None` is used to represent a value that is absent.
            */
            export interface Option<T> {
                /**
                 * Returns true if the option is a Some value.
                 * @returns {bool} true if the option is a Some value
                */
                isSome(): bool;
                /**
                 * Returns true if the option is a None value.
                 * @returns {bool} true if the option is a None value
                */
                isNone(): bool;
                /**
                 * throw Error if the value is a None with a custom error message provided by msg.
                 * @param {str} msg the message to use
                */
                expect(msg: str): T | never;
                /**
                 * return the value v out of the Option<T> if it is Some(v).
                 * @returns {T | never} the value
                */
                unwrap(): T | never;
                /**
                 * Returns the contained value or a placeholder.
                 * @param {T} placeholder the placeholder to use
                 * @returns {T} the value
                */
                unwrapOr(placeholder: T): T;
                /**
                 * Returns the contained value or computes it from a placeholderFn.
                 * @param {() => T} placeholderFn the function to use
                 * @returns {T} the value
                */
                unwrapOrElse(placeholderFn: () => T): T;
                /**
                 * Maps an Option<T> to Option<U> by applying a function to a contained value.
                 * @param {(value: T) => U} fn the function to apply
                 * @returns {Option<U>} the option
                 * @template U the type of the value
                */
                map<U>(fn: (value: T) => U): Option<U>;
                /**
                 * Applies a function to the contained value (if any), or returns the provided placeholder (if not).
                 * @param {U} placeholder the placeholder to use
                 * @param {(value: T) => U} fn the function to apply
                 * @returns {U} the value
                 * @template U the type of the value
                */
                mapOr<U>(placeholder: U, fn: (value: T) => U): U;
                /**
                 * Applies a function to the contained value (if any), or computes with placeholderFn (if not).
                 * @param {() => U} placeholderFn the function to use
                 * @param {(value: T) => U} fn the function to apply
                 * @returns {U} the value
                 * @template U the type of the value
                */
                mapOrElse<U>(placeholderFn: () => U, fn: (value: T) => U): U;
                /**
                 * Transforms the Option<T> into a Result<T, E>, mapping Some(v) to Ok(v) and None to Err(err).
                 * @param {E} err the error to use
                 * @returns {Result<T, E>} the result
                 * @template E the type of the error
                */
                okOr<E>(err: E): Result<T, E>;
                /**
                 * Transforms the Option<T> into a Result<T, E>, mapping Some(v) to Ok(v) and None to Err(err()).
                 * @param {() => E} err the function to use
                 * @returns {Result<T, E>} the result
                 * @template E the type of the error
                */
                okOrElse<E>(err: () => E): Result<T, E>;
                /**
                 * Returns None if the option is None, otherwise returns optb.
                 * @param {Option<U>} optb the option to use
                 * @returns {Option<U>} the option
                 * @template U the type of the value
                */
                and<U>(optb: Option<U>): Option<U>;
                /**
                 * Returns None if the option is None, otherwise calls f with the wrapped value and returns the result.
                 * You can recognize it as flatMap.
                 * @param {(value: T) => Option<U>} fn the function to apply
                 * @returns {Option<U>} the option
                 * @template U the type of the value
                */
                andThen<U>(fn: (value: T) => Option<U>): Option<U>;
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
                filter(predicate: (value: T) => bool): Option<T>;
                /**
                 * Returns the option if it contains a value, otherwise returns optb.
                 * @param {Option<T>} optb the option to use
                 * @returns {Option<T>} the option
                */
                or(optb: Option<T>): Option<T>;
                /**
                 * Returns the option if it contains a value, otherwise calls f and returns the result.
                 * @param {() => Option<T>} fn the function to apply
                 * @returns {Option<T>} the option
                */
                orElse(fn: () => Option<T>): Option<T>;
                /**
                 * Returns Some if exactly one of self, optb is Some, otherwise returns None.
                 * @param {Option<T>} optb the option to use
                 * @returns {Option<T>} the option
                */
                xor(optb: Option<T>): Option<T>;
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
                export function Some<T>(value?: T): Option<T>;

                /**
                 * A none value
                 * @type {Option<any>} None
                */
                //deno-lint-ignore no-explicit-any
                export const None: Option<any>;
            }
        }
        export namespace prelude {
            export type  Option<T> = option.Option<T>;
            export const Option: typeof option.Option;
            export type Some<T> = typeof option.Option.Some<T>;
            export const Some: typeof option.Option.Some;
            export const None: typeof option.Option.None;
        }
    }
}
