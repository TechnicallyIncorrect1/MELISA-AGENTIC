export default {
  async fetch(request, env) {
    return new Response("🚀 MELISA-AGENTIC Cyber Defense System Online", {
      status: 200,
      headers: { "Content-Type": "text/plain" }
    });
  }
}
