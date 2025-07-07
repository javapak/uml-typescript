import { IBehavior } from './IBehavior';
import { IConstraint } from './IConstraint';
import { INamespace } from './INamespace';
import { IRedefinableElement } from './IRedefinableElement';
import { IRegion } from './IRegion';
import { ITransition } from './ITransition';
import { ITrigger } from './ITrigger';
import { IVertex } from './IVertex';
import { Transition } from './Transition';
import { TransitionKind } from './TransitionKind';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Transition
 */
export type PartialTransition = Partial<ITransition>;
export type RequiredTransition = Required<ITransition>;
export type TransitionKey = Pick<ITransition, 'name' | 'nameExpression'>;
export type TransitionMetadata = Pick<ITransition, 'ownedComment' | 'visibility' | 'ownedRule'>;
export type TransitionSummary = Pick<ITransition, 'eAnnotations' | 'ownedComment' | 'name'>;
export type TransitionUnion = ITransition | INamespace | IRedefinableElement;
export type TransitionFactory = () => Transition;
export type TransitionValidator = (instance: ITransition) => ValidationResult;
