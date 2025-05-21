import { useCards } from './useCards';
import { useButtons } from './useButtons';
import { useForms } from './useForms';

export function useComponentGroups() {
  const cards = useCards();
  const buttons = useButtons();
  const forms = useForms();
  return {
    Cards: cards,
    Buttons: buttons,
    Forms: forms,
  };
}
