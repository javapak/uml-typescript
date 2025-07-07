import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { IOutputPin } from './IOutputPin';
import { IProperty } from './IProperty';
import { IReadLinkObjectEndQualifierAction } from './IReadLinkObjectEndQualifierAction';
import { ReadLinkObjectEndQualifierAction } from './ReadLinkObjectEndQualifierAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ReadLinkObjectEndQualifierAction
 */
export type PartialReadLinkObjectEndQualifierAction = Partial<IReadLinkObjectEndQualifierAction>;
export type RequiredReadLinkObjectEndQualifierAction = Required<IReadLinkObjectEndQualifierAction>;
export type ReadLinkObjectEndQualifierActionKey = Pick<IReadLinkObjectEndQualifierAction, 'name' | 'nameExpression'>;
export type ReadLinkObjectEndQualifierActionMetadata = Pick<IReadLinkObjectEndQualifierAction, 'ownedComment' | 'visibility'>;
export type ReadLinkObjectEndQualifierActionSummary = Pick<IReadLinkObjectEndQualifierAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ReadLinkObjectEndQualifierActionUnion = IReadLinkObjectEndQualifierAction | IAction;
export type ReadLinkObjectEndQualifierActionFactory = () => ReadLinkObjectEndQualifierAction;
export type ReadLinkObjectEndQualifierActionValidator = (instance: IReadLinkObjectEndQualifierAction) => ValidationResult;
