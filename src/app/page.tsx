import { Chat, ChapterRadioGroup } from '@/components/chat-related';

const fakeMessages = [
  {
    text: 'Hello',
    from: 'user',
  },
  {
    text: "Hi, I'm a chatbot you can ask questions about about the Artificial Intelligence: A Modern Approach book.",
    from: 'ai',
  },
  {
    text: 'What is the book about?',
    from: 'user',
  },
  {
    text: 'The book is about Artificial Intelligence.',
    from: 'ai',
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <main className="min-h-screen flex-col items-center p-24">
          <div className="py-2 text-center">
            <h1 className="text-3xl ">Learning, A Modern Approach</h1>
            <h2 className="text-sm">
              Chat about the{' '}
              <a
                className="underline underline-offset-1 text-blue-500"
                href="https://aima.cs.berkeley.edu/"
              >
                Artifical Intelligence: A Modern Approach Textbook
              </a>
            </h2>
          </div>
          <ChapterRadioGroup />
          <Chat />
        </main>
      </div>
    </div>
  );
}
