

Meteor.startup ->
  Famous.Engine = famous.core.FamousEngine
  Famous.DOMElement = famous.domRenderables.DOMElement
  Famous.DOMRenderer = famous.domRenderers.DOMRenderer
  Famous.Align = famous.components.Align
  Famous.Camera = famous.components.Camera
  Famous.Curves = famous.transitions.Curves


  Famous.Node = famous.core.Node
  Famous.Position = famous.components.Position
  Famous.Rotation = famous.components.Rotation
  Famous.Size = famous.components.Size


  Famous.Gravity3D = famous.physics.Gravity3D
  Famous.Particle = famous.physics.Particle
  Famous.PhysicsEngine = famous.physics.PhysicsEngine
  Famous.Spring = famous.physics.Spring
  Famous.Vec3 = famous.math.Vec3

  Famous.Mesh = famous.webglRenderables.Mesh
  Famous.PointLight = famous.webglRenderables.PointLight
  Famous.Color = famous.utilities.Color
  Famous.Circle = famous.webglGeometries.Circle
  Famous.OBJLoader = famous.webglGeometries.OBJLoader
  Famous.Geometry = famous.webglGeometries.Geometry
  Famous.Compositor = famous.renderers.Compositor