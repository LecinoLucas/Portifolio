import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

// jsdom não implementa matchMedia — stub mínimo para hooks de tema/motion.
if (!window.matchMedia) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

// jsdom não implementa IntersectionObserver — usado por Reveal / ScrollSpy.
if (!window.IntersectionObserver) {
  class IntersectionObserverFalso {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
    takeRecords = vi.fn().mockReturnValue([]);
    root = null;
    rootMargin = "";
    thresholds = [];
  }
  window.IntersectionObserver =
    IntersectionObserverFalso as unknown as typeof IntersectionObserver;
}

// jsdom não implementa scrollTo
window.scrollTo = vi.fn();
