import { ActivityContent } from './ActivityContent';
import { IActivityContent } from './IActivityContent';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ActivityContent
 */
export type PartialActivityContent = Partial<IActivityContent>;
export type RequiredActivityContent = Required<IActivityContent>;
export type ActivityContentFactory = () => ActivityContent;
export type ActivityContentValidator = (instance: IActivityContent) => ValidationResult;
