class Boot
    window.Framing = new App

    Framing.dingsModel = new DingsModel
    Framing.dingsView = new DingsView

    # We’ll use this <body> reference to put some views in it below.
    $body = $ 'body'

    # Views that will exist regardless of what URL you are.
    header = new Header()
    header.render().el

    new Router

    Backbone.history.start()

$ ->
    new Boot()

