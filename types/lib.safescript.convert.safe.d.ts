/// <reference no-default-lib="true"/>

/** ## THIS IS NOT PART OF THE STANDARD LIBRARY */
export interface __safescript_internals__ {
    /** SafeScript version */
    readonly __version__: 'v0.0.1-dev';
}

declare global {
    export namespace core {
        /**
         * The Typescript representation of SafeScript's `core.convert` module.
         * 
         * Since TypeScript rules forbid static methods in interfaces, we have to use a namespace instead.
         * Interfaces `From` and `TryFrom` are here only for documentation purposes.
         * Their actual implementation are going to be in namspace near the implementors of the types.
        */
        export namespace convert {
            /**
             * @TRAIT
             * @SIGNATURE
             * ```rs
             * pub trait From<T>: Sized {
             *     fn from(value: T) -> Self;
             * }
             * ```
            */
            //deno-lint-ignore no-empty-interface
            export interface From<T> { }
            // If A implements From<B>, then B automatically implements Into<A>
            /**
             * @TRAIT
             * @SIGNATURE
             * ```rs
             * pub trait TryFrom<T>: Sized {
             *     type Error;
             *     fn tryFrom(value: T) -> Result<Self, Self::Error>;
             * }
             * ```
            */
            //deno-lint-ignore no-empty-interface
            export interface TryFrom<T, Error> { }
            /**
             * @TRAIT
            */
            export interface Into<Posibilities> {
                into<T extends Posibilities>(this: owned<this>): T;
            }
            /**
             * @TRAIT
            */
            export interface TryInto<T, Error> {
                tryInto(this: owned<this>): Result<T, Error>;
            }
        }
    }
}
