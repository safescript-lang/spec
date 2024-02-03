/// <reference no-default-lib="true"/>

export interface __safescript_internals__ {
    /** SafeScript version */
    readonly __version__: 'v0.0.1-dev';
}

export namespace __safescript_internals__ {
    //deno-lint-ignore no-explicit-any
    export type __Any__ = any;
    export const __version__: __safescript_internals__['__version__'];
}

type IntPrimitives = 
    'u8' | 'u16' | 'u32' | 'u64' | 'usize' |
    'i8' | 'i16' | 'i32' | 'i64' | 'isize';
type FloatPrimitives = 'f32' | 'f64';

type Primitives = 'bool' | 'num' | 'str' | 'char' |
    IntPrimitives | FloatPrimitives;

interface BasePrimitive<P extends Primitives> {
    readonly __type__: P;
}

declare global {
    /**
     * The SafeScript standard library.
     * 
     * Abides by the [specification](README.md)
     * 
     * This does not include any of the implementation details.
    */
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
                 * @type {Option<__safescript_internals__.__Any__>} None
                */
                export const None: Option<__safescript_internals__.__Any__>;
            }
        }
        export namespace result {
            /**
             * The Typescript representation of SafeScript's `Result` enum.
             * It is similar to Rust's `Result` enum.
             * 
             * It has two variants, `Ok` and `Err`.
             * 
             * `Ok` is used to represent a successful value, and `Err` is used to represent an error.
            */
            export interface Result<T, E> {
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
                 * Converts from Result<T, E> to Option<T> and discarding the error, if any.
                 * @returns {Option<T>} the option containing Some if the result is Ok, otherwise None
                */
                ok(): Option<T>;
                /**
                 * Converts from Result<T, E> to Option<E> and discarding the success value, if any.
                 * @returns {Option<E>} the option containing Some if the result is Err, otherwise None
                */
                err(): Option<E>;
                /**
                 * Maps a Result<T, E> to Result<U, E> by applying a function to a contained Ok value, leaving an Err value untouched.
                 *
                 * This function can be used to compose the results of two functions.
                 * @param {(t: T) => U} op the function to apply to the contained Ok value
                 * @returns {Result<U, E>} the result of the function
                 * @template U the type of the successful value
                */
                map<U>(op: (t: T) => U): Result<U, E>;
                /**
                 * Maps a Result<T, E> to U by applying a function to a contained Ok value, or a fallback function to a contained Err value.
                 *
                 * This function can be used to unpack a successful result while handling an error.
                 * @param {(e: E) => U} fallback the function to apply to the contained Err value
                 * @param {(t: T) => U} map the function to apply to the contained Ok value
                 * @returns {U} the result of the function
                 * @template U the type of the successful value
                */
                mapOrElse<U>(fallback: (e: E) => U, map: (t: T) => U): U;
                /**
                 * Maps a Result<T, E> to Result<T, F> by applying a function to a contained Err value, leaving an Ok value untouched.
                 *
                 * This function can be used to pass through a successful result while handling an error.
                 * @param {(e: E) => F} op the function to apply to the contained Err value
                 * @returns {Result<T, F>} the result of the function
                 * @template F the type of the error value
                */
                mapErr<F>(op: (e: E) => F): Result<T, F>;
                /**
                 * Returns res if the result is Ok, otherwise returns the Err value of self.
                 * @param {Result<T, E>} res the result to return if self is Ok
                 * @returns {Result<T, E>} the result
                 * @template U the type of the successful value
                */
                and<U>(res: Result<U, E>): Result<U, E>;
                /**
                 * Calls op if the result is Ok, otherwise returns the Err value of self.
                 *
                 * This function can be used for control flow based on Result values.
                 * @param {(t: T) => Result<U, E>} op the function to call if the result is Ok
                 * @returns {Result<U, E>} the result of the function
                 * @template U the type of the successful value
                */
                andThen<U>(op: (t: T) => Result<U, E>): Result<U, E>;
                /**
                 * Returns res if the result is Err, otherwise returns the Ok value of self.
                 * @param {Result<T, F>} res the result to return if self is Err
                 * @returns {Result<T, F>} the result
                 * @template F the type of the error value
                */
                or<F>(res: Result<T, F>): Result<T, F>;
                /**
                 * Calls op if the result is Err, otherwise returns the Ok value of self.
                 *
                 * This function can be used for control flow based on result values.
                 * @param {(e: E) => Result<T, F>} op the function to call if the result is Err
                 * @returns {Result<T, F>} the result of the function
                 * @template F the type of the error value
                */
                orElse<F>(op: (e: E) => Result<T, F>): Result<T, F>;
                /**
                 * Unwraps a result, yielding the content of an Ok. Else, it returns optb.
                 * @param {T} optb the value to return if the result is Err
                 * @returns {T} the value
                */
                unwrapOr(optb: T): T;
                /**
                 * Unwraps a result, yielding the content of an Ok. If the value is an Err then it calls op with its value.
                 * @param {(e: E) => T} op the function to call if the result is Err
                 * @returns {T} the value
                */
                unwrapOrElse(op: (e: E) => T): T;
                /**
                 * Unwraps a result, yielding the content of an Ok.
                 *
                 * Throws Error if the value is an Err, with a error message provided by the Err's value.
                 * @returns {T | never} the value
                */
                unwrap(): T | never;
                /**
                 * Unwraps a result, yielding the content of an Ok.
                 *
                 * Throws Error if the value is an Err, with the error message being the passed message.
                 * @param {str} msg the message to use
                 * @returns {T | never} the value
                */
                expect(msg: str): T | never;
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
                 * @returns {T | never} the value
                */
                get $(): T | never;
            }
            export namespace Result {
                /**
                 * A simple wrapper to create a new {@link Result}
                 * @param {T} value successful value
                 * @returns {Result<T,E>} the result
                */
                export function Ok<T, E>(value: T): Result<T, E>;
        
                /**
                 * A simple wrapper to create a new {@link Result}
                 * @param {E} err error value
                 * @returns {Result<T,E>} the result
                */
                export function Err<T, E>(err: E): Result<T, E>;
            }
        }
        export namespace alloc {
            /**
             * The Typescript representation of SafeScript's `Vec` struct.
             * 
             * It is similar to Rust's `Vec` struct.
             * 
             * It is a growable array type, represented as a pointer to a heap-allocated array.
             * @template T the type of the elements
            */
            export interface Vec<T> {
                push(value: T): void;
                pop(): Option<T>;
                remove(index: num): Option<T>;
            }
            export namespace Vec {
                export function init<T>(): Vec<T>;
                export function from<T>(arr: T[]): Vec<T>;
            }
        }
        export namespace ops {
            export interface Add<Rhs, Output> {
                add(rhs: Rhs): Output;
            }
            export interface AddAssign<Rhs> {
                addAssign(rhs: Rhs): void;
            }
            export interface BitAnd<Rhs, Output> {
                bitAnd(rhs: Rhs): Output;
            }
            export interface BitAndAssign<Rhs> {
                bitAndAssign(rhs: Rhs): void;
            }
            export interface BitOr<Rhs, Output> {
                bitOr(rhs: Rhs): Output;
            }
            export interface BitOrAssign<Rhs> {
                bitOrAssign(rhs: Rhs): void;
            }
            export interface BitXor<Rhs, Output> {
                bitXor(rhs: Rhs): Output;
            }
            export interface BitXorAssign<Rhs> {
                bitXorAssign(rhs: Rhs): void;
            }
            export interface Deref<Target> {
                deref(): Target;
            }
            export interface DerefMut<Target> {
                derefMut(): Target;
            }
            export interface Div<Rhs, Output> {
                div(rhs: Rhs): Output;
            }
            export interface DivAssign<Rhs> {
                divAssign(rhs: Rhs): void;
            }
            export interface Drop {
                drop(): void;
            }
            export interface Index<Idx, Output> {
                index(idx: Idx): Output;
            }
            export interface IndexMut<Idx, Output> {
                indexMut(idx: Idx): Output;
            }
            export interface Mul<Rhs, Output> {
                mul(rhs: Rhs): Output;
            }
            export interface MulAssign<Rhs> {
                mulAssign(rhs: Rhs): void;
            }
            export interface Neg<Output> {
                neg(): Output;
            }
            export interface Not<Output> {
                not(): Output;
            }
            export interface Rem<Rhs, Output> {
                rem(rhs: Rhs): Output;
            }
            export interface RemAssign<Rhs> {
                remAssign(rhs: Rhs): void;
            }
            export interface Shl<Rhs, Output> {
                shl(rhs: Rhs): Output;
            }
            export interface ShlAssign<Rhs> {
                shlAssign(rhs: Rhs): void;
            }
            export interface Shr<Rhs, Output> {
                shr(rhs: Rhs): Output;
            }
            export interface ShrAssign<Rhs> {
                shrAssign(rhs: Rhs): void;
            }
            export interface Sub<Rhs, Output> {
                sub(rhs: Rhs): Output;
            }
            export interface SubAssign<Rhs> {
                subAssign(rhs: Rhs): void;
            }
        }

        interface BaseIntPrimitive<
            P extends IntPrimitives,
            Self extends BaseIntPrimitive<P, Self>
        > extends BasePrimitive<P>,
            ops.Add<Self, Self>, ops.AddAssign<Self>,
            ops.BitAnd<Self, Self>, ops.BitAndAssign<Self>,
            ops.BitOr<Self, Self>, ops.BitOrAssign<Self>,
            ops.BitXor<Self, Self>, ops.BitXorAssign<Self>,
            ops.Div<Self, Self>, ops.DivAssign<Self>,
            ops.Mul<Self, Self>, ops.MulAssign<Self>,
            ops.Rem<Self, Self>, ops.RemAssign<Self>,
            ops.Shl<Self, Self>, ops.ShlAssign<Self>,
            ops.Shr<Self, Self>, ops.ShrAssign<Self>,
            ops.Sub<Self, Self>, ops.SubAssign<Self>,
            ops.Neg<Self>, ops.Not<Self>
        {

        }
    
        export interface bool extends BasePrimitive<'bool'> {
            // readonly __type__: 'bool';
        }
        export interface num extends BasePrimitive<'num'> {
            // readonly __type__: 'num';
        }
        export interface str extends BasePrimitive<'str'> {
            // readonly __type__: 'str';
        }
        export interface char extends BasePrimitive<'char'> {
            // readonly __type__: 'char';
        }
    
        export namespace mem {


            /** The 8-bit unsigned integer type. */
            export interface u8 extends BaseIntPrimitive<'u8', u8> {
            }
            export interface u16 extends BaseIntPrimitive<'u16', u16> {
                // readonly __type__: 'u16';
            }
            export interface u32 extends BaseIntPrimitive<'u32', u32> {
                // readonly __type__: 'u32';
            }
            export interface u64 extends BaseIntPrimitive<'u64', u64> {
                // readonly __type__: 'u64';
            }
            export interface usize extends BaseIntPrimitive<'usize', usize> {
                // readonly __type__: 'usize';
            }
            export interface i8 extends BaseIntPrimitive<'i8', i8> {
                // readonly __type__: 'i8';
            }
            export interface i16 extends BaseIntPrimitive<'i16', i16> {
                // readonly __type__: 'i16';
            }
            export interface i32 extends BaseIntPrimitive<'i32', i32> {
                // readonly __type__: 'i32';
            }
            export interface i64 extends BaseIntPrimitive<'i64', i64> {
                // readonly __type__: 'i64';
            }
            export interface isize extends BaseIntPrimitive<'isize', isize> {
                // readonly __type__: 'isize';
            }
            export interface f32 extends BasePrimitive<'f32'> {
                // readonly __type__: 'f32';
            }
            export interface f64 extends BasePrimitive<'f64'> {
                // readonly __type__: 'f64';
            }
        }
    }

    export type bool = core.bool;
    export type num = core.num;
    export type str = core.str;
    export type char = core.char;

    export type Vec<T> = core.Vec<T>;
    export const Vec: typeof core.Vec;

    export type Option<T> = core.option.Option<T>;
    export const Option: typeof core.option.Option;

    export type Result<T, E> = core.result.Result<T, E>;
    export const Result: typeof core.result.Result;

    /**
     * ## THIS IS NOT PART OF THE STANDARD LIBRARY
     * 
     * Transforms a js-native object to a SafeScript object.
     * 
     * @param i js input
     * @returns SafeScript output
    */
    function $<const P extends SSPrimitive>(i: JS2SS<P>): P;
}

type SSPrimitive = core.bool | core.num | core.str | core.char |
    core.mem.u8 | core.mem.u16 | core.mem.u32 | core.mem.u64 | core.mem.usize |
    core.mem.i8 | core.mem.i16 | core.mem.i32 | core.mem.i64 | core.mem.isize |
    core.mem.f32 | core.mem.f64;

type JS2SS<P extends SSPrimitive> =
    P extends core.bool ? boolean :
    P extends core.num ? number :
    P extends core.str ? string :
    P extends core.char ? string :
    P extends core.mem.u8 ? number :
    P extends core.mem.u16 ? number :
    P extends core.mem.u32 ? number :
    P extends core.mem.u64 ? number :
    P extends core.mem.usize ? number :
    P extends core.mem.i8 ? number :
    P extends core.mem.i16 ? number :
    P extends core.mem.i32 ? number :
    P extends core.mem.i64 ? number :
    P extends core.mem.isize ? number :
    P extends core.mem.f32 ? number :
    P extends core.mem.f64 ? number :
    never;
