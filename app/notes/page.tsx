import { fetchNotes } from "@/lib/api";
import { QueryClient } from "@tanstack/react-query";
import Notes from "./Notes.client";

const Note = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
      queryKey: ["notes"],
      queryFn: () => fetchNotes,
  });

  return <Notes />  
};

export default Note;