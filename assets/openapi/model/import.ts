/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * Hello API Platform
 * OpenAPI spec version: 1.0.0
 */
import type { ImportCreatedAt } from './importCreatedAt';
import type { ImportFile } from './importFile';

export interface Import {
  createdAt?: ImportCreatedAt;
  file?: ImportFile;
  readonly id?: number;
  importLabel?: string;
}
