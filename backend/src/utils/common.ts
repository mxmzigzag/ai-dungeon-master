
function parseStringWithParams(url: string, params?: Record<string, string>): string {
  if (!params) {
    return url;
  }

  const keys = Object.keys(params);
  let route = url;
  for (const key of keys) {
    route = route.replace(`{{${key}}}`, encodeURIComponent(String(params[key])));
  }

  return route;
}

function parseGPTJson(response: string) {
  // Remove Markdown code fences like ```json ... ```
  const match = response.match(/```(?:json)?([\s\S]*?)```/i);
  const jsonText = match ? match[1].trim() : response.trim();

  try {
    return JSON.parse(jsonText);
  } catch (err) {
    console.error("❌ Failed to parse JSON:", err);
    console.log("Response content:", jsonText);
    return null;
  }
}


export { parseStringWithParams, parseGPTJson };