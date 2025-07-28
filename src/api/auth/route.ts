
export async function GET() {
  return new Response(JSON.stringify({ message: 'Auth endpoint' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
