const commonNamespaces = [
  'dcterms: <http://purl.org/dc/terms/>',
  'skos: <http://www.w3.org/2004/02/skos/core#>',
  'cc: <http://creativecommons.org/ns#>',
  'rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>',
  'rdfs: <http://www.w3.org/2000/01/rdf-schema#>',
  'wd: <http://www.wikidata.org/entity/>',
  'oa: <http://www.w3.org/ns/oa#>',
  'schema: <https://schema.org/>',
  'prov: <http://www.w3.org/ns/prov#>',
  'rs: <http://rightsstatements.org/vocab/>',
];

YASQE.Autocompleters._prefixes = YASQE.Autocompleters.prefixes;
YASQE.Autocompleters.prefixes = function(yasqe, completerName) {
  var completer = YASQE.Autocompleters._prefixes(yasqe, completerName);
  completer.async = false;
  completer.persistent = false;
  completer.get = commonNamespaces;
  return completer;
};
