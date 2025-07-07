/**
 * Implementation class for Reception
 * 
 * @since UML 2.5
 * @package uml
 * @extends BehavioralFeature
 */
import { BehavioralFeature } from './BehavioralFeature';
import { CallConcurrencyKind } from './CallConcurrencyKind';
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { ElementImport } from './ElementImport';
import { IBehavior } from './IBehavior';
import { IBehavioralFeature } from './IBehavioralFeature';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IElementImport } from './IElementImport';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IPackageImport } from './IPackageImport';
import { IPackageableElement } from './IPackageableElement';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { IReception } from './IReception';
import { IRedefinableElement } from './IRedefinableElement';
import { ISignal } from './ISignal';
import { IStringExpression } from './IStringExpression';
import { IType } from './IType';
import { PackageImport } from './PackageImport';
import { Parameter } from './Parameter';
import { ParameterSet } from './ParameterSet';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Reception extends BehavioralFeature implements IReception {
  /**
   * signal
   * 
   * @type Signal
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public signal!: ISignal | string;

  // Inherited from BehavioralFeature
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from BehavioralFeature
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from BehavioralFeature
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from BehavioralFeature
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from BehavioralFeature
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from BehavioralFeature
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  // Inherited from BehavioralFeature
  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  // Inherited from BehavioralFeature
  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  // Inherited from BehavioralFeature
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from BehavioralFeature
  /**
   * isStatic
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isStatic!: boolean;

  // Inherited from BehavioralFeature
  /**
   * concurrency
   * 
   * @type CallConcurrencyKind
   * @multiplicity [1..1]
   */
  public concurrency!: any;

  // Inherited from BehavioralFeature
  /**
   * isAbstract
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isAbstract!: boolean;

  // Inherited from BehavioralFeature
  /**
   * method
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite specification
   */
  public method: Set<IBehavior | string> = new Set();

  // Inherited from BehavioralFeature
  /**
   * ownedParameter
   * 
   * @type Parameter
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedParameter: IParameter[] = [];

  // Inherited from BehavioralFeature
  /**
   * ownedParameterSet
   * 
   * @type ParameterSet
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedParameterSet: Set<IParameterSet> = new Set();

  // Inherited from BehavioralFeature
  /**
   * raisedException
   * 
   * @type Type
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public raisedException: Set<IType | string> = new Set();

  constructor(init?: Partial<IReception>) {
    super(init);
    this.signal = init?.signal!;
  }
  getSignal(): ISignal | string {
    return this.signal;
  }

  setSignal(value: ISignal | string): void {
    this.signal = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IReception {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      signal: this.signal,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.signal = this.signal;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Reception {
    return new Reception(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IReception>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Reception)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Reception{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Reception {
    const instance = new Reception();

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
    if (json.ownedRule && Array.isArray(json.ownedRule)) {
      instance.ownedRule = new Set(json.ownedRule);
    }
    if (json.elementImport && Array.isArray(json.elementImport)) {
      instance.elementImport = new Set(json.elementImport);
    }
    if (json.packageImport && Array.isArray(json.packageImport)) {
      instance.packageImport = new Set(json.packageImport);
    }
    instance.isLeaf = json.isLeaf;
    instance.isStatic = json.isStatic;
    instance.concurrency = json.concurrency;
    instance.isAbstract = json.isAbstract;
    if (json.method && Array.isArray(json.method)) {
      instance.method = new Set(json.method);
    }
    if (json.ownedParameter && Array.isArray(json.ownedParameter)) {
      instance.ownedParameter = [...json.ownedParameter];
    }
    if (json.ownedParameterSet && Array.isArray(json.ownedParameterSet)) {
      instance.ownedParameterSet = new Set(json.ownedParameterSet);
    }
    if (json.raisedException && Array.isArray(json.raisedException)) {
      instance.raisedException = new Set(json.raisedException);
    }
    instance.signal = json.signal;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.signal == null) {
      errors.push({
        property: 'signal',
        message: 'signal is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IReception): ValidationResult {
    if (instance instanceof Reception) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Reception(instance);
    return temp.validate();
  }
}
