export function setState<T, K extends keyof T>(state: T, newState: Pick<T, K>): T {
  return Object.assign({}, state, newState);
}