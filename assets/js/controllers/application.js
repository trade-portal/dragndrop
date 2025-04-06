import { Application } from "@hotwired/stimulus"

const application = Application.start()

import { Dragndrop, Slot } from 'dragndrop'
application.register('dragndrop', Dragndrop)
application.register('slot', Slot)

// Configure Stimulus development experience
application.debug = true
window.Stimulus   = application

export { application }
