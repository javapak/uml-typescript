import { Comment } from './Comment';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Comment
 */
export type PartialComment = Partial<IComment>;
export type RequiredComment = Required<IComment>;
export type CommentMetadata = Pick<IComment, 'ownedComment'>;
export type CommentSummary = Pick<IComment, 'eAnnotations' | 'ownedComment' | 'annotatedElement'>;
export type CommentUnion = IComment | IElement;
export type CommentFactory = () => Comment;
export type CommentValidator = (instance: IComment) => ValidationResult;
