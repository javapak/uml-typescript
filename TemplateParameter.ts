/**
 * Implementation class for TemplateParameter
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { Comment } from './Comment';
import { Element } from './Element';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { IParameterableElement } from './IParameterableElement';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { ParameterableElement } from './ParameterableElement';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class TemplateParameter extends Element implements ITemplateParameter {
  /**
   * default
   * 
   * @type ParameterableElement
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public default?: IParameterableElement | string = undefined;

  /**
   * ownedDefault
   * 
   * @type ParameterableElement
   * @multiplicity [0..1]
   * @relationship containment
   */
  public ownedDefault?: IParameterableElement = undefined;

  /**
   * parameteredElement
   * 
   * @type ParameterableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite templateParameter
   */
  public parameteredElement!: IParameterableElement | string;

  /**
   * signature
   * 
   * @type TemplateSignature
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite ownedParameter
   */
  public signature!: ITemplateSignature | string;

  /**
   * ownedParameteredElement
   * 
   * @type ParameterableElement
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite owningTemplateParameter
   */
  public ownedParameteredElement?: IParameterableElement = undefined;

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

  constructor(init?: Partial<ITemplateParameter>) {
    super(init);
    this.default = init?.default ?? undefined;
    this.ownedDefault = init?.ownedDefault ?? undefined;
    this.parameteredElement = init?.parameteredElement!;
    this.signature = init?.signature!;
    this.ownedParameteredElement = init?.ownedParameteredElement ?? undefined;
  }
  getDefault(): IParameterableElement | string | undefined {
    return this.default;
  }

  setDefault(value: IParameterableElement | string | undefined): void {
    this.default = value;
  }

  getOwnedDefault(): IParameterableElement | undefined {
    return this.ownedDefault;
  }

  setOwnedDefault(value: IParameterableElement | undefined): void {
    this.ownedDefault = value;
  }

  getParameteredElement(): IParameterableElement | string {
    return this.parameteredElement;
  }

  setParameteredElement(value: IParameterableElement | string): void {
    this.parameteredElement = value;
  }

  getSignature(): ITemplateSignature | string {
    return this.signature;
  }

  setSignature(value: ITemplateSignature | string): void {
    this.signature = value;
  }

  getOwnedParameteredElement(): IParameterableElement | undefined {
    return this.ownedParameteredElement;
  }

  setOwnedParameteredElement(value: IParameterableElement | undefined): void {
    this.ownedParameteredElement = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ITemplateParameter {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.default !== undefined && { default: this.default }),
      ...(this.ownedDefault !== undefined && { ownedDefault: this.ownedDefault }),
      parameteredElement: this.parameteredElement,
      signature: this.signature,
      ...(this.ownedParameteredElement !== undefined && { ownedParameteredElement: this.ownedParameteredElement }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.default !== undefined) {
      result.default = this.default;
    }
    if (this.ownedDefault !== undefined) {
      result.ownedDefault = this.ownedDefault;
    }
    result.parameteredElement = this.parameteredElement;
    result.signature = this.signature;
    if (this.ownedParameteredElement !== undefined) {
      result.ownedParameteredElement = this.ownedParameteredElement;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): TemplateParameter {
    return new TemplateParameter(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ITemplateParameter>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof TemplateParameter)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `TemplateParameter{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): TemplateParameter {
    const instance = new TemplateParameter();

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }
    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    if (json.default !== undefined) {
      instance.default = json.default;
    }
    if (json.ownedDefault !== undefined) {
      instance.ownedDefault = json.ownedDefault;
    }
    instance.parameteredElement = json.parameteredElement;
    instance.signature = json.signature;
    if (json.ownedParameteredElement !== undefined) {
      instance.ownedParameteredElement = json.ownedParameteredElement;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.parameteredElement == null) {
      errors.push({
        property: 'parameteredElement',
        message: 'parameteredElement is required',
        code: 'REQUIRED'
      });
    }
    if (this.signature == null) {
      errors.push({
        property: 'signature',
        message: 'signature is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ITemplateParameter): ValidationResult {
    if (instance instanceof TemplateParameter) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new TemplateParameter(instance);
    return temp.validate();
  }
}
