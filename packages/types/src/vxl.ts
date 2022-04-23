// VXL AST

export interface VFunction {
  name: Node
  subfunction: Node | null
  args: Node[]
}

export interface Conditional {
  condition: Node
  if_true: Node
  if_false: Node
}

export interface UnaryOp {
  operator: Node
  operand: Node
}

export interface BinaryOp {
  operator: Node
  left: Node
  right: Node
}

export interface Option {
  key: Node
  value: Node
}

export enum Operator {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/',
  modulus = '%',
  exponent = '^',

  // logical
  and = '&&',
  or = '||',
  not = '!',

  // comparison
  equal = '==',
  not_equal = '!=',
  greater = '>',
  less = '<',
  greater_equal = '>=',
  less_equal = '<=',

  // postfix
  elipsis = '...',
  attr_access = '.',
  attr_splat = '.*',
  index_access = '[',
  full_splat = '[*]',
}

type VNumber = {
  int?: number
  float?: number
}

interface Token {
  identifier?: string
  variable?: string
  option?: Option
  address?: string

  // Basic literal types
  boolean?: boolean
  number?: VNumber
  string?: string

  // Expression terms
  function?: VFunction
  conditional?: Conditional
  operator?: Operator
  binary_op?: BinaryOp
  unary_op?: UnaryOp

  // Containers
  list?: Node[]
}

export interface Node {
  offset: number
  line: number
  column: number
  token: Token
}
export interface NodeContext {
  node: Node
  type: NodeTokenType
  parents: Node[]
}

export type VXL = Node[]
export type NodeTokenType = keyof Token

// VXL abstraction

export type VXLArgument = string | number | boolean
export type VXLArguments = VXLArgument[]
export type VXLOptions = Record<string, VXLArgument>

export interface VXLFunction {
  name: string
  subfunction?: string
  args?: VXLArguments
  options?: VXLOptions
}
