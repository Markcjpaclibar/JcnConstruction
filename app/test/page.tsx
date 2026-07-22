"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/lib/projects";

export default function TestPage() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getProjects();
      console.log(data);
      setProjects(data);
    }

    load();
  }, []);

  return (
    <main className="p-10">
      <pre>{JSON.stringify(projects, null, 2)}</pre>
    </main>
  );
}