/**
 * Implementation class for TemplateParameterSubstitution
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { Element } from './Element';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { IParameterableElement } from './IParameterableElement';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateParameterSubstitution } from './ITemplateParameterSubstitution';
import { ParameterableElement } from './ParameterableElement';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class TemplateParameterSubstitution extends Element implements ITemplateParameterSubstitution {
  /**
   * actual
   * 
   * @type ParameterableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public actual!: string;

  /**
   * formal
   * 
   * @type TemplateParameter
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public formal!: string;

  /**
   * ownedActual
   * 
   * @type ParameterableElement
   * @multiplicity [0..1]
   * @relationship containment
   */
  public ownedActual?: IParameterableElement;

  /**
   * templateBinding
   * 
   * @type TemplateBinding
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite parameterSubstitution
   */
  public templateBinding!: string;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();


  constructor(init?: Partial<ITemplateParameterSubstitution>) {
    super(init);

    this.actual = init?.actual ?? '';
    this.formal = init?.formal ?? '';
    this.ownedActual = init?.ownedActual;
    this.templateBinding = init?.templateBinding ?? '';
  }
  getActual(): string {
    return this.actual;
  }

  setActual(value: string): void {
    this.actual = value;
  }

  getFormal(): string {
    return this.formal;
  }

  setFormal(value: string): void {
    this.formal = value;
  }

  getOwnedActual(): IParameterableElement | undefined {
    return this.ownedActual;
  }

  setOwnedActual(value: IParameterableElement | undefined): void {
    this.ownedActual = value;
  }

  getTemplateBinding(): string {
    return this.templateBinding;
  }

  setTemplateBinding(value: string): void {
    this.templateBinding = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ITemplateParameterSubstitution {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      actual: this.actual,
      formal: this.formal,
      ...(this.ownedActual !== undefined && { ownedActual: this.ownedActual }),
      templateBinding: this.templateBinding,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.actual = this.actual;
    result.formal = this.formal;
    if (this.ownedActual !== undefined) {
      result.ownedActual = this.ownedActual;
    }
    result.templateBinding = this.templateBinding;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): TemplateParameterSubstitution {
    return new TemplateParameterSubstitution(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ITemplateParameterSubstitution>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof TemplateParameterSubstitution)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `TemplateParameterSubstitution{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): TemplateParameterSubstitution {
    const instance = new TemplateParameterSubstitution();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    instance.actual = json.actual;
    instance.formal = json.formal;
    if (json.ownedActual !== undefined) {
      instance.ownedActual = json.ownedActual;
    }
    instance.templateBinding = json.templateBinding;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.actual == null) {
      errors.push({
        property: 'actual',
        message: 'actual is required',
        code: 'REQUIRED'
      });
    }
    if (this.formal == null) {
      errors.push({
        property: 'formal',
        message: 'formal is required',
        code: 'REQUIRED'
      });
    }
    if (this.templateBinding == null) {
      errors.push({
        property: 'templateBinding',
        message: 'templateBinding is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ITemplateParameterSubstitution): ValidationResult {
    if (instance instanceof TemplateParameterSubstitution) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new TemplateParameterSubstitution(instance);
    return temp.validate();
  }
}
