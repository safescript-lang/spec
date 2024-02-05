/// <reference no-default-lib="true"/>

/** ## THIS IS NOT PART OF THE STANDARD LIBRARY */
export interface __safescript_internals__ {
    /** SafeScript version */
    readonly __version__: 'v0.0.1-dev';
}

declare global {
    export namespace core {
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
            export interface Fn<Args, Output> {
                call(args: Args): Output;
            }
        }
    }
}
