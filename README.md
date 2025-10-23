# Attempt 1

Minimal reproduction repo for [Vitest Issue #8776](https://github.com/vitest-dev/vitest/issues/8776)

```
npm install
npm run test
```

|          | **Attempt 1** | Attempt 2 |
|-----|----------|-------------|
| run test files once each, in order |  ❌  |  ✅   |
| keep a state object across test files | ✅  | ❌   |
