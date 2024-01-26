'use client';

import { useState } from 'react';
import { useChat } from 'ai/react';
import { Send } from 'lucide-react';
import { v4 as uuid } from 'uuid';
import type { Message } from 'ai/react';

const fakeMessages = [
  {
    content: 'Hello',
    role: 'user',
    id: '1',
  },
  {
    content:
      "Hi, I'm a chatbot you can ask questions about about the Artificial Intelligence: A Modern Approach book.",
    role: 'assistant',
    id: '2',
  },
  {
    content: 'What is the book about?',
    role: 'user',
    id: '3',
  },
  {
    content: 'The book is about Artificial Intelligence.',
    role: 'assistant',
    id: '4',
  },
];

const firstMessage = [
  {
    content:
      "Hi, I'm a chatbot you can ask questions about about the Artificial Intelligence: A Modern Approach book.",
    role: 'assistant',
    id: '1',
  },
] as Message[];

export const Chat = () => {
  const { messages, input, setInput, handleSubmit } = useChat({
    initialMessages: firstMessage,
    onResponse: () => {
      setIsLoading(false);
    },
    api: 'api/chat',
  });

  const submissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  const [isLoading, setIsLoading] = useState(false);

  // it looks cool with no flex
  return (
    <>
      {messages.length > 0 && (
        <div className="p-2 rounded-md border">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex flex-col p-2 ${
                message.role === 'assistant' ? 'items-start' : 'items-end'
              }`}
            >
              <div
                className={`p-2 rounded-xl border ${
                  message.role === 'assistant' ? 'bg-gray-100' : 'bg-violet-00'
                }`}
              >
                <p className="leading-6">{message.content}</p>
              </div>
              <div className="text-xs text-gray-500">
                {message.role === 'user' ? 'you' : 'ai'}
              </div>
            </div>
          ))}
          {isLoading ? <AnimatedDots /> : null}
        </div>
      )}

      <div className="items-center py-2 w-full">
        <form className="flex gap-2" onSubmit={submissionHandler}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="p-2 rounded-md border min-h-[6rem] max-h-56 resize-none overflow-auto w-full"
          />
          <button
            disabled={isLoading}
            type="submit"
            className="p-2 border rounded-md bg-black text-sm font-semibold text-white shadow-sm disabled:bg-gray-300 hover:bg-zinc-800"
          >
            <Send size={26} className="" />
          </button>
        </form>
      </div>
    </>
  );
};

const AnimatedDots = () => {
  return (
    <div className="flex gap-1 p-1 mt-2">
      <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
      <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
      <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
    </div>
  );
};

export const ChapterRadioGroup = () => {
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
