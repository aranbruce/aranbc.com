"use client";

import React, { Component, ReactNode } from "react";

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
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 p-8 text-center">
            <h2 className="text-foreground font-semibold">
              Something went wrong
            </h2>
            <p className="text-secondary-foreground">
              An error occurred while loading this content.
            </p>
            <button
              onClick={() =>
                this.setState({ hasError: false, error: undefined })
              }
              className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-md px-4 py-2 transition"
            >
              Try again
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
