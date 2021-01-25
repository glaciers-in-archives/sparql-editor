const properties = [
  'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
  'https://schema.org/name',
  'https://schema.org/longitude',
  'https://schema.org/description',
  'https://schema.org/latitude',
  'https://www.glaciersinarchives.org/terms#type',
  'http://www.w3.org/2004/02/skos/core#prefLabel',
  'http://www.w3.org/2004/02/skos/core#definition',
  'http://www.w3.org/2000/01/rdf-schema#seeAlso',
  'http://www.w3.org/2004/02/skos/core#narrower',
  'http://www.w3.org/2004/02/skos/core#closeMatch',
  'http://www.w3.org/2004/02/skos/core#broader',
  'https://schema.org/image',
  'https://schema.org/provider',
  'https://schema.org/sameAs',
  'http://purl.org/dc/terms/source',
  'https://schema.org/temporial',
  'http://purl.org/dc/terms/rights',
  'https://schema.org/spatial',
  'http://www.w3.org/ns/oa#hasTarget',
  'http://www.w3.org/ns/oa#hasBody',
  'http://www.w3.org/ns/oa#motivatedBy',
  'http://www.w3.org/ns/prov#wasDerivedFrom',
  'http://purl.org/dc/terms/issued',
  'http://purl.org/dc/terms/creator',
];

const customPropertyCompleter = function(yasqe) {
  let completer = {
    isValidCompletionPosition: () => YASQE.Autocompleters.properties.isValidCompletionPosition(yasqe),
    preProcessToken: (token) => YASQE.Autocompleters.properties.preProcessToken(yasqe, token),
    postProcessToken: (token, suggestedString) => YASQE.Autocompleters.properties.postProcessToken(yasqe, token, suggestedString),
  };

  completer.bulk = true;
  completer.async = false;
  completer.autoShow = true;

  completer.persistent = false;
  completer.get = () => properties;

  return completer;
};

YASQE.registerAutocompleter('customPropertyCompleter', customPropertyCompleter);
