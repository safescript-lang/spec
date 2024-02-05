#![no_std]
#![allow(non_camel_case_types)]
extern crate alloc;

#[path = "lib.safescript.macros.safe.rs"]
mod macros;

pub mod sscore {
    pub mod result {
        pub enum Result<O, E> {
            Ok(O),
            Err(E),
        }
    }
    
    pub mod primitives {
        pub type bool = ::core::primitive::bool;
        #[derive(Clone, Copy, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
        pub struct num;
        #[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
        pub struct str(::alloc::string::String);
        impl core::ops::Add for str {
            type Output = str;
            fn add(self, other: str) -> str {
                str(self.0 + &other.0)
            }
        }
        impl core::ops::Add<char> for str {
            type Output = str;
            fn add(self, other: char) -> str {
                let mut s = self.0;
                s.push(other.0);
                str(s)
            }
        }
        #[derive(Clone, Copy, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
        pub struct char(::core::primitive::char);
        impl core::ops::Add for char {
            type Output = str;
            fn add(self, other: char) -> str {
                str(::alloc::format!("{}{}", self.0, other.0))
            }
        }
        pub type void = ();
    }
    
    
    
    #[doc(hidden)]
    pub mod prelude {
    }
}
