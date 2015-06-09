Tinytest.add('mj famous - core', function (test) {
  test.instanceOf(famous.core.Context, Function);
  test.instanceOf(famous.core.ElementAllocator, Function);
  test.instanceOf(famous.core.Engine, Object);
  test.instanceOf(famous.core.Entity, Object);
  test.instanceOf(famous.core.EventEmitter, Function);
  test.instanceOf(famous.core.EventHandler, Function);
  test.instanceOf(famous.core.Group, Function);
  test.instanceOf(famous.core.Modifier, Function);
  test.instanceOf(famous.core.OptionsManager, Function);
  test.instanceOf(famous.core.RenderNode, Function);
  test.instanceOf(famous.core.Scene, Function);
  test.instanceOf(famous.core.SpecParser, Function);
  test.instanceOf(famous.core.Surface, Function);
  test.instanceOf(famous.core.Transform, Object);
  test.instanceOf(famous.core.View, Function);
  test.instanceOf(famous.core.ViewSequence, Function);
});

Tinytest.add('mj famous - events', function (test) {
  test.instanceOf(famous.events.EventArbiter, Function);
  test.instanceOf(famous.events.EventFilter, Function);
  test.instanceOf(famous.events.EventMapper, Function);
});

Tinytest.add('mj famous - inputs', function (test) {
  test.instanceOf(famous.inputs.Accumulator, Function);
  test.instanceOf(famous.inputs.GenericSync, Function);
  test.instanceOf(famous.inputs.MouseSync, Function);
  test.instanceOf(famous.inputs.PinchSync, Function);
  test.instanceOf(famous.inputs.RotateSync, Function);
  test.instanceOf(famous.inputs.ScaleSync, Function);
  test.instanceOf(famous.inputs.ScrollSync, Function);
  test.instanceOf(famous.inputs.TouchSync, Function);
  test.instanceOf(famous.inputs.TouchTracker, Function);
  test.instanceOf(famous.inputs.TwoFingerSync, Function);
});

Tinytest.add('mj famous - math', function (test) {
  test.instanceOf(famous.math.Matrix, Function);
  test.instanceOf(famous.math.Quaternion, Function);
  test.instanceOf(famous.math.Random, Object);
  test.instanceOf(famous.math.Utilities, Object);
  test.instanceOf(famous.math.Vector, Function);
});

Tinytest.add('mj famous - modifiers', function (test) {
  test.instanceOf(famous.modifiers.Draggable, Function);
  test.instanceOf(famous.modifiers.Fader, Function);
  test.instanceOf(famous.modifiers.ModifierChain, Function);
  test.instanceOf(famous.modifiers.StateModifier, Function);
});

Tinytest.add('mj famous - physics', function (test) {
  test.instanceOf(famous.physics.PhysicsEngine, Function);

  test.instanceOf(famous.physics.bodies.Body, Function);
  test.instanceOf(famous.physics.bodies.Circle, Function);
  test.instanceOf(famous.physics.bodies.Particle, Function);
  test.instanceOf(famous.physics.bodies.Rectangle, Function);

  test.instanceOf(famous.physics.constraints.Collision, Function);
  test.instanceOf(famous.physics.constraints.Constraint, Function);
  test.instanceOf(famous.physics.constraints.Curve, Function);
  test.instanceOf(famous.physics.constraints.Distance, Function);
  test.instanceOf(famous.physics.constraints.Snap, Function);
  test.instanceOf(famous.physics.constraints.Surface, Function);
  test.instanceOf(famous.physics.constraints.Wall, Function);
  test.instanceOf(famous.physics.constraints.Walls, Function);

  test.instanceOf(famous.physics.forces.Drag, Function);
  test.instanceOf(famous.physics.forces.Force, Function);
  test.instanceOf(famous.physics.forces.Repulsion, Function);
  test.instanceOf(famous.physics.forces.RotationalDrag, Function);
  test.instanceOf(famous.physics.forces.RotationalSpring, Function);
  test.instanceOf(famous.physics.forces.Spring, Function);
  test.instanceOf(famous.physics.forces.VectorField, Function);
});

Tinytest.addAsync('mj famous - can render surface', function (test, complete) {
  var context = famous.core.Engine.createContext();

  var surface = new famous.core.Surface({
    size: [100, 60],
    content: '<h1>Hello Famo.us</h1>'
  });
  context.add(surface);

  var handle = Meteor.setInterval(function () {

	  if (surface._currentTarget) {
		  test.equal(surface._currentTarget.innerHTML, '<h1>Hello Famo.us</h1>');

		  Meteor.clearInterval(handle);
		  complete();
	  }
  }, 100);
});