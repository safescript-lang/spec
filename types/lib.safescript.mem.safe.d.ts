/// <reference no-default-lib="true"/>
/// <reference path="./lib.safescript.primitives.safe.d.ts" />
/// <reference path="./array.d.ts" />

/** ## THIS IS NOT PART OF THE STANDARD LIBRARY */
export interface __safescript_internals__ {
    /** SafeScript version */
    readonly __version__: 'v0.0.1-dev';
}

type NumConverter = 
    core.mem.u8 | core.mem.u16 | core.mem.u32 | core.mem.u64 | core.mem.usize |
    core.mem.i8 | core.mem.i16 | core.mem.i32 | core.mem.i64 | core.mem.isize |
    core.mem.f32 | core.mem.f64 | num;

declare global {
    export namespace core {
        export namespace mem {
            export namespace Error {
                export type  OutOfMemory = 'OutOfMemory';
                export const OutOfMemory: OutOfMemory;
                export type  InvalidPointer = 'InvalidPointer';
                export const InvalidPointer: InvalidPointer;
                export type  InvalidSize = 'InvalidSize';
                export const InvalidSize: InvalidSize;
                export type InvalidAlignment = 'InvalidAlignment';
                export const InvalidAlignment: InvalidAlignment;
                export type BitConversionError = 'BitConversionError';
                export const BitConversionError: BitConversionError;
            }
            /**
             * The Typescript representation of SafeScript's `core.mem.Error` enum.
             */
            export type Error = Error.OutOfMemory | Error.InvalidPointer |
                Error.InvalidSize | Error.InvalidAlignment | Error.BitConversionError;
            
            export type Result<T> = core.result.Result<T, core.mem.Error>;

            /** The 8-bit unsigned integer type. */
            export interface u8 extends __safescript_internals__.Primitive<'u8'>,
                ops.Add<u8, u8>, ops.AddAssign<u8>,
                ops.BitAnd<u8, u8>, ops.BitAndAssign<u8>,
                ops.BitOr<u8, u8>, ops.BitOrAssign<u8>,
                ops.BitXor<u8, u8>, ops.BitXorAssign<u8>,
                ops.Deref<u8>, ops.DerefMut<u8>,
                ops.Div<u8, u8>, ops.DivAssign<u8>,
                ops.Mul<u8, u8>, ops.MulAssign<u8>,
                ops.Neg<i8>,
                ops.Not<u8>,
                ops.Rem<u8, u8>, ops.RemAssign<u8>,
                ops.Shl<u8, u8>, ops.ShlAssign<u8>,
                ops.Shr<u8, u8>, ops.ShrAssign<u8>,
                ops.Sub<u8, u8>, ops.SubAssign<u8>,

                convert.TryFrom<num, Error>,
                convert.TryFrom<u16, Error>,
                convert.TryFrom<u32, Error>,
                convert.TryFrom<u64, Error>,
                convert.TryFrom<usize, Error>,
                convert.TryFrom<i8, Error>,
                convert.TryFrom<i16, Error>,
                convert.TryFrom<i32, Error>,
                convert.TryFrom<i64, Error>,
                convert.TryFrom<isize, Error>,
                convert.TryFrom<f32, Error>,
                convert.TryFrom<f64, Error>,
                convert.From<u8>,
                convert.From<char>,

                convert.Into<NumConverter>
            { }
            export namespace u8 {
                export function tryFrom(value: num): Result<u8>;
                export function tryFrom(value: u16): Result<u8>;
                export function tryFrom(value: u32): Result<u8>;
                export function tryFrom(value: u64): Result<u8>;
                export function tryFrom(value: usize): Result<u8>;
                export function tryFrom(value: i8): Result<u8>;
                export function tryFrom(value: i16): Result<u8>;
                export function tryFrom(value: i32): Result<u8>;
                export function tryFrom(value: i64): Result<u8>;
                export function tryFrom(value: isize): Result<u8>;
                export function tryFrom(value: f32): Result<u8>;
                export function tryFrom(value: f64): Result<u8>;
                export function from(value: u8): u8;
                export function from(value: char): u8;
            }
            export interface u16 extends __safescript_internals__.Primitive<'u16'>,
                ops.Add<u8 | u16, u16>, ops.AddAssign<u8 | u16>,
                ops.BitAnd<u8 | u16, u16>, ops.BitAndAssign<u8 | u16>,
                ops.BitOr<u8 | u16, u16>, ops.BitOrAssign<u8 | u16>,
                ops.BitXor<u8 | u16, u16>, ops.BitXorAssign<u16>,
                ops.Deref<u16>, ops.DerefMut<u16>,
                ops.Div<u8 | u16, u16>, ops.DivAssign<u8 | u16>,
                ops.Mul<u8 | u16, u16>, ops.MulAssign<u8 | u16>,
                ops.Neg<i16>,
                ops.Not<u16>,
                ops.Rem<u8 | u16, u16>, ops.RemAssign<u8 | u16>,
                ops.Shl<u8 | u16, u16>, ops.ShlAssign<u8 | u16>,
                ops.Shr<u8 | u16, u16>, ops.ShrAssign<u8 | u16>,
                ops.Sub<u8 | u16, u16>, ops.SubAssign<u8 | u16>
            { }
            export interface u32 extends __safescript_internals__.Primitive<'u32'>,
                ops.Add<u8 | u16 | u32, u32>, ops.AddAssign<u8 | u16 | u32>,
                ops.BitAnd<u8 | u16 | u32, u32>, ops.BitAndAssign<u8 | u16 | u32>,
                ops.BitOr<u8 | u16 | u32, u32>, ops.BitOrAssign<u8 | u16 | u32>,
                ops.BitXor<u8 | u16 | u32, u32>, ops.BitXorAssign<u32>,
                ops.Deref<u32>, ops.DerefMut<u32>,
                ops.Div<u8 | u16 | u32, u32>, ops.DivAssign<u8 | u16 | u32>,
                ops.Mul<u8 | u16 | u32, u32>, ops.MulAssign<u8 | u16 | u32>,
                ops.Neg<i32>,
                ops.Not<u32>,
                ops.Rem<u8 | u16 | u32, u32>, ops.RemAssign<u8 | u16 | u32>,
                ops.Shl<u8 | u16 | u32, u32>, ops.ShlAssign<u8 | u16 | u32>,
                ops.Shr<u8 | u16 | u32, u32>, ops.ShrAssign<u8 | u16 | u32>,
                ops.Sub<u8 | u16 | u32, u32>, ops.SubAssign<u8 | u16 | u32>
            { }
            export interface u64 extends __safescript_internals__.Primitive<'u64'>,
                ops.Add<u8 | u16 | u32 | u64, u64>, ops.AddAssign<u8 | u16 | u32 | u64>,
                ops.BitAnd<u8 | u16 | u32 | u64, u64>, ops.BitAndAssign<u8 | u16 | u32 | u64>,
                ops.BitOr<u8 | u16 | u32 | u64, u64>, ops.BitOrAssign<u8 | u16 | u32 | u64>,
                ops.BitXor<u8 | u16 | u32 | u64, u64>, ops.BitXorAssign<u64>,
                ops.Deref<u64>, ops.DerefMut<u64>,
                ops.Div<u8 | u16 | u32 | u64, u64>, ops.DivAssign<u8 | u16 | u32 | u64>,
                ops.Mul<u8 | u16 | u32 | u64, u64>, ops.MulAssign<u8 | u16 | u32 | u64>,
                ops.Neg<i64>,
                ops.Not<u64>,
                ops.Rem<u8 | u16 | u32 | u64, u64>, ops.RemAssign<u8 | u16 | u32 | u64>,
                ops.Shl<u8 | u16 | u32 | u64, u64>, ops.ShlAssign<u8 | u16 | u32 | u64>,
                ops.Shr<u8 | u16 | u32 | u64, u64>, ops.ShrAssign<u8 | u16 | u32 | u64>,
                ops.Sub<u8 | u16 | u32 | u64, u64>, ops.SubAssign<u8 | u16 | u32 | u64>
            { }
            export interface usize extends __safescript_internals__.Primitive<'usize'>,
                ops.Add<u8 | u16 | u32 | u64 | usize, usize>, ops.AddAssign<u8 | u16 | u32 | u64 | usize>,
                ops.BitAnd<u8 | u16 | u32 | u64 | usize, usize>, ops.BitAndAssign<u8 | u16 | u32 | u64 | usize>,
                ops.BitOr<u8 | u16 | u32 | u64 | usize, usize>, ops.BitOrAssign<u8 | u16 | u32 | u64 | usize>,
                ops.BitXor<u8 | u16 | u32 | u64 | usize, usize>, ops.BitXorAssign<usize>,
                ops.Deref<usize>, ops.DerefMut<usize>,
                ops.Div<u8 | u16 | u32 | u64 | usize, usize>, ops.DivAssign<u8 | u16 | u32 | u64 | usize>,
                ops.Mul<u8 | u16 | u32 | u64 | usize, usize>, ops.MulAssign<u8 | u16 | u32 | u64 | usize>,
                ops.Neg<isize>,
                ops.Not<usize>,
                ops.Rem<u8 | u16 | u32 | u64 | usize, usize>, ops.RemAssign<u8 | u16 | u32 | u64 | usize>,
                ops.Shl<u8 | u16 | u32 | u64 | usize, usize>, ops.ShlAssign<u8 | u16 | u32 | u64 | usize>,
                ops.Shr<u8 | u16 | u32 | u64 | usize, usize>, ops.ShrAssign<u8 | u16 | u32 | u64 | usize>,
                ops.Sub<u8 | u16 | u32 | u64 | usize, usize>, ops.SubAssign<u8 | u16 | u32 | u64 | usize>
            { }
            export interface i8 extends __safescript_internals__.Primitive<'i8'>,
                ops.Add<u8 | i8, i8>, ops.AddAssign<u8 | i8>,
                ops.BitAnd<u8 | i8, i8>, ops.BitAndAssign<u8 | i8>,
                ops.BitOr<u8 | i8, i8>, ops.BitOrAssign<u8 | i8>,
                ops.BitXor<u8 | i8, i8>, ops.BitXorAssign<i8>,
                ops.Deref<i8>, ops.DerefMut<i8>,
                ops.Div<u8 | i8, i8>, ops.DivAssign<u8 | i8>,
                ops.Mul<u8 | i8, i8>, ops.MulAssign<u8 | i8>,
                ops.Neg<i8>,
                ops.Not<i8>,
                ops.Rem<u8 | i8, i8>, ops.RemAssign<u8 | i8>,
                ops.Shl<u8 | i8, i8>, ops.ShlAssign<u8 | i8>,
                ops.Shr<u8 | i8, i8>, ops.ShrAssign<u8 | i8>,
                ops.Sub<u8 | i8, i8>, ops.SubAssign<u8 | i8>
            { }
            export interface i16 extends __safescript_internals__.Primitive<'i16'>,
                ops.Add<u8 | i8 | u16 | i16, i16>, ops.AddAssign<u8 | i8 | u16 | i16>,
                ops.BitAnd<u8 | i8 | u16 | i16, i16>, ops.BitAndAssign<u8 | i8 | u16 | i16>,
                ops.BitOr<u8 | i8 | u16 | i16, i16>, ops.BitOrAssign<u8 | i8 | u16 | i16>,
                ops.BitXor<u8 | i8 | u16 | i16, i16>, ops.BitXorAssign<i16>,
                ops.Deref<i16>, ops.DerefMut<i16>,
                ops.Div<u8 | i8 | u16 | i16, i16>, ops.DivAssign<u8 | i8 | u16 | i16>,
                ops.Mul<u8 | i8 | u16 | i16, i16>, ops.MulAssign<u8 | i8 | u16 | i16>,
                ops.Neg<i16>,
                ops.Not<i16>,
                ops.Rem<u8 | i8 | u16 | i16, i16>, ops.RemAssign<u8 | i8 | u16 | i16>,
                ops.Shl<u8 | i8 | u16 | i16, i16>, ops.ShlAssign<u8 | i8 | u16 | i16>,
                ops.Shr<u8 | i8 | u16 | i16, i16>, ops.ShrAssign<u8 | i8 | u16 | i16>,
                ops.Sub<u8 | i8 | u16 | i16, i16>, ops.SubAssign<u8 | i8 | u16 | i16>
            { }
            export interface i32 extends __safescript_internals__.Primitive<'i32'>,
                ops.Add<u8 | i8 | u16 | i16 | u32 | i32, i32>, ops.AddAssign<u8 | i8 | u16 | i16 | u32 | i32>,
                ops.BitAnd<u8 | i8 | u16 | i16 | u32 | i32, i32>, ops.BitAndAssign<u8 | i8 | u16 | i16 | u32 | i32>,
                ops.BitOr<u8 | i8 | u16 | i16 | u32 | i32, i32>, ops.BitOrAssign<u8 | i8 | u16 | i16 | u32 | i32>,
                ops.BitXor<u8 | i8 | u16 | i16 | u32 | i32, i32>, ops.BitXorAssign<i32>,
                ops.Deref<i32>, ops.DerefMut<i32>,
                ops.Div<u8 | i8 | u16 | i16 | u32 | i32, i32>, ops.DivAssign<u8 | i8 | u16 | i16 | u32 | i32>,
                ops.Mul<u8 | i8 | u16 | i16 | u32 | i32, i32>, ops.MulAssign<u8 | i8 | u16 | i16 | u32 | i32>,
                ops.Neg<i32>,
                ops.Not<i32>,
                ops.Rem<u8 | i8 | u16 | i16 | u32 | i32, i32>, ops.RemAssign<u8 | i8 | u16 | i16 | u32 | i32>,
                ops.Shl<u8 | i8 | u16 | i16 | u32 | i32, i32>, ops.ShlAssign<u8 | i8 | u16 | i16 | u32 | i32>,
                ops.Shr<u8 | i8 | u16 | i16 | u32 | i32, i32>, ops.ShrAssign<u8 | i8 | u16 | i16 | u32 | i32>,
                ops.Sub<u8 | i8 | u16 | i16 | u32 | i32, i32>, ops.SubAssign<u8 | i8 | u16 | i16 | u32 | i32>
            { }
            export interface i64 extends __safescript_internals__.Primitive<'i64'>,
                ops.Add<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64, i64>, ops.AddAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64>,
                ops.BitAnd<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64, i64>, ops.BitAndAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64>,
                ops.BitOr<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64, i64>, ops.BitOrAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64>,
                ops.BitXor<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64, i64>, ops.BitXorAssign<i64>,
                ops.Deref<i64>, ops.DerefMut<i64>,
                ops.Div<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64, i64>, ops.DivAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64>,
                ops.Mul<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64, i64>, ops.MulAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64>,
                ops.Neg<i64>,
                ops.Not<i64>,
                ops.Rem<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64, i64>, ops.RemAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64>,
                ops.Shl<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64, i64>, ops.ShlAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64>,
                ops.Shr<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64, i64>, ops.ShrAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64>,
                ops.Sub<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64, i64>, ops.SubAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64>
            { }
            export interface isize extends __safescript_internals__.Primitive<'isize'>,
                ops.Add<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize, isize>, ops.AddAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize>,
                ops.BitAnd<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize, isize>, ops.BitAndAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize>,
                ops.BitOr<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize, isize>, ops.BitOrAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize>,
                ops.BitXor<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize, isize>, ops.BitXorAssign<isize>,
                ops.Deref<isize>, ops.DerefMut<isize>,
                ops.Div<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize, isize>, ops.DivAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize>,
                ops.Mul<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize, isize>, ops.MulAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize>,
                ops.Neg<isize>,
                ops.Not<isize>,
                ops.Rem<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize, isize>, ops.RemAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize>,
                ops.Shl<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize, isize>, ops.ShlAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize>,
                ops.Shr<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize, isize>, ops.ShrAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize>,
                ops.Sub<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize, isize>, ops.SubAssign<u8 | i8 | u16 | i16 | u32 | i32 | u64 | i64 | usize | isize>
            { }
            export interface f32 extends __safescript_internals__.Primitive<'f32'> {
                // readonly __type__: 'f32';
            }
            export interface f64 extends __safescript_internals__.Primitive<'f64'> {
                // readonly __type__: 'f64';
            }
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
            }
        }
        export namespace prelude {
            export type  Vec<T> = mem.Vec<T>;
            export const Vec: typeof mem.Vec;
        }
    }
}
