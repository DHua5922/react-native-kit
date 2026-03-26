export function callHandler<TArgs extends unknown[]>(
  handler: ((...args: TArgs) => void) | undefined,
  ...args: TArgs
) {
  handler?.(...args);
}
