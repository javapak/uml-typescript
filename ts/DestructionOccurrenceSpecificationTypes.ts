import { DestructionOccurrenceSpecification } from './DestructionOccurrenceSpecification';
import { IDestructionOccurrenceSpecification } from './IDestructionOccurrenceSpecification';
import { IMessageOccurrenceSpecification } from './IMessageOccurrenceSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for DestructionOccurrenceSpecification
 */
export type PartialDestructionOccurrenceSpecification = Partial<IDestructionOccurrenceSpecification>;
export type RequiredDestructionOccurrenceSpecification = Required<IDestructionOccurrenceSpecification>;
export type DestructionOccurrenceSpecificationUnion = IDestructionOccurrenceSpecification | IMessageOccurrenceSpecification;
export type DestructionOccurrenceSpecificationFactory = () => DestructionOccurrenceSpecification;
export type DestructionOccurrenceSpecificationValidator = (instance: IDestructionOccurrenceSpecification) => ValidationResult;
