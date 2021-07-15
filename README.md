# npm-pack-json

Like running <kbd>npm pack --dry-run --json</kbd>, but I guess with the files sorted by name/path; if you're into that sort of thing.

## USAGE

```sh
npx pdehaan/npm-pack-json
```

### OUTPUT

```js
{
  id: 'npm-pack-json@1.0.0',
  name: 'npm-pack-json',
  version: '1.0.0',
  size: 612,
  unpackedSize: 880,
  shasum: '3e3e149d73d755f641e0c3cfda5e1bcb5ae33812',
  integrity: 'sha512-OEFN7/n2JmIu4YrEx8HIY1aJyQQz9UFhIp213/93LDuUwAQYJfidnFPGxwnlJnNqtUtOPXBW295X32kzWFSlkA==',
  filename: 'npm-pack-json-1.0.0.tgz',
  files: [
    { path: 'cli.js', size: 101, mode: 493 },
    { path: 'lib.js', size: 263, mode: 420 },
    { path: 'package.json', size: 516, mode: 420 }
  ],
  entryCount: 3,
  bundled: []
}
```
