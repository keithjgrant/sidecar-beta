import React from 'react';
import { Link } from 'gatsby';
import IndexLayout from '../components/layouts/IndexLayout';

export default function DevelPage() {
  return (
    <IndexLayout title="Test">
      <p>
        Dev testing. You’re not supposed to be here.{' '}
        <Link to="/">Back to home</Link>
      </p>
      <div>
        <button type="button" onClick={() => window.navigator.vibrate(25)}>
          25ms
        </button>
        <button type="button" onClick={() => window.navigator.vibrate(50)}>
          50ms
        </button>
        <button type="button" onClick={() => window.navigator.vibrate(100)}>
          100ms
        </button>
        <button type="button" onClick={() => window.navigator.vibrate(200)}>
          200ms
        </button>
      </div>
    </IndexLayout>
  );
}
