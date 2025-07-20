/**
 * Implementation class for ClassifierTemplateParameter
 * 
 * @since UML 2.5
 * @package uml
 * @extends TemplateParameter
 */
import { IClassifier } from './IClassifier';
import { IClassifierTemplateParameter } from './IClassifierTemplateParameter';
import { IComment } from './IComment';
import { IParameterableElement } from './IParameterableElement';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { ParameterableElement } from './ParameterableElement';
import { TemplateParameter } from './TemplateParameter';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class ClassifierTemplateParameter extends TemplateParameter implements IClassifierTemplateParameter {
  /**
   * allowSubstitutable
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public allowSubstitutable!: boolean;

  /**
   * constrainingClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public constrainingClassifier: Set<string> = new Set();

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


  constructor(init?: Partial<IClassifierTemplateParameter>) {
    super(init);

    this.allowSubstitutable = init?.allowSubstitutable ?? false;
    this.constrainingClassifier = init?.constrainingClassifier ? new Set(init.constrainingClassifier) : new Set();
  }
  getAllowSubstitutable(): boolean {
    return this.allowSubstitutable;
  }

  setAllowSubstitutable(value: boolean): void {
    this.allowSubstitutable = value;
  }

  getConstrainingClassifier(): Set<string> {
    return this.constrainingClassifier;
  }

  setConstrainingClassifier(value: Set<string>): void {
    this.constrainingClassifier = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IClassifierTemplateParameter {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      allowSubstitutable: this.allowSubstitutable,
      constrainingClassifier: this.constrainingClassifier,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.allowSubstitutable = this.allowSubstitutable;
    result.constrainingClassifier = Array.from(this.constrainingClassifier);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ClassifierTemplateParameter {
    return new ClassifierTemplateParameter(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IClassifierTemplateParameter>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ClassifierTemplateParameter)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ClassifierTemplateParameter{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ClassifierTemplateParameter {
    const instance = new ClassifierTemplateParameter();

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
    instance.allowSubstitutable = json.allowSubstitutable;
    if (json.constrainingClassifier && Array.isArray(json.constrainingClassifier)) {
      instance.constrainingClassifier = new Set(json.constrainingClassifier);
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
    if (this.allowSubstitutable == null) {
      errors.push({
        property: 'allowSubstitutable',
        message: 'allowSubstitutable is required',
        code: 'REQUIRED'
      });
    }
    if (this.allowSubstitutable !== undefined) {
      if (typeof this.allowSubstitutable !== 'boolean') {
        errors.push({
          property: 'allowSubstitutable',
          message: 'allowSubstitutable must be a boolean',
          code: 'TYPE_ERROR',
          value: this.allowSubstitutable
        });
      }
    }
    if (this.constrainingClassifier) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IClassifierTemplateParameter): ValidationResult {
    if (instance instanceof ClassifierTemplateParameter) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ClassifierTemplateParameter(instance);
    return temp.validate();
  }
}
