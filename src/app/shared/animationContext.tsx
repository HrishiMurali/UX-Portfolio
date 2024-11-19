import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the context value
interface AnimationContextType {
  shouldShowAnimation: boolean;
  toggleAnimation: () => void;
}

// 1. Create Context with the type definition
const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

// 2. Provider Component
interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({
  children,
}) => {
  const [shouldShowAnimation, setShouldShowAnimation] = useState<boolean>(true);

  const toggleAnimation = () => {
    setShouldShowAnimation((prev) => !prev);
  };

  return (
    <AnimationContext.Provider value={{ shouldShowAnimation, toggleAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

// 3. Custom Hook for using the context
export const useAnimation = (): AnimationContextType => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};
