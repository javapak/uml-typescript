/**
 * Implementation class for Variable
 * 
 * @since UML 2.5
 * @package uml
 * @extends ConnectableElement, MultiplicityElement
 */
import { Comment } from './Comment';
import { ConnectableElement } from './ConnectableElement';
import { IActivity } from './IActivity';
import { IComment } from './IComment';
import { IConnectableElement } from './IConnectableElement';
import { IConnectorEnd } from './IConnectorEnd';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IMultiplicityElement } from './IMultiplicityElement';
import { INamespace } from './INamespace';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { ITemplateParameter } from './ITemplateParameter';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { IVariable } from './IVariable';
import { MultiplicityElement } from './MultiplicityElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class Variable extends ConnectableElement implements IVariable {
  /**
   * activityScope
   * 
   * @type Activity
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite variable
   */
  public activityScope?: IActivity | string = undefined;

  /**
   * scope
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite variable
   */
  public scope?: IStructuredActivityNode | string = undefined;

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

  constructor(init?: Partial<IVariable>) {
    super(init);
    this.activityScope = init?.activityScope ?? undefined;
    this.scope = init?.scope ?? undefined;
  }
  getActivityScope(): IActivity | string | undefined {
    return this.activityScope;
  }

  setActivityScope(value: IActivity | string | undefined): void {
    this.activityScope = value;
  }

  getScope(): IStructuredActivityNode | string | undefined {
    return this.scope;
  }

  setScope(value: IStructuredActivityNode | string | undefined): void {
    this.scope = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IVariable {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.activityScope !== undefined && { activityScope: this.activityScope }),
      ...(this.scope !== undefined && { scope: this.scope }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.activityScope !== undefined) {
      result.activityScope = this.activityScope;
    }
    if (this.scope !== undefined) {
      result.scope = this.scope;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Variable {
    return new Variable(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IVariable>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Variable)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Variable{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Variable {
    const instance = new Variable();

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
    if (json.activityScope !== undefined) {
      instance.activityScope = json.activityScope;
    }
    if (json.scope !== undefined) {
      instance.scope = json.scope;
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

  static validate(instance: IVariable): ValidationResult {
    if (instance instanceof Variable) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Variable(instance);
    return temp.validate();
  }
}
