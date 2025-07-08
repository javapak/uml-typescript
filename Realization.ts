/**
 * Implementation class for Realization
 * 
 * @since UML 2.5
 * @package uml
 * @extends Abstraction
 */
import { Abstraction } from './Abstraction';
import { IAbstraction } from './IAbstraction';
import { IComment } from './IComment';
import { INamedElement } from './INamedElement';
import { IOpaqueExpression } from './IOpaqueExpression';
import { IRealization } from './IRealization';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { OpaqueExpression } from './OpaqueExpression';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Realization extends Abstraction implements IRealization {
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


  constructor(init?: Partial<IRealization>) {
    super(init);

  }
  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IRealization {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };


    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Realization {
    return new Realization(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IRealization>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Realization)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Realization{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Realization {
    const instance = new Realization();

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

  static validate(instance: IRealization): ValidationResult {
    if (instance instanceof Realization) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Realization(instance);
    return temp.validate();
  }
}
