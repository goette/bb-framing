class Header extends Backbone.View
    el: '#header'

    template: JST['header']

    render: ->
        @$el.html @template 'who': 'Header'