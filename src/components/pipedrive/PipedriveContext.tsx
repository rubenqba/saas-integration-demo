import { getPipedriveContacts } from "@action/pipedrive";
import { CrmContact } from "@model/crm";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import toast from "react-hot-toast";

interface CrmContextProps {
  isLoading: boolean;
  reloadContacts: (connection: string) => void;
  contacts: CrmContact[];
}

const ModalContext = createContext<CrmContextProps | undefined>(undefined);

export const PipedriveProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<CrmContact[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const reload = useCallback(async (connection: string) => {
    setLoading(true);
    const { data, error } = await getPipedriveContacts(connection);
    if (error) {
      toast.error(error);
    } else {
      setContacts(data ?? []);
    }
    setLoading(false);
  }, []);

  return (
    <ModalContext.Provider value={{ isLoading: loading, reloadContacts: reload, contacts }}>
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
