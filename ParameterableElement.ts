/**
 * Implementation class for ParameterableElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Element
 */
import { Comment } from './Comment';
import { Element } from './Element';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { IParameterableElement } from './IParameterableElement';
import { ITemplateParameter } from './ITemplateParameter';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class ParameterableElement extends Element implements IParameterableElement {
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

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

  constructor(init?: Partial<IParameterableElement>) {
    super(init);
    this.owningTemplateParameter = init?.owningTemplateParameter ?? undefined;
    this.templateParameter = init?.templateParameter ?? undefined;
  }
  getOwningTemplateParameter(): ITemplateParameter | string | undefined {
    return this.owningTemplateParameter;
  }

  setOwningTemplateParameter(value: ITemplateParameter | string | undefined): void {
    this.owningTemplateParameter = value;
  }

  getTemplateParameter(): ITemplateParameter | string | undefined {
    return this.templateParameter;
  }

  setTemplateParameter(value: ITemplateParameter | string | undefined): void {
    this.templateParameter = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IParameterableElement {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.owningTemplateParameter !== undefined && { owningTemplateParameter: this.owningTemplateParameter }),
      ...(this.templateParameter !== undefined && { templateParameter: this.templateParameter }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.owningTemplateParameter !== undefined) {
      result.owningTemplateParameter = this.owningTemplateParameter;
    }
    if (this.templateParameter !== undefined) {
      result.templateParameter = this.templateParameter;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ParameterableElement {
    return new ParameterableElement(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IParameterableElement>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ParameterableElement)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ParameterableElement{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ParameterableElement {
    const instance = new ParameterableElement();

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }
    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    if (json.owningTemplateParameter !== undefined) {
      instance.owningTemplateParameter = json.owningTemplateParameter;
    }
    if (json.templateParameter !== undefined) {
      instance.templateParameter = json.templateParameter;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IParameterableElement): ValidationResult {
    if (instance instanceof ParameterableElement) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ParameterableElement(instance);
    return temp.validate();
  }
}
