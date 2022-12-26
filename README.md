# capacitor-signal-strength

Capacitor Plugin to detect GSM Signal Strength

## Install

```bash
npm install capacitor-signal-strength
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`dbm()`](#dbm)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### dbm()

```typescript
dbm() => Promise<{ measuredDbm: number; }>
```

**Returns:** <code>Promise&lt;{ measuredDbm: number; }&gt;</code>

--------------------

</docgen-api>
