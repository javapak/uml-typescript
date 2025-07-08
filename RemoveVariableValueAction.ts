/**
 * Implementation class for RemoveVariableValueAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends WriteVariableAction
 */
import { IActivityEdge } from './IActivityEdge';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IExceptionHandler } from './IExceptionHandler';
import { IInputPin } from './IInputPin';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { IRemoveVariableValueAction } from './IRemoveVariableValueAction';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IVariable } from './IVariable';
import { IWriteVariableAction } from './IWriteVariableAction';
import { InputPin } from './InputPin';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';
import { WriteVariableAction } from './WriteVariableAction';

export class RemoveVariableValueAction extends WriteVariableAction implements IRemoveVariableValueAction {
  /**
   * isRemoveDuplicates
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isRemoveDuplicates!: boolean;

  /**
   * removeAt
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship containment
   */
  public removeAt?: IInputPin;

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
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  /**
   * inInterruptibleRegion
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inInterruptibleRegion: Set<string> = new Set();

  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite node
   */
  public inStructuredNode?: string;

  /**
   * incoming
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite target
   */
  public incoming: Set<string> = new Set();

  /**
   * outgoing
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite source
   */
  public outgoing: Set<string> = new Set();

  /**
   * redefinedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedNode: Set<string> = new Set();

  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inPartition: Set<string> = new Set();

  /**
   * handler
   * 
   * @type ExceptionHandler
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite protectedNode
   */
  public handler: Set<IExceptionHandler> = new Set();

  /**
   * isLocallyReentrant
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLocallyReentrant!: boolean;

  /**
   * localPostcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPostcondition: Set<IConstraint> = new Set();

  /**
   * localPrecondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPrecondition: Set<IConstraint> = new Set();

  /**
   * variable
   * 
   * @type Variable
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public variable!: string;

  /**
   * value
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship containment
   */
  public value?: IInputPin;


  constructor(init?: Partial<IRemoveVariableValueAction>) {
    super(init);

    this.isRemoveDuplicates = init?.isRemoveDuplicates ?? false;
    this.removeAt = init?.removeAt;
  }
  getIsRemoveDuplicates(): boolean {
    return this.isRemoveDuplicates;
  }

  setIsRemoveDuplicates(value: boolean): void {
    this.isRemoveDuplicates = value;
  }

  getRemoveAt(): IInputPin | undefined {
    return this.removeAt;
  }

  setRemoveAt(value: IInputPin | undefined): void {
    this.removeAt = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IRemoveVariableValueAction {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      isRemoveDuplicates: this.isRemoveDuplicates,
      ...(this.removeAt !== undefined && { removeAt: this.removeAt }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.isRemoveDuplicates = this.isRemoveDuplicates;
    if (this.removeAt !== undefined) {
      result.removeAt = this.removeAt;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): RemoveVariableValueAction {
    return new RemoveVariableValueAction(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IRemoveVariableValueAction>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof RemoveVariableValueAction)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `RemoveVariableValueAction{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): RemoveVariableValueAction {
    const instance = new RemoveVariableValueAction();

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
    instance.isLeaf = json.isLeaf;
    if (json.inInterruptibleRegion && Array.isArray(json.inInterruptibleRegion)) {
      instance.inInterruptibleRegion = new Set(json.inInterruptibleRegion);
    }
    if (json.inStructuredNode !== undefined) {
      instance.inStructuredNode = json.inStructuredNode;
    }
    if (json.incoming && Array.isArray(json.incoming)) {
      instance.incoming = new Set(json.incoming);
    }
    if (json.outgoing && Array.isArray(json.outgoing)) {
      instance.outgoing = new Set(json.outgoing);
    }
    if (json.redefinedNode && Array.isArray(json.redefinedNode)) {
      instance.redefinedNode = new Set(json.redefinedNode);
    }
    if (json.inPartition && Array.isArray(json.inPartition)) {
      instance.inPartition = new Set(json.inPartition);
    }
    if (json.handler && Array.isArray(json.handler)) {
      instance.handler = new Set(json.handler);
    }
    instance.isLocallyReentrant = json.isLocallyReentrant;
    if (json.localPostcondition && Array.isArray(json.localPostcondition)) {
      instance.localPostcondition = new Set(json.localPostcondition);
    }
    if (json.localPrecondition && Array.isArray(json.localPrecondition)) {
      instance.localPrecondition = new Set(json.localPrecondition);
    }
    instance.variable = json.variable;
    if (json.value !== undefined) {
      instance.value = json.value;
    }
    instance.isRemoveDuplicates = json.isRemoveDuplicates;
    if (json.removeAt !== undefined) {
      instance.removeAt = json.removeAt;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.isRemoveDuplicates == null) {
      errors.push({
        property: 'isRemoveDuplicates',
        message: 'isRemoveDuplicates is required',
        code: 'REQUIRED'
      });
    }
    if (this.isRemoveDuplicates !== undefined) {
      if (typeof this.isRemoveDuplicates !== 'boolean') {
        errors.push({
          property: 'isRemoveDuplicates',
          message: 'isRemoveDuplicates must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isRemoveDuplicates
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IRemoveVariableValueAction): ValidationResult {
    if (instance instanceof RemoveVariableValueAction) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new RemoveVariableValueAction(instance);
    return temp.validate();
  }
}
