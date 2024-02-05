/// <reference no-default-lib="true"/>

/** ## THIS IS NOT PART OF THE STANDARD LIBRARY */
export interface __safescript_internals__ {
    /** SafeScript version */
    readonly __version__: 'v0.0.1-dev';
}

declare global {
    export namespace core {
        export namespace markers {
            export interface Tuple { }
            export interface Sized { }
            export interface Send { }
            export interface Sync { }
        }
    }
}
