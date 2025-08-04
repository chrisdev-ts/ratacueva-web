export const checkTokenValidity = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  return !!token;
};

export const clearAuthData = () => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  localStorage.removeItem('checkoutData'); // También limpiar datos del checkout
  localStorage.removeItem('redirectAfterLogin');
};

export const isAuthenticated = (): boolean => {
  return checkTokenValidity();
};

export const redirectToLogin = (currentPath?: string) => {
  if (typeof window === 'undefined') return;
  
  // Guardar la ruta actual para redirigir después del login
  if (currentPath && currentPath !== '/auth/login' && !currentPath.startsWith('/auth/')) {
    localStorage.setItem('redirectAfterLogin', currentPath);
  }
  
  // Limpiar datos de auth
  clearAuthData();
  
  // Redirigir al login
  window.location.href = '/auth/login';
};