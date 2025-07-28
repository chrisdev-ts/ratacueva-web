
export async function GET() {
  return new Response(JSON.stringify({ message: 'Orders endpoint' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}