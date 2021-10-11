export const ProjectThemes = {
  default: 'ci_server_theme_default',
};

export const initProjectTheme = (): void => {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add(ProjectThemes.default);
  });
};
