export const handleScrollOrNavigate = (targetId, navigate, currentPath) => {
    if (currentPath === '/' || currentPath === '') {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/${targetId}`);
    }
  };
  