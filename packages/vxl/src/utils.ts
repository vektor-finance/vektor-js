import { Node, NodeContext, NodeTokenType, VXLFunction } from '@vektor-finance/types'
import { notEmpty } from '@vektor-finance/utils'
import traverse from 'traverse'

export const vxlNodeToFunction = (node: Node): VXLFunction | null => {
  if (!node || !node.token.function) return null

  const func = node.token.function
  const name = func.name?.token.identifier
  const subfunction = func.subfunction?.token.identifier
  const args = func.args
    .map(
      (a) =>
        a.token.number?.int ||
        a.token.number?.float ||
        a.token.boolean ||
        a.token.string?.toUpperCase() ||
        a.token.identifier?.toUpperCase() ||
        a.token.address?.toUpperCase(),
    )
    .filter(notEmpty)
  const options = func.args
    .map((n: Node) => n.token.option)
    .filter(notEmpty)
    .reduce((a, o) => {
      const key = o.key.token.identifier
      const value =
        o.value.token.number?.int ||
        o.value.token.number?.float ||
        o.value.token.boolean ||
        o.value.token.string?.toUpperCase() ||
        o.value.token.identifier?.toUpperCase() ||
        o.value.token.address?.toUpperCase()
      if (key === undefined || value === undefined) return a
      return { ...a, [key]: value }
    }, {})

  if (!name) return null

  return {
    name,
    subfunction,
    args,
    options,
  }
}

export const isNode = (object: unknown): object is Node => {
  if (typeof object === 'object' && object) {
    const obj = object as Node
    return Number.isInteger(obj.offset) && Number.isInteger(obj.line) && Number.isInteger(obj.column)
  }
  return false
}

export const flattenNodes = (nodes: Node[]): NodeContext[] =>
  traverse(nodes).reduce(function (acc: NodeContext[], node: Node) {
    if (node && isNode(node) && !nodes.includes(node)) {
      const type = Object.keys(node.token)[0] as NodeTokenType
      const parents = this.parents
        .map((p) => p.node)
        .filter(isNode)
        .reverse()
      acc.push({ node, type, parents })
    }
    return acc
  }, [])

export const findNodeContextForCursorIndex = (index: number, nodes: Node[]): NodeContext | null =>
  flattenNodes(nodes)
    .slice()
    .reverse()
    .find((nc) => index >= nc.node.offset) || null
