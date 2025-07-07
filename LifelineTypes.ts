import { IConnectableElement } from './IConnectableElement';
import { IInteraction } from './IInteraction';
import { IInteractionFragment } from './IInteractionFragment';
import { ILifeline } from './ILifeline';
import { INamedElement } from './INamedElement';
import { IPartDecomposition } from './IPartDecomposition';
import { IValueSpecification } from './IValueSpecification';
import { Lifeline } from './Lifeline';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Lifeline
 */
export type PartialLifeline = Partial<ILifeline>;
export type RequiredLifeline = Required<ILifeline>;
export type LifelineKey = Pick<ILifeline, 'name' | 'nameExpression'>;
export type LifelineMetadata = Pick<ILifeline, 'ownedComment' | 'visibility'>;
export type LifelineSummary = Pick<ILifeline, 'eAnnotations' | 'ownedComment' | 'name'>;
export type LifelineUnion = ILifeline | INamedElement;
export type LifelineFactory = () => Lifeline;
export type LifelineValidator = (instance: ILifeline) => ValidationResult;
