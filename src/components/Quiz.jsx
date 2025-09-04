export default function Quiz({ q, qNumber, total, onNext, onSelect, isLast }) {
  if (!q) return null;

  return (
    <div className="rounded-2xl shadow p-6 space-y-4 border">
      <div className="text-sm opacity-70">
        Question {qNumber} / {total}
      </div>
      <h2 className="text-xl font-semibold">{q.question}</h2>

      <ul className="space-y-2">
        {q.options.map((opt, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => onSelect(i)}
              className="w-full text-left rounded-xl border p-3 hover:bg-black/5"
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>

      <div className="pt-2">
        <button
          type="button"
          onClick={onNext}
          className="rounded-xl border px-4 py-2 hover:bg-black/5"
        >
          {isLast ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}