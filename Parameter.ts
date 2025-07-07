/**
 * Implementation class for Parameter
 * 
 * @since UML 2.5
 * @package uml
 * @extends ConnectableElement, MultiplicityElement
 */
import { Comment } from './Comment';
import { ConnectableElement } from './ConnectableElement';
import { IComment } from './IComment';
import { IConnectableElement } from './IConnectableElement';
import { IConnectorEnd } from './IConnectorEnd';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IMultiplicityElement } from './IMultiplicityElement';
import { INamespace } from './INamespace';
import { IOperation } from './IOperation';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { MultiplicityElement } from './MultiplicityElement';
import { ParameterDirectionKind } from './ParameterDirectionKind';
import { ParameterEffectKind } from './ParameterEffectKind';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class Parameter extends ConnectableElement implements IParameter {
  /**
   * defaultValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public defaultValue?: IValueSpecification = undefined;

  /**
   * direction
   * 
   * @type ParameterDirectionKind
   * @multiplicity [1..1]
   */
  public direction!: any;

  /**
   * effect
   * 
   * @type ParameterEffectKind
   * @multiplicity [0..1]
   */
  public effect?: any = undefined;

  /**
   * isException
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isException!: boolean;

  /**
   * isStream
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isStream!: boolean;

  /**
   * parameterSet
   * 
   * @type ParameterSet
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite parameter
   */
  public parameterSet: Set<IParameterSet | string> = new Set();

  // Inherited from ConnectableElement
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from ConnectableElement
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from ConnectableElement
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from ConnectableElement
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from ConnectableElement
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from ConnectableElement
  /**
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: IType | string = undefined;

  // Inherited from ConnectableElement
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from ConnectableElement
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from MultiplicityElement
  /**
   * isOrdered
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isOrdered!: boolean;

  // Inherited from MultiplicityElement
  /**
   * isUnique
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isUnique!: boolean;

  // Inherited from MultiplicityElement
  /**
   * lowerValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public lowerValue?: IValueSpecification = undefined;

  // Inherited from MultiplicityElement
  /**
   * upperValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public upperValue?: IValueSpecification = undefined;

  constructor(init?: Partial<IParameter>) {
    super(init);
    this.defaultValue = init?.defaultValue ?? undefined;
    this.direction = init?.direction!;
    this.effect = init?.effect ?? 'create';
    this.isException = init?.isException!;
    this.isStream = init?.isStream!;
    this.parameterSet = init?.parameterSet ?? new Set();
  }
  getDefaultValue(): IValueSpecification | undefined {
    return this.defaultValue;
  }

  setDefaultValue(value: IValueSpecification | undefined): void {
    this.defaultValue = value;
  }

  getDirection(): any {
    return this.direction;
  }

  setDirection(value: any): void {
    this.direction = value;
  }

  getEffect(): any | undefined {
    return this.effect;
  }

  setEffect(value: any | undefined): void {
    this.effect = value;
  }

  getIsException(): boolean {
    return this.isException;
  }

  setIsException(value: boolean): void {
    this.isException = value;
  }

  getIsStream(): boolean {
    return this.isStream;
  }

  setIsStream(value: boolean): void {
    this.isStream = value;
  }

  getParameterSet(): Set<IParameterSet | string> {
    return this.parameterSet;
  }

  setParameterSet(value: Set<IParameterSet | string>): void {
    this.parameterSet = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IParameter {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.defaultValue !== undefined && { defaultValue: this.defaultValue }),
      direction: this.direction,
      ...(this.effect !== undefined && { effect: this.effect }),
      isException: this.isException,
      isStream: this.isStream,
      parameterSet: this.parameterSet,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.defaultValue !== undefined) {
      result.defaultValue = this.defaultValue;
    }
    result.direction = this.direction;
    if (this.effect !== undefined) {
      result.effect = this.effect;
    }
    result.isException = this.isException;
    result.isStream = this.isStream;
    result.parameterSet = Array.from(this.parameterSet);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Parameter {
    return new Parameter(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IParameter>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Parameter)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Parameter{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Parameter {
    const instance = new Parameter();

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }
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
    instance.isOrdered = json.isOrdered;
    instance.isUnique = json.isUnique;
    if (json.lowerValue !== undefined) {
      instance.lowerValue = json.lowerValue;
    }
    if (json.upperValue !== undefined) {
      instance.upperValue = json.upperValue;
    }
    if (json.defaultValue !== undefined) {
      instance.defaultValue = json.defaultValue;
    }
    instance.direction = json.direction;
    if (json.effect !== undefined) {
      instance.effect = json.effect;
    }
    instance.isException = json.isException;
    instance.isStream = json.isStream;
    if (json.parameterSet && Array.isArray(json.parameterSet)) {
      instance.parameterSet = new Set(json.parameterSet);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.direction == null) {
      errors.push({
        property: 'direction',
        message: 'direction is required',
        code: 'REQUIRED'
      });
    }
    if (this.direction !== undefined) {
    }
    if (this.effect !== undefined) {
    }
    if (this.isException == null) {
      errors.push({
        property: 'isException',
        message: 'isException is required',
        code: 'REQUIRED'
      });
    }
    if (this.isException !== undefined) {
      if (typeof this.isException !== 'boolean') {
        errors.push({
          property: 'isException',
          message: 'isException must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isException
        });
      }
    }
    if (this.isStream == null) {
      errors.push({
        property: 'isStream',
        message: 'isStream is required',
        code: 'REQUIRED'
      });
    }
    if (this.isStream !== undefined) {
      if (typeof this.isStream !== 'boolean') {
        errors.push({
          property: 'isStream',
          message: 'isStream must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isStream
        });
      }
    }
    if (this.parameterSet) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IParameter): ValidationResult {
    if (instance instanceof Parameter) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Parameter(instance);
    return temp.validate();
  }
}
