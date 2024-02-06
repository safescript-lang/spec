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
                add(this: this, rhs: Rhs): Output;
            }
            export interface AddAssign<Rhs> {
                addAssign(this: refmut<this>, rhs: Rhs): void;
            }
            export interface BitAnd<Rhs, Output> {
                bitAnd(this: this, rhs: Rhs): Output;
            }
            export interface BitAndAssign<Rhs> {
                bitAndAssign(this: refmut<this>, rhs: Rhs): void;
            }
            export interface BitOr<Rhs, Output> {
                bitOr(this: this, rhs: Rhs): Output;
            }
            export interface BitOrAssign<Rhs> {
                bitOrAssign(rhs: Rhs): void;
            }
            export interface BitXor<Rhs, Output> {
                bitXor(this: this, rhs: Rhs): Output;
            }
            export interface BitXorAssign<Rhs> {
                bitXorAssign(this: refmut<this>, rhs: Rhs): void;
            }
            export interface Deref<Target> {
                deref(this: ref<this>): ref<Target>;
            }
            export interface DerefMut<Target> {
                derefMut(this: refmut<this>): refmut<Target>;
            }
            export interface Div<Rhs, Output> {
                div(this: this, rhs: Rhs): Output;
            }
            export interface DivAssign<Rhs> {
                divAssign(rhs: Rhs): void;
            }
            export interface Index<Idx, Output> {
                index(this: ref<this>, idx: Idx): ref<Output>;
            }
            export interface IndexMut<Idx, Output> {
                indexMut(this: refmut<this>, idx: Idx): refmut<Output>;
            }
            export interface Mul<Rhs, Output> {
                mul(this: this, rhs: Rhs): Output;
            }
            export interface MulAssign<Rhs> {
                mulAssign(this: refmut<this>, rhs: Rhs): void;
            }
            export interface Neg<Output> {
                neg(this: this): Output;
            }
            export interface Not<Output> {
                not(this: this): Output;
            }
            export interface Rem<Rhs, Output> {
                rem(this: this, rhs: Rhs): Output;
            }
            export interface RemAssign<Rhs> {
                remAssign(this: refmut<this>, rhs: Rhs): void;
            }
            export interface Shl<Rhs, Output> {
                shl(this: this, rhs: Rhs): Output;
            }
            export interface ShlAssign<Rhs> {
                shlAssign(this: refmut<this>, rhs: Rhs): void;
            }
            export interface Shr<Rhs, Output> {
                shr(this: this, rhs: Rhs): Output;
            }
            export interface ShrAssign<Rhs> {
                shrAssign(this: refmut<this>, rhs: Rhs): void;
            }
            export interface Sub<Rhs, Output> {
                sub(this: this, rhs: Rhs): Output;
            }
            export interface SubAssign<Rhs> {
                subAssign(this: refmut<this>, rhs: Rhs): void;
            }
            export interface Fn<Args, Output> {
                call(this: ref<this>, args: Args): Output;
            }
        }
    }
}
