/**
 * Implementation class for TemplateBinding
 * 
 * @since UML 2.5
 * @package uml
 * @extends DirectedRelationship
 */
import { DirectedRelationship } from './DirectedRelationship';
import { IComment } from './IComment';
import { IDirectedRelationship } from './IDirectedRelationship';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameterSubstitution } from './ITemplateParameterSubstitution';
import { ITemplateSignature } from './ITemplateSignature';
import { ITemplateableElement } from './ITemplateableElement';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class TemplateBinding extends DirectedRelationship implements ITemplateBinding {
  /**
   * parameterSubstitution
   * 
   * @type TemplateParameterSubstitution
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite templateBinding
   */
  public parameterSubstitution: Set<ITemplateParameterSubstitution> = new Set();

  /**
   * signature
   * 
   * @type TemplateSignature
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public signature!: string;

  /**
   * boundElement
   * 
   * @type TemplateableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite templateBinding
   */
  public boundElement!: string;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();


  constructor(init?: Partial<ITemplateBinding>) {
    super(init);

    this.parameterSubstitution = init?.parameterSubstitution ? new Set(init.parameterSubstitution) : new Set();
    this.signature = init?.signature ?? '';
    this.boundElement = init?.boundElement ?? '';
  }
  getParameterSubstitution(): Set<ITemplateParameterSubstitution> {
    return this.parameterSubstitution;
  }

  setParameterSubstitution(value: Set<ITemplateParameterSubstitution>): void {
    this.parameterSubstitution = value;
  }

  getSignature(): string {
    return this.signature;
  }

  setSignature(value: string): void {
    this.signature = value;
  }

  getBoundElement(): string {
    return this.boundElement;
  }

  setBoundElement(value: string): void {
    this.boundElement = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ITemplateBinding {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      parameterSubstitution: this.parameterSubstitution,
      signature: this.signature,
      boundElement: this.boundElement,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.parameterSubstitution = Array.from(this.parameterSubstitution);
    result.signature = this.signature;
    result.boundElement = this.boundElement;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): TemplateBinding {
    return new TemplateBinding(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ITemplateBinding>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof TemplateBinding)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `TemplateBinding{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): TemplateBinding {
    const instance = new TemplateBinding();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    if (json.parameterSubstitution && Array.isArray(json.parameterSubstitution)) {
      instance.parameterSubstitution = new Set(json.parameterSubstitution);
    }
    instance.signature = json.signature;
    instance.boundElement = json.boundElement;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.parameterSubstitution) {
    }
    if (this.signature == null) {
      errors.push({
        property: 'signature',
        message: 'signature is required',
        code: 'REQUIRED'
      });
    }
    if (this.boundElement == null) {
      errors.push({
        property: 'boundElement',
        message: 'boundElement is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ITemplateBinding): ValidationResult {
    if (instance instanceof TemplateBinding) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new TemplateBinding(instance);
    return temp.validate();
  }
}
