const classes = [
  'https://schema.org/Landform',
  'https://schema.org/CreativeWork',
  'http://www.w3.org/ns/oa#Annotation',
  'http://www.w3.org/ns/activitystreams#Person',
  'http://www.w3.org/2004/02/skos/core#Concept',
  'http://www.w3.org/ns/activitystreams#Application',
];

const customClassCompleter = function(yasqe) {
  let completer = {
    isValidCompletionPosition: () =>  YASQE.Autocompleters.classes.isValidCompletionPosition(yasqe),
    preProcessToken: (token) => YASQE.Autocompleters.classes.preProcessToken(yasqe, token),
    postProcessToken: (token, suggestedString) => YASQE.Autocompleters.classes.postProcessToken(yasqe, token, suggestedString),
  };

  completer.bulk = true;
  completer.async = false;
  completer.autoShow = true;

  completer.persistent = false;
  completer.get = () => classes;

  return completer;
};

YASQE.registerAutocompleter('customClassCompleter', customClassCompleter);
