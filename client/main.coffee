Template.main.rendered= ->

  scene = Famous.Engine.createScene()
  scene.addChild new App.app()
  Famous.Engine.init()

