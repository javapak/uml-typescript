/**
 * Implementation class for ComponentRealization
 * 
 * @since UML 2.5
 * @package uml
 * @extends Realization
 */
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IComponent } from './IComponent';
import { IComponentRealization } from './IComponentRealization';
import { INamedElement } from './INamedElement';
import { IOpaqueExpression } from './IOpaqueExpression';
import { IRealization } from './IRealization';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { OpaqueExpression } from './OpaqueExpression';
import { Realization } from './Realization';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ComponentRealization extends Realization implements IComponentRealization {
  /**
   * realizingClassifier
   * 
   * @type Classifier
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public realizingClassifier: Set<string> = new Set();

  /**
   * abstraction
   * 
   * @type Component
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite realization
   */
  public abstraction?: string;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string;

  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression;

  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility: VisibilityKind | undefined = undefined;
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: string;

  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: string;

  /**
   * client
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public client: Set<string> = new Set();

  /**
   * supplier
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public supplier: Set<string> = new Set();

  /**
   * mapping
   * 
   * @type OpaqueExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public mapping?: IOpaqueExpression;


  constructor(init?: Partial<IComponentRealization>) {
    super(init);

    this.realizingClassifier = init?.realizingClassifier ? new Set(init.realizingClassifier) : new Set();
    this.abstraction = init?.abstraction;
  }
  getRealizingClassifier(): Set<string> {
    return this.realizingClassifier;
  }

  setRealizingClassifier(value: Set<string>): void {
    this.realizingClassifier = value;
  }

  getAbstraction(): string | undefined {
    return this.abstraction;
  }

  setAbstraction(value: string | undefined): void {
    this.abstraction = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IComponentRealization {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      realizingClassifier: this.realizingClassifier,
      ...(this.abstraction !== undefined && { abstraction: this.abstraction }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.realizingClassifier = Array.from(this.realizingClassifier);
    if (this.abstraction !== undefined) {
      result.abstraction = this.abstraction;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ComponentRealization {
    return new ComponentRealization(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IComponentRealization>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ComponentRealization)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ComponentRealization{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ComponentRealization {
    const instance = new ComponentRealization();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    if (json.name !== undefined) {
      instance.name = json.name;
    }
    if (json.nameExpression !== undefined) {
      instance.nameExpression = json.nameExpression;
    }
    if (json.visibility !== undefined) {
      instance.visibility = json.visibility;
    }
    if (json.owningTemplateParameter !== undefined) {
      instance.owningTemplateParameter = json.owningTemplateParameter;
    }
    if (json.templateParameter !== undefined) {
      instance.templateParameter = json.templateParameter;
    }
    if (json.client && Array.isArray(json.client)) {
      instance.client = new Set(json.client);
    }
    if (json.supplier && Array.isArray(json.supplier)) {
      instance.supplier = new Set(json.supplier);
    }
    if (json.mapping !== undefined) {
      instance.mapping = json.mapping;
    }
    if (json.realizingClassifier && Array.isArray(json.realizingClassifier)) {
      instance.realizingClassifier = new Set(json.realizingClassifier);
    }
    if (json.abstraction !== undefined) {
      instance.abstraction = json.abstraction;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.ownedComment) {
    }
    if (this.name !== undefined) {
      if (typeof this.name !== 'string') {
        errors.push({
          property: 'name',
          message: 'name must be a string',
          code: 'TYPE_ERROR',
          value: this.name
        });
      }
    }
    if (this.visibility !== undefined) {
    }
    if (this.client == null) {
      errors.push({
        property: 'client',
        message: 'client is required',
        code: 'REQUIRED'
      });
    }
    if (this.client) {
      if (Array.from(this.client).length < 1) {
        errors.push({
          property: 'client',
          message: 'client must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    if (this.supplier == null) {
      errors.push({
        property: 'supplier',
        message: 'supplier is required',
        code: 'REQUIRED'
      });
    }
    if (this.supplier) {
      if (Array.from(this.supplier).length < 1) {
        errors.push({
          property: 'supplier',
          message: 'supplier must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    if (this.realizingClassifier == null) {
      errors.push({
        property: 'realizingClassifier',
        message: 'realizingClassifier is required',
        code: 'REQUIRED'
      });
    }
    if (this.realizingClassifier) {
      if (Array.from(this.realizingClassifier).length < 1) {
        errors.push({
          property: 'realizingClassifier',
          message: 'realizingClassifier must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IComponentRealization): ValidationResult {
    if (instance instanceof ComponentRealization) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ComponentRealization(instance);
    return temp.validate();
  }
}
