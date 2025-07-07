import { IElement } from './IElement';
import { IImage } from './IImage';
import { Image } from './Image';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Image
 */
export type PartialImage = Partial<IImage>;
export type RequiredImage = Required<IImage>;
export type ImageMetadata = Pick<IImage, 'ownedComment'>;
export type ImageSummary = Pick<IImage, 'eAnnotations' | 'ownedComment' | 'content'>;
export type ImageUnion = IImage | IElement;
export type ImageFactory = () => Image;
export type ImageValidator = (instance: IImage) => ValidationResult;
