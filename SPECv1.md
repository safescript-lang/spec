<div align="center">
    <h1>The SafeScript Language Specification v1</h1>
    <p>This is the first version of the SafeScript language specification.</p>
    <p>Creation Date: February 2, 2024 (INDEV)</p>
    <img id="logo" alt="logo" src="./logo.png" width="100" height="100">
</div>

## Table of Contents

- [Introduction](#introduction) - Introduction to the SafeScript language.
- [Safety](#safety) - The safety features of SafeScript.
  - [No Nulls / No Null Pointers / No Undefineds](#no-nulls--no-null-pointers--no-undefineds) - Absence of nulls, null pointers and undefineds.
  - [No Exceptions](#no-exceptions) - How SafeScript does not have exceptions.
  - [Unwraping](#unwrap) - The use of `unwrap` for both `Option` and `Result`.
- [Syntax](#syntax) - The syntax of SafeScript.
- [Primitives](#primitives) - The primitive types of SafeScript.
  - [`bool`](#bool) - The boolean type.
  - [`num`](#num) - The number type.
  - [`str`](#str) - The string type.
  - [`char`](#char) - The character type.
  - [`void`](#void) - The void type.
- [Core](#core) - The standard library of SafeScript, also known as `core`.
  - [`core.prelude`](#coreprelude) - The re-exported types and functions.
- [Implementation Notes](./ImplementationNotes.md) - Notes on the implementation of SafeScript.
- [FAQ](./FAQ.md) - Frequently asked questions about SafeScript.

### Introduction

SafeScript is a morphic language (yes, I did make that word up).
That means that it can be both compiled and interpreted (as well as embedded).
The language is designed to be safe, simple and fast.
It is a statically typed language with an algebraic data type system
(similar to Haskell). It is designed to be a scripting language,
that is easily embeddable in other applications.

The language is designed to be simple and easy to learn,
as it is based off of TypeScript.

The language is designed to be safe, thus it has no nulls, no undefineds,
no exceptions and no runtime crashes (assuming no use of [`unwrap`](#unwrap)s).

### Safety

SafeScript is designed to be safe, thus it has no nulls, no undefineds,
no exceptions and no runtime crashes (assuming no use of [`unwrap`](#unwrap)s).
This is achieved through the use of the [`Option`](#coreoption) and [`Result`](#coreresult)
types. The use of these types is encouraged, as it makes the code safer and
easier to reason about.

#### No Nulls / No Null Pointers / No Undefineds

Due to the fact that nulls are the source of many bugs,
SafeScript does not have nulls, undefineds or null pointers.
Instead, it uses the [`Option`](#coreoption) type to represent a value that may or
may not be present.

Example:

```typescript
let x: Option<num> = Some(5);
let y: Option<num> = None;
```

#### No Exceptions

SafeScript does not have exceptions,
but that does not mean that it does not have error handling.
Many other languages, have syntax for throwing and catching exceptions.
`try`, `catch`, `throw`, `raise`, `except`, `finally`, etc.
SafeScript does not have any of that.
Instead, SafeScript uses the [`Result`](#coreresult) type to represent a value that
may or may not be an error. Similar to rust, the [`Result`](#coreresult) type has
two variants: `Ok` and `Err`.

Example:

```typescript
let x: Result<num, str> = Ok(5);
let y: Result<num, str> = Err("An error occurred");
```

#### Unwraping

The use of the `unwrap` method is discouraged in production code, or performance
critical code, as it can lead to crashes, and can be slow. However, it is extremely
useful for prototyping, testing and debugging. As it can be used to quickly
figure out what is wrong with the code and where.

Essentially, `unwrap` is the only way to cause a runtime crash in SafeScript.
Thus, if you do not use `unwrap`, you will not have any runtime crashes.
Obviously, that is not always easy, but it is possible.

### Syntax

<!-- TODO: Do Syntax in-depth -->

### Primitives

SafeScript does not have many primitives, as it is designed to be simple.
The primitives that it does have are: [`bool`](#bool), [`num`](#num), [`str`](#str),
[`char`](#char), and [`void`](#void). They are all denoted in lowercase for simplicity.

#### `bool`

The [`bool`](#bool) type is a primitive type that represents a boolean value.
It can be either `true` or `false`.

Methods:

- `thenSome<T>(value: T) -> Option<T>` - If the boolean is `true`, returns `Some(value)`, otherwise returns `None`.
- `then<T>(f: fn() -> T) -> Option<T>` - If the boolean is `true`, returns `Some` containing the result of invoking `f`, otherwise returns `None`.

Trait Implementations:

- `core.fmt.Debug` - Formats the boolean as `"true"` or `"false"`.
- `core.fmt.Display` - Formats the boolean as `"true"` or `"false"`.
- `core.ops.Not` - Returns `true` if the boolean is `false`, and `false` if the boolean is `true`.
- `core.ops.BitAnd<Ouput = bool>` - Returns `true` if both booleans are `true`, and `false` otherwise.
- `core.ops.BitAndAssign` - Assigns `self` to `self.bitAnd(rhs)`.
- `core.ops.BitOr<Ouput = bool>` - Returns `true` if either of the booleans are `true`, and `false` otherwise.
- `core.ops.BitOrAssign` - Assigns `self` to `self.bitOr(rhs)`.
- `core.ops.BitXor<Ouput = bool>` - Returns `true` if the booleans are different, and `false` if they are the same.
- `core.ops.BitXorAssign` - Assigns `self` to `self.bitXor(rhs)`.

Implementation Notes:

- The `bool` type is to be implemented as a single byte, with the value `0` representing `false`,
and the value `1` representing `true`. This is to ensure that the `bool` type is as efficient as possible.
- Implementation is to have a look-up table attached to it.
That means that `thenSome` and `then` are to be implemented as inline functions.

#### `num`

The [`num`](#num) type is a primitive type that represents a number.
It can be an integer or a floating point number, with arbitrary precision.
(I will be using [Malachite](https://www.malachite.rs/))

#### `str`

The [`str`](#str) type is a primitive type that represents a sequence of characters.
It is a UTF-8 encoded string. (Although the implementation can vary,
it should **NOT** be a null-terminated string, for safety reasons.)

#### `char`

The [`char`](#char) type is a primitive type that represents a single character.
It is a [Unicode scalar value](https://www.unicode.org/glossary/#unicode_scalar_value).

#### `void`

The [`void`](#void) type is a primitive type that represents the absence of a value.
It is similar to the `void` type in TypeScript. Or the `unit` type in Rust.

### Core

The standard library of SafeScript is called `core`.
It contains the most basic types and functions.
By default, the `core` module is imported into every SafeScript file,
and can be accessed using the `core` namespace.

Example:

```typescript
let x: core.Option<num> = core.Option.Some(5);
```

However, the most commonly used types and functions are re-exported in the
[`core.prelude`](#coreprelude) module, and can be accessed without the `core` namespace.

Example:

```rs
let a1: Option<num> = Some(5);
let a2: Option<num> = None;
let b1: Result<num, str> = Ok(5);
let b2: Result<num, str> = Err("An error occurred");
let c: str = "Hello, World!";
let d: char = 'a';
let e: bool = true;
let f: void;
```

#### `core.prelude`

The `core.prelude` module contains the most commonly used types and functions.
It is re-exported in every SafeScript file, and can be accessed without the `core` namespace.
It contains:

- [`bool`](#bool)

#### `core.mem`

The `core.mem` module contains functions for finer control over memory (while still being safe).

It contains things like [`Vec`](#corememvec)

##### `core.mem.Error`

Signature:

```rust
enum Error {
    OutOfMemory,
    InvalidPointer,
    InvalidSize,
    InvalidAlignment,
    BitConversionError,
}
```

Variants:

###### `core.mem.Error.OutOfMemory`

Indicates that the system is out of memory.

###### `core.mem.Error.InvalidPointer`

Indicates that the pointer is invalid.

###### `core.mem.Error.InvalidSize`

Indicates that the size is invalid.

###### `core.mem.Error.InvalidAlignment`

Indicates that the alignment is invalid.

###### `core.mem.Error.BitConversionError`

Indicates that there was an error converting bits.

##### `core.mem.Result`

A type alias for `core::Result<T, Error>`.
Where `T` is the type of the value.
And `Error` is [`core.mem.Error`](#corememerror).

Signature:

```rust
type Result<T> = core.Result<T, Error>;
```

Generics:

- `T` - The type of the value.

##### `core.mem.Vec`
