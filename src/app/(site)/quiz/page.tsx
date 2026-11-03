import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Where to start' };

/** The questionnaire is an empty frame in the 10/31 handoff; this keeps its plum page and route in place. */
export default function QuizPage() {
  return <div className="plum quiz" aria-label="Questionnaire" />;
}
