/**
 * Implementation class for ExceptionHandler
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { Comment } from './Comment';
import { Element } from './Element';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { IExceptionHandler } from './IExceptionHandler';
import { IExecutableNode } from './IExecutableNode';
import { IObjectNode } from './IObjectNode';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class ExceptionHandler extends Element implements IExceptionHandler {
  /**
   * exceptionInput
   * 
   * @type ObjectNode
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public exceptionInput!: IObjectNode | string;

  /**
   * exceptionType
   * 
   * @type Classifier
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public exceptionType: Set<IClassifier | string> = new Set();

  /**
   * handlerBody
   * 
   * @type ExecutableNode
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public handlerBody!: IExecutableNode | string;

  /**
   * protectedNode
   * 
   * @type ExecutableNode
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite handler
   */
  public protectedNode!: IExecutableNode | string;

  // Inherited from Element
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Element
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  constructor(init?: Partial<IExceptionHandler>) {
    super(init);
    this.exceptionInput = init?.exceptionInput!;
    this.exceptionType = init?.exceptionType ?? new Set();
    this.handlerBody = init?.handlerBody!;
    this.protectedNode = init?.protectedNode!;
  }
  getExceptionInput(): IObjectNode | string {
    return this.exceptionInput;
  }

  setExceptionInput(value: IObjectNode | string): void {
    this.exceptionInput = value;
  }

  getExceptionType(): Set<IClassifier | string> {
    return this.exceptionType;
  }

  setExceptionType(value: Set<IClassifier | string>): void {
    this.exceptionType = value;
  }

  getHandlerBody(): IExecutableNode | string {
    return this.handlerBody;
  }

  setHandlerBody(value: IExecutableNode | string): void {
    this.handlerBody = value;
  }

  getProtectedNode(): IExecutableNode | string {
    return this.protectedNode;
  }

  setProtectedNode(value: IExecutableNode | string): void {
    this.protectedNode = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IExceptionHandler {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      exceptionInput: this.exceptionInput,
      exceptionType: this.exceptionType,
      handlerBody: this.handlerBody,
      protectedNode: this.protectedNode,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.exceptionInput = this.exceptionInput;
    result.exceptionType = Array.from(this.exceptionType);
    result.handlerBody = this.handlerBody;
    result.protectedNode = this.protectedNode;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ExceptionHandler {
    return new ExceptionHandler(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IExceptionHandler>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ExceptionHandler)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ExceptionHandler{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ExceptionHandler {
    const instance = new ExceptionHandler();

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }
    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    instance.exceptionInput = json.exceptionInput;
    if (json.exceptionType && Array.isArray(json.exceptionType)) {
      instance.exceptionType = new Set(json.exceptionType);
    }
    instance.handlerBody = json.handlerBody;
    instance.protectedNode = json.protectedNode;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.exceptionInput == null) {
      errors.push({
        property: 'exceptionInput',
        message: 'exceptionInput is required',
        code: 'REQUIRED'
      });
    }
    if (this.exceptionType == null) {
      errors.push({
        property: 'exceptionType',
        message: 'exceptionType is required',
        code: 'REQUIRED'
      });
    }
    if (this.exceptionType) {
      if (Array.from(this.exceptionType).length < 1) {
        errors.push({
          property: 'exceptionType',
          message: 'exceptionType must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    if (this.handlerBody == null) {
      errors.push({
        property: 'handlerBody',
        message: 'handlerBody is required',
        code: 'REQUIRED'
      });
    }
    if (this.protectedNode == null) {
      errors.push({
        property: 'protectedNode',
        message: 'protectedNode is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IExceptionHandler): ValidationResult {
    if (instance instanceof ExceptionHandler) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ExceptionHandler(instance);
    return temp.validate();
  }
}
