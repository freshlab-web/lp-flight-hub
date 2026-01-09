import React, { createContext, useContext, useState, ReactNode } from 'react';
import ContactDialog from '@/components/ContactDialog';

interface ContactModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      <ContactDialog open={isOpen} onOpenChange={setIsOpen} />
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};
