import { IClass } from './IClass';
import { IImage } from './IImage';
import { IStereotype } from './IStereotype';
import { Stereotype } from './Stereotype';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Stereotype
 */
export type PartialStereotype = Partial<IStereotype>;
export type RequiredStereotype = Required<IStereotype>;
export type StereotypeKey = Pick<IStereotype, 'name' | 'nameExpression'>;
export type StereotypeMetadata = Pick<IStereotype, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedAttribute' | 'ownedConnector' | 'ownedBehavior' | 'ownedOperation' | 'ownedReception'>;
export type StereotypeSummary = Pick<IStereotype, 'eAnnotations' | 'ownedComment' | 'name'>;
export type StereotypeUnion = IStereotype | IClass;
export type StereotypeFactory = () => Stereotype;
export type StereotypeValidator = (instance: IStereotype) => ValidationResult;
