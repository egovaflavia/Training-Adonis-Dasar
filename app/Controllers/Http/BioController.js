'use strict'

class BioController {
  index({
    request,
    response,
    view
  }) {
    let params = request.get('name');
    return view.render('hello', {
      text: params.name
    })
  }
}

module.exports = BioController
