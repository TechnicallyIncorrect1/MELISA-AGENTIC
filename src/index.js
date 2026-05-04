export default {
  async fetch(request, env) {
    return new Response("🚀 MELISA-AGENTIC is Online and Ready", {
      status: 200,
      headers: { "Content-Type": "text/plain" }
    });
  }
}
