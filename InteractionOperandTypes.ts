import { IInteractionConstraint } from './IInteractionConstraint';
import { IInteractionFragment } from './IInteractionFragment';
import { IInteractionOperand } from './IInteractionOperand';
import { INamespace } from './INamespace';
import { InteractionOperand } from './InteractionOperand';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InteractionOperand
 */
export type PartialInteractionOperand = Partial<IInteractionOperand>;
export type RequiredInteractionOperand = Required<IInteractionOperand>;
export type InteractionOperandUnion = IInteractionOperand | INamespace | IInteractionFragment;
export type InteractionOperandFactory = () => InteractionOperand;
export type InteractionOperandValidator = (instance: IInteractionOperand) => ValidationResult;
