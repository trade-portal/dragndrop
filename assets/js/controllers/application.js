import { Application } from "@hotwired/stimulus"

const application = Application.start()

import Dragndrop from 'dragndrop'
application.register('dragndrop', Dragndrop)

// Configure Stimulus development experience
application.debug = true
window.Stimulus   = application

export { application }
