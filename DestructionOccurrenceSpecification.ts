/**
 * Implementation class for DestructionOccurrenceSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @extends MessageOccurrenceSpecification
 */
import { Comment } from './Comment';
import { GeneralOrdering } from './GeneralOrdering';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IDestructionOccurrenceSpecification } from './IDestructionOccurrenceSpecification';
import { IElement } from './IElement';
import { IGeneralOrdering } from './IGeneralOrdering';
import { IInteraction } from './IInteraction';
import { IInteractionOperand } from './IInteractionOperand';
import { ILifeline } from './ILifeline';
import { IMessage } from './IMessage';
import { IMessageOccurrenceSpecification } from './IMessageOccurrenceSpecification';
import { INamespace } from './INamespace';
import { IStringExpression } from './IStringExpression';
import { MessageOccurrenceSpecification } from './MessageOccurrenceSpecification';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class DestructionOccurrenceSpecification extends MessageOccurrenceSpecification implements IDestructionOccurrenceSpecification {
  // Inherited from MessageOccurrenceSpecification
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from MessageOccurrenceSpecification
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from MessageOccurrenceSpecification
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from MessageOccurrenceSpecification
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from MessageOccurrenceSpecification
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from MessageOccurrenceSpecification
  /**
   * covered
   * 
   * @type Lifeline
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite coveredBy
   */
  public covered: Set<ILifeline | string> = new Set();

  // Inherited from MessageOccurrenceSpecification
  /**
   * enclosingOperand
   * 
   * @type InteractionOperand
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite fragment
   */
  public enclosingOperand?: IInteractionOperand | string = undefined;

  // Inherited from MessageOccurrenceSpecification
  /**
   * enclosingInteraction
   * 
   * @type Interaction
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite fragment
   */
  public enclosingInteraction?: IInteraction | string = undefined;

  // Inherited from MessageOccurrenceSpecification
  /**
   * generalOrdering
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship containment
   */
  public generalOrdering: Set<IGeneralOrdering> = new Set();

  // Inherited from MessageOccurrenceSpecification
  /**
   * toAfter
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite before
   */
  public toAfter: Set<IGeneralOrdering | string> = new Set();

  // Inherited from MessageOccurrenceSpecification
  /**
   * toBefore
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite after
   */
  public toBefore: Set<IGeneralOrdering | string> = new Set();

  // Inherited from MessageOccurrenceSpecification
  /**
   * message
   * 
   * @type Message
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public message?: IMessage | string = undefined;

  constructor(init?: Partial<IDestructionOccurrenceSpecification>) {
    super(init);
  }
  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IDestructionOccurrenceSpecification {
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
  clone(): DestructionOccurrenceSpecification {
    return new DestructionOccurrenceSpecification(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IDestructionOccurrenceSpecification>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof DestructionOccurrenceSpecification)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `DestructionOccurrenceSpecification{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): DestructionOccurrenceSpecification {
    const instance = new DestructionOccurrenceSpecification();

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
    if (json.covered && Array.isArray(json.covered)) {
      instance.covered = new Set(json.covered);
    }
    if (json.enclosingOperand !== undefined) {
      instance.enclosingOperand = json.enclosingOperand;
    }
    if (json.enclosingInteraction !== undefined) {
      instance.enclosingInteraction = json.enclosingInteraction;
    }
    if (json.generalOrdering && Array.isArray(json.generalOrdering)) {
      instance.generalOrdering = new Set(json.generalOrdering);
    }
    if (json.toAfter && Array.isArray(json.toAfter)) {
      instance.toAfter = new Set(json.toAfter);
    }
    if (json.toBefore && Array.isArray(json.toBefore)) {
      instance.toBefore = new Set(json.toBefore);
    }
    if (json.message !== undefined) {
      instance.message = json.message;
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

  static validate(instance: IDestructionOccurrenceSpecification): ValidationResult {
    if (instance instanceof DestructionOccurrenceSpecification) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new DestructionOccurrenceSpecification(instance);
    return temp.validate();
  }
}
