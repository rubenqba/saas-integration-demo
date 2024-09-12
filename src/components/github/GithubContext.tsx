import { getGithubRepositories } from "@action/github";
import { GithubRepository } from "@model/github";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import toast from "react-hot-toast";

interface GithubContextProps {
  reloadRepositories: () => void;
  repositories: GithubRepository[];
}

const ModalContext = createContext<GithubContextProps | undefined>(undefined);

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const [repositories, setRepositories] = useState<GithubRepository[]>([]);

  const reload = useCallback(async () => {
    const { data, error } = await getGithubRepositories();
    if (error) {
      toast.error(error);
      return;
    }
    setRepositories(data ?? []);
  }, []);
  // useEffect(() => {
  //   const fetchTeams = async () => {
  //     const { data } = await getAllTeams();
  //     setTeams(data ?? []);
  //   };
  //   fetchTeams();
  // }, []);

  return (
    <ModalContext.Provider value={{ reloadRepositories: reload, repositories }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useGithubProvider = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("must be used within a GithubProvider");
  }
  return context;
};
