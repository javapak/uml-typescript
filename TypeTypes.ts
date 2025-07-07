import { IPackageableElement } from './IPackageableElement';
import { IType } from './IType';
import { Type } from './Type';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Type
 */
export type PartialType = Partial<IType>;
export type RequiredType = Required<IType>;
export type TypeKey = Pick<IType, 'name' | 'nameExpression'>;
export type TypeMetadata = Pick<IType, 'ownedComment' | 'visibility'>;
export type TypeSummary = Pick<IType, 'eAnnotations' | 'ownedComment' | 'name'>;
export type TypeUnion = IType | IPackageableElement;
export type TypeFactory = () => Type;
export type TypeValidator = (instance: IType) => ValidationResult;
