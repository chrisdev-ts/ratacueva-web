"use client";
import { Component, ReactNode } from "react";
import { BodySmall } from "@/components/atoms/Typography";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="text-red-400 text-6xl mb-4">⚠️</div>
          <BodySmall className="text-placeholder mb-2">
            Algo salió mal al cargar los productos
          </BodySmall>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Intentar de nuevo
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
