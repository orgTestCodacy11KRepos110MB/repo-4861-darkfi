Smart contract demo and template
================================

This crate is a reference DarkFI smart contract implementation. All
repositories implementing contracts should follow the same layout, as
this will allow easy deployments using the commandline utilities.

```
rustup target add wasm32-unknown-unknown
cd example/smart-contract/
make test
```