import { getGithubRepositories } from "@action/github";
import { getPipedriveContacts } from "@action/pipedrive";
import { GithubRepository } from "@model/github";
import { PipedriveContact } from "@model/pipedrive";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import toast from "react-hot-toast";

interface GithubContextProps {
  reloadContacts: () => void;
  contacts: PipedriveContact[];
}

const ModalContext = createContext<GithubContextProps | undefined>(undefined);

export const PipedriveProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<PipedriveContact[]>([]);

  const reload = useCallback(async () => {
    const { data, error } = await getPipedriveContacts();
    if (error) {
      toast.error(error);
      return;
    }
    setContacts(data ?? []);
  }, []);
  
  return (
    <ModalContext.Provider value={{ reloadContacts: reload, contacts }}>
      {children}
    </ModalContext.Provider>
  );
};

export const usePipedriveProvider = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("must be used within a PipedriveProvider");
  }
  return context;
};
