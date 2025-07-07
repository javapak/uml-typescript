/**
 * Implementation class for Comment
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { Element } from './Element';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class Comment extends Element implements IComment {
  /**
   * annotatedElement
   * 
   * @type Element
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public annotatedElement: Set<IElement | string> = new Set();

  /**
   * body
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public body?: string = undefined;

  // Inherited from Element
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Element
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  constructor(init?: Partial<IComment>) {
    super(init);
    this.annotatedElement = init?.annotatedElement ?? new Set();
    this.body = init?.body ?? undefined;
  }
  getAnnotatedElement(): Set<IElement | string> {
    return this.annotatedElement;
  }

  setAnnotatedElement(value: Set<IElement | string>): void {
    this.annotatedElement = value;
  }

  getBody(): string | undefined {
    return this.body;
  }

  setBody(value: string | undefined): void {
    this.body = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IComment {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      annotatedElement: this.annotatedElement,
      ...(this.body !== undefined && { body: this.body }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.annotatedElement = Array.from(this.annotatedElement);
    if (this.body !== undefined) {
      result.body = this.body;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Comment {
    return new Comment(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IComment>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Comment)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Comment{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Comment {
    const instance = new Comment();

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }
    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    if (json.annotatedElement && Array.isArray(json.annotatedElement)) {
      instance.annotatedElement = new Set(json.annotatedElement);
    }
    if (json.body !== undefined) {
      instance.body = json.body;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.annotatedElement) {
    }
    if (this.body !== undefined) {
      if (typeof this.body !== 'string') {
        errors.push({
          property: 'body',
          message: 'body must be a string',
          code: 'TYPE_ERROR',
          value: this.body
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IComment): ValidationResult {
    if (instance instanceof Comment) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Comment(instance);
    return temp.validate();
  }
}
