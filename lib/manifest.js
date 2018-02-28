export default function manifest(node) {
  if (!node || typeof node !== "object") {
    return document.createTextNode(node)
  }
  var tag = node.tag
  var attributes = node.attributes
  var children = node.children
  var element = document.createElement(tag)
  for (var name in attributes) {
    var value = attributes[name]
    element[name] = value
    element.setAttribute(name, value)
  }
  for (var i = 0; i < children.length; i++) {
    var child = manifest(children[i])
    element.appendChild(child)
  }
  return element
}
