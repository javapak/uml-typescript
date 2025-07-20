/**
 * Validation types for UML metamodel
 * These types are re-exported from index.ts
 */

export interface ValidationError {
  property: string;
  message: string;
  code: string;
  value?: any;
  path?: string;
  constraint?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings?: ValidationError[];
}

export type ValidatorFunction<T> = (instance: T) => ValidationResult;

export class ValidationHelper {
  static createError(property: string, message: string, code: string, value?: any): ValidationError {
    return { property, message, code, value };
  }

  static combineResults(...results: ValidationResult[]): ValidationResult {
    const allErrors = results.flatMap(r => r.errors);
    return { isValid: allErrors.length === 0, errors: allErrors };
  }
}
