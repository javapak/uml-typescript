import { IActivityEdge } from './IActivityEdge';
import { IClassifier } from './IClassifier';
import { IConnector } from './IConnector';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IInformationFlow } from './IInformationFlow';
import { IMessage } from './IMessage';
import { INamedElement } from './INamedElement';
import { IPackageableElement } from './IPackageableElement';
import { IRelationship } from './IRelationship';
import { InformationFlow } from './InformationFlow';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InformationFlow
 */
export type PartialInformationFlow = Partial<IInformationFlow>;
export type RequiredInformationFlow = Required<IInformationFlow>;
export type InformationFlowKey = Pick<IInformationFlow, 'name' | 'nameExpression'>;
export type InformationFlowMetadata = Pick<IInformationFlow, 'ownedComment' | 'visibility'>;
export type InformationFlowSummary = Pick<IInformationFlow, 'eAnnotations' | 'ownedComment' | 'name'>;
export type InformationFlowUnion = IInformationFlow | IPackageableElement | IDirectedRelationship;
export type InformationFlowFactory = () => InformationFlow;
export type InformationFlowValidator = (instance: IInformationFlow) => ValidationResult;
