import { IElement } from './IElement';
import { IInstanceSpecification } from './IInstanceSpecification';
import { ISlot } from './ISlot';
import { IStructuralFeature } from './IStructuralFeature';
import { IValueSpecification } from './IValueSpecification';
import { Slot } from './Slot';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Slot
 */
export type PartialSlot = Partial<ISlot>;
export type RequiredSlot = Required<ISlot>;
export type SlotUnion = ISlot | IElement;
export type SlotFactory = () => Slot;
export type SlotValidator = (instance: ISlot) => ValidationResult;
