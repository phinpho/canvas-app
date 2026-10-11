import { supportLocalStorage } from "../utils/supportLocalStorage.js";

export class LocalStoreInstance {
  private _prefix: string | string[];
  private _separator: string;
  private _localStorage?: Storage;
  private _storeBase64: boolean;

  constructor(prefix: string | string[], separator: string = "::", storeBase64: boolean = false) {
    this._prefix = prefix;
    this._separator = separator;
    this._storeBase64 = storeBase64;

    if (supportLocalStorage()) {
      this._localStorage = globalThis.localStorage;
    }
  }

  private static _buildKey(
    prefix: string | string[],
    separator: string = "::",
    key: string | string[],
  ): string {
    const prefixStr = Array.isArray(prefix) ? prefix.join(separator) : prefix;
    const keyStr = Array.isArray(key) ? key.join(separator) : key;
    return `${prefixStr}${separator}${keyStr}`;
  }

  private _getItemRaw(key: string | string[]): string | undefined {
    if (!this._localStorage) return undefined;
    return (
      this._localStorage.getItem(
        LocalStoreInstance._buildKey(this._prefix, this._separator, key),
      ) ?? undefined
    );
  }

  public getItem<T>(key: string | string[], defaultValue?: T): T | undefined {
    const result = this._getItemRaw(key) ?? defaultValue;
    if (result === undefined) return undefined;
    try {
      return JSON.parse(this._storeBase64 ? atob(result as string) : (result as string)) as T;
    } catch {
      return result as T;
    }
  }

  public setItem(key: string | string[], value: unknown): void {
    if (!this._localStorage) return;
    const keyStr = LocalStoreInstance._buildKey(this._prefix, this._separator, key);

    if (value) {
      this._localStorage.setItem(
        keyStr,
        this._storeBase64 ? btoa(JSON.stringify(value)) : JSON.stringify(value),
      );
    } else {
      this._localStorage.removeItem(keyStr);
    }
  }

  public removeItem(key: string | string[]): void {
    if (!this._localStorage) return;
    const keyStr = LocalStoreInstance._buildKey(this._prefix, this._separator, key);
    this._localStorage.removeItem(keyStr);
  }

  public clear(): void {
    if (!this._localStorage) return;

    const keysToRemove: string[] = [];
    const prefix = LocalStoreInstance._buildKey(this._prefix, this._separator, []);

    for (let i = 0; i < this._localStorage.length; i++) {
      const key = this._localStorage.key(i);
      if (key?.startsWith(prefix)) {
        keysToRemove.push(key);
      }
    }

    for (const key of keysToRemove) {
      this._localStorage.removeItem(key);
    }
  }
}
