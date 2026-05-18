async function requestAnthropicHtml({ apiKey, promptBundle, systemPrompt, model }) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model,
      max_tokens: 8000,
      temperature: 0.3,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: promptBundle
        }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(`Anthropic request failed with status ${response.status}: ${await response.text()}`);
  }

  const data = await response.json();
  const parts = Array.isArray(data.content) ? data.content : [];
  const html = parts
    .filter((part) => part.type === 'text')
    .map((part) => part.text)
    .join('')
    .trim();

  if (!html) {
    throw new Error('Anthropic response did not include text content.');
  }

  return html;
}

export { requestAnthropicHtml };