#declare namespaces
window.App ?= {}
window.Famous ?={}

# here are some helper functions that make all this work
# the magic code - finds the dom element from the famous 'path' i.e. body/0/0
# the back tics allow us to embed javascript inside coffeescript
# i was too lazy to convert it
# this is using timer functions because it seems to take just a little time for the
# node and DOMElements to show up in the DOM after they are created
# even using the onMount function of the node does not work (seems to be a famous 'feature')
# kudos to Gadi Cohen for this little code snippet (famous-views)


`App.getElementFromDOMElement = function(node, callback) {
    var clock = Famous.Engine.getClock();
    var query = function() {
    var nodeId = node.getLocation();
    var elements = document.querySelector(nodeId.split('/')[0]).querySelectorAll('[data-fa-path]');
    for (var i = 0; i < elements.length; ++i) {
      if (elements[i].dataset.faPath === nodeId) {
          return callback(elements[i]);
      }
    }
    clock.setTimeout(query, 16);
    };
  // except for this :(
    clock.setTimeout(query, 64);
    };`

# a little helper function
App.renderTemplate = (template,node)  ->
  App.getElementFromDOMElement node,(el)=>
# get the content 'div'
    content = el.childNodes[0]
# render our template into the content DIV
    Blaze.render template,content

# initialize some reactive variables to use in our templates
Session.set 'content','counter'
Session.set 'count',1
