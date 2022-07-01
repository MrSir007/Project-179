let coordinates

$(document).ready(function () {
  get_coordinates()
})

function get_coordinates () {
  let search = new URLSearchParams(window.location.search)
    if (search.has('source') && search.has('destination')) {
      let source = search.get('source')
      let destination = search.get('destination')
      coordinates.source_lat = source.split(";")[0]
      coordinates.source_lon = source.split(";")[1]
      coordinates.destination_lat = destination.split(";")[0]
      coordinates.destination_lon = destination.split(";")[1]
    } else {
      alert("No coordinates given!")
      window.history.back();
    }
}