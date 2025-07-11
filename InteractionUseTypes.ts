import { IGate } from './IGate';
import { IInteraction } from './IInteraction';
import { IInteractionFragment } from './IInteractionFragment';
import { IInteractionUse } from './IInteractionUse';
import { IProperty } from './IProperty';
import { IValueSpecification } from './IValueSpecification';
import { InteractionUse } from './InteractionUse';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InteractionUse
 */
export type PartialInteractionUse = Partial<IInteractionUse>;
export type RequiredInteractionUse = Required<IInteractionUse>;
export type InteractionUseUnion = IInteractionUse | IInteractionFragment;
export type InteractionUseFactory = () => InteractionUse;
export type InteractionUseValidator = (instance: IInteractionUse) => ValidationResult;
