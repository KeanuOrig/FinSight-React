/// <reference types="vite/client" />

declare namespace NodeJS {
    interface ProcessEnv {
      REACT_API_BASE_URL: string;
    }
}