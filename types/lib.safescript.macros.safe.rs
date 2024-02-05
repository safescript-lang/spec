#[macro_export(local_inner_macros)]
macro_rules! ss {
    // Handle Function
    (
        $(#[$attr:meta])*
        function $name:ident($($arg:ident: $arg_ty:tt),*) {
            $($body:tt)*
        }
        $($rest:tt)*
    ) => (
        $crate::ss!(@BuildFunc
            $(#[$attr])* pub fn $name($($arg: $arg_ty),*) -> void {
                $($body)*
            }
        );
        $crate::ss!($($rest)*);
    );
    (
        $(#[$attr:meta])*
        export function $name:ident($($arg:ident: $arg_ty:tt),*) {
            $($body:tt)*
        }
        $($rest:tt)*
    ) => (
        $crate::ss!(@BuildFunc
            $(#[$attr])* pub fn $name($($arg: $arg_ty),*) -> void {
                $($body)*
            }
        );
        $crate::ss!($($rest)*);
    );

    // Internal Builders
    (@BuildFunc
        $(#[$attr:meta])*
        $vis:vis fn $name:ident($($arg:ident: $arg_ty:tt),*) -> $ret_ty:tt {
            $($body:tt)*
        }
    ) => (
        $(#[$attr])*
        $vis fn $name($($arg: $crate::ss!(@BuiltInPrimitive $arg_ty)),*) -> $crate::ss!(@BuiltInPrimitive $ret_ty) {
            $($body)*
        }
    );
    (@BuiltInPrimitive $name:ident) => (
        $crate::sscore::primitives::$name
    );
    () => ();
}
