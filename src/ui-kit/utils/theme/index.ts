export const ProjectThemes: { [key: string]: string } = {
  default: 'project_theme_default',
};

export const initProjectTheme = (): void => {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add(ProjectThemes.default);
  });
};
