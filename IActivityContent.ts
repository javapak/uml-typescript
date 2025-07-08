/**
 * Interface for ActivityContent
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @interface
 */
export interface IActivityContent {
}

// Type aliases for ActivityContent
export type ActivityContentInput = Partial<IActivityContent>;
export type ActivityContentOutput = IActivityContent;
export type ActivityContentUnion = IActivityContent | IActivityGroup | IActivityNode;
