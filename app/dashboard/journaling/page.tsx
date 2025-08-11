"use client";
import { useState } from "react";

export default function JournalingPage() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState<string[]>(["Today I felt grateful for my friends.", "I managed my anxiety well during work."]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (entry.trim()) {
      setEntries([entry, ...entries]);
      setEntry("");
    }
  };

  const openModal = (entry: string) => {
    setSelectedEntry(entry);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedEntry(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 py-10 px-4 pt-24">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-xl p-8 mb-10">
          <h1 className="text-3xl font-bold mb-4 text-purple-700 dark:text-purple-300">Journaling</h1>
          <form onSubmit={handleSubmit} className="mb-6">
            <textarea
              className="w-full p-4 rounded-lg border border-primary/20 bg-purple-50 dark:bg-zinc-800 focus:ring-2 focus:ring-primary mb-3 text-black dark:text-white"
              rows={4}
              placeholder="Write your thoughts..."
              value={entry}
              onChange={e => setEntry(e.target.value)}
            />
            <button type="submit" className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow hover:from-purple-600 hover:to-blue-600 transition">
              Add Entry
            </button>
          </form>
        </div>
        <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow p-6">
          <h2 className="font-semibold text-lg mb-4 text-purple-600 dark:text-purple-200">Previous Entries</h2>
          <div className="max-h-64 overflow-y-auto space-y-3">
            {entries.map((e, i) => (
              <button key={i} className="w-full text-left bg-purple-100/60 dark:bg-zinc-800 p-4 rounded-lg shadow-sm hover:bg-purple-200 dark:hover:bg-zinc-700 transition text-black dark:text-white" onClick={() => openModal(e)}>
                {e.length > 60 ? e.slice(0, 60) + "..." : e}
              </button>
            ))}
          </div>
        </div>
        {/* Modal for reading entry */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-8 max-w-lg w-full relative">
              <button className="absolute top-2 right-2 text-xl" onClick={closeModal}>&times;</button>
              <h2 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">Journal Entry</h2>
              <div className="whitespace-pre-line text-gray-800 dark:text-gray-100">{selectedEntry}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}