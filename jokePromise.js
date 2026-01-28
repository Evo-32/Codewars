async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data || !Array.isArray(data.jokes)) {
    return Promise.reject(
      new Error(`No jokes at url: ${apiUrl}`)
    );
  }

  const foundJoke = data.jokes.find(j => j.id === jokeId);

  if (!foundJoke) {
    return Promise.reject(
      new Error(`No jokes found id: ${jokeId}`)
    );
  }

  return {
    saySetup() {
      return foundJoke.setup;
    },
    sayPunchLine() {
      return foundJoke.punchLine;
    }
  };
}