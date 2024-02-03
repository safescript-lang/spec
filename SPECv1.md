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
  - [Unwrap](#unwrap) - The use of `unwrap` for both `Option` and `Result`.
- [Syntax](#syntax) - The syntax of SafeScript.
- [Primitives](#primitives) - The primitive types of SafeScript.
  - [`bool`](#bool) - The boolean type.
  - [`num`](#num) - The number type.
  - [`str`](#str) - The string type.
  - [`char`](#char) - The character type.
  - [`void`](#void) - The void type.
- [Core](#core) - The standard library of SafeScript, also known as `core`.
  - [`core.prelude`](#coreprelude) - The re-exported types and functions.
  - [`Option`](#coreoption) - The `Option` type.
  - [`Result`](#coreresult) - The `Result` type.
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

#### Unwrap

[`unwrap`](#unwrap) for both [`Option`](#coreoption) and [`Result`](#coreresult).
The use of [`unwrap`](#unwrap) is discouraged in production code, or performance
critical code, as it can lead to crashes, and can be slow. However, it is extremely
useful for prototyping, testing and debugging. As it can be used to quickly
figure out what is wrong with the code and where.

### Syntax

<!-- TODO: Do Syntax in-depth -->

### Primitives

SafeScript does not have many primitives, as it is designed to be simple.
The primitives that it does have are: [`bool`](#bool), [`num`](#num), [`str`](#str),
[`char`](#char), and [`void`](#void). They are all denoted in lowercase for simplicity.

#### `bool`

The [`bool`](#bool) type is a primitive type that represents a boolean value.
It can be either `true` or `false`.

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
let x: Option<num> = Some(5);
let y: Result<num, str> = Ok(5);

let z = match (x, y) {
  (Some(x), Ok(y)) => x + y,
  _ => 0
};
```

#### `core.prelude`

The [`core.prelude`](#coreprelude) re-exports the most commonly used types and functions.
That includes:

- `core.prelude.Option` re-exports [`core.Option`](#coreoption)
- `core.prelude.Some` re-exports [`core.Option.Some`](#coreoption)
- `core.prelude.None` re-exports [`core.Option.None`](#coreoption)
- `core.prelude.Result` re-exports [`core.Result`](#coreresult)
- `core.prelude.Ok` re-exports [`core.Result.Ok`](#coreresult)
- `core.prelude.Err` re-exports [`core.Result.Err`](#coreresult)

#### `core.Option`

Signature:

```rust
enum Option<T> {
  Some(T),
  None
}
```

Methods:

- `isSome() -> bool` - Returns true if the option is a Some value.
- `isNone() -> bool` - Returns true if the option is a None value.
- `expect(msg: str) -> T` - Returns the inner value of the option.
  Panics with `msg` if the option is a None value.
- `unwrap() -> T` - Returns the inner value of the option.
  Panics if the option is a None value.
- `unwrapOr(backup: T) -> T` - Returns the inner value of the option.
  If the option is a None value, returns `backup`.
- `unwrapOrElse(f: fn() -> T) -> T` - Returns the inner value of the option.
  If the option is a None value, invokes `f` and returns the result of the invocation.
- `map<U>(f: fn(T) -> U) -> Option<U>` - If the option is a Some value,
  returns a Some value with the result of invoking `f` on the inner value.
  If the option is a None value, returns a None value.
- `mapOr<U>(backup: U, f: fn(T) -> U) -> U` - If the option is a Some value,
  returns the result of invoking `f` on the inner value.
  If the option is a None value, returns `backup`.
- `mapOrElse<U>(backup: fn() -> U, f: fn(T) -> U) -> U` - If the option is a Some value,
  returns the result of invoking `f` on the inner value.
  If the option is a None value, returns the result of invoking `backup`.
- `okOr<E>(err: E) -> Result<T, E>` - If the option is a Some value,
  returns a Ok value with the inner value.
  If the option is a None value, returns a Err value with `err`.
- `okOrElse<E>(f: fn() -> E) -> Result<T, E>` - If the option is a Some value,
  returns a Ok value with the inner value.
  If the option is a None value, returns a Err value with the result of invoking `f`.
- `and<U>(other: Option<U>) -> Option<U>` - If the option is a Some value, returns `other`.
  If the option is a None value, returns a None value.
- `andThen<U>(f: fn(T) -> Option<U>) -> Option<U>` - If the option is a Some value,
  returns the result of invoking `f` on the inner value.
  If the option is a None value, returns a None value.
- `or(other: Option<T>) -> Option<T>` - If the option is a Some value, returns the option.
  If the option is a None value, returns `other`.
- `orElse(f: fn() -> Option<T>) -> Option<T>` - If the option is a Some value, returns the option.
  If the option is a None value, returns the result of invoking `f`.
- `xor(other: Option<T>) -> Option<T>` - If the option is a Some value, returns a None value.
  If the option is a None value, returns `other`.
`filter(f: fn(T) -> bool) -> Option<T>` - If the option is a Some value,
  and invoking `f` on the inner value returns true, returns the option.
  Otherwise, returns a None value.

#### `core.Result`

Signature:

```rust
enum Result<T, E> {
  Ok(T),
  Err(E)
}
```

Methods:

- `isOk() -> bool` - Returns true if the result is a Ok value.

#### 
