/**
 * Interface for Usage
 * 
 * @since UML 2.5
 * @package uml
 * @extends Dependency
 */
import { IDependency } from './IDependency';

export interface IUsage extends IDependency {
}

// Type aliases for Usage
export type UsageInput = Partial<IUsage>;
export type UsageOutput = IUsage;
