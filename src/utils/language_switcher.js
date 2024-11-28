export function getNewLanguageUrl(newLangTag) {
  const currentPath = window.location.pathname;
  if (currentPath.includes('/ru') || currentPath.includes('/en')) {
    return `/${newLangTag}/${currentPath.split('/').slice(2).join('/')}`;
  }
  return `/${newLangTag}${currentPath}`;
}
