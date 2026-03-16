import '@testing-library/jest-dom';
import { beforeEach, vi } from 'vitest';

beforeEach(() => {

    const matchMediaMock = vi.fn().mockImplementation((query) => ({
        matches: false,
        mediia: query,
        onchange: null,
        addListenr: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    }));

    const computedStyleMock = vi.fn().mockImplementation(() => ({
        
    }))

    vi.stubGlobal('matchMedia', matchMediaMock);
    vi.stubGlobal('computedStyle', computedStyleMock);
});