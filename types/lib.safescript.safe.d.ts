/// <reference no-default-lib="true"/>
/// <reference path="./lib.safescript.convert.safe.d.ts" />
/// <reference path="./lib.safescript.fmt.safe.d.ts" />
/// <reference path="./lib.safescript.markers.safe.d.ts" />
/// <reference path="./lib.safescript.mem.safe.d.ts" />
/// <reference path="./lib.safescript.ops.safe.d.ts" />
/// <reference path="./lib.safescript.option.safe.d.ts" />
/// <reference path="./lib.safescript.primitives.safe.d.ts" />
/// <reference path="./lib.safescript.result.safe.d.ts" />

/** ## THIS IS NOT PART OF THE STANDARD LIBRARY */
export interface __safescript_internals__ {
    /** SafeScript version */
    readonly __version__: 'v0.0.1-dev';
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
        export namespace fmt {

        }
        /**
         * The prelude module. It re-exports the most used types and traits into the global scope.
         * @private
         * @internal
        */
        export namespace prelude {}
    }

    export type bool = core.prelude.bool;
    export type num = core.prelude.num;
    export type str = core.prelude.str;
    export type char = core.prelude.char;

    export type Vec<T> = core.prelude.Vec<T>;
    export const Vec: typeof core.prelude.Vec;

    export type  Option<T> = core.prelude.Option<T>;
    export const Option: typeof core.prelude.Option;
    export type Some<T> = typeof core.prelude.Option.Some<T>;
    export const Some: typeof core.prelude.Option.Some;
    export const None: typeof core.prelude.Option.None;

    export type  Result<O, E> = core.prelude.Result<O, E>;
    export const Result: typeof core.prelude.Result;
    export type  Ok<O, E> = typeof core.prelude.Result.Ok<O, E>;
    export const Ok: typeof core.prelude.Result.Ok;
    export type  Err<O, E> = typeof core.prelude.Result.Err<O, E>;
    export const Err: typeof core.prelude.Result.Err;


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

/**
 * ## THIS IS NOT PART OF THE STANDARD LIBRARY
 * This is to help {@link $} function to transform js-native object to SafeScript object.
*/
type SSPrimitive = bool | num | str | char |
    core.mem.u8 | core.mem.u16 | core.mem.u32 | core.mem.u64 | core.mem.usize |
    core.mem.i8 | core.mem.i16 | core.mem.i32 | core.mem.i64 | core.mem.isize |
    core.mem.f32 | core.mem.f64;

/**
 * ## THIS IS NOT PART OF THE STANDARD LIBRARY
 * This is to help {@link $} function to transform js-native object to SafeScript object.
*/
type JS2SS<P extends SSPrimitive> =
    P extends bool ? boolean :
    P extends num ? number :
    P extends str ? string :
    P extends char ? string :
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
