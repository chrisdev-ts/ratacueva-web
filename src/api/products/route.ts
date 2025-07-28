
export async function GET() {
  return new Response(JSON.stringify({ message: 'Products endpoint' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}