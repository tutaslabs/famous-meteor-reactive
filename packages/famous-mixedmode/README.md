1) Create a packages folder in the root of your meteor app folder.

2) Clone this repo into the packages folder

run meteor add famous

All famous objects  are mapped  into a 'famous' windows namespace.


For example:

 famous.core.FamousEngine
 famous.domRenderables.DOMElement
 famous.components.Align
 famous.components.Camera
 famous.transitions.Curves
 
 
 to use in your code:
 
 var Camera = new famous.components.Camera;
 
 
Have Fun!


