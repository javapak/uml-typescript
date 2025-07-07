/**
 * Implementation class for RemoveVariableValueAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends WriteVariableAction
 */
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { ExceptionHandler } from './ExceptionHandler';
import { IActivity } from './IActivity';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IExceptionHandler } from './IExceptionHandler';
import { IInputPin } from './IInputPin';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { INamespace } from './INamespace';
import { IOutputPin } from './IOutputPin';
import { IRedefinableElement } from './IRedefinableElement';
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
  public removeAt?: IInputPin = undefined;

  // Inherited from WriteVariableAction
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from WriteVariableAction
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from WriteVariableAction
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from WriteVariableAction
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from WriteVariableAction
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from WriteVariableAction
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from WriteVariableAction
  /**
   * inInterruptibleRegion
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inInterruptibleRegion: Set<IInterruptibleActivityRegion | string> = new Set();

  // Inherited from WriteVariableAction
  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite node
   */
  public inStructuredNode?: IStructuredActivityNode | string = undefined;

  // Inherited from WriteVariableAction
  /**
   * incoming
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite target
   */
  public incoming: Set<IActivityEdge | string> = new Set();

  // Inherited from WriteVariableAction
  /**
   * outgoing
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite source
   */
  public outgoing: Set<IActivityEdge | string> = new Set();

  // Inherited from WriteVariableAction
  /**
   * redefinedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedNode: Set<IActivityNode | string> = new Set();

  // Inherited from WriteVariableAction
  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inPartition: Set<IActivityPartition | string> = new Set();

  // Inherited from WriteVariableAction
  /**
   * handler
   * 
   * @type ExceptionHandler
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite protectedNode
   */
  public handler: Set<IExceptionHandler> = new Set();

  // Inherited from WriteVariableAction
  /**
   * isLocallyReentrant
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLocallyReentrant!: boolean;

  // Inherited from WriteVariableAction
  /**
   * localPostcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPostcondition: Set<IConstraint> = new Set();

  // Inherited from WriteVariableAction
  /**
   * localPrecondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPrecondition: Set<IConstraint> = new Set();

  // Inherited from WriteVariableAction
  /**
   * variable
   * 
   * @type Variable
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public variable!: IVariable | string;

  // Inherited from WriteVariableAction
  /**
   * value
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship containment
   */
  public value?: IInputPin = undefined;

  constructor(init?: Partial<IRemoveVariableValueAction>) {
    super(init);
    this.isRemoveDuplicates = init?.isRemoveDuplicates!;
    this.removeAt = init?.removeAt ?? undefined;
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
