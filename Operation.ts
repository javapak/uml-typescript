/**
 * Implementation class for Operation
 * 
 * @since UML 2.5
 * @package uml
 * @extends BehavioralFeature, ParameterableElement, TemplateableElement
 */
import { BehavioralFeature } from './BehavioralFeature';
import { CallConcurrencyKind } from './CallConcurrencyKind';
import { IBehavior } from './IBehavior';
import { IBehavioralFeature } from './IBehavioralFeature';
import { IClass } from './IClass';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDataType } from './IDataType';
import { IElementImport } from './IElementImport';
import { IInterface } from './IInterface';
import { IOperation } from './IOperation';
import { IPackageImport } from './IPackageImport';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { IParameterableElement } from './IParameterableElement';
import { IStringExpression } from './IStringExpression';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { ITemplateableElement } from './ITemplateableElement';
import { IType } from './IType';
import { ParameterableElement } from './ParameterableElement';
import { StringExpression } from './StringExpression';
import { TemplateSignature } from './TemplateSignature';
import { TemplateableElement } from './TemplateableElement';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Operation extends BehavioralFeature implements IOperation {
  /**
   * bodyCondition
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public bodyCondition?: string;

  /**
   * class
   * 
   * @type Class
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedOperation
   */
  public class?: string;

  /**
   * datatype
   * 
   * @type DataType
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedOperation
   */
  public datatype?: string;

  /**
   * interface
   * 
   * @type Interface
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedOperation
   */
  public interface?: string;

  /**
   * isQuery
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isQuery!: boolean;

  /**
   * postcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public postcondition: Set<string> = new Set();

  /**
   * precondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public precondition: Set<string> = new Set();

  /**
   * redefinedOperation
   * 
   * @type Operation
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedOperation: Set<string> = new Set();

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
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  /**
   * isStatic
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isStatic!: boolean;

  /**
   * concurrency
   * 
   * @type CallConcurrencyKind
   * @multiplicity [1..1]
   */
  public concurrency: CallConcurrencyKind = CallConcurrencyKind.sequential;
  /**
   * isAbstract
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isAbstract!: boolean;

  /**
   * method
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite specification
   */
  public method: Set<string> = new Set();

  /**
   * ownedParameter
   * 
   * @type Parameter
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedParameter: IParameter[] = [];

  /**
   * ownedParameterSet
   * 
   * @type ParameterSet
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedParameterSet: Set<IParameterSet> = new Set();

  /**
   * raisedException
   * 
   * @type Type
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public raisedException: Set<string> = new Set();

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
   * templateBinding
   * 
   * @type TemplateBinding
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite boundElement
   */
  public templateBinding: Set<ITemplateBinding> = new Set();

  /**
   * ownedTemplateSignature
   * 
   * @type TemplateSignature
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite template
   */
  public ownedTemplateSignature?: ITemplateSignature;


  constructor(init?: Partial<IOperation>) {
    super(init);

    this.bodyCondition = init?.bodyCondition;
    this.class = init?.class;
    this.datatype = init?.datatype;
    this.interface = init?.interface;
    this.isQuery = init?.isQuery ?? false;
    this.postcondition = init?.postcondition ? new Set(init.postcondition) : new Set();
    this.precondition = init?.precondition ? new Set(init.precondition) : new Set();
    this.redefinedOperation = init?.redefinedOperation ? new Set(init.redefinedOperation) : new Set();
  }
  getBodyCondition(): string | undefined {
    return this.bodyCondition;
  }

  setBodyCondition(value: string | undefined): void {
    this.bodyCondition = value;
  }

  getClass(): string | undefined {
    return this.class;
  }

  setClass(value: string | undefined): void {
    this.class = value;
  }

  getDatatype(): string | undefined {
    return this.datatype;
  }

  setDatatype(value: string | undefined): void {
    this.datatype = value;
  }

  getInterface(): string | undefined {
    return this.interface;
  }

  setInterface(value: string | undefined): void {
    this.interface = value;
  }

  getIsQuery(): boolean {
    return this.isQuery;
  }

  setIsQuery(value: boolean): void {
    this.isQuery = value;
  }

  getPostcondition(): Set<string> {
    return this.postcondition;
  }

  setPostcondition(value: Set<string>): void {
    this.postcondition = value;
  }

  getPrecondition(): Set<string> {
    return this.precondition;
  }

  setPrecondition(value: Set<string>): void {
    this.precondition = value;
  }

  getRedefinedOperation(): Set<string> {
    return this.redefinedOperation;
  }

  setRedefinedOperation(value: Set<string>): void {
    this.redefinedOperation = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IOperation {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.bodyCondition !== undefined && { bodyCondition: this.bodyCondition }),
      ...(this.class !== undefined && { class: this.class }),
      ...(this.datatype !== undefined && { datatype: this.datatype }),
      ...(this.interface !== undefined && { interface: this.interface }),
      isQuery: this.isQuery,
      postcondition: this.postcondition,
      precondition: this.precondition,
      redefinedOperation: this.redefinedOperation,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.bodyCondition !== undefined) {
      result.bodyCondition = this.bodyCondition;
    }
    if (this.class !== undefined) {
      result.class = this.class;
    }
    if (this.datatype !== undefined) {
      result.datatype = this.datatype;
    }
    if (this.interface !== undefined) {
      result.interface = this.interface;
    }
    result.isQuery = this.isQuery;
    result.postcondition = Array.from(this.postcondition);
    result.precondition = Array.from(this.precondition);
    result.redefinedOperation = Array.from(this.redefinedOperation);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Operation {
    return new Operation(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IOperation>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Operation)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Operation{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Operation {
    const instance = new Operation();

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
    if (json.owningTemplateParameter !== undefined) {
      instance.owningTemplateParameter = json.owningTemplateParameter;
    }
    if (json.templateParameter !== undefined) {
      instance.templateParameter = json.templateParameter;
    }
    if (json.templateBinding && Array.isArray(json.templateBinding)) {
      instance.templateBinding = new Set(json.templateBinding);
    }
    if (json.ownedTemplateSignature !== undefined) {
      instance.ownedTemplateSignature = json.ownedTemplateSignature;
    }
    if (json.bodyCondition !== undefined) {
      instance.bodyCondition = json.bodyCondition;
    }
    if (json.class !== undefined) {
      instance.class = json.class;
    }
    if (json.datatype !== undefined) {
      instance.datatype = json.datatype;
    }
    if (json.interface !== undefined) {
      instance.interface = json.interface;
    }
    instance.isQuery = json.isQuery;
    if (json.postcondition && Array.isArray(json.postcondition)) {
      instance.postcondition = new Set(json.postcondition);
    }
    if (json.precondition && Array.isArray(json.precondition)) {
      instance.precondition = new Set(json.precondition);
    }
    if (json.redefinedOperation && Array.isArray(json.redefinedOperation)) {
      instance.redefinedOperation = new Set(json.redefinedOperation);
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
    if (this.ownedRule) {
    }
    if (this.elementImport) {
    }
    if (this.packageImport) {
    }
    if (this.isLeaf == null) {
      errors.push({
        property: 'isLeaf',
        message: 'isLeaf is required',
        code: 'REQUIRED'
      });
    }
    if (this.isLeaf !== undefined) {
      if (typeof this.isLeaf !== 'boolean') {
        errors.push({
          property: 'isLeaf',
          message: 'isLeaf must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isLeaf
        });
      }
    }
    if (this.isStatic == null) {
      errors.push({
        property: 'isStatic',
        message: 'isStatic is required',
        code: 'REQUIRED'
      });
    }
    if (this.isStatic !== undefined) {
      if (typeof this.isStatic !== 'boolean') {
        errors.push({
          property: 'isStatic',
          message: 'isStatic must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isStatic
        });
      }
    }
    if (this.concurrency == null) {
      errors.push({
        property: 'concurrency',
        message: 'concurrency is required',
        code: 'REQUIRED'
      });
    }
    if (this.concurrency !== undefined) {
    }
    if (this.isAbstract == null) {
      errors.push({
        property: 'isAbstract',
        message: 'isAbstract is required',
        code: 'REQUIRED'
      });
    }
    if (this.isAbstract !== undefined) {
      if (typeof this.isAbstract !== 'boolean') {
        errors.push({
          property: 'isAbstract',
          message: 'isAbstract must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isAbstract
        });
      }
    }
    if (this.method) {
    }
    if (this.ownedParameter) {
    }
    if (this.ownedParameterSet) {
    }
    if (this.raisedException) {
    }
    if (this.templateBinding) {
    }
    if (this.isQuery == null) {
      errors.push({
        property: 'isQuery',
        message: 'isQuery is required',
        code: 'REQUIRED'
      });
    }
    if (this.isQuery !== undefined) {
      if (typeof this.isQuery !== 'boolean') {
        errors.push({
          property: 'isQuery',
          message: 'isQuery must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isQuery
        });
      }
    }
    if (this.postcondition) {
    }
    if (this.precondition) {
    }
    if (this.redefinedOperation) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IOperation): ValidationResult {
    if (instance instanceof Operation) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Operation(instance);
    return temp.validate();
  }
}
