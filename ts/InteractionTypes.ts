import { IAction } from './IAction';
import { IBehavior } from './IBehavior';
import { IGate } from './IGate';
import { IInteraction } from './IInteraction';
import { IInteractionFragment } from './IInteractionFragment';
import { ILifeline } from './ILifeline';
import { IMessage } from './IMessage';
import { Interaction } from './Interaction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Interaction
 */
export type PartialInteraction = Partial<IInteraction>;
export type RequiredInteraction = Required<IInteraction>;
export type InteractionUnion = IInteraction | IBehavior | IInteractionFragment;
export type InteractionFactory = () => Interaction;
export type InteractionValidator = (instance: IInteraction) => ValidationResult;
