import { useCards } from './useCards';
import { useButtons } from './useButtons';
import { useForms } from './useForms';
import { useModals } from './useModals';
import { useTables } from './useTables';

export function useComponentGroups() {
  const cards = useCards();
  const buttons = useButtons();
  const forms = useForms();
  const modals = useModals();
  const tables = useTables();
  return {
    Cards: cards,
    Buttons: buttons,
    Forms: forms,
    Modals: modals,
    Tables: tables,
  };
}
