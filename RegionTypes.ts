import { INamespace } from './INamespace';
import { IRedefinableElement } from './IRedefinableElement';
import { IRegion } from './IRegion';
import { IState } from './IState';
import { IStateMachine } from './IStateMachine';
import { ITransition } from './ITransition';
import { IVertex } from './IVertex';
import { Region } from './Region';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Region
 */
export type PartialRegion = Partial<IRegion>;
export type RequiredRegion = Required<IRegion>;
export type RegionKey = Pick<IRegion, 'name' | 'nameExpression'>;
export type RegionMetadata = Pick<IRegion, 'ownedComment' | 'visibility' | 'ownedRule'>;
export type RegionSummary = Pick<IRegion, 'eAnnotations' | 'ownedComment' | 'name'>;
export type RegionUnion = IRegion | INamespace | IRedefinableElement;
export type RegionFactory = () => Region;
export type RegionValidator = (instance: IRegion) => ValidationResult;
