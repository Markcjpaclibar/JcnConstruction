"use client";

import { CheckCircle2 } from "lucide-react";

interface SuccessAlertProps {
  message: string;
}

export default function SuccessAlert({
  message,
}: SuccessAlertProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800 shadow-sm">

      <CheckCircle2
        size={22}
        className="text-green-600"
      />

      <span className="font-medium">
        {message}
      </span>

    </div>
  );
}