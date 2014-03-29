class DingsView extends Backbone.View
    el: '#test'

    model: new DingsModel

    template: JST['dings']

    initialize: ->
        @listenTo @model, 'change', @render

    render: ->
        @$el.html @template @model.toJSON()

    events: 
        'click p': 'changeVal'

    changeVal: ->
        @model.set 'val', 'Friend'