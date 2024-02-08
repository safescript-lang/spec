<div align="center">
    <h1>The SafeScript Language Specification v1</h1>
    <p>This is the first version of the SafeScript language specification.</p>
    <p>Creation Date: February 2, 2024 (INDEV)</p>
    <img id="logo" alt="logo" src="./logo.png" width="100" height="100">
</div>

# Table of Contents

- [Introduction](#introduction) - Introduction to the SafeScript language.
- [Safety](#safety) - The safety features of SafeScript.
  - [No Nulls / No Null Pointers / No Undefineds](#no-nulls--no-null-pointers--no-undefineds) - Absence of nulls, null pointers and undefineds.
  - [No Exceptions](#no-exceptions) - How SafeScript does not have exceptions.
  - [Unwraping](#unwraping) - The use of `unwrap` for both `Option` and `Result`.
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

## Introduction

SafeScript is a morphic language (yes, I did make that word up).
That means that it can be both compiled and interpreted (as well as embedded).
The language is designed to be safe, simple and fast.
It is a statically typed language with an algebraic data type system
(similar to Haskell). It is designed to be a scripting language,
that is easily embeddable in other applications.

The language is designed to be simple and easy to learn,
as it is based off of TypeScript.

The language is designed to be safe, thus it has no nulls, no undefineds,
no exceptions and no runtime crashes (assuming no use of [`unwrap`](#unwraping)s).

## Safety

SafeScript is designed to be safe, thus it has no nulls, no undefineds,
no exceptions and no runtime crashes (assuming no use of [`unwrap`](#unwraping)s).
This is achieved through the use of the [`Option`](#coreehoption) and [`Result`](#coreehresult)
types. The use of these types is encouraged, as it makes the code safer and
easier to reason about.

### No Nulls / No Null Pointers / No Undefineds

Due to the fact that nulls are the source of many bugs,
SafeScript does not have nulls, undefineds or null pointers.
Instead, it uses the [`Option`](#coreehoption) type to represent a value that may or
may not be present.

Example:

```typescript
let x: Option<num> = Some(5);
let y: Option<num> = None;
```

### No Exceptions

SafeScript does not have exceptions,
but that does not mean that it does not have error handling.
Many other languages, have syntax for throwing and catching exceptions.
`try`, `catch`, `throw`, `raise`, `except`, `finally`, etc.
SafeScript does not have any of that.
Instead, SafeScript uses the [`Result`](#coreehresult) type to represent a value that
may or may not be an error. Similar to rust, the [`Result`](#coreehresult) type has
two variants: `Ok` and `Err`.

Example:

```typescript
let x: Result<num, str> = Ok(5);
let y: Result<num, str> = Err("An error occurred");
```

### Unwraping

The use of the `unwrap` method is discouraged in production code, or performance
critical code, as it can lead to crashes, and can be slow. However, it is extremely
useful for prototyping, testing and debugging. As it can be used to quickly
figure out what is wrong with the code and where.

Essentially, `unwrap` is the only way to cause a runtime crash in SafeScript.
Thus, if you do not use `unwrap`, you will not have any runtime crashes.
Obviously, that is not always easy, but it is possible.

## Syntax

<!-- TODO: Do Syntax in-depth -->

## Primitives

SafeScript does not have many primitives, as it is designed to be simple.
The primitives that it does have are: [`bool`](#bool), [`num`](#num), [`str`](#str),
[`char`](#char), and [`void`](#void). They are all denoted in lowercase for simplicity.

### `bool`

The [`bool`](#bool) type is a primitive type that represents a boolean value.
It can be either `true` or `false`.

Methods:

- `thenSome<T>(self, value: T) -> Option<T>` - If the boolean is `true`, returns `Some(value)`, otherwise returns `None`.
- `then<T>(self, f: fn() -> T) -> Option<T>` - If the boolean is `true`, returns `Some` containing the result of invoking `f`, otherwise returns `None`.

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
- Implementation is to have no look-up table attached to it.
That means that `thenSome` and `then` are to be implemented as inline functions.

### `num`

The [`num`](#num) type is a primitive type that represents a number.
It can be an integer or a floating point number, with arbitrary precision.
(I will be using [Malachite](https://www.malachite.rs/))

### `str`

The [`str`](#str) type is a primitive type that represents a sequence of characters.
It is a UTF-8 encoded string. (Although the implementation can vary,
it should **NOT** be a null-terminated string, for safety reasons.)

### `char`

The [`char`](#char) type is a primitive type that represents a single character.
It is a [Unicode scalar value](https://www.unicode.org/glossary/#unicode_scalar_value).

### `void`

The [`void`](#void) type is a primitive type that represents the absence of a value.
It is similar to the `void` type in TypeScript. Or the `unit` type in Rust.

## Core

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

### `core.prelude`

The `core.prelude` module contains the most commonly used types and functions.
It is re-exported in every SafeScript file, and can be accessed without the `core` namespace.
It contains:

- [`bool`](#bool)

### `core.eh`

The `core.eh` contains the error handling types and functions.
Such as [`Result`](#coreehresult) and [`Option`](#coreehoption).
As well as the [`Error`](#corememerror) type.

#### `core.eh.Result`

The [`Result`](#coreehresult) type is a type that represents a value that may or may not be an error.
This is used all over the place in SafeScript. Especially in IO operations.
This is one of the ways that SafeScript can guarantee safety.

Signature:

```rust
enum Result<O, E> {
    Ok(O),
    Err(E),
}
```

Generics:

- `O` - The type of the Ok value.
- `E` - The type of the Err value.

Variants:

##### `core.eh.Result.Ok`

Represents a successful value.

##### `core.eh.Result.Err`

Represents an error value.

Methods:

- `isOk(&self) -> bool` - Returns true if the result is a Ok value.
- `isErr(&self) -> bool` - Returns true if the result is a Err value.
- `ok(self) -> Option<O>` - If the result is a Ok value, returns a Some value with the inner value.
  If the result is a Err value, returns a None value.
- `err(self) -> Option<E>` - If the result is a Ok value, returns a None value.
  If the result is a Err value, returns a Some value with the inner value.
- `expect(self, msg: str) -> O` - Returns the inner value of the result.
  Panics with `msg` if the result is a Err value.
- `expectErr(self, msg: str) -> E` - Returns the inner value of the result.
  Panics with `msg` if the result is a Ok value.
- `unwrap(self) -> O` - Returns the inner value of the result.
  Panics if the result is a Err value.
- `unwrapErr(self) -> E` - Returns the inner value of the result.
  Panics if the result is a Ok value.
- `unwrapOr(self, backup: O) -> O` - Returns the inner value of the result if it is a Ok value.
  If the result is a Err value, returns `backup`.
- `unwrapOrElse(self, f: fn(E) -> O) -> O` - Returns the inner value of the result if it is a Ok value.
  If the result is a Err value, invokes `f` with the inner value and returns the result of the invocation.
- `map<U>(self, f: fn(O) -> U) -> Result<U, E>` - If the result is a Ok value,
  returns a Ok value with the result of invoking `f` on the inner value.
  If the result is a Err value, returns a Err value with the inner value.
  Where `U` is the type of the new success value.
- `mapErr<F>(self, f: fn(E) -> F) -> Result<O, F>` - If the result is a Ok value,
  returns a Ok value with the inner value.
  If the result is a Err value, returns a Err value with the result of invoking `f` on the inner value.
  Where `F` is the type of the new error value.
- `mapOr<U>(self, backup: U, f: fn(O) -> U) -> U` - If the result is a Ok value,
  returns the result of invoking `f` on the inner value.
  If the result is a Err value, returns `backup`.
  Where `U` is the type of the new success value.
- `mapOrElse<U>(self, backup: fn(E) -> U, f: fn(O) -> U) -> U` - If the result is a Ok value,
  returns the result of invoking `f` on the inner value.
  If the result is a Err value, returns the result of invoking `backup` on the inner value.
  Where `U` is the type of the new success value.
- `and<U>(self, other: Result<U, E>) -> Result<U, E>` - If the result is a Ok value, returns `other`.
  If the result is a Err value, returns a Err value with the inner value.
  Where `U` is the type of the new success value.
- `andThen<U>(self, f: fn(O) -> Result<U, E>) -> Result<U, E>` - If the result is a Ok value,
  returns the result of invoking `f` on the inner value.
  If the result is a Err value, returns a Err value with the inner value.
  Where `U` is the type of the new success value.
- `or<F>(self, other: Result<O, F>) -> Result<O, F>` - If the result is a Ok value, returns the result.
  If the result is a Err value, returns `other`.
  Where `F` is the type of the new error value.
- `orElse<F>(self, f: fn(E) -> Result<O, F>) -> Result<O, F>` - If the result is a Ok value, returns the result.
  If the result is a Err value, returns the result of invoking `f` on the inner value.
  Where `F` is the type of the new error value.

#### `core.eh.Option`

The [`Option`](#coreehoption) type is a type that represents a value that may or may not be present.
It is supposed to be used in place of nulls, undefineds and null pointers.
This is one of the ways that SafeScript can guarantee safety.

Signature:

```rust
enum Option<T> {
    Some(T),
    None,
}
```

Generics:

- `T` - The type of the value.

Methods:

- `isSome(&self) -> bool` - Returns true if the option is a Some value.
- `isNone(&self) -> bool` - Returns true if the option is a None value.
- `expect(self, msg: str) -> T` - Returns the inner value of the option.
  Panics with `msg` if the option is a None value.
- `unwrap(self) -> T` - Returns the inner value of the option.
  Panics if the option is a None value.
- `unwrapOr(self, backup: T) -> T` - Returns the inner value of the option.
  If the option is a None value, returns `backup`.
- `unwrapOrElse(self, f: fn() -> T) -> T` - Returns the inner value of the option.
  If the option is a None value, invokes `f` and returns the result of the invocation.
- `map<U>(self, f: fn(T) -> U) -> Option<U>` - If the option is a Some value,
  returns a Some value with the result of invoking `f` on the inner value.
  If the option is a None value, returns a None value.
  Where `U` is the type of the new value.
- `mapOr<U>(self, backup: U, f: fn(T) -> U) -> U` - If the option is a Some value,
  returns the result of invoking `f` on the inner value.
  If the option is a None value, returns `backup`.
  Where `U` is the type of the new value.
- `mapOrElse<U>(self, backup: fn() -> U, f: fn(T) -> U) -> U` - If the option is a Some value,
  returns the result of invoking `f` on the inner value.
  If the option is a None value, returns the result of invoking `backup`.
  Where `U` is the type of the new value.
- `okOr<E>(self, err: E) -> Result<T, E>` - If the option is a Some value,
  returns a Ok value with the inner value.
  If the option is a None value, returns a Err value with `err`.
  Where `E` is the type of the error value.
- `okOrElse<E>(self, f: fn() -> E) -> Result<T, E>` - If the option is a Some value,
  returns a Ok value with the inner value.
  If the option is a None value, returns a Err value with the result of invoking `f`.
  Where `E` is the type of the error value.
- `and<U>(self, other: Option<U>) -> Option<U>` - If the option is a Some value, returns `other`.
  If the option is a None value, returns a None value.
  Where `U` is the type of the new value.
- `andThen<U>(self, f: fn(T) -> Option<U>) -> Option<U>` - If the option is a Some value,
  returns the result of invoking `f` on the inner value.
  If the option is a None value, returns a None value.
  Where `U` is the type of the new value.
- `or(self, other: Option<T>) -> Option<T>` - If the option is a Some value, returns the option.
  If the option is a None value, returns `other`.
- `orElse(self, f: fn() -> Option<T>) -> Option<T>` - If the option is a Some value, returns the option.
  If the option is a None value, returns the result of invoking `f`.
- `xor(self, other: Option<T>) -> Option<T>` - If the option is a Some value, returns a None value.
  If the option is a None value, returns `other`.
`filter(self, f: fn(T) -> bool) -> Option<T>` - If the option is a Some value,
  and invoking `f` on the inner value returns true, returns the option.
  Otherwise, returns a None value.

#### `core.eh.Error`

The [`Error`](#coreeherror) is a trait that all error types should implement.
Implementing this trait allows for better error handling and interoperability.
And allows for the use of short-circuiting early returns.

Example:

```rust
function read_file(path: str) -> Result<str, FileError> {
    // Code here...
}

function main() -> Result<(), dyn Error> {
    let contents = read_file("file.txt")?;
    // With the Error trait, we can use the ? operator to short-circuit early returns.
    // Otherwise, we would have to do this:
    // let contents = match read_file("file.txt") {
    //     Ok(contents) => contents,
    //     Err(err) => return Err(err),
    // };
}
```

Signature:

```rust
trait Error: fmt.Debug + fmt.Display {
    fn source(&self) -> Option<&(dyn Error + 'static)> {
        None
    }
}
```

Methods:

- `source(&self) -> Option<&(dyn Error + 'static)>` - Returns the underlying
cause of this error, if any.
(If the error is a wrapper around another error, this method should return the underlying error.)
Should default to `None`.

Trait Implementation Requirements:

- `core.fmt.Debug` - All implementors of `Error` must also implement `Debug`.
- `core.fmt.Display` - All implementors of `Error` must also implement `Display`.

#### `core.eh.panic`

The `panic` function is a function that is used to cause a runtime crash.
You should **NEVER** use this function.
For exception-like error handling, use the [`Result`](#coreehresult) type.

Signature:

```rust
fn panic(msg: str) -> ! { }
```

Parameters:

- `msg` - The message to display when the panic occurs.

### `core.mem`

The `core.mem` module contains functions for finer control over memory (while still being safe).

It contains things like [`Vec`](#corememvec)

#### `core.mem.Error`

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

##### `core.mem.Error.OutOfMemory`

Indicates that the system is out of memory.

##### `core.mem.Error.InvalidPointer`

Indicates that the pointer is invalid.

##### `core.mem.Error.InvalidSize`

Indicates that the size is invalid.

##### `core.mem.Error.InvalidAlignment`

Indicates that the alignment is invalid.

##### `core.mem.Error.BitConversionError`

Indicates that there was an error converting bits.

#### `core.mem.Result`

A type alias for `core::Result<T, Error>`.
Where `T` is the type of the value.
And `Error` is [`core.mem.Error`](#corememerror).

Signature:

```rust
type Result<T> = core.Result<T, Error>;
```

Generics:

- `T` - The type of the value.

#### `core.mem.Vec`
