/**
 * Implementation class for OperationTemplateParameter
 * 
 * @since UML 2.5
 * @package uml
 * @extends TemplateParameter
 */
import { IComment } from './IComment';
import { IOperationTemplateParameter } from './IOperationTemplateParameter';
import { IParameterableElement } from './IParameterableElement';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { ParameterableElement } from './ParameterableElement';
import { TemplateParameter } from './TemplateParameter';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class OperationTemplateParameter extends TemplateParameter implements IOperationTemplateParameter {
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


  constructor(init?: Partial<IOperationTemplateParameter>) {
    super(init);

  }
  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IOperationTemplateParameter {
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
  clone(): OperationTemplateParameter {
    return new OperationTemplateParameter(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IOperationTemplateParameter>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof OperationTemplateParameter)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `OperationTemplateParameter{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): OperationTemplateParameter {
    const instance = new OperationTemplateParameter();

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
    if (this.ownedComment) {
    }
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

  static validate(instance: IOperationTemplateParameter): ValidationResult {
    if (instance instanceof OperationTemplateParameter) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new OperationTemplateParameter(instance);
    return temp.validate();
  }
}
