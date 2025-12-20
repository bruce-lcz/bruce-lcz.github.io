export * from './types';
export * from './config.en';
export * from './config.zh';

// Legacy export for backward compatibility during refactor, defaulting to English
// This allows the app to run if checks are strict, but we will replace usages with Context.
import { configEn } from './config.en';
export const config = configEn;
