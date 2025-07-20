/**
 * Interface for Node
 * 
 * @since UML 2.5
 * @package uml
 * @extends Class, DeploymentTarget
 */
import { IClass } from './IClass';
import { IDeploymentTarget } from './IDeploymentTarget';
import { IDevice } from './IDevice';
import { IExecutionEnvironment } from './IExecutionEnvironment';

export interface INode extends IClass, IDeploymentTarget {
  /**
   * nestedNode
   * 
   * @type Node
   * @multiplicity [0..*]
   * @relationship containment
   */
  nestedNode?: Set<INode>;
}

// Type aliases for Node
export type NodeInput = Partial<INode>;
export type NodeOutput = INode;
export type NodeUnion = INode | IDevice | IExecutionEnvironment;
