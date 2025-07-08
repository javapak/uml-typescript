import { IGeneralOrdering } from './IGeneralOrdering';
import { IInteraction } from './IInteraction';
import { IInteractionFragment } from './IInteractionFragment';
import { IInteractionOperand } from './IInteractionOperand';
import { ILifeline } from './ILifeline';
import { INamedElement } from './INamedElement';
import { InteractionFragment } from './InteractionFragment';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InteractionFragment
 */
export type PartialInteractionFragment = Partial<IInteractionFragment>;
export type RequiredInteractionFragment = Required<IInteractionFragment>;
export type InteractionFragmentUnion = IInteractionFragment | INamedElement;
export type InteractionFragmentFactory = () => InteractionFragment;
export type InteractionFragmentValidator = (instance: IInteractionFragment) => ValidationResult;
