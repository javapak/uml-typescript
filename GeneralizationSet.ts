/**
 * Implementation class for GeneralizationSet
 * 
 * @since UML 2.5
 * @package uml
 * @extends PackageableElement
 */
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { IPackageableElement } from './IPackageableElement';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { PackageableElement } from './PackageableElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class GeneralizationSet extends PackageableElement implements IGeneralizationSet {
  /**
   * isCovering
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isCovering!: boolean;

  /**
   * isDisjoint
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isDisjoint!: boolean;

  /**
   * powertype
   * 
   * @type Classifier
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite powertypeExtent
   */
  public powertype?: string;

  /**
   * generalization
   * 
   * @type Generalization
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite generalizationSet
   */
  public generalization: Set<string> = new Set();

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


  constructor(init?: Partial<IGeneralizationSet>) {
    super(init);

    this.isCovering = init?.isCovering ?? false;
    this.isDisjoint = init?.isDisjoint ?? false;
    this.powertype = init?.powertype;
    this.generalization = init?.generalization ? new Set(init.generalization) : new Set();
  }
  getIsCovering(): boolean {
    return this.isCovering;
  }

  setIsCovering(value: boolean): void {
    this.isCovering = value;
  }

  getIsDisjoint(): boolean {
    return this.isDisjoint;
  }

  setIsDisjoint(value: boolean): void {
    this.isDisjoint = value;
  }

  getPowertype(): string | undefined {
    return this.powertype;
  }

  setPowertype(value: string | undefined): void {
    this.powertype = value;
  }

  getGeneralization(): Set<string> {
    return this.generalization;
  }

  setGeneralization(value: Set<string>): void {
    this.generalization = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IGeneralizationSet {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      isCovering: this.isCovering,
      isDisjoint: this.isDisjoint,
      ...(this.powertype !== undefined && { powertype: this.powertype }),
      generalization: this.generalization,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.isCovering = this.isCovering;
    result.isDisjoint = this.isDisjoint;
    if (this.powertype !== undefined) {
      result.powertype = this.powertype;
    }
    result.generalization = Array.from(this.generalization);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): GeneralizationSet {
    return new GeneralizationSet(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IGeneralizationSet>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof GeneralizationSet)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `GeneralizationSet{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): GeneralizationSet {
    const instance = new GeneralizationSet();

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
    if (json.owningTemplateParameter !== undefined) {
      instance.owningTemplateParameter = json.owningTemplateParameter;
    }
    if (json.templateParameter !== undefined) {
      instance.templateParameter = json.templateParameter;
    }
    instance.isCovering = json.isCovering;
    instance.isDisjoint = json.isDisjoint;
    if (json.powertype !== undefined) {
      instance.powertype = json.powertype;
    }
    if (json.generalization && Array.isArray(json.generalization)) {
      instance.generalization = new Set(json.generalization);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.isCovering == null) {
      errors.push({
        property: 'isCovering',
        message: 'isCovering is required',
        code: 'REQUIRED'
      });
    }
    if (this.isCovering !== undefined) {
      if (typeof this.isCovering !== 'boolean') {
        errors.push({
          property: 'isCovering',
          message: 'isCovering must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isCovering
        });
      }
    }
    if (this.isDisjoint == null) {
      errors.push({
        property: 'isDisjoint',
        message: 'isDisjoint is required',
        code: 'REQUIRED'
      });
    }
    if (this.isDisjoint !== undefined) {
      if (typeof this.isDisjoint !== 'boolean') {
        errors.push({
          property: 'isDisjoint',
          message: 'isDisjoint must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isDisjoint
        });
      }
    }
    if (this.generalization) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IGeneralizationSet): ValidationResult {
    if (instance instanceof GeneralizationSet) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new GeneralizationSet(instance);
    return temp.validate();
  }
}
