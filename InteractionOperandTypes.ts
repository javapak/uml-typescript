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
export type InteractionOperandKey = Pick<IInteractionOperand, 'name' | 'nameExpression'>;
export type InteractionOperandMetadata = Pick<IInteractionOperand, 'ownedComment' | 'visibility' | 'ownedRule'>;
export type InteractionOperandSummary = Pick<IInteractionOperand, 'eAnnotations' | 'ownedComment' | 'name'>;
export type InteractionOperandUnion = IInteractionOperand | INamespace | IInteractionFragment;
export type InteractionOperandFactory = () => InteractionOperand;
export type InteractionOperandValidator = (instance: IInteractionOperand) => ValidationResult;
