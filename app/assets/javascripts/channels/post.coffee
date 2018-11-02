App.post = App.cable.subscriptions.create "PostChannel",
  connected: ->
    # Called when the subscription is ready for use on the server
console.log("Me coneecte a postChannel")
  
  
  say_hi: ->
   onsole.log("Me coneecte a postChannel 2") 

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
