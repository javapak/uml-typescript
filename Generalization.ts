/**
 * Implementation class for Generalization
 * 
 * @since UML 2.5
 * @package uml
 * @extends DirectedRelationship
 */
import { Comment } from './Comment';
import { DirectedRelationship } from './DirectedRelationship';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IElement } from './IElement';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class Generalization extends DirectedRelationship implements IGeneralization {
  /**
   * general
   * 
   * @type Classifier
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public general!: IClassifier | string;

  /**
   * generalizationSet
   * 
   * @type GeneralizationSet
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite generalization
   */
  public generalizationSet: Set<IGeneralizationSet | string> = new Set();

  /**
   * isSubstitutable
   * 
   * @type Boolean
   * @multiplicity [0..1]
   */
  public isSubstitutable?: boolean = undefined;

  /**
   * specific
   * 
   * @type Classifier
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite generalization
   */
  public specific!: IClassifier | string;

  // Inherited from DirectedRelationship
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from DirectedRelationship
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  constructor(init?: Partial<IGeneralization>) {
    super(init);
    this.general = init?.general!;
    this.generalizationSet = init?.generalizationSet ?? new Set();
    this.isSubstitutable = init?.isSubstitutable ?? true;
    this.specific = init?.specific!;
  }
  getGeneral(): IClassifier | string {
    return this.general;
  }

  setGeneral(value: IClassifier | string): void {
    this.general = value;
  }

  getGeneralizationSet(): Set<IGeneralizationSet | string> {
    return this.generalizationSet;
  }

  setGeneralizationSet(value: Set<IGeneralizationSet | string>): void {
    this.generalizationSet = value;
  }

  getIsSubstitutable(): boolean | undefined {
    return this.isSubstitutable;
  }

  setIsSubstitutable(value: boolean | undefined): void {
    this.isSubstitutable = value;
  }

  getSpecific(): IClassifier | string {
    return this.specific;
  }

  setSpecific(value: IClassifier | string): void {
    this.specific = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IGeneralization {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      general: this.general,
      generalizationSet: this.generalizationSet,
      ...(this.isSubstitutable !== undefined && { isSubstitutable: this.isSubstitutable }),
      specific: this.specific,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.general = this.general;
    result.generalizationSet = Array.from(this.generalizationSet);
    if (this.isSubstitutable !== undefined) {
      result.isSubstitutable = this.isSubstitutable;
    }
    result.specific = this.specific;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Generalization {
    return new Generalization(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IGeneralization>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Generalization)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Generalization{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Generalization {
    const instance = new Generalization();

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }
    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    instance.general = json.general;
    if (json.generalizationSet && Array.isArray(json.generalizationSet)) {
      instance.generalizationSet = new Set(json.generalizationSet);
    }
    if (json.isSubstitutable !== undefined) {
      instance.isSubstitutable = json.isSubstitutable;
    }
    instance.specific = json.specific;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.general == null) {
      errors.push({
        property: 'general',
        message: 'general is required',
        code: 'REQUIRED'
      });
    }
    if (this.generalizationSet) {
    }
    if (this.isSubstitutable !== undefined) {
      if (typeof this.isSubstitutable !== 'boolean') {
        errors.push({
          property: 'isSubstitutable',
          message: 'isSubstitutable must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isSubstitutable
        });
      }
    }
    if (this.specific == null) {
      errors.push({
        property: 'specific',
        message: 'specific is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IGeneralization): ValidationResult {
    if (instance instanceof Generalization) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Generalization(instance);
    return temp.validate();
  }
}
