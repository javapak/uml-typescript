import { Class } from './Class';
import { IBehavioredClassifier } from './IBehavioredClassifier';
import { IClass } from './IClass';
import { IClassifier } from './IClassifier';
import { IEncapsulatedClassifier } from './IEncapsulatedClassifier';
import { IOperation } from './IOperation';
import { IReception } from './IReception';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Class
 */
export type PartialClass = Partial<IClass>;
export type RequiredClass = Required<IClass>;
export type ClassKey = Pick<IClass, 'name' | 'nameExpression'>;
export type ClassMetadata = Pick<IClass, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedAttribute' | 'ownedConnector' | 'ownedBehavior' | 'ownedOperation' | 'ownedReception'>;
export type ClassSummary = Pick<IClass, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ClassUnion = IClass | IEncapsulatedClassifier | IBehavioredClassifier;
export type ClassFactory = () => Class;
export type ClassValidator = (instance: IClass) => ValidationResult;
