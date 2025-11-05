'use client';

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body style={{padding: 24, fontFamily: 'sans-serif'}}>
        <h2>Something went wrong</h2>
        <p><strong>Message:</strong> {error?.message}</p>
        {error?.digest && <p><strong>Digest:</strong> {error.digest}</p>}
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
