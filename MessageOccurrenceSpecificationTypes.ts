import { IMessageEnd } from './IMessageEnd';
import { IMessageOccurrenceSpecification } from './IMessageOccurrenceSpecification';
import { IOccurrenceSpecification } from './IOccurrenceSpecification';
import { MessageOccurrenceSpecification } from './MessageOccurrenceSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for MessageOccurrenceSpecification
 */
export type PartialMessageOccurrenceSpecification = Partial<IMessageOccurrenceSpecification>;
export type RequiredMessageOccurrenceSpecification = Required<IMessageOccurrenceSpecification>;
export type MessageOccurrenceSpecificationKey = Pick<IMessageOccurrenceSpecification, 'name' | 'nameExpression'>;
export type MessageOccurrenceSpecificationMetadata = Pick<IMessageOccurrenceSpecification, 'ownedComment' | 'visibility'>;
export type MessageOccurrenceSpecificationSummary = Pick<IMessageOccurrenceSpecification, 'eAnnotations' | 'ownedComment' | 'name'>;
export type MessageOccurrenceSpecificationUnion = IMessageOccurrenceSpecification | IOccurrenceSpecification | IMessageEnd;
export type MessageOccurrenceSpecificationFactory = () => MessageOccurrenceSpecification;
export type MessageOccurrenceSpecificationValidator = (instance: IMessageOccurrenceSpecification) => ValidationResult;
