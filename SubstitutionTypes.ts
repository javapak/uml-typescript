import { IClassifier } from './IClassifier';
import { IRealization } from './IRealization';
import { ISubstitution } from './ISubstitution';
import { Substitution } from './Substitution';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Substitution
 */
export type PartialSubstitution = Partial<ISubstitution>;
export type RequiredSubstitution = Required<ISubstitution>;
export type SubstitutionKey = Pick<ISubstitution, 'name' | 'nameExpression'>;
export type SubstitutionMetadata = Pick<ISubstitution, 'ownedComment' | 'visibility'>;
export type SubstitutionSummary = Pick<ISubstitution, 'eAnnotations' | 'ownedComment' | 'name'>;
export type SubstitutionUnion = ISubstitution | IRealization;
export type SubstitutionFactory = () => Substitution;
export type SubstitutionValidator = (instance: ISubstitution) => ValidationResult;
