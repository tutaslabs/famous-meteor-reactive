# All of our template helpers

Template.box1.helpers
  'content': ->
    Session.get 'content'
  'count': ->
    Session.get 'count'

Template.box2.helpers
  'content': ->
    Session.get 'content'
  'count': ->
    Session.get 'count'