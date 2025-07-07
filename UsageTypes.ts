import { IDependency } from './IDependency';
import { IUsage } from './IUsage';
import { Usage } from './Usage';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Usage
 */
export type PartialUsage = Partial<IUsage>;
export type RequiredUsage = Required<IUsage>;
export type UsageKey = Pick<IUsage, 'name' | 'nameExpression'>;
export type UsageMetadata = Pick<IUsage, 'ownedComment' | 'visibility'>;
export type UsageSummary = Pick<IUsage, 'eAnnotations' | 'ownedComment' | 'name'>;
export type UsageUnion = IUsage | IDependency;
export type UsageFactory = () => Usage;
export type UsageValidator = (instance: IUsage) => ValidationResult;
