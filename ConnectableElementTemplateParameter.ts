/**
 * Implementation class for ConnectableElementTemplateParameter
 * 
 * @since UML 2.5
 * @package uml
 * @extends TemplateParameter
 */
import { IComment } from './IComment';
import { IConnectableElementTemplateParameter } from './IConnectableElementTemplateParameter';
import { IParameterableElement } from './IParameterableElement';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { ParameterableElement } from './ParameterableElement';
import { TemplateParameter } from './TemplateParameter';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class ConnectableElementTemplateParameter extends TemplateParameter implements IConnectableElementTemplateParameter {
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  /**
   * default
   * 
   * @type ParameterableElement
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public default?: string;

  /**
   * ownedDefault
   * 
   * @type ParameterableElement
   * @multiplicity [0..1]
   * @relationship containment
   */
  public ownedDefault?: IParameterableElement;

  /**
   * parameteredElement
   * 
   * @type ParameterableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite templateParameter
   */
  public parameteredElement!: string;

  /**
   * signature
   * 
   * @type TemplateSignature
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite ownedParameter
   */
  public signature!: string;

  /**
   * ownedParameteredElement
   * 
   * @type ParameterableElement
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite owningTemplateParameter
   */
  public ownedParameteredElement?: IParameterableElement;


  constructor(init?: Partial<IConnectableElementTemplateParameter>) {
    super(init);

  }
  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IConnectableElementTemplateParameter {
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
  clone(): ConnectableElementTemplateParameter {
    return new ConnectableElementTemplateParameter(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IConnectableElementTemplateParameter>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ConnectableElementTemplateParameter)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ConnectableElementTemplateParameter{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ConnectableElementTemplateParameter {
    const instance = new ConnectableElementTemplateParameter();

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
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IConnectableElementTemplateParameter): ValidationResult {
    if (instance instanceof ConnectableElementTemplateParameter) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ConnectableElementTemplateParameter(instance);
    return temp.validate();
  }
}
