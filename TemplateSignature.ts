/**
 * Implementation class for TemplateSignature
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { Comment } from './Comment';
import { Element } from './Element';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { ITemplateableElement } from './ITemplateableElement';
import { TemplateParameter } from './TemplateParameter';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class TemplateSignature extends Element implements ITemplateSignature {
  /**
   * parameter
   * 
   * @type TemplateParameter
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public parameter: ITemplateParameter | string[] = [];

  /**
   * template
   * 
   * @type TemplateableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite ownedTemplateSignature
   */
  public template!: ITemplateableElement | string;

  /**
   * ownedParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite signature
   */
  public ownedParameter: ITemplateParameter[] = [];

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

  constructor(init?: Partial<ITemplateSignature>) {
    super(init);
    this.parameter = init?.parameter ?? [];
    this.template = init?.template!;
    this.ownedParameter = init?.ownedParameter ?? [];
  }
  getParameter(): ITemplateParameter | string[] {
    return this.parameter;
  }

  setParameter(value: ITemplateParameter | string[]): void {
    this.parameter = value;
  }

  getTemplate(): ITemplateableElement | string {
    return this.template;
  }

  setTemplate(value: ITemplateableElement | string): void {
    this.template = value;
  }

  getOwnedParameter(): ITemplateParameter[] {
    return this.ownedParameter;
  }

  setOwnedParameter(value: ITemplateParameter[]): void {
    this.ownedParameter = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ITemplateSignature {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      parameter: this.parameter,
      template: this.template,
      ownedParameter: this.ownedParameter,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.parameter = [...this.parameter];
    result.template = this.template;
    result.ownedParameter = [...this.ownedParameter];

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): TemplateSignature {
    return new TemplateSignature(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ITemplateSignature>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof TemplateSignature)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `TemplateSignature{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): TemplateSignature {
    const instance = new TemplateSignature();

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }
    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    if (json.parameter && Array.isArray(json.parameter)) {
      instance.parameter = [...json.parameter];
    }
    instance.template = json.template;
    if (json.ownedParameter && Array.isArray(json.ownedParameter)) {
      instance.ownedParameter = [...json.ownedParameter];
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.parameter == null) {
      errors.push({
        property: 'parameter',
        message: 'parameter is required',
        code: 'REQUIRED'
      });
    }
    if (this.parameter) {
      if (Array.from(this.parameter).length < 1) {
        errors.push({
          property: 'parameter',
          message: 'parameter must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    if (this.template == null) {
      errors.push({
        property: 'template',
        message: 'template is required',
        code: 'REQUIRED'
      });
    }
    if (this.ownedParameter) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ITemplateSignature): ValidationResult {
    if (instance instanceof TemplateSignature) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new TemplateSignature(instance);
    return temp.validate();
  }
}
