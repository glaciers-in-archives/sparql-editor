const services = [
  'https://query.wikidata.org/bigdata/namespace/wdq/sparql',
  'http://sparql.europeana.eu/',
  'http://dbpedia.org/sparql',
];

const customServicesCompleter = function(yasqe) {
  let completer = {
    isValidCompletionPosition: () => {
      const token = yasqe.getCompleteToken();
      const cur = yasqe.getCursor();
      const previousToken = yasqe.getPreviousNonWsToken(cur.line, token);
      if (previousToken.string == 'SERVICE') return true;
    },
    postProcessToken: (token, suggestedString) => YASQE.Autocompleters.properties.postProcessToken(yasqe, token, suggestedString),
  };

  completer.bulk = true;
  completer.async = false;
  completer.autoShow = true;

  completer.persistent = false;
  completer.get = () => services;

  return completer;
};

YASQE.registerAutocompleter('customServicesCompleter', customServicesCompleter);
