/**
 * Interface for ExecutionEnvironment
 * 
 * @since UML 2.5
 * @package uml
 * @extends Node
 */
import { INode } from './INode';

export interface IExecutionEnvironment extends INode {
}

// Type aliases for ExecutionEnvironment
export type ExecutionEnvironmentInput = Partial<IExecutionEnvironment>;
export type ExecutionEnvironmentOutput = IExecutionEnvironment;
