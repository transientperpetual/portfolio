"use client";
import { useEffect, useState } from "react";

// List of universe images and their matching phrases
const universeOptions = [
  { image: "/universes/uni1.webp", label: "legally licensed" },
  // { image: "/universes/uni2.webp", label: "not anymore" },
  { image: "/universes/uni3.webp", label: "first 1/2 marathon" },
  { image: "/universes/uni5.webp", label: "water proof" },
  // { image: "/universes/uni6.webp", label: "weaponizedd" },
  { image: "/universes/uni7.webp", label: "graduation team" },
];

const defaultState = {
  image: "/profile.jpeg",
  label: "change universe",
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function UniverseProfile() {
  const [current, setCurrent] = useState(defaultState);
  const [queue, setQueue] = useState<typeof universeOptions>([]);
  const [lastUsed, setLastUsed] = useState<typeof defaultState | null>(null);

  useEffect(() => {
    // Initialize queue with all options except the current one
    const filteredOptions = universeOptions.filter(
      (option) => option.image !== current.image
    );
    setQueue(shuffleArray(filteredOptions));
  }, []);

  const changeUniverse = () => {
    if (queue.length === 0) {
      // When queue is empty, refill it with all options except the current one
      const filteredOptions = universeOptions.filter(
        (option) => option.image !== current.image
      );
      setQueue(shuffleArray(filteredOptions));
    }

    // Get the next item from the queue
    const [next, ...restQueue] = queue;

    // Update current and last used states
    setLastUsed(current);
    setCurrent(next || defaultState); // Fallback to default if queue is empty

    // Update queue
    if (restQueue.length === 0) {
      // Refill queue with all options except the newly selected one
      const filteredOptions = universeOptions.filter(
        (option) => option.image !== next.image
      );
      setQueue(shuffleArray(filteredOptions));
    } else {
      setQueue(restQueue);
    }
  };

  return (
    <div className="flex-col items-center order-1 select-none md:flex md:order-2">
      <img
        src={current.image}
        alt="Ankit Jangid"
        className="object-cover w-56 h-56 transition duration-300 ease-in-out md:w-56 md:h-56 rounded-t-2xl"
      />

      <div
        className="flex justify-center gap-2 cursor-pointer hover:underline"
        onClick={changeUniverse}
      >
        <span className="pt-2 text-[#575656]">{current.label}</span>
        <span className="pt-2 text-[#575656]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.308 20.308L3 16l4.308-4.308l.713.708l-3.1 3.1H20v1H4.921l3.1 3.1zm9.384-8l-.713-.708l3.1-3.1H4v-1h15.079l-3.1-3.1l.713-.708L21 8z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
