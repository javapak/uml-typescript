/**
 * Implementation class for DecisionNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends ControlNode
 */
import { Comment } from './Comment';
import { ControlNode } from './ControlNode';
import { IActivity } from './IActivity';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IBehavior } from './IBehavior';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IControlNode } from './IControlNode';
import { IDecisionNode } from './IDecisionNode';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { INamespace } from './INamespace';
import { IObjectFlow } from './IObjectFlow';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class DecisionNode extends ControlNode implements IDecisionNode {
  /**
   * decisionInput
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public decisionInput?: IBehavior | string = undefined;

  /**
   * decisionInputFlow
   * 
   * @type ObjectFlow
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public decisionInputFlow?: IObjectFlow | string = undefined;

  // Inherited from ControlNode
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from ControlNode
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from ControlNode
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from ControlNode
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from ControlNode
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from ControlNode
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from ControlNode
  /**
   * inInterruptibleRegion
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inInterruptibleRegion: Set<IInterruptibleActivityRegion | string> = new Set();

  // Inherited from ControlNode
  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite node
   */
  public inStructuredNode?: IStructuredActivityNode | string = undefined;

  // Inherited from ControlNode
  /**
   * incoming
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite target
   */
  public incoming: Set<IActivityEdge | string> = new Set();

  // Inherited from ControlNode
  /**
   * outgoing
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite source
   */
  public outgoing: Set<IActivityEdge | string> = new Set();

  // Inherited from ControlNode
  /**
   * redefinedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedNode: Set<IActivityNode | string> = new Set();

  // Inherited from ControlNode
  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inPartition: Set<IActivityPartition | string> = new Set();

  constructor(init?: Partial<IDecisionNode>) {
    super(init);
    this.decisionInput = init?.decisionInput ?? undefined;
    this.decisionInputFlow = init?.decisionInputFlow ?? undefined;
  }
  getDecisionInput(): IBehavior | string | undefined {
    return this.decisionInput;
  }

  setDecisionInput(value: IBehavior | string | undefined): void {
    this.decisionInput = value;
  }

  getDecisionInputFlow(): IObjectFlow | string | undefined {
    return this.decisionInputFlow;
  }

  setDecisionInputFlow(value: IObjectFlow | string | undefined): void {
    this.decisionInputFlow = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IDecisionNode {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.decisionInput !== undefined && { decisionInput: this.decisionInput }),
      ...(this.decisionInputFlow !== undefined && { decisionInputFlow: this.decisionInputFlow }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.decisionInput !== undefined) {
      result.decisionInput = this.decisionInput;
    }
    if (this.decisionInputFlow !== undefined) {
      result.decisionInputFlow = this.decisionInputFlow;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): DecisionNode {
    return new DecisionNode(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IDecisionNode>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof DecisionNode)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `DecisionNode{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): DecisionNode {
    const instance = new DecisionNode();

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
    if (json.decisionInput !== undefined) {
      instance.decisionInput = json.decisionInput;
    }
    if (json.decisionInputFlow !== undefined) {
      instance.decisionInputFlow = json.decisionInputFlow;
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

  static validate(instance: IDecisionNode): ValidationResult {
    if (instance instanceof DecisionNode) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new DecisionNode(instance);
    return temp.validate();
  }
}
