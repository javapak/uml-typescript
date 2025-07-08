/**
 * Implementation class for Image
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { Element } from './Element';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { IImage } from './IImage';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class Image extends Element implements IImage {
  /**
   * content
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public content?: string;

  /**
   * format
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public format?: string;

  /**
   * location
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public location?: string;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();


  constructor(init?: Partial<IImage>) {
    super(init);

    this.content = init?.content;
    this.format = init?.format;
    this.location = init?.location;
  }
  getContent(): string | undefined {
    return this.content;
  }

  setContent(value: string | undefined): void {
    this.content = value;
  }

  getFormat(): string | undefined {
    return this.format;
  }

  setFormat(value: string | undefined): void {
    this.format = value;
  }

  getLocation(): string | undefined {
    return this.location;
  }

  setLocation(value: string | undefined): void {
    this.location = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IImage {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.content !== undefined && { content: this.content }),
      ...(this.format !== undefined && { format: this.format }),
      ...(this.location !== undefined && { location: this.location }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.content !== undefined) {
      result.content = this.content;
    }
    if (this.format !== undefined) {
      result.format = this.format;
    }
    if (this.location !== undefined) {
      result.location = this.location;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Image {
    return new Image(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IImage>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Image)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Image{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Image {
    const instance = new Image();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    if (json.content !== undefined) {
      instance.content = json.content;
    }
    if (json.format !== undefined) {
      instance.format = json.format;
    }
    if (json.location !== undefined) {
      instance.location = json.location;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.content !== undefined) {
      if (typeof this.content !== 'string') {
        errors.push({
          property: 'content',
          message: 'content must be a string',
          code: 'TYPE_ERROR',
          value: this.content
        });
      }
    }
    if (this.format !== undefined) {
      if (typeof this.format !== 'string') {
        errors.push({
          property: 'format',
          message: 'format must be a string',
          code: 'TYPE_ERROR',
          value: this.format
        });
      }
    }
    if (this.location !== undefined) {
      if (typeof this.location !== 'string') {
        errors.push({
          property: 'location',
          message: 'location must be a string',
          code: 'TYPE_ERROR',
          value: this.location
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IImage): ValidationResult {
    if (instance instanceof Image) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Image(instance);
    return temp.validate();
  }
}
