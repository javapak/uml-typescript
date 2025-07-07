import { IConnectableElement } from './IConnectableElement';
import { IMultiplicityElement } from './IMultiplicityElement';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { IValueSpecification } from './IValueSpecification';
import { Parameter } from './Parameter';
import { ParameterDirectionKind } from './ParameterDirectionKind';
import { ParameterEffectKind } from './ParameterEffectKind';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Parameter
 */
export type PartialParameter = Partial<IParameter>;
export type RequiredParameter = Required<IParameter>;
export type ParameterKey = Pick<IParameter, 'name' | 'nameExpression'>;
export type ParameterMetadata = Pick<IParameter, 'ownedComment' | 'visibility'>;
export type ParameterSummary = Pick<IParameter, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ParameterUnion = IParameter | IConnectableElement | IMultiplicityElement;
export type ParameterFactory = () => Parameter;
export type ParameterValidator = (instance: IParameter) => ValidationResult;
