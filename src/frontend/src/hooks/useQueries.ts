import { useMutation } from "@tanstack/react-query";
import type { Inquiry } from "../backend.d";
import { useActor } from "./useActor";

export function useSubmitInquiry() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (inquiry: Inquiry) => {
      if (!actor) throw new Error("Actor not ready");
      await actor.submitInquiry(inquiry);
    },
  });
}
