"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import Toast from '@/components/atoms/Toast';

export interface FavoriteItem {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  category: string;
}

interface FavoritesContextType {
  items: FavoriteItem[];
  addToFavorites: (product: FavoriteItem) => void;
  removeFromFavorites: (productId: string) => void;
  isInFavorites: (productId: string) => boolean;
  clearFavorites: () => void;
  getFavoritesCount: () => number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<FavoriteItem[]>([]);
  const [toast, setToast] = useState({ isVisible: false, message: '' });

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      try {
        setItems(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Error loading favorites from localStorage:', error);
        localStorage.removeItem('favorites');
      }
    }
  }, []);

  // Save favorites to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(items));
  }, [items]);

  const addToFavorites = (product: FavoriteItem) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // If item already exists in favorites, remove it
        const updatedItems = prevItems.filter(item => item.id !== product.id);
        setToast({ isVisible: true, message: `"${product.name}" removido de favoritos` });
        return updatedItems;
      } else {
        // If item doesn't exist, add it
        setToast({ isVisible: true, message: `"${product.name}" agregado a favoritos` });
        return [...prevItems, product];
      }
    });
  };

  const removeFromFavorites = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const isInFavorites = (productId: string) => {
    return items.some(item => item.id === productId);
  };

  const clearFavorites = () => {
    setItems([]);
  };

  const getFavoritesCount = () => {
    return items.length;
  };

  const value: FavoritesContextType = {
    items,
    addToFavorites,
    removeFromFavorites,
    isInFavorites,
    clearFavorites,
    getFavoritesCount,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={() => setToast({ isVisible: false, message: '' })}
        type="info"
      />
    </FavoritesContext.Provider>
  );
}; 