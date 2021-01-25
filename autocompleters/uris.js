const uris = [
  'https://www.glaciersinarchives.org/landform/',
  'https://www.glaciersinarchives.org/record/',
  'https://www.glaciersinarchives.org/id/type/photograph',
  'https://www.glaciersinarchives.org/id/agent/person',
  'https://www.glaciersinarchives.org/id/agent/machine',
  'https://www.glaciersinarchives.org/id/type/work',
  'https://www.glaciersinarchives.org/id/type/painting',
  'https://www.glaciersinarchives.org/id/type/map',
  'https://www.glaciersinarchives.org/id/type/aerial-photograph',
  'https://www.glaciersinarchives.org/id/type/stereoscopic-photograph',
];

const customUrisCompleter = function(yasqe) {
  let completer = {
    isValidCompletionPosition: () => {
      const token = yasqe.getCompleteToken();
      const cur = yasqe.getCursor();
      const previousToken = yasqe.getPreviousNonWsToken(cur.line, token);
      if (previousToken.string == 'SERVICE') return false;
      if (token.string.startsWith('<')) return true;
    },
    preProcessToken: (token) => YASQE.Autocompleters.properties.preProcessToken(yasqe, token),
    postProcessToken: (token, suggestedString) => {
      // reusing the built in function as it handles namespaces.
      return YASQE.Autocompleters.properties.postProcessToken(yasqe, token, suggestedString).replace('>', '')
    }
  };

  completer.bulk = true;
  completer.async = false;
  completer.autoShow = true;

  completer.persistent = false;
  completer.get = () => uris;

  return completer;
};

YASQE.registerAutocompleter('customUrisCompleter', customUrisCompleter);
