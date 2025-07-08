/**
 * Implementation class for TemplateableElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Element
 */
import { Element } from './Element';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateSignature } from './ITemplateSignature';
import { ITemplateableElement } from './ITemplateableElement';
import { TemplateSignature } from './TemplateSignature';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class TemplateableElement extends Element implements ITemplateableElement {
  /**
   * templateBinding
   * 
   * @type TemplateBinding
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite boundElement
   */
  public templateBinding: Set<ITemplateBinding> = new Set();

  /**
   * ownedTemplateSignature
   * 
   * @type TemplateSignature
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite template
   */
  public ownedTemplateSignature?: ITemplateSignature;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();


  constructor(init?: Partial<ITemplateableElement>) {
    super(init);

    this.templateBinding = init?.templateBinding ? new Set(init.templateBinding) : new Set();
    this.ownedTemplateSignature = init?.ownedTemplateSignature;
  }
  getTemplateBinding(): Set<ITemplateBinding> {
    return this.templateBinding;
  }

  setTemplateBinding(value: Set<ITemplateBinding>): void {
    this.templateBinding = value;
  }

  getOwnedTemplateSignature(): ITemplateSignature | undefined {
    return this.ownedTemplateSignature;
  }

  setOwnedTemplateSignature(value: ITemplateSignature | undefined): void {
    this.ownedTemplateSignature = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ITemplateableElement {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      templateBinding: this.templateBinding,
      ...(this.ownedTemplateSignature !== undefined && { ownedTemplateSignature: this.ownedTemplateSignature }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.templateBinding = Array.from(this.templateBinding);
    if (this.ownedTemplateSignature !== undefined) {
      result.ownedTemplateSignature = this.ownedTemplateSignature;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): TemplateableElement {
    return new TemplateableElement(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ITemplateableElement>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof TemplateableElement)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `TemplateableElement{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): TemplateableElement {
    const instance = new TemplateableElement();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    if (json.templateBinding && Array.isArray(json.templateBinding)) {
      instance.templateBinding = new Set(json.templateBinding);
    }
    if (json.ownedTemplateSignature !== undefined) {
      instance.ownedTemplateSignature = json.ownedTemplateSignature;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.templateBinding) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ITemplateableElement): ValidationResult {
    if (instance instanceof TemplateableElement) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new TemplateableElement(instance);
    return temp.validate();
  }
}
