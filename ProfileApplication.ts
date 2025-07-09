/**
 * Implementation class for ProfileApplication
 * 
 * @since UML 2.5
 * @package uml
 * @extends DirectedRelationship
 */
import { DirectedRelationship } from './DirectedRelationship';
import { IComment } from './IComment';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IPackage } from './IPackage';
import { IProfile } from './IProfile';
import { IProfileApplication } from './IProfileApplication';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class ProfileApplication extends DirectedRelationship implements IProfileApplication {
  /**
   * appliedProfile
   * 
   * @type Profile
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public appliedProfile!: string;

  /**
   * isStrict
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isStrict!: boolean;

  /**
   * applyingPackage
   * 
   * @type Package
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite profileApplication
   */
  public applyingPackage!: string;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();


  constructor(init?: Partial<IProfileApplication>) {
    super(init);

    this.appliedProfile = init?.appliedProfile ?? '';
    this.isStrict = init?.isStrict ?? false;
    this.applyingPackage = init?.applyingPackage ?? '';
  }
  getAppliedProfile(): string {
    return this.appliedProfile;
  }

  setAppliedProfile(value: string): void {
    this.appliedProfile = value;
  }

  getIsStrict(): boolean {
    return this.isStrict;
  }

  setIsStrict(value: boolean): void {
    this.isStrict = value;
  }

  getApplyingPackage(): string {
    return this.applyingPackage;
  }

  setApplyingPackage(value: string): void {
    this.applyingPackage = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IProfileApplication {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      appliedProfile: this.appliedProfile,
      isStrict: this.isStrict,
      applyingPackage: this.applyingPackage,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.appliedProfile = this.appliedProfile;
    result.isStrict = this.isStrict;
    result.applyingPackage = this.applyingPackage;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ProfileApplication {
    return new ProfileApplication(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IProfileApplication>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ProfileApplication)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ProfileApplication{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ProfileApplication {
    const instance = new ProfileApplication();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    instance.appliedProfile = json.appliedProfile;
    instance.isStrict = json.isStrict;
    instance.applyingPackage = json.applyingPackage;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.ownedComment) {
    }
    if (this.appliedProfile == null) {
      errors.push({
        property: 'appliedProfile',
        message: 'appliedProfile is required',
        code: 'REQUIRED'
      });
    }
    if (this.isStrict == null) {
      errors.push({
        property: 'isStrict',
        message: 'isStrict is required',
        code: 'REQUIRED'
      });
    }
    if (this.isStrict !== undefined) {
      if (typeof this.isStrict !== 'boolean') {
        errors.push({
          property: 'isStrict',
          message: 'isStrict must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isStrict
        });
      }
    }
    if (this.applyingPackage == null) {
      errors.push({
        property: 'applyingPackage',
        message: 'applyingPackage is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IProfileApplication): ValidationResult {
    if (instance instanceof ProfileApplication) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ProfileApplication(instance);
    return temp.validate();
  }
}
