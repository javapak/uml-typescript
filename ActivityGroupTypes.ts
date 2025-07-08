import { ActivityGroup } from './ActivityGroup';
import { IActivityContent } from './IActivityContent';
import { IActivityGroup } from './IActivityGroup';
import { INamedElement } from './INamedElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ActivityGroup
 */
export type PartialActivityGroup = Partial<IActivityGroup>;
export type RequiredActivityGroup = Required<IActivityGroup>;
export type ActivityGroupUnion = IActivityGroup | INamedElement | IActivityContent;
export type ActivityGroupFactory = () => ActivityGroup;
export type ActivityGroupValidator = (instance: IActivityGroup) => ValidationResult;
