import Together from "together-ai";

// Initialize the Together client with proper options object
const together = new Together({
  apiKey: process.env.NEXT_PUBLIC_TOGETHER_AI_API_KEY
});

export async function POST(request: Request) {
  const { question } = await request.json();

  const res = await together.chat.completions.create({
    model: "thebiscuit1/Llama-3.3-70B-32k-Instruct-Reference-ex314-ft-p1-round3-0daf7fe8", // Your fine-tuned model name
    messages: [{ role: "user", content: question }],
    stream: true,
  });

  return new Response(res.toReadableStream());
}
