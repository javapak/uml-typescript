/**
 * Implementation class for ConnectableElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends TypedElement, ParameterableElement
 */
import { IComment } from './IComment';
import { IConnectableElement } from './IConnectableElement';
import { IParameterableElement } from './IParameterableElement';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IType } from './IType';
import { ITypedElement } from './ITypedElement';
import { ParameterableElement } from './ParameterableElement';
import { StringExpression } from './StringExpression';
import { TypedElement } from './TypedElement';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ConnectableElement extends TypedElement implements IConnectableElement {
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
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: string;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

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


  constructor(init?: Partial<IConnectableElement>) {
    super(init);

  }
  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IConnectableElement {
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
  clone(): ConnectableElement {
    return new ConnectableElement(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IConnectableElement>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ConnectableElement)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ConnectableElement{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ConnectableElement {
    const instance = new ConnectableElement();

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
    if (json.type !== undefined) {
      instance.type = json.type;
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

  static validate(instance: IConnectableElement): ValidationResult {
    if (instance instanceof ConnectableElement) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ConnectableElement(instance);
    return temp.validate();
  }
}
