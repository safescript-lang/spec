/// <reference no-default-lib="true"/>

/** ## THIS IS NOT PART OF THE STANDARD LIBRARY */
export interface __safescript_internals__ {
    /** SafeScript version */
    readonly __version__: 'v0.0.1-dev';
}

declare global {
    export namespace core {
        export namespace fmt {
            export interface Formatter {

            }
            export interface Display {
                dsp(this: ref<this>, f: refmut<Formatter>): void;
            }
            export interface Debug {
                dbg(this: ref<this>, f: refmut<Formatter>): void;
            }
            export function log(value: Display): void;
        }
    }
}
