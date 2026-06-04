import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export function getAgentModel() {
  const provider = createOpenRouter({ apiKey: process.env.OPENROUTER_API_KEY });

  const model_Id = process.env.OPENROUTER_DEFAULT_MODEL;
  if (!model_Id) throw new Error("OPENROUTER_DEFAULT_MODEL is required");
  return provider(model_Id);
}