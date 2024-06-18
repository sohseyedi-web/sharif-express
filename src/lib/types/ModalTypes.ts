export type ModalType = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};
