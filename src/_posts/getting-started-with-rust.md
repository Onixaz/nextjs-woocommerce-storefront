---
title: Getting Started with Rust
author: Argentinux
date: 2020-07-22
---
To get started with Cargo, install Cargo (and Rust) and set up your first crate.


The easiest way to get Cargo is to install the current stable release of Rust by using `rustup`. Installing Rust using rustup will also install `cargo`.

```
$ curl https://sh.rustup.rs -sSf | sh
```

It will download a script, and start the installation. If everything goes well, you’ll see this appear:

```
Rust is installed now. Great!
```

## First Steps with Cargo

To start a new package with Cargo, use `cargo new`:

```
$ cargo new hello_world
```

Here’s what’s in src/main.rs:

```rust
fn main() {
  println!("Hello, World!")
}
```

We can build and run with the command `cargo run`:

```
$ cargo run
     Fresh hello_world v0.1.0 (file:///path/to/package/hello_world)
   Running `target/hello_world`
Hello, world!
```


