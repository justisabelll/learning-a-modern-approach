import Image from 'next/image';

interface Message {
  text: string;
  from: string;
}

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
      <div className="">
        <div className="p-2 rounded-md border">
          {fakeMessages.map((message) => (
            <Message
              key={message.text}
              from={message.from}
              text={message.text}
            />
          ))}
        </div>
        <ChatInput />
      </div>
    </main>
  );
}

const Message = ({ text, from }: Message) => {
  // it kinda looks cool if you remove the flex
  return (
    <div
      className={`flex flex-col ${from === 'ai' ? 'items-start' : 'items-end'}`}
    >
      <div
        className={`p-2 rounded-xl border ${
          from === 'ai' ? 'bg-gray-100' : 'bg-violet-00'
        }`}
      >
        {text}
      </div>
      <div className="text-xs text-gray-500  ">
        {from === 'user' ? 'you' : from}
      </div>
    </div>
  );
};

const ChatInput = () => {
  return (
    <div className="flex items-center gap-2 py-2 ">
      <textarea className="p-2 rounded-md border min-h-[4rem] max-h-56 resize-none overflow-auto w-full" />
      <button className=" border rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 h-full ">
        Send
      </button>
    </div>
  );
};

const ChapterRadioGroup = () => {
  return (
    <div className="flex gap-2 mb-2">
      <div>
        <div className="flex items-center gap-1">
          <input type="radio" name="chapter" />
          <label>Chapter 1</label>
        </div>
        <div className="flex items-center gap-1">
          <input type="radio" name="chapter" />
          <label>Chapter 2</label>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1">
          <input type="radio" name="chapter" />
          <label>Chapter 3</label>
        </div>
        <div className="flex items-center gap-1">
          <input type="radio" name="chapter" />
          <label>Chapter 4</label>
        </div>
      </div>
    </div>
  );
};

const Divider = () => {
  return (
    <div className="relative mt-4">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-sm text-gray-500"></span>
      </div>
    </div>
  );
};
