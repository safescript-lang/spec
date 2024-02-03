#![no_std]
#![allow(non_camel_case_types)]
#[path = "util/macros.rs"]
mod macros;
extern crate alloc;

pub enum Result<O, E> {
    Ok(O),
    Err(E),
}
interface!(
    /// 
    Add(Rhs = Self) {
        type(Output)
        add(self, rhs: Rhs) -> Self::Output;
    }
);
class!(
    bool {
        /// Logical negation
        not() -> bool;
        /// Logical conjunction
        and(other: bool) -> bool;
    }
);
class!(
    num {
        /// Addition
        add(other: num) -> num;
        /// Subtraction
        sub(other: num) -> num;
        /// Multiplication
        mul(other: num) -> num;
        /// Division
        div(other: num) -> num;
        /// Remainder
        rem(other: num) -> num;
        /// Equality
        eq(other: num) -> bool;
        /// Less than
        lt(other: num) -> bool;
        /// Less than or equal
        le(other: num) -> bool;
        /// Greater than
        gt(other: num) -> bool;
        /// Greater than or equal
        ge(other: num) -> bool;
    }
);
class!(
    str {
        /// Concatenation
        add(other: str) -> str;
        /// Length
        len() -> num;
        /// Indexing
        index(i: num) -> str;
    }
);
