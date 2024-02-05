/// <reference no-default-lib="true"/>

/** ## THIS IS NOT PART OF THE STANDARD LIBRARY */
export interface __safescript_internals__ {
    /** SafeScript version */
    readonly __version__: 'v0.0.1-dev';
}

declare global {
    /** ## THIS IS NOT PART OF THE STANDARD LIBRARY */
    export namespace __safescript_internals__ {
        /**
         * ## THIS IS NOT PART OF THE STANDARD LIBRARY
         * This is used to help TypeScript easier infer the type of the value.
        */
        type Primitives = 'bool' | 'num' | 'str' | 'char' | 'void' |
        'u8' | 'u16' | 'u32' | 'u64' | 'usize' |
        'i8' | 'i16' | 'i32' | 'i64' | 'isize' |
        'f32' | 'f64';

        /**
        * ## THIS IS NOT PART OF THE STANDARD LIBRARY
        * This is used to help TypeScript easier infer the type of the value.
        */
        interface Primitive<P extends Primitives> {
            /**
             * ## THIS IS NOT PART OF THE STANDARD LIBRARY
             * This is used to help TypeScript easier infer the type of the value.
            */
            readonly __type__: P;
        }
    }
    export namespace core {
        export namespace primitives {
            export interface bool extends __safescript_internals__.Primitive<'bool'>,
                ops.Not<bool>,
                ops.BitAnd<bool, bool>, ops.BitAndAssign<bool>,
                ops.BitOr<bool, bool>, ops.BitOrAssign<bool>,
                ops.BitXor<bool, bool>, ops.BitXorAssign<bool>
            {
                thenSome<T>(value: T): Option<T>;
                then<T>(f: () => T): Option<T>;
            }
            export interface num extends __safescript_internals__.Primitive<'num'>,
                ops.Add<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize, num>,
                ops.AddAssign<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize>,
                ops.BitAnd<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize, num>,
                ops.BitAndAssign<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize>,
                ops.BitOr<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize, num>,
                ops.BitOrAssign<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize>,
                ops.BitXor<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize, num>,
                ops.BitXorAssign<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize>,
                ops.Div<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize, num>,
                ops.DivAssign<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize>,
                ops.Mul<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize, num>,
                ops.MulAssign<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize>,
                ops.Neg<num>,
                ops.Not<num>,
                ops.Rem<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize, num>,
                ops.RemAssign<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize>,
                ops.Shl<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize, num>,
                ops.ShlAssign<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize>,
                ops.Shr<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize, num>,
                ops.ShrAssign<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize>,
                ops.Sub<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize, num>,
                ops.SubAssign<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize | mem.i8 | mem.i16 | mem.i32 | mem.i64 | mem.isize>,

                convert.From<mem.u8>, convert.From<mem.u16>, convert.From<mem.u32>, convert.From<mem.u64>, convert.From<mem.usize>,
                convert.From<mem.i8>, convert.From<mem.i16>, convert.From<mem.i32>, convert.From<mem.i64>, convert.From<mem.isize>,
                convert.From<mem.f32>, convert.From<mem.f64>
            { }
            export interface str extends __safescript_internals__.Primitive<'str'>,
                ops.Add<str | char, str>, ops.AddAssign<str | char>,
                ops.Index<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize, char>,
                ops.IndexMut<num | mem.u8 | mem.u16 | mem.u32 | mem.u64 | mem.usize, char>
            { }
            export interface char extends __safescript_internals__.Primitive<'char'>,
                ops.Add<char, str>
            { }
        }
        export namespace prelude {
            export type num = primitives.num;
            export type str = primitives.str;
            export type char = primitives.char;
            export type bool = primitives.bool;
        }
    }
}
