const SocialButtons = () => {
  return (
    <div className="flex space-x-6 mt-8">
      <a
        href="https://www.linkedin.com/in/seu-usuario"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
        aria-label="LinkedIn"
      >
        {/* Ícone LinkedIn */}
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M4.98 3.5C4.98 5 3.5 5 3.5 5s0-1.5 1.48-1.5zM4 6h2v12H4V6zm7-1h2v2h.03c.28-.5 1-1.03 2.06-1.03 2.2 0 2.6 1.44 2.6 3.3V17h-2v-4.5c0-1.1-.4-1.8-1.4-1.8-.77 0-1.23.52-1.43 1.02-.07.17-.09.4-.09.64V17h-2V5z"/>
        </svg>
      </a>

      <a
        href="https://www.instagram.com/seu-usuario"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-800 transition-colors"
        aria-label="Instagram"
      >
        {/* Ícone Instagram */}
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7.75 2h8.5C19.55 2 22 4.46 22 7.75v8.5c0 3.29-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.54 2 16.25v-8.5C2 4.46 4.45 2 7.75 2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm4.5-1.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
      </a>

      <a
        href="https://github.com/seu-usuario"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-900 transition-colors"
        aria-label="GitHub"
      >
        {/* Ícone GitHub */}
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.5v-1.78c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.54 2.35 1.1 2.92.84.09-.65.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.93 0-1.08.38-1.97 1-2.66-.1-.25-.44-1.27.1-2.66 0 0 .82-.26 2.7 1a9.42 9.42 0 0 1 4.9 0c1.88-1.26 2.7-1 2.7-1 .54 1.39.2 2.41.1 2.66.63.7 1 1.58 1 2.66 0 3.82-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .28.16.6.67.5A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
        </svg>
      </a>
    </div>
  );
};

export default SocialButtons;
